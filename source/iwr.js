			var snippet = documentRef.getSnippet(instanceID);
			if(renderer == 'design'){
				ODP.designer.currentProject = {
					layout:snippet["Layout"],
					defaultRenderer:snippet["Default Renderer"],
					enableAnimation:snippet["Enable Animation"],
					manifest:{
						description:snippet["Description"],
						image:snippet["Image"],
						icon_xp16:snippet["Icon"]
					}
				}
			}
			if(typeof ODP.ColorThemes["{4D758CFE-497F-4F80-89A2-0DDAF581D617}"] === "undefined"){
				ODP.ColorThemes["{4D758CFE-497F-4F80-89A2-0DDAF581D617}"] = snippet["Default Theme"];
			}
			return ODP.document.renderChildren(instanceID).join("");
		}}},{"com.opendataplatform.document.id":"{B86E01AF-7B7E-4D32-ACD1-C01577DBD032}","manifest":{"name":"Surveo Base Slideshow","description":"","image":"","icon_xp16":""},"parameters":[],"ui":{"render":function (instanceID, documentRef, renderer) {
			if(typeof ODP.document.queue.executionInterval === "undefined") {
				ODP.document.queue.run = function () {
		            ODP.document.queue.active = true;
		            var queue = ODP.document.queue.queue;
		            if (ODP.document.currentRenderer == "client") {
		                for (var i = 0; i < queue.length; i++) {
		                    for (var j = 0; j < queue[i].length; j++) {
		                        try {
		                            var currenItem = ODP.document.arrayToObject(queue[i][j]);
		                            snippet = ODP.document.getSnippet(currenItem[ODP.document.ID]);
		                            if (snippet) {
		                                currenItem.callback(snippet[ODP.document.ID], ODP.document, ODP.document.renderMode);
		                            } else {
		                                currenItem.callback();
		                            }

		                            ODP.document.queue.queue[i].splice(j, 1);
		                            if (ODP.document.queue.active === true) {
		                                if (typeof setTimeout == "undefined") {
		                                    ODP.document.queue.run();
		                                } else {
		                                    setTimeout(function () {
		                                        ODP.document.queue.run();
		                                    }, 0);
		                                }
		                            }
		                            return;
		                        } catch (e) {
		                            if (typeof console != "undefined") {
		                                var currentObj = ODP.document.clone_obj(currenItem);
		                                console.log("Error in ODP.document.queue function:");
		                                console.log(e);
		                                console.log("Error Object:");
		                                console.log(currenItem);
		                                console.log(currenItem.callback.toString());
		                            }
		                        }
		                    }
		                }
		            } else {
		                for (var i = 0; i < queue.length; i++) {
		                    for (var j = 0; j < queue[i].length; j++) {
		                        var currenItem = ODP.document.arrayToObject(queue[i][j]);
		                        snippet = ODP.document.getSnippet(currenItem[ODP.document.ID]);
		                        if (snippet) {
		                            currenItem.callback(snippet[ODP.document.ID], ODP.document, ODP.document.renderMode);
		                        } else {
		                            currenItem.callback();
		                        }
		                        ODP.document.renderChildrenOnServer(true);
		                        ODP.document.queue.queue[i].splice(j, 1);
		                        j--;
		                    }
		                }
		            }

		            ODP.document.queue.active = false;
		        };
			} else {
				ODP.document.queue.executionInterval = 0;
			}
			if (typeof window.console === 'undefined' && typeof ODP.window.console === 'undefined') {
				var consoleLogMembers = 'profiles,memory,_commandLineAPI,debug,error,info,log,warn,dir,dirxml,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd';
				var consoleLogArray = consoleLogMembers.split(',');
				for (var k = 0, len = consoleLogArray.length; k < len; k++) {
					consoleLogArray[k] = function (parfull) {
						try {
							var splittedParams = (parfull.split) ? parfull.split(',') : parfull; //not sure
							splittedParams = [splittedParams]; //omg
							for (var m in splittedParams) {
								var par = splittedParams[m];
								var checkobj = false;
								for (var k in par) {
									checkobj = true;
									break;
								}
								if (checkobj && typeof par !== 'string') {
									for (var k in par) {
										alert(par[k]);
									}
								} else {
									alert(par);
								}
								
							}
						} catch (e) {
							alert(e + '. \nInvalid use of debug console!');
						}
					};
					//TODO: add REAL handling
				}
			}
			
			ODP.Surveo = {
				"methods" : {
					"_killBubbles" : {},
					"fileRead" : {},
					"fileExists" : {},
					"fileWritten" : {},
					"fileDeleted" : {},
					"startSurvey" : {},
					"clearAnswers" : {},
					"formResults" : {},
					"sendResults" : {},
					"submitCallback" : {},
					"onNextClick" : {},
					"onPreviousClick" : {},
					"onCloseClick" : {},
					"onStartClick" : {},
					"onThankyouClick" : {},
					"handleAnimEnd" : {},
					"blockDrag" : {},
					"sm_mother" : {},
					"getPriority" : {},
					"sm_checkCondition" : {},
					"sm_getanswer" : {},
					"isArrayInArray" : {},
					"sm_checkConditionSimple" : {},
					"CSVtoArray" : {},
					"ArrayToCSV" : {},
					"sm_executeAction" : {},
					"sm_setcomment" : {},
					"sm_setvisibility" : {},
					"sm_setquestionvisibility" : {},
					"sm_setanswer" : {},
					"parseSkipsDefinitions" : {}
					
				},
				"params" : {
					"isMobileRenderer" : "",
					"surveoDatasetLoaderID" : "",
					"surveoResourceFolderID" : "",
					"surveoLayout" : "",
					"surveoAnimation" : "",
					"surveoOrientation" : "",
					"surveoShowProgress" : "",
					"surveoShowRestart" : "",
					"surveoProjectID" : "",
					"surveyInProgress" : "",
					"surveyResults" : "",
					"resultObj" : "",
					"defaultFontFamily" : "",
					"headerTextColor" : "",
					"bodyTextColor" : "",
					"progressValuePosition" : "",
					"functionClearAll" : "",
					"surveoSkipPatterns" : "",
					"surveoLayoutParams" : {
						"padding" : "",
						"navigationButtonsPctg" : "",
						"restartRight" : "",
						"progressLength" : "",
						"restartInnerRight" : ""
					},
					"contentPadding" : "",
					"assignedQueueIndices" : "",
					"skipDefinitions" : "",
					"isSurveoLoading" : "",
					"questionData" : {}
				},
				"snippets" : {}
			};
			
			
			ODP.Surveo.debug = {
				/* Contains debugging variables and methods for internal use */
				questions : {
					getQIDsForSlide : function (index) {
						var index = index || currentChildNode;
						var arrayOfIDs = [];
						for (var x in ODP.Surveo.params.questionData) {
							if (ODP.Surveo.params.questionData[x].getMainDivID() == ODP.Surveo.params.slideArray[index].id) {
								arrayOfIDs.push(ODP.Surveo.params.questionData[x].getProtoID());
							}
						}
						return arrayOfIDs;
					}
				},
				console : {
					/*custom console control*/
					init : function () {
						/*create and display the custom console control*/
						window.console = {};
						console.log = function (parfull) {

							try {
								var splittedParams = (parfull.split) ? parfull.split(',') : parfull; //not sure
								splittedParams = [splittedParams]; //omg
								for (var m in splittedParams) {
									var par = splittedParams[m];

									var checkobj = false;
									for (var k in par) {
										checkobj = true;
										break;
									}
									if (checkobj && typeof par !== 'string') {

										for (var k in par) {
											alert(" \"" + k + "\" : " + par[k]);

										}
									} else {
										alert(" \"" + m + "\" : " + par);
									}

								}
							} catch (e) {
								alert(e + '. \nInvalid use of debug console!');

							}

						}
					},
					destroy : function () {
						/*disable debug functionality*/

						console.log = function () {};
					},

					dump : function (parfull) {
						/*dumps all console content to server*/
						try {
							var splittedParams = (parfull.split) ? parfull.split(',') : parfull; //not sure
							splittedParams = [splittedParams]; //omg
							for (var m in splittedParams) {
								var par = splittedParams[m];
								var checkobj = false;

								for (var k in par) {
									checkobj = true;
									break;
								}
								if (checkobj && typeof par !== 'string') {

									for (var k in par) {
										alert(" \"" + k + "\" : " + par[k]);

									}
								} else {
									alert(" \"" + m + "\" : " + par);
								}

							}

						} catch (e) {
							alert(e + '. \nInvalid use of debug console!');

						}
					},
					saveLocal : function () {
						/*saves all console content to local file*/

					},
					geoStoreShow : function () {
						/* show contents of geolocation object */
						for (var c = 0, len = ODP.Surveo.statistics.geo.finalGeoData; c < len; c++) {
							for (var k in finalGeoData[c]) {
								alert(finalGeoData[c][k]);
							}
						}
					},
					showMeTheManual : function (root, drillDepth, indentStr) {
						var drillDepth = (typeof drillDepth === 'undefined') ? 1 : drillDepth;
						var root = root || ODP.Surveo;
						var indent = indent || 0;
						var indentStr = indentStr || "";
						/*as an array for speed ;)*/
						if (indentStr.length > 500) {
							/** safeties ON **/
							alert("Na-a, not me, laddie!");
							return;
						}
						var cacheIndent = indent;
						indentStr += "\t";
						if (drillDepth === 0) {
							return;
						}
						var qqComent;
						try {
							for (var k in root) {
								// console.log("1")
								if (k === 'window') {
									return;
								}
								if (!root.hasOwnProperty(k)) {
									// console.log("not ownproperty")
									continue;
								}
								if (typeof root[k] === 'string' || !isNaN(parseInt(k)) || typeof root[k] === 'number' || root[k] === null || (typeof root[k] === 'undefined') || (typeof root[k].parentNode !== 'undefined')) {
									// console.log("not function")
									continue;
								}
								qqComent = (typeof root[k] === 'function') ? (" [" + ((root[k].toString().split('\n'))[0]) + "]") : "";
								//console.log(qqComent)
								if (typeof root[k] !== 'object') {
									// console.log("not object")
									continue;
								}

								for (var q in root[k]) {
									if (typeof root[k][q] !== 'object') {
										// console.log("not sub-object")
										continue;
									}
									// if (root[k].hasOwnProperty(q)) {
									this.showMeTheManual(root[k], --drillDepth, indentStr);
									break;
								}

							}
						} catch (e) {
							alert(e + ' @show me da manual');
						}
						// return qqComent;
					},
					contents : ""

				},
				customEvent : function () {

					//name of the event
					this.eventName = arguments[0];
					var mEventName = this.eventName;

					//function to call on event fire
					var eventAction = null;

					//subscribe a function to the event
					this.subscribe = function (fn) {
						eventAction = fn;

					};

					//fire the event
					this.fire = function (sender, eventArgs) {
						if (eventAction != null) {
							eventAction(sender, eventArgs);

						} else {
							alert('There was no function subscribed to the ' + mEventName + ' event!');

						}
					};
				},
				addHandlersForCustomEvents : function (eventName, callback) {
					ODP.Surveo.params[eventName] = new this.customEvent("slideMoved");
					ODP.Surveo.params[eventName].subscribe(function (sender, eventArgs) {
						callback(eventArgs);

					});

				},
				outlines : {
					init : function (parent) {
						parent = parent || ODPWindow.document.getElementsByClassName("surveyStructure")[0];
						var kidElements = parent.getElementsByTagName("*");
						for (var c = 0, len = kidElements.length; c < len; c++) {
							if (!kidElements[c].setStyle) {
								continue;
							}
							kidElements[c].setStyle("border", "2px solid rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ",1)");

						}
					},
					destroy : function () {
						parent = parent || ODPWindow.document.getElementsByClassName("surveyStructure")[0];
						var kidElements = parent.getElementsByTagName("*");
						for (var c = 0, len = kidElements.length; c < len; c++) {
							if (!kidElements[c].setStyle) {
								continue;
							}
							kidElements[c].setStyle("border", "");

						}
					}

				},
				self_diag : {
					/*self diagnostics for the surveo methods. Automatically find inconsistencies*/
					start : function () {
						for (var k in ODP.Surveo.methods) {
							if (typeof ODP.Surveo.methods[k] === 'function') {

								try {
									eval(ODP.Surveo.methods[k].toString().replace("function", "function test"));
									/* for anonymous functions eval */

								} catch (e) {
									alert("Surveo.debug @ " + k + " : " + e);

								}

							}
						}

						for (var k in ODP.Surveo.snippets) {
							if (typeof ODP.Surveo.snippets[k] === 'function') {

								try {
									eval(ODP.Surveo.snippets[k].toString().replace("function", "function test"));
									/* for anonymous functions eval */

								} catch (e) {
									alert("Surveo.debug @ " + k + " : " + e);

								}

							}
						}

					}
				},
				swipeStart : function (e) {
					ODP.Surveo.params.slideBuffer = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
				},
				swipeEnd : function (e) {
					/* still buggy when touchhold */
					var xOffset = Math.abs(ODP.Surveo.params.slideBuffer.x - e.touches[0].clientX);
					var yOffset = Math.abs(ODP.Surveo.params.slideBuffer.y - e.touches[0].clientY);
					if (Math.abs(ODP.Surveo.params.slideBuffer.x - e.touches[0].clientX) < 100 || (xOffset <= yOffset) || (ODP.Surveo.params.buttonsLock === 1)) {
						return;
					}
					if (ODP.Surveo.params.slideBuffer.x < e.touches[0].clientX) {
						ODP.Surveo.snippets.slide._slidePrev();
					}
					if (ODP.Surveo.params.slideBuffer.x > e.touches[0].clientX) {
						ODP.Surveo.snippets.slide._slideNext();
					}
					ODP.Surveo.params.slideBuffer = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
				},
				remoteSetAnswers : function (index) {
					for (var k in ODP.Surveo.params.questionData) {
						if (ODP.Surveo.params.questionData[k].getParentSlideIndex() === currentChildNode) {
							if (index in ODP.Surveo.params.questionData[k].getAnswers()) {
								ODP.Surveo.methods.sm_setanswer(k, index + '', true);
							}

							break;
						}
					}
				},
				keyboardPressEvents : {

					handleKeyPressesForBrowsers : function (e) {

						switch (e.charCode) {
						case 100:
							ODP.Surveo.snippets.slide._slideNext();
							break;
						case 97:
							ODP.Surveo.snippets.slide._slidePrev();
							break;
						case 49:
							ODP.Surveo.debug.remoteSetAnswers(0);
							break;
						case 50:
							ODP.Surveo.debug.remoteSetAnswers(1);
							break;
						case 51:
							ODP.Surveo.debug.remoteSetAnswers(2);
							break;
						case 52:
							ODP.Surveo.debug.remoteSetAnswers(3);
							break;
						case 53:
							ODP.Surveo.debug.remoteSetAnswers(4);
							break;
						case 54:
							ODP.Surveo.debug.remoteSetAnswers(5);
							break;
						case 55:
							ODP.Surveo.debug.remoteSetAnswers(6);
							break;
						case 56:
							ODP.Surveo.debug.remoteSetAnswers(7);
							break;
						case 57:
							ODP.Surveo.debug.remoteSetAnswers(8);
							break;
						case 114:
							ODP.Surveo.methods.finishSurvey();
							break;
						default:
							break;
						}
					},
					init : function () {
						ODP.Surveo.methods.addEvent(window, 'keypress', ODP.Surveo.debug.keyboardPressEvents.handleKeyPressesForBrowsers);
					}
				},
				errors : {
					iface : {
						alertWindow : null,
						init : function () {
							this.alertWindow = document.createElement('div');
							this.alertWindow.className = "hiddenWindow";
							try {
								ODPWindow.document.body.appendChild(this.alertWindow);
							} catch (e) {
								alert(e + ' @alertWindow init');
							}
						},
						display : function (message) {
							this.alertWindow.innerHTML = "<p>" + message + "</p><button></button>";
							this.alertWindow.className = "shownWindow";
						},
						hide : function () {
							this.alertWindow.className = "hiddenWindow";
						}
					},
					suppress : function () {
						/** disables alerts **/
						window.alert = function () {};
					},
					unsuppress : function () {
						/** enable **/
						delete window.alert;
					}

				},
				fixProgressBar : function () {
					var questionSlidesCount = 0;
					var currentSlideCount = 0;
					var percent = 0;
					var progressElement;
					var slideRef;
					
					var slideArrayLength = ODP.Surveo.params.slideArray.length;
					
					for (var i = 0; i < slideArrayLength; i++) {
						for (var k in ODP.Surveo.params.questionData) {
							if (ODP.Surveo.params.questionData[k].getMainDivID() === ODP.Surveo.params.slideArray[i].id) {
								slideRef = ODP.Surveo.params.slideArray[i];
								progressElement = slideRef.querySelector(".progressMark");
								progressValue = slideRef.querySelector(".progressText");
								percent = ((currentSlideCount) / (slideArrayLength - 1)) * 100;
								progressValue.innerHTML = Math.floor(percent) + '<b style="font-size:0.6em;">%</b>';
								progressElement.style.width = percent + "%";
								currentSlideCount++;
								break; ;
							}
						}
					}
				},
				designerJumpToSlide : function (snippetIndex) {
					ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
					if(snippetIndex === currentChildNode) {
						ODP.Surveo.params.slideArray[snippetIndex].className = "questionMain normalDesktop";
						for(var k = currentChildNode+1, len = ODP.Surveo.params.slideArray.length; k < len; k++) {
							if(ODP.Surveo.params.slideArray[k]) {
								ODP.Surveo.params.slideArray[k].className = "questionMain killAnimations unreadDesktop";
							}
						}
						return;
					}
					
					if(ODP.Surveo.params.slideArray.length <= 1) {
						if(ODP.Surveo.params.slideArray[0]) {
							ODP.Surveo.params.slideArray[0].className = "questionMain normalDesktop";
							currentChildNode = 0;
						}
						return;
					}
					
					var paramsForAnimation;
					var cacheCurrent = ODP.Surveo.params.slideArray[currentChildNode];
					var otherSlideToAnimate = ODP.Surveo.params.slideArray[snippetIndex];
					if(snippetIndex > currentChildNode) {
						paramsForAnimation = {
							"cacheCurrent" : cacheCurrent,
							"cacheNext" : otherSlideToAnimate,
							"delay" : 0,
							"animationType" : "nextSlide"
						}
					} else {
						paramsForAnimation = {
							"cacheCurrent" : cacheCurrent,
							"cachePrev" : otherSlideToAnimate,
							"delay" : 0,
							"animationType" : "prevSlide"
						}
					}
					
					ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
					
					currentChildNode = snippetIndex;
					
					return;
					
					/*advanced navigation method for Surveo Designer. Jump to any selected slide*/
					this.beforeAddCurrentSnippet = ODP.Surveo.params.slideArray[currentChildNode];
					
					doc.queue.add(function () {
						var bufferSkips = [];
						var forwardBackwardSwitch = (snippetIndex > currentChildNode);
						var i = forwardBackwardSwitch ? 1 : ODP.Surveo.snippets.slide.findNextQuestion(snippetIndex + 1, !forwardBackwardSwitch);

						var len = forwardBackwardSwitch ? ODP.Surveo.snippets.slide.findNextQuestion(snippetIndex, !forwardBackwardSwitch) : ODP.Surveo.params.slideArray.length;
						
						for (; i < len; (i++)) {
							for (var c in ODP.Surveo.params.questionData) {
								if (ODP.Surveo.params.questionData[c].getParentSlideIndex() === i) {
									if (!ODP.Surveo.params.questionData[c].getSkiped() || (c.search("section") >  - 1)) {
										ODP.Surveo.params.questionData[c].setSkiped(true);
									}
									break;
								}
							}
						}
						
						var readUnreadClass = "questionMain killAnimations readDesktop";
						for(var a = 0, len = ODP.Surveo.params.slideArray.length; a < len; a++) {
							if(currentChildNode === a) {
								readUnreadClass = "questionMain killAnimations unreadDesktop";
							} else {
								ODP.Surveo.params.slideArray[a].className = readUnreadClass;
							}
						}
						
						forwardBackwardSwitch ? ODP.Surveo.snippets.slide._slideNext('0ms', false) : ODP.Surveo.snippets.slide._slidePrev('0ms', false);
						
						currentChildNode = snippetIndex; // just in case ( fix for Designer bug )

						ODP.Surveo.methods.resetSkips()
					},10);
					if (doc.queue.active == false) {
						doc.queue.run();
					}
					
				},
				initAll : function () {
					if (ODP.Surveo.params.deploymentTarget.isOldBrowser) {
						// this.console.init();


					}
					this.addHandlersForCustomEvents('onSlideChange', function (params) {
						//
						if (typeof SM !== 'undefined') {
							SM.SurveoDesigner.handleSlideChange(params);

						}
					}); //dummy
				}

			};

			ODP.Surveo.debug.performanceTimer = function (performance) { //rktodorov debug timer for execution time
				/*
				usage :



				var stopwatch = new ODP.Surveo.debug.performanceTimer();
				stopwatch.start();



				...some JS code
				for (var index = 0; index < 100; index++) {
				stopwatch.printTime('Instance[' + index + ']');
				}


				...



				stopwatch.stop();
				stopwatch.printTime();
				 */

				this.startTime = 0;
				this.stopTime = 0;
				this.running = false;
				this.performance = performance === false ? false : !!window.performance;
			}

			ODP.Surveo.debug.performanceTimer.prototype.currentTime = function () {
				return this.performance ? window.performance.now() : new Date().getTime();
			};
			ODP.Surveo.debug.performanceTimer.prototype.start = function () {
				this.startTime = this.currentTime();
				this.running = true;
			};
			ODP.Surveo.debug.performanceTimer.prototype.stop = function () {
				this.stopTime = this.currentTime();
				this.running = false;
			};
			ODP.Surveo.debug.performanceTimer.prototype.getMilliseconds = function () {
				if (this.running) {
					this.stopTime = this.currentTime();
				}
				return this.stopTime - this.startTime;
			};
			ODP.Surveo.debug.performanceTimer.prototype.getSeconds = function () {
				return this.getMilliseconds() / 1000;
			};
			ODP.Surveo.debug.performanceTimer.prototype.printTime = function (name) {
				var currentName = name || 'All time:';
				console.log(currentName, '[' + this.getMilliseconds() + 'ms]', '[' + this.getSeconds() + 's]');
			};

			var ResourcesID = "";
			var snippet = ODP.document.getSnippet(instanceID);
			// alert( instanceID.substring(1,(instanceID.length-1)));
			var containerDiv = '<div id=' + instanceID.substring(1, (instanceID.length - 1)) + ' class="slideshow" style="width:100%;height:100%;">';
			if (ODP.document.checkChildren(instanceID).length == 0) {
				var newContainer = (ODP.document.getNewSnippet('{80176528-75B1-4AA1-8994-7FF5BC3A6CD5}'));
				newContainer.instance[ODP.document.findIndexByName(newContainer.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
				ODP.document.updateJSON(newContainer);
				ODP.designer.addSnippetToDocumentTree(newContainer, false);
				for (var i = 0; i < newContainer.instance.length; i++) {
					if (newContainer.instance[i].name == 'com.opendataplatform.document.id') {
						var instanceID = newContainer.instance[i].value;
						break;
					}
				}
				var newDesignEffect = (ODP.document.getNewSnippet('{27545E54-0548-44B3-9B64-04F71B119C4E}'));
				newDesignEffect.instance[ODP.document.findIndexByName(newDesignEffect.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
				newDesignEffect.instance[ODP.document.findIndexByName(newDesignEffect.instance, 'Custom CSS')].value = 'overflow:auto;position:static;';
				ODP.document.updateJSON(newDesignEffect);
				ODP.designer.addSnippetToDocumentTree(newDesignEffect, false);
				//load dataset
				var datasetLoader = ODP.document.getNewSnippet('{7DBFAE91-A94E-4280-82F9-A9F7FF1BB6F5}');
				datasetLoader.instance[ODP.document.findIndexByName(datasetLoader.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
				ODP.document.updateJSON(datasetLoader);
				ODP.designer.addSnippetToDocumentTree(datasetLoader, false);
				
				for (var i = 0; i < datasetLoader.instance.length; i++) {
					if (datasetLoader.instance[i].name == 'com.opendataplatform.document.id') {
						var datasetLoaderID = datasetLoader.instance[i].value;
						break;
					}
				}
				ODP.document.addAsObjects();
				var resourceLoader = ODP.document.getNewSnippet('{44430913-F7B3-49E0-91C8-D52D9E0B6C36}'); //'resources', containg 'resource'
				resourceLoader.instance[ODP.document.findIndexByName(resourceLoader.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
				ODP.document.updateJSON(resourceLoader);
				ODP.designer.addSnippetToDocumentTree(resourceLoader, false);
				
				for (var i = 0; i < resourceLoader.instance.length; i++) {
					//console.log(444);
					if (resourceLoader.instance[i].name == 'com.opendataplatform.document.id') {
						ResourcesID = resourceLoader.instance[i].value;
						break;
					}
				}
				
				ODP.document.addAsObjects();
				var newSlideContainer = (ODP.document.getNewSnippet('{1AD13386-E18D-45A3-84E3-9BA61DACBAE2}'));
				newSlideContainer.instance[ODP.document.findIndexByName(newSlideContainer.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
				newSlideContainer.instance[ODP.document.findIndexByName(newSlideContainer.instance, 'Dataset Loader ID')].value = datasetLoaderID;
				newSlideContainer.instance[ODP.document.findIndexByName(newSlideContainer.instance, 'Resources ID')].value = ResourcesID;
				ODP.document.updateJSON(newSlideContainer);
				ODP.designer.addSnippetToDocumentTree(newSlideContainer, false);
				
				ODP.document.addAsObjects();
				// console.log(newSlideContainer['com.opendataplatform.document.id'])
				
			}
			// ODP.Surveo.params["mainContainerID"] = ODP.document.renderChildren(instanceID)[] ;
			// if(renderer == "design"){
			/**Extract instances of resource snippets into a global object array**/
			var useThisResource = "";
			var mainContainerID = ODP.document.checkChildren(instanceID);
			//useThisResource = ODP.document.findName(, 'com.opendataplatform.document.id')
			vvvv = ODP.document.checkChildren(mainContainerID[0][ODP.document.findIndexByName(mainContainerID[0], "com.opendataplatform.document.id")].value);
			for (var x = 0; x < vvvv.length; x++) {
				if (ODP.document.findName(vvvv[x], 'com.opendataplatform.document.protoid') == '{44430913-F7B3-49E0-91C8-D52D9E0B6C36}') {
					useThisResource = ODP.document.findName(vvvv[x], 'com.opendataplatform.document.id');
					break;
				}
			}
			var mc = ODP.document.checkChildren(useThisResource);
			
			// alert(mc[0][ODP.document.findIndexByName(mc[0], 'com.opendataplatform.document.id')].value);
			ODP.Surveo.params["defaultBackground"] = mc[0][ODP.document.findIndexByName(mc[0], 'com.opendataplatform.document.id')].value;
			// alert(ODP.document["defaultBackground"]);
			ODP.Surveo.params["defaultChecked"] = mc[1][ODP.document.findIndexByName(mc[1], 'com.opendataplatform.document.id')].value;
			// alert(ODP.document["defaultChecked"]);
			ODP.Surveo.params["defaultUnchecked"] = mc[2][ODP.document.findIndexByName(mc[2], 'com.opendataplatform.document.id')].value;
			// alert(ODP.document["defaultUnchecked"]);
			ODP.Surveo.params["butBackSelected"] = mc[3][ODP.document.findIndexByName(mc[3], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["butBack"] = mc[4][ODP.document.findIndexByName(mc[4], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["radioBChecked"] = mc[5][ODP.document.findIndexByName(mc[5], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["radioBUnChecked"] = mc[6][ODP.document.findIndexByName(mc[6], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["closeBtn"] = mc[7][ODP.document.findIndexByName(mc[7], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["backForNav"] = mc[8][ODP.document.findIndexByName(mc[8], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["startBackground"] = mc[9][ODP.document.findIndexByName(mc[9], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["tyBackground"] = mc[10][ODP.document.findIndexByName(mc[10], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["defaultSectionBack"] = mc[11][ODP.document.findIndexByName(mc[11], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["progressBarback"] = mc[12][ODP.document.findIndexByName(mc[12], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["progressBarFill"] = mc[13][ODP.document.findIndexByName(mc[13], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["previousPicture"] = mc[14][ODP.document.findIndexByName(mc[14], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["nextPicture"] = mc[15][ODP.document.findIndexByName(mc[15], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["progressBadge"] = mc[16][ODP.document.findIndexByName(mc[16], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["questionBodyBack"] = mc[17][ODP.document.findIndexByName(mc[17], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["questionHeaderBack"] = mc[18][ODP.document.findIndexByName(mc[18], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["defaultQuestionTemplate"] = mc[19][ODP.document.findIndexByName(mc[19], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["defaultBackArrow"] = mc[20][ODP.document.findIndexByName(mc[20], 'com.opendataplatform.document.id')].value;
			ODP.Surveo.params["defaultNextArrow"] = mc[21][ODP.document.findIndexByName(mc[21], 'com.opendataplatform.document.id')].value;
			var tmpChildren = ODP.document.renderChildren(instanceID);
			// containerDiv += tmpChildren.join('');
			// containerDiv += '</div>'
			return tmpChildren.join('');
		}}},{"com.opendataplatform.document.id":"{80176528-75B1-4AA1-8994-7FF5BC3A6CD5}","manifest":{"name":"Container","description":"","image":"","icon_xp16":""},"parameters":[{"name":"Width","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Height","datatype":"nvarchar","defaultvalue":"auto"},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Is visible","datatype":"nvarchar","defaultvalue":"true"}],"ui":{"render":function (instanceID,documentRef,renderer) {
			var snippet = ODP.document.getSnippet(instanceID);
			var window = ODP.window;
			var document = window.document;
			var bodyWidthInServerSide = 680;
			var bodyHeightInServerSide = 680;
			var windowHeightInServerSide = 680;
			var windowWidthInServerSide = 680;
			//if (ODP.document.currentRenderer == "client") { 
		
			if(typeof ODP.Container === "undefined") {
				ODP.Container = {
					"containers" : {},
					"setWidth" : function(currentContainer, newWidth) {
						currentContainer.style.width = newWidth;
						var localStorage = RM.LocalStorage;
						if(typeof localStorage !== "undefined" && localStorage.isSupported) {
							var key = "layoutContainerParams_" + ODP.document.userContext.getUserAttribute("SecurityObjectUserID");
							var layoutContainerParams = Open.stringToObject(localStorage.get({key : key})) || {};
							if(layoutContainerParams) {
								if(typeof layoutContainerParams[currentContainer.id] === "undefined") {
									layoutContainerParams[currentContainer.id] = {};
								}

								layoutContainerParams[currentContainer.id].width = newWidth;
							}

							localStorage.remove({key : key});
							localStorage.set({key : key, value: Open.objectToString(layoutContainerParams)});

						}
					},
					"getComputedStyle" : function () {
						var func = null;
						if (document.defaultView && document.defaultView.getComputedStyle) {
							func = document.defaultView.getComputedStyle;
						} else if (typeof(document.body.currentStyle) !== "undefined") {
							func = function (element, anything) {
								return element["currentStyle"];
							};
						}
						return function (element, style) {
							return func(element, null)[style];
						};
					}(),
					"getDPR" : function() {
						var mediaQuery;
						if (window.devicePixelRatio) {
							return window.devicePixelRatio;
						} else if (window.matchMedia) {
							mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),												  (min--moz-device-pixel-ratio: 1.5),												  (-o-min-device-pixel-ratio: 3/2),												  (min-resolution: 1.5dppx)";
							if (window.matchMedia(mediaQuery).matches) { return 1.5; }
							mediaQuery = "(-webkit-min-device-pixel-ratio: 2),												  (min--moz-device-pixel-ratio: 2),												  (-o-min-device-pixel-ratio: 2/1),												  (min-resolution: 2dppx)";
							if (window.matchMedia(mediaQuery).matches) { return 2; }
							mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),												  (min--moz-device-pixel-ratio: 0.75),												  (-o-min-device-pixel-ratio: 3/4),												  (min-resolution: 0.75dppx)";
							if (window.matchMedia(mediaQuery).matches) { return 0.7; }
						} else { return 1; }
						return window.screen.deviceXDPI / window.screen.logicalXDPI;
					}
				};
			}

			var isVisible = (snippet["Is visible"] === "true");
			
			var localStorage = RM.LocalStorage;
			var layoutContainerParams = {};
			if(typeof localStorage !== "undefined" && localStorage.isSupported) {
				var key = "layoutContainerParams_" + ODP.document.userContext.getUserAttribute("SecurityObjectUserID");
				layoutContainerParams = Open.stringToObject(localStorage.get({key : key})) || {};

				var containerID = "ODPLayoutContainer_"+instanceID.substring(1, instanceID.length - 1);
				if(layoutContainerParams[containerID]) {
					var _isVisible = layoutContainerParams[containerID].isVisible;
					if(typeof _isVisible !== "undefined") {
						isVisible = _isVisible;
					}

				}
			}

			ODP.Container.containers[instanceID] = {
				"containerInstanceID" : instanceID,
				"containerDiv" : null,
				"isVisible" : isVisible,
				"hide" : function() {
					if(!this.isVisible) {
						return;
					}
					
					var container = this.getContainerDiv().parentNode;
					var layout = container.parentNode;
					var getElPos = ODP.LayoutManager.utils.getElPos;
					var round = ODP.LayoutManager.utils.round;
					var containerPos = getElPos(container);

					// if(containerPos.width === 0) {
					// 	return;
					// }

					var layoutPos = getElPos(layout);

					var allContainers = ODP.LayoutManager.utils.getVisibleContainers(layout, ".ODPLayoutContainer");
					var allContainersLen = allContainers.length;
					var currentContainer;
					var currentContainerPos;

					container.style.display = "none";
					container.style.width = "";
					this.isVisible = false;

					var newWidth;
					var allWidth = 100;

					for(var a = 0; a < allContainersLen; a++) {
						currentContainer = allContainers[a];
						if(currentContainer.id === container.id) { // current container
							var localStorage = RM.LocalStorage;
							if(typeof localStorage !== "undefined" && localStorage.isSupported) {
								var key = "layoutContainerParams_" + ODP.document.userContext.getUserAttribute("SecurityObjectUserID");
								var layoutContainerParams = Open.stringToObject(localStorage.get({key : key})) || {};
								if(layoutContainerParams) {
									if(typeof layoutContainerParams[currentContainer.id] === "undefined") {
										layoutContainerParams[currentContainer.id] = {};
									}
									
									layoutContainerParams[currentContainer.id].isVisible = false;
								}

								localStorage.remove({key : key});
								localStorage.set({key : key, value: Open.objectToString(layoutContainerParams)});
							}
						} else {
							currentContainerPos = getElPos(currentContainer);
							if(currentContainerPos.width > 0) {
								newWidth = round(currentContainerPos.width / layoutPos.width * 100, 3) + round(((containerPos.width / layoutPos.width) / (allContainersLen-1)) * 100, 3);
								if(newWidth > allWidth) {
									newWidth = allWidth;
								}
								ODP.Container.setWidth(currentContainer, newWidth + "%");
								allWidth -= newWidth;

							}
						}
					}

					ODP.LayoutManager.correctContainersWidth(layout);

					setTimeout(function() {
						ODP.document.listeners.fireEvent("resize", "{" + layout.id.replace("layoutContainerParent_", "") + "}");
					}, 100);
				},
				"show": function() {
					if(this.isVisible) {
						return;
					}
					var container = this.getContainerDiv().parentNode;
					container.style.display = "";
					this.isVisible = true;
					var layout = container.parentNode;
					var getElPos = ODP.LayoutManager.utils.getElPos;
					var round = ODP.LayoutManager.utils.round;
					var containerPos = getElPos(container);
					var layoutPos = getElPos(layout);

					var allContainers = ODP.LayoutManager.utils.getVisibleContainers(layout, ".ODPLayoutContainer", true);
					var allContainersLen = allContainers.length;
					var currentContainer;
					var currentContainerPos;

					var newWidth;
					var allWidth = 100 - round(containerPos.width / layoutPos.width * 100, 3);

					var newSizes = {};
					for(var a = 0; a < allContainersLen; a++) {
						currentContainer = allContainers[a];
						if(currentContainer.id === container.id) { // current container
							var localStorage = RM.LocalStorage;
							if(typeof localStorage !== "undefined" && localStorage.isSupported) {
								var key = "layoutContainerParams_" + ODP.document.userContext.getUserAttribute("SecurityObjectUserID");
								var layoutContainerParams = Open.stringToObject(localStorage.get({key : key})) || {};
								if(layoutContainerParams) {
									if(typeof layoutContainerParams[currentContainer.id] === "undefined") {
										layoutContainerParams[currentContainer.id] = {};
									}
									
									layoutContainerParams[currentContainer.id].isVisible = true;
								}
								
								localStorage.remove({key : key});
								localStorage.set({key : key, value: Open.objectToString(layoutContainerParams)});

							}
						} else {
							currentContainerPos = getElPos(currentContainer);
							newWidth = round(currentContainerPos.width / layoutPos.width * 100, 3) - round((containerPos.width / layoutPos.width * 100) / (allContainersLen - 1), 3);

							var initialWidth = ODP.LayoutManager.containers[currentContainer.id].initialWidth;
							if(newWidth < initialWidth) {
								newWidth = initialWidth;
							}

							if(newWidth > allWidth) {
								newWidth = allWidth;
							}

							newSizes[currentContainer.id] = {
								newWidth: newWidth
							}

							ODP.Container.setWidth(currentContainer, newWidth + "%");
							allWidth -= newWidth;
						}


						ODP.LayoutManager.correctContainersWidth(layout);

						setTimeout(function() {
							ODP.document.listeners.fireEvent("resize", "{" + layout.id.replace("layoutContainerParent_", "") + "}");
						}, 100);
					}
				},
				"getContainerDiv" : function() {
					var doc = ODP.window.document;
					var containerDiv = this.containerDiv;
					var mediaDivID = this.containerInstanceID;
					if(containerDiv === null) {
						this.containerDiv = doc.getElementById(mediaDivID);
					}
					return this.containerDiv;
				},
				"getGroup" : function(pixels) {
					//pixels = parseInt(pixels.replace("px","").replace("%",""),10);
					pixels = parseInt(pixels,10);

					switch(true) {
						case (pixels <= 320):
							return 1;
						case (pixels > 320 && pixels <= 480):
							return 2;
						case (pixels > 480 && pixels <= 768):
							return 3;
						case (pixels > 768 && pixels <= 1024):
							return 4;
						case (pixels > 1024 && pixels <= 1600):
							return 5;
						default:
							return 6;
					}
				},
				"getViewport" : function () {
					var window = ODP.window;
					var document = window.document;
					var body = document.body;
					var viewPortWidth;
					var viewPortHeight;

					// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
					if (typeof window.innerWidth != "undefined") {
						viewPortWidth = window.innerWidth;
						viewPortHeight = window.innerHeight;
					}

					// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
					else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth !== 0) {
						viewPortWidth = document.documentElement.clientWidth;
						viewPortHeight = document.documentElement.clientHeight;
					}

					// older versions of IE
					else {
						viewPortWidth = document.getElementsByTagName("body")[0].clientWidth;
						viewPortHeight = document.getElementsByTagName("body")[0].clientHeight;
					}
					
					viewPortWidth = viewPortWidth ? viewPortWidth : windowHeightInServerSide;
					viewPortHeight = viewPortHeight ? viewPortHeight : windowWidthInServerSide;
					
					return [viewPortWidth, viewPortHeight];
				},
				"getFakeWidth" : function() {
					var fakeWidth = bodyWidthInServerSide;
					var childs;
					var currentLayoutChilds;
					var ODPdoc = ODP.document;
					var currentLayout;
					var currentContainerPosition;
					var currentContainerInstanceID = this.containerInstanceID;
					var currentContainer = ODPdoc.getSnippet(currentContainerInstanceID);
					var currentNodeFromODPStructure = ODPdoc.getSnippet(currentContainer["com.opendataplatform.document.parentid"]);
					
					while(currentNodeFromODPStructure["com.opendataplatform.document.protoid"] !== "{CC01E255-418B-4091-AE44-0D0F0228ED7D}") {
						if(currentNodeFromODPStructure["com.opendataplatform.document.protoid"] === "{C4B383CD-C4EE-4D73-8E26-873AA00C79B5}" && currentNodeFromODPStructure["Layout Type"] === "Horizontal") {
							currentLayout = currentNodeFromODPStructure;
							
							currentLayoutChilds = [];
							childs = ODPdoc.getAllChildren(currentLayout["com.opendataplatform.document.id"]);

							//find the childs
							for(var a = 0, len = childs.length; a < len; a++) {
								if(childs[a]["com.opendataplatform.document.parentid"] === currentLayout["com.opendataplatform.document.id"]) {
									currentLayoutChilds[currentLayoutChilds.length] = childs[a];
								}
							}
							
							//find position of the current container
							for(var c = 0, lenC = currentLayoutChilds.length; c < lenC; c++) {
								if(currentLayoutChilds[c]["com.opendataplatform.document.id"] === currentContainer["com.opendataplatform.document.id"]) {
									currentContainerPosition = c;
									break;
								}
							}
							var split = currentLayout["Split"].split(",")[currentContainerPosition];
							var innerDistance = currentLayout["Inner Distance"];
							var splitInt;
							var innerDistanceInt;
							if(split) {
								if(split.indexOf("px") > -1) {
									if(innerDistance.indexOf("px") > -1) {
										//split - px, inner - px
										splitInt = parseInt(split, 10);
										innerDistanceInt = parseInt(innerDistance, 10) / 2;
									} else {
										//split - px, inner - %
										splitInt = parseInt(split, 10);
										innerDistanceInt = fakeWidth * (parseInt(innerDistance, 10) / 2) / 100;
									}
								} else {
									if(innerDistance.indexOf("px") > -1) {
										//split - %, inner - px
										splitInt = fakeWidth * parseInt(split, 10) / 100;
										innerDistanceInt = parseInt(innerDistance, 10) / 2;
									} else {
										//split - %, inner - %
										splitInt = fakeWidth * parseInt(split, 10) / 100;
										innerDistanceInt = fakeWidth * (parseInt(innerDistance, 10) / 2) / 100;
									}
								}
								
								fakeWidth = fakeWidth - (splitInt + innerDistanceInt);
							}
						}
						
						if(currentNodeFromODPStructure["com.opendataplatform.document.protoid"] === "{80176528-75B1-4AA1-8994-7FF5BC3A6CD5}") {
							currentContainer = currentNodeFromODPStructure;
						}
						
						currentNodeFromODPStructure = ODPdoc.getSnippet(currentNodeFromODPStructure["com.opendataplatform.document.parentid"]);
					}
					
					var documentSnippet = ODPdoc.children[""][0];
					var containerDiv = this.getContainerDiv();
					return fakeWidth;
				},
				"getWidth" : function() {
					var width = this.getContainerDiv().offsetWidth;
					//if(!width) {
					if(isNaN(width)) {
						width = this.getFakeWidth();
					}
					return width;
				},
				"getParams" : function() {
					var window = ODP.window;
					var document = window.document;
					var body = document.body;
					var width = parseInt(this.getWidth(),10);
					var dpr = ODP.Container.getDPR();
					var resolutionBreakPoint = this.getGroup(width);
					var bodyHeight = body.scrollHeight || body.offsetHeight || bodyHeightInServerSide;
					var bodyWidth = body.scrollWidth || body.offsetWidth || bodyWidthInServerSide;

					var uagent = navigator.userAgent.toLowerCase();
					var isMobile = (uagent.search("ipad") > -1) || (uagent.search("ipod") > -1) || (uagent.search("iphone") > -1 || (uagent.search("android") > -1) || (uagent.search("kindle") > -1) || (uagent.search("silk-accelerated") > -1)) || (uagent.search("windows phone") > -1);
					
					var viewport = this.getViewport();
					var screenX = viewport[0];
					var screenY = viewport[1];
					// var element = document.documentElement,
					// screenX = window.innerWidth || body.clientWidth || element.clientWidth,
					// screenY = window.innerHeight|| body.clientHeight || element.clientHeight;
					
					return {
						"resolutionBreakPoint" : resolutionBreakPoint,
						"width" : width,
						"DPR" : dpr,
						"bodyHeight" : bodyHeight,
						"bodyWidth" : bodyWidth,
						"windowHeight" : screenY,
						"windowWidth" : screenX,
						"isMobile" : isMobile				
					};
				}
			};
			
			function getElementClassName(ele) {
				return ele.getAttribute("class") ? ele.getAttribute("class") : ele.getAttribute("className");
			}
			
			function hasClass(ele, cls) {
				return getElementClassName(ele).match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
			}
			function addClass(ele, cls) {
				if (!hasClass(ele, cls)) {
					ele.className += " " + cls;
				}
			}
			function removeClass(ele, cls) {
				if (hasClass(ele, cls)) {
					var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
					ele.className = ele.className.replace(reg, "");
				}
			}

			var childrenStr = ODP.document.renderChildren(instanceID).join("");
			var containerDiv = '<div id="'+ snippet["com.opendataplatform.document.id"]+'" style="width:'+ snippet.Width + (snippet.Height !== "" ? ";height:"+ snippet.Height : "") +';position:relative;" >'+ (childrenStr !== "" ? childrenStr : "<!-- -->") +'</div>';

			return containerDiv;
		},"destroy":function (instanceID) {
			if( ODP.Container && ODP.Container.containers && ODP.Container.containers[instanceID]) {
				ODP.Container.containers[instanceID] = undefined;
				ODP.Container.containers[instanceID] = null;
				
				delete ODP.Container.containers[instanceID];
			}
		}}},{"com.opendataplatform.document.id":"{7DBFAE91-A94E-4280-82F9-A9F7FF1BB6F5}","manifest":{"name":"Dataset Loader","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":""},{"name":"Dataset","datatype":"nvarchar","defaultvalue":""},{"name":"Filter Group","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Advanced","datatype":"x.sections","defaultvalue":"collapse"},{"name":"Execution Order","datatype":"nvarchar","defaultvalue":""},{"name":"Depends On","datatype":"nvarchar","defaultvalue":""},{"name":"Force server requests","datatype":"bit","defaultvalue":0},{"name":"Attach listeners to filters","datatype":"bit","defaultvalue":1},{"name":"Manual Requests","datatype":"bit","defaultvalue":0},{"name":"FilterGroup","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer === "server") {
				Open.settings.xmlHTTP.async = false;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var maxPriority = 99;
			if (snippet["Execution Order"] == "") {
				var datasetPriority = maxPriority;
			} else {
				var tempPriority = parseInt(snippet["Execution Order"]);
				var datasetPriority = !isNaN(parseInt(snippet["Execution Order"])) ? tempPriority : maxPriority;
			}

			if (snippet["FilterGroup"] != snippet["Filter Group"]) {
				snippet["FilterGroup"] = snippet["Filter Group"];
			}

			if (typeof snippet["Force server requests"] === "undefined") {
				snippet["Force server requests"] = 0;

			}
			if (typeof snippet["Attach listeners to filters"] === "undefined") {
				snippet["Attach listeners to filters"] = 1;

			}
			if (typeof snippet["Manual Requests"] === "undefined") {
				snippet["Manual Requests"] = 0;
			}
			var bool_makeRequestEvenIfInStore = (snippet["Force server requests"] ? true : false);
			var maxPriority = 99,
			datasetPriority;
			if (snippet["Execution Order"] == "") {
				datasetPriority = maxPriority;
			} else {
				var tempPriority = parseInt(snippet["Execution Order"]);
				datasetPriority = !isNaN(parseInt(snippet["Execution Order"])) ? tempPriority : maxPriority;
			}
			function getQuery(snippet, parameters) {
				dataset = snippet["Dataset"].substr(0, 1) === "=" ? Open.stringToObject(eval(snippet["Dataset"].substr(1, snippet["Dataset"].length - 1))) : Open.stringToObject(snippet["Dataset"]);
				for (var i = 0; i < dataset.parameters.length; i++) {
					if (dataset.parameters[i].value !== null && typeof dataset.parameters[i].value === "string") {
						if (dataset.parameters[i].value.match(/(#+[a-zA-Z]+#)/g) != null) {
							var filter = dataset.parameters[i].value.match(/(#+[a-zA-Z]+#)/g);
							for (var k = 0; k < filter.length; k++) {
								var pattern = eval('/' + filter + '/g');
								var value = ODP.filters.getValue(snippet["Filter Group"], filter[k].slice(1, filter[k].length - 1));
								if (value != null) {
									dataset.parameters[i].value = dataset.parameters[i].value.replace(pattern, value);
								} else {
									dataset.parameters[i].value = null;
								}
							}
						} else if (dataset.parameters[i].value.substr(0, 1) == '=') {
							dataset.parameters[i].value = eval(dataset.parameters[i].value.slice(1, dataset.parameters[i].value.length));
						}

					}
				}
				return Open.objectToString(dataset)
			}
			
			function onReadyRequest(parameters) {
				Open.serverRequest(getQuery(snippet, parameters), instanceID, bool_makeRequestEvenIfInStore);
			}
			function request(wait) {
				if (snippet["Dataset"] != "") {
					var dataset;
					if (typeof ODP.filters !== 'undefined') {

						if (wait) {
							ODP.filters.dispatcher.listeners.removeById(instanceID);
							ODP.filters.dispatcher.listeners.add(snippet["Filter Group"], instanceID, onReadyRequest);
							
						} else {
							var parameters = ODP.filters.dispatcher.filtersGroups[snippet["FilterGroup"]];

							Open.serverRequest(getQuery(snippet, parameters), instanceID, bool_makeRequestEvenIfInStore);
						}
					} else {
						dataset = snippet["Dataset"].substr(0, 1) === "=" ? Open.stringToObject(eval(snippet["Dataset"].substr(1, snippet["Dataset"].length - 1))) : Open.stringToObject(snippet["Dataset"]);
						for (var i = 0; i < dataset.parameters.length; i++) {
							if (dataset.parameters[i].value !== null) {
								if (typeof dataset.parameters[i].value === "string" && dataset.parameters[i].value.substr(0, 1) == '=') {
									dataset.parameters[i].value = eval(dataset.parameters[i].value.slice(1, dataset.parameters[i].value.length));
								}
							}
						}
						Open.serverRequest(Open.objectToString(dataset), instanceID, bool_makeRequestEvenIfInStore);
					}
				}
			}
			ODP.document.renderChildren(instanceID);

			function runChildrenRequests() {
				var addDependsOnDatasetsCheckStatusListener = false;
				if (typeof ODP.DatasetLoaders[instanceID]["dependsOnDatasetsCheckStatus"] === "undefined") {
					ODP.DatasetLoaders[instanceID]["dependsOnDatasetsCheckStatus"] = function () {
						for (var i = 0; i < children.length; i++) {
							if (Open.serverRequest.status.get(ODP.document.findName(children[i], "com.opendataplatform.document.id")) !== "onready") {
								return false;
							}
						}
						request(false);
					};
					addDependsOnDatasetsCheckStatusListener = true;
				}
				var children = ODP.document.checkChildren(instanceID);
				if (typeof snippet["Depends On"] != "undefined" && snippet["Depends On"] != "") {
					var dependDatasets = snippet["Depends On"].split(",");
					for (var i = 0; i < dependDatasets.length; i++) {
						children.unshift([{
									"name" : "com.opendataplatform.document.id",
									"value" : dependDatasets[i]
								}
							]);
					}
				}
				for (var i = 0; i < children.length; i++) {
					var childrenInstanceID = ODP.document.findName(children[i], "com.opendataplatform.document.id");
					if (addDependsOnDatasetsCheckStatusListener) {
						Open.addListener(childrenInstanceID, ODP.DatasetLoaders[instanceID]["dependsOnDatasetsCheckStatus"]);

					}
				}
			}

			if (ODP.document.renderChildren(instanceID).length > 0) {
				var children = ODP.document.checkChildren(instanceID);
				ODP.document.queue.add(function () {
					for (var i = 0; i < children.length; i++) {
						Open.addListener(ODP.document.findName(children[i], "com.opendataplatform.document.id"), function () {
							for (var i = 0; i < children.length; i++) {
								if (typeof Open.store[ODP.document.findName(children[i], "com.opendataplatform.document.id")] == "undefined") {
									return;
								}
								/*if(typeof Open.listeners[ODP.document.findName(children[i],"com.opendataplatform.document.id")] != "undefined"){
								Open.listeners[ODP.document.findName(children[i],"com.opendataplatform.document.id")].onready.shift();
								}*/
							}
							request(false);
						});
					}
				}, datasetPriority);
			} else {
				ODP.document.queue.add(function () {
					request(true);
				}, datasetPriority);
			}

			function checkChildrenDatasets() {
				var children = ODP.document.checkChildren(instanceID);
				if (children.length > 0 || (snippet["Depends On"] != "" && typeof snippet["Depends On"] != "undefined")) {
					ODP.document.queue.add(function () {
						if (typeof ODP.filters != "undefined" && snippet["Attach listeners to filters"] === 1) {
							ODP.filters.dispatcher.listeners.add(snippet["FilterGroup"], instanceID, function (parameters) {
								var query = getQuery(snippet, parameters);
								if (!Open.store.ifExists(query)) {
									Open.listeners.execute(snippet["com.opendataplatform.document.id"], "oninitialize");
								}
							}, "onchange");
						}
						runChildrenRequests();
					}, datasetPriority);
				} else {
					if (snippet["Attach listeners to filters"] && !snippet["Manual Requests"]) {
						ODP.document.queue.add(function () {
							request(true);
						}, datasetPriority);
					} else {
						request(false);
					}
				}
			}

			if (typeof ODP.DatasetLoaders === "undefined") {
				ODP.DatasetLoaders = {};
			}
			ODP.DatasetLoaders[instanceID] = {};
			ODP.DatasetLoaders[instanceID].serverRequest = function () {
				checkChildrenDatasets();
			}
			if (!snippet["Manual Requests"]) {
				checkChildrenDatasets();
			}

			return "";
		},"destroy":function (isntanceID) {
			if (typeof ODP.filters != "undefined") {
				ODP.filters.dispatcher.listeners.removeById(isntanceID);
			}
		}}},{"com.opendataplatform.document.id":"{1AD13386-E18D-45A3-84E3-9BA61DACBAE2}","manifest":{"name":"Surveo Container","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Auto generate","datatype":"nvarchar","defaultvalue":"No"},{"name":"Survey ID","datatype":"nvarchar","defaultvalue":""},{"name":"Survey Submit Point","datatype":"nvarchar","defaultvalue":""},{"name":"IWR code question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Surveo theme","datatype":"nvarchar","defaultvalue":""},{"name":"Layout","datatype":"nvarchar","defaultvalue":"PDA/Cell (320x480)"},{"name":"Scale factor","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Orientation","datatype":"nvarchar","defaultvalue":"Landscape"},{"name":"Animation","datatype":"nvarchar","defaultvalue":"HSlide"},{"name":"Content padding(global)","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Content scrollable","datatype":"nvarchar","defaultvalue":"No"},{"name":"Default font family","datatype":"nvarchar","defaultvalue":"Verdana, Arial, Helvetica, sans-serif"},{"name":"Header Font Color","datatype":"nvarchar","defaultvalue":"black"},{"name":"Body Font Color","datatype":"nvarchar","defaultvalue":"black"},{"name":"Components","datatype":"x.sections","defaultvalue":null},{"name":"Show survey status counter","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Show restart button(global)","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Show progress bar(global)","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Show progress bar value","datatype":"nvarchar","defaultvalue":"No"},{"name":"Progress bar value position","datatype":"nvarchar","defaultvalue":"Stationary"},{"name":"Advanced","datatype":"x.sections","defaultvalue":null},{"name":"Enable swipe navigation","datatype":"nvarchar","defaultvalue":"No"},{"name":"Enable keyboard navigation","datatype":"nvarchar","defaultvalue":"No"},{"name":"Width","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Height","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Dataset Loader ID","datatype":"nvarchar","defaultvalue":""},{"name":"Resources ID","datatype":"nvarchar","defaultvalue":""},{"name":"Custom script","datatype":"nvarchar","defaultvalue":""},{"name":"Question for Globalization","datatype":"nvarchar","defaultvalue":""},{"name":"Globalization Languages List","datatype":"nvarchar","defaultvalue":""},{"name":"Auto restart after","datatype":"nvarchar","defaultvalue":"Disable"},{"name":"Submit on auto restart","datatype":"nvarchar","defaultvalue":"No"},{"name":"Submit on close","datatype":"nvarchar","defaultvalue":"No"},{"name":"After last slide","datatype":"nvarchar","defaultvalue":"Go to start slide"},{"name":"Custom text on submit","datatype":"nvarchar","defaultvalue":"Thank you!<br>Your feedback will help us to improve our services."}],"ui":{"render":function (instanceID, documentRef, renderer) {
			var window = ODP.window;
			var document = window.document;
			var doc = ODP.document;
			var ODPWindow = ODP.window;

			var snippet = doc.getSnippet(instanceID);
			
			/** SURVEO GLOBALIZATION VARIABLES (SSR) */
			//(function() {
			var separatorForGlobalizedLiterals = "###";
			var surveoGlobalizationData = "surveoGlobalizationData";
			var surveoAdvancedLiterals = "surveoAdvancedLiterals";
		
			window.getAllSurveoLiteralsToBeGlobalized = function(snippet) {
				var allContainerChildrens = ODP.document.getAllChildren(snippet['com.opendataplatform.document.id']);
				var literals = {};
				var literalsForDataSet = [];
				var navigationTexts;
				
				function containsUnicodeCodepoints(LiteralID) {
					return /[^\u0000-\u00ff]/.test(LiteralID);
				}
				
				for (var a = 0, len = allContainerChildrens.length; a < len; a++) {
					for (var k in allContainerChildrens[a]) {
						if (k == "Navigation custom texts") {
							switch (allContainerChildrens[a]["Navigator"]) {
								case "Presenter":
									navigationTexts = "";
									break;
								case "Start":
									navigationTexts = "Start";
									break;
								case "Continue":
									navigationTexts = "Continue";
									break;
								case "Thank you":
									navigationTexts = "Thank you";
									break;
								default:
									navigationTexts = "Back,Next";
									break;
							}

							if (allContainerChildrens[a][k] && allContainerChildrens[a][k].length > 0) {
								navigationTexts = allContainerChildrens[a][k];
							}
							if (navigationTexts != "") {
								var navigationTextsAsArray = navigationTexts.split(",");
								for(var navText = 0, navTextLen = navigationTextsAsArray.length; navText < navTextLen; navText++) {
									literals[navigationTextsAsArray[navText]] = "";
								}
							}
						}
						
						if(k === "Globalized Literals") {
							if (typeof allContainerChildrens[a][k] !== "undefined" && allContainerChildrens[a][k] != "") {
								var tempLiterals = allContainerChildrens[a][k].split(separatorForGlobalizedLiterals);

								for(var tempLiteral = 0, tempLiteralsLen = tempLiterals.length; tempLiteral < tempLiteralsLen; tempLiteral++) {
									literals[tempLiterals[tempLiteral]] = "";
								}
							}
						}
					}
				}
				
				if(snippet["Custom text on submit"] && snippet["Custom text on submit"] !== "") {
					literals[snippet["Custom text on submit"]] = "";
				} else {
					//default value = 'Thank you!<br>Your feedback will help us to improve our services.'
					literals["Thank you!<br>Your feedback will help us to improve our services."] = ""; //compatibility with old versions of projects
				}

				for(var k in literals) {
					if(k !== "") {
						literalsForDataSet[literalsForDataSet.length] = k;
					}
				}
				
				var globalizationDataSetQuery = {
					"action" : "exec",
					"dataset" : {
						"datasetname" : "/Apps/SM/Survey/ProtoSurveyGlobalization"
					},
					"parameters" : [{
							"name" : "SecurityObjectUserID",
							"value" : null
						}, {
							"name" : "ProtoSurveyID",
							"value" : snippet['Survey ID']
						}, {
							"name" : "Language",
							"value" : null
						}, {
							"name" : "Localization",
							"value" : null
						}, {
							"name" : "MiscSettings",
							"value" : null
						}
					]
				};
				globalizationDataSetStr = Open.objectToString(globalizationDataSetQuery);			

				var advancedLiteralsQueryStr = {
					"action" : "exec",
					"dataset" : {
						"datasetname" : "/System/Platform/Globalization/LiteralsGetTranslations"
					},
					"parameters" : [{
							"name" : "SecurityObjectUserID",
							"value" : null
						}, {
							"name" : "LiteralIDs",
							"value" : literalsForDataSet.join(String.fromCharCode(29))
						}, {
							"name" : "Language",
							"value" : snippet['Globalization Languages List'].toLocaleLowerCase().replace("original,","")
						}, {
							"name" : "MiscSettings",
							"value" : null
						}
					]
				};
				
				advancedLiteralsQuery = Open.objectToString(advancedLiteralsQueryStr);
				if (ODP.document.currentRenderer == "server" || (typeof SM != "undefined" && SM.SurveoDesigner != "undefined")) {
					// GETTING SURVEY LITERALS ON SERVER
					Open.settings.xmlHTTP.async = false;
					Open.serverRequest(globalizationDataSetStr, surveoGlobalizationData, true);
					Open.getDataSet(globalizationDataSetStr);
					Open.serverRequest(advancedLiteralsQuery, surveoAdvancedLiterals, true);
					Open.getDataSet(advancedLiteralsQuery);
					Open.settings.xmlHTTP.async = true;
					return [surveoGlobalizationData,surveoAdvancedLiterals];
				}
			//})();
			}
			
			var test = window.getAllSurveoLiteralsToBeGlobalized(snippet);
			
			if (doc.currentRenderer == "server") {
				return;
			}
			
			if (typeof window.console == undefined) {
				window.console = function () {}
				window.console.log = function () {}
				window.console.warn = function () {}
				window.console.error = function () {}

			}
			if (typeof window.requestAnimFrame === "undefined") {
				window.requestAnimFrame = (function () {
					return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function (
						/* function */ callback, 
						/* DOMElement */ element) {
						window.setTimeout(callback, 1000 / 60);
					};
				})();
			}
			if (navigator.userAgent.search("MSIE 7") > -1) {
				if (!window.Element) {
					Element = function () {};

				}

				Element.prototype.setStyle = function (property, value) {
					var value = value.toString();
					if (value.search(";") == -1) {
						this.style.setAttribute(property, value, 0);
					} else {
						var deconstructComplexCSSValuesArray = value.split(";");

						this.style.setAttribute(property, deconstructComplexCSSValuesArray[0], 0);
						if (typeof deconstructComplexCSSValuesArray !== 'undefined') {

							for (var m = 1, len = deconstructComplexCSSValuesArray.length; m < len; m++) {
								this.style.setAttribute(deconstructComplexCSSValuesArray[m].split(":")[0], deconstructComplexCSSValuesArray[m].split(":")[1]);
								//console.log(deconstructComplexCSSValuesArray[m].split(":")[0] + " : " + deconstructComplexCSSValuesArray[m].split(":")[1]);
							}
						}
					}
				}
				return this;
			} else {
				// if (typeof Element.setStyle === "undefined") {
				Element.prototype.setStyle = function (property, value) {
					var deconstructComplexCSSValuesArray;
					var value = value.toString();
					try {
					if (value.search(";") == -1) {
						this.style[property] = value;
					} else {

						deconstructComplexCSSValuesArray = value.split(";");
						this.style[property] = deconstructComplexCSSValuesArray[0];

						if (typeof deconstructComplexCSSValuesArray === 'undefined') {

							return;
						}

						for (var m = 1, len = deconstructComplexCSSValuesArray.length; m < len; m++) {
							// try {
							this.style[deconstructComplexCSSValuesArray[m].split(":")[0]] = deconstructComplexCSSValuesArray[m].split(":")[1];
							//console.log(deconstructComplexCSSValuesArray[m].split(":")[0] + " : " + deconstructComplexCSSValuesArray[m].split(":")[1]);
							// } catch (e) {
							// alert(e + ' at 2nd level property: ' + deconstructComplexCSSValuesArray[m].split(":")[0]);
							// }


						}
					}

					} catch (e) {
						console.log(e + ' at property: ' + property);
						console.error("Caller function body:");
						console.error(arguments.callee.caller.toString());
					}
					return this;
				};

			}
			if (!document.getElementsByClassName || !ODP.window.document.getElementsByClassName) {
				// try {
				// ODP.window.document.getElementsByClassName = function (name, optionalTagName) {
				ODP.window.document.getElementsByClassName = Element.prototype.getElementsByClassName = function (name, optionalTagName) {
					/*sslavchev EDDITED : this enables getElementsByClassName in IE with extended parameters
					 */

					// try {
					if (!isNaN(name[0])) {
						// console.log("skipped the " + name);
						return "";
						/** This should not happen : means class begins with a number **/

					}

					var matchingElements = null;

					if (document.querySelectorAll) {

						matchingElements = this.querySelectorAll("." + (name.split(" ")).join(" ."));
						// console.log("." + (name.split(" ")).join(" ."));
						// console.log("we're okay, qrysel is available");
						return matchingElements;
					} else {
						matchingElements = new Array();
						var optionalTagName = optionalTagName || "*";
						var allNeededElements = this.getElementsByTagName(optionalTagName),
						buffCurrentEl = null,
						len = allNeededElements.length - 1;
						// console.log(len + " @getting the getElementsByTagName() length");
						// console.error(allNeededElements);
						while (len > -1) {

							//console.log(len + " @descending down the getElementsByTagName tree");
							buffCurrentEl = allNeededElements[len];
							if (!buffCurrentEl) {
								return;
							}
							// try {


							if (buffCurrentEl.getAttribute("class") == optionalTagName || buffCurrentEl.getAttribute("className") == optionalTagName || buffCurrentEl.className == optionalTagName) {
								matchingElements.push(buffCurrentEl);

							}
							// } catch (e) {
							// alert(e + " @setStyle");
							// }
							len--;
						}
						return matchingElements;

					}
					// } catch (e) {


					// alert(e + ' @getElementsByClassName');
					// }
				}

				// } catch (e) {
				// alert(e + ' @creating the setStyle');
				// }
				ODP.window.document.createElementWithInheritance = function (type) {
					var m = document.createElement(type);
					m.getElementsByClassName = Element.prototype.getElementsByClassName;
					m.setStyle = Element.prototype.setStyle;
					return m;
				}

			}
			var snippet = doc.getSnippet(instanceID);
			var allChildren = doc.checkChildren(instanceID);
			var uagent = navigator.userAgent.toLowerCase();
			var isMozilla = false;
			var isOpera = false;
			var isMobile = false;
			var isPortrait = false;
			var isSmallDevice = false;
			var isOld = isOld;
			var isWebkit = false;
			var isWPhone = false;
			ODP.Surveo.params.buttonsLock = 1;
			isPortrait = (document.body.scrollHeight > document.body.scrollWidth);
			isMobile = (uagent.search('ipad') > -1) || (uagent.search('ipod') > -1) || (uagent.search('iphone') > -1 || (uagent.search('android') > -1) || (uagent.search('kindle') > -1) || (uagent.search('silk-accelerated') > -1));
			isSmallDevice = ((uagent.search('ipod') > -1) || (uagent.search('iphone') > -1) || document.body.scrollHeight < 768);
			isOld = ((uagent.search('msie') > -1) && (uagent.search('msie 10') == -1));
			isMozilla = (uagent.search('firefox') > -1);
			isOpera = (uagent.search('opera') > -1);
			isWebkit = (uagent.search('applewebkit') > -1) && !isMobile;
			isWPhone = (uagent.search('windows phone') > -1 || uagent.search('wpdesktop') > -1 || window.surveyW8);
			/***********************************************************************/
			/**GLOBALLY ACCESSIBLE VARIABLES AND CLASSES**/
			/***********************************************************************/
			ODP.Surveo.slideObject = function (/* prototype for slides in slideStructure ; NOT USED YET*/
				index,
				MainDivID,
				containsSnippets,
				navigatorObjectWithEvents) {
				/** private **/
				var hContent = containsSnippets || [];
				var hNavigatorObjectWithEvents = navigatorObjectWithEvents || [];
				/* 	hNavigatorObjectWithEvent prototype :


				hNav = {
				boundEvents = [{
				event : "next",
				handler: function(){}
				}
				];


				} */
				/** public **/

				/* getters */

				this.getContent = function () {
					return hContent;
				}

				/* setters */

				this.setContent = function (contentArray) {
					hContent = contentArray;
					return this;
				}

				this.addContent = function (contentObject) {
					hContent.push(contentObject);
					return this;
				}
				/** Initiate events **/
				var len = hNavigatorObjectWithEvents.length || 0;
				/** I know, right! **/
				for (var c = 0; c < len; c++) {
					ODP.Surveo.debug.addHandlersForCustomEvents(hNavigatorObjectWithEvents[c].event,
						hNavigatorObjectWithEvents[c].handler /** invoking handler **/
					);
				}
			};
			ODP.Surveo.questionObject = function (/* prototype for objects in questionData */
				Answers, /* answer options */
				MainDivID, /* ID of the slide, containing the question */
				hiddenAnswers, /* answer options currently hidden */
				hideAnswersFunction,
				isPersistent, /* should this be cleared by a reset function */
				isRequired, /* blocks navigation until answered or doesn't*/
				isSkiped,
				moveNext, /* advance on answer selection or only by navigation controls*/
				setFunction,
				resetFunction,
				qiestionProtoID,
				isDisplayOnce, /* show again after once been filled*/
				orientationHandler, /* a function to be fired upon orientationChange*/
				colorCodeFunction,
				continuousSumQuestionsAsArray, /* apply color coding to answer options */
				setLiteralsFunction, /* apply new literals to question text and question answers  */
				additionalDataForQuestion /* NEW FOR TEST. Save here what you want to use in snippet */

				/** UNLISTED PARAMETERS - optional
				setLanguageFunction,
				Language1,
				Language2,
				Language3,
				Language4,
				Language5,
				---
				Language10
				 **/
			) {

				/** private **/
				var hAnswers = Answers;
				var hMainDivID = MainDivID;
				var hhiddenAnswers = hiddenAnswers;
				var hisPersistent = isPersistent;
				var hisRequired = isRequired;
				var hisSkiped = isSkiped;
				var hlanguage = null;
				var hisDisplayOnce = isDisplayOnce;
				var hmoveNext = moveNext;
				var parentSlide = ODPWindow.document.getElementById(hMainDivID);
				var parentSlideIndex = null;
				var hquestionProtoID = qiestionProtoID;
				var hcontinuousSumQuestionsAsArray = continuousSumQuestionsAsArray || [];
				/** public **/
				this.setFunction = setFunction;
				//this.setLanguageFunction =  setLanguageFunction?setLanguageFunction:function(){console.warn("FUNCTION NOT AVAILABLE!")};
				this.orientationHandler = orientationHandler;
				this.colorCodeFunction = colorCodeFunction;
				this.hideAnswersFunction = hideAnswersFunction;
				this.resetFunction = hisPersistent ? undefined : resetFunction;
				this.getAnswers = function () {
					return [hAnswers][0];
				};
				this.getMainDivID = function () {
					return hMainDivID;
				};
				this.getHiddenAnswers = function () {
					return hhiddenAnswers;
				};
				this.getPersistent = function () {
					return hisPersistent;
				};
				this.getRequired = function () {
					return hisRequired;
				};
				this.getSkiped = function () {
					return hisSkiped;
				};
				this.getMoveNext = function () {
					return hmoveNext;
				};
				this.getDisplayOnce = function () {
					return hisDisplayOnce;
				};
				this.getParentSlide = function () {
					return parentSlide;
				};
				this.getProtoID = function () {
					return hquestionProtoID;
				};
				this.getParentSlideIndex = function () {
					/*MAYBE A BETTER OPTIONS IS THERE, SOMEWHERE*/
					if (parentSlideIndex === null) {
						for (var p = 0, len = ODP.Surveo.params.slideArray.length; p < len; p++) {
							if (hMainDivID == ODP.Surveo.params.slideArray[p].id) {
								parentSlideIndex = p;
								break;
							}
						}
					}
					return parentSlideIndex;
				};
				this.getContinuousSumQuestionsAnswersAsArray = function () {
					var bufQArray = [];
					for (var k = 0, len = hcontinuousSumQuestionsAsArray.length; k < len; k++) {
						bufQArray.push(ODP.Surveo.params.surveyResults[hcontinuousSumQuestionsAsArray]);
					}
					return bufQArray;
				};
				/* setters */
				this.setContinuousSumQuestionsAsArray = function (arrayOfQIDs) {
					hcontinuousSumQuestionsAsArray = arrayOfQIDs;
					return this;
				};
				this.setAnswers = function (answ) {
					hAnswers = answ;
					return this;
				};
				this.setHiddenAnswers = function (hAnsw) {
					hhiddenAnswers = hAnsw;
					return this;
				};
				this.setMoveNext = function (parMoveNext) {
					hmoveNext = parMoveNext;
					return this;
				};
				this.setPersistent = function (isPersistent) {
					hisPersistent = isPersistent;
					return this;
				};
				this.setRequired = function (isRequired) {
					hisRequired = isRequired;
					return this;
				};
				this.setSkiped = function (skipState) {
					hisSkiped = skipState;
					return this;
				};
				this.setLiteralsFunction = setLiteralsFunction;
				this.additionalDataForQuestion = additionalDataForQuestion;
				this.getQuestionGlobalizationLanguage = function (language) {
					return hlanguage;
				};
				this.setQuestionGlobalizationLanguage = function (language) {
					hlanguage = language;
					return this;
				};
				/*sslavchev EDDITED : below we will add the question to the slideStructure, in the respective slide*/
				/* ODP.Surveo.params.slideStructure[this.getParentSlideIndex].setContent(this); */

			};
			/**Custom Navigation Foundations - a class to describe Navigation type**/
			ODP.Surveo.navigationObject = function (predefinedType, parentSlide, customUIMarkupTop, customUIMarkupBottom, customEventHandlersForUI, customCSSToAdd) {
				/** Custom events object (customEventHandlersForUI){

				onClickTapAnywhere : functionHandler(),
				onClickTapPrev : functionHandler,
				onClickTapNextContinueFinish : functionHandler,
				onClickTapCustomUIControls : {UIElementID1 : functionHandler, UIElementID2 : functionHandler2, UIElementID3 : functionHandler3...}
				//NOTE : YOU CAN ALSO REDEFINE STANDARD NAVIGATION HANDLERS BY WRITING HERE; JUST FIND A WAY TO CLEAR THEIR MARKUP
				}**/
				/** Custom css string (customCSSToAdd)


				".stringCustomCSS{someProperty:someValue, anotherProperty: anotherValue} .stringCustomCSS2{someProperty2:someValue2, anotherProperty2: anotherValue2}"


				 **/
				var clickTapOrWE = ODP.Surveo.params.deploymentTarget.isMobile ? "ontouchstart" : "onclick";
				switch (predefinedType) {
					// case "normal" : break;
					// case "continueFinish" : break;
				case "presenter":
					ODP.Surveo.methods.addEvent(parentSlide, clickTapOrWE, onClickTapAnywhere);

					break;

				case "custom":
					this.topNavMarkup = customUIMarkupTop;
					/**Example : <button id="UIElementID1_thatIncludesTheInstanceIDForExample" class="cssCustomClass"></button>**/
					this.bottomNavMarkup = customUIMarkupBottom;
					break;
				default:

					break;
				}

				/**Predefined types should mb generate their own markup? Or mb custom ones delete the default markup??? Don't know...**/

				this.initCustomEvents = function () {
					/** get parentSlide Top And Bottom; Assign each handler function to the respective element By ID **/
					var flipOverCustomUIelements;
					for (var k in customEventHandlersForUI) {
						flipOverCustomUIelements = parentSlide.getElementById(k);
						if (!flipOverCustomUIelements) {
							continue;
						}
						/**REMOVAL OF INLINE HANDLERS HERE?! e.g. "flipOverCustomUIelements.onclick ="" or another suitable"**/
						ODP.Surveo.methods.addEvent(flipOverCustomUIelements, clickTapOrWE, customEventHandlersForUI[k]);
						/*assign*/

					}

				};

				this.addCustomCSS = function () {
					ODP.Surveo.methods.addStyleTagsProperly(customCSSToAdd);
				};

				/*ACCESSOR METHODS */

				/** GETTERS **/
				this.getNavMarkup = function () { //use this to get the markup in your snippet; run the initCustomEvents at an appropriateTime;
					return {
						"top" : this.topNavMarkup,
						"botttom" : this.bottomNavMarkup
					};

				};

			}

			ODP.Surveo.params.isInDesigner = ((renderer === 'design' || typeof SM !== "undefined"));
			ODP.Surveo.params.callbacksFinished = true;
			ODP.Surveo.params.isMobileRenderer = isMobile;
			ODP.Surveo.params.isPortrait = isPortrait;
			ODP.Surveo.params.isSmallDevice = isSmallDevice;
			ODP.Surveo.params.isMozilla = isMozilla;
			ODP.Surveo.params.slideArray = [];
			ODP.Surveo.params.slideCount = 0;
			ODP.Surveo.params.swipeNavigationEnabled = (snippet['Enable swipe navigation'] === 'Yes');
			ODP.Surveo.params.keyboardNavigationEnabled = (snippet['Enable keyboard navigation'] === 'Yes');
			ODP.Surveo.params.loaderProgress = 0;
			/* progress indicator for surveys'  loading*/
			ODP.Surveo.params.separatorForGlobalizedLiterals = separatorForGlobalizedLiterals;
			ODP.Surveo.params.autoRestartEnabled = (snippet['Auto restart after'] && snippet['Auto restart after'] !== "Disable") ? true : false;
			ODP.Surveo.params.autoRestartAfter = (ODP.Surveo.params.autoRestartEnabled) ? (parseInt(snippet['Auto restart after'],10) * 1000) : false;
			ODP.Surveo.params.onClickFinishButton = snippet['After last slide'];
			ODP.Surveo.params.customFinishText = snippet['Custom text on submit'];
			ODP.Surveo.params.customFinishFunctionFlag = (ODP.Surveo.params.onClickFinishButton === "Finish survey");
			ODP.Surveo.params.submitOnAutoRestart = (snippet['Submit on auto restart'] === "Yes");
			ODP.Surveo.params.submitOnClose = (snippet['Submit on close'] === "Yes");
			
			ODP.Surveo.methods.onActionHandler = function(event) {
				if(event.type == "mousemove") {
					var changedTouche = (ODP.Surveo.params.isMobileRenderer) ? event.touches[0] : event;
					if(typeof this.lastMousePosition !== "undefined") {
						var minimumMovementInPixels = 10;
						if(Math.abs(this.lastMousePosition.top - changedTouche.clientY) < minimumMovementInPixels || Math.abs(this.lastMousePosition.left - changedTouche.clientX) < minimumMovementInPixels) {
							return;
						} else {
							this.lastMousePosition = {
								"top" : changedTouche.clientY,
								"left" : changedTouche.clientX
							}
						}
					} else {
						this.lastMousePosition = {
							"top" : changedTouche.clientY,
							"left" : changedTouche.clientX
						}
					}
				}
				if(ODP.Surveo.params.autoRestartEnabled) {
					var srvSlide = ODP.Surveo.snippets.slide;
					srvSlide.initAutoSendHandler(srvSlide.autoSendHandler, ODP.Surveo.params.autoRestartAfter);
				}
			}
			
			ODP.Surveo.methods.overrideResource = function (resourceInstanceID, content) {
				var resource = ODP.document.getSnippet(resourceInstanceID);
				if(resource) {
					resource.Content = content;
				}
				
				return resourceInstanceID;
			}	
			
			ODP.Surveo.methods.addEvent = function (elem, type, eventHandle) {
				if (elem == null || elem == undefined) {

					return;
				}
				if (elem.addEventListener) {

					elem.addEventListener(type, eventHandle, false);
				} else {
					if (elem.attachEvent) {

						elem.attachEvent("on" + type, eventHandle);

					} else {

						elem["on" + type] = eventHandle;
					}
				}
			};
			
			ODP.Surveo.methods.removeEvent = function (elem, eventType, handler) {
				if(elem && eventType && handler) {
					if (elem.removeEventListener) {
						elem.removeEventListener(eventType, handler, false);
					}
					if (elem.detachEvent) {
						elem.detachEvent('on' + eventType, handler);
					}
				}
			};
			
			/** Handle missused eventlisteners for old browsers **/
			ODP.Surveo.params.surveysStatus = {
				/**VARIABLE COUNTERS**/
				"sent" : 0,
				"onhold" : 0,
				"failed" : 0,
				/**GUI elements**/
				"visualizer" : {
					"box" : '',
					"config" : {
						/* unused to date */
						"css" : ""
					},
					"init" : function () {
						/* initiate GUI elements creation */
						if(!this.hasCSSadded) {
							var css = [
								"#surveysStatussOverlay {",
									"position: absolute;",
									"right: 0;",
									"background: rgba(235, 235, 235, 0.5);",
									"margin: 10px;",
									"padding: 10px 10px;",
									"color: white;",
									"border-radius: 5px;",
								"}",
								
								"#surveysStatussOverlay b {",
									"background-size: 100% 100%;",
									"padding: 0px 5px;",
									"border-radius: 5px;",
									"text-shadow: #424242 0.05em 0.05em 0.05em;",
									"box-shadow: #757575 1px 1px 1px;",
									"background-size: 100% 100%;",
									"background-repeat: no-repeat;",
									"font-family: Arial Black, Gadget, sans-serif;",
								"}",
								
								"#surveysStatusCounterGreen {",
									"background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA6CAIAAAD+yqSwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEE3NDc0MjY3OTBGMTFFM0EyRkFCMEQyMjhGMkU0Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEE3NDc0MjU3OTBGMTFFM0EyRkFCMEQyMjhGMkU0Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU2MzhmYmNkLWVjNjAtNGM0OC1hNjc4LTU0MzY0ODNhNzE4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6m/vuZAAAAZElEQVR42kRPuRGAMAzTmZHZjKloaOgoIuEvSeGTLMvfcb2nmcwImgAPmTSMUmmKfGNoTIRj+SDYcB6eqA2WLrZ31Zn4fHfP831UcZ+H7G+9OSYnlr4DG/1uoPLZk/84B/QLMABBI4mpPRWXiAAAAABJRU5ErkJggg==');",
								"}",
								"#surveysStatusCounterYellow {",
									"background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA6CAIAAAD+yqSwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTgwRkVBMTQ3OTBGMTFFMzg5NzVBMTNCOTJGMDVEQTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTgwRkVBMTM3OTBGMTFFMzg5NzVBMTNCOTJGMDVEQTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU2MzhmYmNkLWVjNjAtNGM0OC1hNjc4LTU0MzY0ODNhNzE4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PuBNsAAAAVElEQVR42oSLywmAQAxEx9Wq7L8QwSI8mWdIsrqC4GEY3nxm29amaWmClFxW7kwxvcPcLTfjvv7w7hg6Ieezcey1lW8UeXQ/HFln8ZE9fn8zuwQYAAMhUhOSjucDAAAAAElFTkSuQmCC')",
								"}",
								"#surveysStatusCounterRed {",
									"background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA6CAIAAAD+yqSwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDIzNDNDODM3OTBGMTFFMzg3OERDQjBGMTUxNTlFMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDIzNDNDODI3OTBGMTFFMzg3OERDQjBGMTUxNTlFMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU2MzhmYmNkLWVjNjAtNGM0OC1hNjc4LTU0MzY0ODNhNzE4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplNjM4ZmJjZC1lYzYwLTRjNDgtYTY3OC01NDM2NDgzYTcxODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5x6Oz0AAAAZUlEQVR42kxOCQqAMAxL65PFPwt+wTZmbQcywnKOgefl8MOR4SAdEN5onemw0czWha3DORuGOCCdzhyubumVy8vozfvcvdNJrkwwlFdds94vjvH578y9Xthbedg5Mf9CZep8AgwAY2FvmFcrdTcAAAAASUVORK5CYII=')",
								"}"
							];
							
							ODP.document.addRulesToMainStyleSheet(css.join(''));
							
							this.hasCSSadded = true;
						}
						
						this.box = ODPWindow.document.createElement('div');
						this.box.id = "surveysStatussOverlay";
						this.box.setAttribute("style", "");
						this.box.innerHTML = "<b id = 'surveysStatusCounterGreen'>" + ODP.Surveo.params.surveysStatus.sent + "</b>\t" +
											 "<b id = 'surveysStatusCounterYellow'>" + ODP.Surveo.params.surveysStatus.onhold + "</b>\t" +
											 "<b id = 'surveysStatusCounterRed'>" + ODP.Surveo.params.surveysStatus.failed + "</b>";
						var structure = ODP.Surveo.params.slideArray[0];
						// try {
						if (!structure) {
							return false;
						}
						structure.appendChild(this.box);
						return true;
						// } catch (e) {
						// }


					},
					"update" : function () {
						/* update GUI */
						//this.box.innerHTML = "<b>" + ODP.Surveo.params.surveysStatus.sent + "</b><b>" + ODP.Surveo.params.surveysStatus.onhold + "</b>    <b>" + ODP.Surveo.params.surveysStatus.failed + "</b>";
						this.box.innerHTML = "<b id = 'surveysStatusCounterGreen'>" + ODP.Surveo.params.surveysStatus.sent + "</b>\t" +
											 "<b id = 'surveysStatusCounterYellow'>" + ODP.Surveo.params.surveysStatus.onhold + "</b>\t" +
											 "<b id = 'surveysStatusCounterRed'>" + ODP.Surveo.params.surveysStatus.failed + "</b>";
						// this.box.className += "refresh";//umad bro?


					},
					"destroy" : function () {
						/* destroy GUI; remove box from DOM */
						var structure = ODP.Surveo.params.slideArray[0];
						if (this.box !== '') {
							structure.removeChild(this.box);
							this.box = {};
						}
					}
				}
			};
			ODP.Surveo.params.loadingBox = {
				/* Displays loading animation and updates the interface on demand */
				animationContainer : {},
				/*dom reference to where the animations are stored*/
				counter : {},
				/*dom reference to the counter container (percentage)*/
				progressBar : {},
				/*dom reference to the progress bar*/
				init : function (parent, showProgress, text, permanent) {
					// return;
					var text = text || 'Preparing survey';
					/* Create and display the loading box */
					showProgress = showProgress || false;
					if (renderer === 'design') {
						return;
					}
					if (typeof SM !== 'undefined') {
						return;
					}
					if (typeof surveio !== "undefined") {
						/* backwards compatible with old versions */
						// try {
						surveio.unmask();
						// } catch (e) {
						// alert(e + " @surveo_unmask");
						// }
					}
					ODP.Surveo.params.blockRotationHandling = true;
					/* Reduce the number of rotations to a minimum; don't rotate on initialization */
					if ((!showProgress) && (typeof surveio !== "undefined")) {
						/*show "surveio" loading on orientation change where available*/

						surveio.mask('<div class="kiva_loading" style="background:rgba(0,0,0,0.4);-webkit-transition-duration:300ms;-webkit-transform:translate3d(0,0,1000px);text-align:center;">Loading&hellip;</div>'); //for mobalytics
						this.animationContainer = ODPWindow.document.getElementsByClassName("kiva_loading")[0];

						this.counter = document.createElement("div");

						this.counter.id = "somerandomID";
						// try {
						this.animationContainer.appendChild(this.counter);
						// } catch (e) {
						// alert(e + " @blockRotationHandling");
						// }
					} else {

						parent = parent || ODPWindow.document.body;
						parent = (ODP.document.renderTarget === "SurveoDesignerSlidePreview") ? ODP.window.document.getElementById(ODP.document.renderTarget).parentNode : parent;
						/* Prepare animation container for displaying */
						this.animationContainer = ODPWindow.document.createElement("div");
						this.animationContainer.setStyle("width", "100%");
						this.animationContainer.setStyle("height", "100%");
						this.animationContainer.setStyle("zIndex", "1501");
						this.animationContainer.setStyle("position", "absolute");
						this.animationContainer.setStyle("top", "0px");
						this.animationContainer.setStyle("left", "0px");
						if(!ODP.Surveo.params.deploymentTarget.isOldBrowser) {
							this.animationContainer.setStyle("background", "rgba(0,0,0,0.6)");
						}
						this.animationContainer.innerHTML = '<div id = "bootStrap_mask" ><div id = "bootStrap_bCont"><div id = "bootStrap_sCont"><div id = "bootStrap_text"><div><span id="status">' + text + '</span><span id="perc">0%</span></div></div><div id = "bootStrap_pBar"><div id = "bootStrap_bar"></div></div></div></div></div>';
						this.animationContainer.id = "anicont";
						// try {
						parent.appendChild(this.animationContainer);
						// } catch (e) {
						//alert(e + " @loadingBoxInit")
						// }
						this.counter = ODPWindow.document.getElementById('perc');
						this.progressBar = ODPWindow.document.getElementById('bootStrap_bar');
						this.progressBar.setStyle("width", "0%");
						this.counter.innerHTML = "...";

					}
					this.markToDestroy = false;
					this.permanent = permanent || false;
					this.countDownTimeToLive = setInterval(function () {
						if ((ODP.Surveo.params.loaderProgress + 1 >= ODP.Surveo.params.slideCount) && !this.permanent) {
							//ODP.Surveo.params.loadingBox.destroy(); -> go to addSnippetMarkupSafely
							ODP.Surveo.params.loadingBox.markToDestroy = true;
						}
						if (ODP.Surveo.params.loadingBox.markToDestroy === true) {
							clearInterval(ODP.Surveo.params.loadingBox.countDownTimeToLive);
							/**The next lines tap into ODP.document and delete the cached instances & prototypes**/
							if (ODP.Surveo.params.deploymentTarget.isMobile) {
								// console.log(ODP.document.instances);
								var isQuestion;
								var qQount = 0;
								for (var i in ODP.Surveo.params.questionData) {
									/**Ensure loading can cover the time needed for all the renders to pass : only apply for more than one question slide**/
									isQuestion = !isNaN(i);
									if (isQuestion) {
										qQount++;
									}
								}
							}
							ODP.Surveo.params.loadingBox.countDownTimeToLive = null;
							if (ODP.Surveo.globalization && !ODP.Surveo.globalization.isGlobalizationInitialized) {
								if (typeof ODP.globalization.SurveyLiterals === "undefined") { // no ODP globalization, check in open store
									if (typeof Open.store[ODP.Surveo.params.surveoGlobalizationDataset] !== "undefined") { // we have data in store
										ODP.Surveo.globalization.getProtoSurveyLiterals();
										ODP.Surveo.globalization.globalizationInit()
									}
								} else {

									ODP.Surveo.globalization.globalizationInit();
								}
							}

						}
					}, 1000);
				},
				countDownTimeToLive : null,
				/**An interval to check wether destroy condition is met**/
				markToDestroy : false,
				update : function (fixedNumber, callback) {
					// return;
					/*Update loading box GUI*/
					// try {
					if (renderer === 'design') {
						return;
					}
					// console.log("update : " + fixedNumber + " callback : " + callback);
					// console.log(typeof ODP.Surveo.params.loaderProgress + " VS " + typeof ODP.Surveo.params.slideCount);
					// console.log(ODP.Surveo.params.loaderProgress + " VS " + ODP.Surveo.params.slideCount);
					var tempProgress = ((ODP.Surveo.params.loaderProgress + 1) / ODP.Surveo.params.slideCount);
					if (ODP.document.renderTarget === "SurveoDesignerSlidePreview") {
						tempProgress = ((ODP.Surveo.params.loaderProgress) / ODP.Surveo.params.slideCount);
					}
					
					//var tempProgress = fixedNumber || (Math.round(tempProgress * 100)) + "%";
					var tempProgress = ((fixedNumber || (Math.round(tempProgress * 100)) >= 100) ? 100 : (fixedNumber || (Math.round(tempProgress * 100))))  + "%"; // just in case ... if percents are > 100
					//console.log("tempProgress", tempProgress);
					this.counter.innerHTML = tempProgress;
					//this.progressBar.style = {};
					//this.progressBar.style.width = "";
					if(this.progressBar && this.progressBar.style && this.progressBar.style.width) {
						this.progressBar.style.width = tempProgress;
					}
					if (typeof callback === "function") {
						callback();
					}
					// } catch (e) {
					// alert(e + ' @loadingBox update');
					// this.progressBar.setStyle("width", tempProgress);
					// }
				},
				destroy : function (parent) {
					// return;
					/*Hide and destroy the loading box GUI*/
					if (renderer === 'design') {
						return;
					}
					// if (typeof SM !== 'undefined') {
					// return;
					// }
					this.animationContainer = ODPWindow.document.getElementById('anicont');
					if (typeof surveio !== "undefined") {
						/*backwards compatible with old versions*/
						// try {
						surveio.unmask();

						// } catch (e) {
						// alert(e + ' @loadingBox destroy');
						// }
					}
					if (this.animationContainer) {
						parent = parent || ODPWindow.document.body;
						// try {
						this.animationContainer.parentNode.removeChild(this.animationContainer);

						// } catch (e) {
						// alert(e + ' @loadingBox destroy 2');
						// }
					}
					
					
					setTimeout(function () {
						/* Invoke the unlocks to prepare the UI */
						/*return here when messing with unlockControls*/
						ODP.Surveo.methods.unlockControls(); //unlock buttons when caught in between transition; display:none breaks transition events!!!
						ODP.Surveo.methods.unlockControls(); //workaround - to be revised (single call wont show both buttons)
					}, 25); //timeout is time for transition + 25 ms -> maximum time for a browser to register an event / transition
					ODP.Surveo.params.blockRotationHandling = false;

				}
			};
			ODP.Surveo.params.deploymentTarget = {

				"currentLanguage" : "",
				/**GLOBALIZATION SETTINGS**/
				"supportsCSS" : function (property) {
					/*utility function : checks wether the specified property is supported by browser / device */
					var supporting = (function () {
						var div = document.createElement('div'),
						vendors = 'Khtml Ms O Moz Webkit'.split(' '),
						len = vendors.length;

						return function (prop) {
							if (prop in div.style)
								return true;

							prop = prop.replace(/^[a-z]/, function (val) {
									return val.toUpperCase();
								});
							while (len--) {
								if (vendors[len] + prop in div.style) {
									return true;
								}
							}
							return false;
						};
					})();
					return (supporting(property));
				},
				"implementsFunction" : function (functionName) {
					/*utility function : checks wether the specified function exists and returns a value */
					return ((functionName || functionName in window || functionName in window.document) && typeof functionName === 'function');
				},
				/* information about the platform, capabilities, libraries, hardware, layout of hosting environment */
				"isMobile" : isMobile,
				"isSmallDevice" : isSmallDevice,
				"isMozilla" : isMozilla,
				"isOpera" : isOpera,
				"isWebkit" : isWebkit,
				"isWPhone" : isWPhone,
				"isSilkBrowser" : (uagent.search('silk-accelerated') >  - 1),
				"isOldBrowser" : isOld /** IE & stuff **/
			,
				"fullPlatformName" : uagent,
				"hasAcceleration" : function () {},
				"platformOSName" : navigator.platform,
				"hasAddEventListener" : (typeof window.addEventListener !== 'undefined'),
				"hasAttachEvent" : (typeof window.attachEvent !== 'undefined'),
				"hasConsole" : (typeof window.console !== 'undefined'),
				"hasGeolocation" : (typeof geo !== 'undefined' || typeof navigator.geolocation !== 'undefined'),
				"hasCamera" : (typeof navigator.camera !== "undefined"),
				"hasPhoneGap" : ((typeof PhoneGap !== 'undefined') || (typeof Cordova !== 'undefined')),
				"fullBodyWidth" : function () {
					if (ODPWindow.document.getElementsByClassName('surveyStructure')[0]) {
						/**when called within the execution of a snippet - take the structure dimensions**/
						return ODPWindow.document.getElementsByClassName('surveyStructure')[0].offsetWidth || ODPWindow.document.body.scrollWidth || ODPWindow.document.body.offsetWidth;
					} else {
						return ODPWindow.document.body.scrollWidth || ODPWindow.document.body.offsetWidth;
						/**when called by the structure - detect the width of the device screen**/
					}
				},
				"fullBodyHeight" : function () {
					if (ODPWindow.document.getElementsByClassName('surveyStructure')[0]) {
						/**see fullbodyWidth**/
						return ODPWindow.document.getElementsByClassName('surveyStructure')[0].offsetHeight || ODPWindow.document.body.scrollHeight || ODPWindow.document.body.offsetHeight;
					} else {
						return ODPWindow.document.body.scrollHeight || ODPWindow.document.body.offsetHeight;
					}
				},
				"eventHandlers" : {
					"onStartString" : function () {
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						if (deploymentTarget.isMobile) {
							if (deploymentTarget.isWPhone && window.navigator.msPointerEnabled) {
								return "MSPointerDown";
							}
							return "ontouchstart";
						}
						return "onmousedown";
					},
					"onMoveString" : function () {
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						if (deploymentTarget.isMobile) {
							if (deploymentTarget.isWPhone && window.navigator.msPointerEnabled) {
								return "MSPointerMove";
							}
							return "ontouchmove";
						}
						return "onmousemove";
					},
					"onEndString" : function () {
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						if (deploymentTarget.isMobile) {
							if (deploymentTarget.isWPhone && window.navigator.msPointerEnabled) {
								return "MSPointerUp";
							}
							return "ontouchend";
						}
						return "onmouseup";
					},
					"onOverString" : function () {
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						if (deploymentTarget.isMobile) {
							if (deploymentTarget.isWPhone && window.navigator.msPointerEnabled) {
								return "MSPointerOver";
							}
							return "ontouchenter";
						}
						return "onmouseover";
					},
					"onOutString" : function () {
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						if (deploymentTarget.isMobile) {
							if (deploymentTarget.isWPhone && window.navigator.msPointerEnabled) {
								return "MSPointerOver";
							}
							return "ontouchleave";
						}
						return "onmouseout";
					}
				},
				"cacheOrientationForRegularBrowsers" : 0 /* So they don't reflow on every resize */

			};

			//ODP.Surveo.params.deploymentTarget.has3DTransforms = ODP.Surveo.params.deploymentTarget.supportsCSS('Perspective-origin') && (window.navigator.appVersion.search("NT 5.1") == -1);
			ODP.Surveo.params.deploymentTarget.has3DTransforms = (function Has3DSupport() {
				var sTranslate3D = "translate3d(0px, 0px, 0px)";

				var eTemp = document.createElement("div");

				eTemp.style.cssText = "  -moz-transform:" + sTranslate3D +
					"; -ms-transform:" + sTranslate3D +
					"; -o-transform:" + sTranslate3D +
					"; -webkit-transform:" + sTranslate3D +
					"; transform:" + sTranslate3D;
				var rxTranslate = /translate3d\(0px, 0px, 0px\)/g;
				var asSupport = eTemp.style.cssText.match(rxTranslate);
				var bHasSupport = (asSupport !== null && asSupport.length == 1);

				return bHasSupport;
			})();
			// ODP.Surveo.params.deploymentTarget.hasAcceleration.valueOf = function () {
				// /**detects wether it's an OS that supports HW acceleration**/
				// var ua = navigator.userAgent.toLowerCase();

				// if (ODP.Surveo.params.deploymentTarget.isMobile) {
					// if (ua.search("android") == (-1)) {
						// if (ODP.Surveo.params.deploymentTarget.isSilkBrowser) { //amazon silk (kindles)
							// return false;
						// }
						// return true;
					// }
					// if (ODP.Surveo.params.deploymentTarget.isSilkBrowser) {
						// return false;
					// }
					// var ver = parseFloat(ua.split("android")[1].split(";")[0]);
					// if (ver >= 3) {
						// return true; //android above 3.0
					// }

				// } else {
					// if (ODP.Surveo.params.deploymentTarget.isSilkBrowser || window.navigator.appVersion.search("NT 5.1")) {
						// return false;
					// }
					// return isWebkit; //desktop webkit
				// }
				// return false; //android but below 3.0; maybe add silk?
			// };
			ODP.Surveo.params.deploymentTarget.hasAcceleration.valueOf = function () {
				/**detects wether it's an OS that supports HW acceleration**/
				var ua = navigator.userAgent.toLowerCase();

				if (ODP.Surveo.params.deploymentTarget.isMobile) {
					if (ua.search("android") == (-1)) {
						if (ODP.Surveo.params.deploymentTarget.isSilkBrowser) { //amazon silk (kindles)
							return false;
						}
						return true;
					}
					if (ODP.Surveo.params.deploymentTarget.isSilkBrowser) {
						return false;
					}
					var ver = parseFloat(ua.split("android")[1].split(";")[0]);
					if (ver >= 3) {
						return true; //android above 3.0
					}

				} else {
					if (ODP.Surveo.params.deploymentTarget.isSilkBrowser || window.navigator.appVersion.search("NT 5.1") > -1) {
						return false;
					}
					return isWebkit; //desktop webkit
				}
				return false; //android but below 3.0; maybe add silk?
			};
			ODP.Surveo.params.deploymentTarget.fullBodyWidth.valueOf = ODP.Surveo.params.deploymentTarget.fullBodyWidth;
			/** accessible as a function or as a public field. Neat, huh? **/
			ODP.Surveo.params.deploymentTarget.fullBodyHeight.valueOf = ODP.Surveo.params.deploymentTarget.fullBodyHeight;
			/** same ol' **/
			ODP.Surveo.compatibility = {
				convertToDoubleDigitWithLeadingZeroString : function (number) {/**used for date/time formatting**/
					return (number.toString().length <= 1) ? ("0" + number.toString()) : number;
				},
				snippetRenderFallbackToBasicType : function (prorortypeGUIDToFallbackTo, snippetPropertiesObject, instanceIDOfOld) { //default snippets to generic type when not supported; base for functionality, implement in snippets for result;
					/**breaks jump in designer. However : it's not supposed to look like that in designer at all, imo**/
					var fallbackInstance = ODP.document.getNewSnippet(prorortypeGUIDToFallbackTo);
					/**defaulting to this questionType**/
					for (var propertyName in snippetPropertiesObject) {
						try {
							fallbackInstance.instance.push({
								name : propertyName,
								value : snippetPropertiesObject[propertyName]
							});
						} catch (e) {
							alert(e + "@" + propertyName);
						}
					}
					var cacheOldSnip = ODP.document.getSnippet(ODP.Surveo.params.defaultBackground);
					var cacheStructure = ODP.document.getSnippet(cacheOldSnip.instance[ODP.document.findIndexByName(cacheOldSnip.instance, "com.opendataplatform.document.id")].value);
					fallbackInstance.instance[ODP.document.findIndexByName(fallbackInstance.instance, "com.opendataplatform.document.parentid")].value = cacheStructure.instance[ODP.document.findIndexByName(cacheStructure.instance, "com.opendataplatform.document.id")].value;
					ODP.document.updateJSON(fallbackInstance);
					ODP.document.addAsObjects();
					return fallbackInstance.proto.ui.render(fallbackInstance.instance[ODP.document.findIndexByName(fallbackInstance.instance, "com.opendataplatform.document.id")].value, documentRef, renderer);
				}

			}
			ODP.Surveo.statistics = {
				/* Main geolocation\timestamp\gestures object */
				geo : {
					/*Geolocation stuff*/
					tempGeoData : {},
					/*temporary geodata storage, used for manipulation*/
					finalGeoData : [],
					/* hold the final data, as requested for submit  */
					getLocation : function (qID, answPosition) {
						/*initiates geoposition detection*/
						this.tempGeoData.timestamp = new Date().getTime();
						var getLocationSuccess = function getLocationSuccess(param) {
							/* Handle geolocation success */
							ODP.Surveo.statistics.geo.tempGeoData.latitude = param.coords.latitude + "";
							ODP.Surveo.statistics.geo.tempGeoData.longitude = param.coords.longitude + "";
							ODP.Surveo.statistics.geo.tempGeoData.accuracy = param.coords.accuracy + "";
							ODP.Surveo.statistics.geo.tempGeoData.timestampfix = param.timestamp;

							if (param.coords.latitude == 0 && param.coords.longitude == 0 && param.coords.accuracy == 0) {

								ODP.Surveo.statistics.geo.tempGeoData.latitude = 'null';
								ODP.Surveo.statistics.geo.tempGeoData.longitude = 'null';
								ODP.Surveo.statistics.geo.tempGeoData.accuracy = 'null';
								ODP.Surveo.statistics.geo.tempGeoData.timestampfix = 0;

							}
							if (answPosition != null && qID != "undefined") {
								ODP.Surveo.statistics.geo.storeGeoData(qID, answPosition);
							}

						};
						var getLocationFailiure = function getLocationFailiure(param) {
							/* Handle geolocation failiure */
							// alert('failed to get geolocation status');
							ODP.Surveo.statistics.geo.tempGeoData.latitude = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.longitude = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.accuracy = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.timestampfix = 0;
							ODP.Surveo.statistics.geo.storeGeoData(qID, answPosition);
						};
						var handleFailiures = function () {
							// alert('Warning: your browser\'s geolocation is disabled. Please switch it back on from the preferences!');
							handleFailiures = function () {
								/*nothing to do here!(yet)*/
							}
						};
						var getBrowserLocationFailiure = function getLocationFailiure(param) {
							/* Handle geolocation failiure */
							// alert('failed to get geolocation status');
							switch (param.code) {
							case 1:
								handleFailiures();
								break;
							case 2:
								break;
							case 3:
								break;
							case 0:
							default: ;
							}
							ODP.Surveo.statistics.geo.tempGeoData.latitude = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.longitude = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.accuracy = 'null';
							ODP.Surveo.statistics.geo.tempGeoData.timestampfix = 0;
							ODP.Surveo.statistics.geo.storeGeoData(qID, answPosition);
						};
						if (ODP.Surveo.params.deploymentTarget.hasGeolocation) {
							/*NOT this.geo!!!!!*/
							setTimeout(function () {

								if (typeof geo !== 'undefined') {
									geo.getCurrentPosition(getLocationSuccess, getLocationFailiure);
								} else {
									/* navigator.geolocation.getCurrentPosition(getLocationSuccess, getBrowserLocationFailiure); */
								}

							}, 0);
						}
						return
					},
					storeGeoData : function (qID, answPosition) {
						/*Push geodata for the question with qID in the finalGeoData array*/
						var firstTime = 0;
						var firstTimeGeo = 0;
						ODP.Surveo.statistics.geo.tempGeoData.question = qID;
						ODP.Surveo.statistics.geo.tempGeoData.answer = answPosition;
						var lat = ODP.Surveo.statistics.geo.tempGeoData.latitude;
						var lon = ODP.Surveo.statistics.geo.tempGeoData.longitude;
						var acc = ODP.Surveo.statistics.geo.tempGeoData.accuracy;

						if (typeof(ODP.Surveo.statistics.geo.finalGeoData) == "undefined") {
							ODP.Surveo.statistics.geo.finalGeoData = [];
						}
						var refTempGeodata = ODP.Surveo.statistics.geo.tempGeoData;
						var geoFinalCached = ODP.Surveo.statistics.geo.finalGeoData;
						firstTime = new Date().getTime();
						// firstTimeGeo = new Date().getTime(); //GET OVER HERE AND CHANGE TO GEOTIMESTAMP
						firstTimeGeo = refTempGeodata.timestampfix; //GET OVER HERE AND CHANGE TO GEOTIMESTAMP
						for (var c = geoFinalCached.length - 1; c >= 0; c--) {
							/*minimizing output by replacing repeating data with blanks*/
							if (geoFinalCached[c].lat != "" && geoFinalCached[c].lat != lat) {
								lat = "";
							}
							if (geoFinalCached[c].lon != "" && geoFinalCached[c].lon != lon) {
								lon = "";
							}
							if (geoFinalCached[c].acc != "" && geoFinalCached[c].acc != acc) {
								acc = "";
							}
						}

						var obj = {
							question : refTempGeodata.question,
							answer : refTempGeodata.answer,
							lat : lat,
							lon : lon,
							acc : acc,
							timeFromOS : (typeof(firstTime) == "undefined" ? 0 : parseInt(firstTime)) - (geoFinalCached[0] ? geoFinalCached[0].timeFromOS : 0),
							timeFromGeo : (typeof(firstTimeGeo) == "undefined" ? 0 : parseInt(firstTimeGeo)) - (geoFinalCached[0] ? geoFinalCached[0].timeFromGeo : 0)

						}
						ODP.Surveo.statistics.geo.finalGeoData.push(obj);

					},
					clearGeoData : function () {
						ODP.Surveo.statistics.geo.finalGeoData = [];
						/* clearing the geo data() */
					}

				},
				gestures : {}

				/* Handle gestures functionality */
			};
			
			/** INITIALIZATION **/
			
			/*DEFAULT SURVEO THEME (Blue theme) TO DO */
			defaultSurveoTheme = {};
			
			ODP.Surveo.params.surveoTheme = (typeof snippet['Surveo theme'] !== "undefined" && snippet['Surveo theme'] !== "") ? Open.stringToObject(snippet['Surveo theme']) : defaultSurveoTheme;
			
			var srvTheme = ODP.Surveo.params.surveoTheme;
			if(srvTheme && srvTheme['surveoContainer']) {
				var surveoContainerTheme = srvTheme['surveoContainer'];
				snippet["Layout"] = surveoContainerTheme["Layout"] ? surveoContainerTheme["Layout"] : snippet["Layout"];
				snippet["Scale factor"] = surveoContainerTheme["Scale factor"] ? surveoContainerTheme["Scale factor"] : snippet["Scale factor"];
				snippet["Orientation"] = surveoContainerTheme["Orientation"] ? surveoContainerTheme["Orientation"] : snippet["Orientation"];
				snippet["Content padding(global)"] = surveoContainerTheme["Content padding(global)"] ? surveoContainerTheme["Content padding(global)"] : snippet["Content padding(global)"];
				snippet["Content scrollable"] = surveoContainerTheme["Content scrollable"] ? surveoContainerTheme["Content scrollable"] : snippet["Content scrollable"];
				snippet["Default font family"] = surveoContainerTheme["Default font family"] ? surveoContainerTheme["Default font family"] : snippet["Default font family"];
				snippet["Header Font Color"] = surveoContainerTheme["Header Font Color"] ? surveoContainerTheme["Header Font Color"] : snippet["Header Font Color"];
				snippet["Body Font Color"] = surveoContainerTheme["Body Font Color"] ? surveoContainerTheme["Body Font Color"] : snippet["Body Font Color"];
				snippet["Show survey status counter"] = surveoContainerTheme["Show survey status counter"] ? surveoContainerTheme["Show survey status counter"] : snippet["Show survey status counter"];
				snippet["Show restart button(global)"] = surveoContainerTheme["Show restart button(global)"] ? surveoContainerTheme["Show restart button(global)"] : snippet["Show restart button(global)"];
				snippet["Show progress bar(global)"] = surveoContainerTheme["Show progress bar(global)"] ? surveoContainerTheme["Show progress bar(global)"] : snippet["Show progress bar(global)"];
				snippet["Show progress bar value"] = surveoContainerTheme["Show progress bar value"] ? surveoContainerTheme["Show progress bar value"] : snippet["Show progress bar value"];
				snippet["Progress bar value position"] = surveoContainerTheme["Progress bar value position"] ? surveoContainerTheme["Progress bar value position"] : snippet["Progress bar value position"];
				snippet["Enable swipe navigation"] = surveoContainerTheme["Enable swipe navigation"] ? surveoContainerTheme["Enable swipe navigation"] : snippet["Enable swipe navigation"];
				snippet["Enable keyboard navigation"] = surveoContainerTheme["Enable keyboard navigation"] ? surveoContainerTheme["Enable keyboard navigation"] : snippet["Enable keyboard navigation"];
				snippet["Width"] = surveoContainerTheme["Width"] ? surveoContainerTheme["Width"] : snippet["Width"];
				snippet["Height"] = surveoContainerTheme["Height"] ? surveoContainerTheme["Height"] : snippet["Height"];
				snippet["Custom script"] = surveoContainerTheme["Custom script"] ? surveoContainerTheme["Custom script"] : snippet["Custom script"];
				//ODP.Surveo.params["defaultQuestionTemplate"] = surveoContainerTheme["Default Question Template"] ? surveoContainerTheme["Default Question Template"] : ODP.Surveo.params["defaultQuestionTemplate"];
				if(surveoContainerTheme['Default Question Template'] && surveoContainerTheme['Default Question Template'] != "") {
					ODP.Surveo.params["defaultQuestionTemplate"] = ODP.Surveo.methods.overrideResource(ODP.Surveo.params["defaultQuestionTemplate"], surveoContainerTheme['Default Question Template']);
				} else {
					ODP.Surveo.params["defaultQuestionTemplate"] = ODP.Surveo.methods.overrideResource(ODP.Surveo.params["defaultQuestionTemplate"], "<div  class = \"surveoQuestionTemplateContainer\" style=\"width: 100%; height: 100%; position: relative;\"><div class = \"surveoQuestionTemplateQuestionText\" style=\"position: relative; background: #738089; background: -moz-linear-gradient(top, #738089 0%, #576570 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#738089), color-stop(100%,#576570));background: -webkit-linear-gradient(top, #738089 0%,#576570 100%); background: -o-linear-gradient(top, #738089 0%,#576570 100%);background: -ms-linear-gradient(top, #738089 0%,#576570 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#738089', endColorstr='#576570',GradientType=0 );background: linear-gradient(top, #738089 0%,#576570 100%); -webkit-border-radius:0.25em 0.25em 0em 0em;-moz-border-radius:0.25em 0.25em 0em 0em; border-radius:0.25em 0.25em 0em 0em;padding:0.5em; -box-sizing: border-box; -ms-box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; display: table;width: 100%; min-height: 3em; height: 3em; text-align: center;\"><div style=\"color: ###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###; font-weight: bold; vertical-align: middle; font-family: ###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###; display: table-cell;\">###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###</div></div><div class = \"surveoQuestionTemplateQuestionContent\" style=\"position: relative; height: auto; background: #F5F5F7; background: -moz-linear-gradient(top, #F5F5F7 0%, #EEEFF1 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#F5F5F7), color-stop(100%,#EEEFF1));background: -webkit-linear-gradient(top, #F5F5F7 0%,#EEEFF1 100%); background: -o-linear-gradient(top, #F5F5F7 0%,#EEEFF1 100%);background: -ms-linear-gradient(top, #F5F5F7 0%,#EEEFF1 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F5F5F7', endColorstr='#EEEFF1',GradientType=0 );background: linear-gradient(top, #F5F5F7 0%,#EEEFF1 100%); -moz-box-shadow: 0em 0em 0.2em #CBCED3;-webkit-box-shadow: 0em 0em 0.2em #CBCED3; box-shadow: 0em 0em 0.2em #CBCED3; min-height: 3em;\"><div class = \"surveoQuestionTemplateQuestionContentContainer\">###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###</div></div></div>");
				}
			}
			
			ODP.Surveo.params.timeoutHandler = null;
			ODP.Surveo.params.surveoDatasetLoaderID = snippet['Dataset Loader ID'];
			ODP.Surveo.params.contentScrollable = snippet['Content scrollable'];
			ODP.Surveo.params.surveoResourceFolderID = snippet['Resources ID'];
			ODP.Surveo.params.surveoLayout = ((ODP.Surveo.params.isSmallDevice) ? 'PDA/Cell (320x480)' : snippet['Layout']);
			ODP.Surveo.params.surveoAnimation = snippet['Animation'];
			ODP.Surveo.params.surveoOrientation = ((ODP.Surveo.params.isSmallDevice) ? 'Portrait' : snippet['Orientation']);
			ODP.Surveo.params.surveoGlobalizationDataset = surveoGlobalizationData;
			ODP.Surveo.params.advancedLiteralsDataset = surveoAdvancedLiterals;
			ODP.Surveo.params.blockRotationHandling = false;
			ODP.Surveo.params.surveoShowProgress = snippet["Show progress bar(global)"]; //global progress bar show/hide switch
			ODP.Surveo.params.surveoShowProgressValue = (snippet["Show progress bar value"] === "Yes"); //global progress bar show/hide switch
			ODP.Surveo.params.surveoShowRestart = snippet["Show restart button(global)"]; //global restart button show/hide switch
			ODP.Surveo.params.getSurveoProtoID = function () {
				if (Open.store[ODP.Surveo.params.surveoDatasetLoaderID]) {
					return Open.store[ODP.Surveo.params.surveoDatasetLoaderID]['data'][1][0]['ProtoSurveyID'];
				} else {
					return snippet["Survey ID"];
				}
			}; // wrong here, because we must get it from dataset ( Surveo Designer issue )
			ODP.Surveo.params.surveoProjectID = snippet["Survey ID"];
			ODP.Surveo.params.surveoIWR = snippet["Survey Submit Point"];
			ODP.Surveo.params.surveoIWRCodeQuestion = snippet["IWR code question ID"];
			ODP.Surveo.params.surveyInProgress = 0;
			ODP.Surveo.params.sendingInProgress = 0;
			ODP.Surveo.params.surveyResults = {};
			ODP.Surveo.params.resultObj = {};
			ODP.Surveo.params.defaultFontFamily = snippet["Default font family"];
			ODP.Surveo.params.headerTextColor = snippet["Header Font Color"];
			ODP.Surveo.params.bodyTextColor = snippet["Body Font Color"];
			ODP.Surveo.params.progressValuePosition = snippet["Progress bar value position"];
			ODP.Surveo.params.functionClearAll = []; //global reset functions queue
			ODP.Surveo.params.surveoSkipPatterns = ""; //global skip patterns
			ODP.Surveo.params.contentPadding = snippet["Content padding(global)"];
			ODP.Surveo.params.surveoLayoutParams = {};
			ODP.Surveo.params.assignedQueueIndices = {};
			ODP.Surveo.params.questionData = {};
			ODP.Surveo.params.skipDefinitions = {};
			ODP.Surveo.params.skipsEnabled = false;
			ODP.Surveo.params.isSurveoLoading = 0;
			ODP.Surveo.params.questionOrder = [];
			ODP.Surveo.params.surveyTimeIn = "";
			ODP.Surveo.params.hasCounter = (snippet["Show survey status counter"] === "Yes" && typeof surveio !== "undefined");
			ODP.Surveo.params.scaleFactor = snippet["Scale factor"];
			/**Fix screen proportions for browsers on unknown devices in browser preview mode**/
			if (!ODP.Surveo.params.isMobileRenderer && (renderer == 'preview' || renderer == '')) {
				if (ODP.Surveo.params.isPortrait) {
					ODP.Surveo.params.surveoOrientation = "Portrait";

				} else {

					ODP.Surveo.params.surveoOrientation = "Landscape";

				}
				if (isSmallDevice) {

					ODP.Surveo.params.surveoLayout = "PDA/Cell (320x480)";

				} else {
					ODP.Surveo.params.surveoLayout = "Tablet (768x1024)";

				}

			}
			/*********************************************************************************/

			if (ODP.Surveo.params.surveoOrientation == "Landscape") {
				ODP.Surveo.params.surveoLayoutParams.padding = "2%;";
				ODP.Surveo.params.surveoLayoutParams.navigationButtonsPctg = "";
				ODP.Surveo.params.surveoLayoutParams.progressLength = "91%;";
				ODP.Surveo.params.surveoLayoutParams.restartRight = "0%;";
				ODP.Surveo.params.surveoLayoutParams.restartInnerRight = "26%;";

				ODP.Surveo.params.surveoLayoutParams.progressTextLineHeight = "150%;"

			} else {
				ODP.Surveo.params.surveoLayoutParams.padding = "4%;";
				ODP.Surveo.params.surveoLayoutParams.navigationButtonsPctg = "";
				ODP.Surveo.params.surveoLayoutParams.progressLength = "82%;";
				ODP.Surveo.params.surveoLayoutParams.restartRight = "2%;";
				ODP.Surveo.params.surveoLayoutParams.restartInnerRight = "26%;";
				ODP.Surveo.params.surveoLayoutParams.progressTextLineHeight = "200%;"

			}
			if (ODP.Surveo.params.surveoLayout == "PDA/Cell (320x480)") {
				ODP.Surveo.params.surveoLayoutParams.progressTextLineHeight = "150%;"
			}
			if (ODP.Surveo.params.contentPadding === "No") {

				ODP.Surveo.params.surveoLayoutParams.padding = "0";

			}
			/*************************************
			 * SURVEO GLOBALIZATION
			 *************************************/

			//TO DO
			// snippet["Question for Globalization"] = "21372";
			// snippet["Globalization Languages List"] = "original,ar,ar-nn,ar-bh,ar-dz,de,el,en,es-pe,hi,mk,ro,sl,sq,tr,xh";

			var currentLanguage = "original";
			var forcedLanguage = ODP.document.getQuerystringParam("lang");

			if(forcedLanguage) {
				forcedLanguage = forcedLanguage.toLowerCase().replace(/-$/, ''); //removes last char if it is -
				var globalizationLangList = snippet["Globalization Languages List"].toLowerCase();
				var forcedLanguagePosition = globalizationLangList.split(",").indexOf(forcedLanguage);
				if( forcedLanguagePosition > -1 ) {
					currentLanguage = globalizationLangList.split(",")[forcedLanguagePosition];
				}

				var isForced = true;
			}

			ODP.Surveo.globalization = {
				"SurveyLiterals" : {
					"Answers" : {},
					"Questions" : {},
					"Sections" : {},
					"ProtoSurvey" : {},
					"globalizedLiterals" : {}
				},
				"isForced" : isForced,
				"currentLanguage" : currentLanguage, // set current globalization language for the project
				"startLanguage" : "original", // default language is always original
				"isGlobalizationInitialized" : false,
				"globalizationQuestion" : parseInt(snippet["Question for Globalization"], 10), // ID of question that will change globalization language
				"globalizationEnabled" : false,
				// function() {
				// if(typeof ODP.globalization.SurveyLiterals !== "undefined" || typeof Open.store[ODP.Surveo.params.surveoGlobalizationDataset] !== "undefined") {
				// if(snippet["Question for Globalization"] === "" || snippet["Globalization Languages List"] === "") {
				// return false;
				// }


				// return true;
				// }


				// return false;
				// },
				"setGlobalization" : function () {
					//get current language and change globalization
					this.currentLanguage = this.getGlobalizationLanguage();
				},
				"Globalization Languages Order" : snippet["Globalization Languages List"].toLowerCase(),
				"getGlobalizationLanguage" : function () {
					if (this.globalizationEnabled) {
						var allGlobalizationLanguages = this["Globalization Languages Order"].split(",");
						var globalLanguage = allGlobalizationLanguages[ODP.Surveo.params.surveyResults[this.globalizationQuestion] - 1];
						if (globalLanguage) {
							return globalLanguage;
						}
					}
					return "original";
				},
				"getProtoSurveyLiterals" : function () {
					var dataset = Open.store[ODP.Surveo.params.surveoGlobalizationDataset];

					var literals = {
						"ProtoSurvey" : {},
						"Questions" : {},
						"Sections" : {},
						"Answers" : {},
						"QuestionCategories" : {}
					};
					var data = dataset.data[0];
					var language;
					if (Open.isArray(data)) {
						for (var i = 0, ilen = data.length; i < ilen; i++) {
							language = data[i]["Language"].toLowerCase();
							localization = data[i]["Localization"].toLowerCase();
							if (typeof literals["ProtoSurvey"][language] === "undefined") {
								literals["ProtoSurvey"][language] = {};
							}
							literals["ProtoSurvey"][language][localization] = data[i];
						}
					}

					data = dataset.data[1];
					var objType;
					if (Open.isArray(data)) {
						for (var i = 0, ilen = data.length; i < ilen; i++) {
							language = data[i]["Language"].toLowerCase();
							localization = data[i]["Localization"].toLowerCase();
							objType = (data[i]["ItemType"] == "Q" ? "Questions" : "Sections");
							//console.log("objType", objType);

							if (typeof literals[objType][language] === "undefined") {
								literals[objType][language] = {};
							}
							if (typeof literals[objType][language][localization] === "undefined") {
								literals[objType][language][localization] = {};
							}
							literals[objType][language][localization][data[i]["ItemID"]] = {
								"Literal" : data[i]["Literal"],
								"Literal2" : data[i]["Literal2"]
							};
						}
					}

					data = dataset.data[2];
					if (Open.isArray(data)) {
						for (var i = 0, ilen = data.length; i < ilen; i++) {
							language = data[i]["Language"].toLowerCase();
							localization = data[i]["Localization"].toLowerCase();
							if (typeof literals["Answers"][language] === "undefined") {
								literals["Answers"][language] = {};
							}
							if (typeof literals["Answers"][language][localization] === "undefined") {
								literals["Answers"][language][localization] = {};
							}
							if (typeof literals["Answers"][language][localization][data[i]["AnswerID"]] === "undefined") {
								literals["Answers"][language][localization][data[i]["AnswerID"]] = {};
							}
							literals["Answers"][language][localization][data[i]["AnswerID"]][data[i]["AnswerPos"]] = data[i]["Literal"];
						}
					}

					data = dataset.data[3];
					if (Open.isArray(data)) {
						for (var i = 0, ilen = data.length; i < ilen; i++) {
							language = data[i]["Language"].toLowerCase();
							localization = data[i]["Localization"].toLowerCase();
							if (typeof literals["QuestionCategories"][language] === "undefined") {
								literals["QuestionCategories"][language] = {};
							}
							if (typeof literals["QuestionCategories"][language][localization] === "undefined") {
								literals["QuestionCategories"][language][localization] = {};
							}
							literals["Answers"][language][localization][data[i]["AnalysisQuestionCategory"]] = data[i]["Literal"];
						}
					}
					ODP.globalization.SurveyLiterals = {};
					ODP.globalization.SurveyLiterals.parameters = literals;
					//return literals;
				},
				"globalizationInit" : function () {
					var srvGlobalization = ODP.Surveo.globalization;
					srvGlobalization.globalizationEnabled = (typeof ODP.globalization.SurveyLiterals !== "undefined" || typeof Open.store[ODP.Surveo.params.surveoGlobalizationDataset] !== "undefined") ? ((snippet["Question for Globalization"] === "" || snippet["Globalization Languages List"] === "") ? false : true) : false;
					if (srvGlobalization.globalizationEnabled && (typeof SM === "undefined")) {
						if (typeof ODP.Surveo.params.questionData[srvGlobalization.globalizationQuestion] === "undefined" && !srvGlobalization.isForced) {
							//try again after 1 second if it fails again stop
							var countQuestion = 0;
							for (var k in ODP.Surveo.params.questionData) {
								if (countQuestion > 2) {
									break;
								}
								countQuestion++;
							}
							if (countQuestion <= 2) { // we have only start and end slide, try again
								//maybe it is not the safest case .... what happened if we have surveo project with 2 slides ?

								setTimeout(function () {
									srvGlobalization.globalizationInit();
								}, 1000);

								return;
							} else {
								srvGlobalization.isGlobalizationInitialized = false;
								console.warn("Globalization question is wrong!");
								return; // no such question
							}
						}

						var ODPSurveyLiterals = ODP.globalization.SurveyLiterals.parameters;
						var emptySpace = this.emptySpace;
						var srvSurveyLiterals = srvGlobalization.SurveyLiterals;

						var answerSets;
						var answerSet;
						var questionSets;
						var questionSet;
						var questionID;
						var ansLiteral;
						var sectionSets;
						var sectionSet;
						var sectionID;

						//get original question and anwer texts
						srvSurveyLiterals.Answers["original"] = srvGlobalization.getOriginalLiteralsForAnswers();
						srvSurveyLiterals.Questions["original"] = srvGlobalization.getOriginalLiteralsForQuestions();
						srvSurveyLiterals.Sections["original"] = srvGlobalization.getOriginalLiteralsFoSections();

						srvSurveyLiterals.ProtoSurvey = srvGlobalization.getProtoSurvey();

						//get answers text
						for (answerSets in ODPSurveyLiterals.Answers) {
							if (typeof srvSurveyLiterals["Answers"][answerSets] === "undefined") {
								srvSurveyLiterals["Answers"][answerSets] = {};
							}
							for (answerSet in ODPSurveyLiterals.Answers[answerSets]) {
								if (typeof srvSurveyLiterals["Answers"][answerSets][answerSet] === "undefined") {
									srvSurveyLiterals["Answers"][answerSets][answerSet] = {};
								}
								for (questionID in ODP.Surveo.params.questionData) { // for in all questionIDs
									if (!isNaN(questionID)) {
										if (typeof srvSurveyLiterals["Questions"]["original"][emptySpace][questionID] !== "undefined") { // check if we have questions
											srvSurveyLiterals["Answers"][answerSets][answerSet][questionID] = [];
											if (typeof srvSurveyLiterals.Answers["original"][emptySpace][questionID] !== "undefined") { // check if we have answers

												for (var i = 1, len = srvSurveyLiterals.Answers["original"][emptySpace][questionID].length; i < len + 1; i++) {
													currentLiteral = ODPSurveyLiterals.Answers[answerSets][answerSet][srvSurveyLiterals["Questions"]["original"][emptySpace][questionID]["ProtoAnswerID"]];
													if (typeof currentLiteral === "undefined") { //if currentLiteral doesn't exists
														continue;
													}

													if (typeof currentLiteral[i] === "undefined") { // get the original literal, if we don't have translation
														srvSurveyLiterals["Answers"][answerSets][answerSet][questionID].push(srvSurveyLiterals.Answers["original"][emptySpace][questionID][i - 1]);
													} else {

														srvSurveyLiterals["Answers"][answerSets][answerSet][questionID].push(currentLiteral[i]);
													}
												}
											}
										}
									}
								}
							}
						}

						//get question texts
						for (questionSets in ODPSurveyLiterals.Questions) {
							if (typeof srvSurveyLiterals.Questions[questionSets] === "undefined") {
								srvSurveyLiterals.Questions[questionSets] = {};
							}
							for (questionSet in ODPSurveyLiterals.Questions[questionSets]) {
								if (typeof srvSurveyLiterals.Questions[questionSets][questionSet] === "undefined") {
									srvSurveyLiterals.Questions[questionSets][questionSet] = {};
								}
								for (questionID in ODP.Surveo.params.questionData) { // for in all questionIDs
									if (!isNaN(questionID)) {
										if (typeof ODPSurveyLiterals.Questions[questionSets][questionSet][questionID] === "undefined") {
											srvSurveyLiterals.Questions[questionSets][questionSet][questionID] = {
												QuestionText : srvSurveyLiterals.Questions["original"][emptySpace][questionID]["QuestionText"]
											};
										} else {
											srvSurveyLiterals.Questions[questionSets][questionSet][questionID] = {
												QuestionText : ODPSurveyLiterals.Questions[questionSets][questionSet][questionID]["Literal"]
											};
										}
									}
								}
							}
						}

						//get sections text
						for (sectionSets in ODPSurveyLiterals.Sections) {
							if (typeof srvSurveyLiterals.Sections[sectionSets] === "undefined") {
								srvSurveyLiterals.Sections[sectionSets] = {};
							}
							for (sectionSet in ODPSurveyLiterals.Sections[sectionSets]) {
								if (typeof srvSurveyLiterals.Sections[sectionSets][sectionSet] === "undefined") {
									srvSurveyLiterals.Sections[sectionSets][sectionSet] = {};
								}
								for (sectionID in srvSurveyLiterals.Sections["original"][emptySpace]) { // for in all original section data
									var curSection = ODPSurveyLiterals.Sections[sectionSets][sectionSet][sectionID];
									if (typeof curSection === "undefined") {
										srvSurveyLiterals.Sections[sectionSets][sectionSet][sectionID] = {
											'ProtoSectStartText' : srvSurveyLiterals.Sections["original"][emptySpace][sectionID]['ProtoSectStartText'],
											'ProtoSectStartHiddenComment' : srvSurveyLiterals.Sections["original"][emptySpace][sectionID]['ProtoSectStartHiddenComment']
										};
									} else {
										srvSurveyLiterals.Sections[sectionSets][sectionSet][sectionID] = {
											'ProtoSectStartText' : curSection.Literal,
											'ProtoSectStartHiddenComment' : curSection.Literal2
										};
									}
								}

							}
						}
						
						//get globalized literals 
						var literals = Open.getDataSet(ODP.Surveo.params.advancedLiteralsDataset) ? Open.getDataSet(ODP.Surveo.params.advancedLiteralsDataset).data : [];
						var literalsNew = {};

						for(var a = 0, len = literals.length; a < len; a++) {
							if(typeof literalsNew[literals[a]['LiteralID']] === "undefined") {
								literalsNew[literals[a]['LiteralID']] = {};
							}
								
							literalsNew[literals[a]['LiteralID']][literals[a]['LanguageID']] = literals[a]['Literal'];
						}
							
						ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals = literalsNew;

						srvGlobalization.isGlobalizationInitialized = true;
					}
				},
				"emptySpace" : (String.fromCharCode(32)+String.fromCharCode(32)), // needed,
				"getLiteralForCurrentLanguage" : function(literal) {
					if(ODP.Surveo.globalization.SurveyLiterals && ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals && ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals[literal] && ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals[literal][this.currentLanguage]) {
						return ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals[literal][this.currentLanguage];
					} else {
						return literal;
					}
				},
				"getProtoSurvey" : function () {
					return Open.store[ODP.Surveo.params.surveoDatasetLoaderID]['data'][1][0]['ProtoSurveyID'];
				},
				"getOriginalLiteralsForAnswers" : function () {
					var emptySpace = this.emptySpace;
					var originalLiterals = {};
					originalLiterals[emptySpace] = {}; // this is in the system


					var surveoDataSet = Open.store[ODP.Surveo.params.surveoDatasetLoaderID];
					for (var questionID in ODP.Surveo.params.questionData) { // for in all questionIDs
						if (!isNaN(questionID)) { // if questionID is number
							for (var x = 0, len = surveoDataSet.data[3].length; x < len; x++) { // for in all questions in Surveo dataset
								if (questionID == surveoDataSet.data[3][x].ObjID) { // we have question
									if (surveoDataSet.data[3][x].ProtoAnswerID != 8) { // don't know why ...... is good
										var answerID = surveoDataSet.data[3][x].ProtoAnswerID;
									}
									if (answerID) { // we have answer proto id....get values
										for (var i = 0, len2 = surveoDataSet.data[4].length; i < len2; i++) {
											if (answerID == surveoDataSet.data[4][i].ProtoAnswerID) { // got answer set for question
												if (typeof originalLiterals[emptySpace][questionID] === "undefined") {
													originalLiterals[emptySpace][questionID] = [];
												}
												originalLiterals[emptySpace][questionID].push(surveoDataSet.data[4][i].Description);
											}
										}
									}
								}
							}
						}
					}
					return originalLiterals;
				},
				"getOriginalLiteralsForQuestions" : function () {
					var emptySpace = this.emptySpace;
					var originalLiterals = {};
					originalLiterals[emptySpace] = {}; // this is in the system
					var surveoDataSet = Open.store[ODP.Surveo.params.surveoDatasetLoaderID];
					for (var k in ODP.Surveo.params.questionData) {
						if (!isNaN(k)) {
							for (var x = 0, len = surveoDataSet.data[3].length; x < len; x++) {
								if (surveoDataSet.data[3][x].ObjID == k) {
									if (typeof originalLiterals[emptySpace][k] === "undefined") {
										originalLiterals[emptySpace][k] = {};
									}
									originalLiterals[emptySpace][k]["QuestionText"] = surveoDataSet.data[3][x].Text;
									originalLiterals[emptySpace][k]["ProtoAnswerID"] = surveoDataSet.data[3][x].ProtoAnswerID;
									break;
								}
							}
						}
					}
					return originalLiterals;
				},
				"getOriginalLiteralsFoSections" : function () {
					var emptySpace = this.emptySpace;
					var originalLiterals = {};
					var curSection;
					originalLiterals[emptySpace] = {}; // this is in the system
					var surveoDataSetSections = Open.store[ODP.Surveo.params.surveoDatasetLoaderID].data[2];

					//console.log(surveoDataSetSections);
					for (var a = 0, len = surveoDataSetSections.length; a < len; a++) {
						curSection = surveoDataSetSections[a];
						originalLiterals[emptySpace][curSection.ProtoSectStartID] = {
							'ProtoSectStartText' : curSection.ProtoSectStartText,
							'ProtoSectStartHiddenComment' : curSection.ProtoSectStartHiddenComment
						}
					}

					return originalLiterals;
				},

				"setGlobalizationForSlide" : function (slideIndex) {
					if (this.globalizationEnabled) {
						if (!this.isGlobalizationInitialized) { // init, if not
							this.globalizationInit();
						}
						var emptySpace = this.emptySpace;

						var nextQuestionIDs = [];
						var nextAnswersText = [];
						var nextQuestionID;
						var nextQuestionText;
						var nextSectionTexts = [];

						var currentLanguage;
						var currentLanguageVersion;
						var questionDataMember;
						var currentLanguageMember;
						var nextslideType = 'question';

						var surveyLiterals = this.SurveyLiterals;
						var currentQuestionData;
						var customLiterals = {};

						for (questionDataMember in ODP.Surveo.params.questionData) {
							if (ODP.Surveo.params.slideArray[slideIndex]) {
								currentQuestionData = ODP.Surveo.params.questionData[questionDataMember];
								if (currentQuestionData.getMainDivID() === ODP.Surveo.params.slideArray[slideIndex].id) {
									if (questionDataMember.indexOf('section') >= 0) {
										nextslideType = 'section';
									}

									nextQuestionIDs.push(questionDataMember); // because we can have multiple questions on next slide
									//console.log("questionDataMember", questionDataMember);

								}
							}
						}
						currentLanguage = this.currentLanguage.split("-")[0];
						currentLanguageVersion = (typeof this.currentLanguage.split("-")[1] === "undefined") ? emptySpace : this.currentLanguage.split("-")[1];

						for (var a = 0, len = nextQuestionIDs.length; a < len; a++) {
							nextQuestionID = nextQuestionIDs[a];
							nextQuestionData = ODP.Surveo.params.questionData[nextQuestionID];
							if (typeof nextQuestionData.setLiteralsFunction === "function") {
								if (nextQuestionData.getQuestionGlobalizationLanguage() === this.currentLanguage) { // if the slide is set with current global language, don't touch the markup
									continue;
								}

								switch (nextslideType) {
									case "question" : {
										var curQuestion = surveyLiterals.Questions[currentLanguage];
										var curAnswers = surveyLiterals.Answers[currentLanguage];

										if (curQuestion && curQuestion[currentLanguageVersion] && curQuestion[currentLanguageVersion][nextQuestionID] && curQuestion[currentLanguageVersion][nextQuestionID]["QuestionText"]) {
											nextQuestionText = curQuestion[currentLanguageVersion][nextQuestionID]["QuestionText"];
										} else {
											if(surveyLiterals && surveyLiterals.Questions && surveyLiterals.Questions['original'] && surveyLiterals.Questions['original'][emptySpace] && surveyLiterals.Questions['original'][emptySpace][nextQuestionID] && surveyLiterals.Questions['original'][emptySpace][nextQuestionID]["QuestionText"]) {
												nextQuestionText = surveyLiterals.Questions['original'][emptySpace][nextQuestionID]["QuestionText"];
											}
										}
										if (curAnswers && curAnswers[currentLanguageVersion] && curAnswers[currentLanguageVersion][nextQuestionID]) {
											nextAnswersText = curAnswers[currentLanguageVersion][nextQuestionID];
										} else {
											nextAnswersText = surveyLiterals.Answers['original'][emptySpace][nextQuestionID];
										}
										
										for(var k in this.SurveyLiterals.globalizedLiterals) {
											if(this.SurveyLiterals.globalizedLiterals[k][this.currentLanguage]) {
												customLiterals[k] = this.SurveyLiterals.globalizedLiterals[k][this.currentLanguage];
											}											
										}

										if (nextQuestionText && nextAnswersText) {
											// nextQuestionData.setLiteralsFunction("q", nextQuestionText);
											// nextQuestionData.setLiteralsFunction("a", nextAnswersText);
											try { //needed :(
												nextQuestionData.setLiteralsFunction({
													"questionText" : nextQuestionText,
													"answersText" : nextAnswersText,
													"customLiterals" : customLiterals
												});
											} catch(er) {
												console.log("Globalization for question: " + nextQuestionData.getProtoID() + " has failed");
											}
										}
										
										break;
									}
									case "section": {
										var sectionProtoID = nextQuestionData.additionalDataForQuestion.SectionProtoID;
										if (typeof sectionProtoID !== "undefined") {
											var srvSections = surveyLiterals.Sections;
											if (srvSections[currentLanguage] && srvSections[currentLanguage][currentLanguageVersion] && srvSections[currentLanguage][currentLanguageVersion][sectionProtoID]) {
												nextSectionTexts[nextSectionTexts.length] = srvSections[currentLanguage][currentLanguageVersion][sectionProtoID]['ProtoSectStartText'];
												nextSectionTexts[nextSectionTexts.length] = srvSections[currentLanguage][currentLanguageVersion][sectionProtoID]['ProtoSectStartHiddenComment'];
											} else {
												nextSectionTexts[nextSectionTexts.length] = srvSections['original'][emptySpace][sectionProtoID]['ProtoSectStartText'];
												nextSectionTexts[nextSectionTexts.length] = srvSections['original'][emptySpace][sectionProtoID]['ProtoSectStartHiddenComment'];
											}

											//nextQuestionData.setLiteralsFunction("s", nextSectionTexts);
											try {
												nextQuestionData.setLiteralsFunction({
													"sectionTexts" : nextSectionTexts
												});
											} catch(er) {
												//console.log(.....);
											}
										}
										break;
									}
									default:
										//break;
								}
								
								//set literals to navigation buttons
								var buttons = nextQuestionData.getParentSlide().querySelectorAll(".globalizedLiteral");
								
								var literalToTranslate;
								var elementToTranslate;
								for(var button = 0, buttonsLen = buttons.length; button < buttonsLen; button++) {
									elementToTranslate = buttons[button];
									literalToTranslate = elementToTranslate.className.split(" ")[1].split("|||")[1].replace(/#####/g," ");
									elementToTranslate.innerHTML = this.getLiteralForCurrentLanguage(literalToTranslate);
								}

								nextQuestionData.setQuestionGlobalizationLanguage(this.currentLanguage);
							}
						}
					}
				}

			};

			/***********************************************************************/

			/**GLOBALLY ACCESSIBLE FUNCTIONS**/
			/***********************************************************************/
			/** VALIDATING FUNCTIONS **/
			ODP.Surveo.methods.isCorrectGUID = function (commaSeparatedString_GUIDs) { //is the GUID(s) string is correct, comma separated
				var isCorrectGUID = true;
				var checkAns = new RegExp("^(((\{)[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}))([,](\{)[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}))*)$"); //Reg exp for GUID separated by commas.
				if (commaSeparatedString_GUIDs.match(checkAns)) {
					//Correct input
					isCorrectGUID = true;

				} else {
					//Wrong input


					isCorrectGUID = false;

				}
				var cvsGUIDS = commaSeparatedString_GUIDs.split(",");
				for (var i = 0, len = cvsGUIDS.length; i < len; i++) {
					if (typeof doc.resource(cvsGUIDS[i]) === "undefined") {
						isCorrectGUID = false;

						break;

					}
				}

				return isCorrectGUID

			};
			ODP.Surveo.methods.isCorrectURL = function (url) { //is the GUID(s) string is correct, comma separated
				var isCorrectURL = true;
				var urlPattern = new RegExp("^(((ht|f)tp(s?))\://)?(www.|[a-zA-Z].)[a-zA-Z0-9\-\.]+\.(com|edu|gov|mil|net|org|biz|info|name|museum|us|ca|uk|bg|it|cn|eu)(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$"); //Reg exp for urls.
				if (url.match(urlPattern)) {
					isCorrectURL = true;

				} else {
					isCorrectURL = false;

				}

				return isCorrectURL;

			};

			ODP.Surveo.methods.isCorrectBase64 = function (base64) {
				var checkBase64 = new RegExp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$"); //reg exp to check is valid base64 encoded string


				var checked;

				try {
					checked = (base64.match(checkBase64)) ? true : false;
				} catch (e) {

					checked = false;

				}
				return checked;

			};

			ODP.Surveo.methods.isNumberCommaSeparated = function (string) {

				var checkQIDs = new RegExp("^(([0-9][0-9]*)([,][0-9][0-9]*)*)$"); //Reg exp for numbers separated by commas
				var checked;

				try {
					checked = (string.match(checkQIDs)) ? true : false;

				} catch (e) {

					checked = false;

				}
				return checked;

			};
			/*End of validating functions*/
			ODP.Surveo.methods._killBubbles = function (e) { //stop bubbling and default actions on event
				if (ODP.Surveo.params.deploymentTarget.fullPlatformName.indexOf("android") > -1) {
					document.activeElement && document.activeElement.blur();
				}
				if (ODP.Surveo.params.buttonsLock == 1) {
					return false;

				}
				var e = window.event || e;
				if (typeof e != "undefined") {
					var targ = e.target || e.srcElement;
					e.cancelBubble = true;
					if (e.stopPropagation) {
						e.stopPropagation();

					}

					if (e.preventDefault) {
						e.preventDefault();

					}
					delete targ;

				}
				return;

			};

			ODP.Surveo.methods.evalCustomScripts = function () {
				var customScript = snippet['Custom script'];
				
				if(customScript) {
					var isGUID = ODP.document.isGUID(customScript.substring(0, 38));
					
					if(isGUID) {
						var customsScriptsForEval = customScript.split(",");
						if(customsScriptsForEval && customsScriptsForEval[0] && ODP.document.isGUID(customsScriptsForEval[0]) && ODP.Surveo.methods.isCorrectGUID(customsScriptsForEval[0])) {
							for (var c = 0, len = customsScriptsForEval.length; c < len; c++) {
								// try {
									eval(doc.resource(customsScriptsForEval[c]));
								// } catch (e) {
								// console.log(e + " @eval custom scripts");
								// }
							}
						}
					} else {
						try {
							eval(customScript);
						} catch (e) {
							console.log(e + " @eval custom scripts");
							console.log("customScript");
							console.log(customScript);
						}					
					}
				}
			};
			ODP.Surveo.methods.startSurvey = function () { //start survey from slide 1; prepare data & execute custom scripts
				ODP.Surveo.params.surveyInProgress = 1;
				ODP.Surveo.params.buttonsLock = 0;
				var dx = new Date();
				var d = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getHours());
				var x = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getMinutes());
				var s = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getSeconds());
				ODP.Surveo.params.surveyTimeIn = d + ':' + x + ':' + s;

				if (snippet["Custom script"] != "") {
					ODP.Surveo.methods.evalCustomScripts();

				}

			};
			ODP.Surveo.methods.clearAnswers = function () {
				for (var k in ODP.Surveo.params.questionData) {
					if (typeof ODP.Surveo.params.questionData[k].resetFunction == 'function') {
						ODP.Surveo.params.questionData[k].resetFunction(); //assigned clearing function for each q snippet
					}
				}
				ODP.Surveo.statistics.geo.clearGeoData();
			};

			ODP.Surveo.methods.formResults = function () { //forming the results object
				/****Construction of resultObj****/
				if(typeof surveio === "undefined" && doc.requestContext.getFormParameter("alias") !== "surveo.bootstrap") { //check if open with surveo bootstrap or Surveo app (preview mode submit bug)
					return;
				}
				
				if (typeof ODP.Surveo.params.surveoIWR === 'undefined' || ODP.Surveo.params.surveoIWR === '') {
					return;
				}

				var urlsa = ODP.Surveo.params.surveoIWR.replace("iwr.asp", "importmngr/ImportSurveysService/ImportData.asp");
				var cacheCode = (ODP.Surveo.params.surveoIWRCodeQuestion && ODP.Surveo.params.surveoIWRCodeQuestion !== "") ? encodeURIComponent(ODP.Surveo.params.surveyResults[ODP.Surveo.params.surveoIWRCodeQuestion]) : "";
				cacheCode = cacheCode || doc.requestContext.getFormParameter("code");

				if (typeof cacheCode != "undefined" && cacheCode != "" && cacheCode != null && cacheCode != " ") {
					urlsa = urlsa.replace(/\&code.*$/g, "&code=" + cacheCode);

				}
				if (cacheCode === "") {
					cacheCode = doc.requestContext.getFormParameter("code");
				}
				if (urlsa.search("https") == -1) {
					urlsa = urlsa.replace("http", "https");

				}

				urlsa += "&Surveo=true";
				var params = 'SurveyImportData=';
				var dx = new Date();
				var d = dx.getTime();
				var c = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getHours());
				var x = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getMinutes());
				var s = ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getSeconds());
				var m = 0; 
				var str = '';
				/** SSLAVCHEV : adding new row separator : charcode 31 to replace CRLF **/
				// str += d + String.fromCharCode(9) + "DATE" + String.fromCharCode(9) + dx.getFullYear() + '-' + (dx.getMonth() + 1) + '-' + dx.getDate() + String.fromCharCode(13, 10);
				str += d + String.fromCharCode(9) + "DATE" + String.fromCharCode(9) + dx.getFullYear() + '-' + ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getMonth() + 1) + '-' + ODP.Surveo.compatibility.convertToDoubleDigitWithLeadingZeroString(dx.getDate()) + String.fromCharCode(31);
				// str += d + String.fromCharCode(9) + "TIMEIN" + String.fromCharCode(9) + ODP.Surveo.params.surveyTimeIn + String.fromCharCode(13, 10);
				str += d + String.fromCharCode(9) + "TIMEIN" + String.fromCharCode(9) + ODP.Surveo.params.surveyTimeIn + String.fromCharCode(31);
				// str += d + String.fromCharCode(9) + "TIMEOUT" + String.fromCharCode(9) + c + ':' + x + ':' + s + String.fromCharCode(13, 10);
				str += d + String.fromCharCode(9) + "TIMEOUT" + String.fromCharCode(9) + c + ':' + x + ':' + s + String.fromCharCode(31);
				dx = null;
				for (var k in ODP.Surveo.params.surveyResults) {
					if(k === ODP.Surveo.params.surveoIWRCodeQuestion) {
						continue;
					}
					for (var u = 0, len = ODP.Surveo.params.questionOrder.length; u < len; u++) {
						if (ODP.Surveo.params.questionOrder[u].qID == k) {
							m = (ODP.Surveo.params.questionOrder[u].qPos);
							break;
						}
					}
					if (ODP.Surveo.params.surveyResults[k] !== "" && typeof ODP.Surveo.params.surveyResults[k] != 'undefined') {
						if (typeof ODP.Surveo.params.surveyResults[k].push != 'undefined') {
							for (var i = 0, lenn = ODP.Surveo.params.surveyResults[k].length; i < lenn; i++) {
								// str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + ODP.Surveo.params.surveyResults[k][i] + String.fromCharCode(13, 10);
								str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + ODP.Surveo.params.surveyResults[k][i] + String.fromCharCode(31);
							}
						} else {
							// str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + ODP.Surveo.params.surveyResults[k] + String.fromCharCode(13, 10);
							str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + ODP.Surveo.params.surveyResults[k] + String.fromCharCode(31);
						}
					} else {
						// str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + '0' + String.fromCharCode(13, 10);
						str += d + String.fromCharCode(9) + m + String.fromCharCode(9) + '0' + String.fromCharCode(31);
					}

				}
				str += '&GeoTime=';
				var cacheGeo = ODP.Surveo.statistics.geo.finalGeoData;
				for (var k in cacheGeo) {
					// str += "" + cacheGeo[k].question + ";" + cacheGeo[k].answer + ";" + cacheGeo[k].lat + ";" + cacheGeo[k].lon + ";" + cacheGeo[k].acc + ";" + cacheGeo[k].timeFromOS + ";" + cacheGeo[k].timeFromGeo;
					str += "" + cacheGeo[k].question + String.fromCharCode(28) + cacheGeo[k].answer + String.fromCharCode(28) + cacheGeo[k].lat + String.fromCharCode(28) + cacheGeo[k].lon + String.fromCharCode(28) + cacheGeo[k].acc + String.fromCharCode(28) + cacheGeo[k].timeFromOS + String.fromCharCode(28) + cacheGeo[k].timeFromGeo;
					// str += "|"; //end of record
					str += String.fromCharCode(29); //end of record


				}
				str = str.slice(0, str.lastIndexOf(String.fromCharCode(29)));
				params += str;
				params = encodeURIComponent(escape(params));
				/****Construction of resultObj****/

				ODP.Surveo.params.resultObj[d] = { //result object
					url : urlsa,
					parameters : params
				}
				ODP.Surveo.params.surveysStatus.onhold++; //another survey in queue for sending
			};

			ODP.Surveo.methods.sendResults = function () { //send the formed object
				var isMobile = ODP.Surveo.params.isMobileRenderer || (window.surveyW8);
				if (typeof ODP.Surveo.params.surveoIWR === 'undefined' || ODP.Surveo.params.surveoIWR === '') {
					return;
				}

				if (ODP.Surveo.params.surveyInProgress == 0 && ODP.Surveo.params.sendingInProgress == 0) {
					for (var k in ODP.Surveo.params.resultObj) {
						var url;
						if (isMobile && typeof httpRequestPOST !== 'undefined') {
							url = ODP.Surveo.params.resultObj[k].url;

						} else {
							url = "/importmngr" + ODP.Surveo.params.resultObj[k].url.split("/importmngr")[1];

						}
						var params = ODP.Surveo.params.resultObj[k].parameters;

						ODP.Surveo.params.sendingInProgress = 1; //lock execution of concurrent submits
						if (isMobile && typeof httpRequestPOST !== 'undefined') {
							//-rktodorov FIX for android versions
							if (ODP.Surveo.params.deploymentTarget.fullPlatformName.indexOf("android") > -1 || window.surveyW8) {
								httpRequestPOSTasync(url, params, "postCallback");
							} else {
								httpRequestPOST(url, params, postCallback); // fu iOS PG
							}
						} else {
							var xmlhttp;
							if (window.XMLHttpRequest) {
								xmlhttp = new XMLHttpRequest();
							} else { // code for IE6, IE5
								xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

							}
							xmlhttp.open("POST", url, true);
							xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
							xmlhttp.onreadystatechange = function () {
								if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
								else {}
								ODP.Surveo.methods.submitCallbackForBrowser();

							}
							xmlhttp.send(params);
						}
						break;
					}
					ODP.Surveo.params.surveysStatus.visualizer.update(); //update counters;
				}
			};

			/****CALLBACK HANDLERS****/
			ODP.Surveo.methods.submitCallbackForBrowser = function (res) { //handles postCallback
				for (var aPresentResult in ODP.Surveo.params.resultObj) {
					/*delete first of obj*/
					delete ODP.Surveo.params.resultObj[aPresentResult];
					break;
				}

				ODP.Surveo.params.surveyInProgress = 0;
				ODP.Surveo.params.sendingInProgress = 0;
			};
			ODP.Surveo.methods.submitCallback = function (res) { //handles postCallback
				res = res.toLowerCase();

				/**Should add check for file existing**/
				if (res.lastIndexOf("success") > -1) {
					ODP.Surveo.params.surveysStatus.onhold--;
					ODP.Surveo.params.surveysStatus.sent++; //another survey in queue for sending
					ODP.Surveo.params.surveysStatus.visualizer.update(); //update counters;
					var foundObject = false;
					/**Check if any records exist**/
					for (var aPresentResult in ODP.Surveo.params.resultObj) {
						/*delete first of obj*/
						delete ODP.Surveo.params.resultObj[aPresentResult];
						break;
					}

					for (var aPresentResult in ODP.Surveo.params.resultObj) {
						/*delete first of obj*/
						foundObject = true;

						break;
					}
					if (foundObject) {
						/*write remaining of obj to file*/
						writeFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', JSON.stringify(ODP.Surveo.params.resultObj), false, writeCallback);

					} else {
						deleteFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', deleteCallback);
						ODP.Surveo.params.surveysStatus.onhold = 0; //indicate no more surveys are waiting to be sent
					}
					
					//ODP.Surveo.methods.customOnSuccessSubmitFunction();
				} else {
					if (res.lastIndexOf("access denied") > -1 || res.lastIndexOf("duplicated") > -1) {
						ODP.Surveo.params.surveysStatus.onhold--;
						ODP.Surveo.params.surveysStatus.failed++; //another survey in queue for sending
						var foundObject = false;
						/**Check if any records exist**/
						for (var aPresentResult in ODP.Surveo.params.resultObj) {
							/*delete first of obj*/
							delete ODP.Surveo.params.resultObj[aPresentResult];
							break;
						}
						for (var aPresentResult in ODP.Surveo.params.resultObj) {
							/*delete first of obj*/
							foundObject = true;

							break;
						}
						if (foundObject) {
							/*write remaining of obj to file*/

							/*filename = projectID+'dataresults.txt'*/
							writeFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', JSON.stringify(ODP.Surveo.params.resultObj), false, writeCallback);

						} else {
							deleteFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', deleteCallback);

						}

						ODP.Surveo.params.surveysStatus.visualizer.update();

						return;
					}
					// alert('error');
					setTimeout(function () {

						writeFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', JSON.stringify(ODP.Surveo.params.resultObj), false, writeCallback);

					}, 3000);
				}

				ODP.Surveo.params.surveysStatus.visualizer.update();

			};

			ODP.Surveo.methods.fileExists = function (res) { //handles testCallback
				/**to be handled**/
				if (res) {
					readFile(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', readCallback);

				} else {}

			};

			ODP.Surveo.methods.fileRead = ODP.Surveo.params.fileRead = function (res) { //handles readCallback
				/**to be handled**/

				ODP.Surveo.params.resultObj = eval('(' + res + ')');
				for (var k in ODP.Surveo.params.resultObj) {
					ODP.Surveo.params.surveysStatus.onhold++;

				}
				ODP.Surveo.params.surveysStatus.visualizer.update();
				//alert("File read!");
				ODP.Surveo.methods.sendResults();
			};

			ODP.Surveo.methods.fileWritten = function (res) { //handles writeCallback
				// ODP.Surveo.params.surveyInProgress = 0; //UNlock execution of concurrent submits
				ODP.Surveo.params.sendingInProgress = 0; //UNlock execution of concurrent submits
				ODP.Surveo.params.timeoutHandler = setTimeout(function () {
						//alert("In timeout!");
						ODP.Surveo.methods.sendResults();
						//
					}, 3000);
			};
			ODP.Surveo.methods.fileDeleted = function (res) { //handles deleteCallback
				ODP.Surveo.params.sendingInProgress = 0; //UNlock execution of concurrent submits
			};

			/**Handlers for the survey controls**/

			ODP.Surveo.methods.presenterTap = function () { //handles screen tap in button-free slides
				ODP.Surveo.snippets.slide._slideNext();
				return;
			};

			ODP.Surveo.methods.onNextClick = function () { //handles previous button click
				ODP.Surveo.snippets.slide['_slideNext']();
				return;
			};

			ODP.Surveo.methods.onPreviousClick = function () { //handles previous button click
				ODP.Surveo.snippets.slide['_slidePrev']();
				return;
			};

			ODP.Surveo.methods.onCloseClick = function () { //handles previous button click
				if (ODP.Surveo.params.buttonsLock == 1 || currentChildNode === 0) {
					return false;
				}
				
				if(ODP.Surveo.params.isMobileRenderer) {
					var input, textarea;
					var inputs = document.querySelectorAll("input");
					var textareas = document.querySelectorAll("textarea");
					for(var a = 0, len = inputs.length; a < len; a++) {
						input = inputs[a];
						input.blur && input.blur();
					}
					for(var a = 0, len = textareas.length; a < len; a++) {
						textarea = textareas[a];
						textarea.blur && textarea.blur();
					}
				}

				if (ODP.Surveo.params.submitOnClose) {
					ODP.Surveo.methods.finishSurvey();
				} else {
					ODP.Surveo.snippets.slide['_restartSurvey']();
					ODP.Surveo.methods.clearAnswers();
					
					if (renderer !== 'design' && typeof SM === 'undefined') {
						ODP.Surveo.methods['sendResults']();
					}
				}

				
				return;
			};

			ODP.Surveo.methods.onStartClick = function () { //handles previous button click
				if (ODP.Surveo.params.buttonsLock == 1) {
					return false;

				}
				setTimeout(function () {
					ODP.Surveo.snippets.slide['_slideNext']();
				}, 200);
				ODP.Surveo.methods.clearAnswers();
			};

			ODP.Surveo.methods.onThankyouClick = function () { //handles previous button click
				if (ODP.Surveo.params.buttonsLock == 1) {
					return false;

				}
				ODP.Surveo.snippets.slide._slideNext();
			};

			ODP.Surveo.methods.finishSurvey = function () { //handle the ending sequence of a survey (thank you -> form results -> submit results -> restart)
				
				
				

				if(ODP.Surveo.params.customFinishFunctionFlag) {
					(ODP.Surveo.methods.customFinishSurvey && ODP.Surveo.methods.customFinishSurvey(ODP.Surveo.params.customFinishText));
					return;
				}
				
				
				ODP.Surveo.methods['formResults']();
				ODP.Surveo.snippets.slide._restartSurvey();
				ODP.Surveo.methods.clearAnswers();
				if (renderer !== 'design' && typeof SM === 'undefined') {
					ODP.Surveo.methods['sendResults']();
				}

			};
			
			ODP.Surveo.methods.customOnSuccessSubmitFunction = function() {
				var text = ODP.Surveo.params.customFinishText;
				if(typeof text === "undefined" || text === "") {
					text = "Thank you!<br>Your feedback will help us to improve our services.";
				}
				var globalization = ODP.Surveo.globalization;
				if(globalization && globalization.SurveyLiterals && globalization.SurveyLiterals.globalizedLiterals && globalization.SurveyLiterals.globalizedLiterals[text] && globalization.SurveyLiterals.globalizedLiterals[text][ODP.Surveo.globalization.currentLanguage]) {
					text = ODP.Surveo.globalization.SurveyLiterals.globalizedLiterals[text][ODP.Surveo.globalization.currentLanguage];
				}
				var customFinishDivMask = ODP.window.document.querySelector("#customFinishDivMask");
				if(customFinishDivMask) {
					customFinishDivMask.innerHTML = "<div style='font-size:20px; font-family:tahoma,arial,verdana,sans-serif;display:block;position:relative;top:50%;border-radius:3px;text-align:center;font-weight:bold;color:#FFFFFF; line-height: 20px; margin-top: -20px;'>"+text+"</div>";
				};
			}

			ODP.Surveo.methods.customFinishSurvey = function (text) {
				if(ODP.Surveo.params.isInDesigner) {
					return;
				}
				if(!ODP.Surveo.params.isInDesigner && typeof text === "undefined" || text === "") {
					text = "Thank you!<br>Your feedback will help us to improve our services.";
				}

				if (typeof ODP.Surveo.params.customFinishSurveyStarted === "undefined") {
					ODP.Surveo.params.customFinishSurveyStarted = true;
					ODP.Surveo.params.surveyInProgress = 0;
					ODP.Surveo.params.buttonsLock = 1;
					ODP.Surveo.methods['formResults']();

					if (typeof ODP.Surveo.params.surveoIWR === 'undefined' || ODP.Surveo.params.surveoIWR === '') {
						return;
					}

					ODP.document.addRulesToMainStyleSheet(".loader:before, .loader:after, .loader {border-radius: 50%; width: 2.5em; height: 2.5em; -webkit-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation: load7 1.8s infinite ease-in-out; animation: load7 1.8s infinite ease-in-out; } .loader {font-size: 10px; margin: auto; position: relative; text-indent: -9999em; -webkit-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); -webkit-animation-delay: -0.16s; animation-delay: -0.16s; } .loader:before {left: -3.5em; -webkit-animation-delay: -0.32s; animation-delay: -0.32s; } .loader:after {left: 3.5em; } .loader:before, .loader:after {content: ''; position: absolute; top: 0; } @-webkit-keyframes load7 {0%, 80%, 100% {box-shadow: 0 2.5em 0 -1.3em #ffffff; } 40% {box-shadow: 0 2.5em 0 0 #ffffff; } } @keyframes load7 {0%, 80%, 100% {box-shadow: 0 2.5em 0 -1.3em #ffffff; } 40% {box-shadow: 0 2.5em 0 0 #ffffff; } }");
					var divMask = document.createElement('div');
					divMask.id = "customFinishDivMask";
					divMask.className = "divMask";
					divMask.innerHTML = "<div style='font-size:20px; font-family:tahoma,arial,verdana,sans-serif;display:block;position:relative;top:50%;border-radius:3px;text-align:center;font-weight:bold;color:#FFFFFF; line-height: 20px; margin-top: -20px;'><div class='loader'></div></div>";
					divMask.style.width = "100%";
					divMask.style.background = "#000000";
					divMask.style.left = "0";
					divMask.style.top = "0";
					divMask.style.height = "100%";
					divMask.style.opacity = "0.8";
					divMask.style.position = "absolute";
					document.body.appendChild(divMask);
					
					if (ODP.Surveo.params.surveyInProgress == 0 && ODP.Surveo.params.sendingInProgress == 0) {
						for (var k in ODP.Surveo.params.resultObj) {
							
							var url;
							if (ODP.Surveo.params.isMobileRenderer && typeof httpRequestPOST !== 'undefined') {
								url = ODP.Surveo.params.resultObj[k].url;

							} else {
								url = "/importmngr" + ODP.Surveo.params.resultObj[k].url.split("/importmngr")[1];

							}
							var params = ODP.Surveo.params.resultObj[k].parameters;

							ODP.Surveo.params.sendingInProgress = 1; //lock execution of concurrent submits
							if (ODP.Surveo.params.isMobileRenderer && typeof httpRequestPOST !== 'undefined') {

								//-rktodorov FIX for android versions
								if (ODP.Surveo.params.deploymentTarget.fullPlatformName.indexOf("android") > -1) {
									httpRequestPOSTasync(url, params, "postCallback");
								} else {
									httpRequestPOST(url, params, postCallback); // fu iOS PG
								}

							} else {
								var xmlhttp;
								if (window.XMLHttpRequest) {
									xmlhttp = new XMLHttpRequest();
								} else { // code for IE6, IE5
									xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

								}
								xmlhttp.open("POST", url, true);
								xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
								xmlhttp.onreadystatechange = function () {
									if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
										ODP.Surveo.methods.customOnSuccessSubmitFunction();
									}
									ODP.Surveo.methods.submitCallbackForBrowser();
								}
								xmlhttp.send(params);
							}
							break;
						}
					}
				}
			}

			ODP.Surveo.methods.handleAnimEnd = function (e) { //apply unlocks of controls & other actions to manage survey UI flow
				if ((renderer === 'design' || typeof SM !== "undefined")) {
					return;
				}
				
				e.stopPropagation()
				e.preventDefault ? e.preventDefault() : e.returnValue = false;

				var propertyName = e.propertyName;
				
				if (propertyName == "top" || propertyName == "color") {
					return;
				}

				var deploymentTarget = ODP.Surveo.params.deploymentTarget;

				e = window.event || e;

				var el = (e.target) ? e.target : e.srcElement;
				var elClassName = el.className;

				var mSforSafe = 150;
				if (elClassName.indexOf("questionMain normalDesktop") >= 0 && ODP.Surveo.params.isInAnimatingBetweenSlides) {
					var cacheCurrent = ODP.Surveo.params.cacheCurrent;
					var cacheNext = ODP.Surveo.params.cacheNext;
					var cachePrev = ODP.Surveo.params.cachePrev;
					
					if (cacheCurrent && cacheNext && ODP.Surveo.params.isInAnimatingBetweenSlides) {
						cacheCurrent.style.cssText = '';
						cacheNext.style.cssText = '';
						
						setTimeout(function () {
							ODP.Surveo.params.cacheNext = null;
							ODP.Surveo.params.cacheCurrent = null;
							ODP.Surveo.methods.unlockControls();
						}, mSforSafe);
					}
					
					if(cacheCurrent && cachePrev && ODP.Surveo.params.isInAnimatingBetweenSlides) {
						cacheCurrent.style.cssText = '';
						cachePrev.style.cssText = '';
						
						setTimeout(function () {
							ODP.Surveo.params.cachePrev = null;
							ODP.Surveo.params.cacheCurrent = null;
							ODP.Surveo.methods.unlockControls();
						}, mSforSafe);
					}
				}
			};
			
			// ODP.Surveo.methods.handleAnimEnd = function (e) { //apply unlocks of controls & other actions to manage survey UI flow
				// if((renderer === 'design' || typeof SM !== "undefined")) {
					// return; 
				// }
				
				// e.stopPropagation() 
				// e.preventDefault ? e.preventDefault() : e.returnValue = false;
	
				
				// var propertyName = e.propertyName;
				// if(propertyName == "top" || propertyName == "color") {
					// return;
				// }
				
				// var deploymentTarget = ODP.Surveo.params.deploymentTarget;
			
				// e = window.event || e;
				
				// var el = (e.target) ? e.target : e.srcElement;
				// var elClassName = el.className;

				
				// var mSforSafe = 100;
				
				// if (elClassName.indexOf("questionMain normalDesktop") >= 0 && ODP.Surveo.params.isInAnimatingBetweenSlides) {
					// var noTransitions = "-webkit-transition-duration: 0ms; -moz-transition-duration: 0ms; -ms-transition-duration: 0ms; -o-transition-duration: 0ms; transition-duration: 0ms; -webkit-transition: none ; -moz-transition: none ; -o-transition: none ; -ms-transition: none ; transition: none ;";

					// var cacheCurrent = ODP.Surveo.params.cacheCurrent;
					// var cacheNext = ODP.Surveo.params.cacheNext;
					// var cachePrev = ODP.Surveo.params.cachePrev;
					// var navigationDirection = (ODP.Surveo.params.surveoAnimation == 'HSlide') ? "left" : "top";

					// if(cacheCurrent && cacheNext && ODP.Surveo.params.isInAnimatingBetweenSlides) {
						// cacheCurrent.style.cssText = noTransitions + navigationDirection + ": -100%; display: none !important;";
						// cacheNext.style.cssText = noTransitions  + navigationDirection + ": 0%; display: block !important;";
						
						// setTimeout(function() {
							// if(ODP.Surveo.params.cacheCurrent && ODP.Surveo.params.cacheNext && ODP.Surveo.params.isInAnimatingBetweenSlides) {
								// cacheNext.className = "questionMain normalDesktop";
								// cacheCurrent.className = "questionMain readDesktop";
								
								// cacheCurrent.style.cssText = '';
								// cacheNext.style.cssText = '';
								
								// ODP.Surveo.params.cacheNext = null;
								// ODP.Surveo.params.cacheCurrent = null;
								
								// ODP.Surveo.methods.unlockControls();
							// };
						// },mSforSafe);
					// }
					
					// if(cacheCurrent && cachePrev) {
						// cacheCurrent.style.cssText = noTransitions + navigationDirection + ": 100%; display: none !important;";
						// cachePrev.style.cssText = noTransitions + navigationDirection + ": 0%; display: block !important;";
						
						// setTimeout(function() {
							// if(ODP.Surveo.params.cacheCurrent && ODP.Surveo.params.cachePrev && ODP.Surveo.params.isInAnimatingBetweenSlides) {
								// cachePrev.className = "questionMain normalDesktop";
								// cacheCurrent.className = "questionMain unreadDesktop";
								
								// cacheCurrent.style.cssText = '';
								// cachePrev.style.cssText = '';
								
								// ODP.Surveo.params.cachePrev = null;
								// ODP.Surveo.params.cacheCurrent = null;
								
								// ODP.Surveo.methods.unlockControls();
							// };
						// },mSforSafe);
					// }
				// }

			// };
			
			
			ODP.Surveo.methods.unlockControls = function () { //unlock buttons after end of animation
				//setTimeout(function() {
					//if (ODP.Surveo.params.buttonsLock) {
						ODP.Surveo.params.buttonsLock = 0;
						ODP.Surveo.params.isInAnimatingBetweenSlides = false;
					//}
				//},50);
			};
			ODP.Surveo.methods.blockDrag = function (event) { //block default behavior of containers
				event.preventDefault();

			};
			ODP.Surveo.methods.getPriority = function (parentID) { //returns integer number : priority of snippet
				return ODP.Surveo.params.assignedQueueIndices[parentID];
			};
			/****SKIPS - N - TRIGGERS****/
			ODP.Surveo.methods.sm_mother = function (qstnID) { //mother of all skips'n'triggers functions;wraps standard handleQuestionSkips
				//console.log("sm_mother called", qstnID, typeof qstnID);
				try {
					sm_skipsHandleQuestion(qstnID, 'emptydateformat');
				} catch (e) {
					if (typeof sm_skipsInit === "function" && ODP.Surveo.params.skipsEnabled) {
						ODP.Surveo.methods.parseSkipsDefinitions(ODP.Surveo.params.surveoSkipPatterns);
						sm_skipsInit();

					}
				}
				if (ODP.Surveo.params.questionData[qstnID].getDisplayOnce()) {
					ODP.Surveo.params.questionData[qstnID].setSkiped(true); //remember to re-apply;
				}
				var globalizationObj = ODP.Surveo.globalization;
				if(globalizationObj && globalizationObj.globalizationEnabled) {
					if(globalizationObj.globalizationQuestion === qstnID) {
						globalizationObj.setGlobalization();
					}
				}
				return;
			};

			ODP.Surveo.methods.isArrayInArray = function (arr0, arr1) { //checks wether arr0's values are present in arr1
				var hash = {};
				if (arr0.length == 0 || arr1.length == 0) {

					return false;

				}

				for (var i = 0; i < arr0.length; i++) {
					if (typeof hash[arr0[i]] === 'undefined') {

						hash[arr0[i]] = '';
					}

				}

				for (var i = 0; i < arr1.length; i++) {
					if (typeof hash[arr1[i]] !== 'undefined') {
						delete hash[arr1[i]];
					}
				}

				for (var k in hash) {
					return false;

				}
				return true;
			};

			ODP.Surveo.methods.sm_checkConditionSimple = function (conditionID) {
				/*sslavchev EDDITED : DEPRECATED, now using RulesAndEvents' function*/

			};
			ODP.Surveo.methods.CSVtoArray = function (csv) { //returns array


				if (typeof csv === 'undefined') {
					return ['']; //later empty string elements are interpreted az "nothing"
				}
				var buffer = csv.toString().split(',');

				return buffer;
			};
			ODP.Surveo.methods.ArrayToCSV = function (array) { //returns string
				var buffer = '';
				for (cry = 0; cry < array.length; cry++) {
					if (cry == (array.length - 1)) {
						buffer += array[cry];

					} else {
						if (array[cry] == '') {
							buffer += '';
						} else {
							buffer += array[cry] + ',';
						}

					}
				}

				return buffer;
			};
			ODP.Surveo.methods.sm_SetAnswerColorCode = function (qID, color, index) {
				ODP.Surveo.params.questionData[qID].colorCodeFunction(qID, index, color);
			}
			ODP.Surveo.methods.sm_executeAction = function (actionID) {
				/*sslavchev EDDITED : ALSO TO BE DEPRECATED*/
			};

			ODP.Surveo.methods.sm_setcomment = function (qID, cmmnt, isclick) {

				// isclick = (typeof isclick === 'undefined')?true:isclick;
				/* make sure noone forgets the parameter at the end when in snippet click handlers;'cause I pity the fools */
				var currentQuestion = ODP.Surveo.params.questionData[qID];
				var answers = [];
				var success = true;
				try {
					currentQuestion.setFunction(qID, cmmnt, false);
					ODP.Surveo.statistics.geo.getLocation(qID, cmmnt); //do geolocation
					ODP.Surveo.methods.sm_mother(qID);
				} catch (excep) {
					alert(excep + ' @setcomment');
					success = false;
					/* so much plywood here...don't even wanna know */
				}
				return success;
			};
			ODP.Surveo.methods.sm_setanswersvisibility = function (qID, stringValue, showHide) {

				var showHideBinary = (showHide === "show");
				if(typeof ODP.Surveo.params.questionData[qID] !== "undefined" && typeof ODP.Surveo.params.questionData[qID].hideAnswersFunction !== "undefined") {
					ODP.Surveo.params.questionData[qID].hideAnswersFunction(qID, stringValue, showHideBinary);
				}

			};
			ODP.Surveo.methods.sm_setquestionvisibility = function (qID, showHide) {
				// alert(qID+" : "+ showHide);
				if (typeof qID.push === 'function') { //check if qID is an array of IDs or a single one;

					for (var k in qID) {
						if (!qID.hasOwnProperty(k)) {
							continue;
						}

						if(typeof ODP.Surveo.params.questionData[qID[k]] === "undefined") { return; }


						if (showHide == "hide") {

							ODP.Surveo.params.questionData[qID[k]].setSkiped(true);
							//ODP.Surveo.methods.sm_setanswer(qID[k], '0', false);
						} else {

							ODP.Surveo.params.questionData[qID[k]].setSkiped(false);
						}
					}
				} else {
					if (showHide == "hide") {
						ODP.Surveo.params.questionData[qID].setSkiped(true);
						//ODP.Surveo.methods.sm_setanswer(qID, '0', false);
					} else {
						ODP.Surveo.params.questionData[qID].setSkiped(false);

					}
				}
			};
			ODP.Surveo.methods.sm_setanswer = function (qID, stringValue, isclick) { //isclick is checked to make sure skip/triggers dont disable already selected option in multiple select questions
				//console.log("ODP.Surveo.methods.sm_setanswer",qID, stringValue, isclickss);
				/* make sure noone forgets the parameter at the end when in snippet click handlers;'cause I pity the fools */
				var currentQuestion = ODP.Surveo.params.questionData[qID];
				if(typeof currentQuestion === "undefined") { 
					//(console && console.error && console.error("Question ID doesn't exists! See Skip definitions! Question id = " + qID)); 
					return; 
				}

				var answers = [];
				var success = false;
				stringValue = stringValue + '';
				answers = stringValue.toString().split(",");

				if ((stringValue == '' || stringValue == 0 && (!isclick || typeof isclick === 'undefined')) || stringValue == '__na__' || stringValue == 'clear') { //not sure if or just...clear all the answers
					if ((typeof ODP.Surveo.params.surveyResults[qID] == "undefined") || (ODP.Surveo.params.surveyResults[qID] == "")) { //if nothing to reset - return;
						return -1;
					}

					currentQuestion.resetFunction();
					return true;

				}
				var cacheContinuousSum = currentQuestion.getContinuousSumQuestionsAnswersAsArray();
				var accumulateSumOverPreviousValues = 0;
				var answerAfterCalculations = '';
				var isClickedOrNot = false;
				for (var io = 0, lenCQS = cacheContinuousSum.length; io < len; io++) {
					accumulateSumOverPreviousValues += cacheContinuousSum[io];
				}
				for (var i = 0, len = answers.length; i < len; i++) {
					if (isclick) {
						// currentQuestion.setFunction(qID, currentQuestion.getAnswers()[(answers[i]) + ''] + accumulateSumOverPreviousValues, true);
						answerAfterCalculations = currentQuestion.getAnswers()[(answers[i]) + ''];
						ODP.Surveo.statistics.geo.getLocation(qID, answers[i]); //do geolocation
						isClickedOrNot = true;
					} else {
						// currentQuestion.setFunction(qID, currentQuestion.getAnswers()[(answers[i] - 1) + ''], false); //for trigger induced input; indices start at 1 instead of 0;
						answerAfterCalculations = currentQuestion.getAnswers()[(answers[i] - 1) + ''];
						isClickedOrNot = false;
					}
					if (lenCQS !== 0) {
						answerAfterCalculations = parseFloat(answerAfterCalculations) + accumulateSumOverPreviousValues;
						/**work on precision**/

					}
					currentQuestion.setFunction(qID, answerAfterCalculations, isClickedOrNot);

					success = true;

				}
				ODP.Surveo.methods.sm_mother(qID);
				return success;
			};
			ODP.Surveo.methods.sm_getanswer = function (qID) {
				return (ODP.Surveo.params.surveyResults[qID] || "") + "";
			};
			ODP.Surveo.methods.wrapStandardSkipFunctions = function () {
				window.sm_setanswer = ODP.Surveo.methods.sm_setanswer;
				window.sm_setmultipleanswer = ODP.Surveo.methods.sm_setanswer;
				window.sm_setcomment = ODP.Surveo.methods.sm_setcomment;
				window.sm_setquestionvisibility = ODP.Surveo.methods.sm_setquestionvisibility;
				window.sm_getanswer = ODP.Surveo.methods.sm_getanswer;
				window.sm_getmultipleanswer = ODP.Surveo.methods.sm_getanswer;
				window.sm_getcomment = ODP.Surveo.methods.sm_getanswer;
				window.sm_setanswersvisibility = ODP.Surveo.methods.sm_setanswersvisibility;
				window.sm_skipsHandleSections = function () {
					return;
				};
				window.sm_SetAnswerColorCode = ODP.Surveo.methods.sm_SetAnswerColorCode;
				window.check_rules = function (QuestionID, strEvent, bCheckEvents) {
					var strRet;
					var strValue;
					var strComment;
					var strThis = "\'" + QuestionID + "\'";
					var strRules,
					obj_borderedElement;
					strRules = "<rules></rules>";
					if (typeof ODP != 'undefined') {
						/* IF ODP IS PRESENT*/
						if (typeof ODP.Surveo == 'undefined') {
							/*AND SURVEO IS NOT*/
							if (typeof condition["@objID"] !== "undefined") {
								try {
									strRules = unescape(eval('document.frmSurvey.Q' + QuestionID + 'R.value'));
								} catch (ex) {
									strRules = "<rules></rules>";
								}
							}
						}
					} else {
						try {
							strRules = unescape(eval('document.frmSurvey.Q' + QuestionID + 'R.value'));
						} catch (ex) {
							strRules = "<rules></rules>";
						}
					}
					var xmlRules = new XmlDoc(strRules);
					var bResult = true;
					//var bChecked = true;
					//var bCheckEvents = (bCheckEvt == true);
					var nRulesCount = xmlRules.CountNodes("rules/rule");
					for (var i = 1; i <= nRulesCount; i++) {
						var bRequired = true;
						var bCondition = null;
						var strEvtType = xmlRules.GetNodeValue("rules/rule[" + i + "]/on");
						if (strEvtType == -1)
							strEvtType = 'blur';
						if ((strEvtType == strEvent) || (!bCheckEvents)) {
							var strCondition = xmlRules.GetNodeValue("rules/rule[" + i + "]/condition");
							if (strCondition != -1) {
								strCondition = replace_all(replace_all(strCondition, "#COMMENT#", "sm_getcomment(#THIS#)"), "#ANSWER#", "sm_getanswer(#THIS#)");
								strCondition = replace_all(strCondition, "#THIS#", strThis);
								strCondition = replace_params(strCondition);
								try {
									eval("bCondition = " + strCondition);
								} catch (ex) {};
							}

							var obj_borderedElement = document.getElementById('REQ' + strThis.replace(/'/g, '') + 'R');

							if (obj_borderedElement)
								while ((obj_borderedElement = obj_borderedElement.parentNode) && (obj_borderedElement.className != 'surveyquestioncell')) {}

							//????????????????????
							//			if (obj_borderedElement)
							//				obj_borderedElement.style.border = '0px none';

							if (bCondition != null) {
								if (!bCondition) {
									if (obj_borderedElement)
										obj_borderedElement.style.border = '2px solid red';

									strAction = xmlRules.GetNodeValue("rules/rule[" + i + "]/action");
									if (strAction != -1) {
										strAction = replace_all(replace_all(strAction, "#COMMENT#", "sm_getcomment(#THIS#)"), "#ANSWER#", "sm_getanswer(#THIS#)");
										strAction = replace_all(strAction, "#THIS#", strThis);
										strAction = replace_params(strAction);
										try {
											eval(strAction);
										} catch (ex) {};
									}
								}
							}
						}
					}
					var nRulesCount = xmlRules.CountNodes("rules/evt");
					if (bCheckEvents) {
						for (var i = 1; i <= nRulesCount; i++) {
							bRequired = true;
							bCondition = true;
							var strEvtType = xmlRules.GetNodeValue("rules/evt[" + i + "]/on");
							if (strEvtType == -1)
								strEvtType = 'click';
							if (strEvtType == strEvent) {
								strCondition = xmlRules.GetNodeValue("rules/evt[" + i + "]/condition");
								if (strCondition != -1) {
									strCondition = replace_all(replace_all(strCondition, "#COMMENT#", "sm_getcomment(#THIS#)"), "#ANSWER#", "sm_getanswer(#THIS#)");
									strCondition = replace_all(strCondition, "#THIS#", strThis);
									strCondition = replace_params(strCondition);
									try {
										eval("bCondition = " + strCondition);
									} catch (ex) {};
								}
								if (bCondition != null) {
									if (bCondition) {
										strAction = xmlRules.GetNodeValue("rules/evt[" + i + "]/action");
										if (strAction != -1) {
											strAction = replace_all(replace_all(strAction, "#COMMENT#", "sm_getcomment(#THIS#)"), "#ANSWER#", "sm_getanswer(#THIS#)");
											strAction = replace_all(strAction, "#THIS#", strThis);
											strAction = replace_params(strAction);
											try {
												eval(strAction);
											} catch (ex) {};
										}
									}
								}
							}
						}
					}
					return bResult;
				}
				window.execSkipAction = function (definitionIndex) {
					//console.log("EXECING");
					if (SkipMainDefinitions.childNodes[definitionIndex].definitionStates()) {
						//console.log("HASDEFINITIONS");
						var actions = SkipMainDefinitions.childNodes[definitionIndex].childNodes[1].childNodes;
						var cacheActionObject = {};
						var cacheActionToUpperCase = "";
						var cacheActionObjID = "";
						var counter1 = 0;
						/*Please, reuse!*/
						var len = 0;
						var actionsLength = actions.length;
						//console.log("HOW MANY ACTIONS? : "+ actionsLength);
						for (var actionIndex = 0; actionIndex < actionsLength; actionIndex++) {
							cacheActionObject = actions[actionIndex];
							//console.log(cacheActionObject);
							cacheActionObjID = cacheActionObject["@objID"];
							cacheActionToUpperCase = cacheActionObject["@type"].toUpperCase();
							len = ((cacheActionObject.childNodes) || []).length;
							//console.log(cacheActionToUpperCase +" IS THE CASE");
							switch (cacheActionToUpperCase) {

							case "HIDE":
								//console.log("HIDING");
							case "SHOW":

								//setTimeout(function () {
								sm_setquestionvisibility([cacheActionObjID], cacheActionObject["@type"]);
								sm_skipsHandleSections(cacheActionObjID, cacheActionObject["@type"]);
								//}, 250);
								break;

							case "SETANSWER":
							case "HIDEANSWER":
							case "SHOWANSWER":
							case "DISABLEANSWER":
							case "ENABLEANSWER":
							case "CLEARANSWER":

								for (counter1 = 0; counter1 < len; counter1++) {
									if (cacheActionObject.childNodes[counter1].nodeName.toLowerCase() == 'parameter') {
										if (cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'answers' || cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'parameter1') {

											var answers = cacheActionObject.childNodes[counter1].childNodes.join();

											if (cacheActionToUpperCase == "SETANSWER") {
												sm_setanswer(cacheActionObjID, answers);
											}

											if (cacheActionToUpperCase == "HIDEANSWER") {
												//console.log("HIDEAN");
												// sm_ShowHideAnswer(cacheActionObjID, 'hide', answers);
												sm_setanswersvisibility(cacheActionObjID, answers, 'hide');
											}
											if (cacheActionToUpperCase == "SHOWANSWER") {
												//console.log("SHOWAN");
												//sm_ShowHideAnswer(cacheActionObjID, 'show', answers);
												sm_setanswersvisibility(cacheActionObjID, answers, 'show');
											}

											if (cacheActionToUpperCase == "DISABLEANSWER") {
												//console.log("DISABLEAN");
												sm_EnableDisableAnswer(cacheActionObjID, 'disabled', answers);
											}
											if (cacheActionToUpperCase == "ENABLEANSWER") {
												//console.log("ENABLEAN");
												sm_EnableDisableAnswer(cacheActionObjID, 'enabled', answers);
											}

											if (cacheActionToUpperCase == "CLEARANSWER") {
												//console.log("CLEARAN");
												sm_clearAnswer(cacheActionObjID, answers);
											}

											sm_skipsAndTriggersAddActionDefinition_NestedSkipsAndTriggers(definitionIndex, cacheActionObjID);
											sm_skipsAndTriggers_triggerNestedEvent();

										}

									}
								}
								break;

							case "SETCOMMENT":
							case "HIDECOMMENT":
							case "SHOWCOMMENT":
								for (counter1 = 0; counter1 < len; counter1++) {
									if (cacheActionObject.childNodes[counter1].nodeName.toLowerCase() == 'parameter') {
										if (cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'question' || cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'parameter1') {
											var comment = cacheActionObject.childNodes[counter1].childNodes.join();

											if (cacheActionToUpperCase == "SETCOMMENT") {
												sm_setcomment(cacheActionObjID, comment);
											}
											if (cacheActionToUpperCase == "HIDECOMMENT") {
												sm_ShowHideComment(cacheActionObjID, 'hide');
											}
											if (cacheActionToUpperCase == "SHOWCOMMENT") {
												sm_ShowHideComment(cacheActionObjID, 'show');
											}

											sm_skipsAndTriggersAddActionDefinition_NestedSkipsAndTriggers(definitionIndex, cacheActionObjID);
											setTimeout(
												sm_skipsAndTriggers_triggerNestedEvent, 250);

										}

									}
								}
								break;

							case "SETDATETIMEDIFF":
								var dateIn,
								timeIn,
								dateOut,
								timeOut,
								format,
								diff;
								dateIn = null;
								timeIn = null;
								dateOut = null;
								timeOut = null;
								format = null;

								for (var counter2 = 0; counter2 < len; counter2++) {
									if (cacheActionObject.childNodes[counter2].nodeName.toLowerCase() == 'parameter') {
										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'datestart') {
											dateIn = cacheActionObject.childNodes[counter2].childNodes[0];
										}

										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'timestart') {
											timeIn = cacheActionObject.childNodes[counter2].childNodes[0];
										}

										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'dateend') {
											dateOut = cacheActionObject.childNodes[counter2].childNodes[0];
										}

										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'timeend') {
											timeOut = cacheActionObject.childNodes[counter2].childNodes[0];
										}

										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'format') {
											format = cacheActionObject.childNodes[counter2].childNodes[0];
										}
									}
								}

								diff = dateDiff(dateIn, timeIn, dateOut, timeOut, format);
								sm_setcomment(cacheActionObjID, diff);
								break;

							case "HIGHLIGHT":
								var color = "";
								var answers = "";
								for (var counter2 = 0; counter2 < len; counter2++) {
									if (cacheActionObject.childNodes[counter2].nodeName.toLowerCase() == 'parameter') {
										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'answers') {
											answerCSV = cacheActionObject.childNodes[counter2].childNodes.join(",");
										}

										if (cacheActionObject.childNodes[counter2]["@name"].toLowerCase() == 'color') {
											color = cacheActionObject.childNodes[counter2].childNodes.join("");
										}
									}
								}
								sm_SetAnswerColorCode(cacheActionObjID, color, answerCSV);

								break;

							case "ADVANCED":
								for (counter1 = 0; counter1 < len; counter1++) {
									if (cacheActionObject.childNodes[counter1].nodeName.toLowerCase() == 'parameter') {
										if (cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'expression' || cacheActionObject.childNodes[counter1]["@name"].toLowerCase() == 'parameter1') {
											var str_advancedScript = cacheActionObject.childNodes[counter1].childNodes.join()
												var evalAdvScript;
											try {
												strQID = cacheActionObjID
													str_advancedScript = str_advancedScript.replace(/\#THIS\#/gi, strQID);
												evalAdvScript = (new Function(str_advancedScript))();
											} catch (e) {
												alert(e + " : " + str_advancedScript)
											}
											//return evalAdvScript;
										}
									}
								}

								break;
							}
						}
					} else {
						//console.log("umad");
						//console.log(SkipMainDefinitions.childNodes[definitionIndex]);
					}

				};
				window.sm_skipsHandleQuestion = function (qID) {
					var temp0,
					index,
					counter /*reusable, no need of redefinition*/
				,
					cacheUppercaseConditionStrings,
					cacheChildNodesLength;
					var tempQuestionID = (qID == '#datetime_start' || qID == '#datetime_end') ? '#datetime' : qID;
					var conditionsGroups;
					var definition;
					var condition;
					var conditions;
					var i;
					var conditionIndex;
					if (typeof skipDefinitions[tempQuestionID] !== 'undefined') {

						for (var n = 0; n < skipDefinitions[tempQuestionID].length; n++) {
							//for(var index in skipDefinitions[tempQuestionID]){
							index = skipDefinitions[tempQuestionID][n];
							//	if(skipDefinitions[tempQuestionID].hasOwnProperty(index)){
							definition = SkipMainDefinitions.childNodes[index];
							conditionsGroups = definition.childNodes[0].childNodes;
							for (i = 0; i < conditionsGroups.length; i++) {
								conditions = conditionsGroups[i].childNodes;
								for (conditionIndex = 0; conditionIndex < conditions.length; conditionIndex++) {

									condition = conditions[conditionIndex];
									/**NEXT LINES COVER THE CASES WHEN FUNCTION IS USED IN SURVEO OR OUTSIDE OF IT.**/
									/**DOM OPERATIONS ARE NOT TO BE USED IN SURVEO**/
									if (typeof ODP != 'undefined') {
										/* IF ODP IS PRESENT*/
										if (typeof ODP.Surveo == 'undefined') {
											/*AND SURVEO IS NOT*/
											if (typeof condition["@objID"] !== "undefined") {
												if (typeof document.getElementsByName("qstn" + condition["@objID"])[0] === "undefined") {
													continue;
												}
											}
										}
									} else {
										/*IF ODP ISN'T PRESENT*/
										if (typeof condition["@objID"] !== "undefined") {
											if (typeof document.getElementsByName("qstn" + condition["@objID"])[0] === "undefined") {
												continue;
											}
										}
									}
									condition.state = false;
									cacheUppercaseConditionStrings = condition["@type"].toUpperCase();
									switch (cacheUppercaseConditionStrings) {
										/* WHEN DEFINITION IS ON QUESTION. */
									case "ANSWERALL":
									case "ALL":
										condition.state = false;

									case "ANSWERISNOTIN":
									case "ANSWERISIN":

										var answers = (sm_getmultipleanswer(condition["@objID"]) || '');
										// if (answers === '') {
										// break;
										// }

										answers = answers.split(",");
										cacheChildNodesLength = condition.childNodes.length;
										var definedAnswers = "";
										/**NO REDEFINING IN LOOPS**/
										for (counter = 0; counter < cacheChildNodesLength; counter++) {
											if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {
												definedAnswers = "|" + condition.childNodes[counter].childNodes.toString().split(",").join("|") + "|";

												if (cacheUppercaseConditionStrings === 'ANSWERALL' || cacheUppercaseConditionStrings === 'ALL') {
													answers = answers.join("|");
													if (definedAnswers == ("|" + answers + "|")) {
														condition.state = true;
													}
												} else {

													for (var counter0 = 0; counter0 < answers.length; counter0++) {

														if (definedAnswers.indexOf('|' + answers[counter0] + '|') !== -1) {
															condition.state = true;
															if (cacheUppercaseConditionStrings !== 'ANSWERALL' || cacheUppercaseConditionStrings === 'ALL') {
																break;
															}
														} else {
															if (cacheUppercaseConditionStrings === 'ANSWERALL' || cacheUppercaseConditionStrings === 'ALL') {
																condition.state = false;
																break;
															}
														}
													}
												}
											}
										}

										if (cacheUppercaseConditionStrings === 'ANSWERISNOTIN') {
											condition.state = !condition.state;
										}
										break;

									case "COMMENTCONTAINS":
									case "COMMENTDOESNOTCONTAIN":
										var comment = sm_getcomment(condition["@objID"]);
										comment = comment.replace(/^\s*|\s*$/g, '');
										for (counter = 0; counter < condition.childNodes.length; counter++) {
											if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {
												var definedComment = condition.childNodes[counter].childNodes;

												for (var counter0 = 0; counter0 < definedComment.length; counter0++) {
													var temp1 = RegExp(definedComment[counter0].replace(/(\W)/g, '\\$1').replace(/\\\*/gi, '.*'), 'gi');

													if (temp1.test(comment)) {
														condition.state = true;
														break;
													}
												}
											}
										}

										if (cacheUppercaseConditionStrings === 'COMMENTDOESNOTCONTAIN') {
											condition.state = !condition.state;
										}
										break;

										/* WHEN DEFINITION IS ON DATE, CUSTOM PROPERTY OR LOCATION. */
									case "DATEISNOTIN":
									case "DATEISIN":
										var definedDate,
										dateFrom,
										dateTo,
										surveyDate;
										surveyDate = null;

										if (qID.indexOf('#datetime_start') == 0) {
											if (document.frmSurvey && document.frmSurvey.HEAD_TIME && document.frmSurvey.HEAD_DATE) {
												surveyDate = sm_getDateObject(document.frmSurvey.HEAD_DATE.value + ' ' + document.frmSurvey.HEAD_TIME.value);
											} else {
												if ((typeof SkipsHeadDate !== 'undefined') && (typeof SkipsHeadTime !== 'undefined')) {
													if (SkipsHeadDate && SkipsHeadTime) {
														surveyDate = sm_getDateObject(SkipsHeadDate + ' ' + SkipsHeadTime);
													}
												}

											}

										} else {
											if (document.frmSurvey && document.frmSurvey.HEAD_TIMEOUT && document.frmSurvey.HEAD_DATE) {
												surveyDate = sm_getDateObject(document.frmSurvey.HEAD_DATE.value + ' ' + document.frmSurvey.HEAD_TIMEOUT.value);
											} else {
												if ((typeof SkipsHeadDate !== 'undefined') && (typeof SkipsHeadOutTime !== 'undefined')) {
													if (SkipsHeadDate && SkipsHeadOutTime) {
														surveyDate = sm_getDateObject(SkipsHeadDate + ' ' + SkipsHeadOutTime);
													}
												}
											}
										}

										if (surveyDate == null) {
											break;
										}

										if (condition.childNodes.length > 1) {
											/* New */
											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter]["@name"].toUpperCase() == "DATEFROM") {
													if (condition.childNodes[counter].childNodes[0] !== "") {
														dateFrom = sm_getDateObject(condition.childNodes[counter].childNodes[0]);
													} else {
														dateFrom = sm_getDateObject("1900-01-01");
													}
												}
												if (condition.childNodes[counter]["@name"].toUpperCase() == "DATETO") {
													if (condition.childNodes[counter].childNodes[0] !== "") {
														dateTo = sm_getDateObject(condition.childNodes[counter].childNodes[0]);
													} else {
														dateTo = sm_getDateObject("2099-12-31");
													}
												}
											}
										} else {
											/* Old, when date was array with | */
											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {

													definedDate = condition.childNodes[counter].childNodes.join().split("|");
													dateFrom = sm_getDateObject(definedDate[0]);

													if (definedDate.length > 1) { // no date to in definition
														dateTo = sm_getDateObject(definedDate[1]);
													} else {
														dateTo = null;
													}
												}
											}
										}

										if (dateFrom == null && dateTo == null) {
											dateFrom = false;
										} else {
											if ((dateFrom < surveyDate || dateFrom == null) && (dateTo > surveyDate || dateTo == null)) {
												condition.state = true;
											}
										}

										if (cacheUppercaseConditionStrings === 'DATEISNOTIN') {
											condition.state = !condition.state;
										}
										break;

									case "DUEDATEISNOTIN":
									case "DUEDATEISIN":
										var definedDate,
										dateFrom,
										dateTo;

										if (condition.childNodes.length > 1) {
											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter]["@name"].toUpperCase() == "DATEFROM") {
													if (condition.childNodes[counter].childNodes[0] !== "") {
														dateFrom = sm_getDateObject(condition.childNodes[counter].childNodes[0]);
													} else {
														dateFrom = sm_getDateObject("1900-01-01");
													}
												}
												if (condition.childNodes[counter]["@name"].toUpperCase() == "DATETO") {
													if (condition.childNodes[counter].childNodes[0] !== "") {
														dateTo = sm_getDateObject(condition.childNodes[counter].childNodes[0]);
													} else {
														dateTo = sm_getDateObject("2099-12-31");
													}
												}
											}
										} else {
											/* Old, when date was array with | */
											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {
													definedDate = condition.childNodes[counter].childNodes.join().split("|");
													dateFrom = (definedDate[0].split(',')[0] || '1900-01-01').replace(/[\- \:]/gim, '!').split('!');
													dateTo = (definedDate[1].split(',')[0] || '2099-12-31').replace(/[\- \:]/gim, '!').split('!');
													dateFrom = new Date((dateFrom[0] || ''), ((dateFrom[1]) ? dateFrom[1] - 1 : ''), (dateFrom[2] || ''), (dateFrom[3] || ''), (dateFrom[4] || ''), (dateFrom[5] || ''));
													dateTo = new Date((dateTo[0] || ''), ((dateTo[1]) ? dateTo[1] - 1 : ''), (dateTo[2] || ''), (dateTo[3] || ''), (dateTo[4] || ''), (dateTo[5] || ''));
												}
											}
										}

										if (dateFrom < SkipDateDue && SkipDateDue < dateTo) {
											condition.state = true;
										}

										if (cacheUppercaseConditionStrings === 'DUEDATEISNOTIN') {
											condition.state = !condition.state;
										}
										break;
									case "PROPERTYISNOTIN":
									case "PROPERTYISIN":

										if (typeof arrSkipCustProp !== 'undefined') {
											var currentCustomProperty,
											definedCustomProps;

											currentCustomProperty = "|" + unescape(arrSkipCustProp[condition["@objID"]]) + "|";
											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {
													definedCustomProps = "|" + unescape(condition.childNodes[counter].childNodes.join()) + "|";
													if (definedCustomProps.indexOf(currentCustomProperty) !== -1) {
														condition.state = true;
													}
												}
											}
										}

										if (cacheUppercaseConditionStrings === 'PROPERTYISNOTIN') {
											condition.state = !condition.state;
										}
										break;

									case "LOCATIONISNOTIN":
									case "LOCATIONISIN":
										if (typeof SkipMystLocationStoreID !== 'undefined') {
											var currentLocation,
											definedLocations;
											currentLocation = "|" + SkipMystLocationStoreID + "|";

											for (counter = 0; counter < condition.childNodes.length; counter++) {
												if (condition.childNodes[counter].nodeName.toLowerCase() == 'value') {
													var definedLocations = "|" + condition.childNodes[counter].childNodes.join('|') + "|";

													if (definedLocations.indexOf(currentLocation) !== -1) {
														condition.state = true;
													}
												}
											}

										}

										if (cacheUppercaseConditionStrings === 'LOCATIONISNOTIN') {
											condition.state = !condition.state;
										}
										break;

									}
									//async execution of actions
									//switch(index){
									//case 0: execSkipAction(index);
									//	break;
									//default:
									//setTimeout(function(){
									
									//},0);

									//}
								}

							}
							execSkipAction(index);
							//	}

						}
					} else {
						//console.log("NO DEFINITION FOR QIR", qID)
					}
				}

			};
			window.globalTimeoutForSurveo = null;
			ODP.Surveo.methods.parseSkipsDefinitions = function (skips) {
				if (typeof window.convertFromOldToNewDefinitions !== 'function') {
					setTimeout(function () {
						/* failsafe : will try to preaload the core functions of skipsntriggers*/

						ODP.Surveo.methods.wrapStandardSkipFunctions();
						ODP.Surveo.methods.parseSkipsDefinitions(skips);
						ODP.Surveo.params.buttonsLock = 1;
					}, 100);
				} else {
					ODP.Surveo.params.buttonsLock = 0;
					window.SkipMainDefinitions = ODP.Surveo.params.skipDefinitions = window.convertFromOldToNewDefinitions(skips);
					if (typeof SkipMainDefinitions === 'undefined' || SkipMainDefinitions === null) {
						ODP.Surveo.params.skipsEnabled = false;

					} else {
						setTimeout(function () {
							ODP.Surveo.params.skipsEnabled = true;
							sm_skipsInit();
						}, 25);
					}

					/**this is the new version of the skip definitions forming -> format is predefined**/
					/**Code below the return is deprecated**/
				}
				return;
				/*sslavchev EDDITED : IT ENDS HERE!*/
			};

			ODP.Surveo.methods.resetSkips = function () { //clear all skip/trigger consequences
				for (var k in ODP.Surveo.params.questionData) {
					var tempGetDisplayOnce = ODP.Surveo.params.questionData[k].getDisplayOnce();
					if (typeof tempGetDisplayOnce === 'undefined') {
						ODP.Surveo.params.questionData[k].setSkiped(false); //remember to re-apply;
					} else {
						if (ODP.Surveo.params.questionData[k].getDisplayOnce()) {
							ODP.Surveo.params.questionData[k].setSkiped(true); //remember to re-apply;
						} else {
							ODP.Surveo.params.questionData[k].setSkiped(false); //remember to re-apply;
						}
					}
				}
			};
			ODP.Surveo.correctPositionOnce = function () { //fire a positioning function only once
				ODP.Surveo.methods.correctPos({
					orientation : ((ODP.Surveo.params.deploymentTarget.fullBodyHeight > ODP.Surveo.params.deploymentTarget.fullBodyWidth) ? 90 : 0)
				});
				/**WARNING - SELF MODIFYING CODE!!!**/
				ODP.Surveo.correctPositionOnce = function () {};
			};
			ODP.Surveo.methods.addStyleTagsProperly = function (styleTagContentAsString) {
				if (ODP.Surveo.params.deploymentTarget.isOldBrowser) {
					var m = document.querySelectorAll("style")[document.styleSheets.length - 1];
					if (!m) {
						m = document.createElement("style");

						document.getElementsByTagName("head")[0].appendChild(m);
					}
					styleTagContentAsString += ".dummyUnique{color:white;}";

					var temporalVar = styleTagContentAsString.split(/<style\b[^>]*>/).join("").split(/<\/style>/gi).join("");
					/**not uppercase-safe**/
					m.styleSheet.cssText += temporalVar;

					/** shameful, but needed **/
					return "";
				}
				return styleTagContentAsString;

			};
			ODP.Surveo.methods.checkRequired = function () {
				for (var k in ODP.Surveo.params.questionData) { //check required questions for answers
					if (ODP.Surveo.params.questionData[k].getParentSlideIndex() == currentChildNode) {
						if (ODP.Surveo.params.questionData[k].getRequired()) {
							if (ODP.Surveo.params.surveyResults[k] == "" || typeof ODP.Surveo.params.surveyResults[k] == 'undefined') {
								return true;
							}
						}
					}
				}
				return false;
			}
			ODP.Surveo.methods.addSnippetMarkupSafely = function(where, markupString, arrayOfCallbacks) { //in order to avoid skipping the content creation in iOS (CPU drops heavy tasks); also reports progress updates
				//console.log("addSnippetMarkupSafely", where);

                if (renderer !== 'design' && typeof SM === 'undefined') {
                    ODP.Surveo.params.buttonsLock = 1; // lock controlls when adding the DOM;
                } else {
                    ODP.Surveo.params.buttonsLock = 0;
                }

                doc.setContent(where, markupString);

                if (typeof ODP.Surveo.params.loadingBox.slidesQueue === "undefined") {
                    ODP.Surveo.params.loadingBox.slidesQueue = [];
                }
                ODP.Surveo.params.loadingBox.slidesQueue.push({
                    "where": where,
                    "arrayOfCallbacks": arrayOfCallbacks
                });

                if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
                    /**check wether all slides have finished loading. If not - increment and call GUI update**/
                    ODP.Surveo.params.loaderProgress++;
                    ODP.Surveo.params.loadingBox.update();
                }

                if (typeof ODP.Surveo.params.attachArrayOfCallBacks === "undefined") {
                    ODP.Surveo.params.attachArrayOfCallBacks = true;

                    ODP.document.queue.add(function() {
                        ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
                        if (ODP.Surveo.params.loadingBox.slidesQueue) {
                            while (ODP.Surveo.params.loadingBox.slidesQueue[0]) {
                                var firstSlideInQueue = ODP.Surveo.params.loadingBox.slidesQueue[0];
                                if (firstSlideInQueue.where && firstSlideInQueue.where.firstChild) {
                                    try {
                                        var arrayOfCallbacks = firstSlideInQueue['arrayOfCallbacks'];
                                        if (typeof arrayOfCallbacks !== 'undefined') {
                                            for (var k in arrayOfCallbacks) {
                                                arrayOfCallbacks[k]();
                                            }
                                        }
                                    } catch (e) {
                                        alert(e + " @safetyIntervalFINISHInMobiles");
                                    }
                                    if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
                                        /**check wether all slides have finished loading. If not - increment and call GUI update**/
                                        ODP.Surveo.params.loaderProgress++;
                                        ODP.Surveo.params.loadingBox.update();
                                    }
                                    ODP.Surveo.params.loadingBox.slidesQueue.shift();
                                }
                            }
                        }

                        if (ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent) {
                            while (ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent[0]) {
                                var addEvent = ODP.Surveo.methods.addEvent;
                                var curSlide = ODP.window.document.querySelector("#" + ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent[0]);
                                var touchStart = ODP.Surveo.params.isMobileRenderer ? "touchstart" : "click";
                                var touchMove = ODP.Surveo.params.isMobileRenderer ? "touchmove" : "mousemove";
                                addEvent(curSlide, "webkitTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
                                addEvent(curSlide, "oTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
                                addEvent(curSlide, "msTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
                                addEvent(curSlide, "transitionend", ODP.Surveo.methods.handleAnimEnd);
                                addEvent(curSlide, touchStart, ODP.Surveo.methods.onActionHandler);
                                addEvent(curSlide, touchMove, ODP.Surveo.methods.onActionHandler);

                                ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent.shift();
                            }
                        }

                        clearInterval(ODP.Surveo.params.loadingBox.addingSlidesQueueInterval);
                        ODP.Surveo.debug.fixProgressBar();
                        ODP.Surveo.methods.clearAnswers(); //clear answers and position of advanced snippet question types
                        ODP.Surveo.correctPositionOnce();
                        ODP.Surveo.methods.unlockControls();
                        //setTimeout(ODP.Surveo.params.loadingBox.destroy, 0);
                        ODP.Surveo.params.loadingBox.destroy();

                        setTimeout(function() {
                        	var globalization = ODP.Surveo.globalization;
                        	if(globalization.isForced) {
                        		globalization.globalizationInit();
								globalization.setGlobalizationForSlide(0);
								// var globalizationQuestionData = ODP.Surveo.params.questionData[ODP.Surveo.globalization.globalizationQuestion];
								// globalizationQuestionData.setSkiped(true);
								// globalizationQuestionData.setPersistent(true);
                        	}
						}, 0);
                    }, 99)
                }

                return;

				if (renderer !== 'design' && typeof SM === 'undefined') { //skip the "safe" part, go render freely - when not in a mobile device
					if (!where.firstChild) {
						/**this checks if content is already created**/
						var useToRender = setInterval(function () {
							/**setup a function to periodically check if content is in place before a survey can be started; can execute callbacks;**/
							if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
								/**check wether all slides have finished loading. If not - increment and call GUI update**/
								ODP.Surveo.params.loaderProgress++;
								ODP.Surveo.params.loadingBox.update();
							} else {
								setTimeout(function () {
									ODP.Surveo.methods.correctPos();
									ODP.Surveo.params.callbacksFinished = true;
									ODP.Surveo.params.loadingBox.update();
								}, 1000);
							}
							if (where.firstChild) {
								try {
									if (typeof arrayOfCallbacks !== 'undefined') {
										for (var k in arrayOfCallbacks) {
											/**if multiple callbacks - treat as an array**/
											arrayOfCallbacks[k]();
											/*calls the function bound to snippets' contents creation; ex: a function that settles particular layout problems after all content is present;*/
										}
									}
								} catch (e) {
									alert(e + " @safetyIntervalFINISHInMobiles");
								}
								ODP.Surveo.params.callbacksFinished = true;
								ODP.Surveo.params.loadingBox.update();
								clearInterval(useToRender);

								useToRender = null;
							} else {
								doc.setContent(where, markupString);
							}
							ODP.Surveo.params.loadingBox.update();
						}, 3000);
					} else {
						try {
							if (typeof arrayOfCallbacks !== 'undefined') {
								for (var k in arrayOfCallbacks) {
									arrayOfCallbacks[k]();
								}
							}
						} catch (e) {
							alert(e + " @safetyIntervalInMobiles")
						}
						if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
							ODP.Surveo.params.loaderProgress++;
						} else {
							setTimeout(function () {
								ODP.Surveo.methods.correctPos();
								ODP.Surveo.params.loadingBox.update();
							}, 1000);
						}
						ODP.Surveo.params.loadingBox.update();
					}
				} else {
					ODP.Surveo.params.loaderProgress++;
					try {
						if (typeof arrayOfCallbacks !== 'undefined') {

							for (var k in arrayOfCallbacks) {

								arrayOfCallbacks[k]();
							}
						}
					} catch (e) {
						alert(e + " @normal rendermode");
					}
					ODP.Surveo.params.loadingBox.update();
				}
				//console.log("--------------------------------------------------------");
			};
			
			//Notification added for Surveo Designer ( not compatible snippets )
			ODP.Surveo.methods.addNotification = function (questionID, msg) {
				var questionData = ODP.Surveo.params.questionData[questionID];
				if (questionData) {
					var parentSlide = questionData.getParentSlide();
					var notificationDiv = parentSlide.querySelector(".surveo_warning_notification");
					//var notificationMask = parentSlide.querySelector(".surveo_warning_notification_mask");
					if(notificationDiv) {
						notificationDiv.style.display = "block";
						//notificationMask.style.display = "block";
					} else {
						var doc = ODP.window.document;
						msg = msg || "This question type is not compatible with IE 8.";
						
						notificationDiv = doc.createElement("div");
						notificationDiv.className = "surveo_warning_notification";
						notificationDiv.innerHTML = '<span onclick = "ODP.Surveo.methods.hideNotification('+questionID+')" class = "surveo_warning_notification_cancel"></span><h3 style = "text-transform: uppercase;">Wait, I must warn you!</h3><p>' + msg + '</p>';
						
						//notificationMask = doc.createElement("div");
						//notificationMask.className = "surveo_warning_notification_mask";
						
						if (parentSlide.firstChild) {
							//parentSlide.insertBefore(notificationMask, parentSlide.firstChild);
							parentSlide.insertBefore(notificationDiv, parentSlide.firstChild);
						}
					}
				}
			}

			ODP.Surveo.methods.hideNotification = function(questionID) {
				var questionData = ODP.Surveo.params.questionData[questionID];
				if (questionData) {
					var parentSlide = questionData.getParentSlide();
					var notificationDiv = parentSlide.querySelector(".surveo_warning_notification");
					//var notificationMask = parentSlide.querySelector(".surveo_warning_notification_mask");
					if(notificationDiv) {
						notificationDiv.style.display = "none";
						//notificationMask.style.display = "none";
					}
				}
			}
			
			/***************************/
			/**	SNIPPET RENDER ACTIONS		**/
			/***************************/

			var datasetLoader = doc.getSnippet(snippet['Dataset Loader ID']);
			if (allChildren.length == 0) { //iiliev
				Open.store.purge(snippet['Dataset Loader ID']);
				if (Open.listeners[snippet['Dataset Loader ID']] && Open.listeners[snippet['Dataset Loader ID']].onready) {
					Open.listeners[snippet['Dataset Loader ID']].onready = [];

				}
			}

			var resourceLoader = doc.getSnippet(snippet['Resources ID']);
			if (ODP.designer) {
				datasetLoader.instance[doc.findIndexByName(datasetLoader.instance, 'Dataset')].value = '{"action":"exec","dataset":{"datasetname":"/Apps/com.Surveo/Surveo Designer/Surveo Datasets/GetSurveyData"},"parameters":[{"name":"SecurityObjectUserID","value":null},{"name":"ProtoSurveyID","value":"' + snippet['Survey ID'] + '"},{"name":"MiscSettings","value":null}]}';

				//ODP.designer.replaceSnippetProperties(datasetLoader.instance);

				doc.updateJSON(datasetLoader.instance);
				doc.addAsObjects();
				datasetLoader = doc.getSnippet(snippet['Dataset Loader ID']);

			}
			if (snippet['Survey ID'].length != 0) {
				/**When NOT empty survey - pre-generate the structure**/
				doc.getPrototype(datasetLoader['com.opendataplatform.document.protoid']).ui.render(datasetLoader['com.opendataplatform.document.id'], doc, doc.renderMode);
				var runQueue = true;
				if (allChildren.length == 0) {
					var newSurveyStructure = (doc.getNewSnippet('{B746BD11-50AB-40FE-B7E9-78055CEA1B18}'));
					newSurveyStructure.instance[doc.findIndexByName(newSurveyStructure.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
					doc.updateJSON(newSurveyStructure);
					ODP.designer.addSnippetToDocumentTree(newSurveyStructure, false);

				}
			} else {
				/**When empty survey - generate dataset and form structure**/
				datasetLoader.instance[doc.findIndexByName(datasetLoader.instance, 'Dataset')].value = '{"action":"exec","dataset":{"datasetname":"/Apps/com.Surveo/Surveo Designer/Surveo Datasets/GetSurveyData"},"parameters":[{"name":"SecurityObjectUserID","value":null},{"name":"ProtoSurveyID","value":"109"},{"name":"MiscSettings","value":null}]}';
				if (ODP.designer) {
					//ODP.designer.replaceSnippetProperties(datasetLoader.instance);
					doc.updateJSON(datasetLoader.instance);
					doc.addAsObjects();
					datasetLoader = doc.getSnippet(snippet['Dataset Loader ID']);
					doc.getPrototype(datasetLoader['com.opendataplatform.document.protoid']).ui.render(datasetLoader['com.opendataplatform.document.id'], doc, doc.renderMode);

				}
				if (allChildren.length != 0) {
					doc.removeSnippet([doc.firstChild(snippet["com.opendataplatform.document.id"])["com.opendataplatform.document.id"]], true);
					doc.addAsObjects();

				}
			}

			var metaTagForIE = ODPWindow.document.createElement('meta');
			metaTagForIE.name = "myTag";
			metaTagForIE.content = "IE=edge";
			// try {
			/**adding the meta tag for old IE image compatibility & redefined functions & methods **/
			ODPWindow.document.getElementsByTagName('head')[0].appendChild(metaTagForIE);
			// } catch (e) {
			// alert(" @adding the metaTag");
			// }
			var tmpChildren = doc.renderChildren(instanceID);
			var proportion = (typeof window.innerWidth !== "undefined") ? ((window.innerWidth > window.innerHeight) ? 0.6 : 0.85) : 0.6;
			var x = (window.innerWidth > 320) ? ((isNaN(proportion * window.innerWidth) || proportion * window.innerWidth < 10) ? 400 : (proportion * window.innerWidth)) : (0.94 * window.innerWidth);
			var y = (x * 0.025 > 10) ? 0.24 * x : 0.32 * x;
			var fontSizePx = (x * 0.025 > 10) ? ((x * 0.025) + "") : 10;
			if (!ODP.Surveo.params.deploymentTarget.isMobile && (typeof window.sm_skipsInit === "undefined")) {
				/**add the skips and triggers functionality**/
				var scripttoadd = document.createElement("script");
				scripttoadd.setAttribute("src", "/mystservices/inc_SurveyRendering_RulesAndEvents_2_js.asp");
				// try {
				ODPWindow.document.getElementsByTagName('head')[0].appendChild(scripttoadd);
				// } catch (e) {
				// alert(e + " @gatherScripts" );
				// }
			}
			
			var timeForAnimationForSlideChange = ODP.Surveo.params.timeForAnimationForSlideChange || 400;
			if (ODP.Surveo.params.deploymentTarget.isMobile) { // rktodorov animation optimizations on mobile devices
				var animationsForMobile = [
					//WEBKIT ANIMATION 
					"@-webkit-keyframes fromCurrentToBack { 0% { -webkit-transform: translate3d(0%,0,0); } 		100% { -webkit-transform: translate3d(-100%,0,0); }}",
					"@-webkit-keyframes fromBackToCurrent { 0% { -webkit-transform: translate3d(-100%,0,0); } 	100% { -webkit-transform: translate3d(0%,0,0); }}",
					"@-webkit-keyframes fromCurrentToNext { 0% { -webkit-transform: translate3d(0%,0,0); } 		100% { -webkit-transform: translate3d(100%,0,0); }}",
					"@-webkit-keyframes fromNextToCurrent { 0% { -webkit-transform: translate3d(100%,0,0); }	100% { -webkit-transform: translate3d(0%,0,0); }}",
					".animatateSlidefromCurrentToBack {",
						"-webkit-animation-name: fromCurrentToBack;",
						"z-index: 10;",
					"}",
					".animatateSlidefromBackToCurrent {",
						"-webkit-animation-name: fromBackToCurrent;",
						"z-index: 1000;",
					"}",
					".animatateSlidefromCurrentToNext {",
						"-webkit-animation-name: fromCurrentToNext;",
						"z-index: 10;",
					"}",
					".animatateSlidefromNextToCurrent {",
						"-webkit-animation-name: fromNextToCurrent;",
						"z-index: 1000;",
					"}",
					".inAnimation {",
						"display: inline !important;",
						"-webkit-animation-duration: "+timeForAnimationForSlideChange+"ms;",
						"-webkit-animation-iteration-count: 1;",
						"-webkit-animation-fill-mode: forwards;",
						"-webkit-animation-timing-function: ease-in-out;",
						"-webkit-backface-visibility: hidden;",
						"-webkit-perspective: 1000;",
					"}",
					".prepareForAnimationCurrent {",
						"display: inline !important;",
						"-webkit-transform: translate3d(0%,0,0);",
					"}",
					".prepareForAnimationNext {",
						"display: inline !important;",
						"-webkit-transform: translate3d(100%,0,0);",
					"}",
					".prepareForAnimationBack {",
						"display: inline !important;",
						"-webkit-transform: translate3d(-100%,0,0);",
					"}",
					".normalMobile {",
						"display: inline !important;",
						"-webkit-transform: translate3d(0%, 0, 1px);",
					"}",
					".readMobile {",
						"display: none !important;",
						"-webkit-transform: translate3d(-100%, 0, 0);",
					"}",
					".unreadMobile {",
						"display: none !important;",
						"-webkit-transform: translate3d(100%, 0, 0);",
					"}",
					".mobileOptimized {",
						"-webkit-backface-visibility: hidden;",
						"-webkit-perspective: 1000;",
						"-webkit-transform: translate3d(0, 0, 0);",
					"}"
				];
				ODP.document.addRulesToMainStyleSheet(animationsForMobile.join(''));
			}// else {
				var navigationDirection = (ODP.Surveo.params.surveoAnimation == 'HSlide') ? "left" : "top";
				var animationsForDesktop = [
					//".questionMain{-webkit-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;user-select:none;position:absolute;width:100%;height:100%;overflow:hidden;background-size:100% 100%;}",
					".normalDesktop {",
						"display: block;",
						(ODP.Surveo.params.deploymentTarget.has3DTransforms ? "-webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); -ms-transform: translate3d(0,0,0); -o-transform: translate3d(0,0,0);transform: translate3d(0,0,0);" : "-webkit-transform: translate(0,0); -moz-transform: translate(0,0); -ms-transform: translate(0,0); -o-transform: translate(0,0);transform: translate(0,0);"),
					"}",
					".hiddenSlide {",
						"display: none !important;",
					"}",
					".readDesktop {",
						(renderer === 'design' || typeof SM !== "undefined") ? "" : "display: none;",
						(ODP.Surveo.params.deploymentTarget.has3DTransforms ? "-webkit-transform: translate3d(-100%,0,0); -moz-transform: translate3d(-100%,0,0); -ms-transform: translate3d(-100%,0,0); -o-transform: translate3d(-100%,0,0);transform: translate3d(-100%,0,0);" : "-webkit-transform: translate(-100%,0); -moz-transform: translate(-100%,0); -ms-transform: translate(-100%,0); -o-transform: translate(-100%,0);transform: translate(-100%,0);"),
					"}",
					".unreadDesktop {",
						(renderer === 'design' || typeof SM !== "undefined") ? "" : "display: none;",
						(ODP.Surveo.params.deploymentTarget.has3DTransforms ? "-webkit-transform: translate3d(100%,0,0); -moz-transform: translate3d(100%,0,0); -ms-transform: translate3d(100%,0,0); -o-transform: translate3d(100%,0,0);transform: translate3d(100%,0,0);" : "-webkit-transform: translate(100%,0); -moz-transform: translate(100%,0); -ms-transform: translate(100%,0); -o-transform: translate(100%,0);transform: translate(100%,0);"),
					"}",
					".prepareReadDesktop {",
						"display: block;",
						navigationDirection + " : -100%",
					"}",
					".prepareUnreadDesktop {",
						"display: block;",
						navigationDirection + " : 100%",
					"}",
					".questionMain {",
						"-webkit-user-select: none;",
						"-webkit-tap-highlight-color:rgba(0,0,0,0);",
						"-webkit-touch-callout:none;",
						"user-select:none;",
						"position:absolute;",
						"width:100%;",
						"height:100%;",
						"overflow:hidden;",
						"background-size:100% 100%;",
						"left: 0px;",
						"-webkit-transition-timing-function: ease;",
						"-moz-transition-timing-function: ease;",
						"-ms-transition-timing-function: ease;",
						"-o-transition-timing-function: ease;",
						"transition-timing-function: ease;",

						"-webkit-transition-duration: " + timeForAnimationForSlideChange + "ms;",
						"-moz-transition-duration: " + timeForAnimationForSlideChange + "ms;",
						"-ms-transition-duration: " + timeForAnimationForSlideChange + "ms;",
						"-o-transition-duration: " + timeForAnimationForSlideChange + "ms;",
						"transition-duration: " + timeForAnimationForSlideChange + "ms;",
					"}",
					".surveo_warning_notification {",
						"width: 100%;",
						"border: 1px solid;",
						"color: #fff;",
						"padding: 8px;",
						"*background: -webkit-linear-gradient(top, #fc9551 1%,#fc7e44 100%);",
						"background: #fc9551; /* Old browsers */",
						"background: -moz-linear-gradient(top,  #fc9551 1%, #fc7e44 100%); /* FF3.6+ */",
						"background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#fc9551), color-stop(100%,#fc7e44)); /* Chrome,Safari4+ */",
						"background: -webkit-linear-gradient(top,  #fc9551 1%,#fc7e44 100%); /* Chrome10+,Safari5.1+ */",
						"background: -o-linear-gradient(top,  #fc9551 1%,#fc7e44 100%); /* Opera 11.10+ */",
						"background: -ms-linear-gradient(top,  #fc9551 1%,#fc7e44 100%); /* IE10+ */",
						"background: linear-gradient(to bottom,  #fc9551 1%,#fc7e44 100%); /* W3C */",
						"filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc9551', endColorstr='#fc7e44',GradientType=0 ); /* IE6-9 */",
						"position: fixed;",
						"text-shadow: 0 1px 1px rgba(51, 19, 9, 0.5);",
						"border-color: #d99a36;",
						"z-index: 9999;",
						"font-size: 16px;",
					"}",
					".surveo_warning_notification_mask {",
						"position: absolute;",
						"height: 100%;",
						"z-index: 9998;",
						"top: 0;",
						"left: 0;",
						"filter: alpha(opacity=50);",
						"opacity: .5;",
						"width: 100%;",
						"height: 100%;",
						"zoom: 1;",
						"background: #ccc;",
					"}",
					".surveo_warning_notification_cancel {",
						"background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAALEgAACxIB0t1+/AAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABSklEQVRIS72V0RGEIAxE7cBSLOlK0A6uBEu4EizFUiyByzIsE0LC6c8xkx/Msi8QcEopTdu2LRKXxCkxY86Gyvk43xeZuyROCVcv88xp9No8iQmig1DmzNGLcGHxyMODsDlVDwBUzoU7CMecOXvZCVRuh4aw5szNegCgYgvAnVgDQHxfCwDMvIF55HiAyM96AMwDCA8Mc3ULZZFZIoII2FLV52Z7CKHN2axPIBp97fabEJ75E4hO31w3nGvQDzwKVNpdUTWHcx2NTq93gG9BdO7uFVXmy6DhCIVeaSDYA3fMw3dCFr1j7kJ4D9FoBzyIJ+YdRPQQ5av2ozGPsv1XcOhouNHtyHoAwMhWXbt1APEqAMi1o+oHEFnPHtAQWhy9EzRnE2uITu9AVL2+BbtU+y5VeX9DvJiHhDVn7i7aUF8gsO2NfnSn//LtC5Tk8Ik8YvjJAAAAAElFTkSuQmCC');",
						"background-position: 16px 0px;",
						"width: 16px;",
						"height: 16px;",
						"position: absolute;",
						"left: 100%;",
						"margin-left: -20px;",
						"margin-top: -4px;",
						"cursor: pointer;",
					"}",
					"@keyframes animate-bg {",
						"from {",
							"background-position: 0 0;",
						"}",
						"to {",
							"background-position: -80px 0;",
						"}",
					"}"

				];
				
				if(ODP.Surveo.params.deploymentTarget.isWPhone) {
					document.body.ontouchmove = function(e) {e.preventDefault()};
					
					animationsForDesktop.push(" html {",
						"-ms-touch-action: pan-x;",
						"touch-action: pan-x;",
					"}",

					"body {",
						"-ms-touch-action: pan-y;",
						"touch-action: pan-y;",
						"-ms-content-zooming: none;",
					"}");
				}
				
				animationsForDesktop = animationsForDesktop.join(''); 
				ODP.document.addRulesToMainStyleSheet(animationsForDesktop);
			//}

			return (ODP.Surveo.methods.addStyleTagsProperly(
			//(ODP.Surveo.params.deploymentTarget.isOldBrowser ? '<style type="text/css">*{ outline:none;behavior: expression(this.setStyle = function(){return Element.prototype.setStyle.apply(this, arguments);})}</style>' : '')  //already done in bootstrap
			'<style>' +
			'* { -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-tap-highlight-color: transparent; outline: 0 none !important; }; ' +
			'*:focus{ outline: 0 none !important; }' +
			'.imageSnippetAnswerContainer{text-align:center;} button, input, .resDiv img{margin: 0;cursor:hand;cursor:pointer;} ' +
			'.hiddenWindow{display:none;} .shownWindow{width:6em;margin:auto;position:relaive;text-align:center;display:block;}' +
			'*{' +
				'border:none;margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box;' + 
				((ODP.Surveo.params.deploymentTarget.isMobile) ? '-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;' : '') + 
			'} ' +
			'.carouselSideFieldLeft{left: 50%;}  ' +
			'.carouselSideFieldRight{right: 50%;} ' +
			'.carouselSideField{font-size: 2em; position:absolute; width:400%; height:450%; top:0em;  -webkit-transform: translateZ(-43em);}  ' +
			'.preloaded{visibility:visible;-webkit-transition:rotate3d(0,0,0,180deg);} ' +
			'.bottomDiv{display:block;} ' +
			'.bottomHidden{display:none;} ' +
			'.cigan{ -webkit-transform:translate3d(0,0,0);} ' +
			'.buttonDiv{ }  ' +
			'.sectionDefault{position:absolute;top:0;left:0;box-sizing:border-box;visibility:visible;vertical-align:top;width:100%;height:100%;width:100%;overflow:hidden;}  ' +
			'.question{ width:100%; height:100%; border-top-left-radius:0.25em; border-top-right-radius:0.25em; overflow:visible; }  ' +
			'.kiva_loading div{position:relative;display:block;margin:auto;font-size:1em;}  ' +
			'.surveyStructure{-user-select: none;-moz-user-select:none;-o-user-select:none;-webkit-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;} ' +
			'.progressCommon{position:relative;height:100%;width:100%;z-index:3;color:white;}  ' +
			'.progressText{line-height:' + ODP.Surveo.params.surveoLayoutParams.progressTextLineHeight + ';font-weight:bold;border-color:transparent;text-shadow:#000 0.05em 0.05em 0.05em;background:transparent;color:white;font-size:1em;height:100%;vertical-align:middle;}  ' +
			'.buttonDivShown{visibility:visible;opacity:1;-webkit-transition: opacity 200ms ease-in-out;}  ' +
			'.startAnimations{-webkit-transform:translate3d(0%,0,1px);-webkit-transition: all 350ms ease-in-out ;-moz-transition: all 350ms ease-in-out  ;-o-transition: all 350ms ease-in-out ;transition: all 350ms ease-in-out ;} ' +
			'.killAnimations{-webkit-transition: none ;-moz-transition: none ;-o-transition: none ;transition: none ; }  ' +
			'.rect img:active{	margin-top:10%;}	 ' +
			'.read{		' + ((!ODP.Surveo.params.isMobileRenderer) ? '-moz-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0' : '0,-100%') + ')' : '') + ';-webkit-transform:translate3d(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0,0' : '0,-100%,0') + ');		visibility:' + (ODP.Surveo.params.isMobileRenderer ? 'hidden' : 'visible') + ';	} ' +
			'.unread{' + ((!ODP.Surveo.params.isMobileRenderer) ? '-moz-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0' : '0,100%') + ')' : '') + ';-webkit-transform:translate3d(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0,0' : '0,100%,0') + ');	visibility:' + (ODP.Surveo.params.isMobileRenderer ? 'hidden' : 'visible') + ';} ' +	
			'.normal{		' + ((!ODP.Surveo.params.isMobileRenderer) ? '-moz-transform:translate(0%,0);' : '') + '-webkit-transform:translate3d(0%,0,0);	visibility:visible;	}  ' +
			'.read2{		' + ((!ODP.Surveo.params.isMobileRenderer) ? 'transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0' : '0,-100%') + ');-moz-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0' : '0,-100%') + ') ; -o-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0' : '0,-100%') + ')' : '') + ';-webkit-transform:translate3d(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '-100%,0,0' : '0,-100%,0') + ');		display:' + (ODP.Surveo.params.isMobileRenderer ? 'none' : 'inline') + ';	}	 ' +
			'.unread2{' + ((!ODP.Surveo.params.isMobileRenderer) ? 'transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0' : '0,100%') + ');-moz-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0' : '0,100%') + '); -o-transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0' : '0,100%') + ')' : '') + ';-webkit-transform:translate3d(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '100%,0,0' : '0,100%,0') + ');	display:' + (ODP.Surveo.params.isMobileRenderer ? 'none' : 'inline') + ';}	 ' +
			'.normal2{		' + ((!ODP.Surveo.params.isMobileRenderer) ? 'transform:translate(' + ((ODP.Surveo.params.surveoAnimation == 'HSlide') ? '0%,0' : '0,0%') + ');-moz-transform:translate(0%,0);-o-transform:translate(0%,0);' : '') + '-webkit-transform:translate3d(0%,0,0);	display:inline;	}  ' +
			'.kickassLoading{display:block;margin:auto;top:40%;height:20%;position:absolute;width:100%;text-align:middle;} ' +
			'.question button{position:relative;word-wrap:break-word;padding:0px;padding-left:3.5em;-webkit-touch-callout:none;border:none;text-align:left;min-height: 3em;height: auto; width:100%;	display: block;font-size:100%; vertical-align:middle;	overflow: hidden;width:100%;left:0;font-weight:bold;} ' +
			'.question button div{ position:absolute;top:0;left:0;background-size:80% 80%;float:left;font-size:100%; border:0px; height: 3em;  font-weight:bold; *margin: 5px 0 5px 0; display: table-cell; vertical-align: middle; text-align:justify;} ' +
			'.qDiv{-webkit-transform: translate3d(0,0,0);display:block;position:absolute;height:100%;width:100%;padding:0;-ms-box-sizing: border-box;box-sizing:border-box; -moz-box-sizing:border-box;-webkit-box-sizing:border-box;}  ' +
			'.resDiv{ display:block; position:absolute; top:25%; float:right; right:20%;}  ' +
			'.resDiv img{float: right;padding:0;text-align:center;color:white;border:none;font-size:1.2em;height:100%;border-radius:0.25em;font-weight:bold;}  ' +
			'.surveoCuraselQuestionLayoutClass {width:100%;height:100%;border:none;position:absolute;margin:0;padding:0;} ' +
			'.surveoCuraselQuestionContentCellClass {position:relative;text-align:center;} ' +
			'.surveoCuraselQuestionContentClass {background-color:#fff;height:100%;width:100%;border-collapse:collapse;position:relative;text-align:center;} ' +
			'.surveoCuraselQuestionBackgroundClass {width:100%;height:100%;left:0;top:0;z-index:0;} ' +
			'.surveoCuraselQuestionCoreClass {left:50%;top:40%;position:absolute;width:2px;height:2px;display:block;} ' +
			'.surveoCuraselSatClass {background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADoCAYAAADlqah4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJGMzE4Q0FFRjI5MDExRTFBMjEzRERCOTM2N0VCMDY0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJGMzE4Q0FGRjI5MDExRTFBMjEzRERCOTM2N0VCMDY0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkYzMThDQUNGMjkwMTFFMUEyMTNEREI5MzY3RUIwNjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkYzMThDQURGMjkwMTFFMUEyMTNEREI5MzY3RUIwNjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4t1xVHAAAJeUlEQVR42uzdT4ibaR0H8DdvMjNdauuWbU8LFqXrQdheBA8u/kGQFQ/rQqWLW3CFKh5ED4Jn8ebJm8iyFv9AD4o9uAepIIKHFRFkbx7colTw1rrabqmZ5H1fnyeZzGSmSSbJJG/eN/l8hmc7nW2m0zf55vf8nvfNk0ZRFAlQTalDAAIKzKF19AvNZvPQb8M4F8bFMM6HsRVGw2Er1cfmuM2fHbZKi31lJ4x7YdwN490wssH/zLJsfECHPBvG57e3t7998eLFndOn39dotprCWb5n57jNvxy2asu6WfHo0XvF3bt327u7uz8IX/rNqPutcXSRaK+CfjCM77300hc+8/EXXti5cuXK+x3Sldma4zYdh60ebt269d8/vvVW+803f/378NvvhvGP4yroB8L4/vXrX/3k5cuXt66+cvXpRkOram2BZXjttS+fe+rUqf9cuHDhszdu/HgnfOk7YfxzUkBfvHbt2idiOL/06qvnWq1W0uhzNAWURTaiYfYaRhFzFvvQmLubN2++GD5/Y1JAX37++VA5r159uhWmu2E0BLR23Fn1CWjvk5i3x48fv5skN18eDuioHvSv77xz59KZM2fSnZ2dNFTQRpqmiYDC4gOa53nS7XaLdrudP3z4MH/uuUt3Qg/6kammQjGUgwEseJozRb5GnmYphn4thn4PLLiKHsmbxQSoEQGFCmuN6V77BbcYGsAS5rjF4bypoFDzClqMGMASCugxOVNBocIEFAQUWFgPqgmFajShYxaJir0/f/ABLCOfxaG8meKCHhQQUFhzo3vQ4skBLKEHPSZnKijUrYI6zwKl1dCJOVNBocIEFAQUWFwPahUXyulAi8Ov2VZBwRQXWN4U12kWKGuSmzjNAutUQdVPqEL9nPQGvhIK5SZ0BFNcqDABBQEF5jFhT6LCnkSw9BZ0cs5UUKhbBXWeBUoroRNzpoJChQko1G2Ka4YLlZjhTriSSESh5IhOG1AlFCpRQvWgUGECCgIKzMMqLlS3BVVBoXYV1LsnQVkldHLOVFCoMAGFuk1xLRJBSTPcxCIRmOICJU1xreJCWXNcq7iwXhXUIhGUVEATi0RQWwIKAgosrAfVhEI1mtCRAc3z3M7yUEo+Dz5i7qaa4hbOe0L5YZ32PGie5I4WlGxU7kYGtNsRUCjbqNyN7EGzLLNIBOU0ofujl7tpAhob1m74wzvyCUvPZ696hryNWowdu7N81u0qoVBSCe3nLZmuB+0lOteHQmn955i8jQ1onhdJ7nQLLF3MWczbKK1JN2y3O8lWa8sMF5Y4w405G2fitbixcc1NdWF51TPkqzti9XaqCjoIabPVciRhGb3nhHAeW0GjzpjVJeDkjsvXsaUxNq+dTuhFt1RRWGg4O92xi0NTV9BoN3wjF9DD4sQ8xVwdJ532m3W6FotgcVPbfKqiN/W8NU5zW800aTQaji6csHrGPE0jneWb7u52HF04oZijaVvGmfYkcl4UTua4855zT3EH/tfeTZ46tW2qC3NMbWN+ZpHO85d0upmjDTOKuZn1bMhcJzfj+ZtmmiZpatdOmHZq2+nMftHP3Alrz9DowqZPbdtzLrCmJ/lLZ51PwyaKOZm3mKUnfWaY9nwObGTf2TnZTPPETWRsfLsuqIcnxFycdEF1IVfAx2sK44JRI3XqBXqzy3y6a21LCehgnr2zs52kzo+y4eIWJu0Frc8s9DzJrpVdNr1yLviS2HTRP5zTL2xyOBf9+E+X9UPaEZCNm9YuoTgtZZuEQZnf2d5OEi0pa186l9feLW0fk14lbbeTra2tJLW6y7pWzr0tgZY1X1zqxbTxh94NP7yXqLGe4cx7j+9lNnOlXO0ezwd1MyFlfcTH8yLOc1YioL1/0AKuqoAqKPPquVL30sz2dmSIW3h6wTd107/2vNwdLtNV/SP1pdSt3+ysYPvZlexGPQhpq9nsX8OrmlLhqjnrPkK1D+hBo50ljcGU12OBqoUz6b81wyqvjFv5+zkMLmpohmoa992FKoirtFm2+kXNyrzhyv4CUqtpystKC8Y8m3utfUD3q+nea0tbIahQatXsVm/f50q+ZVl/xSzvTXvtHEgZj7c4g6vi6zsq+56C8WDFZ7RGI+9V04ZlJBb9GAsf3QpNZ2sV0EM9QZz2hr40VlTtKYt48u+tedTgJZG1eVfeeDDzbjeENO2F1UIS8zzZx8dRVqPrwmv3ttnx4MbF79ibNp2WYYbHTR2vXqvt+9rHgx1HfK2pq5EYWzF7j5P67u7RqvudEA9+nme9gDYFlb1gZnm+FntjtdbpTuldOrjXn8bKauV3g0KZFL0n6/g4WKdN61prd0ft3UGx3Ugb/c207dW7vuKiT9wkOi/W89VRrfW+88KdliX7i0r2Rlqj+zYvNuIli63NuUPzXlXtT4GT/akw9ZoZxdnrJu273NrMO7rftQxCOggs1byv1q2vFNAZn5UHestK6V5o5aP8+2Nwn8TFnsTG5xsf0CcfIP0Hx35YY0r3wqrCLukJsv9Jv1IKpYDOFNb+U/pBhd2fEgvryXtJYRTQpU+J+xU2GaqwsnvwnFYcfKI2CuhqeqbBo/FoRdjvYw8FtrEWAR4ssg0fiCJJVEUBrWN/9USknzA8ZR4OcJlT6eFwDedM6ARUmMeEIzEx3HherwUCCggoCCggoICAgoACAgoCCggoIKAgoICAgoACAgoIKAgoIKAgoICAAgIKAgoIKAgoIKCAgIKAAgIKAgoIKCCgIKCAgIKAAgIKCCgIKCCgIKCAgAICCgIKCCgIKCCggICCgAICCgIKCCggoCCggICCgAICCggoCCggoCCggIACAgoCCggoCCggoICAgoACAgoCCggoIKAgoICAgoACAgoIKAgoIKAgoICAAgIKAgoIKAgoIKCAgIKAAgIKAgoIKCCgIKCAgIKAAgIKTBnQt3/+s5/cj58URbE/gMU6mq+93L09/GdaI273u3/fv//pPM/jDcMtiyR83ggcUVhwQHv/DWLeQu7ymL/jAvqn396+/d4zz5xvfuOb37oQv0MMp4CuzDwH3pSnPhW0yLJu8vqPfngv5i7m79Cdf3T62mw2t8MvHz19+vRPv3j1lbNnz5xtXP/a1887nCvTnOM2mcNWDzfeeP3eg4cPil/98hcPHj169JXwpb9kWbY7KaDxl60wPhzGp8L4XBiXHMqV+dAct/m7w1Ybd8K4HcYfwvhbGJ0Q0PEVFKgOp1lAQIF5/F+AAQBOPeoOP7OpcAAAAABJRU5ErkJggg==");background-size:100% 100%;-moz-background-size:100% 100%;-o-background-size:100% 100%;color:#333;text-decoration:none;display:block;position:absolute;outline: none;} ' +
			'.surveoCuraselSatClass img {border:none;} ' +
			'.surveoCuraselShadowClass {position:absolute;bottom:-10px;left:0;width:100%;} ' +
			'.surveoCuraselQuestionIconClass {width:100%;height:100%;display:block;}  ' +
			'.cw img {transform:skew(0,-10deg);transition:all .1s;-moz-transform:skew(0,-10deg);-moz-transition:all .1s;-webkit-transform:skew(0,-10deg);-webkit-transition:all .1s;} ' +
			'.ccw img {transform:skew(0,10deg);transition:all .1s;-moz-transform:skew(0,10deg);-moz-transition:all .1s;-webkit-transform:skew(0,10deg);-webkit-transition:all .1s;} ' +
			'.surveoCuraselSatClass .surveoCuraselShadowClass {position:absolute;bottom:-30px;left:0;margin:0;padding:0;} ' +
			'.surveoCuraselCheckmarkClass, img.surveoCuraselCheckmarkClass {position:absolute;right:0;bottom:10px;z-index:9999;display:none;padding:0;}  ' +
			'#bootStrap_mask{font-size:' + fontSizePx + 'px;top:0;left:0;width:100%;height:100%;position:absolute;display:table;z-index:100;background:rgba(0,0,0,0.2);} ' +
			'#bootStrap_bCont{width:100%;height:100%;display:table-cell;vertical-align:middle;background:rgba(0,0,0,0.2);border:1px solid black;font-weight:bold;} ' +
			'#bootStrap_sCont{-moz-box-sizing:border-box;background:none repeat scroll 0 0 #111111;border-radius:0.6em 0.6em 0.6em 0.6em;box-shadow:0.05em 0.05em 0.07em #333333;height:' + y + 'px;margin: 0 auto;width:' + x + 'px;z-index:101;font-weight:bold;#position:absolute;#left:50%;#top:50%;#margin-left:-200px;#margin-top:-4em;} ' +
			'#bootStrap_text{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:-moz-linear-gradient(center top,#333333 0%,#111111 100%)repeat scroll 0 0 transparent;border-bottom:1px solid black;border-radius:0.6em 0.6em 0 0;box-shadow:0 0 1px #232323;-webkit-box-shadow: 0 1px 1px #232323;-moz-box-shadow:0 1px 1px #232323;color: white;font-family: tahoma,helvetica;   height: 30%;    margin: auto;    padding: 1em;    position: relative;    text-align: center;    text-shadow: 0.05em 0.05em 0.1em black;    width: 100%;} ' +
			'#status {    color: #CECECE;    font-size: 1.5em;    font-style: italic; bottom: 0.1em;   margin: auto;position:relative;float:left;} ' +
			'#perc{color:#CECECE;font-size:1.5em;font-style:italic;float:right;bottom: 0.1em;} ' +
			'#bootStrap_pBar{background-size:100% 100%;#background-size:130% 110%;#background-repeat:no-repeat;border:1px solid #232323;border-radius:0.6em 0.6em 0.6em 0.6em;box-shadow:0 0 0.4em black inset;height:39.58333%;left:0;margin:2% auto 0;overflow:hidden;padding-left:0.3em;padding-right:0.3em;position:relative;right:0;width:93%;#left:50%;#margin-left:-186;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMlIiBzdG9wLWNvbG9yPSIjNjQ2NDY0IiBzdG9wLW9wYWNpdHk9IjAuNjIiLz4KICAgIDxzdG9wIG9mZnNldD0iNyUiIHN0b3AtY29sb3I9IiM0ODQ4NDgiIHN0b3Atb3BhY2l0eT0iMC45MiIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMCUiIHN0b3AtY29sb3I9IiM0MzQzNDMiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxNCUiIHN0b3AtY29sb3I9IiM0MTQxNDEiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSIzMSUiIHN0b3AtY29sb3I9IiMzODM4MzgiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSI0OCUiIHN0b3AtY29sb3I9IiMzMjMyMzIiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI1MiUiIHN0b3AtY29sb3I9IiMyODI4MjgiIHN0b3Atb3BhY2l0eT0iMC45NiIvPgogICAgPHN0b3Agb2Zmc2V0PSI1OSUiIHN0b3AtY29sb3I9IiMyYzJjMmMiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI2MiUiIHN0b3AtY29sb3I9IiMyZTJlMmUiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiMyYTJhMmEiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI5MyUiIHN0b3AtY29sb3I9IiMyYjJiMmIiIHN0b3Atb3BhY2l0eT0iMC44NyIvPgogICAgPHN0b3Agb2Zmc2V0PSI5NyUiIHN0b3AtY29sb3I9IiMyZDJkMmQiIHN0b3Atb3BhY2l0eT0iMC4zNyIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);	background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(100,100,100,0.62) 3%, rgba(72,72,72,0.92) 7%, rgba(67,67,67,0.95) 10%, rgba(65,65,65,0.95) 14%, rgba(56,56,56,0.95) 31%, rgba(50,50,50,0.94) 48%, rgba(40,40,40,0.96) 52%, rgba(44,44,44,0.94) 59%, rgba(46,46,46,0.94) 62%, rgba(42,42,42,0.94) 90%, rgba(43,43,43,0.87) 93%, rgba(45,45,45,0.37) 97%, rgba(255,255,255,0) 100%); /* FF3.6+ */	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(3%,rgba(100,100,100,0.62)), color-stop(7%,rgba(72,72,72,0.92)), color-stop(10%,rgba(67,67,67,0.95)), color-stop(14%,rgba(65,65,65,0.95)), color-stop(31%,rgba(56,56,56,0.95)), color-stop(48%,rgba(50,50,50,0.94)), color-stop(52%,rgba(40,40,40,0.96)), color-stop(59%,rgba(44,44,44,0.94)), color-stop(62%,rgba(46,46,46,0.94)), color-stop(90%,rgba(42,42,42,0.94)), color-stop(93%,rgba(43,43,43,0.87)), color-stop(97%,rgba(45,45,45,0.37)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */	background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */	background: -o-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* Opera 11.10+ */	background: -ms-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* IE10+ */	background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); 	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00ffffff\', endColorstr=\'#00ffffff\',GradientType=0 ); /* IE6-8 */}  ' +
			'#bootStrap_mask{font-size:' + fontSizePx + 'px;top:0;left:0;width:100%;height:100%;position:absolute;display:table;z-index:100;background:rgba(0,0,0,0.2);} ' +
			'#bootStrap_bCont{width:100%;height:100%;display:table-cell;vertical-align:middle;background:rgba(0,0,0,0.2);border:1px solid black;font-weight:bold;} ' +
			'#bootStrap_sCont{-moz-box-sizing:border-box;background:none repeat scroll 0 0 #111111;border-radius:0.6em 0.6em 0.6em 0.6em;box-shadow:0.05em 0.05em 0.07em #333333;height:' + y + 'px;margin: 0 auto;width:' + x + 'px;z-index:101;font-weight:bold;#position:absolute;#left:50%;#top:50%;#margin-left:-200px;#margin-top:-4em;} ' +
			'#bootStrap_text{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:-moz-linear-gradient(center top,#333333 0%,#111111 100%)repeat scroll 0 0 transparent;border-bottom:1px solid black;border-radius:0.6em 0.6em 0 0;box-shadow:0 0 1px #232323;-webkit-box-shadow: 0 1px 1px #232323;-moz-box-shadow:0 1px 1px #232323;color: white;font-family: tahoma,helvetica;   height: 30%;    margin: auto;    padding: 1em;    position: relative;    text-align: center;    text-shadow: 0.05em 0.05em 0.1em black;    width: 100%;} ' +
			'#status {    color: #CECECE;    font-size: 1.5em;    font-style: italic; bottom: 0.1em;   margin: auto;position:relative;float:left;} ' +
			'#perc{color:#CECECE;font-size:1.5em;font-style:italic;float:right;bottom: 0.1em;} ' +
			'#bootStrap_pBar{background-size:100% 100%;#background-size:130% 110%;#background-repeat:no-repeat;border:1px solid #232323;border-radius:0.6em 0.6em 0.6em 0.6em;box-shadow:0 0 0.4em black inset;height:39.58333%;left:0;margin:2% auto 0;overflow:hidden;padding-left:0.3em;padding-right:0.3em;position:relative;right:0;width:93%;#left:50%;#margin-left:-186;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMlIiBzdG9wLWNvbG9yPSIjNjQ2NDY0IiBzdG9wLW9wYWNpdHk9IjAuNjIiLz4KICAgIDxzdG9wIG9mZnNldD0iNyUiIHN0b3AtY29sb3I9IiM0ODQ4NDgiIHN0b3Atb3BhY2l0eT0iMC45MiIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMCUiIHN0b3AtY29sb3I9IiM0MzQzNDMiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxNCUiIHN0b3AtY29sb3I9IiM0MTQxNDEiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSIzMSUiIHN0b3AtY29sb3I9IiMzODM4MzgiIHN0b3Atb3BhY2l0eT0iMC45NSIvPgogICAgPHN0b3Agb2Zmc2V0PSI0OCUiIHN0b3AtY29sb3I9IiMzMjMyMzIiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI1MiUiIHN0b3AtY29sb3I9IiMyODI4MjgiIHN0b3Atb3BhY2l0eT0iMC45NiIvPgogICAgPHN0b3Agb2Zmc2V0PSI1OSUiIHN0b3AtY29sb3I9IiMyYzJjMmMiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI2MiUiIHN0b3AtY29sb3I9IiMyZTJlMmUiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiMyYTJhMmEiIHN0b3Atb3BhY2l0eT0iMC45NCIvPgogICAgPHN0b3Agb2Zmc2V0PSI5MyUiIHN0b3AtY29sb3I9IiMyYjJiMmIiIHN0b3Atb3BhY2l0eT0iMC44NyIvPgogICAgPHN0b3Agb2Zmc2V0PSI5NyUiIHN0b3AtY29sb3I9IiMyZDJkMmQiIHN0b3Atb3BhY2l0eT0iMC4zNyIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);	background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(100,100,100,0.62) 3%, rgba(72,72,72,0.92) 7%, rgba(67,67,67,0.95) 10%, rgba(65,65,65,0.95) 14%, rgba(56,56,56,0.95) 31%, rgba(50,50,50,0.94) 48%, rgba(40,40,40,0.96) 52%, rgba(44,44,44,0.94) 59%, rgba(46,46,46,0.94) 62%, rgba(42,42,42,0.94) 90%, rgba(43,43,43,0.87) 93%, rgba(45,45,45,0.37) 97%, rgba(255,255,255,0) 100%); /* FF3.6+ */	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(3%,rgba(100,100,100,0.62)), color-stop(7%,rgba(72,72,72,0.92)), color-stop(10%,rgba(67,67,67,0.95)), color-stop(14%,rgba(65,65,65,0.95)), color-stop(31%,rgba(56,56,56,0.95)), color-stop(48%,rgba(50,50,50,0.94)), color-stop(52%,rgba(40,40,40,0.96)), color-stop(59%,rgba(44,44,44,0.94)), color-stop(62%,rgba(46,46,46,0.94)), color-stop(90%,rgba(42,42,42,0.94)), color-stop(93%,rgba(43,43,43,0.87)), color-stop(97%,rgba(45,45,45,0.37)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */	background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */	background: -o-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* Opera 11.10+ */	background: -ms-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); /* IE10+ */	background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(100,100,100,0.62) 3%,rgba(72,72,72,0.92) 7%,rgba(67,67,67,0.95) 10%,rgba(65,65,65,0.95) 14%,rgba(56,56,56,0.95) 31%,rgba(50,50,50,0.94) 48%,rgba(40,40,40,0.96) 52%,rgba(44,44,44,0.94) 59%,rgba(46,46,46,0.94) 62%,rgba(42,42,42,0.94) 90%,rgba(43,43,43,0.87) 93%,rgba(45,45,45,0.37) 97%,rgba(255,255,255,0) 100%); 	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00ffffff\', endColorstr=\'#00ffffff\',GradientType=0 ); } ' +
			'#bootStrap_bar {	background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg0RDNDMEVDQTkyMTFFMTgyNzVENDg3Q0UwNjY3MEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg0RDNDMEZDQTkyMTFFMTgyNzVENDg3Q0UwNjY3MEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODREM0MwQ0NBOTIxMUUxODI3NUQ0ODdDRTA2NjcwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODREM0MwRENBOTIxMUUxODI3NUQ0ODdDRTA2NjcwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkSO7LsAAAHvSURBVHjapJfbdtsgEEUlNOiCcJyv6nf3V/LQh+ahVW0hzEVSyL2OmREiLGwvCW2fA8wwdvnj568CacrMBdn6pspm4ffDuZWADV9GT8BjUWSzYAdth6KWNfaEHS3BZ7PgtQsf4b1B+KoqDamdx8Ki3hZEK8/vEZ4zN1DaGSws1n1cmEfH79o431budCG097Kw+qvws39UfYjzvOP2TGnvYqGYl5t4mQDhQdSe1k5mYb0RDs0NE5ddnO8aN2pCO5GNCz97/6eytVNYKJYF9X5S0AuEb72aqHlvsbDMC+X9NHKEr9rWkdo0C9B1G97PhPdvsCGqoW39RO2ZD7xA9iyXhfVlj6u2oXk3otp5LNi/p4+LWSsyT4aq67HRvSyU9Wddg/roJ2rPZm9BIHu2kwXGrop5LQ9eU/xiDHRx7V0sK8rySwfRl7d3/+uz1thgOhsOkDUWLx3t3SuFzTuRhWJdkTzZ4idUO4Vl4bUiLXh/toX377Ahj9eXucfzpGqEJ/Mkm2Xv3kfcu9iadw4LZYix11i/TNj5AELS50MGCytjn+tmNMf4/uDoNd/JAquufpHP1mDeuTzS897FQjjrvvLOcaQeMH50ZD1IZ4H3Mr4+sonfPwg/mo3/RQks1Az5lslwyaMjzV2odI5STmCfBBgAXA4eT484wPQAAAAASUVORK5CYII=\'); background-size: auto 100%; position:absolute;width:0%;height:78.94736842105263%;top:11%;left:0;-webkit-border-radius:0.6em 0.6em;border-radius:0.6em 0.6em;#position:relative;} ' +
			'</style>') + tmpChildren.join(''));

		}}},{"com.opendataplatform.document.id":"{B746BD11-50AB-40FE-B7E9-78055CEA1B18}","manifest":{"name":"Surveo Survey Structure","description":"","image":"","icon_xp16":""},"parameters":[{"name":"Width","datatype":"nvarchar","defaultvalue":""},{"name":"Height","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			ODP.Surveo.snippets.structure = {
				"calculateFontSizes" : function () {
					var limitingDimension = ODP.Surveo.params.deploymentTarget.fullBodyHeight;
					if (ODP.Surveo.params.deploymentTarget.fullBodyHeight > ODP.Surveo.params.deploymentTarget.fullBodyWidth) {
						limitingDimension = ODP.Surveo.params.deploymentTarget.fullBodyWidth;
						/*use the smaller dimension to make size calculations*/
					}
					var scalingFactor = (limitingDimension / 120) >> 0; //bytewise operations rock!!! This makes the result an integer
					limitingDimension = undefined; //deallocate memory

					switch (scalingFactor) {
					case 0:
					case 1:
						return 10;
					case 2:
					case 3:
						return 12;
					case 4:
					case 5:
						return 16;
					case 6:
					case 7:
					case 8:
					case 9:
						return 24;
					default:
						return 32;
					}

					return 16;
				}
			};
			majorBufferArray = [];

			assignAllEventsSwitch = 0;
			buttonsLock = 0; //global locking variable
			currentChildNode = 0; //global progress variable
			globalRestart = 0; //global survey restart marker
			nonQuestionSnippets = 0; //number of welcome /finish /special slides
			var snippet = ODP.document.getSnippet(instanceID);
			var allChildren = ODP.document.checkChildren(instanceID);
			ODP.Surveo.params.slideCount = 0;
			ODP.Surveo.params.loaderProgress = 0;

			ODP.Surveo.methods.performanceHack = function (factor) { //hide all of the survey's visuals, so processing goes smoother]
				if (ODP.Surveo.params.blockRotationHandling == true) {
					return;
				}

				factor = factor || 1; //adjust timeout when heavy operations follow; multiply by factor
				ODP.Surveo.params.blockRotationHandling = true;
				var getStructure = ODP.window.document.querySelectorAll(".surveyStructure")[0];

				// var getContainer = (ODP.document.renderTarget === "SurveoDesignerSlidePreview")?ODP.window.document.getElementById(ODP.document.renderTarget):ODP.window.document.body; //in the body we set loading animation as background
				if (typeof getStructure === 'undefined') {
					return;
				}
				getStructure.setStyle("display", "none"); //speed up rendering by hiding structure DOM

				ODP.Surveo.params.loadingBox.init(undefined, false);
				//TODO: add a resource for the loading image (in the New Surveo... project!
				setTimeout(function () {
					getStructure.setStyle('display', '');
					ODP.Surveo.params.loadingBox.destroy();
					setTimeout(function () { //because one does not simply predict when sh*t happens
						/*return here when messing with unlockControls*/
						ODP.Surveo.methods.unlockControls(); //unlock buttons when caught in between transition; display:none breaks transition events!!!
						ODP.Surveo.methods.unlockControls(); //workaround - to be revised (single call wont show both buttons)
					}, 25); //timeout is time for transition + 25 ms -> maximum time for a browser to register an event / transition
					ODP.Surveo.params.blockRotationHandling = false;
				}, (1300 * factor)); //adjust timeout if not enough / too much. Maybe number of slides makes difference?
			};
			ODP.Surveo.methods.hideAddressBar = function () {

				if (!window.location.hash) {

					if (document.height < window.outerHeight) {

						document.body.setStyle('height', (window.outerHeight + 50) + 'px');
					}

					setTimeout(function () {
						window.scrollTo(0, 1);
					}, 50);
				}

			};
			ODP.Surveo.methods.correctPos = function (argum) { //find a way to call in the beginning! /*sslavchev EDDITED : SETTLED*/
				/** TODO : replace querySelector with getElementsByClassName **/
				// try{
				var paddingToApply = "";
				var paddingRestart = "";
				var statusLengthToApply = "";
				var progressTextLineH = "";
				var orientObj;
				var defaultReverseConditionMet = false;
				if ((typeof argum === "undefined") || argum === null) {
					/**empty arguments list -> create arguments object**/
					argum = {};
				}
				if (typeof argum.orientation === "undefined") {
					/**if not set as argument, find by measuring dimensions**/
					argum.orientation = ((ODP.Surveo.params.deploymentTarget.fullBodyHeight > ODP.Surveo.params.deploymentTarget.fullBodyWidth) ? 90 : 0);
				}
				if (typeof argum.turnAutoOff === "undefined") {
					/**declare if auto-applying arguments is applicable**/
					argum.turnAutoOff = ODP.Surveo.params.deploymentTarget.hasPhoneGap
				}
				if (typeof argum.sender === "undefined") {
					argum.sender = {
						event : "none" /*shows that function is called explicitly, not by an event; */
					}
				}
				// var detectChrome = (ODP.Surveo.params.deploymentTarget.fullPlatformName.search("chrome") > -1);
				var detectChrome = false;
				if (typeof argum.reverse === "undefined") {
					switch (argum.sender.event) {
					case "resize":
					case "orientationchange":
					case "orientationChanged":
						defaultReverseConditionMet = ((ODP.Surveo.params.deploymentTarget.isMobile && !detectChrome) || ODP.document.renderTarget === "SurveoDesignerSlidePreview") && !(ODP.Surveo.params.deploymentTarget.fullPlatformName.search("silk/2") > -1);
						break;
					default:
						defaultReverseConditionMet = ((ODP.Surveo.params.deploymentTarget.isMobile && !detectChrome) || ODP.document.renderTarget === "SurveoDesignerSlidePreview") && (!ODP.Surveo.params.deploymentTarget.hasPhoneGap && !(ODP.Surveo.params.deploymentTarget.fullPlatformName.search("silk/2") > -1));
						// defaultReverseConditionMet = false;
						break;
					}
					argum.reverse = defaultReverseConditionMet;
				}
				defaultReverseConditionMet = undefined;

				var explicitReverse = argum.reverse;
				if (ODP.Surveo.params.isMobileRenderer) {
					if (ODP.Surveo.params.deploymentTarget.hasPhoneGap) {
						var ODPWindow = ODP.window;
						var bodyWidth = ODPWindow.document.body.scrollWidth || ODPWindow.document.body.offsetWidth;
						var bodyHeight = ODPWindow.document.body.scrollHeight || ODPWindow.document.body.offsetHeight;
						if(argum && argum.target) {
							var target = argum.target;
							if(target && target.innerHeight && target.innerWidth) {
								bodyWidth = target.innerWidth;
								bodyHeight = target.innerHeight;
								argum.orientation = ((bodyHeight > bodyWidth) ? 0 : 90);
							}
						}
					
						orientObj = argum.orientation;
					} else {
						// orientObj = window.orientation;
						if (typeof window.orientation !== "undefined") {
							orientObj = window.orientation;
						} else {
							orientObj = argum.orientation;
						}
					}
				} else {
					orientObj = argum.orientation;
				}
				var fontsize = ODP.Surveo.snippets.structure.calculateFontSizes() + "px";
				// alert("Font sizes @: "+ fontsize);
				var getStructure = ODP.window.document.querySelectorAll(".surveyStructure")[0];
				getStructure.setStyle("fontSize", fontsize);
				try {
					orientObj = Math.abs(orientObj / 90);
					// alert("switching : "+orientObj);
				} catch (e) {
					alert(e + " @orientation")
				}

				orientObj = orientObj.toString();
				if (explicitReverse) {
					// alert("ich ben reversed!");
					/**Apply pressure to reverse mobile device OR SURVEO DESIGNER parameters**/
					switch (orientObj) {
					case "2":
					case "0":
						orientObj = "1";
						break;
					default:
						orientObj = "0";
						break;
					}
				}
				switch (orientObj) {
				case "2":
				case "0":
					// alert("180/0");
					paddingToApply = (ODP.Surveo.params.contentPadding === "No") ? "0" : "2%";
					statusLengthToApply = "91%";
					paddingRestart = "0";
					progressTextLineH = "150%";
					break;
				case "1":
					// alert("90/-90");
					paddingToApply = (ODP.Surveo.params.contentPadding === "No") ? "0" : "4%";
					statusLengthToApply = "82%";
					paddingRestart = "2%";
					progressTextLineH = "200%";
					break;
				}
				statusLengthToApply = (ODP.Surveo.params.contentPadding === "No") ? "100%" : statusLengthToApply;

				var getAllSlides = ODP.Surveo.params.slideArray;
				if (typeof getAllSlides == 'undefined') {
					return;

				}

				for (var i = 0, len = getAllSlides.length; i < len; i++) {
					// try{
					/** makeup and dressup - fix the slides' dimensions **/
					var buts = getAllSlides[i].querySelectorAll("button .navigationButtons");
					if (buts) {

						var blen = buts.length;
						if (buts[blen - 2]) {
							buts[blen - 2].setStyle("left", paddingToApply);
						}
						if (buts[blen - 1]) {
							buts[blen - 1].setStyle("right", paddingToApply);
						}
						delete buts;
						/** cleanup. Repeat down the road **/
					}

					var stat = getAllSlides[i].querySelectorAll(".rect");
					if (stat) {

						if (stat[0]) {
							stat[0].setStyle("left", paddingToApply);
							stat[0].setStyle("width", statusLengthToApply);
						}
						if (stat[1]) {
							stat[1].setStyle("right", paddingRestart);
						}
						stat = undefined;
					}
					var progressTexts = getAllSlides[i].querySelectorAll(".progressText");
					var plength = progressTexts.length;
					for (var x = 0; x < plength; x++) {
						progressTexts[x].setStyle('lineHeight', progressTextLineH);
					}
					progressTexts = undefined;
					var qstns = getAllSlides[i].querySelectorAll(".qDiv")[0];
					if (typeof qstns != 'undefined') {
						var qm = qstns.childNodes;
						for (var x = 0, qlen = qm.length; x < qlen; x++) {
							qm[x].setStyle("padding", paddingToApply);
						}
						// getAllSlides = undefined;
						qstns = undefined;
					}
					
					
					// }catch(e){alert(e+" @stat")}
				}

				var cacheQuestionDataForOrientationHandling = ODP.Surveo.params.questionData;
				var upCountForDelays = 400;
				var curChildqID;
				//first call current slide orientation then the restart
				for (var curQ in cacheQuestionDataForOrientationHandling) {
					if (currentChildNode === cacheQuestionDataForOrientationHandling[curQ].getParentSlideIndex() && typeof cacheQuestionDataForOrientationHandling[curQ].orientationHandler === 'function') {
						setTimeout(cacheQuestionDataForOrientationHandling[curQ].orientationHandler, 0);
						curChildqID = curQ;
						break;
					}
				}
				
				for (var com in cacheQuestionDataForOrientationHandling) {
					if (typeof cacheQuestionDataForOrientationHandling[com].orientationHandler === 'function') {
						/**Invoke handlers of separate snippets**/
						if(com === curChildqID) {
							continue;
						}
						upCountForDelays += 400;
						setTimeout(cacheQuestionDataForOrientationHandling[com].orientationHandler, upCountForDelays);
					}
				}
				// }catch(e){alert("@correctPos (Stucture Error) :"+e)}
			}
			if (ODP.document.currentRenderer == "server") {
				return;
			}

			if (ODP.Surveo.params.deploymentTarget.hasPhoneGap) {
				ODP.Surveo.methods.addEvent(window, "orientationChanged", function (arg) { //add orientation handling
					ODP.Surveo.methods.performanceHack(); //stability is **fyeah**
					arg.sender = {
						event : "orientationChanged"
					};
					setTimeout(function() {
						ODP.Surveo.methods.correctPos(arg);
					},1000);
				});
				if (ODP.Surveo.params.deploymentTarget.fullPlatformName.search("android") > -1) {
					ODP.Surveo.methods.addEvent(window, "orientationchange", function (arg) { //add orientation handling
						ODP.Surveo.methods.performanceHack();
						arg.sender = {
							event : "orientationchange"
						};
						setTimeout(function() {
							ODP.Surveo.methods.correctPos(arg);
						},1000); //stability is **fyeah**


					});
				}
			} else {
				if (!ODP.Surveo.params.deploymentTarget.isMobile || ODP.Surveo.params.deploymentTarget.isSilkBrowser || ODP.Surveo.params.deploymentTarget.isWPhone) {
					ODP.Surveo.methods.addEvent(window, "resize", function () { //add orientation handling
						if (ODP.document.currentRenderer == "server") {
							return;
						}
						if (ODP.Surveo.params.blockRotationHandling) {
							return;
						}
						var arg = {};
						arg.sender = {
							event : "resize"
						};
						if (ODP.Surveo.params.deploymentTarget.fullBodyHeight > ODP.Surveo.params.deploymentTarget.fullBodyWidth) {
							arg.orientation = (ODP.document.renderTarget === "SurveoDesignerSlidePreview") ? '0' : '90';
							/**fixing Surveo Designer Issues**/
						} else {
							arg.orientation = (ODP.document.renderTarget === "SurveoDesignerSlidePreview") ? '90' : '0';
						}
						// if (ODP.Surveo.params.deploymentTarget.cacheOrientationForRegularBrowsers != arg.orientation) {
						ODP.Surveo.methods.performanceHack();
						ODP.Surveo.methods.correctPos(arg);
						ODP.Surveo.params.deploymentTarget.cacheOrientationForRegularBrowsers = arg.orientation;
						// }

					});
				} else {
					ODP.Surveo.methods.addEvent(window, "orientationchange", function (arg) { //add orientation handling
						ODP.Surveo.methods.performanceHack();
						arg.sender = {
							event : "orientationchange"
						};
						ODP.Surveo.methods.correctPos(arg); //stability is **fyeah**


					});
				}

			}

			if (ODP.Surveo.params.swipeNavigationEnabled) {
				ODP.Surveo.methods.addEvent(document.body, "touchstart", ODP.Surveo.debug.swipeStart);
				ODP.Surveo.methods.addEvent(document.body, "touchmove", ODP.Surveo.debug.swipeEnd);
			}
			if (ODP.Surveo.params.keyboardNavigationEnabled) {
				ODP.Surveo.debug.keyboardPressEvents.init();
			}
			var parent = ODP.document.getSnippet(snippet["com.opendataplatform.document.parentid"]);
			var dateObj = new Date();
			var d = dateObj.getHours();
			var x = dateObj.getMinutes();
			ODP.Surveo.params.surveyTimeIn = d + ':' + x;
			ODP.Surveo.params.surveyResults = {};
			fontColor = parent["Font Color"];
			buttonsLock = 0;
			var isTablet = (ODP.Surveo.params.surveoLayout == "Tablet (768x1024)");
			try {
				var fontsize = ODP.Surveo.snippets.structure.calculateFontSizes() + "px"; //mui importante ; nicht Schiessen
			} catch (e) {
				alert(e + " @setting the fontsize");
				var fontsize = "16px";
			}
			if (renderer != "design") {
				snippet["Height"] = "100%";
				snippet["Width"] = "100%";
			} else {
				if (ODP.Surveo.params.surveoOrientation == "Portrait") {
					snippet["Height"] = (isTablet ? "1024px" : "480px");
					snippet["Width"] = (isTablet ? "768px" : "320px");
				} else {
					snippet["Height"] = (isTablet ? "768px" : "320px");
					snippet["Width"] = (isTablet ? "1024px" : "480px");
				}
			}
			var containerDiv = '<div align="center" class="surveyStructure" id=' + instanceID + ' style="font-size:' + fontsize + '; ' + ((renderer == 'preview' || renderer == '') ? "overflow: hidden;" : "") + 'position: absolute; width:' + snippet["Width"] + '; height:' + snippet["Height"] + ';"></div>';
			var datasetLoader = ODP.Surveo.params.surveoDatasetLoaderID;
			setTimeout(function () {
				ODP.Surveo.params.loadingBox.init(undefined, true); //stability is **fyeah**
			}, 0);

			//ODP.document.queue.add(function() {
			Open.addListener(datasetLoader, function (datasetname) {
				var objJSON = Open.getDataSet(datasetname);
				if (typeof objJSON === 'undefined') {
					alert("Error when getting data from dataset : " + datasetname);
					return;
				}
				
				var questionPosQuestionID = [];
				var formPosition = 1;
				for (var x = 0, len = objJSON.data[0].length; x < len; x++) {
					if (objJSON.data[0][x].ObjType == 'Q') {
						questionPosQuestionID.push(objJSON.data[0][x].ObjID);
						ODP.Surveo.params.questionOrder.push({
							"qID" : objJSON.data[0][x].ObjID,
							"qPos" : formPosition++
						});
					}
				}
				if (typeof objJSON.data[1][0] != "undefined") {
					ODP.Surveo.params.surveoSkipPatterns = objJSON.data[1][0].SkipPatterns;
				}
				if (ODP.Surveo.params.surveoSkipPatterns != null) {
					try {
						ODP.Surveo.methods.wrapStandardSkipFunctions();
						
						ODP.Surveo.methods.parseSkipsDefinitions(ODP.Surveo.params.surveoSkipPatterns);
						sm_skipsInit();
					} catch (e) {
						console.log(e + " @parsingSkipDefinitions");
					}
				} else {
					ODP.Surveo.params.skipsEnabled = false;
				}
				if (ODP.document.checkChildren(instanceID).length == 0) {
					/**Do a batch-add of slides.**/
					if (renderer === "design") {
						var start0 = (ODP.document.getNewSnippet('{AD6ED740-BEC6-42D9-9F21-1BFF42AC67C5}'));
						start0.instance[ODP.document.findIndexByName(start0.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
						start0.instance[ODP.document.findIndexByName(start0.instance, 'Navigator')].value = 'Start';
						ODP.document.updateJSON(start0);
						ODP.designer.addSnippetToDocumentTree(start0, false);

						var startuDesign0 = (ODP.document.getNewSnippet('{1F3DE661-85F9-4C0D-825D-3DB5FD545A63}'));
						startuDesign0.instance[ODP.document.findIndexByName(startuDesign0.instance, 'com.opendataplatform.document.parentid')].value = start0.instance[ODP.document.findIndexByName(start0.instance, 'com.opendataplatform.document.id')].value;
						ODP.document.updateJSON(startuDesign0);
						ODP.designer.addSnippetToDocumentTree(startuDesign0, false);
					}

					var iterations = Math.floor(questionPosQuestionID.length / 2);
					var remainderOfLength = questionPosQuestionID.length % 2;
					var start = 0;
					function addSlide(fromwhere, howmuch) {
						var len1 = (fromwhere + howmuch);
						for (var v = fromwhere; v < len1; v++) {
							var slide0 = (ODP.document.getNewSnippet('{AD6ED740-BEC6-42D9-9F21-1BFF42AC67C5}'));
							slide0.instance[ODP.document.findIndexByName(slide0.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
							ODP.document.updateJSON(slide0);
							ODP.designer.addSnippetToDocumentTree(slide0, false);
							var newQuestion = (ODP.document.getNewSnippet('{7FEEAE18-F602-4D14-875C-BD7872302789}'));
							newQuestion.instance[ODP.document.findIndexByName(newQuestion.instance, 'com.opendataplatform.document.parentid')].value = slide0.instance[ODP.document.findIndexByName(slide0.instance, 'com.opendataplatform.document.id')].value;
							newQuestion.instance[ODP.document.findIndexByName(newQuestion.instance, 'Question ID')].value = questionPosQuestionID[v];
							for (var c = 0, len3 = objJSON.data[3].length; c < len3; c++) {
								if (objJSON.data[3][c]['ObjID'] == questionPosQuestionID[v]) {
									newQuestion.instance[ODP.document.findIndexByName(newQuestion.instance, 'Title')].value = objJSON.data[3][c]['Text'];
									newQuestion.instance[ODP.document.findIndexByName(newQuestion.instance, 'Is required')].value = (objJSON.data[3][c]['IsAnswerRequired'] == 1) ? "Yes" : "No";
									var tempProtoQID = objJSON.data[3][c]['ProtoAnswerID'];
									for (var q = 0, len2 = objJSON.data[5].length; q < len2; q++) {
										if (objJSON.data[5][q]['ProtoAnswerID'] == tempProtoQID) {
											if (objJSON.data[5][q]['IsMultipleSel'] == 1) {
												newQuestion.instance[ODP.document.findIndexByName(newQuestion.instance, 'Is multiple choice')].value = 'Yes';
											} else {}
											break;
										}
									}
									break;
								}

							}
							ODP.document.updateJSON(newQuestion);
							ODP.designer.addSnippetToDocumentTree(newQuestion, false);
						}
						start += howmuch; //very important -  set the progress for the next batch of slides
						/*check progress, put creation in motion, while giving the UI time to breathe*/
						if (renderer == 'design') { // go async
							setTimeout(function () {
								if ((iterations--) > 0) {
									addSlide(start, 2);
								} else {
									if (remainderOfLength > 0) {
										addSlide(start, remainderOfLength);
										remainderOfLength = 0;
									} else {
										setTimeout(function () {
											addEndSlides();
											setTimeout(function () {
												if (ODP.document.queue.active == false) {
													ODP.document.queue.run();
												}
											}, 0);
										}, 0);
									}
								}
							}, 500);
							/*or less?*/
						} else {}

					}
					function addEndSlides() {
						var thankyou0 = (ODP.document.getNewSnippet('{AD6ED740-BEC6-42D9-9F21-1BFF42AC67C5}'));
						thankyou0.instance[ODP.document.findIndexByName(thankyou0.instance, 'com.opendataplatform.document.parentid')].value = instanceID;
						thankyou0.instance[ODP.document.findIndexByName(thankyou0.instance, 'Navigator')].value = 'Thank you';
						ODP.document.updateJSON(thankyou0);
						ODP.designer.addSnippetToDocumentTree(thankyou0, false);
						var thankyouDesign0 = (ODP.document.getNewSnippet('{1F3DE661-85F9-4C0D-825D-3DB5FD545A63}'));
						thankyouDesign0.instance[ODP.document.findIndexByName(thankyouDesign0.instance, 'com.opendataplatform.document.parentid')].value = thankyou0.instance[ODP.document.findIndexByName(thankyou0.instance, 'com.opendataplatform.document.id')].value;
						ODP.document.updateJSON(thankyouDesign0);
						ODP.designer.addSnippetToDocumentTree(thankyouDesign0, false);
						var tmpChildren = ODP.document.renderChildren(instanceID);
						var tmpJoin = tmpChildren.join('');
						if (ODP.window.document.getElementById(instanceID) == null) {
							containerDiv += tmpJoin;
						} else {
							ODP.window.document.getElementById(instanceID).innerHTML = tmpJoin;
						}
						ODP.document.addAsObjects();
						Open.listeners[datasetLoader].onready.shift();
					}
					if (parent['Auto generate'] == 'Yes') {
						/**Initiate slide creation**/
						if (renderer == 'design') { // go async
							setTimeout(function () {
								if ((iterations--) > 0) {
									addSlide(start, 2);
								} else {
									if ((remainderOfLength) > 0) {
										addSlide(start, remainderOfLength);
										remainderOfLength = 0;
									}
									setTimeout(function () {
										if (ODP.document.queue.active == false) {
											ODP.document.queue.run();
										}
									}, 0);
								}
							}, 0);
						} else { //regular exec for mobile devices
							if ((iterations--) > 0) {
								addSlide(start, 2);
							} else {
								if ((remainderOfLength) > 0) {
									addSlide(start, remainderOfLength);
									remainderOfLength = 0;
								}
								if (ODP.document.queue.active == false) {
									ODP.document.queue.run();
								}
							}
						}
					} else {
						if (renderer === "design") {
							addEndSlides(); //add the finishing slides for manual survey mode
						}
					}
					if (ODP.Surveo.params.surveoSkipPatterns != null && ODP.Surveo.params.skipsEnabled) { //check and execute skip/triggers at beginning
						try {
							for (var p = 0, len1 = questionPosQuestionID.length; p < len1; p++) {
								ODP.Surveo.methods.sm_mother(questionPosQuestionID[p]);
							}
						} catch (e) {console.log(e+" @questionPosQuestionID" + 5);}
					} else {}

				}
				setTimeout(function () {
					
					if (ODP.Surveo.params.isMobileRenderer && typeof testFileExists !== 'undefined') {
						testFileExists(ODP.Surveo.params.surveoProjectID + 'dataresults.txt', testCallback);
					}

				}, 300);
				var globalIntervalForRedrawsetInterval = setInterval(function () {
					ODP.Surveo.debug.initAll();
					if (ODP.Surveo.params.hasCounter) {
						if (ODP.Surveo.params.surveysStatus.visualizer.init()) {
							if (ODP.Surveo.params.isMobileRenderer && typeof testFileExists !== 'undefined') {}
							clearInterval(globalIntervalForRedrawsetInterval);
							globalIntervalForRedrawsetInterval = null;
							return;
						}
					} else {
						clearInterval(globalIntervalForRedrawsetInterval);
						globalIntervalForRedrawsetInterval = null;
						return;
						ODP.Surveo.params.surveysStatus.visualizer.destroy();
					}
				}, 2000);
			});
			//},5);
			ODP.Surveo.debug.initAll();
			if (ODP.document.checkChildren(instanceID).length > 0) {

				var tmpChildren = ODP.document.renderChildren(instanceID);
				var cChildren = ODP.document.checkChildren(instanceID);
				if (renderer == 'preview' || renderer == '') {
					var groupBy = 0;
					for (var c = 0, len = cChildren.length; c < len; c++) {
						var tempGetID = cChildren[c][ODP.document.findIndexByName(cChildren[c], 'com.opendataplatform.document.id')].value;
						ODP.Surveo.params.assignedQueueIndices[tempGetID] = 6;
					}
				}
				containerDiv = '<div align="center" class="surveyStructure" id=' + instanceID + ' style="-webkit-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;font-size:' + fontsize + '; ' + ((renderer == 'preview' || renderer == '') ? "overflow: hidden;" : "") + ' position: absolute; width:' + snippet["Width"] + '; height:' + snippet["Height"] + ';"><style></style>' + tmpChildren.join('') + '</div>';

			}
			return containerDiv;
		}}},{"com.opendataplatform.document.id":"{AD6ED740-BEC6-42D9-9F21-1BFF42AC67C5}","manifest":{"name":"Surveo Generic Slide","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Navigator","datatype":"nvarchar","defaultvalue":"Normal"},{"name":"Show status bar","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Show restart button","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Width","datatype":"nvarchar","defaultvalue":""},{"name":"Height","datatype":"nvarchar","defaultvalue":""},{"name":"Scale factor","datatype":"nvarchar","defaultvalue":"default"},{"name":"Content padding","datatype":"nvarchar","defaultvalue":""},{"name":"Content scrollable","datatype":"nvarchar","defaultvalue":""},{"name":"Header Font Color","datatype":"nvarchar","defaultvalue":"white"},{"name":"Button Font Color","datatype":"nvarchar","defaultvalue":""},{"name":"Navigation custom texts","datatype":"nvarchar","defaultvalue":""},{"name":"Button Background","datatype":"nvarchar","defaultvalue":""},{"name":"Slide background","datatype":"nvarchar","defaultvalue":""},{"name":"Inner content background","datatype":"nvarchar","defaultvalue":""},{"name":"Close button image","datatype":"nvarchar","defaultvalue":""},{"name":"Progress bar background","datatype":"nvarchar","defaultvalue":""},{"name":"Progress bar fill","datatype":"nvarchar","defaultvalue":""},{"name":"Progress bar badge","datatype":"nvarchar","defaultvalue":""},{"name":"Slide back button","datatype":"nvarchar","defaultvalue":""},{"name":"Slide next button","datatype":"nvarchar","defaultvalue":""},{"name":"Back button badge","datatype":"nvarchar","defaultvalue":""},{"name":"Next button badge","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer === "server") {
				return "";
			}
			var doc = ODP.document;
			//currentChildNode = 0;
			var showTwoButtons;
			var showSingleButton;
			var snippet = doc.getSnippet(instanceID);
			var parent = doc.getSnippet(snippet['com.opendataplatform.document.parentid']);
			var containerSnippet = doc.getSnippet(parent['com.opendataplatform.document.parentid']);
			var tmpChildren = doc.checkChildren(snippet['com.opendataplatform.document.parentid']);
			var thisSlideIndex = 0;
			var progressValue = 0;
			var lengthOfSurvey = 0;
			var cacheDeploymentTarget = ODP.Surveo.params.deploymentTarget;
			
			/**Progress meter for the survey ; counting slides**/
			for (var p = 0, len = tmpChildren.length; p < len; p++) {
				//calculate REAL number of questions
				if (!(tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Start' || tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Thank you' || tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Continue')) {
					lengthOfSurvey++;
				}
				//progress value
				if (tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'com.opendataplatform.document.id')].value == instanceID) {
					thisSlideIndex = p + 1;
					//real progress (questions only, no start/finish/special ones)
					if (!(tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Start' || tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Thank you' || tmpChildren[p][doc.findIndexByName(tmpChildren[p], 'Navigator')].value == 'Continue')) {
						progressValue = p;
					}
				}
			}
			delete tmpChildren;
			// doc.queue.add(function () {
				// ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
				
				// if(ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent) {
					// while(ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent[0]) {
						// var addEvent = ODP.Surveo.methods.addEvent;
						// var curSlide = ODP.window.document.querySelector("#" + ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent[0]);
						// addEvent(curSlide, "webkitTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
						// addEvent(curSlide, "oTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
						// addEvent(curSlide, "msTransitionEnd", ODP.Surveo.methods.handleAnimEnd);
						// addEvent(curSlide, "transitionend", ODP.Surveo.methods.handleAnimEnd);
						
						// ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent.shift();
					// }
				// }
			// }, 10);
			var hideStatus;
			var hideRestart;
			var firstNavButtonText = "";
			var secondNavButtonText = "";
			var specialNavType;
			if(typeof snippet["Navigation custom texts"] !== "undefined") {// krtodorov fix for old project set in surveo designer
				specialNavType = snippet["Navigation custom texts"].split(",");
			} else {
				snippet["Navigation custom texts"] = "";
			}
			if (snippet["Navigation custom texts"] == "") {
				if (snippet["Navigator"] == "Normal") {
					firstNavButtonText = "Back";
					secondNavButtonText = "Next"
				} else {
					if(snippet['Navigator'] === "Start without button") {
						firstNavButtonText = "";
					} else {
						firstNavButtonText = snippet["Navigator"];//.toUpperCase(); 
					}
					
				}
			} else {
				firstNavButtonText = specialNavType[0];
				secondNavButtonText = specialNavType[specialNavType.length - 1];
			}
			
			firstNavButtonText = "<span class = 'globalizedLiteral literal|||"+firstNavButtonText.replace(/ /g,"#####")+"'>" + firstNavButtonText + "</span>";
			secondNavButtonText = "<span class = 'globalizedLiteral literal|||"+secondNavButtonText.replace(/ /g,"#####")+"'>" + secondNavButtonText + "</span>";
			
			if (ODP.Surveo.params.surveoShowProgress == "No") {
				hideStatus = true;
				// colnsole.log("nn");
			}
			if (ODP.Surveo.params.surveoShowRestart == "No") {
				hideRestart = true;
			}
			
			if (snippet["Show status bar"] == "No") {
				hideStatus = true;
				// colnsole.log("nn");
			}
			if (snippet["Show restart button"] == "No") { //specific check for this slide only
				hideRestart = true;
			}
			/**Initialize snippet parameters**/
			snippet["Height"] = parent["Height"];
			snippet["Width"] = parent["Width"];
			/*Check wether parameters are set; if not -> default values for the project*/
			snippet["Content padding"] = ((snippet["Content padding"] == "") ? ODP.Surveo.params.contentPadding : snippet["Content padding"]);
			snippet["Slide background"] = ((snippet["Slide background"] == "") ? ODP.Surveo.params["defaultBackground"] : snippet["Slide background"]); // alert(3);
			snippet["Button Background"] = ((snippet["Button Background"] == "") ? ODP.Surveo.params["backForNav"] : snippet["Button Background"]);
			snippet["Close button image"] = ((snippet["Close button image"] == "") ? ODP.Surveo.params["closeBtn"] : snippet["Close button image"]); // alert(5);
			snippet["Progress bar background"] = ((snippet["Progress bar background"] == "") ? ODP.Surveo.params["progressBarback"] : snippet["Progress bar"]); // alert(5);
			snippet["Progress bar fill"] = ((snippet["Progress bar fill"] == "") ? ODP.Surveo.params["progressBarFill"] : snippet["Progress bar fill"]); // alert(5);
			snippet["Slide back button"] = ((snippet["Slide back button"] == "") ? ODP.Surveo.params["previousPicture"] : snippet["Slide back button"]); // alert(5);
			snippet["Slide next button"] = ((snippet["Slide next button"] == "") ? ODP.Surveo.params["nextPicture"] : snippet["Slide next button"]); // alert(5);
			snippet["Progress bar badge"] = ((snippet["Progress bar badge"] == "") ? ODP.Surveo.params["progressBadge"] : snippet["Progress bar badge"]); // alert(5);
			snippet["Inner content background"] = ((snippet["Inner content background"] == "") ? ODP.Surveo.params["questionBodyBack"] : snippet["Inner content background"]);
			snippet["Back button badge"] = ((snippet["Back button badge"] == "") ? ODP.Surveo.params["defaultBackArrow"] : snippet["Back button badge"]);
			snippet["Next button badge"] = ((snippet["Next button badge"] == "") ? ODP.Surveo.params["defaultNextArrow"] : snippet["Next button badge"]);
			snippet["Button Font Color"] = ((snippet["Button Font Color"] == "") ? ODP.Surveo.params["headerTextColor"] : snippet["Button Font Color"]);
			
			snippet['Scale factor'] = ((snippet['Scale factor'] == 'default' || snippet['Scale factor'] == '') ? ODP.Surveo.params.scaleFactor : snippet['Scale factor']) // //
			snippet['Content scrollable'] = ((snippet['Content scrollable'] == '' || snippet['Content scrollable'] == '') ? ODP.Surveo.params.contentScrollable : snippet['Content scrollable']);
			
			var overrideResource = ODP.Surveo.methods.overrideResource;
			var surveoTheme = ODP.Surveo.params.surveoTheme;
			if (surveoTheme && surveoTheme.surveoGenericSlide) { // we have theme
				var surveoGenericSlideTheme = surveoTheme.surveoGenericSlide;
				snippet['Width'] = surveoGenericSlideTheme['Width'] ? surveoGenericSlideTheme['Width'] : snippet['Width'];
				snippet['Height'] = surveoGenericSlideTheme['Height'] ? surveoGenericSlideTheme['Height'] : snippet['Height'];
				snippet['Scale factor'] = surveoGenericSlideTheme['Scale factor'] ? surveoGenericSlideTheme['Scale factor'] : snippet['Scale factor'];
				snippet['Content padding'] = surveoGenericSlideTheme['Content padding'] ? surveoGenericSlideTheme['Content padding'] : snippet['Content padding'];
				snippet['Content scrollable'] = surveoGenericSlideTheme['Content scrollable'] ? surveoGenericSlideTheme['Content scrollable'] : snippet['Content scrollable'];
				snippet['Header Font Color'] = surveoGenericSlideTheme['Header Font Color'] ? surveoGenericSlideTheme['Header Font Color'] : snippet['Header Font Color'];
				snippet['Button Font Color'] = surveoGenericSlideTheme['Button Font Color'] ? surveoGenericSlideTheme['Button Font Color'] : snippet['Button Font Color'];
				snippet['Button Background'] = surveoGenericSlideTheme['Button Background'] ? overrideResource(snippet['Button Background'], surveoGenericSlideTheme['Button Background']) : snippet['Button Background'];
				snippet['Slide background'] = surveoGenericSlideTheme['Slide background'] ? overrideResource(snippet['Slide background'], surveoGenericSlideTheme['Slide background']) : snippet['Slide background'];
				snippet['Inner content background'] = surveoGenericSlideTheme['Inner content background'] ? overrideResource(snippet['Inner content background'], surveoGenericSlideTheme['Inner content background']) : snippet['Inner content background'];
				snippet['Close button image'] = surveoGenericSlideTheme['Close button image'] ? overrideResource(snippet['Close button image'], surveoGenericSlideTheme['Close button image']) : snippet['Close button image'];
				snippet['Progress bar background'] = surveoGenericSlideTheme['Progress bar background'] ? overrideResource(snippet['Progress bar background'], surveoGenericSlideTheme['Progress bar background']) : snippet['Progress bar background'];
				snippet['Progress bar fill'] = surveoGenericSlideTheme['Progress bar fill'] ? overrideResource(snippet['Progress bar fill'], surveoGenericSlideTheme['Progress bar fill']) : snippet['Progress bar fill'];
				snippet['Progress bar badge'] = surveoGenericSlideTheme['Progress bar badge'] ? overrideResource(snippet['Progress bar badge'], surveoGenericSlideTheme['Progress bar badge']) : snippet['Progress bar badge'];
				snippet['Slide back button'] = surveoGenericSlideTheme['Slide back button'] ? overrideResource(snippet['Slide back button'], surveoGenericSlideTheme['Slide back button']) : snippet['Slide back button'];
				snippet['Slide next button'] = surveoGenericSlideTheme['Slide next button'] ? overrideResource(snippet['Slide next button'], surveoGenericSlideTheme['Slide next button']) : snippet['Slide next button'];
				snippet['Back button badge'] = surveoGenericSlideTheme['Back button badge'] ? overrideResource(snippet['Back button badge'], surveoGenericSlideTheme['Back button badge']) : snippet['Back button badge'];
				snippet['Next button badge'] = surveoGenericSlideTheme['Next button badge'] ? overrideResource(snippet['Next button badge'], surveoGenericSlideTheme['Next button badge']) : snippet['Next button badge'];
			}
			
			ODP.Surveo.params.timeForAnimationForSlideChange = 400;
			if(typeof ODP.Surveo.snippets.slide === "undefined") {
				ODP.Surveo.snippets.slide = {
					"showPrebuffered" : function () {
						/*
						 */
					},
					"timeForAnimationForSlideChange" : ODP.Surveo.params.timeForAnimationForSlideChange,
					"_restartSurvey" : function () {
						try {
							/**Restarts the survey from question 1**/
							ODP.Surveo.methods.resetSkips();
							var cacheSlides = ODP.Surveo.params.slideArray;
							for (var a = 1, len = cacheSlides.length; a < len; a++) {
								if(a !== currentChildNode) {
									//console.log(cacheSlides[a]);
									cacheSlides[a].className = "questionMain unreadDesktop";
								}
							}
							
							ODP.Surveo.params.surveyInProgress = 0;
							
							setTimeout(function() {
								ODP.Surveo.snippets.slide._slideToFirst();
							},0);
							
						} catch (e) {
							alert(e + ' @slide');
						}
					},
					/**Previous slide**/
					"findNextQuestion" : function (nextInLine, reverse) { //calculates the proper slide index; maybe should belong in skip eval?
						var len = ODP.Surveo.params.slideArray.length;
						var isNotFirstOrLastSlide = ((reverse == true) ? ((nextInLine >= 0) && (nextInLine < len)) : (nextInLine < len)); //determine bounds for the index
						if (isNotFirstOrLastSlide) { //if index in bounds
							for (var k in ODP.Surveo.params.questionData) {
								if (ODP.Surveo.params.slideArray[nextInLine]) {
									if (ODP.Surveo.params.questionData[k].getMainDivID() === ODP.Surveo.params.slideArray[nextInLine].id) { //get to next slide
										if (ODP.Surveo.params.questionData[k].getSkiped()) { //check if skiped
											if (!reverse) { //recursive call; check if next slide is skiped also. Checks wether next or previous is calculated
												return ODP.Surveo.snippets.slide.findNextQuestion(++nextInLine, reverse);
											} else {
												return ODP.Surveo.snippets.slide.findNextQuestion(--nextInLine, reverse);
											}
										} else { //if not skiped -> return the same index (nextInline);
											return nextInLine;
										}
									}
								}
							}
						} else { //if index out of bounds
							if (!reverse) { //if next is pressed -> return last index;
								return len - 1;
							} else { //if previous is requested -> return 1st index
								return 0;
							}
						}
						return nextInLine; //default case (no skips) -> return same index (nextInLine)
					},
					"_slideToFirst" : function () { //move to the 1st slide
						//console.log("_slideToFirst", ODP.Surveo.params.buttonsLock);
						eventSwitch = (typeof eventSwitch === 'undefined') ? true : eventSwitch;
						if(ODP.Surveo.params.buttonsLock === 0) {
							if (!(renderer === 'design' || typeof SM !== "undefined")) {
								ODP.Surveo.params.buttonsLock = 1;
							}
							var surveoParams = ODP.Surveo.params;
							
							var cacheSlides = surveoParams.slideArray;
							var cacheCurrent = cacheSlides[currentChildNode];
							
							if (renderer == 'design' && !cacheDeploymentTarget.isOldBrowser) {
								cacheSlides[currentChildNode].setStyle('left', currentChildNode * 100 + "%");
								cacheSlides[0].setStyle('left', 0);
								for (var m = 1, len = currentChildNode; m < len; m++) {
									cacheSlides[m].setStyle('left', m * 100 + "%");
								}
								for (var m = currentChildNode + 1, slen = cacheSlides.length; m < slen; m++) {
									cacheSlides[m].setStyle('left', m * 100 + "%");
								}
							}

							if (ODP.Surveo.globalization && ODP.Surveo.globalization.isGlobalizationInitialized) {
								ODP.Surveo.globalization.setGlobalizationForSlide(0);
							}

							var paramsForAnimation = {
								"cacheCurrent" : cacheCurrent,
								"cachePrev" : cacheSlides[0],
								"delay" : 0,
								"animationType" : "prevSlide"
							}

							ODP.window.requestAnimFrame(function() {
								ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
							});
							
							currentChildNode = 0; //set current slide index to 0
							if (eventSwitch) {
								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : surveoParams.slideArray[currentChildNode]
								}); //booya
							}
						}
						return;
					},
					"_slidePrev" : function (delay, eventSwitch) { //move to previous slide, checking for skips
						//console.log("_slidePrev", ODP.Surveo.params.buttonsLock);
						eventSwitch = (typeof eventSwitch === 'undefined') ? true : eventSwitch;

						if (ODP.Surveo.params.buttonsLock == 0) { //check lock
							delay = delay || "0ms";
							delayWithoutMS = (delay.split) ? parseInt(delay.split("ms")[0], 10) : delay;
							
							/**Calculate questions indices to be shown/hidden**/
							var cacheSlides = ODP.Surveo.params.slideArray;
							var prevChildNode = ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode - 1, true);
							var cachePrev = cacheSlides[prevChildNode];
							var cacheCurrent = cacheSlides[currentChildNode];
							
							//console.log(prevChildNode, " VS ",currentChildNode);
							
							if(typeof cachePrev === "undefined" || typeof cacheSlides[currentChildNode] === "undefined" || prevChildNode === currentChildNode) { 
								return; 
							}
							
							if (!(renderer === 'design' || typeof SM !== "undefined")) {
								ODP.Surveo.params.buttonsLock = 1;
							} else {
								ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
							}
							
							if (ODP.Surveo.globalization && ODP.Surveo.globalization.isGlobalizationInitialized) {
								ODP.Surveo.globalization.setGlobalizationForSlide(prevChildNode);
							}
							
							var paramsForAnimation = {
								"cacheCurrent" : cacheCurrent,
								"cachePrev" : cachePrev,
								"delay" : delayWithoutMS,
								"animationType" : "prevSlide"
							}
							
							currentChildNode = prevChildNode;
							
							ODP.window.requestAnimFrame(function() {
								ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
							});

							if (eventSwitch) {
								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : cacheCurrent
								}); //booya
							}

							cacheSlides = undefined;
							
							if(ODP.Surveo.params.autoRestartEnabled) {
								var srvSlide = ODP.Surveo.snippets.slide;
								srvSlide.initAutoSendHandler(srvSlide.autoSendHandler, ODP.Surveo.params.autoRestartAfter);
							}
						}
						return;
					},
					"_slideNext" : function (delay, eventSwitch) {
						//console.log("_slideNext", ODP.Surveo.params.buttonsLock);
						eventSwitch = (typeof eventSwitch === 'undefined') ? true : eventSwitch;

						if (ODP.Surveo.params.buttonsLock == 0) {
							if (ODP.Surveo.methods.checkRequired() && eventSwitch) {
								return;
							}

							if (currentChildNode === 0) {
								ODP.Surveo.methods.startSurvey(); //handle questions on the starting slide;
							}
								
							delay = delay || "0ms";
							delayWithoutMS = (delay.split) ? parseInt(delay.split("ms")[0], 10) : delay;

							var cacheSlides = ODP.Surveo.params.slideArray;
							var cacheCurrent = cacheSlides[currentChildNode];

							var nextChildNode = ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode + 1);
							if (currentChildNode >= nextChildNode) {
								ODP.Surveo.methods.finishSurvey();

								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : cacheCurrent
								}); //booya
								return;
							}
							var cacheNext = cacheSlides[nextChildNode];

							if (typeof cacheCurrent === "undefined" || typeof cacheNext === "undefined" || nextChildNode === currentChildNode) {
								return;
							}
												
							if (!(renderer === 'design' || typeof SM !== "undefined")) {
								ODP.Surveo.params.buttonsLock = 1;
							} else {
								ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
							}
							
							if (ODP.Surveo.globalization && ODP.Surveo.globalization.isGlobalizationInitialized) {
								ODP.Surveo.globalization.setGlobalizationForSlide(nextChildNode);
							}

							var paramsForAnimation = {
								"cacheCurrent" : cacheCurrent,
								"cacheNext" : cacheNext,
								"delay" : delayWithoutMS,
								"animationType" : "nextSlide"
							}
							
							currentChildNode = nextChildNode;
							
							//ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
							
							ODP.window.requestAnimFrame(function() {
								ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
							});

							if (eventSwitch) {
								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : cacheCurrent
								}); //booya
							}

							cacheSlides = undefined;
							
							if(ODP.Surveo.params.autoRestartEnabled) {
								var srvSlide = ODP.Surveo.snippets.slide;
								srvSlide.initAutoSendHandler(srvSlide.autoSendHandler, ODP.Surveo.params.autoRestartAfter);
							}
						}

						return;
					},
					"animateSlides" : function (params) {
						var transformValue;
						var translateValue;
						var cssText;
						var delay = params.delay;
						var safeMS = delay + 25;
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						var cacheCurrent = params.cacheCurrent;
						ODP.Surveo.params.isInAnimatingBetweenSlides = true;

						if((renderer === 'design' || typeof SM !== "undefined") && !cacheDeploymentTarget.isOldBrowser) { // animations in designer
							for(var a = 0, len = ODP.window.document.body.querySelectorAll('.questionMain').length; a < len; a++) {
								if(currentChildNode != a) {
									ODP.Surveo.params.slideArray[a].className = "questionMain killAnimations readDesktop";
								}
							}

							if(params.animationType === "nextSlide") {
								var cacheNext = params.cacheNext;
								ODP.Surveo.params.cacheCurrent = cacheCurrent;
								ODP.Surveo.params.cacheNext = cacheNext;

								if(cacheNext) cacheNext.className = "questionMain killAnimations unreadDesktop";
								if(cacheCurrent) cacheCurrent.className = "questionMain killAnimations normalDesktop";

								ODP.window.requestAnimFrame(function() {
									if(cacheNext) cacheNext.className = "questionMain unreadDesktop";
									if(cacheCurrent) cacheCurrent.className = "questionMain normalDesktop";

									ODP.window.requestAnimFrame(function() {
										if(cacheNext) cacheNext.className = "questionMain normalDesktop";
										if(cacheCurrent) cacheCurrent.className = "questionMain readDesktop";
									});
								});
							}
							if (params.animationType === "prevSlide") {
								var cachePrev = params.cachePrev;
								ODP.Surveo.params.cacheCurrent = cacheCurrent;
								ODP.Surveo.params.cachePrev = cachePrev;

								if (cachePrev) cachePrev.className = "questionMain killAnimations readDesktop";
								if (cacheCurrent) cacheCurrent.className = "questionMain killAnimations normalDesktop";

								ODP.window.requestAnimFrame(function() {
									if (cachePrev) cachePrev.className = "questionMain readDesktop";
									if (cacheCurrent) cacheCurrent.className = "questionMain normalDesktop";

									ODP.window.requestAnimFrame(function() {
										if (cachePrev) cachePrev.className = "questionMain normalDesktop";
										if (cacheCurrent) cacheCurrent.className = "questionMain unreadDesktop";
									});
								});
							}
							return;
						}

						if (params.animationType === "nextSlide") {
							var cacheNext = params.cacheNext;
							ODP.Surveo.params.cacheCurrent = cacheCurrent;
							ODP.Surveo.params.cacheNext = cacheNext;
							
							if (deploymentTarget.isOldBrowser) {
								cacheNext.className = "questionMain prepareUnreadDesktop";
								
								this.itemsForAnimation = [{
										ref : cacheCurrent,
										property : "left",
										tweens : ODP.Surveo.snippets.slide.getTweens(0, -100, "%")
									}, {
										ref : cacheNext,
										property : "left",
										tweens : ODP.Surveo.snippets.slide.getTweens(100, 0, "%")
									}
								];
								this.animator(this.itemsForAnimation, {
									"callback" : function () {
										ODP.Surveo.params.cacheCurrent.className = "questionMain readDesktop";
										ODP.Surveo.params.cacheNext.className = "questionMain normalDesktop";

										ODP.Surveo.params.cacheCurrent.style.cssText = '';
										ODP.Surveo.params.cacheNext.style.cssText = '';

										ODP.Surveo.params.cacheCurrent = null;
										ODP.Surveo.params.cacheNext = null;

										ODP.Surveo.methods.unlockControls();
									}
								});
							} else {
								var cacheNext = params.cacheNext;
								ODP.Surveo.params.cacheCurrent = cacheCurrent;
								ODP.Surveo.params.cacheNext = cacheNext;

								cssText = "display: block !important;";
								cacheNext.style.cssText = cssText;
								cacheCurrent.style.cssText = cssText;
								
								setTimeout(function() {
									cacheNext.className = "questionMain normalDesktop";
									cacheCurrent.className = "questionMain readDesktop";
								},safeMS);
								return;
							
								// setTimeout(function () {
									// translateValue = (ODP.Surveo.params.surveoAnimation == 'HSlide') ? "-100%, 0" : "0, -100%";
									// transformValue = deploymentTarget.has3DTransforms ? "translate3d(" + translateValue + ", 0)" : "translate(" + translateValue + ")";
									// cssText = "-webkit-transform: " + transformValue + "; -moz-transform: " + transformValue + "; -ms-transform: " + transformValue + "; -o-transform: " + transformValue + "; transform: " + transformValue + "; display: block !important;";
									// cacheNext.style.cssText = cssText;
									// cacheCurrent.style.cssText = cssText;
								// }, safeMS);
								// return;
							}
						}

						if (params.animationType === "prevSlide") {
							var cachePrev = params.cachePrev;
							ODP.Surveo.params.cacheCurrent = cacheCurrent;
							ODP.Surveo.params.cachePrev = cachePrev;

							if (deploymentTarget.isOldBrowser) {
								cachePrev.className = "questionMain prepareReadDesktop";
								
								this.itemsForAnimation = [{
										ref : cacheCurrent,
										property : "left",
										tweens : ODP.Surveo.snippets.slide.getTweens(0, 100, "%")
									}, {
										ref : cachePrev,
										property : "left",
										tweens : ODP.Surveo.snippets.slide.getTweens(-100, 0, "%")
									}
								];
								this.animator(this.itemsForAnimation, {
									"callback" : function () {
										ODP.Surveo.params.cacheCurrent.className = "questionMain unreadDesktop";
										ODP.Surveo.params.cachePrev.className = "questionMain normalDesktop";

										ODP.Surveo.params.cacheCurrent.style.cssText = '';
										ODP.Surveo.params.cachePrev.style.cssText = '';

										ODP.Surveo.params.cacheCurrent = null;
										ODP.Surveo.params.cachePrev = null;

										ODP.Surveo.methods.unlockControls();
									}
								});
							} else {
								cssText = "display: block !important;";
								cachePrev.style.cssText = cssText;
								cacheCurrent.style.cssText = cssText;
								
								setTimeout(function () {
									cachePrev.className = "questionMain normalDesktop";
									cacheCurrent.className = "questionMain unreadDesktop";
								}, safeMS);
								
								return;

								// setTimeout(function () {
									// translateValue = (ODP.Surveo.params.surveoAnimation == 'HSlide') ? "100%, 0" : "0, 100%";
									// transformValue = deploymentTarget.has3DTransforms ? "translate3d(" + translateValue + ", 0)" : "translate(" + translateValue + ")";
									// cssText = "-webkit-transform: " + transformValue + "; -moz-transform: " + transformValue + "; -ms-transform: " + transformValue + "; -o-transform: " + transformValue + "; transform: " + transformValue + "; display: block !important;";
									// cachePrev.style.cssText = cssText;
									// cacheCurrent.style.cssText = cssText;
								// }, safeMS);
								// return;
							}
						}
					},
					"toggleNavigation" : function () { /**DEPRECATED!**/
						/**Show or hide the navigation controls**/
						if (currentChildNode > 0) {
							var cacheBDivs = ODP.Surveo.params.slideArray[currentChildNode].getElementsByClassName('buttonDiv'); //cache navigation for current slide
							if (cacheBDivs) {
								for (var m = 0, len = cacheBDivs.length; m < len; m++) {
									if (cacheBDivs[m]) {
										cacheBDivs[m].className = "buttonDivShown";
									}
								}
							}
							delete cacheBDivs;
						}
						if (currentChildNode - 1 >= 0 && typeof ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode - 1)] != 'undefined') {
							var cachedPrevBDivs = ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode - 1, true)].getElementsByClassName('buttonDivShown'); //cache navigation for prev slide
							if (cachedPrevBDivs) {
								for (var m = 0, len = cachedPrevBDivs.length; m < len; m++) {
									if (cachedPrevBDivs[m]) {
										cachedPrevBDivs[m].className = "buttonDiv";
									}
								}
							}
							delete cachedPrevBDivs;
						}
						if (typeof ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode + 1)] != 'undefined') {
							var cachedNextBDivs = ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode + 1)].getElementsByClassName('buttonDivShown'); //cache navigation for next slide
							if (cachedNextBDivs) {
								for (var m = 0, len = cachedNextBDivs.length; m < len; m++) {
									if (cachedNextBDivs[m]) {
										cachedNextBDivs[m].className = "buttonDiv";
									}
								}
							}
							delete cachedNextBDivs;
						}
					},
					/**BROWSER ANIMATIONS COMPATIBILITY FUNCTIONS BELOW**/
					"getTweens" : function (from, to, suffix) {
						/*by ddyakov ; calculate frame positions for animation*/
						var animDelta = Math.abs(from - to);
						var frameCount = this.animationStyle.length;
						var arrFrames = [];
						var newFrame = from;
						var ammount = 0;
						for (var index = 0; index < frameCount; index++) {
							ammount = (animDelta * this.animationStyle[index] / 100);
							newFrame = (from - to) < 0 ? newFrame + ammount : newFrame - ammount;
							arrFrames.push(newFrame + (suffix ? suffix : ""));
						}
						return arrFrames;
					},
					"animator" : function (items, objCallback, animationDelay) {
						if (typeof animationDelay === "undefined") {
							animationDelay = 15;
						}
						/*by ddyakov; animating with js, frame by frame*/
						var item;
						var property;
						var value;
						var frameCount = this.animationStyle.length;
						var itemCount = items.length;
						for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
							for (var itemIndex = 0; itemIndex < itemCount; itemIndex++) {
								item = items[itemIndex];
								property = item['property'];
								value = item['tweens'][frameIndex];
								item = item['ref'];
								setTimeout(this.closure(item, property, value), animationDelay * (frameIndex + 1));
							}
						}
						
						if (typeof objCallback !== "undefined" && objCallback !== null) {
							setTimeout(function () {
								objCallback["callback"](objCallback["arguments"]);
							}, animationDelay * (frameIndex + 1));
						}
						/*items = [];*/
						
					},
					"closure" : function (i, p, v) {
						/*by ddyakov; styling the slides, animating*/
						var item = i;
						var property = p;
						var value = v;
						if (property === "opacity"){
							return function(){
								item.setStyle("filter", "alpha(opacity="+(value*100)+")");	
							}
						}
						return function () {
							item.setStyle(property, value);
						}
					},
					"slidesWithoutAnimationEndEvent" : [],
					"itemsForAnimation" : [],
					"animationStyle" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
					/*by ddyakov ; needed for the browser compatibility*/
					"initAutoSendHandler" : function(autoSendHandler, autoRestartAfter) {
						var srvSlide = ODP.Surveo.snippets.slide;
						if(typeof autoSendHandler === "undefined") {
							autoSendHandler = srvSlide.autoSendHandler;
						}
						if(typeof autoRestartAfter === "undefined") {
							autoRestartAfter = ODP.Surveo.params.autoRestartAfter;
						}
						if(ODP.Surveo.params.sendResultsTimeout) {
							clearInterval(ODP.Surveo.params.sendResultsTimeout);
						}
						ODP.Surveo.params.sendResultsTimeout = setInterval(autoSendHandler,autoRestartAfter);
					},
					"autoSendHandler" : function() {
						if(currentChildNode == 0) {
							return;
						}
						var ODPDoc = ODP.document;
						var srv = ODP.Surveo;
						var srvMethods = srv.methods;
						var srvParams = srv.params;
						var srvSnippets = srv.snippets;
						var srvSlide = srvSnippets.slide;
						var onClickFinishButton = srvParams.onClickFinishButton;
						var customFinishText = srvParams.customFinishText;
						var finishSurvey = (snippet['Navigator'] === "Thank you" && typeof onClickFinishButton !== "undefined" && onClickFinishButton === "Finish survey" && typeof customFinishText !== "undefined");
						
						if((ODPDoc.renderMode !== "design" && ODPDoc.renderTarget !== "SurveoDesignerSlidePreview") && (currentChildNode === srvParams.slideCount)) {
							if(finishSurvey) {				
								(srvMethods.customFinishSurvey && srvMethods.customFinishSurvey(customFinishText));
							} else {
								srvSlide._slideNext();
							}
						} else {
							if(srvParams.autoRestartEnabled) {
								var nextChildNode = srvSlide.findNextQuestion(currentChildNode + 1);
								if (currentChildNode >= nextChildNode) {
									if(finishSurvey) {				
										(srvMethods.customFinishSurvey && srvMethods.customFinishSurvey(customFinishText));
									} else {
										srvSlide._slideNext();
									}
								} else {
									if(ODP.Surveo.params.submitOnAutoRestart) {
										if(finishSurvey) {				
											(srvMethods.customFinishSurvey && srvMethods.customFinishSurvey(customFinishText));
										} else {
											ODP.Surveo.methods.finishSurvey();
										}
									} else {
										srvMethods.onCloseClick();
									}
								}
							}
						}
						clearInterval(srvParams.sendResultsTimeout);
					}
				}
			}
			if (doc.currentRenderer == "server") {
				return;
			}
			/**SETTING UP THE TYPE OF NAVIGATION**/
			var isPresenter = ""; //shows if presenter mode is on; value == function _Next (as string )or an empty string
			var isStartWithoutButton = false;
			var isGlobalizationPresentationSlide = (snippet['Navigator'] === "Globalization Presenter");
			
			switch (snippet['Navigator']) {
			case "Presenter": {
					
					/*1. One-click transition, disabling navigation buttons*/
					showTwoButtons = false; //navigation (next, prev) buttons
					showSingleButton = false; //advance (continue) button
					isPresenter += 'ODP.Surveo.methods._killBubbles(event);ODP.Surveo.methods.presenterTap();';
				}
				break;
			case "Globalization Presenter": {
					
					/*1. One-click transition, disabling navigation buttons*/
					showTwoButtons = false; //navigation (next, prev) buttons
					showSingleButton = false; //advance (continue) button
					isPresenter += '';
				}
				break;
			case "Normal": {
					
					/*2. Standard two navigation buttons*/
					showTwoButtons = true;
					showSingleButton = false;
				}
				break;
			case "Start without button" :
				showSingleButton = false;
				showTwoButtons = false;
				isStartWithoutButton = true;
				isPresenter += 'ODP.Surveo.methods._killBubbles(event);ODP.Surveo.methods.presenterTap();';
				break;
			case "Start":
			case "Thank you":
			case "Continue": {
					
					/*3. Single navigation button */
					showTwoButtons = false;
					showSingleButton = true;
				}
				break;
			default: { //two buttons
					
					showTwoButtons = true;
					showSingleButton = false;
				}
			}
			
			var hasPrerequisitesForBase64Hack = (ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize") === false);/**checks whether the rendering engine hasn't got the "background-size" property support**/
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var containerDiv;
			/**Construct the main container of the snippet**/
			var mainDiv = ODP.window.document.createElement('div');
			var relativeDisplacement = ((renderer === 'design' || cacheDeploymentTarget.isOldBrowser) ? ((thisSlideIndex - 1) * 100 + "%") : 0) + '';
			//console.log("relativeDisplacement",relativeDisplacement);	
			mainDiv.id = 'MAIN_' + instanceID.substring(1, (instanceID.length - 1));
			mainDiv.className = (thisSlideIndex == 1 ? 'questionMain normalDesktop' : 'questionMain unreadDesktop');

			if((renderer === 'design')) { // movie maker at OPEN designer
				mainDiv.setStyle("left", relativeDisplacement);
			}
			
			if(ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent) {
				ODP.Surveo.snippets.slide.slidesWithoutAnimationEndEvent.push(mainDiv.id);
			}
			
			thisSlideIndex = null;
			relativeDisplacement = null;
			if (ODP.Surveo.params.isMobileRenderer) {
				mainDiv.setAttribute('onTouchStart', isPresenter);
			} else {
				mainDiv.setAttribute('onClick', isPresenter);
			}
			isPresenter = null;

			/*Start building the table container for all snippets in the slide. Header containing (progress / overall slide count).*/
			if(!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")){
			var picBg = document.createElement("img");
				picBg.setAttribute("id","picBG"+instanceID);
				picBg.setAttribute("src",ODP.document.resource(snippet["Slide background"]).replace("url('", "").replace("')", ""));
				picBg.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%;");
			}
			var topDiv = ODP.window.document.createElement('div');
			topDiv.setAttribute('style', 'height:' + ((showSingleButton) ? '0%' : '10%') + ';overflow:hidden;position:absolute;width:100%;');
			if(ODP.Surveo.params.isMobileRenderer) { topDiv.className = 'mobileOptimized'; }
			var progressDiv = ODP.window.document.createElement('div');
progressDiv.id = 'rectDIV';
			progressDiv.className = 'rect';
			progressDiv.setAttribute('style', 'width:' + ODP.Surveo.params.surveoLayoutParams.progressLength + '; height:' + ((hideStatus) ? '0%;' : '48%;') + ((hideStatus) ? "display:none;" : ";") + ';float:left;left:' + ODP.Surveo.params.surveoLayoutParams.padding + '; position: relative;');
			
			var progressBack = ODP.window.document.createElement('div');
			progressBack.setAttribute('style', 'height: 100%; position: relative; left: 0px; top: 0px;padding:' + ((hideStatus) ? '0%;' : '0.4%;') + ((hideStatus) ? "display:none;" : ";") + ';box-sizing: border-box;-ms-box-sizing: border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-o-box-sizing:border-box;background:' + (doc.resource(snippet['Progress bar background']) ? doc.resource(snippet['Progress bar background']) : "#000") + ';border-radius:0.25em;');
			progressBack.className = "progressBack";
			var progressMark = ODP.window.document.createElement('div');
			progressMark.className = "progressMark";
			progressMark.setAttribute('style', 'float:left;width:' + ((progressValue - 1) / (lengthOfSurvey - 1) * 100) + '%;height: 100%; 		position: relative;  		left: 0px; top: 0px; 		text-align:center; 		color:white; 		font-size:0.8em; 		font-weight:bold; 		border-radius:0.25em; 		background-size:100% 100%; 		background:' + doc.resource(snippet["Progress bar fill"]) + ';background-repeat:repeat-x;background-position-x:50%;background-position-y:50%;');
			var progressTextChasing = ODP.window.document.createElement('div');
			progressTextChasing.setAttribute('style', 'position:absolute;display:table-cell;vertical-align:middle;height:100%;font-weight:bold;width:100%;color:white;');
			progressTextChasing.innerHTML = '<div style = "font-family:' + ODP.Surveo.params.defaultFontFamily + ';font-weight:bold;text-shadow:#000 0.05em 0.05em 0.05em;border-color:transparent;background:transparent;font-size:0.8em;color:white;height:100%;vertical-align:middle;">' + Math.round((progressValue - 1) / (lengthOfSurvey - 1) * 100) + '<b style="font-size:0.6em;">%</b></div>';
			// OR
			var progressTextStat = ODP.window.document.createElement('div');
			progressTextStat.setAttribute('style', ';width:100%;height: 100%;position: absolute; left: 0px; top: 0px;text-align:center;color:white;font-size:0.8em;font-weight:bold;border-radius:0.25em;');
			progressTextStat.innerHTML = '<div class="progressCommon" style="z-index:0;"><button class = "progressText" style="display:' + ((ODP.Surveo.params.surveoShowProgressValue) ? ";" : "none;") + '">' + Math.round((progressValue - 1) / (lengthOfSurvey - 1) * 100) + '<b style="font-size:0.6em;">%</b></button></div>';
			
			var restartDiv = ODP.window.document.createElement('div');
			restartDiv.className = 'rect';
			if (ODP.Surveo.params.isMobileRenderer) {
				restartDiv.setAttribute('ontouchstart', 'ODP.Surveo.methods._killBubbles(event);ODP.Surveo.methods.onCloseClick();');
			} else {
				restartDiv.setAttribute('onclick', 'ODP.Surveo.methods._killBubbles(event);ODP.Surveo.methods.onCloseClick();');
			}
			var closeImageSRC = ((snippet["Close button image"] != "") ? doc.getSnippet(snippet["Close button image"])["Content"] : "").replace("url('", "").replace("')", "").replace('url("', '').replace('")', '').replace("url(","").replace(")","");
			restartDiv.setAttribute('style', 'right:' + ODP.Surveo.params.surveoLayoutParams.restartRight + '; height: ' + ((hideRestart) ? '0%' : '100%') + '; width:9%; position: absolute;');
			restartDiv.innerHTML = '<div class="resDiv" style="height:' + ((hideRestart) ? '0%' : '50%') + ';" > <img ontouchmove="ODP.Surveo.methods.blockDrag(e);" src="' + closeImageSRC + '" 	style="" ' + ((ODP.Surveo.params['isMobileRenderer']) ? 'ontouchstart' : 'onclick') + '=""> 	</div>';
			var qstnHolder = ODP.window.document.createElement('div');
			var scrolltype = '';
			switch (snippet['Content scrollable']) {
			case "No":
				scrolltype = 'overflow:hidden;';
				break;
			case "both":
				scrolltype = 'overflow:auto;';
				break;
			case "vertical":
				scrolltype = 'overflow-y:auto;overflow-x:hidden;';
				break;
			case "horizontal":
				scrolltype = 'overflow-x:auto;overflow-y:hidden;';
				break;
			default:
				scrolltype = 'overflow:auto;';
			}
			qstnHolder.id = 'qstnHolder' + subAllinstanceIDs;
			if(ODP.Surveo.params.isMobileRenderer) {
				qstnHolder.className = 'mobileOptimized forcedVisibleScroll';
				var visibleScrollClass = [];
				visibleScrollClass.push('.forcedVisibleScroll::-webkit-scrollbar { -webkit-appearance: none; }');
				visibleScrollClass.push('.forcedVisibleScroll::-webkit-scrollbar:vertical { width: 6px; }');
				visibleScrollClass.push('.forcedVisibleScroll::-webkit-scrollbar:horizontal { height: 6px; }');
				visibleScrollClass.push('.forcedVisibleScroll::-webkit-scrollbar-thumb { background-color: #AAABAE; }');
				ODP.document.addRulesToMainStyleSheet(visibleScrollClass.join(''));
			}
			// var scrolling = ODP.Surveo.params.isMobileRenderer ? "touch" : "auto";
			var scrolling = "auto";
qstnHolder.setAttribute("class", "qstnHolderDiv");
			qstnHolder.setAttribute('style', '' + scrolltype + ';background-size:100% 100%;padding:0;' + ((snippet["Content padding"] == "No") ? "padding-left:0px;padding-right:0px;" : ";") + 'position:absolute;width:100%;height:' + ((hideRestart && hideStatus) ? '86%' : '76%') + ';top:' + ((hideRestart && hideStatus) ? '0%' : '0%') + ';background:' + doc.resource(snippet["Inner content background"]) + ';box-sizing: border-box;-ms-box-sizing: border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-moz-box-sizing:border-box;	-webkit-transform: translate3d(0, 0, 0);' + ((isGlobalizationPresentationSlide) ? "height: 90% !important;" : ""));
			var childSlides = doc.checkChildren(instanceID);
			var qSet;
			var paddingSubtracted = ((ODP.Surveo.params.surveoLayoutParams.padding.search("4%") > -1) ? "92%" : "96%");
			paddingSubtracted = ((ODP.Surveo.params.surveoLayoutParams.padding == "0") ? "100%" : paddingSubtracted);
			paddingSubtracted = null;
			var prepareBase64ForButton = doc.resource(snippet["Button Background"]).replace("url('", "").replace("')", "");
			var len = childSlides.length;
			delete childSlides;
			qSet = ODP.window.document.createElement('div');
			qSet.setAttribute("class", "qDiv");
			qSet.setAttribute('style', 'font-size:' + snippet['Scale factor'] + ';' + ((snippet["Content padding"] == "No") ? "padding-left:0px;padding-right:0px;" : ";"));
			var dividedInPairs = 0;
			if (len != 0) {
				for (var i = 0; i < len; i++) {
					dividedInPairs = Math.floor((i / 2));
					if (i % 2 == 0) {
						qSet.innerHTML += '<div ' + ((renderer == 'design') ? 'style="padding:' + ODP.Surveo.params.surveoLayoutParams.padding + ';box-sizing:border-box; -moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:1px dotted blue;height:100%;width:' + ((len > 1) ? '50%' : '100%') + ';top:' + (dividedInPairs * 100) + '%;left:0;position:absolute;float:left;"' : 'style="height:100%;width:' + ((len > 1) ? '50%' : '100%') + ';top:' + (dividedInPairs * 100) + '%;left:0;position:absolute;float:left;box-sizing:border-box; -moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:' + ODP.Surveo.params.surveoLayoutParams.padding + ';"') + '>' + doc.renderChildren(instanceID)[i] + '</div>';
					}
					if (i % 2 != 0) {
						qSet.innerHTML += '<div ' + ((renderer == 'design') ? 'style="padding:' + ODP.Surveo.params.surveoLayoutParams.padding + ';box-sizing:border-box; -moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:1px dotted blue;height:100%;width:' + ((len > 1) ? '50%' : '100%') + ';top:' + ((dividedInPairs - 1) * 100) + '%;right:0;position:absolute;float:right;"' : 'style="height:100%;width:' + ((len > 1) ? '50%' : '100%') + ';top:' + ((dividedInPairs - 1) * 100) + '%;right:0;position:absolute;float:right;box-sizing:border-box; -moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:' + ODP.Surveo.params.surveoLayoutParams.padding + ';"') + '>' + doc.renderChildren(instanceID)[i] + '</div>'
					}
					
				}
				dividedInPairs = null;
				qstnHolder.appendChild(qSet); //oh, yeah!
				qSet = null;	
				var bottomDiv = ODP.window.document.createElement('div');
				
				//var preppedContentCrossBrowserEnabled = (hasPrerequisitesForBase64Hack?"<img style=\"position:relative;top:0;left:0;width:100%;height:100%;margin:auto;\" src=\""+prepareBase64ForButton.slice(0,prepareBase64ForButton.indexOf("}"))+"} \"/><span style=\"position:absolute;top:0;bottom:0;left:0;width:100%;height:50%;margin:auto;\">###TEXT###</span>":"###TEXT###");
				var preppedContentCrossBrowserEnabled = isStartWithoutButton ? "###TEXT###" : (hasPrerequisitesForBase64Hack?"<img style=\"position:relative;top:0;left:0;width:100%;height:100%;margin:auto;\" src=\""+prepareBase64ForButton.slice(0,prepareBase64ForButton.indexOf("}"))+"} \"/><span style=\"position:absolute;top:0;bottom:0;left:0;width:100%;height:50%;margin:auto;\">###TEXT###</span>":"###TEXT###");
				bottomDiv.className = (ODP.Surveo.params.isMobileRenderer) ? "bottomDiv mobileOptimized" : "bottomDiv";
				bottomDiv.setAttribute('style', 'position:absolute;top:86%;width:100%;height:14%;overflow:hidden;'+((isGlobalizationPresentationSlide) ? "display:none;":""));
				
				var bottomDIVinnerHTML = "";
				var space = (((ODP.Surveo.params.isMobileRenderer) ? " " : "")); // WTF :)
				var clickHandler = ((ODP.Surveo.params.isMobileRenderer) ? 'ontouchstart' : 'onclick');
				var snippetBackButtonBackGround = ( hasPrerequisitesForBase64Hack ? "none;" : ((snippet["Slide back button"] != "") ? doc.getSnippet(snippet["Slide back button"])["Content"] : ""));
				var snippetBackButtonBadge = ((snippet["Back button badge"] !== '') ? doc.resource(snippet["Back button badge"]).replace("url('", "").replace("')", "") : '');
				var snippetNextButtonBackGround = (hasPrerequisitesForBase64Hack?"none;":((snippet["Slide next button"] != "") ? doc.getSnippet(snippet["Slide next button"])["Content"] : ""));
				var snippetNextButtonBadge = ((snippet["Next button badge"] !== '') ? doc.resource(snippet["Next button badge"]).replace("url('", "").replace("')", "") : '');
				var imgLeftPosition = (hasPrerequisitesForBase64Hack?"left:10%;":"left:20%;");
				var imgRightPosition = (hasPrerequisitesForBase64Hack?"right:10%;":"right:20%;");
				var onSingleButtonClickEvent = ((snippet["Navigator"] == "Thank you") ? 'onThankyouClick()' : 'onStartClick()');
				var snippetFirstNavButtonText = preppedContentCrossBrowserEnabled.replace("###TEXT###",firstNavButtonText);
				var snippetSecontNavButtonText = preppedContentCrossBrowserEnabled.replace("###TEXT###",secondNavButtonText);
				
				if(showTwoButtons) {
					bottomDIVinnerHTML = '<div class="buttonDiv'+ space +'" style="float:left;width:50%;height:100%;" ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.onPreviousClick();" >' +
												'<button id="PREV_' + subAllinstanceIDs + '" class="gradientNextPrev' + subAllinstanceIDs + ' navigationButtons" style="margin-left:0;left:' + ODP.Surveo.params.surveoLayoutParams.padding + '; background: ' + snippetBackButtonBackGround + '; background-size:100% 100%; text-decoration:bold; float:left; text-decoration:none; text-align:center;vertical-align:middle;background-position-x:50%;background-position-y:50%;background-repeat:repeat-x;"  ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.onPreviousClick()">' + snippetFirstNavButtonText +
													'<img src="' + snippetBackButtonBadge + '" style=" height:70%; width:15%; position:absolute;top:15%;'+ imgLeftPosition +' background-position-x:50%;background-position-y:50%;background-repeat:repeat-x;" />' +
												'</button>' +
											'</div>' +
											'<div class="buttonDiv" style="float:right;width:50%;height:100%;" ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.onNextClick();">' +
												'<button id="NEXT_' + subAllinstanceIDs + '" class="gradientNextPrev' + subAllinstanceIDs + ' navigationButtons" style="margin-left:0;background: ' + snippetNextButtonBackGround + ';background-size:100% 100%;float:right;right:' + ODP.Surveo.params.surveoLayoutParams.padding + ';text-decoration:none;text-align:center;background-position-x:50%;background-position-y:50%;background-repeat:repeat-x;"  ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.onNextClick()">' + snippetSecontNavButtonText + 
													'<img src="' + snippetNextButtonBadge + '" style="height:70%; width:15%; position:absolute;top:15%;'+ imgRightPosition +'background-position-x:50%;background-position-y:50%;background-repeat:repeat-x"/>' +
												'</button>' + 
											'</div>';
					
				} else {
					if(showSingleButton) {
							bottomDIVinnerHTML = '<div class="buttonDiv" style="visibility:hidden;opacity:1;width:100%;height:100%;background-position-x:50%;background-position-y:50%;background-repeat:repeat-x"  ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.' + onSingleButtonClickEvent + '" >' +
													'<button id="CNT_' + subAllinstanceIDs + '" class="gradientNextPrev' + subAllinstanceIDs + '" style="font-size:1.1em;visibility:visible;opacity:1;left:20%;float:none;text-decoration:none;text-align:center;background-size:100% 100%;background-position-x:50%;background-position-y:50%;background-repeat:repeat-x" ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.' + onSingleButtonClickEvent + '">' + snippetFirstNavButtonText +'</button>' +
												 '</div>';
					} else {
						if(isStartWithoutButton) {
							bottomDIVinnerHTML = '<div class="" style="visibility:visible;opacity:1;width:100%;height:100%;background-position-x:50%;background-position-y:50%;background-repeat:repeat-x;"  ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.' + onSingleButtonClickEvent + '" >' +
													'<span id="CNT_' + subAllinstanceIDs + '" class="' + subAllinstanceIDs + '" style="color:' + snippet["Button Font Color"] + ';display: block;height: 100%;visibility: visible; font-family:' + ODP.Surveo.params.defaultFontFamily + '; font-weight: bold;-webkit-text-shadow: black 0.05em 0.05em 0.05em;text-shadow: rgb(36, 36, 36) 0.05em 0.05em 0.2em;font-size: 2.5em;" ' + clickHandler + '="ODP.Surveo.methods[\'_killBubbles\'](event);ODP.Surveo.methods.' + onSingleButtonClickEvent + '">' + snippetFirstNavButtonText +'</span>' +
												 '</div>';
						} else {
							bottomDIVinnerHTML = '';
						}
					}
				}

				bottomDiv.innerHTML = bottomDIVinnerHTML;
				
				progressBack.appendChild(progressMark);
				if (ODP.Surveo.params.progressValuePosition == "Stationary") {
					progressBack.appendChild(progressTextStat);
				}
				if (ODP.Surveo.params.progressValuePosition == "Chasing") {
					progressMark.appendChild(progressTextStat);
				}
				progressDiv.appendChild(progressBack);
				topDiv.appendChild(progressDiv);
				topDiv.appendChild(restartDiv);
				if(hasPrerequisitesForBase64Hack){
					mainDiv.appendChild(picBg);
				}
				mainDiv.appendChild(topDiv);
				mainDiv.appendChild(qstnHolder);
				mainDiv.appendChild(bottomDiv);
				progressDiv = null;
				restartDiv = null;
				topDiv = null;
				bottomDiv = null;
				var dummyDiv = document.createElement('div');
				//mainDiv.innerHTML += ODP.Surveo.methods.addStyleTagsProperly('<style> #MAIN_' + snippet['com.opendataplatform.document.id'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Slide background"] != "") ? doc.getSnippet(snippet["Slide background"])["Content"] : "") + ';}  .*gradientNextPrev' + subAllinstanceIDs + ':active, .buttonDiv*:active .gradientNextPrev' + subAllinstanceIDs + '{top:23%;color:silver;transition-duration:50ms;-webkit-transition-duration:50ms;-o-transition-duration:50ms;}.*gradientNextPrev' + subAllinstanceIDs + ':active img{opacity:0.6;}.gradientNextPrev' + subAllinstanceIDs + '{margin-left:10%;border:none;box-shadow:0 0 2px black;-webkit-box-shadow:0 0 2px black;-webkit-border-radius:0.2em;-moz-border-radius:0.2em;-o-border-radius:0.2em;text-shadow:#000 0.05em 0.05em 0.05em;-webkit-text-shadow:#000 0.05em 0.05em 0.05em;border-radius:0.2em;;font-weight:bold;position:absolute;top:20%;width:40%;font-size:' + (((ODP.Surveo.params.isMobileRenderer || ODP.Surveo.params.surveoLayout === 'PDA/Cell (320x480)')) ? '1em' : '1.2em') + ';color:' + snippet["Button Font Color"] + ';font-family:' + ODP.Surveo.params.defaultFontFamily + ' ;height:60%;float:left;background:' + (hasPrerequisitesForBase64Hack?"none;":doc.resource(snippet["Button Background"])) + '}</style>');
				
				var css = [
					'#MAIN_' + snippet['com.opendataplatform.document.id'].replace("{", "").replace("}", "") + '{',
						'background:' + ((snippet["Slide background"] != "") ? doc.getSnippet(snippet["Slide background"])["Content"] : "") + ';',
					'}',
					'.gradientNextPrev' + subAllinstanceIDs + ':active, .buttonDiv:active .gradientNextPrev' + subAllinstanceIDs + '{',
						'top:23%;',
						'color:silver;',
					'}',
					'.gradientNextPrev' + subAllinstanceIDs + ':active img{',
						'opacity:0.6;',
					'}',
					'.gradientNextPrev' + subAllinstanceIDs + '{',
						'margin-left:10%;',
						'border:none;',
						'box-shadow:0 0 2px black;',
						'-webkit-box-shadow:0 0 2px black;',
						'-webkit-border-radius:0.2em;',
						'-moz-border-radius:0.2em;',
						'-o-border-radius:0.2em;',
						'text-shadow:#000 0.05em 0.05em 0.05em;',
						'-webkit-text-shadow:#000 0.05em 0.05em 0.05em;',
						'border-radius:0.2em;',
						'font-weight:bold;',
						'position:absolute;',
						'top:20%;',
						'width:40%;',
						'font-size:' + (((ODP.Surveo.params.isMobileRenderer || ODP.Surveo.params.surveoLayout === 'PDA/Cell (320x480)')) ? '1em' : '1.2em') + ';',
						'color:' + snippet["Button Font Color"] + ';',
						'font-family:' + ODP.Surveo.params.defaultFontFamily + ' ;',
						'height:60%;',
						'float:left;',
						'background:' + (hasPrerequisitesForBase64Hack ? "none;" : doc.resource(snippet["Button Background"])) + ';',
						'*transition-duration:50ms;',
						'*-webkit-transition-duration:50ms;',
						'*-o-transition-duration:50ms;',
						"-webkit-backface-visibility: hidden;",
						"-webkit-perspective: 1000;",
						"-webkit-transform: translate3d(0, 0, 0);",
					'}'
				
				];
				
				ODP.document.addRulesToMainStyleSheet(css.join(''));
				
				
				dummyDiv.appendChild(mainDiv);
				mainDiv = null;
				return dummyDiv.innerHTML;
			}
		}}},{"com.opendataplatform.document.id":"{BBA6D665-86F6-4D54-8DF7-9777D118C0FB}","manifest":{"name":"Surveo Question - Image","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display Once","datatype":"nvarchar","defaultvalue":"No"},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Question Template","datatype":"nvarchar","defaultvalue":""},{"name":"Answers","datatype":"nvarchar","defaultvalue":""},{"name":"Selection Image","datatype":"nvarchar","defaultvalue":""},{"name":"Show Answers Text","datatype":"bit","defaultvalue":1},{"name":"Answers per line","datatype":"nvarchar","defaultvalue":3},{"name":"Answers Layout","datatype":"nvarchar","defaultvalue":"Auto"},{"name":"Answers Text Color","datatype":"nvarchar","defaultvalue":""},{"name":"Move Next","datatype":"nvarchar","defaultvalue":"On Answer Selection"}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var mainDiv = '<div id="' + instanceID + '" style="width:100%; height:100%; position:relative; overflow:hidden;">';
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var snippet = ODP.document.getSnippet(instanceID);
			var questionObj;

			if (typeof ODP.Surveo.snippets.surveoImg === "undefined") {
				ODP.Surveo.snippets.surveoImg = {
					"getInstData" : function (id) { // Returns the instance data about the specific ranking question
						var imgGrid = ODP.Surveo.snippets.surveoImg;
						if (typeof(imgGrid.instData[id]) === "undefined") {
							getInitData(id);
						}
						return imgGrid.instData[id];
					},
					"setAnswer" : function (e, instanceID, questionID) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						var changedTouche = (ODP.Surveo.params.isMobileRenderer) ? e.touches[0] : e;
						var el = (changedTouche.target) ? changedTouche.target : changedTouche.srcElement;
						if (el.id.search("clonning") >= 0 || el.id.length === 0 || typeof el.id.split("_")[1] === "undefined") {
							return;
						}
						var el_index = parseInt(el.id.split("_")[1], 10);

						ODP.Surveo.methods.sm_setanswer(questionID, el_index, true);
					},
					"setFunction" : function (qID, aID, isClick) {
						if (typeof qID === "undefined" || typeof aID === "undefined" || typeof isClick === "undefined" || buttonsLock === 1) {
							return;
						}
						aID = parseInt(aID, 10);
						//aID = isClick ? aID : (aID-1);
						ODP.Surveo.params.surveyResults[qID] = parseInt(aID, 10) + 1;
						var srvImg = ODP.Surveo.snippets.surveoImg;
						var instanceID = srvImg.questionsWithInstanceID[qID];
						var instData = srvImg.getInstData(instanceID);
						var settings = instData["settings"];
						var imageScaleFactorReset = settings.imageScaleFactorReset - 0.2;
						var imageScaleFactorActive = settings.imageScaleFactorActive;
						var imageScaleFactorExplode = settings.imageScaleFactorExplode;
						var el = instData["clonnings"][aID];
						var el_index = parseInt(el.id.split("_")[1], 10);
						if (el.id.search("images") !== -1 || (!ODP.Surveo.snippets.surveoImg["isSafeToAnimate"] && isClick)) {
							return;
						}

						var images = instData["images"];
						var clonnings = instData["clonnings"];
						var cloneElement;
						var selection;

						if (ODP.Surveo.params.deploymentTarget.isOldBrowser) {

							var imagesLength = images.length;

							instData["activeNumber"] = aID;
							if (instData["haveCheckPic"]) {
								selection = instData["selection"];
							}

							for (var imgI = 0, len = images.length; imgI < len; imgI++) {
								images[imgI].className = "image" + instanceID;
								clonnings[imgI].className = "clonning" + instanceID;
								this.setScaleFactor(images[imgI], imageScaleFactorReset);
								this.setScaleFactor(clonnings[imgI], imageScaleFactorReset);
								clonnings[imgI].style["marginLeft"] = "-" + ((imagesLength > 2 ? 8 : 11) * imageScaleFactorReset) + "em";

								if (instData["haveCheckPic"]) {
									selection[imgI].style["opacity"] = "0";
									selection[imgI].style["filter"] = "alpha(opacity=0)";
								}

							}

							cloneElement = clonnings[el_index];

							this.setScaleFactor(images[el_index], imageScaleFactorActive);
							this.setScaleFactor(cloneElement, imageScaleFactorActive);

							if (isClick) {
								var scaleOdd = imagesLength > 2 ? 8 : 11;
								

								ODP.Surveo.snippets.slide.itemsForAnimation = [{
										ref : cloneElement,
										property : "opacity",
										tweens : ODP.Surveo.snippets.surveoImg.getFrames(0.9, 0, "", "")
									}
								];

								if (ODP.Surveo.params.deploymentTarget.supportsCSS("msTransform")) {
									cloneElement.style["marginLeft"] = "-" + (scaleOdd * imageScaleFactorActive) + "em";
									cloneElement.style["zIndex"] = "10000";
									cloneElement.style["visibility"] = "visible";
								
									ODP.Surveo.snippets.slide.itemsForAnimation.push({
										ref : cloneElement,
										property : "msTransform",
										tweens : ODP.Surveo.snippets.surveoImg.getFrames(imageScaleFactorActive, imageScaleFactorExplode, "scale(", ")")
									});
								} else {
									var firstMarginLeft = -(scaleOdd + 0.1 * (scaleOdd));
									var lastMarginLeft = -(scaleOdd + 6 * (scaleOdd / 2));
									var firstMarginTop =  -(0 * (scaleOdd / 2.5));
									var lastMarginTop = -(6 * (scaleOdd / 2.5));
									
									if (instData["haveCheckPic"]) {
										selection[el_index].style["filter"] = "";
										selection[el_index].style["opacity"] = "1";
									}
									// cloneElement.style["visibility"] = "hidden";
									// ODP.Surveo.snippets.surveoImg.setScaleFactor(cloneElement, imageScaleFactorActive);
									// cloneElement.style["zIndex"] = "";
									ODP.Surveo.snippets.surveoImg.isSafeToAnimate = true;

									if (ODP.Surveo.params.questionData[qID].getMoveNext() && isClick) {
										ODP.Surveo.snippets.slide["_slideNext"]();
									}
									return;
									// ODP.Surveo.snippets.slide.itemsForAnimation.push({
										// ref : cloneElement,
										// property : "zoom",
										// tweens : ODP.Surveo.snippets.surveoImg.getFrames(imageScaleFactorActive, imageScaleFactorExplode, "", "")
									// });
									// ODP.Surveo.snippets.slide.itemsForAnimation.push({
										// ref : cloneElement,
										// property : "marginLeft",
										// tweens : ODP.Surveo.snippets.surveoImg.getFrames(firstMarginLeft, lastMarginLeft, "", "em")
									// });
									// ODP.Surveo.snippets.slide.itemsForAnimation.push({
										// ref : cloneElement,
										// property : "marginTop",
										// tweens : ODP.Surveo.snippets.surveoImg.getFrames(firstMarginTop, lastMarginTop, "", "em")
									// });
								}

								ODP.Surveo.snippets.slide.animator(ODP.Surveo.snippets.slide.itemsForAnimation, {
									"callback" : function () {
										if (instData["haveCheckPic"]) {
											selection[el_index].style["filter"] = "";
											selection[el_index].style["opacity"] = "1";
										}
										cloneElement.style["msTransform"] = "scale(1)";
										cloneElement.style["visibility"] = "hidden";
										ODP.Surveo.snippets.surveoImg.setScaleFactor(cloneElement, imageScaleFactorActive);
										cloneElement.style["zIndex"] = "";
										ODP.Surveo.snippets.surveoImg.isSafeToAnimate = true;

										if (ODP.Surveo.params.questionData[qID].getMoveNext() && isClick) {
											ODP.Surveo.snippets.slide["_slideNext"]();
										}
									}
								});

								ODP.Surveo.snippets.surveoImg.isSafeToAnimate = false;
							} else {
								if (instData["haveCheckPic"]) {
									selection[el_index].style["filter"] = "";
									selection[el_index].style["opacity"] = "1";
								}
							}
						} else {

							instData["activeNumber"] = aID;
							if (instData["haveCheckPic"]) {
								selection = instData["selection"];
							}

							for (var imageN = 0, lengthI = images.length; imageN < lengthI; imageN++) {
								images[imageN].className = "image" + instanceID;
								clonnings[imageN].className = "clonning" + instanceID;
								this.setScaleFactor(images[imageN], imageScaleFactorReset);
								this.setScaleFactor(clonnings[imageN], imageScaleFactorReset);

								if (instData["haveCheckPic"]) {
									selection[imageN].style["opacity"] = "0";
									selection[imageN].style["filter"] = "alpha(opacity=0)";
								}
							}
							cloneElement = clonnings[el_index];

							this.setScaleFactor(images[el_index], imageScaleFactorActive);
							this.setScaleFactor(cloneElement, imageScaleFactorActive);

							var timeForAnimation = (isClick) ? settings.milisecondsForAnimation : 0; //in miliseconds
							var marginLeft = ("-" + images[0].offsetWidth + "px");

							if (isClick) {
								cloneElement.setStyle("marginLeft", marginLeft);
								cloneElement.style["visibility"] = "visible";
								cloneElement.style["-webkit-animation"] = "explodeAnimation " + timeForAnimation + "ms";
								cloneElement.style["-moz-animation"] = "explodeAnimation " + timeForAnimation + "ms";
								cloneElement.style["-ms-animation"] = "explodeAnimation " + timeForAnimation + "ms";
								cloneElement.style["-o-animation"] = "explodeAnimation " + timeForAnimation + "ms";
								cloneElement.style["animation"] = "explodeAnimation " + timeForAnimation + "ms";
								ODP.Surveo.snippets.surveoImg["isSafeToAnimate"] = false;
								
								if (instData["haveCheckPic"]) {
									selection[el_index].style["opacity"] = "1";
								}
								
								setTimeout(function () {
									if (!ODP.Surveo.snippets.surveoImg["isSafeToAnimate"]) {
										cloneElement.style["-webkit-animation"] = "";
										cloneElement.style["-moz-animation"] = "";
										cloneElement.style["-ms-animation"] = "";
										cloneElement.style["-o-animation"] = "";
										cloneElement.style["animation"] = "";
										cloneElement.style["visibility"] = "hidden";

										ODP.Surveo.snippets.surveoImg["isSafeToAnimate"] = true;

										if (ODP.Surveo.params.questionData[qID].getMoveNext() && isClick) {
											ODP.Surveo.snippets.slide["_slideNext"]();
										}
									}
								}, timeForAnimation + 10); //for animation safety
							} else {
								if (instData["haveCheckPic"]) {
									selection[el_index].style["opacity"] = "1";
								}
							}

						}

					},
					"resetFunction" : function (qid) {
						var srvImg = ODP.Surveo.snippets.surveoImg;
						var instanceID = srvImg.questionsWithInstanceID[qid];
						var instData = srvImg.getInstData(instanceID);
						var settings = instData["settings"];
						var imageScaleFactorReset = settings.imageScaleFactorReset;
						var images = instData["images"];
						var clonnings = instData["clonnings"];
						if (instData["haveCheckPic"]) {
							var selection = instData["selection"];
						}

						for (var imageNum = 0, len = images.length; imageNum < len; imageNum++) {
							this.setScaleFactor(images[imageNum], imageScaleFactorReset);
							this.setScaleFactor(clonnings[imageNum], imageScaleFactorReset);

							if (ODP.Surveo.params.deploymentTarget.isOldBrowser) {
								var cloneElement = clonnings[imageNum];
								cloneElement.style["marginLeft"] = "-" + (8 * imageScaleFactorReset) + "em";
							}

							if (instData["haveCheckPic"]) {
								selection[imageNum].style["opacity"] = "0";
								selection[imageNum].style["filter"] = "alpha(opacity=0)";
							}
						}

						instData["activeNumber"] = "";

						delete ODP.Surveo.params.surveyResults[qid];
					},
					"onMouseOver" : function (e, instanceID) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						var changedTouche = (ODP.Surveo.params.isMobileRenderer) ? e.touches[0] : e;
						var el = (changedTouche.target) ? changedTouche.target : changedTouche.srcElement;

						if (el.id.length === 0 || typeof el.id.split("_")[1] === "undefined") {
							return;
						}
						var instData = ODP.Surveo.snippets.surveoImg.getInstData(instanceID);
						var el_index = parseInt(el.id.split("_")[1], 10);

						instData["images"][el_index].className = (el_index !== parseInt(instData["activeNumber"], 10)) ? instData["images"][el_index].className + "hover" : instData["images"][el_index].className;

					},
					"onMouseOut" : function (e, instanceID) {
						e.preventDefault ? e.preventDefault() : e.returnValue = false;
						var changedTouche = (ODP.Surveo.params.isMobileRenderer) ? e.touches[0] : e;
						var el = (changedTouche.target) ? changedTouche.target : changedTouche.srcElement;

						if (el.id.length === 0 || typeof el.id.split("_")[1] === "undefined") {
							return;
						}

						var instData = ODP.Surveo.snippets.surveoImg.getInstData(instanceID);
						var el_index = parseInt(el.id.split("_")[1], 10);

						instData["images"][el_index].className = instData["images"][el_index].className.replace("hover", "");
					},
					"setScaleFactor" : function (el, scaleFactor) { // Set scale factor for the element
						el.style.webkitTransform = "translate3d(0,0,0) scale(" + scaleFactor.toString() + ")";
						el.style.MozTransform = "translate3d(0,0,0) scale(" + scaleFactor.toString() + ")";
						el.style.msTransform = "scale(" + scaleFactor.toString() + ")";
						el.style.OTransform = "scale(" + scaleFactor.toString() + ")";
						el.style.Transform = "scale(" + scaleFactor.toString() + ")";
						if (ODP.Surveo.params.deploymentTarget.isOldBrowser) {
							if(el.id.indexOf("image_") > -1) {
								el.style.zoom = scaleFactor.toString();
							}
						}
					},
					"getFrames" : function (from, to, preffix, suffix) {
						var animDelta = Math.abs(from - to);
						var frameCount = ODP.Surveo.snippets.slide.animationStyle.length;
						var arrFrames = [];
						var newFrame = from;
						var ammount = 0;
						for (var index = 0; index < frameCount; index++) {
							ammount = (animDelta * ODP.Surveo.snippets.slide.animationStyle[index] / 100);
							newFrame = (from - to) < 0 ? newFrame + ammount : newFrame - ammount;
							arrFrames.push((preffix ? preffix : "") + newFrame + (suffix ? suffix : ""));
						}
						return arrFrames;
					},
					"isSafeToAnimate" : true
				};

			}

			if (typeof ODP.Surveo.snippets.surveoImg["instData"] === "undefined") {
				ODP.Surveo.snippets.surveoImg["instData"] = [];
			}

			var initialSettingsForSnippet = {
				"milisecondsForAnimation" : (typeof snippet["milisecondsForAnimation"] === "undefined" ? 400 : snippet["milisecondsForAnimation"]),
				"imageScaleFactorActive" : (typeof snippet["imageScaleFactorActive"] === "undefined" ? 1 : snippet["imageScaleFactorActive"]),
				"imageScaleFactorReset" : (typeof snippet["imageScaleFactorReset"] === "undefined" ? (ODP.Surveo.params.deploymentTarget.isOldBrowser) ? 0.9 : 0.8 : snippet["imageScaleFactorReset"]),
				"imageScaleFactorHover" : (typeof snippet["imageScaleFactorHover"] === "undefined" ? 0.9 : snippet["imageScaleFactorHover"]),
				"imageScaleFactorExplode" : (typeof snippet["imageScaleFactorExplode"] === "undefined" ? 5 : snippet["imageScaleFactorExplode"])
			};

			function getInitData(id) {
				var imageGridContainer = ODP.window.document.getElementById("imageGridContainer" + id);
				if(!imageGridContainer) { return; }
				var images = imageGridContainer.querySelectorAll(".image" + id);
				var clonnings = imageGridContainer.querySelectorAll(".clonning" + id);
				var selection = imageGridContainer.querySelectorAll(".selection" + id);

				var haveCheckPic = (selection.length > 0);
				var instObj = {
					"imageGridContainer" : imageGridContainer,
					"images" : [],
					"clonnings" : [],
					"selection" : [],
					"haveCheckPic" : haveCheckPic,
					"activeNumber" : "",
					"settings" : initialSettingsForSnippet
				};

				for (var imageI = 0, len = images.length; imageI < len; imageI++) {
					instObj["images"].push(images[imageI]);
					instObj["clonnings"].push(clonnings[imageI]);
					if (haveCheckPic) {
						instObj["selection"].push(selection[imageI]);
					}
				}

				ODP.Surveo.snippets.surveoImg.instData[id] = instObj;
			}

			function getCssStyles() {
				var str = [];
				var imagesCount = questionObj["questionAnswers"].length;
				var imagesScaleFactor = imagesCount > 2 ? 8 : 10;
				var imagesWidthAndHeight = imagesScaleFactor + "em"; // trqbva da izmislish cool way da se smqta i da izglejda esteticheski dobre
				//imagesWidthAndHeight = "100%";
				var snippetAnswersCountPerLine = (questionObj["questionAnswers"].length > 3) ? (snippet["Answers per line"] ? snippet["Answers per line"] : 3) : questionObj["questionAnswers"].length;
				//var snippetAnswersCountPerLine = snippet["Answers per line"] ? snippet["Answers per line"] : 3;
				var percentPerAnswer = 100 / snippetAnswersCountPerLine; // ot parametyra na snippeta trqbva da se smqta (max answers per line)
				var startingScaleFactorForImages = initialSettingsForSnippet.imageScaleFactorReset;
				var millisecondsForExplode = initialSettingsForSnippet.milisecondsForAnimation;
				var millisecondsForHover = 0;
				var imagesLinesFactor = imagesCount % snippetAnswersCountPerLine;
				var lines = 0;

				switch (imagesLinesFactor) {
					case 0:
						lines = imagesCount / snippetAnswersCountPerLine;
						break;
					case imagesLinesFactor > 0.5:
						lines = Math.round((imagesCount / snippetAnswersCountPerLine));
						break;
					default:
						lines = Math.round((imagesCount / snippetAnswersCountPerLine + 0.5));
						break;
				}

				/* WARNING THIS IS VERY SPECIAL */
				//better to hardcode the values
				var fontSizeToimageLines = 0;
				switch (lines) {
					case 1:
						fontSizeToimageLines = 100;
						break;
					case 2:
						fontSizeToimageLines = 85;
						break;
					case 3:
						fontSizeToimageLines = 50;
						break;
					case 4:
						fontSizeToimageLines = 42;
						break;
					case 5:
						fontSizeToimageLines = 34;
						break;
					default:
						fontSizeToimageLines = 28;
						break;
				}
				/* ME TOLD YA, THANK YOU */
				//str.push('<style>');
				str.push('#imagesList' + subAllinstanceIDs + ' {');
					str.push('list-style-type: none;');
					str.push('display: inline-block;');
					str.push('width: 100%;');
					str.push('padding: 1em;');
					str.push('-webkit-padding-start: 0px;');
					str.push('-webkit-margin-after: 0em;');
					str.push('-webkit-margin-before: 0em;');
					str.push('-webkit-transform: translate3d(0,0,0);');
					str.push('-moz-transform: translate3d(0,0,0);');
					str.push('-ms-transform: translate3d(0,0,0);');
					str.push('-o-transform: translate3d(0,0,0);');
					str.push('transform: translate3d(0,0,0);');
					str.push('font-size: ' + fontSizeToimageLines + '%;');
				str.push('}');
				str.push('.image' + subAllinstanceIDs + ' {');
					str.push('position: relative;');
					str.push('z-index: 1000;');
					str.push('opacity: 1;');
					str.push('width: 100%;');
					str.push('max-width: ' + imagesWidthAndHeight + ';');
					if(ODP.Surveo.params.deploymentTarget.isOldBrowser) {
						str.push('height: 100%;');
						str.push('max-height: ' + imagesWidthAndHeight + ';');
					}
					str.push('-webkit-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-moz-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-ms-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-o-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-webkit-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('-moz-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('-o-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('transition-duration: ' + millisecondsForExplode + 'ms;');
				str.push('}');
				str.push('.image' + subAllinstanceIDs + 'hover {');
					str.push('position: relative;');
					str.push('z-index: 1000;');
					str.push('opacity: 1;');
					str.push('width: 100%;');
					str.push('max-width: ' + imagesWidthAndHeight + ';');
					if(ODP.Surveo.params.deploymentTarget.isOldBrowser) {
						str.push('height: 100%;');
						str.push('max-height: ' + imagesWidthAndHeight + ';');
					}
					str.push('cursor: pointer;');
					str.push('-webkit-transform: translate3d(0,0,0) scale(' + (startingScaleFactorForImages + 0.1) + ') !important;');
					str.push('-moz-transform: translate3d(0,0,0) scale(' + (startingScaleFactorForImages + 0.1) + ') !important;');
					str.push('-ms-transform: scale(' + (startingScaleFactorForImages + 0.1) + ') !important;');
					str.push('-o-transform: scale(' + (startingScaleFactorForImages + 0.1) + ') !important;');
					str.push('transform: scale(' + (startingScaleFactorForImages + 0.1) + ') !important;');
					str.push('-webkit-transition-duration: ' + millisecondsForHover + 'ms;');
					str.push('-moz-transition-duration: ' + millisecondsForHover + 'ms;');
					str.push('-o-transition-duration: ' + millisecondsForHover + 'ms;');
					str.push('transition-duration: ' + millisecondsForHover + 'ms;');
				str.push('}');
				str.push('.clonning' + subAllinstanceIDs + ' {');
					str.push('position: absolute;');
					str.push('opacity: 1;');
					str.push('visibility: hidden;');
					str.push('width: 100%;');
					str.push('max-width: ' + imagesWidthAndHeight + ';');
					if(ODP.Surveo.params.deploymentTarget.isOldBrowser) {
						str.push('height: 100%;');
						str.push('max-height: ' + imagesWidthAndHeight + ';');
					}
					str.push('-webkit-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-moz-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-ms-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-o-transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('transform: translate3d(0,0,0) scale(' + startingScaleFactorForImages + ');');
					str.push('-webkit-animation-timing-function: ease-out;');
					str.push('-moz-animation-timing-function: ease-out;');
					str.push('-ms-animation-timing-function: ease-out;');
					str.push('-o-animation-timing-function: ease-out;');
					str.push('animation-timing-function: ease-out;');
				str.push('}');
				str.push('.selection' + subAllinstanceIDs + ' {');
					str.push('position: relative;');
					str.push('opacity: 0;');
					str.push('width: ' + imagesScaleFactor / 2.5 + 'em;');
					str.push('margin-left: -' + imagesScaleFactor / 2.5 + 'em;');
					str.push('max-width: ' + imagesWidthAndHeight + ';');
					str.push('z-index: 10000;');
					str.push('filter: alpha(opacity=0);');
					str.push('-webkit-transform: translate3d(0,0,0);');
					str.push('-moz-transform: translate3d(0,0,0);');
					str.push('-ms-transform: translate3d(0,0,0);');
					str.push('-o-transform: translate3d(0,0,0);');
					str.push('transform: translate3d(0,0,0);');
					str.push('-webkit-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('-moz-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('-o-transition-duration: ' + millisecondsForExplode + 'ms;');
					str.push('transition-duration: ' + millisecondsForExplode + 'ms;');
				str.push('}');
				str.push('.imagesContainer' + subAllinstanceIDs + ' {');
					str.push('display: inline-block;');
					str.push('width: ' + percentPerAnswer + '%;');
					str.push('vertical-align: top;');
					str.push('-webkit-transform: translate3d(0,0,0);');
					str.push('-moz-transform: translate3d(0,0,0);');
					str.push('-ms-transform: translate3d(0,0,0);');
					str.push('-o-transform: translate3d(0,0,0);');
					str.push('transform: translate3d(0,0,0);');
				str.push('}');
				str.push('.text_' + subAllinstanceIDs + ' {');
					str.push('color: ' + ODP.Surveo.params.bodyTextColor + '; font-family: ' + ODP.Surveo.params.defaultFontFamily + '; font-size:100%; word-wrap: break-word; font-weight: bold;');
				str.push('}');
				//str.push('</style>');
				return str.join('');
			}

			function getHTMLStructure() {
				var html = [];
				var answers = [];
				var selectedQuestionID = snippet["Question ID"];

				if(!ODP.Surveo.snippets.surveoImg.haveAnimationsAdded) {
					html.push('<style>@keyframes 			explodeAnimation{ 0% { opacity: 1; z-index: 10000;  } 100% { opacity: 0; z-index: 0; transform: 			scale(' + initialSettingsForSnippet.imageScaleFactorExplode + '); }} ');
					html.push('@-webkit-keyframes 	explodeAnimation{ 0% { opacity: 1; z-index: 10000;  } 100% { opacity: 0; z-index: 0; -webkit-transform: 	translate3d(0px,0px,0px) scale(' + initialSettingsForSnippet.imageScaleFactorExplode + '); }} ');
					html.push('@-moz-keyframes 		explodeAnimation{ 0% { opacity: 1; z-index: 10000;  } 100% { opacity: 0; z-index: 0; -moz-transform: 		translate3d(0px,0px,0px) scale(' + initialSettingsForSnippet.imageScaleFactorExplode + '); }} ');
					html.push('@-ms-keyframes 		explodeAnimation{ 0% { opacity: 1; z-index: 10000;  } 100% { opacity: 0; z-index: 0; -ms-transform: 		translate3d(0px,0px,0px) scale(' + initialSettingsForSnippet.imageScaleFactorExplode + '); }} ');
					html.push('@-o-keyframes 		explodeAnimation{ 0% { opacity: 1; z-index: 10000;  } 100% { opacity: 0; z-index: 0; -o-transform:			scale(' + initialSettingsForSnippet.imageScaleFactorExplode + '); }} ');
					html.push(' .fakeClasssssssssssssss {}</style>');
					ODP.Surveo.snippets.surveoImg.haveAnimationsAdded = true;
				}
				
				var functionClick = "ODP.Surveo.snippets.surveoImg.setAnswer(event, '" + subAllinstanceIDs + "', " + selectedQuestionID + ")";
				var functionMouseOver = "ODP.Surveo.snippets.surveoImg.onMouseOver(event, '" + subAllinstanceIDs + "')";
				var functionMouseOut = "ODP.Surveo.snippets.surveoImg.onMouseOut(event, '" + subAllinstanceIDs + "')";
				var eventHandler = (ODP.Surveo.params.isMobileRenderer) ? ("ontouchstart = \"" + functionClick + "\"") : ("onmousedown = \"" + functionClick + "\"; onmouseover = \"" + functionMouseOver + "\"; onmouseout = \"" + functionMouseOut + "\"; ");
				ODP.document.addRulesToMainStyleSheet(getCssStyles());
				html.push('<div id = "imageGridContainer' + subAllinstanceIDs + '" style = "height:100%; width: 100%;"><ul id = "imagesList' + subAllinstanceIDs + '" ' + eventHandler + '>');
				var lastTextNodeStyle = '';
				for (var i = 0, len = questionObj["questionAnswers"].length; i < len; i++) {
					html.push('<li class = "imagesContainer' + subAllinstanceIDs + '">');
					html.push('<img id = "image_' + i + '_' + subAllinstanceIDs + '" class = "image' + subAllinstanceIDs + '" src = "' + questionObj["questionAnswers"][i]["image"] + '"/>');
					html.push('<img id = "clonning_' + i + '_' + subAllinstanceIDs + '" class = "clonning' + subAllinstanceIDs + '" src = "' + questionObj["questionAnswers"][i]["image"] + '"/>');
					if (questionObj["Selection Image"]) {
						html.push('<img id = "selection_' + i + '_' + subAllinstanceIDs + '" class = "selection' + subAllinstanceIDs + '" src = "' + questionObj["Selection Image"] + '"/>');
					}
					if (i == len - 1) {
						lastTextNodeStyle = 'margin-bottom: 1em;';
					}

					html.push('<p style = "' + lastTextNodeStyle + '" class = "imageAnswerOptionText text_' + subAllinstanceIDs + '">' + questionObj["questionAnswers"][i]["text"] + '</p>');
					html.push('</li>');
					answers.push(i);
				}

				html.push('</ul></div>');

				ODP.Surveo.params.questionData[selectedQuestionID] = new ODP.Surveo.questionObject(
					/*Answers*/ answers,
					/*MainDivID*/ "MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
					/*Hidden Answers*/ [],
					/*hideAnswers function*/ function () {},
					/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
					/*isRequired*/ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false,
					/* moveNext */ (snippet['Move Next'].toLowerCase() == 'on answer selection'),
					/* setFunction */ function (qID, aID, isclick) {
						ODP.Surveo.snippets.surveoImg.setFunction(qID, aID, isclick);
					},
					/* resetFunction */ function () {
						ODP.Surveo.snippets.surveoImg.resetFunction(selectedQuestionID);
					},
					/* questionProtoID */ selectedQuestionID,
					/* Display Once */ (snippet['Display Once'] == 'Yes'),
					/* Orientation Change */ function () {},
					/* ColorCode Function */ function () {},
					/* continuousSumQuestionsAsArray */ "",
					/* setLiteralsFunction */ function (params) {
						var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
						
						if(params['questionText']) {
							questionSlide.querySelector(".imageQuestionText").innerHTML = params['questionText'];
						}
						
						if(params['answersText']) {
							var answerOptions = questionSlide.querySelectorAll(".imageAnswerOptionText");
							for(var a = 0, len = params['answersText'].length; a < len; a++) {
								answerOptions[a].innerHTML = params['answersText'][a];
							}
						}
						
						// switch (option) {
							// case "q":
								// questionSlide.querySelector(".imageQuestionText").innerHTML = arrayOfTexts;
								// break;
							// case "a":
								// var answerOptions = questionSlide.querySelectorAll(".imageAnswerOptionText");
								// for(var a = 0, len = arrayOfTexts.length; a < len; a++) {
									// answerOptions[a].innerHTML = arrayOfTexts[a];
								// }
								// break;
							// default: // impossible
								// break;
						// }
					}
				);

				var endHtml = ReplaceInsideTheTemplate(html.join(''));
				return endHtml;
			}

			function setQuestionAndInstanceID() {
				if (typeof ODP.Surveo.snippets.surveoImg.questionsWithInstanceID === "undefined") {
					ODP.Surveo.snippets.surveoImg.questionsWithInstanceID = {};
				}
				ODP.Surveo.snippets.surveoImg.questionsWithInstanceID[snippet["Question ID"]] = subAllinstanceIDs;
			}

			function updateSnippetTitle(text) {
				snippet.instance[ODP.document.findIndexByName(snippet.instance, "Title")].value = text;
				if (renderer === "design") {
					ODP.document.updateJSON(snippet.instance);
				}
			}

			function ReplaceInsideTheTemplate(content) {
				var template = GetTemplate();
				var questionText = "<span class = 'imageQuestionText'>" + questionObj["questionText"] + "</span>";
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", ODP.Surveo.params.defaultFontFamily);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", questionText);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###", content);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###", ODP.Surveo.params.headerTextColor);
				return template;
			}

			function GetTemplate() { // Returns the question template to be used
				if (snippet["Question Template"] !== "") {
					return ODP.document.resource(snippet["Question Template"]);
				} else {
					return ODP.document.resource(ODP.Surveo.params["defaultQuestionTemplate"]);
				}
			}

			function getImages(guid) {
				var ids = (guid) ? guid : snippet["Answers"];
				var list = [];
				var curImage;
				if (/(\{([0-9A-z]+-?)+\},?)+/.test(ids)) {
					ids = ids.split(",");
					var i = 0,
					len = ids.length;
					for (; i < len; i++) {
						if (ODP.document.isGUID(ids[i])) {
							if (typeof ODP.document.resource(ids[i]) !== "undefined") {
								curImage = ODP.document.resource(ids[i]);
								curImage = curImage.replace(";data:image","");
								if(curImage.indexOf("url('") > -1) {
									curImage = curImage.replace("url('", "").replace("')", "");
								}								
								if(curImage.indexOf('url("') > -1) {
									curImage = curImage.replace('url("', '').replace('")', '');
								}
								
								if(curImage.indexOf('url(') > -1) {
									curImage = curImage.replace('url(', '').replace(')', '');
								}
								list.push(curImage);
							}
						}
					}
				}
				return list;
			}

			function createQuestionObject(data) {
				questionObj  = {
					"questionText" : "",
					"questionAnswers" : [],
					"isCorrectData" : true
				};
				var questionID = snippet["Question ID"];
				var questionRowSet = data[3];
				var answersRowSet = data[4];
				var images = getImages();
				for (var i = 0, length = questionRowSet.length; i < length; i++) {
					if (questionID === questionRowSet[i]["ObjID"]) {
						var answersID = questionRowSet[i]["ProtoAnswerID"];
						questionObj["questionText"] = questionRowSet[i]["Text"];
						var protoAnswerID = questionRowSet[i]["ProtoAnswerID"];
						var counter = 0;
						for (var j = 0, len2 = answersRowSet.length; j < len2; j++) {
							if (answersRowSet[j]["ProtoAnswerID"] === answersID) {
								var answerObject = {
									"pos" : answersRowSet[j]["Pos"],
									"text" : answersRowSet[j]["Description"],
									"image" : (images[counter] ? images[counter] : images[images.length - 1])
								};
								if (typeof answerObject["image"] === "undefined") {
									questionObj["isCorrectData"] = false;
								}
								questionObj["questionAnswers"].push(answerObject);
								counter++;
							}
						}

					}
				}
				questionObj["Selection Image"] = (snippet["Selection Image"].length > 0) ? getImages(snippet["Selection Image"])[0] : undefined;
			}

			function OpenCallback(datasetname) { // Callback when we have ready data
				try {
					var data = Open.getDataSet(datasetname).data;
					createQuestionObject(data);
					var html = '';
					
					if (questionObj["isCorrectData"]) {
						updateSnippetTitle(questionObj["questionText"]);
						setQuestionAndInstanceID();
						html = getHTMLStructure();

					}

					var target = ODP.window.document.getElementById(instanceID);
					if (target !== null) {
						var callback = [function () {
								var srvImg = ODP.Surveo.snippets.surveoImg;
								srvImg.getInstData(subAllinstanceIDs);
							}
						];

						ODP.Surveo.methods.addSnippetMarkupSafely(target, html, callback);
					} else {
						mainDiv += html;
					}

					if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
						var target1 = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
						if (target1) {
							target1.parentNode.removeChild(target1);
						}
					}
					//data = null;
				} catch (err) {
					console.log("Surveo Image Snippet Callback Error " + err);
				}
			}

			ODP.document.queue.add(function () {
				Open.listeners.add(ODP.Surveo.params.surveoDatasetLoaderID, OpenCallback);
			});

			return (mainDiv + '</div>').toString();
		},"destroy":function (instanceID) {
			if (typeof SM === 'undefined') {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var selectedQuestionID = snippet['Question ID'];
			delete ODP.Surveo.snippets.surveoImg.instData[subAllinstanceIDs];
			delete ODP.Surveo.params.questionData[selectedQuestionID];
		}}},{"com.opendataplatform.document.id":"{C1DDD86F-0487-4C5D-8DF0-94BB20DAA7A4}","manifest":{"name":"Surveo Question - Input","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Text input style","datatype":"nvarchar","defaultvalue":"One line"},{"name":"Text input type","datatype":"nvarchar","defaultvalue":"text"},{"name":"Text align","datatype":"nvarchar","defaultvalue":"text"},{"name":"Question Template","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display Once","datatype":"nvarchar","defaultvalue":"No"},{"name":"PlaceHolder","datatype":"nvarchar","defaultvalue":""},{"name":"Error Literal ID","datatype":"nvarchar","defaultvalue":"This question is mandatory"},{"name":"Globalized Literals","datatype":"nvarchar","defaultvalue":"This question is mandatory"}],"ui":{"render":function (instanceID, documentRef, renderer) {
			ODP.Surveo.params.slideCount++;
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var selectedQuestionID = snippet["Question ID"];
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var mainDiv = '<div id="' + instanceID + '" style="width:100%; height:100%; position:relative; overflow:hidden;">';
			
			ODP.Surveo.snippets.input_q = {
				"val_field" : function (e) {
					var keynum;
					var keychar;
					var numcheck;
					
					if (window.event) {
						keynum = e.keyCode;
					} else if (e.which) {
						keynum = e.which;
					}
					keychar = String.fromCharCode(keynum);
					return keychar;
				},
				
				"onFocusFunc" : function() {
					if (ODP.Surveo.params.deploymentTarget.fullBodyHeight <= 500) {
						ODP.window.document.querySelector(".surveyStructure").setStyle("minHeight", "300px");
					}
						
					if(ODP.Surveo.params.deploymentTarget.isWPhone) {
						ODP.Surveo.params.blockRotationHandling = true;
					}
					
					//ODP.Surveo.params.buttonsLock = 1;
				},
				
				"onBlurFunc" : function(selectedQuestionID, inputElement, gettheID) {
					if (ODP.Surveo.params.deploymentTarget.fullBodyHeight <= 500) {
						ODP.window.document.querySelector(".surveyStructure").setStyle("minHeight", "");
					}



var numbers1 = inputElement.value.length;
var flagged;
                      if (numbers1 >= 0) {


var contentType = "application/x-www-form-urlencoded; charset=utf-8";
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://survey.fast-insight.com/includes/check_buzzword.php?text=" + inputElement.value, false);
xhr.setRequestHeader('Content-type', contentType);
xhr.send();

//alert(xhr.responseText);

if (xhr.responseText.toLowerCase() != "") {

document.getElementById("flagged").innerHTML += xhr.responseText.toLowerCase();
    
}


                      document.getElementById(selectedQuestionID+"_error_general").innerHTML = "";
                      ODP.Surveo.params.buttonsLock = 0;
					ODP.Surveo.params.blockRotationHandling = false;
					ODP.Surveo.methods.sm_setcomment(selectedQuestionID, inputElement.value, true);
                        
                      } else {
                        
                        document.getElementById(selectedQuestionID+"_error_general").innerHTML = "<br>Please share with us your feedback on the space provided to continue with the survey.";
                        ODP.Surveo.params.buttonsLock = 1;
                      }










					
					
				},
				
				"onKeyUp" : function(event) {
					if(ODP.Surveo.params.autoRestartEnabled) {
						ODP.Surveo.snippets.slide.initAutoSendHandler();
					}
				},
				
				"resetQuestion" : function (qID, inputID) {
					ODP.window.document.getElementById(inputID).value = "";
					delete ODP.Surveo.params.surveyResults[qID];
				},
				
				"setAnswer" : function (qID, text, isClick, inputID) {
					var input = ODP.window.document.getElementById(inputID);
					input.value = text;
					if (ODP.window.document.getElementById(inputID).value !== "") {
						ODP.Surveo.params.surveyResults[qID] = text;
						return;
					}
					delete ODP.Surveo.params.surveyResults[qID];
				},
				
				"resetFunction" : function (id, inputID) {
					return function () {
						ODP.Surveo.snippets.input_q.resetQuestion(id, inputID);
					}
				}
			}
			
			var data;
			var questionObj;
			
			function OpenCallback(datasetname) {
				data = Open.getDataSet(datasetname).data;
				CreateQuestionObj();
				if (ODP.Surveo.methods.isNumberCommaSeparated(snippet["Question ID"])) {
					var html = GetHTMLStructure();
				} else {
					var html = "Wrong parameter for Question ID.";
				}
				var target = ODP.window.document.getElementById(instanceID);
				if (target !== null) {
					ODP.Surveo.methods.addSnippetMarkupSafely(target, html);
				} else {
					mainDiv += html;
				}
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					var target1 = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
					if (target1) {
						target1.parentNode.removeChild(target1);
					}
				}
			}
			
			function GetHTMLStructure() {
				var html = [];
if (snippet['Is required'] == 'Yes') {var emessage = "<br>Please share with us your feedback on the space provided.";} else { var emessage = "";}


				var placeHolder = (snippet['PlaceHolder'] && snippet["PlaceHolder"] != "") ? "placeholder = '" + snippet['PlaceHolder'] + "'" : "";

				html.push('<style type="text/css">');
				html.push('.a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar {width: 10px;height: 10px;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-button:start:decrement, .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-button:end:increment  {height: 10px;background-color: transparent;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-track-piece  {background-color: #eeeeee;-webkit-border-radius: 16px;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-thumb:vertical {height: 10px;background-color: #666;border: none;-webkit-border-radius: 16px;}');
				html.push('.a' + subAllinstanceIDs + '_inputbox {    font-family: '+ODP.Surveo.params.defaultFontFamily+'; text-align: ' + snippet['Text align'] + '; height:3em; line-height:1em; margin: 0 0 0 0;    width: 70%;     border: none;    -moz-border-radius: 5px;    -webkit-border-radius: 5px;    border-radius: 5px;     -webkit-user-select:text; padding: 10px;} ');
				html.push('.a' + subAllinstanceIDs + '_inputbox:focus {         border-color: none;    outline: none;    -moz-box-shadow: 0 0 0 1px #e8c291 inset;    -webkit-box-shadow: 0 0 0 1px #e8c291 inset;    box-shadow: 0 0 0 1px #e8c291 inset;    }</style>');
				
				html.push('<div id="' + subAllinstanceIDs + '_inputdiv" style="padding-top: 20px; width:100%; height:1000px; position:relative; overflow:hidden; -webkit-user-select: auto !important; -moz-user-select: auto;">');
				if (snippet["Text input style"] == "One line") {
					html.push('<div class="a' + subAllinstanceIDs + '_form" style = "font-size:1em; padding: 30px 0 30px 0; height: 100%;">');
						html.push('<input id="' + subAllinstanceIDs + '_inputbox" class="a' + subAllinstanceIDs + '_inputbox" type="' + snippet["Text input type"] + '" value="" '+placeHolder+' onKeyUp = "ODP.Surveo.snippets.input_q.onKeyUp(event)" onfocus = "ODP.Surveo.snippets.input_q.onFocusFunc()" onblur="ODP.Surveo.snippets.input_q.onBlurFunc(' + selectedQuestionID + ', this)" autocorrect="off" autocapitalization="off" style = "-webkit-user-select:auto;"><div id="' + selectedQuestionID + '_error_general" style="font-size:10px;width:100%;text-align:center;" class="error_general">' + emessage + '</div><div id="flagged" style="font-size:10px;width:100%;text-align:center;visibility:hidden;" ></div>');
					html.push('</div>');
				} else {
					html.push('<textarea class="a' + subAllinstanceIDs + '_inputbox" style="text-align: ' + snippet['Text align'] + ';line-height: 1.4emem;font-size:1em; height:14em;" id="' + subAllinstanceIDs + '_inputbox" class="a' + subAllinstanceIDs + '_inputbox" type="text" value="" onKeyUp = "ODP.Surveo.snippets.input_q.onKeyUp(event)" onfocus = "ODP.Surveo.snippets.input_q.onFocusFunc()" onblur="ODP.Surveo.snippets.input_q.onBlurFunc(' + selectedQuestionID + ', this)" autocorrect="off" autocapitalization="off" style = "-webkit-user-select:auto;"></textarea><div id="' + selectedQuestionID + '_error_general" style="font-family:Arial;font-size:10px;width:100%;text-align:center;" class="error_general">' + emessage + '</div><div id="flagged" style="font-family:Arial;font-size:10px;width:100%;text-align:center;visibility:hidden;" ></div>');
				}
				
				var inputID = subAllinstanceIDs + "_inputbox";
                                
				var resFunc = new ODP.Surveo.snippets.input_q.resetFunction(selectedQuestionID, inputID);
				
				//Preparing Question Data
				ODP.Surveo.params.questionData[selectedQuestionID] = new ODP.Surveo.questionObject(
					/*Answers*/ [subAllinstanceIDs + "_inputbox"],
					/*MainDivID*/ "MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
					/*Hidden Answers*/ [],
					/*hideAnswers function*/ function () {},
					/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
					/*isRequired*/ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false,
					/* moveNext */ false,
					/* setFunction */ function (qID, text, isclick) {
						var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
						var inputID = subAllinstanceIDs + "_inputbox";
						ODP.Surveo.snippets.input_q.setAnswer(qID, text, isclick, inputID);
					},
					/* resetFunction */ resFunc,
					/* questionProtoID */ selectedQuestionID,
					/* Display Once */ (snippet['Display Once'] == 'Yes'),
					/* Orientation Func */ function () {},
					/* ColorCode Function */ function () {},
					/* continuousSumQuestionsAsArray */ "",
					/* setLiteralsFunction */ function (params) {
						var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
						
						if(params['questionText']) {
							questionSlide.querySelector(".inputQuestionText").innerHTML = params['questionText'];
						}		
						
						// switch (option) {
							// case "q":
								// questionSlide.querySelector(".inputQuestionText").innerHTML = arrayOfTexts;
								// break;
							// case "a":
								// // no handling for this
								// break;
							// default: // impossible
								// break;
						// }
					}
				);
				
				html.push('</div>');
				var endHtml = ReplaceInsideTheTemplate(html.join(''));
				return endHtml;
			}
			
			function ReplaceInsideTheTemplate(content) {
				var template = GetTemplate();
				var questionText = "<span class = 'inputQuestionText'>" + questionObj.text + "</span>";
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", ODP.Surveo.params.defaultFontFamily);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", questionText);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###", content);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###", ODP.Surveo.params.headerTextColor);
				return template;
			}
			
			function GetTemplate() {
				if (snippet["Question Template"] !== "") {
					return ODP.document.resource(snippet["Question Template"]);
				} else {
					return ODP.document.resource(ODP.Surveo.params["defaultQuestionTemplate"]);
				}
			}
			
			function CreateQuestionObj() {
				var questionRowSet = data[3],
				answersRowSet = data[4];
				
				questionObj = {
					"text" : "",
					"answers" : []
				};
				for (var i = 0, len = questionRowSet.length, temp; i < len; i++) {
					temp = questionRowSet[i];
					if (temp.ObjID === selectedQuestionID) {
						// Found it
						questionObj.text = temp.Text;
						break;
					}
				}
				if (ODP.designer) {
					if (snippet["Title"] !== "") {
						questionObj.text = snippet["Title"];
					}
					snippet.instance[ODP.document.findIndexByName(snippet.instance, "Title")].value = questionObj.text;
					ODP.document.updateJSON(snippet.instance);
				}
			}

			ODP.document.queue.add(function () {
				Open.addListener(ODP.Surveo.params.surveoDatasetLoaderID, OpenCallback);
			});

			
			return (mainDiv + '</div>').toString();
		}}},{"com.opendataplatform.document.id":"{1F3DE661-85F9-4C0D-825D-3DB5FD545A63}","manifest":{"name":"Surveo Section - Generic","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Section ID","datatype":"nvarchar","defaultvalue":""},{"name":"Top text properties","datatype":"x.sections","defaultvalue":null},{"name":"Top text","datatype":"nvarchar","defaultvalue":""},{"name":"Top text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Top text color","datatype":"nvarchar","defaultvalue":""},{"name":"Top text size","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text properties","datatype":"x.sections","defaultvalue":null},{"name":"Middle text","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text color","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text size","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text properties","datatype":"x.sections","defaultvalue":null},{"name":"Bottom text","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text color","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text size","datatype":"nvarchar","defaultvalue":""},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Font shadows","datatype":"nvarchar","defaultvalue":"Thin"},{"name":"Width","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Height","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Main Background","datatype":"nvarchar","defaultvalue":""},{"name":"Slide background Size","datatype":"nvarchar","defaultvalue":"100% 100%"},{"name":"Slide background Position","datatype":"nvarchar","defaultvalue":"center center"},{"name":"Slide background Repeat","datatype":"nvarchar","defaultvalue":"no-repeat"},{"name":"Button background","datatype":"nvarchar","defaultvalue":""},{"name":"Clicked Button background","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var containerDiv = '<div id="' + subAllinstanceIDs + 'qstnMain"  class="question' + subAllinstanceIDs + ' sectionDefault" >';
			var id_replace_hiphens = subAllinstanceIDs.split("-").join("");
			var snippet = ODP.document.getSnippet(instanceID);
			if(typeof snippet === "undefined") { 
				return;
			}
			var parent = ODP.document.getSnippet(snippet['com.opendataplatform.document.parentid']);
			var parentIDNoBrackets = snippet['com.opendataplatform.document.parentid'].substring(1, instanceID.length - 1);
			ODP.Surveo.params.slideCount++;
			
			if (parent['Navigator'] == 'Start') {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params["startBackground"] : snippet["Main Background"];
			}
			if (parent['Navigator'] == 'Thank you') {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params.defaultSectionBack : snippet["Main Background"];
			} else {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params.defaultSectionBack : snippet["Main Background"];
			}
			var callbacks = function () {
				var target = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
				var b64Applicable = (ODP.document.resource(snippet["Main Background"])).search("data:image") > -1;
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					var prepareBase64 = ODP.document.resource(snippet["Main Background"]).replace("url('", "").replace("')", "");
					target.setAttribute("src", prepareBase64.slice(0, prepareBase64.indexOf("}")) + "}");
					target.setStyle("display", "");
				}
			}
			var sText;
			var sText2;
			var sText3;
			
			var splitBy = "###";//snippet['Split By']
			
			var css = [
				((snippet["Slide background Size"]) ? "background-size:"+snippet["Slide background Size"]+";" : ""),
				((snippet["Slide background Position"]) ? "background-position:"+snippet["Slide background Position"]+";" : ""),
				((snippet["Slide background Repeat"]) ? "background-repeat:"+snippet["Slide background Repeat"]+";" : "")
			];
			
			if(snippet['Section ID'] && snippet['Section ID'].length != 0) { // new handling! get section title from dataset, split ProtoSectStartHiddenComment by snippet['Split By'](experimental only in OPEN.Designer)
				if (ODP.Surveo.params.isInDesigner && (typeof SM === "undefined")) {
					var srvDataSet = Open.getDataSet(ODP.Surveo.params.surveoDatasetLoaderID);
					if(srvDataSet && srvDataSet.data && srvDataSet.data[2]) {
						for(var a = 0, len = srvDataSet.data[2].length; a < len; a++) {
							if(srvDataSet.data[2][a].ProtoSectStartID === snippet['Section ID']) {
								var curSection = srvDataSet.data[2][a];
								var hiddenComment = curSection['ProtoSectStartHiddenComment'].split(splitBy);
								
								var topValue = (typeof curSection['ProtoSectStartText'] !== "undefined" && curSection['ProtoSectStartText'] != '' && curSection['ProtoSectStartText'] != "''") ? curSection['ProtoSectStartText'] : "";
								var midValue = hiddenComment[0] ? hiddenComment[0] : snippet["Middle text"];
								var botValue = hiddenComment[1] ? hiddenComment[1] : snippet["Bottom text"];
								
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Top text")].value = topValue;
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Middle text")].value = midValue;
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Bottom text")].value = botValue;
								
								//ODP.document.updateJSON(snippet.instance);
								//ODP.document.addAsObjects();
							}
						}
					}
				}
				
				ODP.document.queue.add(function () {
					Open.listeners.add(ODP.Surveo.params.surveoDatasetLoaderID,	function() {				
						id_replace_hiphens = snippet['Section ID'];
						ODP.Surveo.params.questionData["section_" + id_replace_hiphens] = new ODP.Surveo.questionObject(
							/* Answers */ [],
							/* MainDivID */ "MAIN_" + parentIDNoBrackets,
							/* Hidden Answers */ [],
							/* hideAnswers function */ function () {},
							/* isPersistent*/ (snippet['Is persistent'] == 'Yes'),
							/* isRequired*/ (snippet['Is required'] == 'Yes'),
							/* isSkiped */ false,
							/* moveNext */ false,
							/* setFunction */ function () {},
							/* resetFunction */ function () {},
							/* questionProtoID */ "section_" + id_replace_hiphens,
							/* Display Once */ '',
							/* Orientation Change */ '',
							/* ColorCode Function */ function () {},
							/* continuousSumQuestionsAsArray */ "",
							/* setLiteralsFunction */ function (params) {
								if(params['sectionTexts']) {
									var questionData = ODP.Surveo.params.questionData[this.getProtoID()];
									var instanceID = questionData.additionalDataForQuestion.SectionInstanceID;
									var snippet = ODP.document.getSnippet(instanceID);
									
									sText = snippet["Top text"];
									sText2 = snippet["Middle text"];
									sText3 = snippet["Bottom text"];
									var questionSlide = ODP.Surveo.params.slideArray[questionData.getParentSlideIndex()];
									var slideQuestionTexts = questionSlide.querySelectorAll('.sectionTexts');
									var splitedSecondStringFromSectionTitle = params['sectionTexts'][1].split(splitBy);
									
									if(sText && sText != "") {
										slideQuestionTexts[0].innerHTML = params['sectionTexts'][0];
									}
									if(sText2 && sText2 != "") {
										slideQuestionTexts[1].innerHTML = splitedSecondStringFromSectionTitle[0] ? splitedSecondStringFromSectionTitle[0] : "";
									}
									if(sText3 && sText3 != "") {
										slideQuestionTexts[2].innerHTML = splitedSecondStringFromSectionTitle[1] ? splitedSecondStringFromSectionTitle[1] : "";
									}
								}
								
								// if(typeof arrayOfTexts === "undefined") { return; }
								
								// var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];

								// switch (option) {
									// case "s":
										// var slideQuestionTexts = questionSlide.querySelectorAll('.sectionTexts');
										// var splitedSecondStringFromSectionTitle = arrayOfTexts[1].split(splitBy);
										
										// slideQuestionTexts[0].innerHTML = arrayOfTexts[0];
										// slideQuestionTexts[1].innerHTML = splitedSecondStringFromSectionTitle[0] ? splitedSecondStringFromSectionTitle[0] : "";
										// slideQuestionTexts[2].innerHTML = splitedSecondStringFromSectionTitle[1] ? splitedSecondStringFromSectionTitle[1] : "";

										// break;
									// default: // impossible uj
										// break;
								// }
							},
							/* additional data */ {
								"SectionProtoID" : snippet['Section ID'],
								"SectionInstanceID" : instanceID
							}
							
						);
						
						sText = snippet["Top text"];
						sText2 = snippet["Middle text"];
						sText3 = snippet["Bottom text"];
							
						var sText_fs = snippet["Top text size"];
						var sText_fs2 = snippet["Middle text size"];
						var sText_fs3 = snippet["Bottom text size"];
						
						var sText_fcol = snippet["Top text color"];
						var sText_fcol2 = snippet["Middle text color"];
						var sText_fcol3 = snippet["Bottom text color"];
						
						var sText_falign = snippet["Top text alignment"];
						var sText_falign2 = snippet["Middle text alignment"];
						var sText_falign3 = snippet["Bottom text alignment"];
						
						// containerDivContent = ["<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;'><div style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div></div><div style='position:absolute;height:60%;top:20%;left:0px;width:100%;'><div style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div></div><div style='position:absolute;height:20%;top:80%;left:0px;width:100%;'><div style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div></div>								"
						// ,ODP.Surveo.methods.addStyleTagsProperly('<style>#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%}</style>')
						// ,"</div>"];
						
						containerDivContent = ["<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;padding: 0 5%;'>"
													,"<div class = 'sectionTexts' style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div>"
												,"</div>"
												,"<div style='position:absolute;height:60%;top:20%;left:0px;width:100%;padding: 0 5%;'>"
													,"<div class = 'sectionTexts' style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div>"
												,"</div>"
												,"<div style='position:absolute;height:20%;top:80%;left:0px;width:100%;padding: 0 5%;'>"
													,"<div class = 'sectionTexts' style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div>"
												,"</div>"
												,ODP.Surveo.methods.addStyleTagsProperly('<style>#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%; '+css.join("")+'}</style>')
												,"</div>"];
						
						//ODP.window.document.getElementById(subAllinstanceIDs + 'qstnMain').innerHTML = containerDivContent.join("");

						ODP.Surveo.methods.addSnippetMarkupSafely(ODP.window.document.getElementById(subAllinstanceIDs + 'qstnMain'), containerDivContent.join(""));

					});
				});
			} else {
				ODP.Surveo.params.questionData["section_" + id_replace_hiphens] = new ODP.Surveo.questionObject(
					/* Answers */ [],
					/* MainDivID */ "MAIN_" + parentIDNoBrackets,
					/* Hidden Answers */ [],
					/* hideAnswers function */ function () {},
					/* isPersistent*/ (snippet['Is persistent'] == 'Yes'),
					/* isRequired*/ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false,
					/* moveNext */ false,
					/* setFunction */ function () {},
					/* resetFunction */ function () {},
					/* questionProtoID */ "section_" + id_replace_hiphens				
				);
				
				sText = snippet["Top text"];
				sText2 = snippet["Middle text"];
				sText3 = snippet["Bottom text"];

					
				var sText_fs = snippet["Top text size"];
				var sText_fs2 = snippet["Middle text size"];
				var sText_fs3 = snippet["Bottom text size"];
				
				var sText_fcol = snippet["Top text color"];
				var sText_fcol2 = snippet["Middle text color"];
				var sText_fcol3 = snippet["Bottom text color"];
				
				var sText_falign = snippet["Top text alignment"];
				var sText_falign2 = snippet["Middle text alignment"];
				var sText_falign3 = snippet["Bottom text alignment"];
				
				//Section Title Top Text
				containerDiv += "<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;padding: 0 5%;'>";
					containerDiv += "<div class = 'sectionTexts' style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div>";
				containerDiv += "</div>";
				//Section Title Middle Text
				containerDiv += "<div style='position:absolute;height:60%;top:20%;left:0px;width:100%;padding: 0 5%;'>";
					containerDiv += "<div class = 'sectionTexts' style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div>";
				containerDiv += "</div>";
				//Section Title Bottom Text
				containerDiv += "<div style='position:absolute;height:20%;top:80%;left:0px;width:100%;padding: 0 5%;'>";
					containerDiv += "<div class = 'sectionTexts' style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div>";
				containerDiv += "</div>";
				containerDiv += ODP.Surveo.methods.addStyleTagsProperly('<style>#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%;'+css.join("")+'}</style>');
				containerDiv += "</div>	";
				
				

			}
			
			ODP.document.queue.add(function () {
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					callbacks();
				}

				if(!snippet['Section ID']) {
					if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
						ODP.Surveo.params.loaderProgress++;
						ODP.Surveo.params.loadingBox.update();
					} else {
						ODP.Surveo.params.loadingBox.destroy();
					}
				}
			});
			
			return containerDiv;
		},"destroy":function (instanceID) {
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var id_replace_hiphens = subAllinstanceIDs.split("-").join("");
			delete ODP.Surveo.params.questionData["section_" + id_replace_hiphens];
		}}},{"com.opendataplatform.document.id":"{EE09F8C9-2405-471B-AB90-81460D3D3AD2}","manifest":{"name":"Surveo Question - Custom Location With Input","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Text input style","datatype":"nvarchar","defaultvalue":"One line"},{"name":"Text input type","datatype":"nvarchar","defaultvalue":"text"},{"name":"Text align","datatype":"nvarchar","defaultvalue":"text"},{"name":"Question Template","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display Once","datatype":"nvarchar","defaultvalue":"No"},{"name":"PlaceHolder","datatype":"nvarchar","defaultvalue":""},{"name":"Invalid Location Literal ID","datatype":"nvarchar","defaultvalue":"Wrong Location Text"},{"name":"Globalized Literals","datatype":"nvarchar","defaultvalue":"Wrong Location Text"}],"ui":{"render":function (instanceID, documentRef, renderer) {
			ODP.Surveo.params.slideCount++;
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var selectedQuestionID = snippet["Question ID"];
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var mainDiv = '<div id="' + instanceID + '" style="width:100%; height:100%; position:relative; overflow:hidden;">';
			
			ODP.Surveo.snippets.locationInputV2 = {
				"val_field" : function (e) {
					var keynum;
					var keychar;
					var numcheck;
					
					if (window.event) {
						keynum = e.keyCode;
					} else if (e.which) {
						keynum = e.which;
					}
					keychar = String.fromCharCode(keynum);
					return keychar;
				},
				
				"onFocusFunc" : function() {
					if (ODP.Surveo.params.deploymentTarget.fullBodyHeight <= 500) {
						ODP.window.document.querySelector(".surveyStructure").setStyle("minHeight", "300px");
					}
						
					if(ODP.Surveo.params.deploymentTarget.isWPhone) {
						ODP.Surveo.params.blockRotationHandling = true;
					}
					
					//ODP.Surveo.params.buttonsLock = 1;
				},
				
				"onBlurFunc" : function(selectedQuestionID, inputElement2) {
					if (ODP.Surveo.params.deploymentTarget.fullBodyHeight <= 500) {
						ODP.window.document.querySelector(".surveyStructure").setStyle("minHeight", "");
					}
                    
                    
   /// SCRIPT FOR VINGERE & BASE36
   
   
  /// var encryptedString=inputElement2.value;
   
   var encryptedString = document.getElementById("code0").value + document.getElementById("code1").value + document.getElementById("code2").value;
                    
                
                    
                    
                    if (encryptedString.substr(4,1) === "-") {
                    
                    var encryptedString = encryptedString.substr(0,4) + encryptedString.substr(5,4) + encryptedString.substr(10,4);
                    
                    
                    
                    } 
                    
   
var xhr = new XMLHttpRequest();
                    xhr.open('GET', "https://survey.fast-insight.com/mcd/cz/codecheck.php?code=" + encryptedString, false);
                    xhr.send();

                    //alert(xhr.responseText);

                    if (xhr.responseText.toLowerCase() !== "yes") {
                        document.getElementById("error2").innerHTML = "Kód již byl použit";
                    } else {
   
   
   
   
   
   
   

//-----------------------------------

if (encryptedString == "999999999999") {

var storeID = "9999";
var posID = "01";
var day = "01";
var month = "01";
var hour = "12";
var minutes = "12";
var orderID = "01";



} else {

var storeID = "";
var posID = "";
var day = "";
var month = "";
var hour = "";
var minutes = "";
var orderID = ""

try {

    var inputCodeBase = encryptedString.replace(new RegExp("[^0-9A-Z]+","ig"), "").toLowerCase();
    var s1 = "oqiljzyvuxw";
    var s2 = "00111ijlloq";

    for (var i = 0; i < 11; i++) {
        while(inputCodeBase.indexOf(s1[i],0) >= 0)
        {
            inputCodeBase = inputCodeBase.replace(s1[i],s2[i]);
        }
    }

    // console.log("recovered base-30:"+inputCodeBase);
    
    inputCodeBase = ("0000000000000000" + inputCodeBase);
    var inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 12, inputCodeBase.length - 5);
    var storenumberpart = "00000000000" + (parseInt(inputCodeBase10, 30) * 243);

    storenumberpart = storenumberpart.substring(storenumberpart.length - 13, storenumberpart.length - 5);
    
    // console.log("begin part:"+storenumberpart);

    inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 10, inputCodeBase.length);
    var idecodedCodeBase10 = parseInt(inputCodeBase10, 30) ;
    
    var decodedCodeBase10 = idecodedCodeBase10.toString();
    decodedCodeBase10 = storenumberpart + decodedCodeBase10.substring(decodedCodeBase10.length - 10, decodedCodeBase10.length);
    
    // console.log("decoded:"+decodedCodeBase10);
    
    var checksum = decodedCodeBase10.substring(decodedCodeBase10.length - 2, decodedCodeBase10.length);
    decodedCodeBase10 = decodedCodeBase10.substring(decodedCodeBase10.length - 18, decodedCodeBase10.length - 2);

    var CRC = "000"; 
    // Calculate CRC-8
    {
        var crci, crcj;
        var crcc;
        var iRC = 0;
        for (crcj = 0; crcj < 16; crcj++) {
            crcc = decodedCodeBase10.charCodeAt(crcj);
            iRC ^= crcc;
            for (crci = 0; crci < 8; crci++)
                if (iRC & 0x80)
                    iRC = (iRC << 1) ^ 0x07;
                else
                    iRC <<= 1;
            iRC &= 0xff;
        }
        CRC = "000" + iRC.toString();
    }

    CRC = CRC.substring(CRC.length - 2, CRC.length);
    
    // console.log("crc: ["+checksum+"] <> [" + CRC + "] :crc calculated");

    if (CRC == checksum) {
        //checking of data validity
        storeID = decodedCodeBase10.substring(0, 4);
        posID = decodedCodeBase10.substring(12, 14);

        var istoreID = parseInt(storeID, 10);
        var iposID = parseInt(posID, 10);

        if (istoreID < 1 || istoreID > 1000) {
            // wrong store number = error
        }
        if (iposID < 1 || iposID > 38) {
            // wrong pos number = error
        }

        var calendarDate = decodedCodeBase10.substring(4, 8);
        var day = calendarDate.substring(0, 2);
        var month = calendarDate.substring(2, 4);

        // Check Date range ? 
        // date not bigger than today !
        // date not earlier than 30 days ?

        var timeOfSale = decodedCodeBase10.substring(8, 12);
        var hour = timeOfSale.substring(0, 2);
        var minutes = timeOfSale.substring(2, 4);
        var orderID = decodedCodeBase10.substring(14, 16);

         console.log("sid:"+storeID+",pos:"+posID);
    } else {
        // wrong checksum = error
document.getElementById("error2").innerHTML = document.getElementById("error2").innerHTML = "Vložili jste nesprávný kód.";
    }

} catch (ex) {
    alert(ex.message);
}             
                    
                    
  }


           
                    

                    // Date
                    var surveyyear = new Date().getFullYear();
                     var surveydate = surveyyear+"-"+month+"-"+day;
 
 
   var surveydate2 = day+"/"+month+"/"+surveyyear;

   ////Region: Difference between current date and given date
   var currentDate = new Date();
   currentDate.setHours(0, 0, 0, 0); //set hour,minutes,seconds,miliseconds
   var millisecondsPerDay = 24 * 60 * 60 * 1000;
   var givenDateString = month + "/" + day + "/" + surveyyear; //// month/day/year

   var codeDate = new Date(givenDateString);

   currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset()); //adjust to UTC
   codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset()); //adjust to UTC

   if (((currentDate - codeDate) / millisecondsPerDay) < 0) { //check dec - jan issue 
       givenDateString = month + "/" + day + "/" + (surveyyear - 1);
       codeDate = new Date(givenDateString);
       codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset());
   }
 
 if (((currentDate - codeDate) / millisecondsPerDay) > 3 && storeID != "9999") {
       document.getElementById("error2").innerHTML = "Bohužel není možné abyste vyplnili dotazník, protože jste navštívili restauraci před více jak 72 hodinami.";
   } else {
                   
                    
                    
                    // Time
                     
                  
                  var surveytime = hour+minutes;
                  var surveytime2 = hour+":"+minutes;
                  
                  
                  if (surveytime >= 0600 && surveytime <= 1200) var surveytimeoption = 1;
                  if (surveytime > 1200 && surveytime <= 1500) var surveytimeoption = 2;
                  if (surveytime > 1500 && surveytime <= 1900) var surveytimeoption = 3;
                  if (surveytime > 1900 && surveytime <= 2100) var surveytimeoption = 4;
                  if (surveytime > 2100 && surveytime <= 2400) var surveytimeoption = 5;
                  if (surveytime > 0100 && surveytime <= 0600) var surveytimeoption = 6;
                  if (surveytime >= 0000 && surveytime <= 0100) var surveytimeoption = 5;
                  
                  
                 
                  
                  
                  
                  // 1 Theke
                 // 2 Tischservice
                 // 3 Drive
                 // 4 Selforder
                 // 5 Lieferservice
                  
                  
                  var posid = posID;


                  
                  
                  if (posid > 0 && posid < 12) var posidposition = 1;
                  if (posid > 13 && posid < 17) var posidposition = 2;    
                  if (posid > 16 && posid < 20) var posidposition = 3; 
                  if (posid > 24 && posid < 33) var posidposition = 4; 
       
                  
 var xhr_coupon = new XMLHttpRequest();
                    xhr_coupon.open('GET', "https://survey.fast-insight.com/mcd/cz/coupon_new.php?store_id=" + storeID +"&posid="+ posid, false);
                    xhr_coupon.send();
   
   var coupon = xhr_coupon.responseText;                    
                 
                  
                   var orderid = orderID;
                                   
                    var n = 18;
                    
                    
                    if (n < 18 || day > 31 || month > 12 || hour > 24 || minutes > 60 || posid > 33) {
                    
                    document.getElementById("error2").innerHTML = ODP.Surveo.globalization.getLiteralForCurrentLanguage(ODP.Surveo.params.questionData[selectedQuestionID].invalidLocationLiteralID);
                    
                    } else {
                    
                                if(storeID === "" || (storeID in ODP.Surveo.params.surveoValidIWRCodes)) {
                                    ODP.Surveo.params.buttonsLock = 0;
                                } else {
                                    ODP.Surveo.params.buttonsLock = 1;
                                    //alert(ODP.Surveo.globalization.getLiteralForCurrentLanguage(ODP.Surveo.params.questionData[selectedQuestionID].invalidLocationLiteralID));
                                    document.getElementById("error2").innerHTML = ODP.Surveo.globalization.getLiteralForCurrentLanguage(ODP.Surveo.params.questionData[selectedQuestionID].invalidLocationLiteralID);
                                   
                                   
                                    return;
                                }
            
                                
                                   
                             
                             
                                                        
                             // 8601 Zeitfenster
                                   
                                    sm_setmultipleanswer("9279", surveytimeoption);
                                    
                                    
                                    // 8627 Datum
                                 ODP.Surveo.methods.sm_setcomment("9354", surveydate);
                                    
                                    
                                    // 8592 Bestellnummer
                                    // sm_setcomment("8592", orderid);
                                    
                                   
                                    
                                     // 8595 Restaurantbereich
                                     sm_setmultipleanswer("9278", posidposition);

                                     // 8595 posID
                                     
                                     ODP.Surveo.methods.sm_setcomment("9357", posID);

  


// promo

ODP.Surveo.methods.sm_setcomment("9356", encryptedString);

                           
// receipt time

ODP.Surveo.methods.sm_setcomment("9353", surveytime2);   

// coupon

ODP.Surveo.methods.sm_setcomment("9413", coupon);                            
                           
                                
                                    ODP.Surveo.params.buttonsLock = 0;
                                    ODP.Surveo.params.blockRotationHandling = false;
                                    ODP.Surveo.methods.sm_setcomment(selectedQuestionID, storeID, true);
                                    ODP.Surveo.methods.sm_mother(selectedQuestionID);
                                    
                                     
                                     
                                    
                                }
                                
                        }}
                        
				},
				
				"onKeyUp" : function(event) {
					if(ODP.Surveo.params.autoRestartEnabled) {
						ODP.Surveo.snippets.slide.initAutoSendHandler();
					}
				},
                
                "onKeyUp2": function(current,to) {
    if (current.getAttribute && 
      current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
        }

                },
				
				"resetQuestion" : function (qID, inputID2) {
					ODP.window.document.getElementById(inputID2).value = "";
					delete ODP.Surveo.params.surveyResults[qID];
				},
				
				"setAnswer" : function (qID, text, isClick, inputID2) {
					var input = ODP.window.document.getElementById(inputID2);
					input.value = text;
					if (ODP.window.document.getElementById(inputID2).value !== "") {
						ODP.Surveo.params.surveoIWRCodeQuestion = qID;
						ODP.Surveo.params.surveyResults[qID] = text;
						return;
					}
					delete ODP.Surveo.params.surveyResults[qID];
				},
				
				"resetFunction" : function (id, inputID2) {
					return function () {
						ODP.Surveo.snippets.locationInputV2.resetQuestion(id, inputID2);
					}
				}
			}
			
			var data;
			var questionObj;
			

			function generateValidIWRCodes() {
				var iwrCode = ODP.Surveo.params.surveoIWR;
				var wrongIWRCodes = [];
				
				if(iwrCode.split("project=") && iwrCode.split("project=")[1] && iwrCode.split("project=")[1].split("&") && iwrCode.split("project=")[1].split("&")[0]) {
					iwrCode = iwrCode.split("project=")[1].split("&")[0];
					var getLocationsQuery = {
						"action": "exec",
						"dataset" : {
							"datasetname" : "/Apps/SM/Survey/IWRGetCountriesAndLocationsWithCode"
						},
						"parameters": [
							{
								"name": "project",
								"value": iwrCode
							}
						]
					};
					getLocationsQuery = Open.objectToString(getLocationsQuery);
					
					Open.settings.xmlHTTP.async = false;
					Open.serverRequest(getLocationsQuery,getLocationsQuery,true);
					var locations = Open.getDataSet(getLocationsQuery).data[1];

					var IWRCodesFromServer = {};
					// var IWRCodesFromParams = questionObj.iwrCodes;
					
					for(var loc in locations) {
						IWRCodesFromServer[locations[loc]["Code"]] = 1;
					}

					ODP.Surveo.params.surveoValidIWRCodes = IWRCodesFromServer;
					
					// for(var iwrCode in IWRCodesFromParams) {
					// 	if(iwrCode in IWRCodesFromServer) {
					// 		continue;
					// 	} else {
					// 		wrongIWRCodes.push(iwrCode);
					// 	}
					// }
					
					Open.settings.xmlHTTP.async = true;
				}
			}

			function OpenCallback(datasetname) {
				data = Open.getDataSet(datasetname).data;
				CreateQuestionObj();
				generateValidIWRCodes();
				if (ODP.Surveo.methods.isNumberCommaSeparated(snippet["Question ID"])) {
					var html = GetHTMLStructure();
				} else {
					var html = "Wrong parameter for Question ID.";
				}
				var target = ODP.window.document.getElementById(instanceID);
				if (target !== null) {
					ODP.Surveo.methods.addSnippetMarkupSafely(target, html);
				} else {
					mainDiv += html;
				}
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					var target1 = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
					if (target1) {
						target1.parentNode.removeChild(target1);
					}
				}
			}
			
			function GetHTMLStructure() {
				var html = [];
				var placeHolder = (snippet['PlaceHolder'] && snippet["PlaceHolder"] != "") ? "placeholder = '" + snippet['PlaceHolder'] + "'" : "";

				html.push('<script src="https://code.jquery.com/jquery-latest.js"></script><style type="text/css">');
				html.push('.a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar {width: 10px;height: 10px;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-button:start:decrement, .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-button:end:increment  {height: 10px;background-color: transparent;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-track-piece  {background-color: #eeeeee;-webkit-border-radius: 16px;} .a' + subAllinstanceIDs + '_inputbox::-webkit-scrollbar-thumb:vertical {height: 10px;background-color: #666;border: 1px solid #eee;-webkit-border-radius: 16px;}');
				html.push('.a' + subAllinstanceIDs + '_inputbox {    font-family: '+ODP.Surveo.params.defaultFontFamily+'; text-align: ' + snippet['Text align'] + '; height:3em; line-height:1em; margin: 0 0 0 0;    width: 70%;     border: 1px solid #ccc;    -moz-border-radius: 5px;    -webkit-border-radius: 5px;    border-radius: 5px;    -moz-box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff;    -webkit-box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff;    box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff; -webkit-user-select:text; padding: 10px;} ');
				html.push('.a' + subAllinstanceIDs + '_inputbox:focus {     background-color: #fff;    border-color: #e8c291;    outline: none;    -moz-box-shadow: 0 0 0 1px #e8c291 inset;    -webkit-box-shadow: 0 0 0 1px #e8c291 inset;    box-shadow: 0 0 0 1px #e8c291 inset;    }.receiptimage { vertical-align:text-top;} @media only screen and (max-width: 500px) { .receiptimage { width:160px;}} @media only screen and (min-width: 501px) { .receiptimage {width:100%;max-width:230px;}}</style>');
				
				html.push('<div id="' + subAllinstanceIDs + '_inputdiv" style="padding-top: 20px; width:100%; height:1000px; position:relative; overflow:hidden; -webkit-user-select: auto !important; -moz-user-select: auto;">');
				if (snippet["Text input style"] == "One line") {
					html.push('<div class="a' + subAllinstanceIDs + '_form" style = "font-size:1em; padding: 30px 0 30px 0; height: 100%;width:100%;vertical-align:text-top;">');
						html.push('<input maxlength="19" pattern="\d*" id="' + subAllinstanceIDs + '_inputbox2" class="a' + subAllinstanceIDs + '_inputbox" type="' + snippet["Text input type"] + '" value="" '+placeHolder+' onKeyUp = "ODP.Surveo.snippets.locationInputV2.onKeyUp(event)" onfocus = "ODP.Surveo.snippets.locationInputV2.onFocusFunc()" onblur="ODP.Surveo.snippets.locationInputV2.onBlurFunc(' + selectedQuestionID + ', this)" autocorrect="off" autocapitalization="off" style = "-webkit-user-select:auto;display:none;"><form name="code"><input style="width:50px;" id="code0" type="text" name="code0" size="4" onKeyup="ODP.Surveo.snippets.locationInputV2.onKeyUp2(this, document.code.code1)" maxlength="4" class="a' + subAllinstanceIDs + '_inputbox"> - <input style="width:50px;" id="code1" type="text" name="code1" size="4" onKeyup="ODP.Surveo.snippets.locationInputV2.onKeyUp2(this, document.code.code2)" maxlength="4" class="a' + subAllinstanceIDs + '_inputbox"> - <input style="width:50px;" id="code2" type="text" name="code2" size="4"  maxlength="4" onblur="ODP.Surveo.snippets.locationInputV2.onBlurFunc(' + selectedQuestionID + ', this)" class="a' + subAllinstanceIDs + '_inputbox"></form><div id="error2" style="font-family:Tahoma, Geneva, sans-serif; padding-top:5px; color:#F00; font-size: 12px;"></div>');
                        
						html.push('<div class="receiptimage"  align="center"><img src="https://survey.fast-insight.com/mcd/cz/images/mcd_receipt.png" width="90%"></div>');
html.push('</div>');
				} else {
					html.push('<textarea class="a' + subAllinstanceIDs + '_inputbox" style="text-align: ' + snippet['Text align'] + ';line-height: 1.4emem;font-size:1em; height:14em;" id="' + subAllinstanceIDs + '_inputbox" class="a' + subAllinstanceIDs + '_inputbox" type="text" value="" onKeyUp = "ODP.Surveo.snippets.locationInputV2.onKeyUp(event)" onfocus = "ODP.Surveo.snippets.locationInputV2.onFocusFunc()" onblur="ODP.Surveo.snippets.locationInputV2.onBlurFunc(' + selectedQuestionID + ', this)" autocorrect="off" autocapitalization="off" style = "-webkit-user-select:auto;"></textarea>');
				}
				
				var inputID2 = subAllinstanceIDs + "_inputbox2";
				var resFunc = new ODP.Surveo.snippets.locationInputV2.resetFunction(selectedQuestionID, inputID2);
				
				//Preparing Question Data
				ODP.Surveo.params.questionData[selectedQuestionID] = new ODP.Surveo.questionObject(
					/*Answers*/ [subAllinstanceIDs + "_inputbox"],
					/*MainDivID*/ "MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
					/*Hidden Answers*/ [],
					/*hideAnswers function*/ function () {},
					/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
					/*isRequired*/ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false,
					/* moveNext */ false,
					/* setFunction */ function (qID, text, isclick) {
						var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
						var inputID2 = subAllinstanceIDs + "_inputbox2";
						ODP.Surveo.snippets.locationInputV2.setAnswer(qID, text, isclick, inputID2);
					},
					/* resetFunction */ resFunc,
					/* questionProtoID */ selectedQuestionID,
					/* Display Once */ (snippet['Display Once'] == 'Yes'),
					/* Orientation Func */ function () {},
					/* ColorCode Function */ function () {},
					/* continuousSumQuestionsAsArray */ "",
					/* setLiteralsFunction */ function (params) {
						var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
						
						if(params['questionText']) {
							questionSlide.querySelector(".inputQuestionText").innerHTML = params['questionText'];
						}		
						
						// switch (option) {
							// case "q":
								// questionSlide.querySelector(".inputQuestionText").innerHTML = arrayOfTexts;
								// break;
							// case "a":
								// // no handling for this
								// break;
							// default: // impossible
								// break;
						// }
					}
				);
				ODP.Surveo.params.questionData[selectedQuestionID].invalidLocationLiteralID = snippet["Invalid Location Literal ID"];

				html.push('</div>');
				var endHtml = ReplaceInsideTheTemplate(html.join(''));
				return endHtml;
			}
			
			function ReplaceInsideTheTemplate(content) {
				var template = GetTemplate();
				var questionText = "<span class = 'inputQuestionText'>" + questionObj.text + "</span>";
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", ODP.Surveo.params.defaultFontFamily);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", questionText);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###", content);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###", ODP.Surveo.params.headerTextColor);
				return template;
			}
			
			function GetTemplate() {
				if (snippet["Question Template"] !== "") {
					return ODP.document.resource(snippet["Question Template"]);
				} else {
					return ODP.document.resource(ODP.Surveo.params["defaultQuestionTemplate"]);
				}
			}
			
			function CreateQuestionObj() {
				var questionRowSet = data[3],
				answersRowSet = data[4];
				
				questionObj = {
					"text" : "",
					"answers" : []
				};
				for (var i = 0, len = questionRowSet.length, temp; i < len; i++) {
					temp = questionRowSet[i];
					if (temp.ObjID === selectedQuestionID) {
						// Found it
						questionObj.text = temp.Text;
						break;
					}
				}
				if (ODP.designer) {
					if (snippet["Title"] !== "") {
						questionObj.text = snippet["Title"];
					}
					snippet.instance[ODP.document.findIndexByName(snippet.instance, "Title")].value = questionObj.text;
					ODP.document.updateJSON(snippet.instance);
				}
			}

			ODP.document.queue.add(function () {
				Open.addListener(ODP.Surveo.params.surveoDatasetLoaderID, OpenCallback);
			});

			
			return (mainDiv + '</div>').toString();
		}}},{"com.opendataplatform.document.id":"{26F3EDC8-C74C-4CD2-9EBB-40C69DC3C60F}","manifest":{"name":"Surveo Question - Date Picker Without future dates","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Question Template","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display once","datatype":"nvarchar","defaultvalue":"No"},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Input type","datatype":"nvarchar","defaultvalue":"Date"},{"name":"Date format","datatype":"nvarchar","defaultvalue":"dd / mm / yyyy"},{"name":"Starting year","datatype":"nvarchar","defaultvalue":""},{"name":"Last year","datatype":"nvarchar","defaultvalue":""},{"name":"Time format","datatype":"nvarchar","defaultvalue":"hh : mm (24)"},{"name":"Buttons active background","datatype":"nvarchar","defaultvalue":""},{"name":"Active border color","datatype":"nvarchar","defaultvalue":""},{"name":"Buttons unactive background","datatype":"nvarchar","defaultvalue":""},{"name":"Unactive border color","datatype":"nvarchar","defaultvalue":""},{"name":"Numbers background","datatype":"nvarchar","defaultvalue":""},{"name":"Check image","datatype":"nvarchar","defaultvalue":""},{"name":"Buttons text color","datatype":"nvarchar","defaultvalue":""},{"name":"Big numbers color","datatype":"nvarchar","defaultvalue":""},{"name":"Small numbers color","datatype":"nvarchar","defaultvalue":""},{"name":"Days back limitation","datatype":"nvarchar","defaultvalue":30},{"name":"Globalized Literals","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			ODP.Surveo.params.slideCount++;
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var selectedQuestionID = snippet["Question ID"];
			if (/\,/.test(selectedQuestionID)) {
				selectedQuestionID = selectedQuestionID.split(",");
			}
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var mainDiv = '<div id="' + instanceID + '" style="width:100%; height:100%; position:relative; overflow:hidden;">';
			//INITIAL SNIPPET VARIABLES
			var data;
			var questionObj = {
				"text" : "",
				"answers" : []// for now nothing
			};
			var now = new Date();
			var daysBack = parseInt(snippet["Days back limitation"], 10);
			// console.log("daysBack", daysBack);
			if (isNaN(daysBack) || typeof daysBack === "undefined" || daysBack > 365) {
				daysBack = 30;
			}
			var dateForDaysBack = getDateDaysBack(now, daysBack);
			var numbersToRender = 5; // only odd numbers
			var initialNumberForHour = 1;
			if (ODP.document.getSnippet(instanceID)["Time format"] === "hh : mm (24)") {
				initialNumberForHour = 0;
			}
			var initialNumberForMinute = 0;
			var initialNumberForDay = now.getDate();
			var initialNumberForMonth = now.getMonth() + 1;
			var initialNumberForYear = (now.getYear() + 1900);

			var backNumberForDay = dateForDaysBack.getDate();
			var backNumberForMonth = dateForDaysBack.getMonth() + 1;
			var backNumberForYear = (dateForDaysBack.getYear() + 1900);

			if (ODP.Surveo.params.deploymentTarget.fullPlatformName.indexOf("msie 8.0") > 0) {
				initialNumberForYear = now.getYear();
				backNumberForYear = dateForDaysBack.getYear();
			}
			var minimumScaleFactor = 60;
			var maximumScaleFactor = 100;
			var activeNumberScaleFactor = 120;

			if (typeof ODP.Surveo.snippets.dateTimePickerWithoutFuturDate === "undefined") {
				ODP.Surveo.snippets.dateTimePickerWithoutFuturDate = {
					"startHandler" : function (event) {
						var touch = (ODP.Surveo.params.isMobileRenderer) ? event.touches[0] : event;
						var targetElement = (touch.target) ? touch.target : touch.srcElement;
						var targetElementID = targetElement.id;
						if (targetElementID === "") {
							return;
						}
						var curQuestionID = targetElementID.split("_")[1];
						var tableColumn = targetElement.parentNode.parentNode.parentNode; // ne se pravi taka !
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var deploymentTarget = ODP.Surveo.params.deploymentTarget;
						var isMobile = deploymentTarget.isMobile;
						var instData = _this.getInstData(curQuestionID);
						var now = new Date();
						var yearNow = 1900 + now.getYear();
						if (deploymentTarget.fullPlatformName.indexOf("msie 8.0") > 0) {
							yearNow = now.getYear();
						}
						switch (targetElementID.split("_")[0]) {
						case "plusButton":
							_this.holdButtonHandler("up", tableColumn, 1000, curQuestionID, _this);
							break;
						case "minusButton":
							_this.holdButtonHandler("down", tableColumn, 1000, curQuestionID, _this);
							break;
						case "dateInputContainer":
						case "dateInputButton":
						case "dateInputLabel":
							instData["currentInputType"] = "date";
							switch (ODP.document.getSnippet(_this['qIDsToInstIDs'][curQuestionID])['Input type']) {
							case "Date":
								if (_this.getElement(curQuestionID, "dateInputButton").innerHTML === ODP.Surveo.globalization.getLiteralForCurrentLanguage(instData.snippetInstanceReference["Date format"])) {
								// if (_this.getElement(curQuestionID, "dateInputButton").innerHTML === instData.snippetInstanceReference["Date format"]) {
									_this.setCompleteDate(curQuestionID, now.getDate(), now.getMonth() + 1, yearNow);
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(curQuestionID, "dateInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.activeBorder + "; background: " + instData.activeBackground);
								_this.getElement(curQuestionID, "datePickerTable").setStyle("display", "table");
								break;
							case "Time":
								if (_this.getElement(curQuestionID, "timeInputButton").innerHTML === instData.snippetInstanceReference["Time format"]) {
									_this.setCompleteTime(curQuestionID, now.getHours(), now.getMinutes(), (now.getHours() < 12 ? 0 : 1));
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(curQuestionID, "timeInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.unactiveBorder + "; background: " + instData.unactiveBackground);
								_this.getElement(curQuestionID, "timePickerTable").setStyle("display", "none");
								break;
							case "Both":
								var twinsQuestionID = _this.instData[curQuestionID].twinsQuestionID;
								if (_this.getElement(curQuestionID, "dateInputButton").innerHTML === ODP.Surveo.globalization.getLiteralForCurrentLanguage(instData.snippetInstanceReference["Date format"])) {
									_this.setCompleteDate(curQuestionID, now.getDate(), now.getMonth() + 1, yearNow);
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(curQuestionID, "dateInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.activeBorder + "; background: " + instData.activeBackground);
								_this.getElement(twinsQuestionID, "timeInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.unactiveBorder + "; background: " + instData.unactiveBackground);
								_this.getElement(curQuestionID, "datePickerTable").setStyle("display", "table");
								_this.getElement(twinsQuestionID, "timePickerTable").setStyle("display", "none");
								break;
							default:
								break;
							}
							break;
						case "timeInputContainer":
						case "timeInputButton":
						case "timeInputLabel":
							instData["currentInputType"] = "time";
							switch (ODP.document.getSnippet(_this['qIDsToInstIDs'][curQuestionID])['Input type']) {
							case "Date":
								if (_this.getElement(curQuestionID, "dateInputButton").innerHTML === ODP.Surveo.globalization.getLiteralForCurrentLanguage(instData.snippetInstanceReference["Date format"])) {
									_this.setCompleteDate(curQuestionID, now.getDate(), now.getMonth() + 1, yearNow);
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(twinsQuestionID, "dateInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.unactiveBorder + "; background: " + instData.unactiveBackground);
								_this.getElement(curQuestionID, "datePickerTable").setStyle("display", "none");
								break;
							case "Time":
								if (_this.getElement(curQuestionID, "timeInputButton").innerHTML === instData.snippetInstanceReference["Time format"]) {
									_this.setCompleteTime(curQuestionID, now.getHours(), now.getMinutes(), (now.getHours() < 12 ? 0 : 1));
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(curQuestionID, "timeInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.activeBorder + "; background: " + instData.activeBackground);
								_this.getElement(curQuestionID, "timePickerTable").setStyle("display", "table");
								break;
							case "Both":
								var twinsQuestionID = _this.instData[curQuestionID].twinsQuestionID;
								if (_this.getElement(curQuestionID, "timeInputButton").innerHTML === instData.snippetInstanceReference["Time format"]) {
									_this.setCompleteTime(curQuestionID, now.getHours(), now.getMinutes(), (now.getHours() < 12 ? 0 : 1));
									ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
								}
								_this.getElement(curQuestionID, "timeInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.activeBorder + "; background: " + instData.activeBackground);
								_this.getElement(twinsQuestionID, "dateInputContainer").setAttribute("style", "display: table-cell; border-color: " + instData.unactiveBorder + "; background: " + instData.unactiveBackground);
								_this.getElement(twinsQuestionID, "datePickerTable").setStyle("display", "none");
								_this.getElement(curQuestionID, "timePickerTable").setStyle("display", "table");
								break;
							default:
								break;
							}
							break;
						default:
							break;
						}
					},
					"endHandler" : function (event) {
						if (!ODP.Surveo.params.isInDesigner) {
							ODP.Surveo.methods["_killBubbles"](event);
						}
						clearTimeout(ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.timeoutForHoldingButton);
					},
					"wheelHandler" : function (event) {
						event.preventDefault ? event.preventDefault() : event.returnValue = false;
						var touch = (ODP.Surveo.params.isMobileRenderer) ? event.touches[0] : event;
						var targetElement = (touch.target) ? touch.target : touch.srcElement;
						var tableColumn;
						if (targetElement.className.search("changeableCellsContainer") > -1 || targetElement.className.search("changeCell") > -1) { // think cool way to do that
							if (targetElement.className.search("changeCell") == -1) {
								tableColumn = targetElement.parentNode.parentNode.parentNode;
							} else {
								tableColumn = targetElement.parentNode.parentNode.parentNode.parentNode; // NO NO NO NO
							}
						} else {
							return;
						}
						var curQuestionID = parseInt(targetElement.className.split("_")[1], 10);
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						if (ODP.Surveo.params.deploymentTarget.isMobile) {
							// if (touch.clientY % 5 === 0) {
								if (_this.onTouchMoveLastY > touch.clientY) {
									_this.moveNumber("up", tableColumn);
								} else {
									_this.moveNumber("down", tableColumn);	
								}
							// }
							_this.onTouchMoveLastY = touch.clientY;
						} else {
							if ((touch.detail < 0 || touch.wheelDelta > 0)) {
								_this.moveNumber("up", tableColumn);
							} else {
								_this.moveNumber("down", tableColumn);
							}
						}
						ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
					},
					"holdButtonHandler" : function (direction, tableColumn, seconds, curQuestionID, _this) {
						ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.moveNumber(direction, tableColumn);
						seconds = seconds / 1.5; // tui trqq sa izmisli malko
						if (!ODP.Surveo.params.isMobileRenderer) {
							ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.timeoutForHoldingButton = setTimeout(function () {
								ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.holdButtonHandler(direction, tableColumn, seconds, curQuestionID, _this);
							}, seconds);
						}
						ODP.Surveo.methods.sm_setcomment(curQuestionID, _this, false);
					},
					"moveNumber" : function (direction, tableColumn) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var curQuestionID = tableColumn.id.split("_")[1];
						var cellsToChange = tableColumn.querySelectorAll(".changeCell");
						var instData = _this.getInstData(curQuestionID);
						var tableType = tableColumn.id.split("_")[0];
						var tableTypeCurrentNumber = tableColumn.id.split("_")[0] + "CurrentCounter";
						var maximumNumberAllowed = _this.getMaximumNumberAllowed(tableType, instData);
						var minimumNumberAllowed = _this.getMinimumNumberAllowed(tableType, instData);
						var currentNumber = instData[tableTypeCurrentNumber];
						switch (direction) {
						case "up":
							if (currentNumber >= maximumNumberAllowed) {
								currentNumber = minimumNumberAllowed - 1;
							}
							switch (tableType) {
							case "daysTable":
								_this.setDay(curQuestionID, currentNumber + 1);
								break;
							case "monthsTable":
								_this.setMonth(curQuestionID, currentNumber + 1);
								break;
							case "yearsTable":
								_this.setYear(curQuestionID, currentNumber + 1);
								break;
							case "hoursTable":
								_this.setHour(curQuestionID, currentNumber + 1);
								break;
							case "minutesTable":
								_this.setMinute(curQuestionID, currentNumber + 1);
								break;
							case "ampmTable":
								_this.setAMPM(curQuestionID, currentNumber + 1);
								break;
							default:
								break;
							}
							break;
						case "down":
							if (currentNumber <= minimumNumberAllowed) {
								currentNumber = maximumNumberAllowed + 1;
							}
							switch (tableType) {
							case "daysTable":
								_this.setDay(curQuestionID, currentNumber - 1);
								break;
							case "monthsTable":
								_this.setMonth(curQuestionID, currentNumber - 1);
								break;
							case "yearsTable":
								_this.setYear(curQuestionID, currentNumber - 1);
								break;
							case "hoursTable":
								_this.setHour(curQuestionID, currentNumber - 1);
								break;
							case "minutesTable":
								_this.setMinute(curQuestionID, currentNumber - 1);
								break;
							case "ampmTable":
								_this.setAMPM(curQuestionID, currentNumber - 1);
								break;
							default:
								break;
							}
							break;
						default:
							break;
						}
					},
					"setNumber" : function (curQuestionID, tableType, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var instData = _this.getInstData(curQuestionID);
						if (instData.snippetInstanceReference["Time format"] !== "hh : mm AM/PM" && tableType === "ampmTable") {
							return;
						}
						var maximum = _this.getMaximumNumberAllowed(tableType, instData);
						var minimum = _this.getMinimumNumberAllowed(tableType, instData);
						if (number > maximum) {
							number = maximum;
						}
						if (number <= minimum) {
							number = minimum;
						}
						var cellsToChange = _this.getElement(curQuestionID, tableType).querySelectorAll(".changeCell");
						var curCellToChange = 0;
						var cellsToChangeLength = cellsToChange.length;
						var middleCellNumber = Math.ceil(cellsToChangeLength / 2) - 1;
						var amPM = ["AM", "PM"];
						for (; curCellToChange < cellsToChangeLength; curCellToChange++) {
							var stepBetweenActiveNumber = Math.abs(curCellToChange - middleCellNumber);
							if (stepBetweenActiveNumber === 0) {
								if (tableType == "ampmTable") {
									cellsToChange[curCellToChange].innerHTML = amPM[number];
								} else {
									cellsToChange[curCellToChange].innerHTML = _this.addZeroBeforeNumber(number);
								}
							} else {
								if (curCellToChange < middleCellNumber) {
									if (tableType == "ampmTable") {
										if (number < minimum + stepBetweenActiveNumber) {
											cellsToChange[curCellToChange].innerHTML = 0;
											cellsToChange[curCellToChange].style.opacity = 0;
											cellsToChange[curCellToChange].style.filter = "alpha(opacity=0)";
										} else {
											cellsToChange[curCellToChange].innerHTML = amPM[Math.abs(number - stepBetweenActiveNumber)];
											cellsToChange[curCellToChange].style.opacity = 1;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=100)";
										}
									} else {
										if (number < minimum + stepBetweenActiveNumber) {
											cellsToChange[curCellToChange].innerHTML = 0;
											cellsToChange[curCellToChange].style.opacity = 0;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=0)";
										} else {
											cellsToChange[curCellToChange].innerHTML = _this.addZeroBeforeNumber(number - stepBetweenActiveNumber);
											cellsToChange[curCellToChange].style.opacity = 1;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=100)";
										}
									}
								} else {
									if (tableType == "ampmTable") {
										if (number > maximum - stepBetweenActiveNumber) {
											cellsToChange[curCellToChange].innerHTML =  0;
											cellsToChange[curCellToChange].style.opacity = 0;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=0)";
										} else {
											cellsToChange[curCellToChange].innerHTML = amPM[Math.abs(number - stepBetweenActiveNumber)];
											cellsToChange[curCellToChange].style.opacity = 1;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=100)";
										}
									} else {
										if (number > maximum - stepBetweenActiveNumber) {
											cellsToChange[curCellToChange].innerHTML =  0;
											cellsToChange[curCellToChange].style.opacity = 0;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=0)";
										} else {
											cellsToChange[curCellToChange].innerHTML = _this.addZeroBeforeNumber(number + stepBetweenActiveNumber);
											cellsToChange[curCellToChange].style.opacity = 1;
											cellsToChange[curCellToChange].style.filter = "alpha(Opacity=100)";
										}
									}
								}
							}
						}
						instData[tableType + "CurrentCounter"] = number;
					},
					"setDay" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setNumber(curQuestionID, "daysTable", number);
					},
					"setMonth" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setNumber(curQuestionID, "monthsTable", number);
						_this.setDay(curQuestionID, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[curQuestionID]["daysTableCurrentCounter"]);
					},
					"setYear" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setNumber(curQuestionID, "yearsTable", number);
						_this.setMonth(curQuestionID, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[curQuestionID]["monthsTableCurrentCounter"]);
					},
					"setHour" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var hour = number;
						if (_this.instData[curQuestionID].snippetInstanceReference['Time format'] !== "hh : mm (24)" && number > 12) {
							hour = number - 12;
						}
						_this.setNumber(curQuestionID, "hoursTable", hour);
					},
					"setMinute" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setNumber(curQuestionID, "minutesTable", number);
					},
					"setAMPM" : function (curQuestionID, number) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setNumber(curQuestionID, "ampmTable", number);
					},
					"setCompleteDate" : function (curQuestionID, day, month, year) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setDay(curQuestionID, day);
						_this.setMonth(curQuestionID, month);
						_this.setYear(curQuestionID, year);
					},
					"setCompleteTime" : function (curQuestionID, hour, minute, ampm) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						_this.setHour(curQuestionID, hour);
						_this.setMinute(curQuestionID, minute);
						_this.setAMPM(curQuestionID, ampm);
					},
					"getMaximumNumberAllowed" : function (tableType, instData) {
						var maximum = 0;
						switch (tableType) {
						case "daysTable":
							if (instData.monthsTableCurrentCounter === initialNumberForMonth) {
								maximum = initialNumberForDay;
							} else {
								var year = instData.yearsTableCurrentCounter;
								var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
								if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
									monthLength[1] = 29;
								}
								maximum = monthLength[instData.monthsTableCurrentCounter - 1];
							}
							break;
						case "monthsTable":
							if (instData.yearsTableCurrentCounter === initialNumberForYear) {
								maximum = initialNumberForMonth;
							} else {
								maximum = 12;
							}
							break;
						case "yearsTable":
							maximum = initialNumberForYear;
							break;
						case "hoursTable":
							if (instData.snippetInstanceReference['Time format'] === "hh : mm (24)") {
								maximum = 23;
							} else {
								maximum = 12;
							}
							break;
						case "minutesTable":
							maximum = 59;
							break;
						case "ampmTable":
							maximum = 1;
							break;
						default:
							break;
						}
						return maximum;
					},
					"getMinimumNumberAllowed" : function (tableType, instData) {
						var minimum;
						switch (tableType) {
						case "daysTable":
							if (instData.monthsTableCurrentCounter === backNumberForMonth) {
								minimum = backNumberForDay;
							} else {
								minimum = 1;
							}
							break;
						case "monthsTable":
							if (instData.yearsTableCurrentCounter === backNumberForYear) {
								minimum = backNumberForMonth;
							} else {
								minimum = 1;
							}
							break;
						case "yearsTable":
							// minimum = parseInt(instData.snippetInstanceReference['Starting year'], 10);
							// if (!minimum) {
							// 	minimum = 1900;
							// }
							minimum = backNumberForYear;
							break;
						case "hoursTable":
							if (instData.snippetInstanceReference['Time format'] === "hh : mm (24)") {
								minimum = 0;
							} else {
								minimum = 1;
							}
							break;
						case "minutesTable":
						case "ampmTable":
							minimum = 0;
							break;
						default:
							break;
						}
						return minimum;
					},
					"getTwentyFourHourTime" : function (timeStr) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var date = new Date("1/1/2013 " + timeStr);
						return _this.addZeroBeforeNumber(date.getHours()) + ':' + _this.addZeroBeforeNumber(date.getMinutes()) + ':' + _this.addZeroBeforeNumber(date.getSeconds());
					},
					"getInstData" : function (qID) {
						if (typeof ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[qID] === "undefined") {
							var dateTimePickerTable = ODP.window.document.getElementById("dateTimePicker_" + qID);
							var twinsQuestionID = null;
							var snippetParams = ODP.document.getSnippet(ODP.Surveo.snippets.dateTimePickerWithoutFuturDate['qIDsToInstIDs'][qID]);
							var doubleQID = snippetParams["Question ID"].split(",");
							if (snippetParams["Input type"] === "Both" && qID === doubleQID[1]) {
								dateTimePickerTable = ODP.window.document.getElementById("dateTimePicker_" + doubleQID[0]);
								twinsQuestionID = doubleQID[0];
							} else if (qID === doubleQID[0]) {
								twinsQuestionID = doubleQID[1];
							}
							ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[qID] = {
								"dateTimePickerTable" : dateTimePickerTable,
								"hoursTableCurrentCounter" : initialNumberForHour,
								"minutesTableCurrentCounter" : initialNumberForMinute,
								"ampmTableCurrentCounter" : 0,
								"daysTableCurrentCounter" : initialNumberForDay,
								"monthsTableCurrentCounter" : initialNumberForMonth,
								"yearsTableCurrentCounter" : initialNumberForYear,
								"twinsQuestionID" : twinsQuestionID,
								"currentInputType" : null,
								"snippetInstanceReference" : snippetParams,
								"activeBackground" : getSnippetProperty(snippetParams, "Buttons active background"),
								"unactiveBackground" : getSnippetProperty(snippetParams, "Buttons unactive background"),
								"activeBorder" : getSnippetProperty(snippetParams, "Active border color"),
								"unactiveBorder" : getSnippetProperty(snippetParams, "Unactive border color")
							};
						}
						return ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[qID];
					},
					"getElement" : function (qID, el) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var instData = _this.getInstData(qID);
						return instData["dateTimePickerTable"].querySelector("#" + el + "_" + qID);
					},
					"readySetAnswer" : function (curQuestionID, _this, hideTables) {
						var instData = _this.getInstData(curQuestionID);
						switch (ODP.document.getSnippet(_this['qIDsToInstIDs'][curQuestionID])['Input type']) {
						case "Date":
							var currentDateString = instData.yearsTableCurrentCounter + "-" + _this.addZeroBeforeNumber(instData.monthsTableCurrentCounter) + "-" + _this.addZeroBeforeNumber(instData.daysTableCurrentCounter); // YYYY-MM-DD standart in SM system
							_this.setAnswer(curQuestionID, currentDateString, true);
							if (hideTables) {
								_this.getElement(curQuestionID, "datePickerTable").style.display = "none";
							}
							break;
						case "Time":
							var hour = instData.hoursTableCurrentCounter;
							var minute = instData.minutesTableCurrentCounter
							var second = "00";
							var timeStr = hour + ":" + minute + ":" + second;
							if (instData.snippetInstanceReference['Time format'] === "hh : mm AM/PM") {
								timeStr += " " + (instData.ampmTableCurrentCounter === 0 ? "am" : "pm");
							}
							var currentTimeString = _this.getTwentyFourHourTime(timeStr); // HH:MM:SS standart in SM system
							_this.setAnswer(curQuestionID, currentTimeString, true);
							if (hideTables) {
								_this.getElement(curQuestionID, "timePickerTable").style.display = "none";
							}
							break;
						case "Both":
							var currentString = "";
							var arrayQIDs = instData.snippetInstanceReference["Question ID"].split(",");
							var twinsQuestionID = _this.instData[curQuestionID].twinsQuestionID;
							if (_this.instData[curQuestionID].currentInputType === "date") {
								currentString = instData.yearsTableCurrentCounter + "-" + _this.addZeroBeforeNumber(instData.monthsTableCurrentCounter) + "-" + _this.addZeroBeforeNumber(instData.daysTableCurrentCounter); // YYYY-MM-DD standart in SM system
								_this.setAnswer(curQuestionID, currentString, true);
								if (hideTables) {
									_this.getElement(curQuestionID, "datePickerTable").style.display = "none";
									_this.getElement(twinsQuestionID, "timePickerTable").style.display = "none";
								}
							} else {
								var hour = instData.hoursTableCurrentCounter;
								var minute = instData.minutesTableCurrentCounter
								var second = "00";
								var timeStr = hour + ":" + minute + ":" + second;
								if (instData.snippetInstanceReference['Time format'] === "hh : mm AM/PM") {
									timeStr += " " + (instData.ampmTableCurrentCounter === 0 ? "am" : "pm");
								}
								currentString = _this.getTwentyFourHourTime(timeStr); // HH:MM:SS standart in SM system
								_this.setAnswer(curQuestionID, currentString, true);
								if (hideTables) {
									_this.getElement(curQuestionID, "timePickerTable").style.display = "none";
									_this.getElement(twinsQuestionID, "datePickerTable").style.display = "none";
								}
							}
							break;
						default:
							break;
						}
					},
					"setAnswer" : function (qID, text, isClick) {
						if (typeof text == "undefined") {
							console.error("No text to set answer!");
							return;
						}
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var snippetInstance = ODP.document.getSnippet(_this['qIDsToInstIDs'][qID]);
						var inputType = snippetInstance['Input type'];
						_this.getElement(qID, "tick").setStyle("opacity", "1");
						_this.getElement(qID, "tick").setStyle("filter", "alpha(Opacity=100)");
						switch (inputType) {
						case "Date":
							var date = text.split("-"); //date MUST BE YYYY-MM-DD
							var dateTimePickerRef = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
							var day = date[2];
							var month = date[1];
							var year = date[0];
							_this.getElement(qID, "dateInputLabel").setStyle("display", "block");
							switch (snippetInstance['Date format']) {
							case "dd / mm / yyyy":
								_this.getElement(qID, "dateInputButton").innerHTML = day + " / " + month + " / " + year;
								break;
							case "mm / dd / yyyy":
								_this.getElement(qID, "dateInputButton").innerHTML = month + " / " + day + " / " + year;
								break;
							default:
								break;
							}
							break;
						case "Time":
							_this.getElement(qID, "timeInputLabel").setStyle("display", "block");
							var time = text.split(":"); //time MUST BE HH:MM:SS
							var hour = parseInt(time[0], 10);
							var minute = parseInt(time[1], 10);
							var seconds = parseInt(time[2], 10);
							var amPm = hour >= 12 ? "PM" : "AM";
							switch (snippetInstance['Time format']) {
							case "hh : mm (24)":
								hour = _this.addZeroBeforeNumber(hour);
								minute = _this.addZeroBeforeNumber(minute);
								_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute;
								break;
							case "hh : mm (12)":
								hour = _this.addZeroBeforeNumber((hour > 12 ? hour - 12 : hour));
								minute = _this.addZeroBeforeNumber(minute);
								_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute;
								break;
							case "hh : mm AM/PM":
								hour = _this.addZeroBeforeNumber((hour > 12 ? hour - 12 : hour));
								minute = _this.addZeroBeforeNumber(minute);
								_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute + " " + amPm;
								break;
							default:
								break;
							}
							break;
						case "Both":
							var isDate = (_this.instData[qID]['currentInputType'] === "date") ? true : false;
							if (isDate) {
								var date = text.split("-"); //date MUST BE YYYY-MM-DD
								var dateTimePickerRef = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
								var day = date[2];
								var month = date[1];
								var year = date[0];
								_this.getElement(qID, "dateInputLabel").setStyle("display", "block");
								switch (snippetInstance['Date format']) {
								case "dd / mm / yyyy":
									_this.getElement(qID, "dateInputButton").innerHTML = day + " / " + month + " / " + year;
									break;
								case "mm / dd / yyyy":
									_this.getElement(qID, "dateInputButton").innerHTML = month + " / " + day + " / " + year;
									break;
								default:
									break;
								}
							} else {
								var time = text.split(":"); //time MUST BE HH:MM:SS
								var hour = parseInt(time[0], 10);
								var minute = parseInt(time[1], 10);
								var seconds = parseInt(time[2], 10);
								var amPm = hour >= 12 ? "PM" : "AM";
								_this.getElement(qID, "timeInputLabel").setStyle("display", "block");
								switch (snippetInstance['Time format']) {
								case "hh : mm (24)":
									hour = _this.addZeroBeforeNumber(hour);
									minute = _this.addZeroBeforeNumber(minute);
									_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute;
									break;
								case "hh : mm (12)":
									hour = _this.addZeroBeforeNumber((hour > 12 ? hour - 12 : hour));
									minute = _this.addZeroBeforeNumber(minute);
									_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute;
									break;
								case "hh : mm AM/PM":
									hour = _this.addZeroBeforeNumber((hour > 12 ? hour - 12 : hour));
									minute = _this.addZeroBeforeNumber(minute);
									_this.getElement(qID, "timeInputButton").innerHTML = hour + ":" + minute + " " + amPm;
									break;
								default:
									break;
								}
							}
							break;
						default:
							break;
						}
						ODP.Surveo.params.surveyResults[qID] = text;
					},
					"resetFunction" : function (qID) {
						var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
						var instData = _this.getInstData(qID);
						if (Open.isArray(qID)) {
							qID = qID[0];
						}
						var snippetInstance = ODP.document.getSnippet(_this['qIDsToInstIDs'][qID]);
						var inputType = snippetInstance['Input type'];
						_this.getElement(qID, "tick").setStyle("opacity", "0");
						_this.getElement(qID, "tick").setStyle("filter", "alpha(Opacity=0)");
						switch (inputType) {
						case "Date":
							_this.setCompleteDate(qID, initialNumberForDay, initialNumberForMonth, initialNumberForYear);
							// _this.getElement(qID, "dateInputButton").innerHTML = snippetInstance['Date format'];
							_this.getElement(qID, "dateInputButton").innerHTML = ODP.Surveo.globalization.getLiteralForCurrentLanguage(snippetInstance["Date format"]);
							_this.getElement(qID, "dateInputContainer").style.background = "";
							_this.getElement(qID, "dateInputContainer").style.background = instData.unactiveBackground;
							_this.getElement(qID, "dateInputContainer").style.borderColor = instData.unactiveBorder;
							_this.getElement(qID, "dateInputLabel").setStyle("display", "none");
							_this.getElement(qID, "datePickerTable").setStyle("display", "none");
							break;
						case "Time":
							_this.setCompleteTime(qID, initialNumberForHour, initialNumberForMinute, 0);
							_this.getElement(qID, "timeInputButton").innerHTML = snippetInstance['Time format'];
							_this.getElement(qID, "timeInputContainer").style.background = "";
							_this.getElement(qID, "timeInputContainer").style.background = instData.unactiveBackground;
							_this.getElement(qID, "timeInputContainer").style.borderColor = instData.unactiveBorder;
							_this.getElement(qID, "timeInputLabel").setStyle("display", "none");
							_this.getElement(qID, "timePickerTable").setStyle("display", "none");
							break;
						case "Both":
							var arrayQIDs = instData.snippetInstanceReference["Question ID"].split(",");
							if (qID === arrayQIDs[0]) {

								_this.instData[qID].currentInputType = "date";
								_this.setCompleteDate(qID, initialNumberForDay, initialNumberForMonth, initialNumberForYear);
								_this.getElement(qID, "dateInputButton").innerHTML = ODP.Surveo.globalization.getLiteralForCurrentLanguage(snippetInstance["Date format"]);
								_this.getElement(qID, "dateInputContainer").style.background = "";
								_this.getElement(qID, "dateInputContainer").style.background = instData.unactiveBackground;
								_this.getElement(qID, "dateInputContainer").style.borderColor = instData.unactiveBorder;
								_this.getElement(qID, "dateInputLabel").setStyle("display", "none");
								_this.getElement(qID, "datePickerTable").setStyle("display", "none");
							} else {
								_this.instData[qID].currentInputType = "time";
								_this.setCompleteTime(qID, initialNumberForHour, initialNumberForMinute, 0);
								_this.getElement(qID, "timeInputButton").innerHTML = snippetInstance['Time format'];
								_this.getElement(qID, "timeInputContainer").style.background = "";
								_this.getElement(qID, "timeInputContainer").style.background = instData.unactiveBackground;
								_this.getElement(qID, "timeInputContainer").style.borderColor = instData.unactiveBorder;
								_this.getElement(qID, "timeInputLabel").setStyle("display", "none");
								_this.getElement(qID, "timePickerTable").setStyle("display", "none");
							}
							break;
						default:
							break;
						}
						delete ODP.Surveo.params.surveyResults[qID];
					},
					"orientationChange" : function () {
						var obj = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData;
						var height = Math.min(ODP.Surveo.params.deploymentTarget.fullBodyHeight, ODP.Surveo.params.deploymentTarget.fullBodyWidth);
						var font = 0;
						switch (true) {
						case (height >= 0 && height <= 340):
							font = 60;
							break;
						case (height > 340 && height <= 380):
							font = 70;
							break;
						case (height > 380 && height <= 415):
							font = 80;
							break;
						case (height >= 470 && height <= 515):
							font = 75;
							break;
						case (height > 515 && height <= 530):
						case (height >= 710 && height <= 760):
							font = 85;
							break;
						case (height > 415 && height <= 440):
						case (height > 530 && height <= 560):
						case (height > 760 && height <= 800):
							font = 95;
							break;
						default:
							font = 100;
							break;
						}
						for (var prop in obj) {
							obj[prop].dateTimePickerTable.setStyle("fontSize", font + "%");
						}
					},
					"removeZeroBeforeNumber" : function (str) {
						return parseInt(str.replace(/^0+/, ''), 10);
					},
					"addZeroBeforeNumber" : function (number) {
						number = parseInt(number, 10);
						return (number < 10 ? '0' : '') + number;
					},
					"makeLegalSource" : function (string, withURL) {
						if (typeof string === "undefined") {
							return;
						}
						var additionalProps = "";
						var temp = string.split("url(")[1];
						if (temp && temp.length > 1) {
							if (temp[0] === "'") {
								additionalProps = string.split("')")[1];
								string = string.match(/('(.*)')/)[0];
							} else if (temp[0] === '"') {
								additionalProps = string.split('")')[1];
								string = string.match(/("(.*)")/)[0];
							} else {
								string = temp.substring(0, temp.length - 1);
							}
							if (withURL) {
								string = "url('" + string + "')";
							}
						}
						if (additionalProps == "") {
							additionalProps = " center; background-size: 100% 100%";
						}
						return string.replace(/'|"/g, "") + additionalProps;
					},
					"instData" : {},
					"qIDsToInstIDs" : {},
					"timeoutForHoldingButton" : null,
					"onTouchMoveLastY" : 0
				};
			}

			function getDateDaysBack (startDate, daysBack) {
				var _MS_PER_DAY = 86400000;
				var utc = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
				return new Date(utc - _MS_PER_DAY * daysBack);
			}

			function getSnippetProperty(snippetParams, property) {
				var returnValue = null;
				switch(property) {
					case "Buttons active background":
						returnValue = getBackground(snippetParams, property, true);
						if (!returnValue) {
							returnValue = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA9CAYAAABsrQNfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADaWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcxMjVFMTAwRTMzMkUyMTFBQzYyOUNEMURCMEZGNEIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlERjlDNDQ5NDYyNDExRTNCQzY3QzUzQTcyNDFGMTM2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlERjlDNDQ4NDYyNDExRTNCQzY3QzUzQTcyNDFGMTM2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTZlMzJkNC0xM2Q5LTdiNDctOWVhMi04MWE4NDBhZjA5NWUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzEyNUUxMDBFMzMyRTIxMUFDNjI5Q0QxREIwRkY0QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Y7WwOAAAAbklEQVQoU01PQQ7AIAwiffp+tvNeseviC7bErhStXggUaBXH9bmdT4cZHOYJHWQBEIsZnEYMDYoEhEkjgZKzlL0aMlZEs1nLXK7yNHhtRALu9k6Dh8QIg82lm6EHlRSrLq9tckWqthr6Zd0YEvgB4d91uGMRybMAAAAASUVORK5CYII=') center; background-size: 100% 100%";
						}
						break;
					case "Buttons unactive background":
						returnValue = getBackground(snippetParams, property, true);
						if (!returnValue) {
							returnValue = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA9CAYAAABsrQNfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADaWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcxMjVFMTAwRTMzMkUyMTFBQzYyOUNEMURCMEZGNEIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDOEZBNTZGNDZCRDExRTM5NEUwQTVFRjY2MzNDMENCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDOEZBNTZFNDZCRDExRTM5NEUwQTVFRjY2MzNDMENCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowZjAzODQ3MS0yYWMwLThkNDYtOWQxYy1jOTY3NzAyOWU3YTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzEyNUUxMDBFMzMyRTIxMUFDNjI5Q0QxREIwRkY0QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4r5FCaAAAAQ0lEQVQoU7WMMQ4AMAgCif//o19wdJI2Lpim6VYHAh4B7k6LCBhJGPYNp3ijclX1APoJtIgevXaZOcu3+SP+Ay0ksQAh6FdzZVI1IQAAAABJRU5ErkJggg==')  center; background-size: 100% 100%";
						}
						break;
					case "Numbers background":
						returnValue = getBackground(snippetParams, property, true);
						if (!returnValue) {
							returnValue = "-moz-linear-gradient(top, rgba(114,132,142,0.18) 0%, rgba(0,0,0,0) 36%, rgba(0,0,0,0) 66%, rgba(114,132,142,0.18) 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(114,132,142,0.18)), color-stop(36%,rgba(0,0,0,0)), color-stop(66%,rgba(0,0,0,0)), color-stop(100%,rgba(114,132,142,0.18))); background: -webkit-linear-gradient(top,  rgba(114,132,142,0.18) 0%,rgba(0,0,0,0) 36%,rgba(0,0,0,0) 66%,rgba(114,132,142,0.18) 100%); background: -o-linear-gradient(top,  rgba(114,132,142,0.18) 0%,rgba(0,0,0,0) 36%,rgba(0,0,0,0) 66%,rgba(114,132,142,0.18) 100%); background: -ms-linear-gradient(top,  rgba(114,132,142,0.18) 0%,rgba(0,0,0,0) 36%,rgba(0,0,0,0) 66%,rgba(114,132,142,0.18) 100%); background: linear-gradient(to bottom,  rgba(114,132,142,0.18) 0%,rgba(0,0,0,0) 36%,rgba(0,0,0,0) 66%,rgba(114,132,142,0.18) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2e72848e', endColorstr='#2e72848e',GradientType=0);";
						}
						break;
					case "Check image":
						returnValue = getBackground(snippetParams, property, false);
						if (!returnValue) {
							returnValue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAANkE3LLaAgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAAeAAAAHgAFUXBWwAAKZxJREFUeNrtnXmcHGd557/vW0ffMz235tJ9yzY+wcZgc9jBiSEcTkI2CWHZJJBjWT5cmxBYEgJLWBay2Q3ZkA0JAQw22GCwwTY2+Law8SFL1jGSRiNpNJp7emb67q7j3T+quqe6p0eW8CWbfvSpT3dXd2um+1vP9XufqoGmNa1pTWta05rWtKY1rWlNa1rTmta0pjWtaU170U00v4IXxyJpsD/PFhHi/UjOd10yWHyVCW6T11AoX/fc/Byt+VW/gNYH2t+Buh+NRS6Tcf5W6LxDCNYL2IjgUhXFdvdxSPycgvg+qKkm4JeGbQOOgprGMH+L12qt/B9pcikCEwVCAIJWqXGZCKG4mf3uD8k3PfglYMabwZwF941EjQu4Wk/yBaFznhBoQgiklIDycqYghMYlIowpzmcf0+RY8J9sAj4L4f4G2CdBv4KYsZ63yThfkgbrlUAIIVnbuo4NyQ0UnSIlp1B5m4nOhZisE+t4jBIZLBSFJuCzzvTXIPR1tOureJsW4YtSoweBEEJwbtd5/LfX/A1/9drP0BJq5emZPWTKGa/yFehSYxMma8Qgw5SZVuMo3Cbgs8ZiHwYtRpfWyfu1CJ+VkqQCdKlzQc9F/Pmln+Ctm67D1EzOX3UhujQYnj9EppxGoRCgCckWYXAJ3exWs4wze2bhugn4ebLEx0DorNU7+VMZ4UNCEAPQpMEVg1fyqdd8jjesuRpHObi4CCG4oOdC+loGGJ4/yHR+BlAIgRSSVcLgQjYyzCAT4jxs9XQT8Itmyc+ANNmiJfikNPlDIYgCmJrJG1Zfxccv+zTnd1+E7dq4yq1uCNjetYOOaCfj2RNMZCcrMVkISZ8wuFK2MGaf4LC4EIe9TcAviplXcJ7eyl+LMO8QgghARA/x9s3v5EOX/CVbO7bjKBuF623K21zl4rgOWzq2sbl9C+O5ExxfHAVcLy9LkmhcrHex6EpG5avJq0eagF8we7OCVJwrZZxPS5NrgJAQ0BZK8tZNv80HL/oY/YnBZZ5b/89RNn3xPja3b2OmOMXx9FHcSnUlSAqdS4WJ4+Y4IF9DXv2sCfh5tZb3gLLRZwq8QYvxaWlyJQIdoD3Szh+e937eveO9tIU7cVynFu4Km6McOqNd7Og6F9u1ODC7D0e5SAFCEENjhwwRFYoj2hUsOA82AT8v1vpxKJcIJa/hOi3G30idiwCpgO5oD/9px5/xzi3vJm604CqnGo6D26lAJ8NJtnWeg+1aHEuPULCLCA9yHMl5aLQLhwP660g5DzQBP6fW8VlQDrHYen5bi/BJobFdgHCADa0b+ePzPsS1664jpIW8atkPxw7Lw7K7InSHiB5lR+c5tIRa2De7h4JdREpP9RKSLUjWqALDr3uIyaMPAMeagJ+1XaVgeicdoW7ep4X5mJSsFQIcYGv7dt577gd5Xf+b0KWOo+wqxBU3H3xlawR5Q9tGWkJJji0eYaGYRgpQAhPBJnS2Hr+dIed6xlHAp5qAn5VlHTpCPbxPC/MRIekRAhwFr171Wv5wxwe4sOtSpJANc27DsOw29mAnUF3rUmdjchO98V5GFg8zV5z3wrUniKwWBq+Qr2ZMfZ1R49M4zg1NwL+Q9X2O1WY/n5Uh3iMEHQjQpcalq67k97f+CdvbzkcgqiLGiv9OUUk3fF65SCkZTKxhVbyP0fQIs/lZv7hGIukXOq8iwrDzfY6rIzhNwKcjOb4StAQYXcieP2fQ6OYzmsE7kSQEoEmNqwZ+nXdv/TMGE+sAhYNz5lDrK+mG+x2EgL54PxvbNjOZPclYZrziyQLvgEtic5/7FBm9ie+ZrTQO8cvQEq9lh9bGP0rJJQhCKDA0kyt6r+G3N/4BXeFVuMrLojWmam6Wm1rhOdXwLpWWuCfaQ1+iH117DOV6rxGAFAyoLAlANgE/g3W/F2QUM7SBc2QbX5I6l6DQFZAwWrhm4Dreuvb3iOhRbGUt56NWhtrw6ZWg1uwQHE8f5cYD3+D+0Xsqq0/eMxJMiV7OEymD/pwC7v2/gMJEp0MaxFEUnQwzGz5A8eFNwPBLDO6fgAwTjp7DVTLG3wvBWkBTQtBmtPH6vrfw62t/B1OaOMquZaBOwVWdOfDKfqUUx9IjfGfoeu47/hNUZRoEj2ZUQmYMWZjCALTnDPDVCh7/L0TCW7haSD4CXCoEwzLC3x3679y04zCL+15CI34Dn/d0jFAHr9fifBHJeu8bFnSHe/n11b/Llb2/ioJlnltPST3Tc+p0DgKBq1wOzO3jm/v/ladndyMkKNcDrAuISVg8AdlZhCohAfGcAB58Eh79AMnwWn5PmHxY6KyVHsxtusnnZRfJyU/zdfMtzETWoxb/99kNd80XQdm0hgZ4j2byYSQDSgFI+uNruLr37Vy+6mrseq89A4jV59Rp5GMFjnLYP7uHbw79G4dSB6teKyWYGuhlSI1CbmEpRz/rPjh0LTiLCOHQE9nEe/QYfyUNVvmJHiFBSCJC5xIjTiyyigPZu0i3/QfI7zw74W76CmgmfaEu/kCL8FEh6RMClJBsSGzi7Wv+Ixd2Xl6jR6l6YaJRZcwp9tdXzjU9s6LkFnlk4kFuHPp3jqaPVHOuAMImhG1YOA7ZBf9D2Mwxxa1MM/ULB82OD4I7i9DWMijb+aDRwruFRht4XTcCXFw0WQkwOMrhy84CX3JTHBJh3LGPnV1wN38NlMsaPc6HpM7vK0ESvMXYLYnz+NWBd7I+vv2082rD/apx2G70WAA5K8eu6Ue5+fD1zBbmvCf8vBvSQC/B3HFIpwLvL3KQPfwBe9n9C3lw4v1QziGNATaE+vmoDPOnUvcWtUN6iB3tr2BTcisZa5GCW/C8WUMKyUVamF7NYFjCVPLXUAt3ngVkk/CFAjzxOJvMJH8hTd4lJK0AmpRc0P5q3jz4u/TH1qFwltZwfe8NenF1jbeyv36fCrw+sK/+eVDkrAx3n7iN2499j4XSfPUsBSkgZoLMwfQIZBfrPk/Ag3+hHBzqRAqDC/QkHxEhfkNKNAWYuskFnZdwzep30GImGUys497xHzJTnEIAQkMTGm8nSczJ8UXlcm9txngx3BY+dRC+8jUuNDv5uNS4RuEdrGEtzI7kK7m69zo6Qj3YrnVa3njKAkos/8RKLbU5SoFEULBz3DN2J3eduJW8VURI7326BokQWPMwOQK5NCCXRQlV+bln7ME9/wMhTS7W2/m0ZvJmKb11z4ge4VXdl/PGgbfQE+tDkxp9sdW0mEkm8sfJ2zlvBUQihcZ6abBVasx3vJ2h1C0vDtstX4K2zRgHxrjcaOWTmsG1QhJSAkJamFd3/wqv67mWVrOjoTc28sCGXhrIwVW9meX7XOUiUCyUUtx38g7uO3kHBduLgArQNEiGwU7BxJEV4DoUmOE2jvAQOebPBLD4HQUjj/IbRisf10yuFBJDCYgaUa7ov4or+q+hI9yF5Vq4ygEBnZFuuqN9zJenyNiLCOENkkmNPqmxQ9mkinkOmdtwrEMvoON+CYoTGLHtXGUk+Jw0eI0UXiRqMZO8uutqXtVxFQmj1VenGofhhmG2/nUNgAdDe6WgkkIwW5zmgckfs3PiHvJ2vlotmxp0xSA7AeNHIJ8BoS0LzSXG+SFPcDOzjALZ0wa8eRaGvspv6VE+KQ0uRqILAS1mC6/vv4ZLV72OhNGC7do1H1QIQUfIgzxdGCdjVSELqdEpDS5oORdzbjePO4frNb7nx7Z+BdwyodgGrtUTfEZqXCClt0jfZnbw2q5rubD9tYRlBEc5tXl2pXyrnjn3ngqwFILR7AgPT/2Ep2Z/Ts7KVMO2oUFPDBZPwslhKBf9DkUE2qwyC4xyJ09yKwuMAHNA/rQAy18hJLO8T4vzMc1gCxIpBCTMFn5tzXWc23UxYS3iTSw0OLJd5dBitjIQX0fRzZCyZgAXIRBCo11qnJM8FyO0nT1vvo/S3k89r3xF8lLi8Y28y0jwaamxVfhnjnRHermi61q2tV6MIUxcnBXDcENYauWiq+b5Bh49mj3CI9P3MjS/m5ydqbYeYQN6Y5A6AWNHoFz2iqzK80KAKjLHCLfyBLeT5QgwCSwC1oqAzW3gzIJ+NZGut/F+LcZ/1TTWIr2p/PZQJ29a/Va2tp2LIc2aI92lLscI73HMiNEbW03WXmTemkF5kJEaCU3nonA37cd+yq433k5u7HZP5H+u4W75nyQSO/gjLcrHpWRQ+PmtL7KaKzvfwvr4djSheX1uIHdSH1Ib9bUBkI32B8EG9x9a3MvDUz9hNDdMzs7iKlXtcXujMLofJkfBKlMZ11myAlNqmFvYxd0UOQqMAymgBDgN++Dor0H+dmj7CL2htbxPi/A+KVmFBCkEPdFerll9HX2xQQypeyWbCJxsXLkfuK0+JSBrpdmVeogn5x/AVlb1FxaQdy3+tTTK5w59gIn+P0ad/PJz0AW9BmQI2fNWktFN/JVm8rsIOrxfW9IbWcer2q5mMLoRgVwqQVcS/1fYp56hiq5RrZRX7I6kh3hk+j6mC5MU7Dyu6y0LtUagIwxH9sDkGDiO/57Az3HTjDj7uIUhHqHMcd9z54EiYNd99T7ct0D+NkTbJ+gN9/NRafJeqRGtjA30x1fzxv5r6Y0NIoRYOppWANxov0BQcHPsWXiEx+fuxVblKnwENjY/sBb5m32/x9OnWmU7HYtfDqEuZO9bWB3u46NaiHchSHjCo2QwupnLO66l1ehEIs9MVlwJ7AqQg/fLbpmDC7t5YvYhslaGol3Ecb0SpCUE3VE4vNuHa/v6hgpATnPE2sPN7ONnKE74cBd8uG7gK1+ytg+BPYo0drDO7ObDWoT3CEm4MrGwoWULV/a/ifZQ55LXiQZQOTXgyg7LLTGcfZpH5+4m72SXvF6glMUt9iKfzR1it9mFPfSffwG6rUAeec5XWBft5R+kyevAG0TXpcGayFYuabuKVqPD+8HqDKE2evxM9xWUnCKH0k/z+OwD5K0cZadcDctdcYgpOPAkzM+A49Z5rovjzPG0vZMb1QT7cBgL5NxSfZdd/e7bPgDFx5Dxt3GO3sonpMFvVgCGdJNNyW1c1vt6kmbbiiG45n5drljJ0x1lcyx3gEfm7iLvZLyTriqQHZ50cvxl5hHuCa/H3vcnZ6Ap/wW4eYz4q9kY7uIL0uAqwAQwZYgN0XO5uO1qTBlCKHH68qNa4bFaHsIbeW/WSrNn/hH2L+zCdi0s18Z1FVJATwvEHNj3BMxOU13Er3qui2Wn2Gc/xDfVGPuAMWAKSAPlRqKRBtD5WRAmRuh8LtES/IU0+E3hLxYgYFPbVi7rfR2tZhsKZ3nLUNn8YgrhFSXBfcFiyxVL70FAi9FGq9lB2k5RdHMVwEJo9EmdHaFexgpHGf3gPdj3nkaFvenPITeE3vMOLg938mVpcIUUXlsX0WNsir2CC1pfhylNX/Y5dRvkrtDeLHscqLaXVdVKsVie4+nFR9m7+Di2sv3CVBHSoa8FojYc2AWzUw0cw6HoTPCIdR/fZJJ9wIkAXGslRVAoBbGrMWJXc7nexheFxoUV76tsyXCSC7ouY0PLFiJG5JSFVP2++lBe7+XBWDJZPM6TC/eTKk/4PbT3UqWYdPP8Ze4g337Nh8n/yymWSC78Brhl4qFuXqsl+LQ/iI4ColqMbfFXsi3xSsQyCej0F90bPVanzMeCVGmKJ1MPMpobxlEK5XovNn247gLs2wXz8/5nDkQHVSZrTfJo6cfcSI6jvufOAFkf7op1igBk63vpC23mH/Q23lYPt+LFET3Ctrbz2JzcTpvZCXIFwMHb+oPgFDm78txceYKn0z9jsngMB2ep53OZdEr8dfEkN5fGSGlx1IGP1H6Yi64HO0MstpHflGE+ITQ2VL7vpNHJ+si5bIpdiBTy9MdoTlUVB9+jGlfKLorZ4gRPpR5ivDCKUsrLpwpiIehvhfIc7N0Fqbla8UIBqsiCdYx7SvfxQ5VnBDgJzAI5v1I+ZRGqAVp8K/3hfv6IMD2IJZVECG9BWQpwsJkpjpO2FzCkRkSPIYWs6XvrwzKB+5X9wVDd6HUxI0Gr2Y6lCuSdNK5wERKkJC4NXmMmAMFeO09h9u6lD3LJD0BpdIZ7eZcW4aNSZ6O3jgttZifnJS5ndWSr9wWehp78jBKjaixg1L7O4WT+CE+m7memPFFtvwTQEoHBVijNwf49MJ+qrVuEBFVk1h7mjtJ9/EAVONoA7jOaBpjJjfR3bOUd4Va6yo5f/FYAB4AjIF1eYKY8jqMsDM0krEf8L8DBFXX5qEF+fqZbx5/iTxqduDhk3QVc35OFRlhqvFKPoxkJTvT9Fqnxb8Nlt4NQ9Jit/JkW5UOaxupK9Ok2+9kWfyXdoQEQakUl6lRLf+5KOTl4ENQdDJYqcyJ/iD2LP2PRSoGoXmSF9hgMtsDCSXh6F6QXQGqB4lSCm2bUGuL24k5uV0VGfbhzQB5OX9LVgJDWTV9sDW/r6aNTN6Bo1/6wIGwpoKzKzJQmyFrzWKpMRI+gC31J2qvXWkXtF1CjDqlalUjh4uBgyhCtZgcIh5y9gCscL59IDKlziRahxy2y/+s3MHvHY6wNd/ERLcwfSZ2uygG6KjTI9viltBk9/gqa+4xbvabsqmdeu62sBCl/Hddyy4zk9nIg8xhZO13TVXTFJOuSGrOjir17IJ/zvmNZSV8S3EWOl3bxvdJj/FSVGA2oU0UfrjojwLKHXtXJWzWdzu4ubxSvYFEJjZVlvurm5UVFxk4zV5ok6yziCoeoHq+GQDcQslGehxKosivgCdyqmucdNKkT19sIayHSbgpH2ZXfRZc6m7QQ/XftQ0a6eJ8W4velTktlEL03vI7NsQtJ6EkPrnCXNlb2xob7G3mxqvNg4T2zaM9xLL+fI7m9FJ18YHZKMNBqMhAzOHnEZd9eRSHvea6srBMDzgxPF3bxvfLT7FQljvtw5wNwz8j0Srx3FMxOeDD71nk66FQaLLeu6KrbLEqM5o+QsiaZLo3RH1tLu9mNJjVvQSGwmF25f9q3gCkN+iObQAqO5p+mqHKV4iysm7xZa+NiodEnBKby4faHN7A2cg5RmcCtpCp1yrqKU027qlNU2Mr/cHk7y1TpBFOlEyyUZ7GURWURw9AFA4kwfWGTvXsKHDniUCgqNM3//6T3me0pducf5qbyIZ5CVXvchgLGGQGuhBBXwcyk90v1rwO9HcYXwHZqoRLYvH2KvJ1lNHeYlDVBq9FOT2SArnAfhjTAV2lWglgvqYlljwWrQmsIyRDDhV3k3Qz+BUrCQmOt8D0gJML0hdYzEN7sLfVhLe8ZThXcRJ3MuNL4q/LACiDvZpgsHGe2PEHGXqTslKpjNd4BJ9jSnqRd09m1K8vwEQvL8uBW5qtcF8sa57HcTm4tD7Pbhzt9KgHjzDw4kGOVA7OT4DqweiNs6IYTKT9kBwE08GYlXDJ2mpyTYd6eZqx4mO5wP92hfkJ6GKlEbb/cwKsbA/b+/zazm03aBRzJ7yLvpGtaM1OGGAhtoj+0EV0Y2I3gngZktZI3+/AF3vRg2k4xUz7JvDVNwclhOZY3DCeXXqcJyfa2DtpkiCd3zTNytIjtKKSssgUHyxrlocw93GJPcMAvpmaAzKkEjDMGLAPeqYD5Oe+XXL8V1nfD8VnIWwGg9SBqYCtKbp6ylSfrLDBWPEy72U1HqIek2YmG5r1OiVrpklrProcOkNDa2Ry9mNHSPubtaRCKsIwyENpMl7kaISROJSyLU3T/p1oZCs5PKVUN0UW3wII1zWx5jIKTpeSWsJVT0/dX/pOobnJOew9GWeOhR6YZnyzgVOD6B4BbIl0c5v7sw9xhTzAUaIOeUcA4sxDtfQaXADyAhXk4MuRB3tILR+cgXawN0TQAXvVwwFIlbKdEuZhn1hojpEdI6u20md20GO1IIRDedf1q4a7gfPhy4xq5g3A5Rlnl6Q6tplXvQgIO5WUCyqlXiOt0ZFER9r1/JTdH1lkkZU2StRexleVNrfjxuyLEuIEDMaKHOK9tgJBlcN+jJxifLOCq2iVVt8hi6TB3L97BbW6eY34xddoCBmfw8eLmIOtb38B/Dq/jPUKiizqPjMVhyw6IJmF4FjKleo+tzc9BkaTRfk1qaEKiawZJo4MWvY2Y0UpIRPy2THoRBbGiUuYdlzYKhRS6d4DUHRGnw1hVjnDlAbVdi6LKkbFTZOx5Ck7WOxXUdTxIfm6uUa68POrNi4daObdlNXZO8cBjxxmfyuK4qian23lm83v40eK93OXDnQj0uDbPoQm8EdGe0FoubLmCd4XX8EYZIl71RF/Vi8Vg23kQa4Nj85DKecnhVBW2lMvh1gOX/tVWpRAY0iSuJ4nrCUIyQkiLoEvTU42F8OaEhEAGXEHWieBe5JDVKKKqZRoo5fqqp/J7bwfLsSi4GXLuIgU3Q9HNYysLpZTXozfQmesBK+Wlm04zybmt68nOlrn/iRGmU7llMqaTY3LxEW7OPMyDqvzsetzTBWwCbcCg1srW1it4U/x83qaFiXv929IrYzHYuAU6e2Ek5UF2VK0YUq9jP5OXB/dVvNZ7r0BKMEQIQ5qEZBhdmpjSxBAhEKALA1OGfe+V/q1A+veVUlhuqaoiFd0cLi6WW8BSZcoqv3QWvnJRgfuu79UrAq5ozQqEkqyJ9LIjsZ65mTz3Pn6Q6VS2phpXCre8wGj2cW5NP8j9yuaE77m/cI97uoA1fxG8HRjQ4qxLvpE3JV7Bm7UwbYjahQPDhG3nQE8/TGRgbMHrlaWvwogVQvQzwQ0Wb9R7P7UHQNX78U6XkP5pExINiXdxRyGkX8QJxLJg7WdYpZYULqUCcJ3qtaoqS30VwNW1Wf++hsa6yGq2RtYzM53h/qeGmJxL1y4auLjleY7M3c71hSF2K2flCYzn2irdmOtXbZYqYxcOMiF0Fs0eBrUQiSAMV8HCHMSiMNgl0TSNgqWw1VIlXvHeU4XoUwGvHBw03O+Fak3o6FJHF4a/6d4mvVvN3/TqrYYmdTShIfFuvddoaJUDBYkU0qvy8Q4SyfLcv9R3m2yPb2FHdCvDx6a496l9pDK5Wr3AxbLmOJi6k+sLB9ilXEYDcEvPdUhuuODv/xCnAhlwikdJaREKZjs9WoiEkNUUiHIhlQJTlwx2mUTCGvmyi+WqlaGejjcHPVUuf68UEk3oGNJEkwaGNNCF6d1KD7Th33qPfcDSA18FKusABzZZ3WQ1EtQuL3qiTUyLck5iO9ui2xg6OsbOvQdI5wvVqlpIUA5W6SRPTH2HrxZH2OfPTlXUqTKBdvj5Bky9JwN24QhzbpmU2U2XHqM9UOfgKkjNKYQQrOkO0xI1yVoOZdc9/RAta0UTAoILNYscAk1qHrQKSH/TpX8rlp5buvU83PNgo+rV9d5bAxat6skSSSWrewOG3lGY0BNc2HIR6/VN7B4eZuf+vaRz+ZrP6ZTJFsd4fPoH3FgeZ6huvMZ6IeA2Ojep3pPt0knmlcui0U6bkaBTSLTguuViWoGSDHZFaY9HKFguBdv2RPRnCM8reXKtBws0oflQzSWAsvLYrIGsBQ4CL2QbNSG7Gq6FXgPXC9MeYFGF6+dyP48LBO16O+cnLmK1WM/OA7vZeWAPuWKxWowKDdwy2dwQP536Ad8tT9TAfc4EjF8UcL0nlwG3NMaCk2fOSBIzk/RIDR1/VUkpyGQcLAt6WiKsSsYp2g4Fx/bOlBNLK1LVVakG1bMUDXK4EOhC973V9DffM+WSBy9B15e8uerBOpow/BxseP4pDDQhA/nXAy2CnisCcP3irsvo4aLEZfTQzwMHHuPRQ09Ttq1qKyk1cHKksge4e/YubitPcSggPT6nAsazARyEbPuQnfIUmfIss2YXCb2FXk1Hr1S7SsFC2qZYdOltizHY1krZdcnaJWiUf4NLj4H7BO5r0lsTNKTpwzOr9yvh2ZBLIXopDy8VWhX4lQjgCSz1+VdW820l94rAPj9A0xca5PzoJcSsVh4YepTHhndj2Zb3+/uKlpVmYnEXP5q5izvLMwwH1Kn8iwH3VIAbQrbmyZdnmZEmVriLdVLHCHpiLm9TKDqsamtlINnmQy56atNK+bjBfi/nLnluTc6tuV0K0RWvrYDWRG2xtVKIrnivF5q1qvcu5V9YY27knOhFiKLJD5/6MXtG92M5Vo2say0yvvA4t83cxd32IiM+3Dmg8HwIGM8FYKrjbh5kC7CtefKFMWb0BE54FRul7o2jVqrHfMFiMVuiIx5jXXs3CEHaLuDgriyI1FTKfs6VZsBTK97rVcyG9HOtMBt6c02hVc3NAciBNqnSFi3lYVGFK4XO6tAGtkcvxCnArbt+yP7xIRzXWRKAgNIMh2fv4+bUTh50Mhz1BYzU8ylgPJeAqfNk2y1SLpxgDkUq3MtazSS6tGQI+UKZ+UyB9ngL69t7kUgW7SwObkNPDubiSrVsBDzU8L2w6rHVCrrSIgUKLa0BYFnbEy+1SUGhZKnAEkIipc7G8DlsCp/L7HyK23bfxqHJg8HBfJSC0izD03fz7dSD/MwtcSxwflDpxYZ7JoCXVdhuESt/jJQQpKMDbNBMIkIgKpVzoWyxkMnREW9hXXsfcT1KylrEVnbD3lj6fa4ufY+tFFSB3ja4Tw8WXX4bVK2sKyE6UE1ry9qkpcKqGqKl57mGMNkQ2sE6cysnZse4ZddNHJ0dqTnJTrnYxTF2nfwe1y/ubihguJwFdqaXcHCDkJWDVTjBomsxG+qi24jTXmkXpYCiZTGzkCYeirK2rY+4EWPOWsDGbqhQ6dVwbNRUzno9YD9kG9KsLbSqB0N9oVVfWFV64Ipy5RdVShCWMTaFXsGgsYmjsyPc8tS3GVs4UZkgqXwLVn6cPaM3cn32IHtxq9Lj4rOdwHixAS9ro5SNnTvGgltkNtZPnxFbgiwElC2LqVSKlkicdW0D9IZXMWvNUVLluqVFzfdGc1mINaS5BDgIM1hwVUI1/m29BweLLbSlHFzpf5UkLBOsN8+lR1/DgamnuWX3DZxcPIEIjLy6FoX0IR48cTM35Ueq5wdN+xMY5RermHouAQfDtZeXFU7hBFkrzVR4Fe1GC90yIG3aymFy3oPc39rHqlCPB9ktIaTy+t1gD1unWAU9tKaQEmatACIMDM3ft8yD9WUhuqJYCSRxrY0NoVfQofXz8NF7+MHeG5jKjleVNgBlkUsf4sGjX+PG0iSH/fODpl8MAeP5BtyojbIL42SLM0xFVtESaqMvqF87rsPE/CyGZrA6Ocj62HoW3QWyThYh5HKvrYTiFb15KWQvAy4bKVx6tSeuVNHCr5wTWjurzR20ii4ePnYXtw99h7n8zNKkigSnyGLqKX587Hq+ay1wLHB+UP5shftsAS/3ZLBLM+TLKeZCHYRDSXqCvbKjHMbnp9CFxmDrIKuj60g7acoUkULWeqvfDlVAV4uqZYADAkiltQqIHkbAg/VA/q0sLya1HtYar8BwYjx07E5uP/ht5vLT/pCBP2RXYH76Qb43ejO325nqyV8vqoDxQgFu2CuXZsilhxiLrMIMdzIoDYylCQvF1OI0mtQYaBlkfXyTJ3e6iyDkUlHl97lVFaumiKqXLoOw9WWLDlpAsqxozzoGSa2XPn07jgV3HP4Wtw19nXRpoWZlqzzPiZmd3Dp2Gz+xcxzzpcfUiy1gvNCAl/XKToFyZpjpUBdauINezSC8tEihmMxM4zgOq+J9rIttxFVQUHlAYUqzNgfX5V5jWU5e6o+DBZdZXUIM9sFeMdemraZfP4dy2eKO4W/x4+FvU3QKnud6IoYqzzM69kNuOHkH9zvF6lkGz9t4zdkOOBiyq5Dnfs5oqAMnuooBPeRd68ObHXaZSk+TKWUYTK5hQ3wrhjDJuGlcXH9Up3ZBwQh6dU1ODuZiMwB96T2VKtoUYZJikE5tE4uFFHcOf5O7hm+onmYivClLNz/B/tEf8Z3pB3nUtTgeGK+p9LhnPdznA3B9uLYAd/4ppswkVriTLj1KotJGgWKxuEC6lKavZYC18U1EZIy8m8VR1rKKurayXvJYMyhbVuVMs/oaQ3qh2RQR2uQ62uV6ZvNTfHfoS/z06E2U3VJ1JUu5uLkT7Bn5Dt+a3cljgfGaZ3UKycsJcL0nW4A9v4cJqZGJ9tFvxGmV3lIvCpeF4jwLhTnawp1saNlGXEuSd7OUVXlZWK7JyXIJaNWb60SQitIVka20irUk5Vpm8uN8Z+h/8eDoD3CVU4XrlCmkR3js6Pe4OfUkT/n5NghX8RKz5/PP6ixbV04PM49gMdxGq5mkS0ikdxqHSyqfYjY3RXu0m/WJrcS0VsqqiI3lz19VFCoz0N/6smQN5MDB4D8fFq20yU3ERR+H55/ilkP/wM6xW6vqlJCegLEwxEMjN/Kdhb3s8eFOna0CxtkAuGJLEyIKJzPCfHmRuWgPLeEO+qqql4RsOU0qP0V7tIe1iS0ktW6KKo9FoWZ9tzpsV12EqM3P1XZJ6MREN0mxiSg9HJp7guv3f4qnpu9FKVUd7HPyLM7u4ifHb+W2xYPs9/PtWS1gnE2AVT3k/ATZ0hyz4S4i4Q76K6oXAjKlRcYzx4jqCVYnttBu9GAri5Iq+suI+vK5K1lbaRt+axQXvbSxiYjo5FDq53xj/18xlHochVsdC7JzzE/+jNtHbuJHmWMM+XCDFzh5SdsL+ZfP3Bppc5p87iQzZgIV72O90JCVXJgtZxjPHiVhJlmd2EKnMYCrHEoq5/WwjdZ8AznakCatYoA2sZmI6OCxydu5fuhTHF7YhRDO0nlTaaZP3s+tIzdzV9GbwJioEzBoAj5zb65AtkuzFLJjzIWSEF3Fas1XvTQJRafAeGaEZKiD/vgG2o0+lHApuFlvnKcyZyVqx2MNYZCU62iXWwmJVu498Q2+ffhvOZ7Zj/AvzQRQXmBy5PvcMHo795cXOMLS+UGFs2Ed96UMuEYQKacpLxxkUguTTwywTgt5l06UPuSx9GEUMBDbRJe5hpCIknXnl4bfqwv4OiERpV3bQIfcQogE9459k5uPfJ6J7BHvGtXeb+AWU5w4+n2+NXonO3116qyZwHipAw6G60peLtt5rIUh5oxWyvF+1momoUrxVXYKjKaHMLQQg4nNtJl9hESYosqCcJE+ZFNE6NI2061tx3Vc7j/5Lb5/9AtM5UeWLsjm4uSmGN77L/zb5E6ecEpVAWOBs2QC4+UCOAi5DFiuhTX7JJNI5hP99BtRWpeG7G1GM0OYWpje2AbajQHisp28WkATGiEZp0ffSo++Hdux+eGxf+T7I18kVZpYOvXUxcpPMbz3n/n32V087atTZ90ExssJcL0nWyic1D7m9Aj5WD+9RpQWKRBCepCPpfdRdooMxDfTbvbTZWwgKfvp0bfQpq2m7BS5c/SfuXP0n8ja80vnU9mU54f4+a6/59/mD7Dfn8A45UU8m4CfH0HEApy5vczZWWZbVtMVaqGjsq7sKofx3CEWyzOsaTmHFqOLiGxBFxGy1jw/GfsqPx79Mnl7sXrqjFMmP3+QR/f8Ezemj3KI5VdoVbyM7Wz5A9HBXrkMOIsjpEsLzCbW0BlqobMCWeEyWxhloTRFe7gfpRxmCse568S/cNeJ/0fZKS7BLZKZfJS793yZm7InaiYwMpzl67gvN8CNPNnOjJLNTzMd6yUeaadH6ujShzxZOMrB+Yc5mTvIzya/y77UA9W/ASEEWHkWxh/mjv1f40e5CYZZOoUky0tkqe/lBrgCWQXDde4kuYWDjLespTXSwSrd8K8MhKLgZBjPj5Cx5gDvotpoUJxnYvSn3DZ0Az/OT1VPIXleroHRBPzse2WrtEBp/ggT0U5krJt+3SQEtZd/qmyFFCeP3cH3D3ydn5QXq3+FpCJg/FLBPVsBL5c2wS7NU5p8lJPxPmS8nzVByJU/AZCdZHj4Fm4+9F0esIvP/jqPTcAvbBtluzbO9FNMhZMUo92sMmMk/OtBOpkTDA3dwE2Hv8/D7vILnLj8kpr2EvgdVTBcu2Wsmb1M4bKoGWBlSc8f5qlDN3Prsbt53G+DXrITGM+1iZfYwRjGu+RTjxZiVXI9a0ItxHLTzC0e5ajf31baIOuXHe5LDTB4844hoAXvsk+teJdjLOJJjileBov0v8yAK5ANvGt7hX3PtvwqufjLImC8nAFXfm/pwxWBYkw14TataU1rWtOa1rSmNa1pTWta05rWtKY1rWlNa1rTmta0pjWtaU1rWtN+Gez/AzHjo8OrIysBAAAAAElFTkSuQmCC";
						}
						break;
					case "Active border color":
					case "Unactive border color":
						returnValue = getColor(snippetParams, property);
						if (!returnValue) {
							returnValue = "";
						}
						break;
					case "Buttons text color":
						returnValue = getColor(snippetParams, property);
						if (!returnValue) {
							returnValue = "#F1F1F1";
						}
						break;
					case "Big numbers color":
						returnValue = getColor(snippetParams, property);
						if (!returnValue) {
							returnValue = "#3373AA";
						}
						break;
					case "Small numbers color":
						returnValue = getColor(snippetParams, property);
						if (!returnValue) {
							returnValue = "#A4ABB0";
						}
						break;
					default:
						returnValue = null;
						break;
				}
				return returnValue;
			}
			
			function getBackground(snippetParams, property, url) {
				var _this = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.makeLegalSource;
				var surveoTheme = ODP.Surveo.params.surveoTheme;
				var background = null;
				if (typeof snippetParams[property] != "undefined" && snippetParams[property]) {
					if(snippetParams[property] != "") {
						background = _this(ODP.document.resource(snippetParams[property]), url);
					}
				}
				if (surveoTheme && surveoTheme.surveoDateTimePicker && surveoTheme.surveoDateTimePicker[property] != null) {
					if(surveoTheme.surveoDateTimePicker[property] != "") {
						background = _this(surveoTheme.surveoDateTimePicker[property], url);
					}
				}
				return background;
			}

			function getColor(snippetParams, property) {
				var color = null;
				var surveoTheme = ODP.Surveo.params.surveoTheme;
				if (typeof snippetParams[property] != "undefined" && snippetParams[property]) {
					if (snippetParams[property] != "") {
						color = snippetParams[property];
					}
				}
				if (surveoTheme && surveoTheme.surveoDateTimePicker && surveoTheme.surveoDateTimePicker[property] != null) {
					if (surveoTheme.surveoDateTimePicker[property] != "") {
						color = surveoTheme.surveoDateTimePicker[property];
					}
				}
				return color;
			}
			
			function loadSnippetCSS(cssAddOn) {
				var fontSizeForInnactiveNumbers = "80%";
				var fontSizeForActiveNumbers = "120%";
				var buttonAvtiveBackground = getSnippetProperty(snippet, "Buttons active background");
				var buttonUnavtiveBackground = getSnippetProperty(snippet, "Buttons unactive background");
				var numbersBackground = getSnippetProperty(snippet, "Numbers background");
				var borderAvtiveColor = getSnippetProperty(snippet, "Active border color");
				var numbersFontColor = getSnippetProperty(snippet, "Big numbers color");
				var buttonsFontColor = getSnippetProperty(snippet, "Buttons text color");
				var numbersTextColor = getSnippetProperty(snippet, "Small numbers color");

				var css = [];
				css.push(
					"#dateTimePicker_" + cssAddOn + " { ",
					"font-size: 100%;",
					"width:100%;",
					"height:100%;",
					"overflow:hidden;",
					"padding: 1em;",
					"cursor: default;",
					"transform: translate3d(0,0,0); -webkit-transform: translate3d(0,0,0);",
					"-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;",
					"-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;",
					"}",
					"#dateTimePicker_" + cssAddOn + " div { ",
					"-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;",
					"}",
					".datePickerTable_" + cssAddOn + " { ",
					"text-align: center;",
					"padding-top: 1em;",
					"}",
					".timePickerTable_" + cssAddOn + " { ",
					"text-align: center;",
					"padding-top: 1em;",
					"}",
					".controlButtonsPlus_" + cssAddOn + " { ",
					"display: table-cell;",
					"color: " + buttonsFontColor + ";",
					"cursor: pointer;",
					"font-family: " + ODP.Surveo.params.defaultFontFamily + ";",
					"font-weight: bold;",
					"padding: 0.5em 3em;",
					"background: " + buttonAvtiveBackground + ";",
					"border-top-left-radius: 5px;",
					"border-top-right-radius: 5px;");
				if (borderAvtiveColor !== "") {
					css.push("border: 1px solid " + borderAvtiveColor + ";");
				}
				css.push("}",
					".controlButtonsMinus_" + cssAddOn + " { ",
					"display: table-cell;",
					"color: " + buttonsFontColor + ";",
					"cursor: pointer;",
					"font-family: " + ODP.Surveo.params.defaultFontFamily + ";",
					"padding: 0.5em 0em;",
					"font-weight: bold;",
					"background: " + buttonAvtiveBackground + ";",
					"border-bottom-left-radius: 5px;",
					"border-bottom-right-radius: 5px;");
				if (borderAvtiveColor !== "") {
					css.push("border: 1px solid " + borderAvtiveColor + ";");
				}
				css.push("}",
					".middleCell_" + cssAddOn + " { ",
					"color: " + numbersTextColor + ";",
					"display: table-row;",
					"font-family: " + ODP.Surveo.params.defaultFontFamily + ";",
					"font-size: " + fontSizeForInnactiveNumbers + ";",
					"font-size: 1em;",
					"}",
					".activeMiddleCell_" + cssAddOn + " { ",
					"font-size: " + fontSizeForActiveNumbers + ";",
					"font-weight: bold;",
					"}",
					".paddingDiv_" + cssAddOn + " { ",
					"display: table-cell;",
					"padding-top: 2em;",
					"}",
					".changeableCellsContainer_" + cssAddOn + " { ");
				if (borderAvtiveColor !== "") {
					css.push("border-left: 1px solid " + borderAvtiveColor + ";", "border-right: 1px solid " + borderAvtiveColor + ";");
				}
				css.push("background:" + numbersBackground + ";",
					"}",
					".inputButton_" + cssAddOn + " { ",
					"cursor: pointer;",
					"padding: 0.5em;",
					"vertical-align: middle;",
					"width: 10em;",
					"color: " + buttonsFontColor + ";",
					"font-weight: bold;",
					"font-family: " + ODP.Surveo.params.defaultFontFamily + ";",
					"background: " + buttonUnavtiveBackground + ";",
					"border-radius: 5px;",
					"border-width: 1px;",
					"border-style: solid;",
					"}",
					".inputLabel_" + cssAddOn + " { ",
					"font-size: 70%;",
					"display: none;",
					"color: " + buttonsFontColor + ";",
					"text-align: center;",
					"}",
					".datePickerColumn_" + cssAddOn + " { ",
					"display: table-cell;",
					"}",
					".datePickerColumnContainer_" + cssAddOn + " { ",
					"display: table;",
					"}",
					".timePickerColumn_" + cssAddOn + " { ",
					"padding: 0em 1em;",
					"} ",
					".tickImg_" + cssAddOn + " { ",
					"transition: opacity 500ms;",
					"-webkit-transition: opacity 500ms;",
					"padding: 1.2em 0 0 0.3em;",
					"width: 2em;",
					"opacity: 0;",
					"filter: alpha(Opacity=0);",
					"} ",
					".activeNumbers_" + cssAddOn + " { ",
					"color: " + numbersFontColor + ";",
					"} ",
					".slashDotsColumn_" + cssAddOn + " { ",
					"display: table-cell;",
					"padding: 0 0.3em 0 0.3em;",
					"vertical-align: middle;",
					"color: " + numbersFontColor + ";",
					"font-size: 2em;",
					"} ");
				ODP.document.addRulesToMainStyleSheet(css.join(''));
			}

			function getHoursTable(idAddOn) {
				var currentCell = 0;
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var hoursTable = [];
				var hoursTableMiddleCells = [];

				hoursTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						hoursTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + currentNumberToRender + '</span>');
					} else {
						hoursTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + currentNumberToRender + '</span>');
					}
				}
				hoursTableMiddleCells.push('</div>');

				hoursTable.push(
					'<div id="hoursTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '" style="display: table-cell;">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					hoursTableMiddleCells.join(''),
					'</div>',
					'<div style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '" style="display: table-cell;">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return hoursTable.join('');
			}

			function getMinutesTable(idAddOn) {
				var currentCell = 0;
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var minutesTable = [];
				var minutesTableMiddleCells = [];

				minutesTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						minutesTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + currentNumberToRender + '</span>');
					} else {
						minutesTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + currentNumberToRender + '</span>');
					}
				}
				minutesTableMiddleCells.push('</div>');

				minutesTable.push(
					'<div id="minutesTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					minutesTableMiddleCells.join(''),
					'</div>',
					'<div style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return minutesTable.join('');

			}

			function getAMPMTable(idAddOn) {
				var currentCell = 0;
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var ampmTable = [];
				var minutesTableMiddleCells = [];

				minutesTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						minutesTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + currentNumberToRender + '</span>');
					} else {
						minutesTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + currentNumberToRender + '</span>');
					}
				}
				minutesTableMiddleCells.push('</div>');

				ampmTable.push(
					'<div id="ampmTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '" style="display: table-cell;">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					minutesTableMiddleCells.join(''),
					'</div>',
					'<div class="" style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '" style="display: table-cell;">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return ampmTable.join('');
			}

			function getColumnContent(tableType, idAddOn) {
				var columnContent;

				switch (tableType) {
				case "Days":
					columnContent = getDaysTable(idAddOn);
					break;
				case "Months":
					columnContent = getMonthsTable(idAddOn);
					break;
				case "Years":
					columnContent = getYearsTable(idAddOn);
					break;
				case "Hours":
					columnContent = getHoursTable(idAddOn);
					break;
				case "Minutes":
					columnContent = getMinutesTable(idAddOn);
					break;
				case "ampm":
					columnContent = getAMPMTable(idAddOn);
					break;
				default:
					break;
				}

				return columnContent;
			}

			function getPickerSetColumn(tableType, idAddOn) {
				var pickerColumn = [];
				var columnContent = getColumnContent(tableType, idAddOn);
				pickerColumn.push(
					'<div class="datePickerColumn_' + idAddOn + '">',
					'<div class="datPickerColumnContainer_' + idAddOn + '">',
					columnContent,
					'</div>',
					'</div>');
				return pickerColumn.join('');
			}

			function getPickerNowColumn(tableType, idAddOn) {
				var pickerColumn = [];
				var columnContent = getColumnContent(tableType, idAddOn);
				if (idAddOn === "undefined") {
					idAddOn = selectedQuestionID;
				}
				if (tableType === "Minutes") {
					var paddingColumn = '<div class="slashDotsColumn_' + idAddOn + '" style="padding: 0 0.43em 0 0.43em;"></div>';
					if (snippet["Time format"] !== "hh : mm AM/PM") {
						paddingColumn = "";
					}
					pickerColumn.push(
						'<div class="slashDotsColumn_' + idAddOn + '" style="padding: 0 0.3em 0 0.32em;">:</div>',
						'<div class="datePickerColumn_' + idAddOn + '">',
						'<div class="datPickerColumnContainer_' + idAddOn + '">',
						columnContent,
						'</div>',
						'</div>',
						paddingColumn);
				} else {
					pickerColumn.push(
						'<div class="slashDotsColumn_' + idAddOn + '">/</div>',
						'<div class="datePickerColumn_' + idAddOn + '">',
						'<div class="datPickerColumnContainer_' + idAddOn + '">',
						columnContent,
						'</div>',
						'</div>',
						'<div class="slashDotsColumn_' + idAddOn + '">/</div>');
				}
				return pickerColumn.join('');
			}

			function getPickerCancelColumn(tableType, idAddOn) {
				if (idAddOn === "undefined") {
					idAddOn = selectedQuestionID;
				}
				var pickerColumn = [];
				var columnContent = getColumnContent(tableType, idAddOn);

				pickerColumn.push(
					'<div class="datePickerColumn_' + idAddOn + '">',
					'<div class="datPickerColumnContainer_' + idAddOn + '">',
					columnContent,
					'</div>',
					'</div>');
				return pickerColumn.join('');
			}

			function getDaysTable(idAddOn) {
				var currentCell = 0;
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var daysTable = [];
				var daysTableMiddleCells = [];

				daysTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						daysTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + currentNumberToRender + '</span>');
					} else {
						daysTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + currentNumberToRender + '</span>');
					}
				}
				daysTableMiddleCells.push('</div>');

				daysTable.push(
					'<div id="daysTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '" style="display: table-cell;">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					daysTableMiddleCells.join(''),
					'</div>',
					'<div class="" style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '" style="display: table-cell;">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return daysTable.join('');
			}

			function getMonthsTable(idAddOn) {
				var currentCell = 0;
				var monthsTable = [];
				var monthsTableMiddleCells = [];
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]; // get this from snippet parameters

				monthsTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						monthsTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + months[currentNumberToRender] + '</span>');
					} else {
						monthsTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + months[currentNumberToRender] + '</span>');
					}
				}
				monthsTableMiddleCells.push('</div>');

				monthsTable.push(
					'<div id="monthsTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '" style="display: table-cell;">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					monthsTableMiddleCells.join(''),
					'</div>',
					'<div class="" style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '" style="display: table-cell;">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return monthsTable.join('');
			}

			function getYearsTable(idAddOn) {
				var currentCell = 0;
				var middleCellNumber = parseInt(Math.ceil(numbersToRender / 2), 10); // 3
				var yearsTable = [];
				var yearsTableMiddleCells = [];

				yearsTableMiddleCells.push('<div class="changeableCellsContainer_' + idAddOn + '" style="display: table; width: 100%;">');
				for (; currentCell < numbersToRender; currentCell++) {
					var currentNumberToRender = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.addZeroBeforeNumber(initialNumberForDay + (currentCell - middleCellNumber));
					var stepBetweenActiveNumber = Math.abs(currentCell - middleCellNumber + 1);
					var fontSize = maximumScaleFactor - ((activeNumberScaleFactor - minimumScaleFactor) / middleCellNumber) * stepBetweenActiveNumber;

					if (stepBetweenActiveNumber === 0) { // ACTIVE NUMBER
						yearsTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell activeNumbers_' + idAddOn + ' activeMiddleCell_' + idAddOn + '">' + currentNumberToRender + '</span>');
					} else {
						yearsTableMiddleCells.push('<span class = "middleCell_' + idAddOn + ' changeCell" style="font-size: ' + fontSize + '%; opacity: ' + (fontSize / 100) + '">' + currentNumberToRender + '</span>');
					}
				}
				yearsTableMiddleCells.push('</div>');

				yearsTable.push(
					'<div id="yearsTable_' + idAddOn + '" style="display: table-row;">',
					'<div style="display: table-row; width: 100%;">',
					'<div style="display: table-row;">',
					'<span id="plusButton_' + idAddOn + '" class="controlButtonsPlus_' + idAddOn + '" style="display: table-cell;">+</span>',
					'</div>',
					'<div style="display: table-row;">',
					yearsTableMiddleCells.join(''),
					'</div>',
					'<div class="" style="display: table-row;">',
					'<span id="minusButton_' + idAddOn + '" class="controlButtonsMinus_' + idAddOn + '" style="display: table-cell;">-</span>',
					'</div>',
					'</div>',
					'</div>');

				return yearsTable.join('');
			}

			function getDateInputButton(idAddOn) {
				var dateSetButton = [
					'<div id = "dateInputContainer_' + idAddOn + '" class = "inputButton_' + idAddOn + '" style="display: table-cell; ">',
					'<div id = "dateInputButton_' + idAddOn + '" style="text-shadow: 1px 1px 0px #979797; text-align: center;">',
					// snippet['Date format'],
					ODP.Surveo.globalization.getLiteralForCurrentLanguage(snippet["Date format"]),
					'</div>',
					'<div id = "dateInputLabel_' + idAddOn + '" class = "inputLabel_' + idAddOn + '">',
					// snippet['Date format'],
					ODP.Surveo.globalization.getLiteralForCurrentLanguage(snippet["Date format"]),
					'</div>',
					'</div>'
				];
				return dateSetButton.join('');
			}

			function getTimeInputButton(idAddOn) {
				var timeSetButton = [
					'<div id = "timeInputContainer_' + idAddOn + '" class = "inputButton_' + idAddOn + '" style="display: table-cell; ">',
					'<div id = "timeInputButton_' + idAddOn + '" style="text-shadow: 1px 1px 0px #979797; text-align: center;">',
					snippet['Time format'],
					'</div>',
					'<div id = "timeInputLabel_' + idAddOn + '" class = "inputLabel_' + idAddOn + '">',
					snippet['Time format'],
					'</div>',
					'</div>'
				];
				return timeSetButton.join('');
			}

			function getDatePickerTable(idAddOn) {
				var datePickerTable = ['<div id = "datePickerTable_' + idAddOn + '"  class = "datePickerTable_' + idAddOn + '"  style="display: none;">'];
				switch (snippet['Date format']) {
				case "dd / mm / yyyy":
				case "dd / mm / yy":
					datePickerTable.push(
						getPickerSetColumn("Days", idAddOn),
						getPickerNowColumn("Months", idAddOn),
						getPickerCancelColumn("Years", idAddOn),
						'</div>');
					break;
				case "mm / dd / yyyy":
				case "mm / dd / yy":
					datePickerTable.push(
						getPickerSetColumn("Months", idAddOn),
						getPickerNowColumn("Days", idAddOn),
						getPickerCancelColumn("Years", idAddOn),
						'</div>');
					break;
				default:
					break;
				}
				return datePickerTable.join('');
			}

			function getTimePickerTable(idAddOn) {
				var timePickerTable = [
					'<div id = "timePickerTable_' + idAddOn + '"  class = "timePickerTable_' + idAddOn + '"  style="display: none;">'];
				switch (snippet['Time format']) {
				case "hh : mm (24)":
					timePickerTable.push(
						getPickerSetColumn("Hours", idAddOn),
						getPickerNowColumn("Minutes", idAddOn),
						'</div>');
					break;
				case "hh : mm (12)":
					timePickerTable.push(
						getPickerSetColumn("Hours", idAddOn),
						getPickerNowColumn("Minutes", idAddOn),
						'</div>');
					break;
				case "hh : mm AM/PM":
					timePickerTable.push(
						getPickerSetColumn("Hours", idAddOn),
						getPickerNowColumn("Minutes", idAddOn),
						getPickerCancelColumn("ampm", idAddOn),
						'</div>');
					break;
				default:
					break;
				}
				return timePickerTable.join('');
			}

			function GetHTMLStructure() {
				var firstQuestionID = "";
				var secondQuestionID = "";
				var tickImg = getSnippetProperty(snippet, "Check image");
				if (Open.isArray(selectedQuestionID)) {
					firstQuestionID = selectedQuestionID[0];
					secondQuestionID = selectedQuestionID[1];
				} else {
					firstQuestionID = selectedQuestionID;
					secondQuestionID = selectedQuestionID;
				}
				var html = [];
				html.push("<div id='dateTimePicker_" + firstQuestionID + "'>");
				html.push("<div style = 'display: table; margin: 0 0 0 1.5em;'>");
				switch (snippet["Input type"]) {
				case "Date":
					html.push(getDateInputButton(firstQuestionID));
					html.push("<img id='tick_" + firstQuestionID + "' class='tickImg_" + firstQuestionID + "' src=" + tickImg + " />");
					html.push("</div>");
					html.push(getDatePickerTable(firstQuestionID));
					break;
				case "Time":
					html.push(getTimeInputButton(secondQuestionID));
					html.push("<img id='tick_" + secondQuestionID + "' class='tickImg_" + secondQuestionID + "' src=" + tickImg + " />");
					html.push("</div>");
					html.push(getTimePickerTable(secondQuestionID));
					break;
				case "Both":
					html.push(getDateInputButton(firstQuestionID));
					html.push("<img id='tick_" + firstQuestionID + "' class='tickImg_" + firstQuestionID + "' src=" + tickImg + " />");
					html.push("<div style = 'display:table-cell; width: 1em;'></div>")
					html.push(getTimeInputButton(secondQuestionID));
					html.push("<img id='tick_" + secondQuestionID + "' class='tickImg_" + secondQuestionID + "' src=" + tickImg + " />");
					html.push("</div>");
					html.push(getDatePickerTable(firstQuestionID));
					html.push(getTimePickerTable(secondQuestionID));
					break;
				default:
					break;
				}
				html.push("</div>");
				var endHtml = ReplaceInsideTheTemplate(html.join(''));
				return endHtml;
			}

			function CreateQuestionObj() {
				var questionRowSet = data[3],
				answersRowSet = data[4];
				var qID = selectedQuestionID;
				if (Open.isArray(selectedQuestionID)) {
					qID = selectedQuestionID[0];
				}
				for (var i = 0, len = questionRowSet.length, temp; i < len; i++) {
					temp = questionRowSet[i];
					if (temp.ObjID === qID) {
						questionObj.text = temp.Text;
						break;
					}
				}
				if (snippet["Title"] !== "") {
					questionObj.text = snippet["Title"];
					snippet.instance[ODP.document.findIndexByName(snippet.instance, "Title")].value = questionObj.text;
					ODP.document.updateJSON(snippet.instance);
				}
			}

			function ReplaceInsideTheTemplate(content) {
				var template = GetTemplate();
				var questionText = "<span class = 'dateTimePickerQuestionText'>" + questionObj.text + "</span>";
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", ODP.Surveo.params.defaultFontFamily);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", questionText);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###", content);
				template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###", ODP.Surveo.params.headerTextColor);
				return template;
			}

			function GetTemplate() {
				if (snippet["Question Template"] !== "") {
					return ODP.document.resource(snippet["Question Template"]);
				} else {
					return ODP.document.resource(ODP.Surveo.params["defaultQuestionTemplate"]);
				}
			}

			function prepareQuestionData() {
				var dateTimePicker = ODP.Surveo.snippets.dateTimePickerWithoutFuturDate;
				if (Open.isArray(selectedQuestionID)) {
					for (var i = 0; i < selectedQuestionID.length; i++) {
						dateTimePicker['qIDsToInstIDs'][selectedQuestionID[i]] = instanceID;
						ODP.Surveo.params.questionData[selectedQuestionID[i]] = new ODP.Surveo.questionObject(
							/*Answers*/ [],
							/*MainDivID*/ "MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
							/*Hidden Answers*/ [],
							/*hideAnswers function*/ function () {},
							/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
							/*isRequired*/ (snippet['Is required'] == 'Yes'),
							/* isSkiped */ false,
							/* moveNext */ false,
							/* setFunction */ dateTimePicker.readySetAnswer,
							/* resetFunction */ function () {
								dateTimePicker.resetFunction(this.getProtoID());
							},
							/* questionProtoID */ selectedQuestionID[i],
							/* Display Once */ (snippet['Display Once'] == 'Yes'),
							/* Orientation Func */ dateTimePicker.orientationChange(),
							/* ColorCode Function */ function () {},
							/* continuousSumQuestionsAsArray */ "",
							/* setLiteralsFunction */ function (params) {
								var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
								if(params['questionText']) {
									questionSlide.querySelector(".dateTimePickerQuestionText").innerHTML = params['questionText'];
								}
							});
					}
				} else {
					dateTimePicker['qIDsToInstIDs'][selectedQuestionID] = instanceID;
					ODP.Surveo.params.questionData[selectedQuestionID] = new ODP.Surveo.questionObject(
						/*Answers*/ [],
						/*MainDivID*/ "MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
						/*Hidden Answers*/ [],
						/*hideAnswers function*/ function () {},
						/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
						/*isRequired*/ (snippet['Is required'] == 'Yes'),
						/* isSkiped */ false,
						/* moveNext */ false,
						/* setFunction */ dateTimePicker.readySetAnswer,
						/* resetFunction */ function () {
						dateTimePicker.resetFunction(this.getProtoID());
					},
						/* questionProtoID */ selectedQuestionID,
						/* Display Once */ (snippet['Display Once'] == 'Yes'),
						/* Orientation Func */ dateTimePicker.orientationChange(),
						/* ColorCode Function */ function () {},
						/* continuousSumQuestionsAsArray */ "",
						/* setLiteralsFunction */ function (params) {
							var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
							if(params['questionText']) {
								questionSlide.querySelector(".dateTimePickerQuestionText").innerHTML = params['questionText'];
							}
							var button = questionSlide.querySelector("#dateInputContainer_" + snippet["Question ID"]);
							var text = ODP.Surveo.globalization.getLiteralForCurrentLanguage(snippet["Date format"]);
							button.children[0].innerHTML = text;
							button.children[1].innerHTML = text;
						});
				}
			}

			function addEventToElement(event, element, handler) {
				if (event) {
					if (element.addEventListener) { // W3C DOM
						element.addEventListener(event, handler, false);
					} else if (element.attachEvent) { // IE DOM
						var r = element.attachEvent("on" + event, handler);
						return r;
					}
					return false;
				}
			}

			function attachEvents() {
				var qID = "";
				if (Open.isArray(selectedQuestionID)) {
					qID = selectedQuestionID[0];
				} else {
					qID = selectedQuestionID;
				}
				var deploymentTarget = ODP.Surveo.params.deploymentTarget;
				var isMobile = deploymentTarget.isMobile;
				var dateTimePickerTable = ODP.window.document.getElementById("dateTimePicker_" + qID);
				var startEvent = isMobile ? "touchstart" : "mousedown";
				var endEvent = isMobile ? "touchend" : "mouseup";
				var moveEvent = isMobile ? null : "mousemove";
				var wheelEvent = isMobile ? "touchmove" : "mousewheel";
				var DOMscroll = isMobile ? "DOMMouseScroll" : "DOMMouseScroll";
				addEventToElement(startEvent, dateTimePickerTable, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.startHandler);
				addEventToElement(endEvent, dateTimePickerTable, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.endHandler);
				addEventToElement(moveEvent, dateTimePickerTable, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.endHandler);
				addEventToElement(DOMscroll, dateTimePickerTable, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.wheelHandler);
				addEventToElement(wheelEvent, dateTimePickerTable, ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.wheelHandler);
			}

			function getInstData() {
				if (Open.isArray(selectedQuestionID)) {
					ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.getInstData(selectedQuestionID[0]);
					ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.getInstData(selectedQuestionID[1]);
				} else {
					ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.getInstData(selectedQuestionID);
				}
			}

			function OpenCallback(datasetname) {
				var html;
				data = Open.getDataSet(datasetname).data;
				CreateQuestionObj();
				if (ODP.Surveo.methods.isNumberCommaSeparated(snippet["Question ID"])) {
					if (Open.isArray(selectedQuestionID)) {
						loadSnippetCSS(selectedQuestionID[0]);
						loadSnippetCSS(selectedQuestionID[1]);
					} else {
						loadSnippetCSS(selectedQuestionID);
					}
					html = GetHTMLStructure();
					prepareQuestionData();
				} else {
					html = "Wrong parameter for Question ID.";
				}
				var target = ODP.window.document.getElementById(instanceID);
				if (target !== null) {
					ODP.Surveo.methods.addSnippetMarkupSafely(target, html, [attachEvents, getInstData]);
				} else {
					mainDiv += html;
				}
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					var target1 = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
					if (target1) {
						target1.parentNode.removeChild(target1);
					}
				}
			}

			ODP.document.queue.add(function () {
				Open.addListener(ODP.Surveo.params.surveoDatasetLoaderID, OpenCallback);
			});
			return (mainDiv + '</div>').toString();
		},"destroy":function (instanceID) {
			if (typeof SM === "undefined") {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var selectedqID = snippet["Question ID"];
			delete ODP.Surveo.snippets.dateTimePickerWithoutFuturDate.instData[selectedqID];
			delete ODP.Surveo.params.questionData[selectedqID];
		}}},{"com.opendataplatform.document.id":"{7FEEAE18-F602-4D14-875C-BD7872302789}","manifest":{"name":"Surveo Question - Generic","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question ID","datatype":"nvarchar","defaultvalue":""},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Is multiple choice","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display once","datatype":"nvarchar","defaultvalue":"No"},{"name":"Move next","datatype":"nvarchar","defaultvalue":"on click \"next\""},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Answer animations","datatype":"nvarchar","defaultvalue":"No"},{"name":"Width","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Height","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Header Font Color","datatype":"nvarchar","defaultvalue":""},{"name":"Answers Font Color","datatype":"nvarchar","defaultvalue":""},{"name":"Selected Answers Font Color","datatype":"nvarchar","defaultvalue":""},{"name":"Width Per Answer","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Unchecked picture","datatype":"nvarchar","defaultvalue":""},{"name":"Checked picture","datatype":"nvarchar","defaultvalue":""},{"name":"Question template","datatype":"nvarchar","defaultvalue":""},{"name":"Answers background","datatype":"nvarchar","defaultvalue":""},{"name":"Selected Answers background","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) { 
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			try{
			var containerDiv = '';
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var snippet = ODP.document.getSnippet(instanceID);
			var parent = ODP.document.getSnippet(snippet['com.opendataplatform.document.parentid']);
			var parentIDNoBrackets = snippet['com.opendataplatform.document.parentid'].substring(1, instanceID.length - 1);
			var animationsEnabled = (snippet['Answer animations'] == "Yes") ? "" : "";
			ODP.Surveo.params.slideCount++; 
			
			//TODO : params error handling;
			function formErrorMessage(param, type) {
				try{
				var tmpMessage = "Wrong ";
					switch (type) {
					case "GUID":
						tmpMessage += "GUID at ";
						break;
					default:
						tmpMessage += "parameter(unknown) at ";
						break;
					}
					tmpMessage += param;
					}catch(e){console.error(e + " @renderer");tmpMessage = "none;";}
				return tmpMessage;
			}
			/**Set the default styles for buttons and other controls, backgrounds for questions, etc.**/
			/**by initializing resources by adding GUID references to resource snippets in the proper snippet parameter fields**/ 
			snippet["Selected Answers background"] = ((snippet["Selected Answers background"] == "") ? ODP.Surveo.params["butBack"] : snippet["Selected Answers background"]);
			snippet["Answers background"] = ((snippet["Answers background"] == "") ? ODP.Surveo.params["butBack"] : snippet["Answers background"]);
			snippet["Unchecked picture"] = ((snippet["Unchecked picture"] == "") ? ODP.Surveo.params["defaultUnchecked"] : snippet["Unchecked picture"]);
			snippet["Checked picture"] = ((snippet["Checked picture"] == "") ? ODP.Surveo.params["defaultChecked"] : snippet["Checked picture"]);
			snippet["Header Font Color"] = ((snippet["Header Font Color"] == "") ? ODP.Surveo.params.headerTextColor : snippet["Header Font Color"]);
			snippet["Answers Font Color"] = ((snippet["Answers Font Color"] == "") ? ODP.Surveo.params.bodyTextColor : snippet["Answers Font Color"]);
			snippet["Selected Answers Font Color"] = ((snippet["Selected Answers Font Color"] == "") ? ODP.Surveo.params.bodyTextColor : snippet["Selected Answers Font Color"]);
			snippet["Question template"] = ((snippet["Question template"] == "") ? ODP.Surveo.params["defaultQuestionTemplate"] : snippet["Question template"]);
										
			var surveoTheme = ODP.Surveo.params.surveoTheme;
			var surveoGenericQuestionTheme;
			var haveTheme = false;
			
			if(snippet['Is multiple choice'] == 'No') {
				if (surveoTheme && surveoTheme.surveoQuestionGenericSingle) {
					surveoGenericQuestionTheme = surveoTheme.surveoQuestionGenericSingle;
					haveTheme = true;
				}
			} else {
				if (surveoTheme && surveoTheme.surveoQuestionGenericMultiple) {
					surveoGenericQuestionTheme = surveoTheme.surveoQuestionGenericMultiple;
					haveTheme = true;
				}
			}
			
			if(haveTheme) {
				snippet["Header Font Color"] = surveoGenericQuestionTheme["Header Font Color"] ? surveoGenericQuestionTheme["Header Font Color"] : snippet["Header Font Color"];
				snippet["Answers Font Color"] = surveoGenericQuestionTheme["Answers Font Color"] ? surveoGenericQuestionTheme["Answers Font Color"] : snippet["Answers Font Color"];
				snippet["Selected Answers Font Color"] = surveoGenericQuestionTheme["Selected Answers Font Color"] ? surveoGenericQuestionTheme["Selected Answers Font Color"] : snippet["Selected Answers Font Color"];
				if(snippet["Unchecked picture"] === ODP.Surveo.params["defaultUnchecked"] || snippet["Unchecked picture"].split(",").length === 1) {
					snippet["Unchecked picture"] = surveoGenericQuestionTheme['Unchecked picture'] ? ODP.Surveo.methods.overrideResource(snippet["Unchecked picture"], surveoGenericQuestionTheme['Unchecked picture']) : snippet["Unchecked picture"];
				}
				if(snippet["Checked picture"] === ODP.Surveo.params["defaultChecked"] || snippet["Checked picture"].split(",").length === 1) {
					snippet["Checked picture"] = surveoGenericQuestionTheme['Checked picture'] ? ODP.Surveo.methods.overrideResource(snippet["Checked picture"], surveoGenericQuestionTheme['Checked picture']) : snippet["Checked picture"];
				}
				snippet["Answers background"] = surveoGenericQuestionTheme["Answers background"] ? ODP.Surveo.methods.overrideResource(snippet["Answers background"], surveoGenericQuestionTheme["Answers background"]) : snippet["Answers background"];
				snippet["Selected Answers background"] = surveoGenericQuestionTheme["Selected Answers background"] ? ODP.Surveo.methods.overrideResource(snippet["Selected Answers background"], surveoGenericQuestionTheme["Selected Answers background"]) : snippet["Selected Answers background"];
			}
			
			/* if (surveoTheme && surveoTheme.surveoQuestionGeneric) {
				var surveoGenericQuestionTheme = surveoTheme.surveoQuestionGeneric;
				snippet["Header Font Color"] = surveoGenericQuestionTheme["Header Font Color"] ? surveoGenericQuestionTheme["Header Font Color"] : snippet["Header Font Color"];
				snippet["Answers Font Color"] = surveoGenericQuestionTheme["Answers Font Color"] ? surveoGenericQuestionTheme["Answers Font Color"] : snippet["Answers Font Color"];
				snippet["Selected Answers Font Color"] = surveoGenericQuestionTheme["Selected Answers Font Color"] ? surveoGenericQuestionTheme["Selected Answers Font Color"] : snippet["Selected Answers Font Color"];

				if((snippet['Is multiple choice'] == 'No') && ODP.document.isGUID(snippet["Unchecked picture"]) && ODP.document.isGUID(snippet["Checked picture"])) {
					//Single selection generic
					if(surveoGenericQuestionTheme['Unchecked picture'] && surveoGenericQuestionTheme['Unchecked picture']['single']) {
						snippet["Unchecked picture"] = ODP.Surveo.methods.overrideResource(snippet["Unchecked picture"], surveoGenericQuestionTheme['Unchecked picture']['single']);
					}
					if(surveoGenericQuestionTheme['Checked picture'] && surveoGenericQuestionTheme['Checked picture']['single']) {
						snippet["Checked picture"] = ODP.Surveo.methods.overrideResource(snippet["Checked picture"], surveoGenericQuestionTheme['Checked picture']['single']);
					}
					
				} else {
					if(surveoGenericQuestionTheme['Unchecked picture'] && surveoGenericQuestionTheme['Unchecked picture']['multiple']) {
						snippet["Unchecked picture"] = ODP.Surveo.methods.overrideResource(snippet["Unchecked picture"], surveoGenericQuestionTheme['Unchecked picture']['multiple']);
					}
					if(surveoGenericQuestionTheme['Checked picture'] && surveoGenericQuestionTheme['Checked picture']['multiple']) {
						snippet["Checked picture"] = ODP.Surveo.methods.overrideResource(snippet["Checked picture"], surveoGenericQuestionTheme['Checked picture']['multiple']);
					}
				}
				
				//snippet["Question template"] = surveoGenericQuestionTheme["Question template"] ? ODP.Surveo.methods.overrideResource(snippet["Question template"], surveoGenericQuestionTheme["Question template"]) : snippet["Question template"];
				snippet["Answers background"] = surveoGenericQuestionTheme["Answers background"] ? ODP.Surveo.methods.overrideResource(snippet["Answers background"], surveoGenericQuestionTheme["Answers background"]) : snippet["Answers background"];
				snippet["Selected Answers background"] = surveoGenericQuestionTheme["Selected Answers background"] ? ODP.Surveo.methods.overrideResource(snippet["Selected Answers background"], surveoGenericQuestionTheme["Selected Answers background"]) : snippet["Selected Answers background"];	
			}
			
			
			
			containerDiv = (!ODP.Surveo.methods.isCorrectGUID(snippet["Selected Answers background"]) ? formErrorMessage("Selected Answers background", "GUID") : "") +
			(!ODP.Surveo.methods.isCorrectGUID(snippet["Answers background"]) ? formErrorMessage("Answers background", "GUID") : "") +
			(!ODP.Surveo.methods.isCorrectGUID(snippet["Unchecked picture"]) ? formErrorMessage("Unchecked picture", "GUID") : "") +
			(!ODP.Surveo.methods.isCorrectGUID(snippet["Checked picture"]) ? formErrorMessage("Checked picture", "GUID") : "") +
			(!ODP.Surveo.methods.isCorrectGUID(snippet["Question template"]) ? formErrorMessage("Question template", "GUID") : "");
			
			if (containerDiv !== '') {
				return containerDiv;
			}*/
			}catch(e){console.error(e+" @ beginning of generic");}
			if (typeof ODP.Surveo.snippets.generic_q) {
				ODP.Surveo.snippets.generic_q = {
					"scrollMove" : 0,
					"firstPosition" : 0,
					"clearChecks" : function (instID) {
						var toClear = ODP.window.document.getElementById(instID.replace(/[{}]/g, "") + 'qstnMain').getElementsByTagName('button');
						for (var p = 0, len = toClear.length; p < len; p++) {
							
							toClear[p].className = toClear[p].className.split(" ")[0];
							if(!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")){
								toClear[p].childNodes[1].setStyle("display", "none");
							}
						}
						
					},
					"checkThis" : function (qID, elid) {
						var elem = ODP.window.document.getElementById(elid);
						elem = ((elem.tagName.toLowerCase() != 'button') ? elem.parentNode : elem);
						var allButtons = [];
						for (var k in ODP.Surveo.params.questionData[qID].getAnswers()) {
							allButtons.push(ODP.window.document.getElementById(ODP.Surveo.params.questionData[qID].getAnswers()[k]));
							
						}
						
						delete k;
						for (var p = 0, len = allButtons.length; p < len; p++) {
							if (allButtons[p].id == elid) {
								ODP.Surveo.params.surveyResults[qID] = (p + 1);
							} else {
								if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
									allButtons[p].childNodes[1].setStyle("display", "none");
								}
								if (typeof allButtons[p].className.split(" ")[1] !== 'undefined') {
									allButtons[p].className = allButtons[p].className.split(" ")[0];
								}
							}
						}
						delete p;
						var elemClassName = [elem.className, elem.className + "_selected"];
						if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
							elem.childNodes[1].setStyle("display", "block");
						}
						if (typeof elem.className.split(" ")[1] === 'undefined') {
							elem.className = elemClassName.join(" ");
						}
					},
					"showHideAnswers" : function (qID, answer_indices, showOrHide) { //RDY MAYBE ??? TODO : log if shown or hidden; keep track of state?
						// var answer_indices_array = answer_indices.split(",");
						// var cachedAnswers = ODP.Surveo.params.questionData[qID].getAnswers();
						// for (var k = 0, len = answer_indices_array.length; k < len; k++) {
							// if (showOrHide) {
								
								// ODP.window.document.getElementById(cachedAnswers[answer_indices_array[k]]).setStyle("height", "");
							// } else {
								
								// ODP.window.document.getElementById(cachedAnswers[answer_indices_array[k]]).setStyle("height", "0px");
								
							// }
						// }
						
						var answer_indices_array = answer_indices.split(",");
						var answers = ODP.Surveo.params.questionData[qID].getParentSlide().querySelectorAll(".qDiv")[0].querySelectorAll("button");
						var answerNumber;
						
						for (var k = 0, len = answer_indices_array.length; k < len; k++) {
							answerNumber = parseInt(answer_indices_array[k],10) - 1;
							if (showOrHide) {
								answers[answerNumber].setStyle("display", "");
							} else {
								answers[answerNumber].setStyle("display", "none");
							}
						}
						
					},
					"showAllAnswers" : function(qID) {
						var answers = ODP.Surveo.params.questionData[qID].getParentSlide().querySelectorAll(".qDiv")[0].querySelectorAll("button");
						for(var a = 0, len = answers.length; a < len; a++) {
							answers[a].setStyle("display", "");
						}
					},
					"colorCodeAnswers" : function (qID, answer_indices, color) {
						var answer_indices_array = answer_indices.split(",");
						var cachedAnswers = ODP.Surveo.params.questionData[qID].getAnswers();
						for (var k = 0, len = answer_indices_array.length; k < len; k++) {
							
							ODP.window.document.getElementById(cachedAnswers[answer_indices_array[k]]).setStyle("border", "2px solid " + color);
							
						}
					},
					"checkThisMultiple" : function (qID, elid, isclick) {
						var elem = ODP.window.document.getElementById(elid);
						/*determine if clicked on child element or the actual element*/
						var csviedAnswers = ODP.Surveo.methods.CSVtoArray(ODP.Surveo.params.surveyResults[qID]);
						var elemClassName = elem.className;
						if (csviedAnswers[0] == '0') {
							return;
							
						}
						elem = ((elem.tagName.toLowerCase() != 'button') ? elem.parentNode : elem);
						var allButtons = [];
						for (var k in ODP.Surveo.params.questionData[qID].getAnswers()) {
							allButtons.push(ODP.window.document.getElementById(ODP.Surveo.params.questionData[qID].getAnswers()[k]));
							
						}
						delete k;
						var alreadyChecked = false;
						delete elem;
						for (var p = 0, len = allButtons.length; p < len; p++) {
							if (allButtons[p].id == elid) {
								for (var i = 0; i < csviedAnswers.length; i++) {
									alreadyChecked = false;
									if (csviedAnswers[i] == (p + 1)) {
										if (isclick == true) {
											csviedAnswers.splice(i, 1);
										}
										alreadyChecked = true;
										break;
									}
									
								}
								
								if (!alreadyChecked) {
									csviedAnswers.push(p + 1);
								}
								ODP.Surveo.params.surveyResults[qID] = ODP.Surveo.methods.ArrayToCSV(csviedAnswers);
							}
							
						}
						
						if (isclick == true) {
							if(typeof elemClassName.split(" ")[1] != 'undefined'){
							elem.className = elemClassName.split(" ")[0] 
								if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
										elem.childNodes[1].setStyle("display", "none");
								}
							}else{
								elem.className += " " + elemClassName + "_selected";
								if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
										elem.childNodes[1].setStyle("display", "block");
								}
							}
						} else {
							(typeof elemClassName.split(" ")[1] == 'undefined') ? elem.className += " " + elemClassName + "_selected" : elem.className;
							if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
										elem.childNodes[1].setStyle("display", "block");
								}
						}
						
					},
					"loadAnswerOptions" : function (objJSON, questionID) {
						var answerOptions = [];
						for (var x = 0, len = objJSON.data[3].length; x < len; x++) {
							if (questionID == objJSON.data[3][x].ObjID) {
								if (objJSON.data[3][x].ProtoAnswerID != 8) {
									var answerID = objJSON.data[3][x].ProtoAnswerID;
								}
								break;
							}
						}
						var countReal = 0;
						
						if (answerID) {
							for (var x = 0, len = objJSON.data[4].length; x < len; x++) {
								if (answerID == objJSON.data[4][x].ProtoAnswerID) {
									
									answerOptions[(objJSON.data[4][x].Pos - 1)] = objJSON.data[4][x].Description;
								}
							}
							
						}
						
						return answerOptions;
						
					},
					"isOverflowed" : function(element) {
						if (element) {
							return element.scrollHeight > element.clientHeight;
						}
						return false;
					},
					"changeTapPosition" : function (evt) {
						var posY = evt.touches[0].clientY;
						ODP.Surveo.snippets.generic_q.scrollMove = posY;
					},
					"setFirstPosition" : function (evt) {
						var posY = evt.touches[0].clientY;
						ODP.Surveo.snippets.generic_q.scrollMove = posY;
						ODP.Surveo.snippets.generic_q.firstPosition = posY;
					}
				}
			}
			containerDiv = '<div id="' + subAllinstanceIDs + 'qstnMain" class="question" style="">';
			containerDiv += '</div>';
			
			function makeLegalSource (string, isCheck) {
				if (typeof string == "undefined") {
					return "";
				}
				if (string.indexOf("url(") == 0) {
					var addProps = "";
					var temp = string.split("url(")[1];
					if (temp && temp.length > 1) {
						addProps = temp.split(")")[1];
						addProps = addProps.replace("initial", "auto");
						var match = addProps.match(/\d+%/);
						if (match && isCheck) {
							match = parseInt(match, 10) * 0.8;
							addProps = " center no-repeat;background-size:" + match + "% " + match + "%";
							// var len = match.length;
							// for (var a = 0; a < len; a++) {
								// addProps = addProps.replace(match[a], parseInt(match[a], 10) * 0.8);
							// }
						}
						if (temp[0] === "'") {
							string = string.match(/('(.*)')/)[0];
						} else if (temp[0] === '"') {
							string = string.match(/("(.*)")/)[0];
						} else {
							string = temp.substring(0, temp.length - 1);
						}
					}
					string = string.replace(/'|"/g, "");
					if (addProps === "") {
						if (isCheck) {
							addProps = " center no-repeat;background-size:80% 80% !important;";
						} else {
							addProps = " center no-repeat;background-size:100% 100% !important;";
						}
					} else {
						addProps += " !important;";
					}
					if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize") && isCheck) {
						return string;
					} else {
						return "url('" + string + "')" + addProps;
					}
				} else {
					return string + ";";
				}
			}
			
			function showHideQuestionSlide(slideQuestionID, show) {
				var questionData = ODP.Surveo.params.questionData[slideQuestionID];
				var parentSlide = questionData.getParentSlide();
				var isMobile = ODP.Surveo.params.isMobileRenderer;
				if(parentSlide) {
					if(show) {
						if(isMobile) {
							parentSlide.setAttribute("style", "position:absolute;background-size:100% 100%;left:100%; display: block !important;");
						} else {
							parentSlide.style.display = "block";
						}
					} else {
						if(isMobile) {
							parentSlide.setAttribute("style", "");
						} else {
							parentSlide.style.display = "";
							
						}
					}
				}
			}
			
			function calculateOverflow (questionID) {
				var structure = ODP.window.document.querySelector(".surveyStructure");
				if(structure) {
					var structureDisplay = structure.style.display;
					structure.style.display = "";
					showHideQuestionSlide(questionID, true);
					var questionData = ODP.Surveo.params.questionData[questionID];
					var GUID = questionData.getMainDivID().split("_")[1];
					var elementToCheck = ODP.window.document.getElementById("qstnHolder" + GUID);
					questionData.additionalDataForQuestion.isOverflowed = ODP.Surveo.snippets.generic_q.isOverflowed(elementToCheck);
					showHideQuestionSlide(questionID, false);
					structure.style.display = structureDisplay;
				}
			}
			
			function fillContent() {
				Open.addListener(ODP.Surveo.params.surveoDatasetLoaderID, function (datasetname) {
				try {
					if (ODP.document.currentRenderer == "server") {
						return;
					}
					if(!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")){
						var target = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
						if(target){
							target.parentNode.removeChild(target);
							}
					}
					var markupString = "";
					
					var markupStringAsArray = [];
					var qText = "";
					var allAnswers = {};
					var qstnString = "";
					var styleTagContent = [];
					var objJSON = Open.getDataSet(datasetname);
					var selectedQuestionID = snippet['Question ID'];
					allAnswers = ODP.Surveo.snippets.generic_q.loadAnswerOptions(objJSON, selectedQuestionID);
					if (snippet["Title"] === "") {
						for (var x = 0, len = objJSON.data[3].length; x < len; x++) {
							if (objJSON.data[3][x].ObjID == selectedQuestionID) {
								qText = objJSON.data[3][x].Text; 
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Title")].value = qText; 
								ODP.document.updateJSON(snippet.instance);
								break;
							}
						}
					}
					objJSON = undefined;
					var m = 0; 
					var preparePicturesArray = snippet["Unchecked picture"].split(','); //TODO : checks
					var preparePicturesArray_s = snippet["Checked picture"].split(',');
					}catch(e){
						console.error(e+" @splitting in generic");
						var preparePicturesArray = [ODP.Surveo.params["radioBUnChecked"]];
						var preparePicturesArray_s = [ODP.Surveo.params["radioBChecked"]];
					}
					try {
					var ppa_len = preparePicturesArray.length;
					var ppa_len_s = preparePicturesArray_s.length;
					//styleTagContent.push('<style type="text/css">');
					
					ODP.Surveo.params.questionData[selectedQuestionID] = new ODP.Surveo.questionObject(
						/* Answers */ [],
						/* MainDivID */ "MAIN_" + parentIDNoBrackets,
						/* Hidden Answers */ [],
						/* hideAnswers function */ function (qID, answerarray, showHide) {
							ODP.Surveo.snippets.generic_q['showHideAnswers'](qID, answerarray, showHide);
						},
						/*isPersistent*/ (snippet['Is persistent'] == 'Yes'),
						/*isRequired*/ (snippet['Is required'] == 'Yes'),
						/* isSkiped */ false,
						/* moveNext */ (snippet["Move next"] === "on answer selection"),
						/* setFunction */ function (qID, idofelement, isclick) {
							if (Math.abs(ODP.Surveo.snippets.generic_q.firstPosition - ODP.Surveo.snippets.generic_q.scrollMove) < 10) {
								if (snippet['Is multiple choice'] == 'No') {
									ODP.Surveo.snippets.generic_q['checkThis'](qID, idofelement);
								} else {
									ODP.Surveo.snippets.generic_q['checkThisMultiple'](qID, idofelement, isclick);
								}
							} else {
								ODP.Surveo.snippets.generic_q.scrollMove = 0;
								ODP.Surveo.snippets.generic_q.firstPosition = 0;
							}
						},
						/* resetFunction */ function () {
							ODP.Surveo.snippets.generic_q.showAllAnswers(selectedQuestionID);
							ODP.Surveo.snippets.generic_q.clearChecks(instanceID);
							var params = ODP.Surveo.params
							if (params.surveyResults[selectedQuestionID + '']) {
								delete params.surveyResults[selectedQuestionID + ''];
							}
							// console.log("resetFunction", params.questionData[selectedQuestionID].additionalDataForQuestion.isOverflowed);
							if (params.questionData[selectedQuestionID].additionalDataForQuestion.isOverflowed) {
								var structure = ODP.window.document.querySelector(".surveyStructure");
								if(structure) {
									var structureDisplay = structure.style.display;
									structure.style.display = "";
									showHideQuestionSlide(selectedQuestionID, true);
									var qstnHolder = ODP.window.document.querySelector("#qstnHolder" + this.getMainDivID().replace("MAIN_",""));
									if(qstnHolder && qstnHolder.scrollTop && qstnHolder.scrollTop != 0) {
										qstnHolder.scrollTop = 0;
									}
									showHideQuestionSlide(selectedQuestionID, false);
									structure.style.display = structureDisplay;
								}
							}
						},
						/* questionProtoID */ selectedQuestionID, 
						/* Display Once */ (snippet['Display once'] === "Yes"),
						/* Orientation Change */ function () {
							calculateOverflow(selectedQuestionID);
						},
						/* ColorCode Function */ function (qID, idofelement, color) {
							ODP.Surveo.snippets.generic_q.colorCodeAnswers(qID, idofelement, color);
						},
						/* continuousSumQuestionsAsArray */ "",
						/* setLiteralsFunction */ function (params) {
							//console.log("setLiteralsFunction", option, arrayOfTexts);
							var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];

							if(params['questionText']) {
								questionSlide.querySelector(".genericQuestionText").innerHTML = params['questionText'];
							}
							
							if(params['answersText']) {
								var answerOptions = questionSlide.querySelectorAll(".genericAnswerOptionText");
								for(var a = 0, len = params['answersText'].length; a < len; a++) {
									answerOptions[a].innerHTML = params['answersText'][a];
								}
							}
							/* switch (option) {
								case "q":
									questionSlide.querySelector(".genericQuestionText").innerHTML = arrayOfTexts;
									break;
								case "a":
									var answerOptions = questionSlide.querySelectorAll(".genericAnswerOptionText");
									for(var a = 0, len = arrayOfTexts.length; a < len; a++) {
										answerOptions[a].innerHTML = arrayOfTexts[a];
									}
									break;
								default: // impossible
									break;
							}*/
						}, {
							"isOverflowed" : true
						}
					);
					var tempAnswers = {};
					var prepareBase64ForButton = "";
					var prepCrossBrowserPicture = "";
					var cacheTheCheckedPictures = "";
					var lastCheckedPicture = "";
					var lastUncheckedPicture = "";
					var currentCheckedPicture = "";
					var currentUncheckedPicture = "";
					//var buttonBackCaching = "";
					//var buttonBackCheckedCaching = "";
					for (var cnt = 0, len = allAnswers.length; cnt < len; cnt++) {
						try {
							currentCheckedPicture = makeLegalSource(ODP.document.objprototypes[ODP.document.objinstances[preparePicturesArray_s[cnt]]['com.opendataplatform.document.protoid']].ui.render(preparePicturesArray_s[cnt], ODP.document, ODP.document.renderMode), true);
							currentUncheckedPicture = makeLegalSource(ODP.document.objprototypes[ODP.document.objinstances[preparePicturesArray[cnt]]['com.opendataplatform.document.protoid']].ui.render(preparePicturesArray[cnt], ODP.document, ODP.document.renderMode), true);
							lastCheckedPicture = currentCheckedPicture;
							lastUncheckedPicture = currentUncheckedPicture;
						} catch(er) {
							currentCheckedPicture = lastCheckedPicture;
							currentUncheckedPicture = lastUncheckedPicture;
						}
						
						if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
							//cacheTheCheckedPictures = ((cnt < ppa_len_s) ? ODP.document.resource(preparePicturesArray_s[cnt]) : ODP.document.resource(preparePicturesArray_s[ppa_len_s - 1])).replace("url('", "").replace("')", "");
							//prepareBase64ForButton = ((cnt < ppa_len) ? ODP.document.resource(preparePicturesArray[cnt]) : ODP.document.resource(preparePicturesArray[ppa_len - 1])).replace("url('", "").replace("')", "");
							cacheTheCheckedPictures = ((cnt < ppa_len_s) ? currentCheckedPicture : currentCheckedPicture).replace("url('", "").replace("')", "");
							prepareBase64ForButton = ((cnt < ppa_len) ? currentUncheckedPicture : currentUncheckedPicture).replace("url('", "").replace("')", "");
						/*same excersize for the buttons themselves - create overlaying images*/
							//buttonBackCaching = ODP.document.resource(snippet["Answers background"]).replace("url('", "").replace("')", "");
							//buttonBackCheckedCaching = ODP.document.resource(snippet["Selected Answers background"]).replace("url('", "").replace("')", "");
						}
						tempAnswers[cnt] = {};
						tempAnswers[cnt] = ('qa' + subAllinstanceIDs + '_' + cnt);
						prepCrossBrowserPicture = (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ''+
						'<img class="checkPicReal' + cnt + subAllinstanceIDs + '" src="' + prepareBase64ForButton + '" style="position:absolute;left:0.5em;top:0.5em;height:2em;"/>'+
						'<img class="checkPicChecked' + cnt + subAllinstanceIDs + '" src="' + cacheTheCheckedPictures + '" ontouchstart="ODP.Surveo.snippets.generic_q.setFirstPosition(event)" ontouchmove="ODP.Surveo.snippets.generic_q.changeTapPosition(event)" style="display:none;position:absolute;left:0.5em;top:0.5em;height:2em;"/>'
							 : '<div class="checkPic' + cnt + subAllinstanceIDs + '"  ' + (ODP.Surveo.params.isMobileRenderer ? 'ontouchend' : 'onclick') + '="ODP.Surveo.methods._killBubbles(event);ODP.Surveo.snippets.slide.showPrebuffered(); ODP.Surveo.methods.sm_setanswer(' + selectedQuestionID + ',' + (cnt + '') + ',true);' + ((snippet["Move next"] == "on answer selection") ? 'ODP.Surveo.snippets.slide[\'_slideNext\'](\'300ms\')' : '') + '" style="' + animationsEnabled + '"></div>';
						//markupStringAsArray.push('<button id ="qa' + subAllinstanceIDs + '_' + cnt + '" class="qa_type1' + cnt + subAllinstanceIDs + '" style="float: left; width: '+snippet["Width Per Answer"]+' !important; background-repeat:repeat-x;background-position:50% 50%;' + ((!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize"))? "line-height:3em;" : "") + '"' + (ODP.Surveo.params.isMobileRenderer ? 'ontouchstart' : 'onclick') + '="ODP.Surveo.methods.sm_setanswer(' + selectedQuestionID + ',' + (cnt + '') + ',true);ODP.Surveo.snippets.slide.showPrebuffered(); 										' + ((snippet["Move next"] == "on answer selection") ? 'ODP.Surveo.snippets.slide[\'_slideNext\'](\'300ms\')' : '') + ';">' + prepCrossBrowserPicture + '<span class = "genericAnswerOptionText">' + allAnswers[cnt] + '</span></button>');
						markupStringAsArray.push('<button id ="qa' + subAllinstanceIDs + '_' + cnt + '" ontouchstart="ODP.Surveo.snippets.generic_q.setFirstPosition(event)" ontouchmove="ODP.Surveo.snippets.generic_q.changeTapPosition(event);" class="qa_type1' + cnt + subAllinstanceIDs + '" style="float: left;  background-repeat:repeat-x; width: '+snippet["Width Per Answer"]+' !important;background-position:50% 50%;' + ((!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize"))? "line-height:3em;" : "") + '"' + (ODP.Surveo.params.isMobileRenderer ? 'ontouchend' : 'onclick') + '="ODP.Surveo.methods.sm_setanswer(' + selectedQuestionID + ',' + (cnt + '') + ',true);ODP.Surveo.snippets.slide.showPrebuffered();' + ((snippet["Move next"] == "on answer selection") ? 'ODP.Surveo.snippets.slide[\'_slideNext\'](\'300ms\')' : '') + ';">' + prepCrossBrowserPicture + '<span class = "genericAnswerOptionText">' + allAnswers[cnt] + '</span></button>');
						styleTagContent.push('.checkPic' + cnt + subAllinstanceIDs + ' {' + animationsEnabled + 'background:' + ((cnt < ppa_len) ? currentUncheckedPicture : lastUncheckedPicture) + 'height: 3em;width: 3em;float:left; } ');
						// if(ODP.Surveo.params.isMobileRenderer) {// rktodorov adds animation effect when hover on generic answer options ( Emo )
							// styleTagContent.push('.qa_type1' + cnt + subAllinstanceIDs + '_selected div{background:' + ((!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? "none" : ((cnt < ppa_len_s) ? ODP.document.resource(preparePicturesArray_s[cnt]) : ODP.document.resource(preparePicturesArray_s[ppa_len_s - 1]))) + ' center no-repeat;)background-size:80% 80%;color:' + snippet["Selected Answers Font Color"] + ';}													.qa_type1' + cnt + subAllinstanceIDs + ' {	background:' + ODP.document.resource(snippet["Answers background"]) + ';color:' + snippet["Answers Font Color"] + ';font-family:' + ODP.Surveo.params.defaultFontFamily + ';}													.qa_type1' + cnt + subAllinstanceIDs + '_selected {	color:' + snippet['Selected Answers Font Color'] + ';background-size:100% 100%;background:' + ODP.document.resource(snippet["Selected Answers background"]) + ' center no-repeat;filter:none;}');
						// } else {
						
							var selectedDivBackground = makeLegalSource((!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? "none" : ((cnt < ppa_len_s) ? currentCheckedPicture : lastCheckedPicture), false);
							var answersBackground = ODP.document.resource(snippet["Answers background"]);
							var answersFontColor = snippet["Answers Font Color"];
							var selectedAnswersFontColor = snippet["Selected Answers Font Color"];
							var selectedAnswersBackground = "";
							
							if(ODP.document.objinstances[snippet["Selected Answers background"]] && !ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
								selectedAnswersBackground = makeLegalSource(ODP.document.resource(snippet["Selected Answers background"]), false);
							} else {
								selectedAnswersBackground = ODP.document.resource(snippet["Selected Answers background"]);
							}
							styleTagContent.push('.qa_type1' + cnt + subAllinstanceIDs + '_selected div{ opacity:1; background:' + selectedDivBackground + 'color:' + selectedAnswersFontColor + ';}');
							styleTagContent.push('.qa_type1' + cnt + subAllinstanceIDs + ' { opacity: 1; -webkit-transition: opacity 0.2s;-moz-transition: opacity 0.2s;transition: opacity 0.2s; background:' + answersBackground + ';color:' + answersFontColor + ';font-family:' + ODP.Surveo.params.defaultFontFamily + ';} ');
							styleTagContent.push('.qa_type1' + cnt + subAllinstanceIDs + '_selected { opacity:1; color:' + selectedAnswersFontColor + ';background:' + selectedAnswersBackground + ' center no-repeat; background-size:100% 100%;filter:none;}' + '.qa_type1' + cnt + subAllinstanceIDs + ':hover {opacity:1;}');
							
							//styleTagContent.push('.qa_type1' + cnt + subAllinstanceIDs + '_selected div{ opacity:1; background:' + ((!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? "none" : ((cnt < ppa_len_s) ? ODP.document.resource(preparePicturesArray_s[cnt]) : ODP.document.resource(preparePicturesArray_s[ppa_len_s - 1]))) + ' center no-repeat;)background-size:80% 80%;color:' + snippet["Selected Answers Font Color"] + ';}													.qa_type1' + cnt + subAllinstanceIDs + ' {	opacity: 1; -webkit-transition: opacity 0.2s;-moz-transition: opacity 0.2s;transition: opacity 0.2s; background:' + ODP.document.resource(snippet["Answers background"]) + ';color:' + snippet["Answers Font Color"] + ';font-family:' + ODP.Surveo.params.defaultFontFamily + ';}													.qa_type1' + cnt + subAllinstanceIDs + '_selected {	opacity:1; color:' + snippet['Selected Answers Font Color'] + ';background-size:100% 100%;background:' + ODP.document.resource(snippet["Selected Answers background"]) + ' center no-repeat;filter:none;}' + '.qa_type1' + cnt + subAllinstanceIDs + ':hover {opacity:1;}');
						//}
					}
					
					//markupStringAsArray.push('<div style="float: left; width: 1% !important; height: 2%;min-height: 2%; background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%); /* FF3.6+ */background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */background: -o-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 100%); /* Opera 11.10+ */background: -ms-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 100%); /* IE10+ */background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0) 100%); /* W3C */filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00ffffff\', endColorstr=\'#00ffffff\',GradientType=0 ); /* IE6-9 */)">&nbsp;</div>');
					var innerContent = ODP.window.document.querySelector("#qstnHolder" + parentIDNoBrackets);
					if(innerContent && innerContent.style && innerContent.style.background) {
						innerContent = innerContent.style.background;
					}
					markupStringAsArray.push('<div style="margin:0px; padding: 0px; height: 1em ;width: 100%; position: relative; float: left; background: '+innerContent+'"></div>');
					//styleTagContent.push("button ");
					
					ODP.Surveo.params.questionData[selectedQuestionID].setAnswers(tempAnswers);
					tempAnswers = undefined;
					allAnswers = undefined;
					preparePicturesArray = undefined;
					preparePicturesArray_s = undefined;
					styleTagContent.push('.answer_inner_check' + subAllinstanceIDs + ' { position:absolute;width:100%;left:0;padding-left:3.5em;padding-right: 0.5em;background-size:100% 100%;float:left;color:' + snippet["Answers Font Color"] + ';font-family:' + ODP.Surveo.params.defaultFontFamily + ';font-size:100%; border:0px; background:transparent;height: 3em;  font-weight:bold; *margin: 5px 0 5px 0; display: table-cell; vertical-align: middle; text-align:justify;}');//</style>');
					//markupStringAsArray.push(ODP.Surveo.methods.addStyleTagsProperly(styleTagContent.join('')));
					ODP.document.addRulesToMainStyleSheet(styleTagContent.join(''));
					markupString = markupStringAsArray.join('');
					var snippetTitle = "<span class = 'genericQuestionText' style = 'color: "+snippet['Header Font Color']+"'>" + snippet["Title"] + "</span>";
					qstnString += ODP.document.resource(snippet["Question template"]).replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", ODP.Surveo.params.defaultFontFamily).replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", snippetTitle).replace('###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###', markupString).replace('###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###', snippet['Header Font Color']);
					ODP.Surveo.methods.addSnippetMarkupSafely(ODP.window.document.getElementById(subAllinstanceIDs + 'qstnMain'), qstnString,[
						function () {
							calculateOverflow(selectedQuestionID);
						}
					]);
				}catch(e){
					console.log(snippet);
					console.log(snippet["Unchecked picture"]);
					console.error(e+ " @the render itself; ID:"+instanceID );
				}
				});
			}
			try {
				ODP.document.queue.add(fillContent, 5);
			} catch (e) {
				console.error(e + " @ " + instanceID);
			}
			
			return containerDiv;
		},"destroy":function (instanceID) {
			// console.log("des"+instanceID);
			if (typeof SM === 'undefined') {
				return;
			}
			var snippet = ODP.document.getSnippet(instanceID);
			var selectedQuestionID = snippet['Question ID'];
			delete ODP.Surveo.params.questionData[selectedQuestionID];
		}}},{"com.opendataplatform.document.id":"{3158BD83-868A-4BB9-A32C-BE51291B2C37}","manifest":{"name":"Surveo Question - Net Promoter","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Question IDs","datatype":"nvarchar","defaultvalue":""},{"name":"Question Text","datatype":"nvarchar","defaultvalue":""},{"name":"Answer Texts","datatype":"nvarchar","defaultvalue":""},{"name":"Show Answer Texts","datatype":"nvarchar","defaultvalue":"Yes"},{"name":"Text for 0","datatype":"nvarchar","defaultvalue":""},{"name":"Text for 10","datatype":"nvarchar","defaultvalue":""},{"name":"Globalized Literals","datatype":"nvarchar","defaultvalue":""},{"name":"Is required","datatype":"nvarchar","defaultvalue":"No"},{"name":"Is persistent","datatype":"nvarchar","defaultvalue":"No"},{"name":"Display once","datatype":"nvarchar","defaultvalue":"No"},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Checked background","datatype":"nvarchar","defaultvalue":""},{"name":"Unchecked background","datatype":"nvarchar","defaultvalue":""},{"name":"Answer Text Color","datatype":"nvarchar","defaultvalue":"black"},{"name":"Helpers Text Color","datatype":"nvarchar","defaultvalue":""},{"name":"Helpers Width","datatype":"nvarchar","defaultvalue":"17%"},{"name":"Question Template","datatype":"nvarchar","defaultvalue":""},{"name":"Trailing","datatype":"nvarchar","defaultvalue":"No"},{"name":"Cool FX","datatype":"nvarchar","defaultvalue":"No"},{"name":"On answer select effect","datatype":"nvarchar","defaultvalue":"Disable"},{"name":"Manage Social","datatype":"nvarchar","defaultvalue":"No"},{"name":"Answer visualization","datatype":"nvarchar","defaultvalue":"Ascending"}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer == "server") {
				return "";
			}
			/******** INFO 
				Version : 3.1
				Version date : 06.03.2013
				Author : R.Todorov
				
				To do :
				- 
			********************************/
			ODP.Surveo.params.slideCount++;
			var snippet = ODP.document.getSnippet(instanceID);
			var noBracketsInstanceID = instanceID.replace(/{|}/g, "");
			var nexus7 = (ODP.Surveo.params.deploymentTarget.fullPlatformName.search("chrome/18") !== -1) ? true : false;
			var silk2 = (ODP.Surveo.params.deploymentTarget.fullPlatformName.search("silk/2") !== -1) ? true : false;
			
			if(typeof snippet['Globalized Literals'] !== "undefined" && (snippet['Text for 0'] || snippet['Text for 10'])) {
				snippet['Globalized Literals'] = snippet['Text for 0'] + ODP.Surveo.params.separatorForGlobalizedLiterals + snippet['Text for 10'];
				
				snippet.instance[ODP.document.findIndexByName(snippet.instance, "Globalized Literals")].value = snippet['Globalized Literals'];
				ODP.document.updateJSON(snippet.instance);
			}
			
			if(snippet["Helpers Text Color"] === "") {
				snippet["Helpers Text Color"] = ODP.Surveo.params.bodyTextColor;
			}
						
			var surveoTheme = ODP.Surveo.params.surveoTheme;
			if (surveoTheme && surveoTheme.surveoQuestionNetPromoter) {
				var surveoQuestionNetPromoterTheme = surveoTheme.surveoQuestionNetPromoter;
				snippet["Answer Text Color"] = surveoQuestionNetPromoterTheme["Answer Text Color"] ? surveoQuestionNetPromoterTheme["Answer Text Color"] : snippet["Answer Text Color"];
				snippet["Helpers Text Color"] = surveoQuestionNetPromoterTheme["Helpers Text Color"] ? surveoQuestionNetPromoterTheme["Helpers Text Color"] : snippet["Helpers Text Color"];
				//snippet["Trailing"] = surveoQuestionNetPromoterTheme["Trailing"] ? surveoQuestionNetPromoterTheme["Trailing"] : snippet["Trailing"];
				//snippet["Cool FX"] = surveoQuestionNetPromoterTheme["Cool FX"] ? surveoQuestionNetPromoterTheme["Cool FX"] : snippet["Cool FX"];
				
				var fixForBackgroundSize = " center no-repeat; background-size: 100% 100%; border-radius: 5px;";

				if(snippet["Checked background"].split(",").length === 1) {
					snippet["Checked background"] = (ODP.document.isGUID(snippet['Checked background']) && surveoQuestionNetPromoterTheme['Checked background']) ? ODP.Surveo.methods.overrideResource(snippet['Checked background'], (surveoQuestionNetPromoterTheme['Checked background'] + fixForBackgroundSize)) : snippet['Checked background'];
					snippet["Unchecked background"] = (ODP.document.isGUID(snippet['Unchecked background']) && surveoQuestionNetPromoterTheme['Unchecked background']) ? ODP.Surveo.methods.overrideResource(snippet['Unchecked background'], surveoQuestionNetPromoterTheme['Unchecked background'] + fixForBackgroundSize) : snippet['Unchecked background'];
				}

			}
			
			if (typeof ODP.Surveo.snippets.netPromoter === "undefined") {
			
				ODP.Surveo.snippets.netPromoter = {
					"resetPositions" : function (instID, qID) {
						return function () {
							ODP.Surveo.snippets.netPromoter.reset(instID, qID);
						}
					},
					"tStart" : function (event,qID,factor) {
						this.pageY_ = this.getCoords(event)[1];
						this.setAnswer(qID, factor, true);
						ODP.Surveo.methods._killBubbles(event);
					},
					"tMove" : function (event,qID) {
						var currEl = document.elementFromPoint(this.getCoords(event)[0],this.pageY_).id;
						if (currEl.indexOf("zone") !== -1) {
							this.setAnswer(qID, parseInt(currEl.split("|")[2],10), true);
						}
					},
					"tEnd" : function (event,qID) {
						ODP.Surveo.methods.sm_setanswer(qID, this.params[qID].selectedAnswer, true);
					},
					"setAnswer" : function (qID, factor, isclick) {
						factor = parseInt(factor,10);
						if (this.params[qID].selectedAnswer === factor || this.params[qID].numberOfAnswers - 1 < factor || isNaN(factor)) {
							return;
						}
						this.params[qID].selectedAnswer = factor;
						if(this.params[qID].boolUnchBigger){
							this.changeMultiAnsOpt(qID, factor);
						}else{
							this.changeSelectedAnsOpt(qID, factor);
						}
						ODP.Surveo.params.surveyResults[qID] = factor + 1 + "";
					},
					"changeSelectedAnsOpt" : function (qID, factor) {
						if (this.params[qID].selectedButton) {
							this.params[qID].selectedButtonOld = this.params[qID].selectedButton;
							var imageNum = this.params[qID].selectedButtonOld.id.split("|")[2];
							if(this.params.haveNotBackGroundSize) {
								this.params[qID].selectedButtonOld.src = this.backgroundsForIE[qID].resetBackgrounds[imageNum];
							} else {
								this.params[qID].selectedButtonOld.className = "im_" + qID + "_reset" + imageNum;
							}
							
						}
						this.params[qID].selectedButton = this.params[qID].buttons[factor];
						
						
						if(this.params.haveNotBackGroundSize) {
							this.params[qID].selectedButton.src = this.backgroundsForIE[qID].activeBackgrounds[factor];
						} else {
							this.params[qID].selectedButton.className = "im_" + qID + "_A"+factor;
						}
					},
					"changeMultiAnsOpt" : function (qID, factor) {
						var arrButtons = this.params[qID].buttons;
						var key = factor;
						var noCoolFx = this.params[qID].noCoolFx; 
						for (var i in arrButtons){
							if (noCoolFx) { key = i; }
							
							if(this.params.haveNotBackGroundSize) {
								if((i <= factor)) {
									arrButtons[i].src = this.backgroundsForIE[qID].activeBackgrounds[key];
								} else {
									arrButtons[i].src = this.backgroundsForIE[qID].resetBackgrounds[factor];
								}
							} else {
								arrButtons[i].className = "im_" + qID + ((i <= factor) ? ("_A"+key) : ("_reset"+factor));
							}
							
							
						}
					},
					"reset" : function (instID, qID) {
						if (ODP.Surveo.params.surveyResults[qID + '']) {
							delete ODP.Surveo.params.surveyResults[qID + ''];
						}
						this.params[qID].selectedAnswer = false;
						
						var arrButtons = this.params[qID].buttons;
						for (var i in arrButtons){
							
							if(this.params.haveNotBackGroundSize) {
								arrButtons[i].src = this.backgroundsForIE[qID].resetBackgrounds[i];
							} else {
								arrButtons[i].className = "im_" + qID + "_reset"+i;
							}
						}
					},
					"getCoords" : function (event) {
						return [event.touches[0].pageX,event.touches[0].pageY];
					},
					"pageY_" : "",
					"params" : {
						"haveNotBackGroundSize" : !ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")
					}
				}
			}
			if (silk2 || nexus7) {
				ODP.Surveo.snippets.netPromoter.getCoords = function (event) {
					return [event.touches[0].screenX,event.touches[0].screenY];
				}
			}
			
			function generateNP() { /*GETS THE DATASET AND GENERATES THE DOM STRUCTURE*/
				Open.addListener(ODP.Surveo.params.surveoDatasetLoaderID, function (datasetname) {
					var haveNotBackGroundSize = !ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize");
					if (snippet['Question IDs'] === null || snippet['Question IDs'] === '' || typeof snippet['Question IDs'] === 'undefined') {
						errorContent("Question IDs");
						return;
					}
					if (snippet['Question Template'] !== "" && !ODP.Surveo.methods.isCorrectGUID(snippet['Question Template'])) {
						errorContent("Question Template");
						return;
					}
					if (document.getElementById(noBracketsInstanceID + '_NetPromoter') === null) {
						errorContent("Snipet Renderer");
						return;
					}
					var data = constructQuestionObj(Open.getDataSet(datasetname).data, snippet['Question IDs'].split(','));
					if (!data) {
						errorContent("Question IDs");
						return;
					}
					render(data);
					fillQData(data);
					preLoad(data);
					if(haveNotBackGroundSize){
						var target = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
						if(target){
							target.parentNode.removeChild(target);
						}
					}
					function render(data) {
						var mainDiv = ODP.window.document.getElementById(noBracketsInstanceID + '_NetPromoter');
						var questnToShow = "<span class = 'netpromoterQuestionText'>" + ((typeof snippet['Question Text'] !== 'undefined' && snippet['Question Text'] !== "") ? snippet['Question Text'] : data[0]["Text"]) + "</span>";
						var helpers0 = (typeof snippet["Text for 0"] !== 'undefined' && snippet["Text for 0"] !== "") ? snippet["Text for 0"] : "";
						var helpers1 = (typeof snippet["Text for 10"] !== 'undefined' && snippet["Text for 10"] !== "") ? snippet["Text for 10"] : "";
						var promoterDOM = [];
						var qID = data[0]['ObjID'];
						var numberOfAnswers = data[0]['Answers'].length;
						var sectionWidth = 100 / numberOfAnswers;
						var marg = sectionWidth*0.3;
						var boolAnswerTexts = (snippet['Show Answer Texts'] === 'Yes') ? true : false;
						
						if(ODP.Surveo.params.isMobileRenderer){
							var events = ["ontouchstart=\"ODP.Surveo.snippets.netPromoter.tStart(event," + qID + "," , "" , ");\" ontouchmove=\"ODP.Surveo.snippets.netPromoter.tMove(event,"+qID+");\" ontouchend=\"ODP.Surveo.snippets.netPromoter.tEnd(event,"+qID+");\" "];
						}else{
							var events = ["onclick=\"ODP.Surveo.methods.sm_setanswer(" + qID + "," , "" , ",true);\""];
						}
						promoterDOM.push("<div id=\"et3\" style=\"height:auto; position:relative;overflow:hidden;\">");
						for (var i = 0; i < numberOfAnswers; i++) {
							promoterDOM.push("<div id=\"zone|" + qID + "|" + i +"|et2\" style=\"position:relative; height:auto; width:"+sectionWidth+"%;float:left;margin: "+marg+"% 0%; \" "+events[0]+ i +events[2]+" >");
							promoterDOM.push("<div class=\"not_"+ qID +"\" id=\"zone|" + qID + "|" + i +"|button\" style=\"position:relative; height:auto; width:70%;z-index:50; line-height:0.1%; background-repeat:no-repeat;background-position:center; -webkit-border-radius: 0.3em;border-radius: 0.3em; \" "+events[0]+ i +events[2]+" >");
							promoterDOM.push("<img class=\"im_"+ qID +"_reset"+i+"\" id=\"zone|" + qID + "|" + i +"|img\" style=\" width:100%;position:relative;left:0px;top:0px;  \" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAScwAAEnMBjCK5BwAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAC0lEQVQYV2NgQAcAABIAAad6mW4AAAAASUVORK5CYII=\" >");
							var answerTexts = (boolAnswerTexts) ? "<span id=\"zone|" + qID + "|" + i +"|span\" style=\"text-shadow: 1px 1px 1px #656565; color: "+((snippet["Answer Text Color"] !== "") ? snippet["Answer Text Color"] : "white")+";vertical-align:middle; position:absolute; left:0%; top:50%; width:100%;text-align:center;font-family:" + ODP.Surveo.params.defaultFontFamily + ";font-weight:bold;\">"+((typeof snippet['Answer Texts'].split("|")[i] !== 'undefined' && snippet['Answer Texts'].split("|")[i] !== "") ? snippet['Answer Texts'].split("|")[i] : data[0]['Answers'][i]['Description'] )+"</span>" : "";
							promoterDOM.push(answerTexts+"</div></div>");
						}
						//promoterDOM.push("<div style=\"position:relative; width:100%; height:auto;bottom:0px;float:right; margin-bottom:"+marg+"%;\" >");
						promoterDOM.push("<div style=\"position:relative; width:100%; height:auto;bottom:0px;float:right; margin-bottom:1%;\" >");
							if (helpers1 !== "" || helpers0 !== "") {
								var helpersWidth = snippet['Helpers Width'] ? snippet['Helpers Width'] : "17%";
								var same = "<span class = 'netPromoter_helpers' style=\"position:relative; width:"+helpersWidth+"; top:0px; font-family:" + ODP.Surveo.params.defaultFontFamily + ";font-weight:bold;word-wrap: break-word;color:"+snippet['Helpers Text Color']+";";
								promoterDOM.push(same+"float: left; margin-left:"+(marg/2)+"%; text-align:left;\">"+helpers0+"</span>");
								promoterDOM.push(same+"float: right; margin-right:"+(marg/2)+"%; text-align:right;\">"+helpers1+"</span>");
							}
						promoterDOM.push("</div></div>");
						var qTextColor = (typeof snippet['Question Text Color'] !== 'undefined' && snippet['Question Text Color'] !== '') ? snippet['Question Text Color'] : ODP.Surveo.params.headerTextColor;
						var template = GetTemplate().replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_FONT###", "" + ODP.Surveo.params.defaultFontFamily);
						template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_TEXT###", questnToShow);
						template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_QUESTION_CONTENT###", promoterDOM.join(""));
						template = template.replace("###SURVEO_DEFAULT_QUESTION_LAYOUT_HEADER_FONT_COLOR###", qTextColor);
						mainDiv.setStyle("height","auto");
						constrStyles(numberOfAnswers,qID);
						setCon(mainDiv, (template+""));
					}
					
					function constrStyles (numberOfAnswers,qID) {
						var chImageResIDs = snippet["Checked background"].split(",");
						var unchImageResIDs = snippet["Unchecked background"].split(",");
						var arrChImages = [];
						var rezult = [];
						//rezult.push("<style>");
						
						var onAnswerSelectAnimationDuration = 10;
						var resetScale = 0.9;
						var setScale = 1.4;
						
						var snippetEffect;
						var snippetEffectForReset;
						if(typeof snippet["On answer select effect"] !== "undefined") {
							switch (snippet["On answer select effect"]) {
								case "Scale":
									snippetEffect = " -webkit-transform: translate3d(0,0,0) scale("+setScale+"); -moz-transform: scale("+setScale+"); -ms-transform: scale("+setScale+"); -o-transform: scale("+setScale+"); transform: scale("+setScale+"); ";
									snippetEffect += "-webkit-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; -moz-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; -o-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; transition: all "+onAnswerSelectAnimationDuration+"ms ease-out;";
									snippetEffectForReset = "-webkit-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; -moz-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; -o-transition: all "+onAnswerSelectAnimationDuration+"ms ease-out; transition: all "+onAnswerSelectAnimationDuration+"ms ease-out;"
									break;
								default:
									snippetEffect = "";
									snippetEffectForReset = "";
									break;
							}
						}
						
						for (var i = 0; i < numberOfAnswers; i++) {
							if(typeof chImageResIDs[i] !== 'undefined'){
								arrChImages.push(ODP.document.resource(chImageResIDs[i]));
							}else{
								arrChImages.push(ODP.document.resource(chImageResIDs[0]));
							}
							rezult.push(".im_" + qID + "_A"+i+"{ background:"+arrChImages[i]+" center center no-repeat; background-size: 100% 100%; "+snippetEffect+" }");
						}
						
						
						if(haveNotBackGroundSize) {
							if(typeof ODP.Surveo.snippets.netPromoter.backgroundsForIE == "undefined") {
								ODP.Surveo.snippets.netPromoter.backgroundsForIE = {};
							}
							
							for(var curArrImg = 0, arrImgsLen = arrChImages.length; curArrImg < arrImgsLen; curArrImg++) {
								arrChImages[curArrImg] = arrChImages[curArrImg].replace("url('", "").replace("')", "")
							}
							
							ODP.Surveo.snippets.netPromoter.backgroundsForIE[qID] = {};
							ODP.Surveo.snippets.netPromoter.backgroundsForIE[qID].activeBackgrounds = arrChImages;
							
						}
						
						arrChImages = [];
						for (var i = 0; i < numberOfAnswers; i++) {
							if(typeof unchImageResIDs[i] !== 'undefined'){
								arrChImages.push(ODP.document.resource(unchImageResIDs[i]));
							}else{
								arrChImages.push(ODP.document.resource(unchImageResIDs[0]));
							}
							rezult.push(".im_" + qID + "_reset"+i+" {");
								if(haveNotBackGroundSize) {
									rezult.push("border: none; ");
								} else {
									rezult.push("background:"+arrChImages[i]+" center center no-repeat; ");
									rezult.push("background-size: 100% 100%; ");
								}
								rezult.push("-webkit-transform: scale("+resetScale+"); ");
								rezult.push("-moz-transform: scale("+resetScale+"); ");
								rezult.push("-ms-transform: scale("+resetScale+"); ");
								rezult.push("-o-transform: scale("+resetScale+"); ");
								rezult.push("transform: scale("+resetScale+"); ");
								rezult.push(snippetEffectForReset);
							rezult.push("}");
						}
						
						if(haveNotBackGroundSize) {
							for(var curArrImg = 0, arrImgsLen = arrChImages.length; curArrImg < arrImgsLen; curArrImg++) {
								arrChImages[curArrImg] = arrChImages[curArrImg].replace("url('", "").replace("')", "")
							}
						
							ODP.Surveo.snippets.netPromoter.backgroundsForIE[qID].resetBackgrounds = arrChImages;
						}

						rezult = rezult.join("");
						ODP.document.addRulesToMainStyleSheet(rezult);
					}
					
					function constructQuestionObj(objJSON, elemIDs) {
						var arrObj = [];
						var qLen = elemIDs.length;
						for (var i = 0; i < qLen; i++) {
							for (var j = 0,row3 = objJSON[3].length; j < row3; j++) {
								if (objJSON[3][j].ObjID === trim(elemIDs[i])) {
									arrObj[i] = {};
									arrObj[i]['ProtoAnswerID'] = objJSON[3][j]['ProtoAnswerID'];
									arrObj[i]['Text'] = objJSON[3][j]['Text'];
									arrObj[i]['ObjID'] = objJSON[3][j]['ObjID'];
									arrObj[i]['Answers'] = [];
									break;
								}
							}
						}
						if(arrObj.length === 0){
							return false;
						}
						for (i = 0; i < qLen; i++) {
							var ansLen = 0;
							var tempAnswers = {};
							for (var k = 0,row4 = objJSON[4].length; k < row4; k++) {
								if (objJSON[4][k].ProtoAnswerID === arrObj[i]['ProtoAnswerID']) {
									var ansPos = objJSON[4][k]["Pos"];
									ansLen++;
									tempAnswers["" + ansPos] = objJSON[4][k];
								}
							}
							for (var k = 1; k <= ansLen; k++) {
								arrObj[i]['Answers'].push(tempAnswers[k]);
							}
						}
						return arrObj;
					}
					function setCon(mainDiv, HTMLmarkup) {
						ODP.Surveo.methods.addSnippetMarkupSafely(mainDiv, HTMLmarkup);
					}
					function GetTemplate() {
						if (snippet["Question Template"] !== "") {
							return ODP.document.resource(snippet["Question Template"]);
						} else {
							return ODP.document.resource(ODP.Surveo.params["defaultQuestionTemplate"]);
						}
					}
					function errorContent(eContent) { // Displays error message in the current slide
						var mainDiv = document.getElementById(noBracketsInstanceID + '_NetPromoter');
						var html = '<div id="' + noBracketsInstanceID + '_errorMsg" style="width:100%;height:100%;overflow:hidden;position:relative;" >Wrong inputs for \"' + eContent + '\"</div>';
						setCon(mainDiv, html);
					}
				});
			}
			function preLoad(data) {
				var qID = data[0]['ObjID'];
				ODP.Surveo.snippets.netPromoter.params[qID] = {};
				ODP.Surveo.snippets.netPromoter.params[qID].buttons = [];
				ODP.Surveo.snippets.netPromoter.params[qID].selectedAnswer = false;
				ODP.Surveo.snippets.netPromoter.params[qID].selectedButton = false;
				ODP.Surveo.snippets.netPromoter.params[qID].selectedButtonOld = false;
				ODP.Surveo.snippets.netPromoter.params[qID].numberOfAnswers = data[0]['Answers'].length;
				ODP.Surveo.snippets.netPromoter.params[qID].boolUnchBigger = (snippet['Trailing'] === 'Yes') ? true : false;
				ODP.Surveo.snippets.netPromoter.params[qID].noCoolFx = (snippet['Cool FX'] === 'Yes') ? false : true;
				ODP.Surveo.snippets.netPromoter.params[qID].manageSocial = (snippet["Manage Social"] === "Yes");
				
				var answrs = [];
				for (var coun = 0, ansLength = data[0]['Answers'].length; coun < ansLength; coun++) {
					ODP.Surveo.snippets.netPromoter.params[qID].buttons.push(document.getElementById("zone|"+qID+"|"+coun+"|img"));
					answrs[coun] = coun + "";
				}
				ODP.Surveo.params.questionData[qID].setAnswers(answrs);
			}
			function fillQData(data) {
				var currentQuestionID = data[0]['ObjID'];
				var res = new ODP.Surveo.snippets.netPromoter.resetPositions(noBracketsInstanceID, currentQuestionID);
				ODP.Surveo.params.questionData[currentQuestionID] = new ODP.Surveo.questionObject(
					/* Answers */ [],
					/* MainDivID */"MAIN_" + snippet['com.opendataplatform.document.parentid'].replace(/[{}]/g, ""),
					/* Hidden Answers */ [],
					/* hideAnswers function */ function (qID, answerarray) {},
					/* isPersistent */ (snippet['Is persistent'] == 'Yes'),
					/* isRequired */ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false, 
					/* moveNext */ false, 
					/* setFunction */ function (qID, idofelement, isclick) {
						ODP.Surveo.snippets.netPromoter.setAnswer(qID, idofelement, isclick);
						if(ODP.Surveo.snippets.netPromoter.params[qID].manageSocial) {
							var answer = parseInt(idofelement,10);
							if(answer > 8) {//promoter -> show social
								//ODP.Surveo.snippets.slider_q.showHideSocialMedia(false);
			
								var socialPresetQuestionObj; 
								//get social preset question object
								var condition = "social_";
								for (var k in ODP.Surveo.params.questionData) {
									if (k.search(condition) > -1) {
										socialPresetQuestionObj = ODP.Surveo.params.questionData[k];
										socialPresetQuestionObj.setSkiped(false);
									}
								}

								//if we have social snippet in project, attach events to previous slide
								if(socialPresetQuestionObj) {
									var positionsBehindSocialMediaSlide = 1; //First visible slide behind social media (after S&T applied)
									var previousSlide = ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(socialPresetQuestionObj.getParentSlideIndex()-positionsBehindSocialMediaSlide)];
									var onClick = function (event) {
									  ODP.Surveo.methods['_killBubbles'](event); ODP.Surveo.methods.onNextClick(); ODP.Surveo.methods.formResults(); ODP.Surveo.params.surveyInProgress = 0; ODP.Surveo.params.sendingInProgress = 0; ODP.Surveo.methods['sendResults']();
									}

									var buttonDiv = previousSlide.querySelectorAll(".buttonDiv");
									if(buttonDiv) {
										buttonDiv[buttonDiv.length-1].onclick = onClick;
									}
									var buttonDivButton = previousSlide.querySelectorAll(".buttonDiv button");
									if(buttonDivButton) {
										buttonDivButton[buttonDivButton.length-1].onclick = onClick;
									}
								}
								
								
							} else {
								//ODP.Surveo.snippets.slider_q.showHideSocialMedia(true);
							

								var socialPresetQuestionObj; 

								//get social preset question object
								var condition = "social_";
								for (var k in ODP.Surveo.params.questionData) {
									if (k.search(condition) > -1) {
										socialPresetQuestionObj = ODP.Surveo.params.questionData[k];
										socialPresetQuestionObj.setSkiped(true);
									}
								}

								//if we have social snippet in project, attach events to previous slide
								if(socialPresetQuestionObj) {
									var positionsBehindSocialMediaSlide = 1; //First visible slide behind social media (after S&T apsplied)
									var previousSlide = ODP.Surveo.params.slideArray[ODP.Surveo.snippets.slide.findNextQuestion(socialPresetQuestionObj.getParentSlideIndex()-positionsBehindSocialMediaSlide)];
									var onClick = function (event) {
									  ODP.Surveo.methods['_killBubbles'](event);ODP.Surveo.methods.onNextClick();
									}

									var buttonDiv = previousSlide.querySelectorAll(".buttonDiv");
									if(buttonDiv) {
										buttonDiv[buttonDiv.length-1].onclick = onClick;
									}
									var buttonDivButton = previousSlide.querySelectorAll(".buttonDiv button");
									if(buttonDivButton) {
										buttonDivButton[buttonDivButton.length-1].onclick = onClick;
									}
								}
								
								
							}
						}
					},
					/* resetFunction */ res,
					/* questionProtoID */ currentQuestionID,
					/* Display Once */ (snippet['Display once'] === "Yes"),
					/* Orientation Change */ [],
					/* ColorCode Function */ function () {},
					/* continuousSumQuestionsAsArray */ "",
					/* setLiteralsFunction */ function (params) {
						var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];
						
						if(params['questionText']) {
							questionSlide.querySelector(".netpromoterQuestionText").innerHTML = params['questionText'];
						}
						
						/** GLOBALIZE CUSTOM STRINGS */
						var helpersToTranslate = questionSlide.querySelectorAll(".netPromoter_helpers");
						var customLiterals = params['customLiterals'];
						if(snippet['Text for 0'] && snippet['Text for 0'] != '') {
							if(helpersToTranslate[0] && customLiterals[snippet['Text for 0']]) {
								helpersToTranslate[0].innerHTML = customLiterals[snippet['Text for 0']];
							}
						}
						if(snippet['Text for 10'] && snippet['Text for 10'] != '') {
							if(helpersToTranslate[1] && customLiterals[snippet['Text for 10']]) {
								helpersToTranslate[1].innerHTML = customLiterals[snippet['Text for 10']];
							}
						}
						
						
						// switch (option) {
							// case "q":
								// questionSlide.querySelector(".netpromoterQuestionText").innerHTML = arrayOfTexts;
								// break;
							// case "a":
								// // no answer options
								// break;
							// default: // impossible
								// break;
						// }
					}
				);
			}
			function trim(s) {
				return s.replace(/^\s+|\s+$/g, "");
			}
			ODP.document.queue.add(generateNP, 5);
			return '<div id="' + noBracketsInstanceID + '_NetPromoter" style="width:100%;height:100%;overflow:hidden;position:relative;-webkit-user-select: none;cursor:default;-webkit-transform: translate3d(0px, 0px, 0px)" ></div>';
		},"destroy":function (instanceID) {
			var snippet = ODP.document.getSnippet(instanceID);
			var arrQuestionIDs = snippet['Question IDs'].split(",");
			for (var i = 0, arrQl = arrQuestionIDs.length; i < arrQl; i++) {
				delete ODP.Surveo.params.questionData[arrQuestionIDs[i]];
				delete ODP.Surveo.snippets.netPromoter.params[arrQuestionIDs[i]];
			}
		}}},{"com.opendataplatform.document.id":"{267DCD1D-8B59-4ABE-9850-9FAFD35CB5E8}","manifest":{"name":"Custom Surveo Finish Section","description":"","image":"","icon_xp16":""},"parameters":[{"name":"General","datatype":"x.sections","defaultvalue":null},{"name":"Submit before last slide","datatype":"x.sections","defaultvalue":1},{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Section ID","datatype":"nvarchar","defaultvalue":""},{"name":"Top text properties","datatype":"x.sections","defaultvalue":null},{"name":"Top text","datatype":"nvarchar","defaultvalue":""},{"name":"Top text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Top text color","datatype":"nvarchar","defaultvalue":""},{"name":"Top text size","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text properties","datatype":"x.sections","defaultvalue":null},{"name":"Middle text","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text color","datatype":"nvarchar","defaultvalue":""},{"name":"Middle text size","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text properties","datatype":"x.sections","defaultvalue":null},{"name":"Bottom text","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text alignment","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text color","datatype":"nvarchar","defaultvalue":""},{"name":"Bottom text size","datatype":"nvarchar","defaultvalue":""},{"name":"Visual","datatype":"x.sections","defaultvalue":null},{"name":"Font shadows","datatype":"nvarchar","defaultvalue":"Thin"},{"name":"Width","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Height","datatype":"nvarchar","defaultvalue":"Fit"},{"name":"Main Background","datatype":"nvarchar","defaultvalue":""},{"name":"Button background","datatype":"nvarchar","defaultvalue":""},{"name":"Clicked Button background","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if (ODP.document.currentRenderer == "server") {
				return;
			}
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var containerDiv = '<div id="' + subAllinstanceIDs + 'qstnMain"  class="question' + subAllinstanceIDs + ' sectionDefault" >';
			var id_replace_hiphens = subAllinstanceIDs.split("-").join("");
			var snippet = ODP.document.getSnippet(instanceID);
			if(typeof snippet === "undefined") { 
				return;
			}
			var parent = ODP.document.getSnippet(snippet['com.opendataplatform.document.parentid']);
			var parentIDNoBrackets = snippet['com.opendataplatform.document.parentid'].substring(1, instanceID.length - 1);
			ODP.Surveo.params.slideCount++;
			
			if (parent['Navigator'] == 'Start') {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params["startBackground"] : snippet["Main Background"];
			}
			if (parent['Navigator'] == 'Thank you') {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params.defaultSectionBack : snippet["Main Background"];
			} else {
				snippet["Main Background"] = (snippet["Main Background"] == "") ? ODP.Surveo.params.defaultSectionBack : snippet["Main Background"];
			}
			var callbacks = function () {
				var target = ODP.window.document.getElementById("picBG" + snippet["com.opendataplatform.document.parentid"]);
				var b64Applicable = (ODP.document.resource(snippet["Main Background"])).search("data:image") > -1;
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					var prepareBase64 = ODP.document.resource(snippet["Main Background"]).replace("url('", "").replace("')", "");
					target.setAttribute("src", prepareBase64.slice(0, prepareBase64.indexOf("}")) + "}");
					target.setStyle("display", "");
				}
			}
			var sText;
			var sText2;
			var sText3;
			
			var splitBy = "###";//snippet['Split By']
			
			if(snippet['Section ID'] && snippet['Section ID'].length != 0) { // new handling! get section title from dataset, split ProtoSectStartHiddenComment by snippet['Split By'](experimental only in OPEN.Designer)
				if (ODP.Surveo.params.isInDesigner && (typeof SM === "undefined" && typeof SM.SurveoDesigner === "undefined")) {
					var srvDataSet = Open.getDataSet(ODP.Surveo.params.surveoDatasetLoaderID);
					if(srvDataSet && srvDataSet.data && srvDataSet.data[2]) {
						for(var a = 0, len = srvDataSet.data[2].length; a < len; a++) {
							if(srvDataSet.data[2][a].ProtoSectStartID === snippet['Section ID']) {
								var curSection = srvDataSet.data[2][a];
								var hiddenComment = curSection['ProtoSectStartHiddenComment'].split(splitBy);
								
								var topValue = (typeof curSection['ProtoSectStartText'] !== "undefined" && curSection['ProtoSectStartText'] != '' && curSection['ProtoSectStartText'] != "''") ? curSection['ProtoSectStartText'] : "";
								var midValue = hiddenComment[0] ? hiddenComment[0] : snippet["Middle text"];
								var botValue = hiddenComment[1] ? hiddenComment[1] : snippet["Bottom text"];
								
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Top text")].value = topValue;
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Middle text")].value = midValue;
								snippet.instance[ODP.document.findIndexByName(snippet.instance, "Bottom text")].value = botValue;
								
								//ODP.document.updateJSON(snippet.instance);
								//ODP.document.addAsObjects();
							}
						}
					}
				}
				
				ODP.document.queue.add(function () {
					Open.listeners.add(ODP.Surveo.params.surveoDatasetLoaderID,	function() {				
						id_replace_hiphens = snippet['Section ID'];
						ODP.Surveo.params.questionData["section_" + id_replace_hiphens] = new ODP.Surveo.questionObject(
							/* Answers */ [],
							/* MainDivID */ "MAIN_" + parentIDNoBrackets,
							/* Hidden Answers */ [],
							/* hideAnswers function */ function () {},
							/* isPersistent*/ (snippet['Is persistent'] == 'Yes'),
							/* isRequired*/ (snippet['Is required'] == 'Yes'),
							/* isSkiped */ false,
							/* moveNext */ false,
							/* setFunction */ function () {},
							/* resetFunction */ function () {},
							/* questionProtoID */ "section_" + id_replace_hiphens,
							/* Display Once */ '',
							/* Orientation Change */ '',
							/* ColorCode Function */ function () {},
							/* continuousSumQuestionsAsArray */ "",
							/* setLiteralsFunction */ function (params) {
								if(params['sectionTexts']) {
									var questionData = ODP.Surveo.params.questionData[this.getProtoID()];
									var instanceID = questionData.additionalDataForQuestion.SectionInstanceID;
									var snippet = ODP.document.getSnippet(instanceID);
									
									sText = snippet["Top text"];
									sText2 = snippet["Middle text"];
									sText3 = snippet["Bottom text"];
									var questionSlide = ODP.Surveo.params.slideArray[questionData.getParentSlideIndex()];
									var slideQuestionTexts = questionSlide.querySelectorAll('.sectionTexts');
									var splitedSecondStringFromSectionTitle = params['sectionTexts'][1].split(splitBy);
									
									if(sText && sText != "") {
										slideQuestionTexts[0].innerHTML = params['sectionTexts'][0];
									}
									if(sText2 && sText2 != "") {
										slideQuestionTexts[1].innerHTML = splitedSecondStringFromSectionTitle[0] ? splitedSecondStringFromSectionTitle[0] : "";
									}
									if(sText3 && sText3 != "") {
										slideQuestionTexts[2].innerHTML = splitedSecondStringFromSectionTitle[1] ? splitedSecondStringFromSectionTitle[1] : "";
									}
								}
								
								// if(typeof arrayOfTexts === "undefined") { return; }
								
								// var questionSlide = ODP.Surveo.params.slideArray[ODP.Surveo.params.questionData[this.getProtoID()].getParentSlideIndex()];

								// switch (option) {
									// case "s":
										// var slideQuestionTexts = questionSlide.querySelectorAll('.sectionTexts');
										// var splitedSecondStringFromSectionTitle = arrayOfTexts[1].split(splitBy);
										
										// slideQuestionTexts[0].innerHTML = arrayOfTexts[0];
										// slideQuestionTexts[1].innerHTML = splitedSecondStringFromSectionTitle[0] ? splitedSecondStringFromSectionTitle[0] : "";
										// slideQuestionTexts[2].innerHTML = splitedSecondStringFromSectionTitle[1] ? splitedSecondStringFromSectionTitle[1] : "";

										// break;
									// default: // impossible uj
										// break;
								// }
							},
							/* additional data */ {
								"SectionProtoID" : snippet['Section ID'],
								"SectionInstanceID" : instanceID
							}
							
						);
						
						sText = snippet["Top text"];
						sText2 = snippet["Middle text"];
						sText3 = snippet["Bottom text"];
							
						var sText_fs = snippet["Top text size"];
						var sText_fs2 = snippet["Middle text size"];
						var sText_fs3 = snippet["Bottom text size"];
						
						var sText_fcol = snippet["Top text color"];
						var sText_fcol2 = snippet["Middle text color"];
						var sText_fcol3 = snippet["Bottom text color"];
						
						var sText_falign = snippet["Top text alignment"];
						var sText_falign2 = snippet["Middle text alignment"];
						var sText_falign3 = snippet["Bottom text alignment"];
						
						// containerDivContent = ["<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;'><div style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div></div><div style='position:absolute;height:60%;top:20%;left:0px;width:100%;'><div style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div></div><div style='position:absolute;height:20%;top:80%;left:0px;width:100%;'><div style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div></div>								"
						// ,ODP.Surveo.methods.addStyleTagsProperly('<style>.gradientNextPrev' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + ' {display:none;}#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%}</style>')
						// ,"</div>"];
						
						containerDivContent = ["<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;'>"
													,"<div class = 'sectionTexts' style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div>"
												
												,"<div id='coupontext_middle' style='position:absolute;height:60%;top:20%;left:0px;width:100%;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;'>"
                                                      ,"<div class = 'sectionTexts' style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div>"
												,"<div id='coupontext' style='font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;color:#000;'></div></div>"
												,"<div style='position:absolute;height:20%;top:80%;left:0px;width:100%;'>"
													,"<div class = 'sectionTexts' style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div>"
												,"</div>"
												,ODP.Surveo.methods.addStyleTagsProperly('<style>.gradientNextPrev' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + ' {display:none;}#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%}</style>')
												,"</div>"];
						
						//ODP.window.document.getElementById(subAllinstanceIDs + 'qstnMain').innerHTML = containerDivContent.join("");

						ODP.Surveo.methods.addSnippetMarkupSafely(ODP.window.document.getElementById(subAllinstanceIDs + 'qstnMain'), containerDivContent.join(""));

					});
				});
			} else {
				ODP.Surveo.params.questionData["section_" + id_replace_hiphens] = new ODP.Surveo.questionObject(
					/* Answers */ [],
					/* MainDivID */ "MAIN_" + parentIDNoBrackets,
					/* Hidden Answers */ [],
					/* hideAnswers function */ function () {},
					/* isPersistent*/ (snippet['Is persistent'] == 'Yes'),
					/* isRequired*/ (snippet['Is required'] == 'Yes'),
					/* isSkiped */ false,
					/* moveNext */ false,
					/* setFunction */ function () {},
					/* resetFunction */ function () {},
					/* questionProtoID */ "section_" + id_replace_hiphens				
				);
				
				sText = snippet["Top text"];
				sText2 = snippet["Middle text"];
				sText3 = snippet["Bottom text"];

					
				var sText_fs = snippet["Top text size"];
				var sText_fs2 = snippet["Middle text size"];
				var sText_fs3 = snippet["Bottom text size"];
				
				var sText_fcol = snippet["Top text color"];
				var sText_fcol2 = snippet["Middle text color"];
				var sText_fcol3 = snippet["Bottom text color"];
				
				var sText_falign = snippet["Top text alignment"];
				var sText_falign2 = snippet["Middle text alignment"];
				var sText_falign3 = snippet["Bottom text alignment"];
				
				//Section Title Top Text
				containerDiv += "<div style='position:absolute;top: 0px;height:20%;left:0px;width:100%;'>";
					containerDiv += "<div class = 'sectionTexts' style='display:block;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "text-align:" + sText_falign + ";font-size:" + sText_fs + ";color:" + sText_fcol + ";'>" + sText + "</div>";
				containerDiv += "</div>";
				//Section Title Middle Text
				containerDiv += "<div style='position:absolute;height:60%;top:20%;left:0px;width:100%;'>";
					containerDiv += "<div class = 'sectionTexts' style='height: 100%;display:block;visibility:visible;;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign2 + ";font-size:" + sText_fs2 + ";color:" + sText_fcol2 + ";'>" + sText2 + "</div>";
				
                containerDiv += "</div>";
				//Section Title Bottom Text
				containerDiv += "<div style='position:absolute;height:20%;top:80%;left:0px;width:100%;'>";
					containerDiv += "<div class = 'sectionTexts' style='display:block;height:100%;visibility:visible;font-family:" + ODP.Surveo.params.defaultFontFamily + "; font-weight:bold;" + ((snippet['Font shadows'] == "Thin") ? '-webkit-text-shadow:black 0.05em 0.05em 0.05em;text-shadow:black 0.05em 0.05em 0.05em;' : '') + "" + ((snippet['Font shadows'] == "Bold") ? '-webkit-text-shadow:black 0.05em 0.05em 0.2em;text-shadow:black 0.05em 0.05em 0.2em;' : '') + "\text-align:" + sText_falign3 + ";font-size:" + sText_fs3 + ";color:" + sText_fcol3 + ";'>" + sText3 + "</div>";
				containerDiv += "</div>";
				containerDiv += ODP.Surveo.methods.addStyleTagsProperly('<style>#qstnHolder' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{visibility:hidden;} .surveyStructure #MAIN_' + snippet['com.opendataplatform.document.parentid'].replace("{", "").replace("}", "") + '{background:' + ((snippet["Main Background"] != "" && ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) ? ODP.document.getSnippet(snippet["Main Background"])["Content"] : "") + ';background-size 100% 100%;-moz-background-size 100% 100%;-o-background-size 100% 100%}</style>');
				containerDiv += "</div>	";
				
				

			}
			
			if (snippet['Submit before last slide']) {
				if (isNaN(snippet['Submit before last slide']) === false) {
					ODP.Surveo.snippets.slide._slideNext = function (delay, eventSwitch) {
						//console.log("_slideNext", ODP.Surveo.params.buttonsLock);
						eventSwitch = (typeof eventSwitch === 'undefined') ? true : eventSwitch;

						if (ODP.Surveo.params.buttonsLock == 0) {
							if (ODP.Surveo.methods.checkRequired() && eventSwitch) {
								return;
							}

							if (currentChildNode === 0) {
								ODP.Surveo.methods.startSurvey(); //handle questions on the starting slide;
							}

							delay = delay || "0ms";
							delayWithoutMS = (delay.split) ? parseInt(delay.split("ms")[0], 10) : delay;

							var cacheSlides = ODP.Surveo.params.slideArray;
							var cacheCurrent = cacheSlides[currentChildNode];

							var nextChildNode = ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode + 1);

							if (nextChildNode == ODP.Surveo.params.slideArray.length - 1 && nextChildNode > currentChildNode) {
								ODP.Surveo.params.surveyInProgress = 0;
								ODP.Surveo.methods['formResults']();
								ODP.Surveo.methods.clearAnswers();
								if (renderer !== 'design' && typeof SM === 'undefined') {
									ODP.Surveo.methods['sendResults']();

								}
							}

							if (currentChildNode === nextChildNode) {
								//ODP.Surveo.methods.finishSurvey();
								ODP.Surveo.snippets.slide._restartSurvey();
								ODP.Surveo.methods.clearAnswers();
								
								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : cacheCurrent
								}); //booya
								return;
							}
							var cacheNext = cacheSlides[nextChildNode];

							if (typeof cacheCurrent === "undefined" || typeof cacheNext === "undefined" || nextChildNode === currentChildNode) {
								return;
							}

							if (!(renderer === 'design' || typeof SM !== "undefined")) {
								ODP.Surveo.params.buttonsLock = 1;
							} else {
								ODP.Surveo.params.slideArray = ODP.window.document.body.querySelectorAll('.questionMain');
							}

							if (ODP.Surveo.globalization && ODP.Surveo.globalization.isGlobalizationInitialized) {
								ODP.Surveo.globalization.setGlobalizationForSlide(nextChildNode);
							}

							var paramsForAnimation = {
								"cacheCurrent" : cacheCurrent,
								"cacheNext" : cacheNext,
								"delay" : delayWithoutMS,
								"animationType" : "nextSlide"
							}

							currentChildNode = nextChildNode;

							//ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);

							ODP.window.requestAnimFrame(function () {
								ODP.Surveo.snippets.slide.animateSlides(paramsForAnimation);
							});

							if (eventSwitch) {
								ODP.Surveo.params.onSlideChange.fire(null, {
									index : currentChildNode,
									domReference : cacheCurrent
								}); //booya
							}

							cacheSlides = undefined;

							var parentSnippet = ODP.document.objinstances[snippet['com.opendataplatform.document.parentid']];
							var autoRestarttAfter = (parentSnippet['Auto restart after'] && parentSnippet['Auto restart after'] !== "Disable") ? (parseInt(parentSnippet['Auto restart after'],10) * 1000) : false;
							
							if (autoRestarttAfter) {
								initAutoSendHandler(autoSendHandler, autoRestarttAfter);
							}
						}

						return;
					}
					
					
					
					ODP.Surveo.methods.customOnSuccessSubmitFunction = function () {
						var text = ODP.Surveo.params.customFinishText;
						if (typeof text === "undefined" || text === "") {
							text = "Thank you!<br>Your feedback will help us to improve our services.";
						}
						
						var divMask = document.createElement('div');
						divMask.id = "customFinishDivMask";
						divMask.className = "divMask";
						divMask.innerHTML = "Sending...";
						divMask.style.width = "100%";
						divMask.style.background = "#000000";
						divMask.style.left = "0";
						divMask.style.top = "0";
						divMask.style.height = "100%";
						divMask.style.opacity = "0.8";
						divMask.style.position = "absolute";
						document.body.appendChild(divMask);
						
						if (divMask) {
							divMask.innerHTML = "<div style='font-size:20px; font-family:tahoma,arial,verdana,sans-serif;display:block;position:relative;top:50%;border-radius:3px;text-align:center;font-weight:bold;color:#FFFFFF; line-height: 20px; margin-top: -20px;'>" + text + "</div>"; ;
						};
					}

					ODP.Surveo.methods.customFinishSurvey = function (text) {
						console.log("ODP.Surveo.methods.customFinishSurvey", text);
						if (typeof text === "undefined" || text === "") {
							text = "Thank you!<br>Your feedback will help us to improve our services.";
						}
						if (typeof ODP.Surveo.params.customFinishSurveyStarted === "undefined") {
							ODP.Surveo.params.customFinishSurveyStarted = true;
							ODP.Surveo.params.surveyInProgress = 0;
							ODP.Surveo.params.buttonsLock = 1;

							if (typeof ODP.Surveo.params.surveoIWR === 'undefined' || ODP.Surveo.params.surveoIWR === '') {
								return;
							}

							ODP.Surveo.methods.customOnSuccessSubmitFunction();
						}
					}

					function initAutoSendHandler(autoSendHandler, autoRestarttAfter) {
						if (ODP.Surveo.params.sendResultsTimeout) {
							clearInterval(ODP.Surveo.params.sendResultsTimeout);
						}
						ODP.Surveo.params.sendResultsTimeout = setInterval(autoSendHandler, autoRestarttAfter);
					}

					function autoSendHandler() {
						var parentSnippet = ODP.document.objinstances[snippet['com.opendataplatform.document.parentid']];
						var finishSurvey = (parentSnippet['Navigator'] === "Thank you" && typeof parentSnippet['On click finish button'] !== "undefined" && parentSnippet['On click finish button'] === "Finish survey" && typeof parentSnippet['Custom text on submit'] !== "undefined");
						if ((ODP.document.renderMode !== "design" && ODP.document.renderTarget !== "SurveoDesignerSlidePreview") && (currentChildNode === ODP.Surveo.params.slideCount - 1)) {
							if (finishSurvey) {
								(ODP.Surveo.methods.customFinishSurvey && ODP.Surveo.methods.customFinishSurvey(ODP.Surveo.params.customFinishText));
							} else {
								ODP.Surveo.snippets.slide._slideNext();
							}
						} else {
							if (autoRestarttAfter) {
								var nextChildNode = ODP.Surveo.snippets.slide.findNextQuestion(currentChildNode + 1);
								if (currentChildNode >= nextChildNode) {
									if (finishSurvey) {
										(ODP.Surveo.methods.customFinishSurvey && ODP.Surveo.methods.customFinishSurvey(ODP.Surveo.params.customFinishText));
									} else {
										ODP.Surveo.snippets.slide._slideNext();
									}
								} else {
									ODP.Surveo.methods.onCloseClick();
								}
							}
						}
						clearInterval(ODP.Surveo.params.sendResultsTimeout);
					}
					
					var parentSnippet = ODP.document.objinstances[snippet['com.opendataplatform.document.parentid']];
					var autoRestarttAfter = (parentSnippet['Auto restart after'] && parentSnippet['Auto restart after'] !== "Disable") ? (parseInt(parentSnippet['Auto restart after'],10) * 1000) : false;
							
					if (parentSnippet['Navigator'] === "Thank you" && typeof parentSnippet['On click finish button'] !== "undefined" && parentSnippet['On click finish button'] === "Finish survey" && typeof parentSnippet['Custom text on submit'] !== "undefined") {
						ODP.Surveo.params.customFinishFunctionFlag = true;
						ODP.Surveo.params.customFinishText = parentSnippet['Custom text on submit'];
						if (typeof ODP.Surveo.params.sendResultsTimeout === "undefined") {
							if (autoRestarttAfter) {
								if (ODP.document.renderMode !== "design" && ODP.document.renderTarget !== "SurveoDesignerSlidePreview") {
									initAutoSendHandler(autoSendHandler, autoRestarttAfter);
								}
							}
						}
					} else {
						ODP.Surveo.params.customFinishFunctionFlag = false;
						if (ODP.Surveo.params.sendResultsTimeout) {
							clearInterval(ODP.Surveo.params.sendResultsTimeout);
						}
					}
				}			
			}
			
			ODP.document.queue.add(function () {
				if (!ODP.Surveo.params.deploymentTarget.supportsCSS("backgroundSize")) {
					callbacks();
				}

				if(!snippet['Section ID']) {
					if (ODP.Surveo.params.loaderProgress + 1 < ODP.Surveo.params.slideCount) {
						ODP.Surveo.params.loaderProgress++;
						ODP.Surveo.params.loadingBox.update();
					} else {
						ODP.Surveo.params.loadingBox.destroy();
					}
				}
			});
			
			return containerDiv;
		},"destroy":function (instanceID) {
			var subAllinstanceIDs = instanceID.substring(1, instanceID.length - 1);
			var id_replace_hiphens = subAllinstanceIDs.split("-").join("");
			delete ODP.Surveo.params.questionData["section_" + id_replace_hiphens];
		}}},{"com.opendataplatform.document.id":"{27545E54-0548-44B3-9B64-04F71B119C4E}","manifest":{"name":"Design Effects","description":"","image":"","icon_xp16":""},"parameters":[{"name":"Custom CSS","datatype":"nvarchar","defaultvalue":""},{"name":"Target ID","datatype":"nvarchar","defaultvalue":""},{"name":"Background Color","datatype":"nvarchar","defaultvalue":""},{"name":"Opacity","datatype":"nvarchar","defaultvalue":"100%"},{"name":"Background Image","datatype":"nvarchar","defaultvalue":""},{"name":"Background Vertical Position","datatype":"nvarchar","defaultvalue":"top"},{"name":"Background Horizontal Position","datatype":"nvarchar","defaultvalue":"center"},{"name":"Background Attachment","datatype":"nvarchar","defaultvalue":"false"},{"name":"Direction","datatype":"nvarchar","defaultvalue":"100% auto"}],"ui":{"render":function (instanceID, documentRef, renderer) {
			if(ODP.document.currentRenderer === "server"){
				return "";
			}
			var cssText = "";
			ODP.document.queue.add(function() {
				var snippet = ODP.document.getSnippet(instanceID);
				var parentID = (snippet["Target ID"] !== "" ? snippet["Target ID"] : snippet["com.opendataplatform.document.parentid"]);
				var parentNode;

				var parentSnippetProtoID = parentID ? (ODP.document.getSnippet(parentID) ? ODP.document.getSnippet(parentID)["com.opendataplatform.document.protoid"] : "") : "";
				if (parentID.length === 0 || parentSnippetProtoID === ODP.document.documentSnippetProtoID) {
					if (renderer === 'design') {
						parentNode = Ext.getCmp('centerPanel').body.dom;
					} else {
						parentNode = document.body;
					}
				} else {
					if (renderer === 'design') {
						var panel = Ext.getCmp(parentID);
						if (panel) {
							parentNode = panel.body.dom;
						} else {
							parentNode = document.getElementById(parentID);
						}
					} else {
						parentNode = document.getElementById(parentID);
					}
				}
				
				if(parentNode){
							parentNode.style.backgroundRepeat = 'no-repeat';
						}
						else{
							return;
						}
						
				if (typeof(snippet['Custom CSS']) !== 'undefined' && snippet['Custom CSS'] != null) {
					cssText = ";" + snippet['Custom CSS'];
					parentNode.style.cssText += cssText;
				}

				if (snippet['Background Image'] != '' && snippet['Background Image'] != null) {
					var support = checkProperty('backgroundSize');
					if (support != false) {

						if (typeof(snippet['Background Attachment']) !== 'undefined') {
							if (snippet['Background Attachment'] == 'true') {
								parentNode.style.backgroundAttachment = 'fixed';
							} else {
								parentNode.style.backgroundAttachment = 'scroll';
							}
						}
						if(parentNode){
							parentNode.style.backgroundRepeat = 'no-repeat';
						}
						else{
							return;
						}

						if (typeof(snippet['Background Vertical Position']) !== 'undefined') {
							if (typeof(snippet['Background Horizontal Position']) !== 'undefined') {
								var hPos = snippet['Background Horizontal Position'];
							} else {
								var hPos = "";
							}
							parentNode.style.backgroundPosition = hPos + " " + snippet['Background Vertical Position'];
						}


						if (typeof(snippet['Background Horizontal Position']) !== 'undefined') {
							if (typeof(snippet['Background Vertical Position']) !== 'undefined') {
								var vPos = snippet['Background Vertical Position'];
							} else {
								var vPos = "";
							}
							parentNode.style.backgroundPosition = snippet['Background Horizontal Position'] + " " + vPos;
						}

						if (typeof(snippet['Direction']) !== 'undefined') {
							parentNode.style[support] = snippet['Direction'];
						}

						parentNode.style.backgroundImage = 'url("' + snippet['Background Image'] + '")';
					} 
					else {
						//parentNode.style.position = 'relative';

						var bgDiv = document.createElement('div');
						parentNode.appendChild(bgDiv);
						var cssText = "";
						if (typeof(snippet['Background Attachment']) !== 'undefined') {
							if (snippet['Background Attachment'] == 'true') {
								cssText += "position:fixed;";
							} else {
								cssText += "position:absolute;";
							}
						}

						cssText += "top:0px;";
						cssText += "left:0px;";
						cssText += "width:100%;";
						cssText += "height:100%;";
						cssText += "display:table;";
						bgDiv.style.setAttribute('cssText', cssText, 0);
						cssText = "";
						temp = document.createElement('div');
						bgDiv.appendChild(temp);

						cssText += "display:table-cell;";

						if (typeof(snippet['Background Vertical Position']) !== 'undefined') {
							if (snippet['Background Vertical Position'] === 'center') {
								snippet['Background Vertical Position'] = 'middle';
							}
							cssText += "vertical-align:" + snippet['Background Vertical Position'] + ";";
						}

						if (typeof(snippet['Background Horizontal Position']) !== 'undefined') {
							cssText += "text-align:" + snippet['Background Horizontal Position'] + ";";
						}
						cssText += "height:100%;";
					
						temp.style.setAttribute('cssText', cssText, 0);
						cssText = "";

						if (typeof(snippet['Background Image']) !== "undefined") {
							bgImg = new Image();
							bgImg.src = snippet['Background Image'];
							temp.appendChild(bgImg);
							switch (snippet['Direction']) {
							case '100% auto':
								cssText = "height:auto;width:100%;";
								break;
							case 'auto 100%':
								cssText = "height:100%;width:auto;";
								break;
							case '100% 100%':
								cssText = "height:100%;width:100%;";
								break;
							default:
								cssText = "height:100%;width:auto;";
							}
							
							bgImg.style.setAttribute('cssText', cssText, 0);
							cssText = "";
						}

					}
				}

				if (typeof(snippet['Background Color']) !== 'undefined' && snippet['Background Color'] != null) {
					if (typeof(snippet['Opacity']) !== 'undefined' && snippet['Opacity'] != null) {
						var transp = (parseInt(snippet['Opacity'], 10)) / 100;
						if (transp < 0) {
							transp = 0;
						} else if (transp > 1) {
							transp = 1;
						}
					} else {
						var transp = 1;
					}
					try {
						var rgba = getColor(snippet['Background Color'], transp, 'RGBa');
						parentNode.style.backgroundColor = "rgba(" + rgba + ")";
					} catch (e) {
						if (navigator.appName == 'Microsoft Internet Explorer') {
							var hexDec = getColor(snippet['Background Color'], transp, 'hexDec');
							if (typeof(hexDec) !== "undefined") {
								parentNode.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + hexDec + ", endColorstr=" + hexDec + ")";
								parentNode.style.MsFilter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + hexDec + ", endColorstr=" + hexDec + ")";
							}
						} else {
							var rgb = getColor(snippet['Background Color'], transp, 'RGB');
							parentNode.style.backgroundColor = "rgb(" + rgb + ")";
						}
					}
				}

				function checkProperty(property) {
					var tempDiv = document.createElement('div');
					var vendors = 'Khtml Ms O Moz Webkit';
					vendors = vendors.split(' ');
					var len = vendors.length;
					if (property in tempDiv.style) {
						return property;
					} else {
						property = property.replace(/^[a-z]/, function(val) {
							return val.toUpperCase();
						});
						while (len--) {
							if ((vendors[len] + property) in tempDiv.style) {
								property = vendors[len] + property;
								return property;
							}
						}
					}
					return false;
				}

				function getColor(colorRaw, opt, targetColor) {
					colorRaw = colorRaw.replace(/\s/g, "");
					colorRaw = colorRaw.replace(/\./g, ",");
					var regRGB = new RegExp(/^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))),(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))),(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])))$/);
					var regHex = new RegExp(/^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/);
					var optHex;
					if (opt == 0) {
						optHex = '00';
					} else {
						optHex = 255 * opt;
						optHex = Math.round(optHex);
						optHex = optHex.toString(16);
					}
					if (colorRaw.match(regRGB)) {
						var colors = colorRaw.split(",");
						colors[0] = parseInt(colors[0], 10);
						colors[1] = parseInt(colors[1], 10);
						colors[2] = parseInt(colors[2], 10);
						if (targetColor == 'RGBa') {
							return (colors[0] + "," + colors[1] + "," + colors[2] + "," + opt);
						} else if (targetColor == 'hexDec') {
							var resultString = '#' + optHex;
							for (var q = 0; q < colors.length; q++) {
								colors[q] = colors[q].toString(16);
								resultString += colors[q].length != 2 ? "0" + colors[q] : colors[q];
							}
							return resultString.toUpperCase();
						} else if (targetColor == 'RGB') {
							return (colors[0] + "," + colors[1] + "," + colors[2]);
						}
					} else {
						colorRaw = colorRaw.substr(0, 7);
						if (colorRaw.match(regHex)) {
							if (colorRaw.length == 4) {
								colorRaw += colorRaw.substr(1, 4);
							}
							var colors = new Array();
							colors[0] = parseInt(colorRaw.substr(1, 2), 16);
							colors[1] = parseInt(colorRaw.substr(3, 2), 16);
							colors[2] = parseInt(colorRaw.substr(5, 2), 16);
							if (targetColor == 'RGBa') {
								return (colors[0] + "," + colors[1] + "," + colors[2] + "," + opt);
							} else if (targetColor == 'hexDec') {
								var resultString = '#' + optHex;
								for (var q = 0; q < colors.length; q++) {
									colors[q] = colors[q].toString(16);
									resultString += colors[q].length != 2 ? "0" + colors[q] : colors[q];
								}
								return resultString.toUpperCase();
							} else if (targetColor == 'RGB') {
								return (colors[0] + "," + colors[1] + "," + colors[2]);
							}
						}
					}
				}
				return "";
			});
			return "";
		}}},{"com.opendataplatform.document.id":"{44430913-F7B3-49E0-91C8-D52D9E0B6C36}","manifest":{"name":"Resources","description":"","image":"","icon_xp16":""},"parameters":[],"ui":{"render":function (instanceID,documentRef,renderer) {
			return "";
		}}},{"com.opendataplatform.document.id":"{2A5D6EAC-75B3-46EA-A819-A238A1F18D68}","manifest":{"name":"Resource","description":"","image":"","icon_xp16":""},"parameters":[{"name":"Title","datatype":"nvarchar","defaultvalue":""},{"name":"Content","datatype":"nvarchar","defaultvalue":""}],"ui":{"render":function (instanceID,documentRef,renderer) {
			var snippet = ODP.document.getSnippet(instanceID);
			return snippet["Content"];
		}}}],"Open":{"store":"{\"settings\":{\"build\":\"1.0.0.0\"},\"store\":{\"{\\\"action\\\":\\\"exec\\\",\\\"dataset\\\":{\\\"datasetname\\\":\\\"/Apps/SURVEO/GetSurveyData\\\"},\\\"parameters\\\":[{\\\"name\\\":\\\"SecurityObjectUserID\\\",\\\"value\\\":null},{\\\"name\\\":\\\"ProtoSurveyID\\\",\\\"value\\\":\\\"1338\\\"},{\\\"name\\\":\\\"MiscSettings\\\",\\\"value\\\":null}]}\":{\"schema\":{\"manifest\":{\"datasetname\":\"/Apps/com.Surveo/Surveo Designer/Surveo Datasets/GetSurveyData\",\"datafieldsmode\":\"D\",\"dbsqltype\":\"P\",\"schemaformat\":\"JSON\",\"dataformat\":\"simple\",\"encoding\":\"utf-8\",\"security\":{},\"cacheable\":{},\"hasoutputparameters\":false,\"meta\":{}},\"parameters\":[],\"columns\":[[{\"name\":\"Pos\"},{\"name\":\"ObjType\"},{\"name\":\"ObjID\"}],[{\"name\":\"ProtoSurveyID\"},{\"name\":\"ClientID\"},{\"name\":\"Title\"},{\"name\":\"SubTitle\"},{\"name\":\"SecondSubTitle\"},{\"name\":\"AlternativeTitleForApplications\"},{\"name\":\"ProtoSurveyLogo\"},{\"name\":\"HasTimeOut\"},{\"name\":\"HeaderDateRendTypeID\"},{\"name\":\"HeaderTimeRendTypeID\"},{\"name\":\"ProtoSurveyThemeID\"},{\"name\":\"ZoomPercent\"},{\"name\":\"ProtoSurveyXML\"},{\"name\":\"PayRate\"},{\"name\":\"PayCurrencyID\"},{\"name\":\"BillingRate\"},{\"name\":\"BillingCurrencyID\"},{\"name\":\"DateCreated\"},{\"name\":\"LastModified\"},{\"name\":\"LoginCreatedBy\"},{\"name\":\"LoginLastModifiedBy\"},{\"name\":\"ProtoSurveyStatus\"},{\"name\":\"AdvancedScript\"},{\"name\":\"ProtoSurveyVersion\"},{\"name\":\"DefaultProcessingRouteID\"},{\"name\":\"IsShowNumberOfQuestions\"},{\"name\":\"IsShowLocationCityStateRegion\"},{\"name\":\"IsShowLocationAddress\"},{\"name\":\"IsShowLocationPhone\"},{\"name\":\"IsShowLocationHours\"},{\"name\":\"IsShowAuditorPayRate\"},{\"name\":\"IsNoDecline\"},{\"name\":\"AttachmentsCountMin\"},{\"name\":\"ValidatorPayRate\"},{\"name\":\"NotificationSvcs_CloseToDueDateDaysToNotify\"},{\"name\":\"ProtoSurveyFamily\"},{\"name\":\"GlobalCustomizedFormDefault\"},{\"name\":\"DefaultAutoAssignProfileID\"},{\"name\":\"DefaultRestrictApplyProfileID\"},{\"name\":\"AnswerColorCoding\"},{\"name\":\"SurveyFontSize\"},{\"name\":\"ClientAuditMode\"},{\"name\":\"ClientFirstResponseWindow\"},{\"name\":\"MSPReplyWindow\"},{\"name\":\"ConsequentResponseWindow\"},{\"name\":\"MaxNumberOfClientObjections\"},{\"name\":\"ObjectionTextTemplate\"},{\"name\":\"MoveRelTempToRelDataCustomSql\"},{\"name\":\"AfterSubmitOrSubmittedSaveCustomSql\"},{\"name\":\"HideBlankComments\"},{\"name\":\"SurveyRenderingDefinitionID\"},{\"name\":\"ActiveTrainingEnabled\"},{\"name\":\"SkipPatterns\"},{\"name\":\"SkipPatternsIsEnabled\"},{\"name\":\"IsSectionLevel1WeightDefinedPrecalc\"},{\"name\":\"RequiredPlannedDate\"},{\"name\":\"SetDueDateToPlannedDate\"},{\"name\":\"SurveyCompletionMode\"},{\"name\":\"SurveyCompletionModeTemplate\"},{\"name\":\"ProtoSurveyGUID\"},{\"name\":\"HiddenQuestionsNotRequired\"},{\"name\":\"RandomizeAnswersPositionForValidator\"}],[{\"name\":\"ObjID\"},{\"name\":\"ProtoSectStartID\"},{\"name\":\"ProtoSectStartText\"},{\"name\":\"ProtoSectStartHiddenComment\"}],[{\"name\":\"ObjID\"},{\"name\":\"Text\"},{\"name\":\"HiddenComment\"},{\"name\":\"ProtoAnswerID\"},{\"name\":\"ProtoCommentID\"},{\"name\":\"ProtoQuestionCategoryID\"},{\"name\":\"AnswerVisualizationID\"},{\"name\":\"LongAnswerBreakAtPos\"},{\"name\":\"IsNotApplicable\"},{\"name\":\"IsAnswerRequired\"},{\"name\":\"IsNumbered\"},{\"name\":\"IsShowSelectedAnswersOnlyOnExport\"},{\"name\":\"CommentContentRuleID\"},{\"name\":\"CommentRequirementRuleID\"}],[{\"name\":\"ProtoAnswerID\"},{\"name\":\"Pos\"},{\"name\":\"Description\"},{\"name\":\"Measure\"},{\"name\":\"DisplayOrder\"}],[{\"name\":\"ProtoAnswerID\"},{\"name\":\"OtherPresentationType\"},{\"name\":\"IsMultipleSel\"},{\"name\":\"IsShowMeasure\"},{\"name\":\"ForcedMaxMeasure\"},{\"name\":\"LimitMinMeasure\"},{\"name\":\"LimitMaxMeasure\"},{\"name\":\"StartingPoints\"},{\"name\":\"IsShowInDropdown\"},{\"name\":\"VisualizeAsDropdown\"},{\"name\":\"AnswersDisplayOrderType\"}]]},\"data\":[[{\"Pos\":\"1\",\"ObjType\":\"Q\",\"ObjID\":\"9316\"},{\"Pos\":\"2\",\"ObjType\":\"Q\",\"ObjID\":\"9354\"},{\"Pos\":\"3\",\"ObjType\":\"Q\",\"ObjID\":\"9353\"},{\"Pos\":\"4\",\"ObjType\":\"S\",\"ObjID\":\"1\"},{\"Pos\":\"5\",\"ObjType\":\"E\",\"ObjID\":\"1\"},{\"Pos\":\"6\",\"ObjType\":\"Q\",\"ObjID\":\"9358\"},{\"Pos\":\"7\",\"ObjType\":\"Q\",\"ObjID\":\"9277\"},{\"Pos\":\"8\",\"ObjType\":\"Q\",\"ObjID\":\"9278\"},{\"Pos\":\"9\",\"ObjType\":\"Q\",\"ObjID\":\"9279\"},{\"Pos\":\"10\",\"ObjType\":\"Q\",\"ObjID\":\"9342\"},{\"Pos\":\"11\",\"ObjType\":\"Q\",\"ObjID\":\"9341\"},{\"Pos\":\"12\",\"ObjType\":\"Q\",\"ObjID\":\"9282\"},{\"Pos\":\"13\",\"ObjType\":\"Q\",\"ObjID\":\"9283\"},{\"Pos\":\"14\",\"ObjType\":\"Q\",\"ObjID\":\"9343\"},{\"Pos\":\"15\",\"ObjType\":\"Q\",\"ObjID\":\"9285\"},{\"Pos\":\"16\",\"ObjType\":\"Q\",\"ObjID\":\"9286\"},{\"Pos\":\"17\",\"ObjType\":\"Q\",\"ObjID\":\"9287\"},{\"Pos\":\"18\",\"ObjType\":\"Q\",\"ObjID\":\"9288\"},{\"Pos\":\"19\",\"ObjType\":\"Q\",\"ObjID\":\"9289\"},{\"Pos\":\"20\",\"ObjType\":\"Q\",\"ObjID\":\"9344\"},{\"Pos\":\"21\",\"ObjType\":\"Q\",\"ObjID\":\"9313\"},{\"Pos\":\"22\",\"ObjType\":\"Q\",\"ObjID\":\"9314\"},{\"Pos\":\"23\",\"ObjType\":\"Q\",\"ObjID\":\"9345\"},{\"Pos\":\"24\",\"ObjType\":\"Q\",\"ObjID\":\"9291\"},{\"Pos\":\"25\",\"ObjType\":\"Q\",\"ObjID\":\"9292\"},{\"Pos\":\"26\",\"ObjType\":\"Q\",\"ObjID\":\"9293\"},{\"Pos\":\"27\",\"ObjType\":\"Q\",\"ObjID\":\"9294\"},{\"Pos\":\"28\",\"ObjType\":\"Q\",\"ObjID\":\"9295\"},{\"Pos\":\"29\",\"ObjType\":\"Q\",\"ObjID\":\"9296\"},{\"Pos\":\"30\",\"ObjType\":\"Q\",\"ObjID\":\"9300\"},{\"Pos\":\"31\",\"ObjType\":\"Q\",\"ObjID\":\"9301\"},{\"Pos\":\"32\",\"ObjType\":\"Q\",\"ObjID\":\"9302\"},{\"Pos\":\"33\",\"ObjType\":\"Q\",\"ObjID\":\"9303\"},{\"Pos\":\"34\",\"ObjType\":\"Q\",\"ObjID\":\"9304\"},{\"Pos\":\"35\",\"ObjType\":\"Q\",\"ObjID\":\"9305\"},{\"Pos\":\"36\",\"ObjType\":\"Q\",\"ObjID\":\"9306\"},{\"Pos\":\"37\",\"ObjType\":\"Q\",\"ObjID\":\"9307\"},{\"Pos\":\"38\",\"ObjType\":\"Q\",\"ObjID\":\"9308\"},{\"Pos\":\"39\",\"ObjType\":\"Q\",\"ObjID\":\"9309\"},{\"Pos\":\"40\",\"ObjType\":\"Q\",\"ObjID\":\"9310\"},{\"Pos\":\"41\",\"ObjType\":\"Q\",\"ObjID\":\"9311\"},{\"Pos\":\"42\",\"ObjType\":\"Q\",\"ObjID\":\"9355\"},{\"Pos\":\"43\",\"ObjType\":\"Q\",\"ObjID\":\"9356\"},{\"Pos\":\"44\",\"ObjType\":\"Q\",\"ObjID\":\"9357\"},{\"Pos\":\"45\",\"ObjType\":\"Q\",\"ObjID\":\"9413\"},{\"Pos\":\"46\",\"ObjType\":\"S\",\"ObjID\":\"2\"},{\"Pos\":\"47\",\"ObjType\":\"E\",\"ObjID\":\"2\"}],[{\"ProtoSurveyID\":\"1338\",\"ClientID\":\"2074\",\"Title\":\"McDonald's Czech Republic\",\"SubTitle\":\"\",\"SecondSubTitle\":\"\",\"AlternativeTitleForApplications\":\"\",\"ProtoSurveyLogo\":\"\",\"HasTimeOut\":\"false\",\"HeaderDateRendTypeID\":\"1\",\"HeaderTimeRendTypeID\":\"1\",\"ProtoSurveyThemeID\":\"10999\",\"ZoomPercent\":\"100\",\"ProtoSurveyXML\":\"\",\"PayRate\":null,\"PayCurrencyID\":\"978\",\"BillingRate\":\"0\",\"BillingCurrencyID\":\"978\",\"DateCreated\":\"2017-03-09 20:42:41\",\"LastModified\":\"2018-04-10 14:10:56\",\"LoginCreatedBy\":null,\"LoginLastModifiedBy\":null,\"ProtoSurveyStatus\":\"A\",\"AdvancedScript\":\"\",\"ProtoSurveyVersion\":\"{1A0465D0-0520-493D-ADF4-E4643E06DD80}\",\"DefaultProcessingRouteID\":\"2\",\"IsShowNumberOfQuestions\":\"1\",\"IsShowLocationCityStateRegion\":\"1\",\"IsShowLocationAddress\":\"1\",\"IsShowLocationPhone\":\"1\",\"IsShowLocationHours\":\"1\",\"IsShowAuditorPayRate\":\"1\",\"IsNoDecline\":\"0\",\"AttachmentsCountMin\":\"0\",\"ValidatorPayRate\":\"0\",\"NotificationSvcs_CloseToDueDateDaysToNotify\":null,\"ProtoSurveyFamily\":\"\",\"GlobalCustomizedFormDefault\":\"100000\",\"DefaultAutoAssignProfileID\":\"0\",\"DefaultRestrictApplyProfileID\":\"0\",\"AnswerColorCoding\":\"\",\"SurveyFontSize\":\"10\",\"ClientAuditMode\":\"0\",\"ClientFirstResponseWindow\":null,\"MSPReplyWindow\":null,\"ConsequentResponseWindow\":null,\"MaxNumberOfClientObjections\":null,\"ObjectionTextTemplate\":null,\"MoveRelTempToRelDataCustomSql\":\"\",\"AfterSubmitOrSubmittedSaveCustomSql\":\"EXEC [xcust].[usp_McDonalds_SurveyInstancesMeasuresPrecalculate] @SurveyInstanceID = @SurveyInstanceID; EXEC [xcust].[usp_McDonalds_MoveToMailbox_InvalidSurveyInstances] @CurrentUserSecurityObjectUserID = @CurrentUserSecurityObjectUserID, @SurveyInstanceID = @SurveyInstanceID, @ProtoSurveyID = @ProtoSurveyID, @SubmitOrSubmittedSave = @SubmitOrSubmittedSave, @UserAgentStringID = @UserAgentStringID, @IPAddressID = @IPAddressID, @SubmissionTimeFrameInSecondsThreshold = 45, @DestinationMailBoxID = 131739;\",\"HideBlankComments\":\"0\",\"SurveyRenderingDefinitionID\":\"1000\",\"ActiveTrainingEnabled\":\"0\",\"SkipPatterns\":\"<definitions><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9316\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9277\\\"/><action type=\\\"hide\\\" objID=\\\"9278\\\"/><action type=\\\"hide\\\" objID=\\\"9279\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9316\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9354\\\"/><action type=\\\"hide\\\" objID=\\\"9353\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0055]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0064]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0068]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0072]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0074]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0083]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0102]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0103]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0104]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0106]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0107]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0108]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0110]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0111]]></value></condition></group></conditions><actions><action type=\\\"do not change\\\" objID=\\\"9282\\\"/><action type=\\\"hideanswer\\\" objID=\\\"9282\\\"><parameter name=\\\"answers\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[5]]><![CDATA[6]]></parameter></action></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0048]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0060]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0062]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0067]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0071]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0073]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0088]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0095]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0100]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0109]]></value></condition></group></conditions><actions><action type=\\\"do not change\\\" objID=\\\"9282\\\"/><action type=\\\"hideanswer\\\" objID=\\\"9282\\\"><parameter name=\\\"answers\\\"><![CDATA[1]]><![CDATA[6]]></parameter></action></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0058]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0076]]></value></condition><condition name=\\\"operand\\\" type=\\\"or\\\"/><condition name=\\\"condition\\\" type=\\\"commentcontains\\\" objType=\\\"question\\\" objID=\\\"9358\\\"><value name=\\\"parameter\\\"><![CDATA[0042]]></value></condition></group></conditions><actions><action type=\\\"do not change\\\" objID=\\\"9282\\\"/><action type=\\\"hideanswer\\\" objID=\\\"9282\\\"><parameter name=\\\"answers\\\"><![CDATA[1]]></parameter></action></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9342\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9354\\\"/><action type=\\\"hide\\\" objID=\\\"9353\\\"/><action type=\\\"hide\\\" objID=\\\"9303\\\"/><action type=\\\"hide\\\" objID=\\\"9304\\\"/><action type=\\\"hide\\\" objID=\\\"9305\\\"/><action type=\\\"hide\\\" objID=\\\"9306\\\"/><action type=\\\"hide\\\" objID=\\\"9307\\\"/><action type=\\\"hide\\\" objID=\\\"9308\\\"/><action type=\\\"hide\\\" objID=\\\"9309\\\"/><action type=\\\"hide\\\" objID=\\\"9310\\\"/><action type=\\\"hide\\\" objID=\\\"9311\\\"/><action type=\\\"hide\\\" objID=\\\"9355\\\"/><action type=\\\"hide\\\" objID=\\\"9356\\\"/><action type=\\\"hide\\\" objID=\\\"9357\\\"/><action type=\\\"hide\\\" objID=\\\"9413\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9342\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9300\\\"/><action type=\\\"show\\\" objID=\\\"9301\\\"/><action type=\\\"show\\\" objID=\\\"9302\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9342\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9300\\\"/><action type=\\\"hide\\\" objID=\\\"9301\\\"/><action type=\\\"hide\\\" objID=\\\"9302\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9341\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9282\\\"/><action type=\\\"show\\\" objID=\\\"9283\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9341\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9282\\\"/><action type=\\\"hide\\\" objID=\\\"9283\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9282\\\"><value name=\\\"parameter\\\"><![CDATA[7]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9283\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9282\\\"><value name=\\\"parameter\\\"><![CDATA[7]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9283\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9343\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9285\\\"/><action type=\\\"hide\\\" objID=\\\"9286\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9343\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9285\\\"/><action type=\\\"show\\\" objID=\\\"9286\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9285\\\"><value name=\\\"parameter\\\"><![CDATA[6]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9286\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9285\\\"><value name=\\\"parameter\\\"><![CDATA[6]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9286\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9287\\\"><value name=\\\"parameter\\\"><![CDATA[2]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9288\\\"/><action type=\\\"show\\\" objID=\\\"9289\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9287\\\"><value name=\\\"parameter\\\"><![CDATA[2]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9288\\\"/><action type=\\\"hide\\\" objID=\\\"9289\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9288\\\"><value name=\\\"parameter\\\"><![CDATA[6]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9289\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9288\\\"><value name=\\\"parameter\\\"><![CDATA[6]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9289\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9344\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9313\\\"/><action type=\\\"show\\\" objID=\\\"9314\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9344\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9313\\\"/><action type=\\\"hide\\\" objID=\\\"9314\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9313\\\"><value name=\\\"parameter\\\"><![CDATA[3]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9314\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9313\\\"><value name=\\\"parameter\\\"><![CDATA[3]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9314\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9345\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9291\\\"/><action type=\\\"show\\\" objID=\\\"9292\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9345\\\"><value name=\\\"parameter\\\"><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9291\\\"/><action type=\\\"hide\\\" objID=\\\"9292\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9291\\\"><value name=\\\"parameter\\\"><![CDATA[8]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9292\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9291\\\"><value name=\\\"parameter\\\"><![CDATA[8]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9292\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9296\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9294\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[8]]><![CDATA[9]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9295\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]><![CDATA[8]]><![CDATA[9]]><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"do not change\\\" objID=\\\"9293\\\"/><action type=\\\"advanced\\\" objID=\\\"9293\\\"><parameter name=\\\"expression\\\"><![CDATA[if (ODP.Surveo.params.surveyResults[9316] == 1) { \\n\\n/// CS \\n\\ndocument.getElementById(\\\"coupontext_middle\\\").innerHTML = \\\" <div style='background-color:#eff0f1;width:90%;padding:20px;color:#000000;'><span style='font-size:18px;'> Děkujeme Vám za Váš názor. <br>Těšíme se na to, že Vás v naší restauraci opět brzy uvidíme.</div><br><br>Právě jste dokončili dotazník. Pokud si přejete kupon, klikněte na odkaz níže.<br><br><form action='https://survey.fast-insight.com/mcd/cz/coupon.php' method='post' target='_top'><input type='hidden' name='lang' value='cs'><input type='hidden' name='store_id' value='\\\"+ODP.Surveo.params.surveyResults[9358]+\\\"'><input type='hidden' name='IP' value='\\\"+ODP.Surveo.params.surveyResults[9303]+\\\"'><input type='hidden' name='browserLANG' value='\\\"+ODP.Surveo.params.surveyResults[9304]+\\\"'><input type='hidden' name='deviceType' value='\\\"+ODP.Surveo.params.surveyResults[9305]+\\\"'><input type='hidden' name='browser' value='\\\"+ODP.Surveo.params.surveyResults[9306]+\\\"'><input type='hidden' name='version' value='\\\"+ODP.Surveo.params.surveyResults[9307]+\\\"'><input type='hidden' name='platform' value='\\\"+ODP.Surveo.params.surveyResults[9308]+\\\"'><input type='hidden' name='surveyform' value='1338'><input type='hidden' name='identifier' value='\\\"+ODP.Surveo.params.surveyResults[9309]+\\\"'><input type='hidden' name='promo' value='\\\"+ODP.Surveo.params.surveyResults[9356]+\\\"'><input type='hidden' name='posid' value='\\\"+ODP.Surveo.params.surveyResults[9357]+\\\"'><input type='hidden' name='couponcode' value='\\\"+ODP.Surveo.params.surveyResults[9413]+\\\"'><input type='submit' value='OBDRŽET KUPON' style='padding:5px;background-color:#f4cc64;color:#000000;font-size:15px;font-weight:bold;'></form><iframe src='https://survey.fast-insight.com/mcd/cz/mcd_cz_sc.php' frameborder='0' height='0' width='0'></iframe>\\\"; \\n} \\n\\nelse { \\n\\n/// if (ODP.Surveo.params.surveyResults[9316] == 2) { \\n\\n/// EN \\n\\ndocument.getElementById(\\\"coupontext_middle\\\").innerHTML = \\\" <div style='background-color:#eff0f1;width:90%;padding:20px;color:#000000;'><span style='font-size:18px;'> Thank you for participating in the Survey.<br><br> Looking forward to seeing you in our restaurants. </div><br><br>You have just finished the Survey. If you would like to get a voucher, please click on the link below.<br><br><form action='https://survey.fast-insight.com/mcd/cz/coupon.php' method='post' target='_top'><input type='hidden' name='lang' value='en'><input type='hidden' name='store_id' value='\\\"+ODP.Surveo.params.surveyResults[9358]+\\\"'><input type='hidden' name='IP' value='\\\"+ODP.Surveo.params.surveyResults[9303]+\\\"'><input type='hidden' name='browserLANG' value='\\\"+ODP.Surveo.params.surveyResults[9304]+\\\"'><input type='hidden' name='deviceType' value='\\\"+ODP.Surveo.params.surveyResults[9305]+\\\"'><input type='hidden' name='browser' value='\\\"+ODP.Surveo.params.surveyResults[9306]+\\\"'><input type='hidden' name='version' value='\\\"+ODP.Surveo.params.surveyResults[9307]+\\\"'><input type='hidden' name='platform' value='\\\"+ODP.Surveo.params.surveyResults[9308]+\\\"'><input type='hidden' name='surveyform' value='1338'><input type='hidden' name='identifier' value='\\\"+ODP.Surveo.params.surveyResults[9309]+\\\"'><input type='hidden' name='promo' value='\\\"+ODP.Surveo.params.surveyResults[9356]+\\\"'><input type='hidden' name='posid' value='\\\"+ODP.Surveo.params.surveyResults[9357]+\\\"'><input type='hidden' name='couponcode' value='\\\"+ODP.Surveo.params.surveyResults[9413]+\\\"'><input type='submit' value='GET VOUCHER' style='padding:5px;background-color:#f4cc64;color:#000000;font-size:15px;font-weight:bold;'></form><iframe src='https://survey.fast-insight.com/mcd/cz/mcd_cz_sc.php' frameborder='0' height='0' width='0'></iframe>\\\"; \\n\\n}\\n]]></parameter></action></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]><![CDATA[8]]><![CDATA[9]]><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9354\\\"/><action type=\\\"show\\\" objID=\\\"9353\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[8]]><![CDATA[9]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9295\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]><![CDATA[8]]><![CDATA[9]]><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9278\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]><![CDATA[8]]><![CDATA[9]]><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"do not change\\\" objID=\\\"9293\\\"/><action type=\\\"advanced\\\" objID=\\\"9293\\\"><parameter name=\\\"expression\\\"><![CDATA[ if (ODP && ODP.Surveo) { referrer = document.referrer; variables = referrer.substr(50);var qs = (function(a) { if (a == \\\"\\\") return {}; var b = {}; for (var i = 0; i < a.length; ++i) { var p=a[i].split('=', 2); if (p.length == 1) b[p[0]] = \\\"\\\"; else b[p[0]] = decodeURIComponent(p[1].replace(/\\\\+/g, \\\" \\\")); } return b; })(variables.split('&')); \\n\\nvar time = new Date();\\nvar endtime = ((\\\"0\\\" + time.getHours()).slice(-2)   + \\\":\\\" + (\\\"0\\\" + time.getMinutes()).slice(-2) + \\\":\\\" + (\\\"0\\\" + time.getSeconds()).slice(-2));\\n\\nif (qs[\\\"starttime\\\"]) {\\n\\nvar time = qs[\\\"starttime\\\"];\\n} else {\\n\\nvar time = \\\"12:00:00\\\";\\n\\n}\\nvar hour = time.substr(0, 2);\\nvar minute = time.substr(3, 2);\\nvar second = time.substr(6, 2);\\n\\nvar currentdate = new Date();\\n\\n\\n\\nvar date1 = new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate(), hour, minute, second); \\nvar date2 = new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate(), currentdate.getHours(), currentdate.getMinutes(), currentdate.getSeconds()); \\n\\n\\nvar diff = date2 - date1;\\n\\nvar msec = diff+10000;\\nvar hh = Math.floor(msec / 1000 / 60 / 60);\\nmsec -= hh * 1000 * 60 * 60;\\nvar mm = Math.floor(msec / 1000 / 60);\\nmsec -= mm * 1000 * 60;\\nvar ss = Math.floor(msec / 1000);\\nmsec -= ss * 1000;\\n\\nif (ss < 10) ss = \\\"0\\\"+ss;\\nif (mm < 10) mm = \\\"0\\\"+mm;\\n\\nvar completetime = mm+\\\":\\\"+ss;\\n\\nsm_setcomment(\\\"9303\\\", qs[\\\"IP\\\"]); \\nsm_setcomment(\\\"9304\\\", qs[\\\"browserLANG\\\"]); \\nsm_setcomment(\\\"9305\\\", qs[\\\"deviceType\\\"]); \\nsm_setcomment(\\\"9306\\\", qs[\\\"browser\\\"]); \\nsm_setcomment(\\\"9307\\\", qs[\\\"version\\\"]); \\nsm_setcomment(\\\"9308\\\", qs[\\\"platform\\\"]);\\nsm_setcomment(\\\"9309\\\", qs[\\\"identifier\\\"]);\\nsm_setcomment(\\\"9310\\\", qs[\\\"starttime\\\"]);\\nsm_setcomment(\\\"9311\\\", endtime);\\nsm_setcomment(\\\"9355\\\", completetime);\\n\\n\\n\\n }]]></parameter></action></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[1]]><![CDATA[2]]><![CDATA[3]]><![CDATA[4]]><![CDATA[5]]><![CDATA[6]]><![CDATA[7]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9294\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9293\\\"><value name=\\\"parameter\\\"><![CDATA[10]]><![CDATA[11]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9296\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisnotin\\\" objType=\\\"question\\\" objID=\\\"9300\\\"><value name=\\\"parameter\\\"><![CDATA[1]]></value></condition></group></conditions><actions><action type=\\\"hide\\\" objID=\\\"9301\\\"/><action type=\\\"hide\\\" objID=\\\"9302\\\"/></actions></definition><definition><conditions><group name=\\\"Group 1\\\"><condition name=\\\"condition\\\" type=\\\"answerisin\\\" objType=\\\"question\\\" objID=\\\"9300\\\"><value name=\\\"parameter\\\"><![CDATA[1]]></value></condition></group></conditions><actions><action type=\\\"show\\\" objID=\\\"9301\\\"/><action type=\\\"show\\\" objID=\\\"9302\\\"/></actions></definition></definitions>\",\"SkipPatternsIsEnabled\":\"1\",\"IsSectionLevel1WeightDefinedPrecalc\":\"0\",\"RequiredPlannedDate\":\"0\",\"SetDueDateToPlannedDate\":\"0\",\"SurveyCompletionMode\":\"N\",\"SurveyCompletionModeTemplate\":null,\"ProtoSurveyGUID\":\"{7A3E9984-7A0A-4AE3-9AB5-2C8E38B0BB10}\",\"HiddenQuestionsNotRequired\":\"1\",\"RandomizeAnswersPositionForValidator\":\"0\"}],[{\"ObjID\":\"1\",\"ProtoSectStartID\":\"1645\",\"ProtoSectStartText\":\"<div style=\\\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\\\"><span style=\\\"font-size:20px;\\\"> THANK YOU FOR VISITING OUR RESTAURANTS.<br>  WE WOULD LIKE TO KNOW YOUR OPINION. </span><span style=\\\"text-shadow:none;font-size:14px;color:#000;\\\"></span></div><br><input type=\\\"submit\\\" value=\\\"START SURVEY\\\" style=\\\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\\\">\",\"ProtoSectStartHiddenComment\":\"<div style=\\\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\\\"><span style=\\\"font-size:20px;\\\"> THANK YOU FOR VISITING OUR RESTAURANTS.<br>  WE WOULD LIKE TO KNOW YOUR OPINION. </span><span style=\\\"text-shadow:none;font-size:14px;color:#000;\\\"></span></div><br><input type=\\\"submit\\\" value=\\\"START SURVEY\\\" style=\\\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\\\">###\"},{\"ObjID\":\"2\",\"ProtoSectStartID\":\"1646\",\"ProtoSectStartText\":\"<style>.qDiv {margin-top:20px;}.progressMark {height:5px;} .pgroressBack {height:8px;} .error_general {visibility: hidden;} input, textarea { border-style: solid; border-width: 1px; border-color: #efefef; -webkit-appearance: none; -moz-box-shadow:2px 2px 2px 2px #888888; -webkit-box-shadow: 2px 2px 2px 2px #888888; box-shadow: 2px 2px 2px 2px #888888; }</style>\",\"ProtoSectStartHiddenComment\":\"###\"}],[{\"ObjID\":\"9277\",\"Text\":\"When did you visit us?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"3\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"18\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9278\",\"Text\":\"Which part of McDonald's did you visit?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"5851\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9279\",\"Text\":\"What time did you visit us?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6044\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9282\",\"Text\":\"You were not satisfied with the cleanliness? Where can we improve?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"2512\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9283\",\"Text\":\"Please specify Other: \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9285\",\"Text\":\"We are sorry that our employee were not friendly! What can they improve?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"2494\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9286\",\"Text\":\"Please specify Other: \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9287\",\"Text\":\"Did we get your order right?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"1\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9288\",\"Text\":\"Why were you dissatisfied with the order process?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"2757\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9289\",\"Text\":\"Please specify Other: \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9291\",\"Text\":\"That's a shame! Please tell us why you feel that way.\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"4196\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9292\",\"Text\":\"Please specify Other: \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9293\",\"Text\":\"Based on your last experience, on a score from 0-10 (0 = not likely at all, 10 = very likely), how likely would you be to recommend this McDonald's restaurant to a friend or family member?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"36\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9294\",\"Text\":\"Oops, looks like we slipped up somewhere. How could we improve? <br><small> Click Next if you prefer not to answer\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9295\",\"Text\":\"So close to gold. How could we be a perfect 10?<br><small> Click Next if you prefer not to answer\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9296\",\"Text\":\"Wow! We're glad you loved your restaurant experience. Who or what deserves the credit? <br><small> Click Next if you prefer not to answer\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9300\",\"Text\":\"We have seen you were not totally satisfied? Do you want to be contacted?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"167\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9301\",\"Text\":\"To follow up, please tell us your name.\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9302\",\"Text\":\"Please let us know your email address.\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9303\",\"Text\":\"IP\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9304\",\"Text\":\"browserLANG\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9305\",\"Text\":\"deviceType\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9306\",\"Text\":\"browser\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9307\",\"Text\":\"version\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9308\",\"Text\":\"platform\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9309\",\"Text\":\"identifier\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9310\",\"Text\":\"starttime\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9311\",\"Text\":\"endtime\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9313\",\"Text\":\"We are sorry to hear that! What was the reason you were dissatisfied?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"2498\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9314\",\"Text\":\"Please specify Other: \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9316\",\"Text\":\"\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"5816\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9341\",\"Text\":\"How satisfied have you been with the cleanliness?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6482\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9342\",\"Text\":\"Based on your last experience, how would you rate your overall experience?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6482\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9343\",\"Text\":\"How would you rate the friendliness of our employees?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6482\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9344\",\"Text\":\"How would you rate your satisfaction regarding the speed of service you had?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6482\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9345\",\"Text\":\"How would you rate the quality of your ordered items?\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"6482\",\"ProtoCommentID\":\"1\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9353\",\"Text\":\"Visit Time\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9354\",\"Text\":\"Visit Date\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9355\",\"Text\":\"completetime\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9356\",\"Text\":\"promo\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9357\",\"Text\":\"posID\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9358\",\"Text\":\"Please enter the 12 digit number from your receipt \",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"true\",\"IsNumbered\":\"false\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"},{\"ObjID\":\"9413\",\"Text\":\"deviceAppID\",\"HiddenComment\":\"\",\"ProtoAnswerID\":\"8\",\"ProtoCommentID\":\"2\",\"ProtoQuestionCategoryID\":\"1\",\"AnswerVisualizationID\":\"1\",\"LongAnswerBreakAtPos\":\"0\",\"IsNotApplicable\":\"false\",\"IsAnswerRequired\":\"false\",\"IsNumbered\":\"true\",\"IsShowSelectedAnswersOnlyOnExport\":\"false\",\"CommentContentRuleID\":\"1\",\"CommentRequirementRuleID\":\"1\"}],[{\"ProtoAnswerID\":\"1\",\"Pos\":\"1\",\"Description\":\"Yes\",\"Measure\":\"5\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"1\",\"Pos\":\"2\",\"Description\":\"No\",\"Measure\":\"0\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"1\",\"Description\":\"0\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"2\",\"Description\":\"1\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"3\",\"Description\":\"2\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"4\",\"Description\":\"3\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"5\",\"Description\":\"4\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"6\",\"Description\":\"5\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"7\",\"Description\":\"6\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"8\",\"Description\":\"7\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"9\",\"Description\":\"8\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"10\",\"Description\":\"9\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"36\",\"Pos\":\"11\",\"Description\":\"10\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"167\",\"Pos\":\"1\",\"Description\":\"Yes\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"167\",\"Pos\":\"2\",\"Description\":\"No\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"1\",\"Description\":\"Attention of employee\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"2\",\"Description\":\"Courtesy of employee\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"3\",\"Description\":\"Greeting\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"4\",\"Description\":\"Thanking for visit\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"5\",\"Description\":\"General friendliness\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2494\",\"Pos\":\"6\",\"Description\":\"Other\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2498\",\"Pos\":\"1\",\"Description\":\"I had to wait too long in the line until I could order\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2498\",\"Pos\":\"2\",\"Description\":\"I had to wait too long until I received my order after ordering\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2498\",\"Pos\":\"3\",\"Description\":\"Other\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"1\",\"Description\":\"Toilets were not clean\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"2\",\"Description\":\"Tables and seats were not clean\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"3\",\"Description\":\"Floor was not clean\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"4\",\"Description\":\"Counter area was not clean\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"5\",\"Description\":\"Trash can / Tray trolley was overflown\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"6\",\"Description\":\"Car park / drive lane / surrounds full of rubbish\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2512\",\"Pos\":\"7\",\"Description\":\"Other\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"1\",\"Description\":\"I received the wrong food / drink items\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"2\",\"Description\":\"I received the wrong size of order\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"3\",\"Description\":\"Condiments were missing\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"4\",\"Description\":\"Food / drink items were missing\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"5\",\"Description\":\"Ingredients were missing\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"2757\",\"Pos\":\"6\",\"Description\":\"Other\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"1\",\"Description\":\"Food was not visually appealing\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"2\",\"Description\":\"Food was was not at right temperature\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"3\",\"Description\":\"Food did not taste good\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"4\",\"Description\":\"Fries were not salted\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"5\",\"Description\":\"Fries were overly salty\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"6\",\"Description\":\"Drink did not taste good\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"7\",\"Description\":\"Drink was not at right temperature\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"4196\",\"Pos\":\"8\",\"Description\":\"Other\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5816\",\"Pos\":\"1\",\"Description\":\"Česky\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5816\",\"Pos\":\"2\",\"Description\":\"English\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5851\",\"Pos\":\"1\",\"Description\":\"Restaurant\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5851\",\"Pos\":\"2\",\"Description\":\"McDrive\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5851\",\"Pos\":\"3\",\"Description\":\"McCafè\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"5851\",\"Pos\":\"4\",\"Description\":\"Kiosk\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6044\",\"Pos\":\"1\",\"Description\":\"Morning (6-10:30)\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6044\",\"Pos\":\"2\",\"Description\":\"Midday (10:30-14)\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6044\",\"Pos\":\"3\",\"Description\":\"Afternoon (14-18)\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6044\",\"Pos\":\"4\",\"Description\":\"Evening (18-22)\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6044\",\"Pos\":\"5\",\"Description\":\"Late Night (22-06)\",\"Measure\":null,\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6482\",\"Pos\":\"1\",\"Description\":\"Very Satisfied\",\"Measure\":\"5\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6482\",\"Pos\":\"2\",\"Description\":\"Satisfied\",\"Measure\":\"0\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6482\",\"Pos\":\"3\",\"Description\":\"Neutral\",\"Measure\":\"0\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6482\",\"Pos\":\"4\",\"Description\":\"Dissatisfied\",\"Measure\":\"0\",\"DisplayOrder\":null},{\"ProtoAnswerID\":\"6482\",\"Pos\":\"5\",\"Description\":\"Very Dissatisfied\",\"Measure\":\"0\",\"DisplayOrder\":null}],[{\"ProtoAnswerID\":\"1\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"8\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"36\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"167\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"2494\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"true\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"2498\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"true\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"2512\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"true\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"2757\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"true\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"4196\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"true\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"5816\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"5851\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"6044\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"},{\"ProtoAnswerID\":\"6482\",\"OtherPresentationType\":\"1\",\"IsMultipleSel\":\"false\",\"IsShowMeasure\":\"false\",\"ForcedMaxMeasure\":null,\"LimitMinMeasure\":null,\"LimitMaxMeasure\":null,\"StartingPoints\":null,\"IsShowInDropdown\":\"1\",\"VisualizeAsDropdown\":\"0\",\"AnswersDisplayOrderType\":\"D\"}]],\"purge\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/Apps/SURVEO/GetSurveyData%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22ProtoSurveyID%22%2C%22value%22%3A%221338%22%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); Open.store.purge(str_datasetName);\n},\"addAlias\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/Apps/SURVEO/GetSurveyData%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22ProtoSurveyID%22%2C%22value%22%3A%221338%22%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); return Open.store.addAlias(str_datasetName, str_alias);\n},\"convertData\":{\"simpleToJSON\":function () {\r\n			return this;\r\n		},\"simpleToArray\":function () {\r\n			return Open.data.convert.simpleToArray(this);\r\n		},\"arrayToSimple\":function () {\r\n			return Open.data.convert.arrayToSimple(this);\r\n		},\"arrayToJSON\":function () {\r\n			return Open.data.convert.arrayToJSON(this);\r\n		},\"objectToSimple\":function () {\r\n			return Open.data.convert.objectToSimple(this);\r\n		},\"toSimple\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					if (counter1 > 0) {\r\n						temp2.push(String.fromCharCode(29));\r\n					}\r\n\r\n					temp1 = false;\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						if (temp1) {\r\n							temp2.push(String.fromCharCode(31));\r\n						}\r\n						else {\r\n							temp1 = true;\r\n						}\r\n\r\n						temp2.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n				}\r\n\r\n				arr_result.push(temp2.join(''));\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		},\"toArray\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					temp1 = [];\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						temp1.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n\r\n					temp2.push(temp1);\r\n				}\r\n\r\n				arr_result.push(temp2);\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		}},\"getDataArray\":function () {\r\n			var arr_data = null;\r\n			if (this.schema.columns.length > 0) {\r\n				if (Open.isArray(this.schema.columns[0])) {\r\n					arr_data = this.data;\r\n				}\r\n				else {\r\n					arr_data = [];\r\n					arr_data.push(this.data);\r\n				}\r\n			}\r\n\r\n			return arr_data;\r\n		},\"clone\":function () {\r\n			return Open.cloneObject(this);\r\n		},\"toString\":function () {\r\n			return Open.objectToString(this);\r\n		},\"getTrimQuerySchema\":function () {\r\n			var csv_str_listNumericDataTypes = '|int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float|';\r\n			var dataSchema = this.schema.columns;\r\n\r\n			if (!Open.isArray(dataSchema[0])) {\r\n				dataSchema = [dataSchema];\r\n			}\r\n\r\n			var dataType, columnType;\r\n			var columnDefs = {};\r\n			columnDefs = [];\r\n\r\n			for (var counter0 = 0; counter0 < dataSchema.length; counter0++) {\r\n				columnDefs[counter0] = {};\r\n\r\n				for (var counter1 = 0; counter1 < dataSchema[counter0].length; counter1++) {\r\n\r\n					dataType = dataSchema[counter0][counter1]['datatype'].toString();\r\n					if (csv_str_listNumericDataTypes.indexOf('|' + dataType + '|') != -1) {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"Number\" };\r\n					}\r\n					else {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"String\" };\r\n					}\r\n				}\r\n			}\r\n\r\n			return ((columnDefs.length === 1) ? columnDefs[0] : columnDefs);\r\n		}},\"surveoGlobalizationData\":{\"schema\":{\"manifest\":{\"datasetname\":\"/Apps/SM/Survey/ProtoSurveyGlobalization\",\"datafieldsmode\":\"A\",\"dbsqltype\":\"P\",\"schemaformat\":\"JSON\",\"dataformat\":\"simple\",\"encoding\":\"utf-8\",\"security\":{},\"cacheable\":{},\"hasoutputparameters\":false,\"meta\":{}},\"parameters\":[],\"columns\":[[{\"name\":\"ProtoSurveyID\"},{\"name\":\"Language\"},{\"name\":\"Localization\"},{\"name\":\"Title\"},{\"name\":\"SubTitle\"},{\"name\":\"SecondSubTitle\"},{\"name\":\"AlternativeTitleForApplications\"},{\"name\":\"Logo\"},{\"name\":\"LocalDescription\"},{\"name\":\"CountryFlag_xp16\"},{\"name\":\"CountryFlag_xp128\"}],[{\"name\":\"ItemID\"},{\"name\":\"ItemType\"},{\"name\":\"Language\"},{\"name\":\"Localization\"},{\"name\":\"Literal\"},{\"name\":\"Literal2\"}],[{\"name\":\"AnswerID\"},{\"name\":\"AnswerPos\"},{\"name\":\"Language\"},{\"name\":\"Literal\"},{\"name\":\"Localization\"}],[{\"name\":\"ProtoSurveyID\"},{\"name\":\"AnalysisQuestionCategory\"},{\"name\":\"Language\"},{\"name\":\"Localization\"},{\"name\":\"Literal\"}]]},\"data\":[[{\"ProtoSurveyID\":\"1338\",\"Language\":\"cs\",\"Localization\":\"  \",\"Title\":\"\",\"SubTitle\":\"\",\"SecondSubTitle\":\"\",\"AlternativeTitleForApplications\":\"\",\"Logo\":\"\",\"LocalDescription\":\"Česky (Czech)	\",\"CountryFlag_xp16\":\"/images/icons/flags/cz.gif\",\"CountryFlag_xp128\":\"/images/icons/flags128/cz.png\"}],[{\"ItemID\":\"9277\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Kdy jste nás navštívili?\",\"Literal2\":\"\"},{\"ItemID\":\"9278\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Kterou část Mcdonald´s jste navštívili?\",\"Literal2\":\"\"},{\"ItemID\":\"9279\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"V kolik hodin jste nás navštívili?\",\"Literal2\":\"\"},{\"ItemID\":\"9282\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Nebyli jste úplně spokojeni s čistotou? Kde se můžeme zlepšit?\",\"Literal2\":\"\"},{\"ItemID\":\"9283\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Specifikujte, prosím, jiné:\",\"Literal2\":\"\"},{\"ItemID\":\"9285\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Mrzí nás, že naši zaměstnanci nebyli dostatečně přátelští. Kde by se měli zlepšit?\",\"Literal2\":\"\"},{\"ItemID\":\"9286\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Specifikujte, prosím, jiné:\",\"Literal2\":\"\"},{\"ItemID\":\"9287\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Připravili jsme Vaši objednávku správně?\",\"Literal2\":\"\"},{\"ItemID\":\"9288\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Nebyli jste úplně spokojeni s Vaší objednávkou. Rádi bychom věděli proč.\",\"Literal2\":\"\"},{\"ItemID\":\"9289\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Specifikujte, prosím, jiné:\",\"Literal2\":\"\"},{\"ItemID\":\"9291\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"To je opravdu škoda! Rádi bychom se dozvěděli, kde se stala chyba.\",\"Literal2\":\"\"},{\"ItemID\":\"9292\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Specifikujte, prosím, jiné:\",\"Literal2\":\"\"},{\"ItemID\":\"9293\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Ohodnoťte prosím, na stupnici 0-10 (0=určitě NE, 10=určitě ANO), jestli byste tuto restauraci doporučili známému nebo členovi Vaší rodiny.\",\"Literal2\":\"\"},{\"ItemID\":\"9294\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Hmm zdá se, že nám to nevyšlo. Jak bychom se měli zlepšit? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)\",\"Literal2\":\"\"},{\"ItemID\":\"9295\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Skoro jsme to dokázali. Co myslíte, že by bylo třeba k dosažení 10, tedy perfektního výsledku? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)\",\"Literal2\":\"\"},{\"ItemID\":\"9296\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Super! Jsme opravdu rádi, že jste si to u nás užili. Kdo nebo co k tomu přispělo? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)\",\"Literal2\":\"\"},{\"ItemID\":\"9300\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Zdá se, že jste nebyli úplně spokojeni? Přejete si, abychom Vás kontaktovali?\",\"Literal2\":\"\"},{\"ItemID\":\"9301\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Abychom Vás mohli kontaktovat, uveďte, prosím, své jméno.\",\"Literal2\":\"\"},{\"ItemID\":\"9302\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Uveďte, prosím, svůj email.\",\"Literal2\":\"\"},{\"ItemID\":\"9313\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"To nás opravdu mrzí! Co bylo důvodem Vaší nespokojenosti?\",\"Literal2\":\"\"},{\"ItemID\":\"9314\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Specifikujte, prosím, jiné:\",\"Literal2\":\"\"},{\"ItemID\":\"9341\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Jak jste byli spokojeni s čistotou?\",\"Literal2\":\"\"},{\"ItemID\":\"9342\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Jak byste ohodnotili Vaši celkovou spokojenost s poslední návštěvou naší restaurace?\",\"Literal2\":\"\"},{\"ItemID\":\"9343\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Jak byste ohodnotili přístup našich zaměstnanců?\",\"Literal2\":\"\"},{\"ItemID\":\"9344\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Jak jste byli spokojeni s rychlostí obsluhy?\",\"Literal2\":\"\"},{\"ItemID\":\"9345\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Jak byste ohodnotili kvalitu Vámi objednaných produktů?\",\"Literal2\":\"\"},{\"ItemID\":\"9353\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Čas návštěvy\",\"Literal2\":\"\"},{\"ItemID\":\"9354\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Datum návštěvy\",\"Literal2\":\"\"},{\"ItemID\":\"9358\",\"ItemType\":\"Q\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Vložte, prosím, 12místný kód z Vaší účtenky\",\"Literal2\":\"\"},{\"ItemID\":\"1645\",\"ItemType\":\"S\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"<div style=\\\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\\\"><span style=\\\"font-size:20px;\\\"> DĚKUJEME ZA VÁŠ NÁKUP V NAŠÍ RESTAURACI.<BR> RÁDI BYCHOM ZNALI VÁŠ NÁZOR.</span><span style=\\\"text-shadow:none;font-size:14px;color:#000;\\\"></span></div><br><input type=\\\"submit\\\" value=\\\"OTEVŘÍT DOTAZNÍK\\\" style=\\\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\\\">\",\"Literal2\":\"<div style=\\\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\\\"><span style=\\\"font-size:20px;\\\"> DĚKUJEME ZA VÁŠ NÁKUP V NAŠÍ RESTAURACI.<BR> RÁDI BYCHOM ZNALI VÁŠ NÁZOR.</span><span style=\\\"text-shadow:none;font-size:14px;color:#000;\\\"></span></div><br><input type=\\\"submit\\\" value=\\\"OTEVŘÍT DOTAZNÍK\\\" style=\\\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\\\">\"},{\"ItemID\":\"1646\",\"ItemType\":\"S\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"\",\"Literal2\":\"###\"}],[{\"AnswerID\":\"1\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Ano\",\"Localization\":\"  \"},{\"AnswerID\":\"1\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Ne\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"0\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"1\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"2\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"3\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"4\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"6\",\"Language\":\"cs\",\"Literal\":\"5\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"7\",\"Language\":\"cs\",\"Literal\":\"6\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"8\",\"Language\":\"cs\",\"Literal\":\"7\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"9\",\"Language\":\"cs\",\"Literal\":\"8\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"10\",\"Language\":\"cs\",\"Literal\":\"9\",\"Localization\":\"  \"},{\"AnswerID\":\"36\",\"AnswerPos\":\"11\",\"Language\":\"cs\",\"Literal\":\"10\",\"Localization\":\"  \"},{\"AnswerID\":\"167\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Ano\",\"Localization\":\"  \"},{\"AnswerID\":\"167\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Ne\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Pozornost zaměstnance\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Zdvořilost zaměstnance\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Pozdrav\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Poděkování\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"Celková přátelskost\",\"Localization\":\"  \"},{\"AnswerID\":\"2494\",\"AnswerPos\":\"6\",\"Language\":\"cs\",\"Literal\":\"Jiné\",\"Localization\":\"  \"},{\"AnswerID\":\"2498\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Museli jsme ve frontě čekat příliš dlouho, než jsme si mohli objednat\",\"Localization\":\"  \"},{\"AnswerID\":\"2498\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Museli jsme čekat příliš dlouho, než jsme po objednání obdrželi svoji objednávku\",\"Localization\":\"  \"},{\"AnswerID\":\"2498\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Jiné\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Toalety nebyly čisté\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Stoly a židle nebyly čisté\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Podlaha nebyla čistá\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Oblast objednávkového pultu nebyla čistá\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"Koše / místo pro odkládání táců byly přeplněné\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"6\",\"Language\":\"cs\",\"Literal\":\"Parkoviště / příjezdová komunikace / blízké okolí byly plné odpadků\",\"Localization\":\"  \"},{\"AnswerID\":\"2512\",\"AnswerPos\":\"7\",\"Language\":\"cs\",\"Literal\":\"Jiné\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Neobdrželi jsme správné produkty\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Neobdrželi jsme správnou velikost produktů\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Chyběla některá doplňková položka (ubrousek, brčko apod.)\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Chyběla položka jídla / nápoje\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"Chyběla některá z ingrediencí (např. salát, sýr apod.)\",\"Localization\":\"  \"},{\"AnswerID\":\"2757\",\"AnswerPos\":\"6\",\"Language\":\"cs\",\"Literal\":\"Jiné\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Vzhled jídla nebyl v pořádku\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Jídlo nemělo správnou teplotu\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Jídlo nechutnalo správně\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Hranolky nebyly slané\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"Hranolky byly přesolené\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"6\",\"Language\":\"cs\",\"Literal\":\"Nápoj nechutnal správně\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"7\",\"Language\":\"cs\",\"Literal\":\"Nápoj neměl správnou teplotu\",\"Localization\":\"  \"},{\"AnswerID\":\"4196\",\"AnswerPos\":\"8\",\"Language\":\"cs\",\"Literal\":\"Jiné\",\"Localization\":\"  \"},{\"AnswerID\":\"5816\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Česky\",\"Localization\":\"  \"},{\"AnswerID\":\"5816\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Anglicky\",\"Localization\":\"  \"},{\"AnswerID\":\"5851\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Restaurace\",\"Localization\":\"  \"},{\"AnswerID\":\"5851\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"McDrive\",\"Localization\":\"  \"},{\"AnswerID\":\"5851\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"McCafé\",\"Localization\":\"  \"},{\"AnswerID\":\"5851\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Kiosk\",\"Localization\":\"  \"},{\"AnswerID\":\"6044\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"1- Ráno (6-10:30)\",\"Localization\":\"  \"},{\"AnswerID\":\"6044\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"2- Poledne (10:30-14)\",\"Localization\":\"  \"},{\"AnswerID\":\"6044\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"3- Odpoledne (14-18)\",\"Localization\":\"  \"},{\"AnswerID\":\"6044\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"4- Večer (18-22)\",\"Localization\":\"  \"},{\"AnswerID\":\"6044\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"5- Noc (22-06)\",\"Localization\":\"  \"},{\"AnswerID\":\"6482\",\"AnswerPos\":\"1\",\"Language\":\"cs\",\"Literal\":\"Velmi spokojeni\",\"Localization\":\"  \"},{\"AnswerID\":\"6482\",\"AnswerPos\":\"2\",\"Language\":\"cs\",\"Literal\":\"Spokojeni\",\"Localization\":\"  \"},{\"AnswerID\":\"6482\",\"AnswerPos\":\"3\",\"Language\":\"cs\",\"Literal\":\"Ani spokojeni ani nespokojeni\",\"Localization\":\"  \"},{\"AnswerID\":\"6482\",\"AnswerPos\":\"4\",\"Language\":\"cs\",\"Literal\":\"Nespokojeni\",\"Localization\":\"  \"},{\"AnswerID\":\"6482\",\"AnswerPos\":\"5\",\"Language\":\"cs\",\"Literal\":\"Velmi nespokojeni\",\"Localization\":\"  \"}],[{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Accuracy\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Přesnost\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"browser\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"prohlížeč\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Cleanliness\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Čistota\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"endtime\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"konec\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Friendliness\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Přátelskost\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"identifier\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"identifikátor\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"IP\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"IP\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Neutral\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Ani spokojeni ani nespokojeni\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Overall Satisfaction\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Celková spokojenost\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"platform\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"platforma\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Quality\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Kvalita\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"Speed of Service\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"Rychlost obsluhy\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"starttime\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"zažítek\"},{\"ProtoSurveyID\":\"1338\",\"AnalysisQuestionCategory\":\"version\",\"Language\":\"cs\",\"Localization\":\"  \",\"Literal\":\"verze\"}]],\"purge\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/Apps/SM/Survey/ProtoSurveyGlobalization%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22ProtoSurveyID%22%2C%22value%22%3A%221338%22%7D%2C%7B%22name%22%3A%22Language%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22Localization%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); Open.store.purge(str_datasetName);\n},\"addAlias\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/Apps/SM/Survey/ProtoSurveyGlobalization%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22ProtoSurveyID%22%2C%22value%22%3A%221338%22%7D%2C%7B%22name%22%3A%22Language%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22Localization%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); return Open.store.addAlias(str_datasetName, str_alias);\n},\"convertData\":{\"simpleToJSON\":function () {\r\n			return this;\r\n		},\"simpleToArray\":function () {\r\n			return Open.data.convert.simpleToArray(this);\r\n		},\"arrayToSimple\":function () {\r\n			return Open.data.convert.arrayToSimple(this);\r\n		},\"arrayToJSON\":function () {\r\n			return Open.data.convert.arrayToJSON(this);\r\n		},\"objectToSimple\":function () {\r\n			return Open.data.convert.objectToSimple(this);\r\n		},\"toSimple\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					if (counter1 > 0) {\r\n						temp2.push(String.fromCharCode(29));\r\n					}\r\n\r\n					temp1 = false;\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						if (temp1) {\r\n							temp2.push(String.fromCharCode(31));\r\n						}\r\n						else {\r\n							temp1 = true;\r\n						}\r\n\r\n						temp2.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n				}\r\n\r\n				arr_result.push(temp2.join(''));\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		},\"toArray\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					temp1 = [];\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						temp1.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n\r\n					temp2.push(temp1);\r\n				}\r\n\r\n				arr_result.push(temp2);\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		}},\"getDataArray\":function () {\r\n			var arr_data = null;\r\n			if (this.schema.columns.length > 0) {\r\n				if (Open.isArray(this.schema.columns[0])) {\r\n					arr_data = this.data;\r\n				}\r\n				else {\r\n					arr_data = [];\r\n					arr_data.push(this.data);\r\n				}\r\n			}\r\n\r\n			return arr_data;\r\n		},\"clone\":function () {\r\n			return Open.cloneObject(this);\r\n		},\"toString\":function () {\r\n			return Open.objectToString(this);\r\n		},\"getTrimQuerySchema\":function () {\r\n			var csv_str_listNumericDataTypes = '|int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float|';\r\n			var dataSchema = this.schema.columns;\r\n\r\n			if (!Open.isArray(dataSchema[0])) {\r\n				dataSchema = [dataSchema];\r\n			}\r\n\r\n			var dataType, columnType;\r\n			var columnDefs = {};\r\n			columnDefs = [];\r\n\r\n			for (var counter0 = 0; counter0 < dataSchema.length; counter0++) {\r\n				columnDefs[counter0] = {};\r\n\r\n				for (var counter1 = 0; counter1 < dataSchema[counter0].length; counter1++) {\r\n\r\n					dataType = dataSchema[counter0][counter1]['datatype'].toString();\r\n					if (csv_str_listNumericDataTypes.indexOf('|' + dataType + '|') != -1) {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"Number\" };\r\n					}\r\n					else {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"String\" };\r\n					}\r\n				}\r\n			}\r\n\r\n			return ((columnDefs.length === 1) ? columnDefs[0] : columnDefs);\r\n		}},\"surveoAdvancedLiterals\":{\"data\":[{\"LiteralID\":\"Back\",\"Literal\":\"Zpět\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"Back\",\"Literal\":\"Back\",\"LanguageID\":\"original\"},{\"LiteralID\":\"Next\",\"Literal\":\"Další\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"Next\",\"Literal\":\"Next\",\"LanguageID\":\"original\"},{\"LiteralID\":\"This question is mandatory\",\"Literal\":\"This question is mandatory\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"This question is mandatory\",\"Literal\":\"This question is mandatory\",\"LanguageID\":\"original\"},{\"LiteralID\":\"This code is not valid.\",\"Literal\":\"This code is not valid.\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"This code is not valid.\",\"Literal\":\"This code is not valid.\",\"LanguageID\":\"original\"},{\"LiteralID\":\"dd / mm / yyyy\",\"Literal\":\"dd / mm / yyyy\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"dd / mm / yyyy\",\"Literal\":\"dd / mm / yyyy\",\"LanguageID\":\"original\"},{\"LiteralID\":\"Thank you\",\"Literal\":\"Thank you\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"Thank you\",\"Literal\":\"Thank you\",\"LanguageID\":\"original\"},{\"LiteralID\":\"Thank you!<br>Your feedback will help us to improve our services.\",\"Literal\":\"Thank you!<br>Your feedback will help us to improve our services.\",\"LanguageID\":\"cs\"},{\"LiteralID\":\"Thank you!<br>Your feedback will help us to improve our services.\",\"Literal\":\"Thank you!<br>Your feedback will help us to improve our services.\",\"LanguageID\":\"original\"}],\"schema\":{\"manifest\":{\"datasetname\":\"/System/Platform/Globalization/LiteralsGetTranslations\",\"datafieldsmode\":\"D\",\"dbsqltype\":\"J\",\"schemaformat\":\"JSON\",\"dataformat\":\"array\",\"encoding\":\"utf-8\",\"security\":{},\"cacheable\":{},\"hasoutputparameters\":false,\"meta\":{}},\"parameters\":[],\"columns\":[{\"name\":\"LiteralID\"},{\"name\":\"Literal\"},{\"name\":\"LanguageID\"}]},\"purge\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/System/Platform/Globalization/LiteralsGetTranslations%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22LiteralIDs%22%2C%22value%22%3A%22Back%1DNext%1DThis%20question%20is%20mandatory%1DThis%20code%20is%20not%20valid.%1Ddd%20/%20mm%20/%20yyyy%1DThank%20you%1DThank%20you%21%3Cbr%3EYour%20feedback%20will%20help%20us%20to%20improve%20our%20services.%22%7D%2C%7B%22name%22%3A%22Language%22%2C%22value%22%3A%22cs%2Coriginal%22%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); Open.store.purge(str_datasetName);\n},\"addAlias\":function anonymous() {\nvar str_datasetName = unescape(\"%7B%22action%22%3A%22exec%22%2C%22dataset%22%3A%7B%22datasetname%22%3A%22/System/Platform/Globalization/LiteralsGetTranslations%22%7D%2C%22parameters%22%3A%5B%7B%22name%22%3A%22SecurityObjectUserID%22%2C%22value%22%3Anull%7D%2C%7B%22name%22%3A%22LiteralIDs%22%2C%22value%22%3A%22Back%1DNext%1DThis%20question%20is%20mandatory%1DThis%20code%20is%20not%20valid.%1Ddd%20/%20mm%20/%20yyyy%1DThank%20you%1DThank%20you%21%3Cbr%3EYour%20feedback%20will%20help%20us%20to%20improve%20our%20services.%22%7D%2C%7B%22name%22%3A%22Language%22%2C%22value%22%3A%22cs%2Coriginal%22%7D%2C%7B%22name%22%3A%22MiscSettings%22%2C%22value%22%3Anull%7D%5D%7D\"); return Open.store.addAlias(str_datasetName, str_alias);\n},\"convertData\":{\"simpleToJSON\":function () {\r\n			return this;\r\n		},\"simpleToArray\":function () {\r\n			return Open.data.convert.simpleToArray(this);\r\n		},\"arrayToSimple\":function () {\r\n			return Open.data.convert.arrayToSimple(this);\r\n		},\"arrayToJSON\":function () {\r\n			return Open.data.convert.arrayToJSON(this);\r\n		},\"objectToSimple\":function () {\r\n			return Open.data.convert.objectToSimple(this);\r\n		},\"toSimple\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					if (counter1 > 0) {\r\n						temp2.push(String.fromCharCode(29));\r\n					}\r\n\r\n					temp1 = false;\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						if (temp1) {\r\n							temp2.push(String.fromCharCode(31));\r\n						}\r\n						else {\r\n							temp1 = true;\r\n						}\r\n\r\n						temp2.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n				}\r\n\r\n				arr_result.push(temp2.join(''));\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		},\"toArray\":function () {\r\n			var arr_data = this.getDataArray();\r\n			var arr_result = [];\r\n			var obj_result;\r\n			var temp0, temp1, temp2;\r\n			if (arr_data == null || arr_data.length == 0) {\r\n				return this;\r\n			}\r\n\r\n			for (var counter0 = 0; counter0 < arr_data.length; counter0++) {\r\n				temp2 = [];\r\n\r\n				for (var counter1 = 0; counter1 < arr_data[counter0].length; counter1++) {\r\n					temp1 = [];\r\n\r\n					for (temp0 in arr_data[counter0][counter1]) {\r\n						temp1.push(arr_data[counter0][counter1][temp0]);\r\n					}\r\n\r\n					temp2.push(temp1);\r\n				}\r\n\r\n				arr_result.push(temp2);\r\n			}\r\n\r\n			if (arr_result.length == 1) {\r\n				arr_result = arr_result[0];\r\n			}\r\n\r\n			temp0 = this.clone();\r\n			temp0.data = arr_result;\r\n\r\n			return temp0;\r\n		}},\"getDataArray\":function () {\r\n			var arr_data = null;\r\n			if (this.schema.columns.length > 0) {\r\n				if (Open.isArray(this.schema.columns[0])) {\r\n					arr_data = this.data;\r\n				}\r\n				else {\r\n					arr_data = [];\r\n					arr_data.push(this.data);\r\n				}\r\n			}\r\n\r\n			return arr_data;\r\n		},\"clone\":function () {\r\n			return Open.cloneObject(this);\r\n		},\"toString\":function () {\r\n			return Open.objectToString(this);\r\n		},\"getTrimQuerySchema\":function () {\r\n			var csv_str_listNumericDataTypes = '|int|bigint|integer|smallint|tinyint|double|single|money|smallmoney|float|';\r\n			var dataSchema = this.schema.columns;\r\n\r\n			if (!Open.isArray(dataSchema[0])) {\r\n				dataSchema = [dataSchema];\r\n			}\r\n\r\n			var dataType, columnType;\r\n			var columnDefs = {};\r\n			columnDefs = [];\r\n\r\n			for (var counter0 = 0; counter0 < dataSchema.length; counter0++) {\r\n				columnDefs[counter0] = {};\r\n\r\n				for (var counter1 = 0; counter1 < dataSchema[counter0].length; counter1++) {\r\n\r\n					dataType = dataSchema[counter0][counter1]['datatype'].toString();\r\n					if (csv_str_listNumericDataTypes.indexOf('|' + dataType + '|') != -1) {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"Number\" };\r\n					}\r\n					else {\r\n						columnDefs[counter0][dataSchema[counter0][counter1]['name']] = { \"type\": \"String\" };\r\n					}\r\n				}\r\n			}\r\n\r\n			return ((columnDefs.length === 1) ? columnDefs[0] : columnDefs);\r\n		}}}}"},"literals":{},"SurveyLiterals":{"ProtoSurvey":{"cs":{"  ":{"ProtoSurveyID":"1338","Language":"cs","Localization":"  ","Title":"","SubTitle":"","SecondSubTitle":"","AlternativeTitleForApplications":"","Logo":"","LocalDescription":"Česky (Czech)	","CountryFlag_xp16":"/images/icons/flags/cz.gif","CountryFlag_xp128":"/images/icons/flags128/cz.png"}}},"Questions":{"cs":{"  ":{"9277":{"Literal":"Kdy jste nás navštívili?","Literal2":""},"9278":{"Literal":"Kterou část Mcdonald´s jste navštívili?","Literal2":""},"9279":{"Literal":"V kolik hodin jste nás navštívili?","Literal2":""},"9282":{"Literal":"Nebyli jste úplně spokojeni s čistotou? Kde se můžeme zlepšit?","Literal2":""},"9283":{"Literal":"Specifikujte, prosím, jiné:","Literal2":""},"9285":{"Literal":"Mrzí nás, že naši zaměstnanci nebyli dostatečně přátelští. Kde by se měli zlepšit?","Literal2":""},"9286":{"Literal":"Specifikujte, prosím, jiné:","Literal2":""},"9287":{"Literal":"Připravili jsme Vaši objednávku správně?","Literal2":""},"9288":{"Literal":"Nebyli jste úplně spokojeni s Vaší objednávkou. Rádi bychom věděli proč.","Literal2":""},"9289":{"Literal":"Specifikujte, prosím, jiné:","Literal2":""},"9291":{"Literal":"To je opravdu škoda! Rádi bychom se dozvěděli, kde se stala chyba.","Literal2":""},"9292":{"Literal":"Specifikujte, prosím, jiné:","Literal2":""},"9293":{"Literal":"Ohodnoťte prosím, na stupnici 0-10 (0=určitě NE, 10=určitě ANO), jestli byste tuto restauraci doporučili známému nebo členovi Vaší rodiny.","Literal2":""},"9294":{"Literal":"Hmm zdá se, že nám to nevyšlo. Jak bychom se měli zlepšit? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)","Literal2":""},"9295":{"Literal":"Skoro jsme to dokázali. Co myslíte, že by bylo třeba k dosažení 10, tedy perfektního výsledku? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)","Literal2":""},"9296":{"Literal":"Super! Jsme opravdu rádi, že jste si to u nás užili. Kdo nebo co k tomu přispělo? <br><small>(Pokud si nepřejete odpovědět, klikněte, prosím, na „Další“)","Literal2":""},"9300":{"Literal":"Zdá se, že jste nebyli úplně spokojeni? Přejete si, abychom Vás kontaktovali?","Literal2":""},"9301":{"Literal":"Abychom Vás mohli kontaktovat, uveďte, prosím, své jméno.","Literal2":""},"9302":{"Literal":"Uveďte, prosím, svůj email.","Literal2":""},"9313":{"Literal":"To nás opravdu mrzí! Co bylo důvodem Vaší nespokojenosti?","Literal2":""},"9314":{"Literal":"Specifikujte, prosím, jiné:","Literal2":""},"9341":{"Literal":"Jak jste byli spokojeni s čistotou?","Literal2":""},"9342":{"Literal":"Jak byste ohodnotili Vaši celkovou spokojenost s poslední návštěvou naší restaurace?","Literal2":""},"9343":{"Literal":"Jak byste ohodnotili přístup našich zaměstnanců?","Literal2":""},"9344":{"Literal":"Jak jste byli spokojeni s rychlostí obsluhy?","Literal2":""},"9345":{"Literal":"Jak byste ohodnotili kvalitu Vámi objednaných produktů?","Literal2":""},"9353":{"Literal":"Čas návštěvy","Literal2":""},"9354":{"Literal":"Datum návštěvy","Literal2":""},"9358":{"Literal":"Vložte, prosím, 12místný kód z Vaší účtenky","Literal2":""}}}},"Sections":{"cs":{"  ":{"1645":{"Literal":"<div style=\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\"><span style=\"font-size:20px;\"> DĚKUJEME ZA VÁŠ NÁKUP V NAŠÍ RESTAURACI.<BR> RÁDI BYCHOM ZNALI VÁŠ NÁZOR.</span><span style=\"text-shadow:none;font-size:14px;color:#000;\"></span></div><br><input type=\"submit\" value=\"OTEVŘÍT DOTAZNÍK\" style=\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\">","Literal2":"<div style=\"background-color:#eff0f1;width:80%;padding:20px;color:#000;text-shadow:none;\"><span style=\"font-size:20px;\"> DĚKUJEME ZA VÁŠ NÁKUP V NAŠÍ RESTAURACI.<BR> RÁDI BYCHOM ZNALI VÁŠ NÁZOR.</span><span style=\"text-shadow:none;font-size:14px;color:#000;\"></span></div><br><input type=\"submit\" value=\"OTEVŘÍT DOTAZNÍK\" style=\"background-color:#f4cc64;font-size:16px;font-weight:bold;text-shadow:none;border-radius:5px;padding:5px;height:30px;width:250px;color:#000000;\">"},"1646":{"Literal":"","Literal2":"###"}}}},"Answers":{"cs":{"  ":{"1":{"1":"Ano","2":"Ne"},"36":{"1":"0","2":"1","3":"2","4":"3","5":"4","6":"5","7":"6","8":"7","9":"8","10":"9","11":"10"},"167":{"1":"Ano","2":"Ne"},"2494":{"1":"Pozornost zaměstnance","2":"Zdvořilost zaměstnance","3":"Pozdrav","4":"Poděkování","5":"Celková přátelskost","6":"Jiné"},"2498":{"1":"Museli jsme ve frontě čekat příliš dlouho, než jsme si mohli objednat","2":"Museli jsme čekat příliš dlouho, než jsme po objednání obdrželi svoji objednávku","3":"Jiné"},"2512":{"1":"Toalety nebyly čisté","2":"Stoly a židle nebyly čisté","3":"Podlaha nebyla čistá","4":"Oblast objednávkového pultu nebyla čistá","5":"Koše / místo pro odkládání táců byly přeplněné","6":"Parkoviště / příjezdová komunikace / blízké okolí byly plné odpadků","7":"Jiné"},"2757":{"1":"Neobdrželi jsme správné produkty","2":"Neobdrželi jsme správnou velikost produktů","3":"Chyběla některá doplňková položka (ubrousek, brčko apod.)","4":"Chyběla položka jídla / nápoje","5":"Chyběla některá z ingrediencí (např. salát, sýr apod.)","6":"Jiné"},"4196":{"1":"Vzhled jídla nebyl v pořádku","2":"Jídlo nemělo správnou teplotu","3":"Jídlo nechutnalo správně","4":"Hranolky nebyly slané","5":"Hranolky byly přesolené","6":"Nápoj nechutnal správně","7":"Nápoj neměl správnou teplotu","8":"Jiné"},"5816":{"1":"Česky","2":"Anglicky"},"5851":{"1":"Restaurace","2":"McDrive","3":"McCafé","4":"Kiosk"},"6044":{"1":"1- Ráno (6-10:30)","2":"2- Poledne (10:30-14)","3":"3- Odpoledne (14-18)","4":"4- Večer (18-22)","5":"5- Noc (22-06)"},"6482":{"1":"Velmi spokojeni","2":"Spokojeni","3":"Ani spokojeni ani nespokojeni","4":"Nespokojeni","5":"Velmi nespokojeni"},"Accuracy":"Přesnost","browser":"prohlížeč","Cleanliness":"Čistota","endtime":"konec","Friendliness":"Přátelskost","identifier":"identifikátor","IP":"IP","Neutral":"Ani spokojeni ani nespokojeni","Overall Satisfaction":"Celková spokojenost","platform":"platforma","Quality":"Kvalita","Speed of Service":"Rychlost obsluhy","starttime":"zažítek","version":"verze"}}},"QuestionCategories":{"cs":{"  ":{}}}}}