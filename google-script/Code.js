var PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\n[REDACTED]]\n-----END PRIVATE KEY-----\n';
var CLIENT_EMAIL = 'service-account-datastore@[project-id].iam.gserviceaccount.com';
var SCOPES = [
  "https://www.googleapis.com/auth/cloud-platform",
  "https://www.googleapis.com/auth/datastore"
];

var datastore = null;

function test() {
}

function main() {
  var voucher = getVoucherFromCoupon();
  saveToDb(voucher);
}

function simpleMain() {
  var voucher = getVoucherFromRedirect();
  saveToDb(voucher);
}

function newGenMain() {
  var voucher = getVoucherFromApi();
  Logger.log(voucher);
  saveToDb(voucher);
}

function getVoucherFromApi() {
  var url = 'https://survey.fast-insight.com/mcd/cz/coupon_new.php';
  var response = UrlFetchApp.fetch(url);
  var code = response.getContentText();
  var cleaned = code.match(/^\s*([AB0-9]{12})\s*$/);

  if(typeof cleaned[1] !== "string") {
    throw new Error('Promo kód nenalezen');
  }
  var cleaned = cleaned[1].replace(/(.{4})(.{4})(.{4})/, "$1-$2-$3");
  
  var expires = new Date();
  expires.setDate(expires.getDate() + 8);
  
  var voucher = {
    code: cleaned,
    expires: expires,
    isValid: /[A-B0-9]{4}-[A-B0-9]{4}-[A-B0-9]{4}/i.test(cleaned),
    method: 'api',
  };
  
  return voucher;
}


function getVoucherFromRedirect() {
  var response = UrlFetchApp.fetch('https://survey.fast-insight.com/mcd/cz/coupon.php', {
    followRedirects: false,
    muteHttpExceptions: true,
  });
  
  var headers = response.getHeaders();
  if(!headers.Location) {
    throw new Error('Neproběhlo přesměrování - nelze načíst kupón');
  }
  
  var matches = headers.Location.match(/promocode=([-A-B0-9]+)/);
  if(!matches[1]) {
    throw new Error('Promo kód nenalezen');
  }
  
  var expires = new Date();
  expires.setDate(expires.getDate() + 7);
  
  var voucher = {
    code: matches[1],
    expires: expires,
    isValid: /[A-B0-9]{4}-[A-B0-9]{4}-[A-B0-9]{4}/i.test(matches[1]),
    method: 'redirect-header',
  };
  
  Logger.log("Done");
  return voucher;
}

function getVoucherFromCoupon() {
  var response = getVoucherResponse();
  var html = getVoucherHtml(response);
  DriveApp.createFile('mcdonald.html', html, 'text/html');
  var voucher = parseVoucherHtml(html);
  return voucher;
}

function getVoucherResponse() {
  Logger.log("Fetching voucher from McDonald's");
  var url="https://survey.fast-insight.com/mcd/cz/coupon.php";
  var params = {
    method: "post",
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
      "Accept-Language": "cs,en-US;q=0.8,en;q=0.6",
    },
    payload: {
      "lang": "cs",
      "store_id": "0013",
      "IP": "212.79.110.126",
      "browserLANG": "cs",
      "deviceType": "computer",
      "browser": "Chrome",
      "version": "58.0.3029.110",
      "platform": "Apple",
      "surveyform": "1338",
      "identifier": "cz_5908359a16848",
      "promo": "027ZVTCVF2EP",
      "posid": "01",
      "deviceAPP_ID": "undefined",
      "submit": "ZÍSKAT ODMĚNU",
    }
  };
  var response = UrlFetchApp.fetch(url, params);
  return response;
}

function getVoucherHtml(response) {
  Logger.log("Getting html from response");

  var html = response.getContentText();
  return html;
}

function parseVoucherHtml(html) {
  Logger.log("Parsing html for mining Voucher");

  var mask = new RegExp("https://survey.fast-insight.com/mcd/cz/coupon_pdf\\.php\\?couponcode=([-A-B0-9]+)&validtodate=([-0-9]+)", "i");
  
  var matches = html.match(mask);
  
  if(!matches) {
    throw new Error("No Code inside");
  }
  
  var voucher = {
    code: matches[1],
    expires: parseDate(matches[2]),
    isValid: /[A-B0-9]{4}-[A-B0-9]{4}-[A-B0-9]{4}/i.test(matches[1]),
    method: 'coupon-html',
  };
  
  Logger.log(voucher);
  return voucher;
}

function parseDate(dateString) {
  var returnedDateString = dateString.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1');
  var date = new Date(returnedDateString);
  return date;
}

function saveToDb(voucher) {
  var payload = {
    "mutations": [
      {
        "insert": {
          "key": {
            "path": [
              {
                "kind": "voucher"
              }
            ]
          },
          "properties": {
            "code": {
              "stringValue": voucher.code
            },
            "expires": {
              "timestampValue": voucher.expires.toISOString()
            },
            "created": {
              "timestampValue": (new Date()).toISOString()
            },
            "used": {
              "nullValue": null
            },
            "isValid": {
              "booleanValue": voucher.isValid
            },
            "method": {
              "stringValue": voucher.method
            }
            
          }
        }
      }
    ],
    "mode": "NON_TRANSACTIONAL"
  };
  var result = executeDatastore('commit', payload);
  Logger.log(JSON.stringify(voucher, null, 2));
}

function updateAll() {

  var pagingStatus = "NOT_FINISHED";
  var endCursor = null;
  
  var j = 1;
  var k = 1;

  while(pagingStatus == "NOT_FINISHED") {
    Logger.log("Loading next batch, round %s", j++);
    var batch = loadFromDb(endCursor);
    var results = getResultsFromBatch(batch);
    var count = results.length;
    
    Logger.log("Processing %s items", count);
    for(var i in results) {
      k++;
      var result = results[i];
      
      if(result.entity.properties.used) {
      //do nothing
      }
      else {
        updateEntity(result.entity, k);
      }
    }
    
    pagingStatus = batch.moreResults;
    endCursor = batch.endCursor;
  }
}

function getResultsFromBatch(batch) {
  return batch.entityResults;
}

function updateEntity(entity, number) {
  var id = entity.key.path[0].id;
  Logger.log("Processing item ID: %s (%s. item)", id, number);

  entity.properties.used = {
    "nullValue": null
  };
  
  var payload = {
    "mutations": [
      {
        "update": entity
      }
    ],
    "mode": "NON_TRANSACTIONAL"
  };
  var result = executeDatastore('commit', payload);
  //Logger.log(JSON.stringify(result, null, 2));
  return result;
}

function loadFromDb(startCursor) {
  var payload = {
    "query": {
      "kind": [
        {
          "name": "voucher"
        }
      ],
      limit: 500,
    }
  };
  
  if(startCursor) {
    payload.query.startCursor = startCursor;
  }
  var result = executeDatastore('runQuery', payload);
  //Logger.log(JSON.stringify(result, null, 2));
  return result.batch;
}

function loadOneFromDb() {
  var maxExpiry = new Date()
  maxExpiry.setDate(maxExpiry.getDate()+3);

  var payload = {
      "query": {
        "kind": [
          {
            "name": "voucher"
          }
        ],
        "limit": 1,
        "filter": {
          "compositeFilter": {
            "filters": [
              {
                "propertyFilter": {
                  "property": {
                    "name": "isValid"
                  },
                  "op": "EQUAL",
                  "value": {
                    "booleanValue": true
                  }
                }
              },
              {
                "propertyFilter": {
                  "property": {
                    "name": "used"
                  },
                  "op": "EQUAL",
                  "value": {
                    "nullValue": "NULL_VALUE"
                  }
                }
              },
              {
                "propertyFilter": {
                  "property": {
                    "name": "expires"
                  },
                  "op": "GREATER_THAN",
                  "value": {
                    "timestampValue": maxExpiry.toISOString()
                  }
                }
              }
            ],
            "op": "AND"
          }
        },
        "order": [{
          "property": {
            "name": "expires"
          },
          "direction": "ASCENDING"
        }]
      }
    };
  
  var result = executeDatastore('runQuery', payload);
  Logger.log(JSON.stringify(result, null, 2));
  if(result.batch.entityResults) {
    return result.batch.entityResults[0].entity;
  }
  return null;
}

function invalidateEntity(entity) {
  var id = entity.key.path[0].id;
  var code = entity.properties.code.stringValue;
  Logger.log("Ivalidating entity ID: %s (code: %s)", id, code);

  entity.properties.used = {
    "entityValue": {
      "properties": {
        "method": {
          "stringValue": "show"
        },
        "invalidated": {
          "timestampValue": (new Date()).toISOString()
        }
      }
    }
  };
  
  var payload = {
    "mutations": [
      {
        "update": entity
      }
    ],
    "mode": "NON_TRANSACTIONAL"
  };
  var result = executeDatastore('commit', payload);
  Logger.log(JSON.stringify(result, null, 2));
  return result;
}


function entityToCode(entity) {
  var code = {};
  Object.getOwnPropertyNames(entity.properties).forEach(function (key){
    var rawValue = entity.properties[key];
    var type = Object.getOwnPropertyNames(rawValue)[0];
    var value = entity.properties[key][type];
    switch(type) {
      case "nullValue":
        code[key] = null;
        break;
      case "booleanValue":
      case "stringValue":
      case "timestampValue":
        code[key] = value;
        break;
      default:
        new Error("Invalid type: " + type);
    }
  });
  return code;
}


// ==== WEP APP

function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
//  html.addMetaTag('viewport', 'initial-scale=1, minimum-scale=0.2');
  html.setTitle('Colu zdarma? (v2)');  
  html.setFaviconUrl("favicon.ico");
    html.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return html;
}

function getPrewiewCode() {
  var entity = loadOneFromDb();
  if(entity) {
    var code = entityToCode(entity);
    var publicCode = codeToPublic(code);
    
    //Broke code for preview only
    publicCode.code = publicCode.code.replace(/[AB\d]+$/, "XXXX");
    Logger.log(publicCode);
    
    return publicCode;
  }
  else {
    return null;
  }  
}

function getLiveCode() {
  var entity = loadOneFromDb();
  if(entity) {
    var code = entityToCode(entity);
    var publicCode = codeToPublic(code);
    
    invalidateEntity(entity);
    
    return publicCode;
  }
  else {
    return null;
  }  
}

function codeToPublic(code) {
  var expireDate = Utilities.formatDate(new Date(code.expires), "Europe/Prague", "dd-MM-yyyy");
  var public = {
    "code": code.code,
    "expires": expireDate
  };
  return public;
}

// ==== DATASTORE


function executeDatastore(method, payload) {
  Logger.log("##Executing DB method %s", method);

  var service = getDatastoreService();
  if (service.hasAccess()) {
    var url = 'https://datastore.googleapis.com/v1/projects/[project-id]:' + method;
    var response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization: 'Bearer ' + service.getAccessToken()
      },
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
    });
    var result = JSON.parse(response.getContentText());
    return result;
  } else {
    throw new Error(service.getLastError());
  }
}

function getDatastoreService() {
  if(datastore) {
    return datastore;
  }
  
  return datastore = OAuth2.createService('Datastore')
      .setTokenUrl('https://accounts.google.com/o/oauth2/token')

      .setPrivateKey(PRIVATE_KEY)
      .setIssuer(CLIENT_EMAIL)
      .setScope(SCOPES)
      
      .setPropertyStore(PropertiesService.getScriptProperties());
}