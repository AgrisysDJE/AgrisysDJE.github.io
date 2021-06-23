(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Batchs.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x,_x2){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref,_rend){var FarmId,BatchId,Data,DataTime,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,BatchId=_ref.BatchId,Data=_ref.Data,DataTime=_ref.DataTime;if(!FarmId){_context.next=31;break;}ref="farms_data/"+FarmId+"/batchs";if(BatchId){ref+="/"+BatchId;}if(Data){_context.next=10;break;}_context.next=7;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){if(BatchId){var batchdata=_batchdata.val();if(!batchdata)return null;if(!batchdata.datas)batchdata.datas={};if(!batchdata.pens)batchdata.pens=[];if(!batchdata.datas.gcurve)batchdata.datas.gcurve="default";var batch=defineProperty_default()({},BatchId,batchdata);var state=_rend.getState();if(state.firebase.batchs){batch=_objectSpread({},state.firebase.batchs);batch[BatchId]=batchdata;}return batch;}else{return _batchdata.val();}});case 7:res=_context.sent;_context.next=29;break;case 10:if(!BatchId){_context.next=29;break;}_context.t0=Data;_context.next=_context.t0===DataRefs.BATCHS?14:_context.t0===DataRefs.PENS?19:_context.t0===DataRefs.GRAPH?24:29;break;case 14:ref+="/"+"datas";_context.next=17;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var data=defineProperty_default()({},BatchId,{datas:_batchdata.val()});return data;});case 17:res=_context.sent;return _context.abrupt("break",29);case 19:ref+="/"+"pens";_context.next=22;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var pens=defineProperty_default()({},BatchId,{pens:_batchdata.val()});return pens;});case 22:res=_context.sent;return _context.abrupt("break",29);case 24:ref+="/"+"gcurve";_context.next=27;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var curve=defineProperty_default()({},BatchId,{gcurve:_batchdata.val()});return curve;});case 27:res=_context.sent;return _context.abrupt("break",29);case 29:if(!res){_context.next=31;break;}return _context.abrupt("return",res);case 31:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Batchs Error'}));case 32:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Batch.js
/* harmony default export */ var Batch = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/batchs',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'batchs',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Graphs.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x,_x2){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(_ref,_rend){var FarmId,GraphId,DataTime,ref,res;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:FarmId=_ref.FarmId,GraphId=_ref.GraphId,DataTime=_ref.DataTime;if(!FarmId){_context2.next=8;break;}ref="farms_data/"+FarmId+"/graph";if(GraphId)ref+="/"+GraphId;_context2.next=6;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(graph){var Graphs,GraphVal,newGraph;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Graphs=null;GraphVal=graph.val();if(GraphVal){if(GraphId){newGraph=defineProperty_default()({},graph.key,GraphVal);Graphs=_objectSpread(_objectSpread({},Graphs),newGraph);}else{Graphs=_objectSpread(_objectSpread({},Graphs),GraphVal);}}else{GraphId=null;}if(GraphId){_context.next=7;break;}_context.next=6;return Object(Initial["b" /* database */])().ref("farms_data/Agrisys/graph").once('value').then(function(Agraph){var AgraphVal=Agraph.val();if(AgraphVal){Graphs=_objectSpread(_objectSpread({},AgraphVal),Graphs);}return Graphs;}).catch(function(error){console.log("Get Agrisys graph Error: ",error);if(Graphs)return Graphs;else return Object(handleError["a" /* default */])({message:'Get Agrisys graph Error'});});case 6:Graphs=_context.sent;case 7:return _context.abrupt("return",Graphs);case 8:case"end":return _context.stop();}}},_callee);}));return function(_x4){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log("Get farm graph Error: ",error);return Object(handleError["a" /* default */])({message:'Get farm graph Error'});});case 6:res=_context2.sent;return _context2.abrupt("return",res);case 8:return _context2.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Graphs Error'}));case 9:case"end":return _context2.stop();}}},_callee2);}));return _fetch.apply(this,arguments);}function update(_x3){return _update.apply(this,arguments);}function _update(){_update=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(_ref3){var FarmId,GraphId,Graph,ref,res;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:FarmId=_ref3.FarmId,GraphId=_ref3.GraphId,Graph=_ref3.Graph;if(!FarmId){_context4.next=9;break;}ref="farms_data/"+FarmId+"/graph";if(!GraphId){_context4.next=9;break;}ref+="/"+GraphId+"/";_context4.next=7;return Object(Initial["b" /* database */])().ref(ref).update(_objectSpread({},Graph)).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(){var res2;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return fetch({FarmId:FarmId}).then(function(_Graph){return _Graph;});case 2:res2=_context3.sent;return _context3.abrupt("return",res2);case 4:case"end":return _context3.stop();}}},_callee3);}))).catch(function(error){console.log("Update Graph Error: ",error);return Object(handleError["a" /* default */])({message:'Update Graphs Error'});});case 7:res=_context4.sent;return _context4.abrupt("return",res);case 9:return _context4.abrupt("return",Object(handleError["a" /* default */])({message:'Update Graphs Error'}));case 10:case"end":return _context4.stop();}}},_callee4);}));return _update.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Graph.js
/* harmony default export */ var Firebase_Graph = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/graphs',fetch),update:Object(lib["buildAsyncActions"])('firebase/graphs',update),reducers:Object(lib["buildAsyncReducers"])({itemKey:'graphs',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Firebase_Pens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _Services_utils_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncActions"])('firebase/pens',_Services_Firebase_Pens__WEBPACK_IMPORTED_MODULE_1__[/* fetch */ "a"]),update:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncActions"])('firebase/pens',_Services_Firebase_Pens__WEBPACK_IMPORTED_MODULE_1__[/* update */ "b"]),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncReducers"])({itemKey:'pens',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Farms.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,ref,farmData;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId;ref="farms/";if(FarmId)ref+=FarmId;_context.next=5;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_farmData){var data=_farmData.val();if(FarmId){data=defineProperty_default()({},FarmId,data);}return data;});case 5:farmData=_context.sent;return _context.abrupt("return",farmData);case 7:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}function update(_x2){return _update.apply(this,arguments);}function _update(){_update=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(_ref2){var FarmId,Data,res,farm,farmid;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:FarmId=_ref2.FarmId,Data=_ref2.Data;if(!FarmId){_context4.next=7;break;}_context4.next=4;return Object(Initial["b" /* database */])().ref('farms/'+FarmId).update(_objectSpread({},Data)).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(){var data;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return fetch(FarmId);case 2:data=_context2.sent;return _context2.abrupt("return",data);case 4:case"end":return _context2.stop();}}},_callee2);}))).catch(function(error){console.log("Update Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Update Farm Error'});});case 4:res=_context4.sent;_context4.next=12;break;case 7:farm=Object(Initial["b" /* database */])().ref('farms/').push();farmid=farm.key;_context4.next=11;return farm.set({Data:Data}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(){var data;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return fetch(FarmId);case 2:data=_context3.sent;return _context3.abrupt("return",data);case 4:case"end":return _context3.stop();}}},_callee3);}))).catch(function(error){console.log("Update Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Update Farm Error'});});case 11:res=_context4.sent;case 12:return _context4.abrupt("return",res);case 13:case"end":return _context4.stop();}}},_callee4);}));return _update.apply(this,arguments);}function updateData(_x3){return _updateData.apply(this,arguments);}function _updateData(){_updateData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(_ref5){var FarmId,Data,ref,res;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:FarmId=_ref5.FarmId,Data=_ref5.Data;if(!FarmId){_context5.next=9;break;}ref="farms_data/"+FarmId;_context5.next=5;return Object(Initial["b" /* database */])().ref(ref).update(Data).then(function(){return null;}).catch(function(error){if(error.code==='database/permission-denied'){console.log("Farm data update was permission denied.");}else if(error.code){console.log("User update Error: ",error);}return Object(handleError["a" /* default */])({message:'Farm updateData Error'});});case 5:res=_context5.sent;return _context5.abrupt("return",res);case 9:console.log("Farm uid in updateData unknown");return _context5.abrupt("return",Object(handleError["a" /* default */])({message:'Farm uid in updateData unknown'}));case 11:case"end":return _context5.stop();}}},_callee5);}));return _updateData.apply(this,arguments);}function create(_x4){return _create.apply(this,arguments);}function _create(){_create=asyncToGenerator_default()(regenerator_default.a.mark(function _callee7(_ref6){var Data,user,ref,farm,farmid,res;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:Data=_ref6.Data;user=Object(Initial["a" /* auth */])().currentUser;ref="users/"+user.uid;farm=Object(Initial["b" /* database */])().ref('farms/').push();farmid=farm.key;_context7.next=7;return farm.set({email:user.email,manager:user.displayName?user.displayName:user.email,name:Data.name}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee6(){var data;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return fetch(FarmId).then(function(_data){return _data;});case 2:data=_context6.sent;return _context6.abrupt("return",data);case 4:case"end":return _context6.stop();}}},_callee6);}))).catch(function(error){console.log("Create Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Create Farm Error'});});case 7:res=_context7.sent;return _context7.abrupt("return",res);case 9:case"end":return _context7.stop();}}},_callee7);}));return _create.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Farm.js
/* harmony default export */ var Farm = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/farms',fetch),update:Object(lib["buildAsyncActions"])('firebase/farms',update),updateData:Object(lib["buildAsyncActions"])('firebase/farms',updateData),create:Object(lib["buildAsyncActions"])('firebase/farms',create),reducers:Object(lib["buildAsyncReducers"])({itemKey:'farms',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Firebase_Sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _Services_utils_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncActions"])('firebase/sections',_Services_Firebase_Sections__WEBPACK_IMPORTED_MODULE_1__[/* fetch */ "a"]),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildAsyncReducers"])({itemKey:'sections',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get_DataSpot */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccumulateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CurvePredict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WeightCalc; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Services_utils_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
function AccumulateTime(Time,PeriodeLength){var Times=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var NewTime=new Date(Time.getTime());switch(PeriodeLength){case"Weeks":NewTime.setDate(NewTime.getDate()+7);break;case"Month":NewTime.setMonth(NewTime.getMonth()+1);break;case"Days":default:do{NewTime.setDate(NewTime.getDate()+1);Times--;}while(Times>0);break;}return NewTime;}function GetSlope_Between(MinMax_Time,MinMax_Data){var minX=MinMax_Time[0];var maxX=MinMax_Time[1];var minY=MinMax_Data[0];var maxY=MinMax_Data[1];var slope=(maxY-minY)/(maxX-minX);if(minY>minX)slope=-slope;return slope;}function get_DataSpot(MinMax_Time,MinMax_Data,AtTime,StartVal,ForData){var ExValue=null;var ExTime=null;if(!StartVal||StartVal===null)StartVal=MinMax_Data[0];var slope=GetSlope_Between(MinMax_Time,MinMax_Data);if(AtTime){var FindX=AtTime-MinMax_Time[0];ExValue=FindX*slope+StartVal;}if(ForData){ExTime=(ForData-StartVal)/slope;ExTime=MinMax_Time[0]+ExTime;ExTime=Math.floor(ExTime);}return{ExValue:ExValue,ExTime:ExTime};}function isBatchClosed(Batch){return Batch&&Batch.state&&Batch.state===_Services_utils_defines__WEBPACK_IMPORTED_MODULE_5__[/* DataStates */ "b"].CLOSED?true:false;}function getBatchWeights(Batch){return Batch&&Batch.closed&&Batch.closed.weighings?Batch.closed.weighings:null;}function GetBatchEnd(Batch,Curve){if(Batch&&Batch.time&&Curve){var currentTime=new Date(Batch.time);var CurveLenght=Object.keys(Curve.data)[Object.keys(Curve.data).length-1];currentTime=new Date(AccumulateTime(currentTime,Curve.periode,CurveLenght+1));return currentTime.getTime();}return null;}function GetNewestWeight(_ref){var Weighings=_ref.Weighings,AfterTime=_ref.AfterTime,BeforeTime=_ref.BeforeTime;var Weighing=null;if(Weighings){for(var _weighing in Weighings){var weighing=WeighingsStore[_weighing];if(weighing&&!weighing.deleted&&!weighing.edited&&(!Weighing||Weighing.time<weighing.time)){if((!AfterTime||weighing.time>=AfterTime)&&(!BeforeTime||weighing.time<=BeforeTime)){Weighing=weighing;}}}}return Weighing;}function getCurveData(_ref2){var Graphs=_ref2.Graphs,Batch=_ref2.Batch;if(Batch&&Graphs&&!Graphs.data){if(isBatchClosed(Batch)&&Batch.gcurve)return Batch.gcurve;else if(Batch.gcurve&&Graphs&&Graphs[Batch.gcurve])return Graphs[Batch.gcurve];}else if(Graphs&&Graphs.data)return Graphs;return null;}function getLatestWeight(Weighings){var AfterTime=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var BeforeTime=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var Weighing=null;if(Weighings){Object.entries(Weighings).forEach(function(){var _ref3=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref4){var _ref5,WeightId,WeightData;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_ref5=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4,2),WeightId=_ref5[0],WeightData=_ref5[1];if(WeightData&&!WeightData.deleted&&!WeightData.edited&&(!Weighing||Weighing.time<WeightData.time)){if((!AfterTime||WeightData.time>=AfterTime)&&(!BeforeTime||WeightData.time<=BeforeTime)){Weighing=WeightData;}}case 2:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref3.apply(this,arguments);};}());}return Weighing;}function CurvePredict(_x2){return _CurvePredict.apply(this,arguments);}function _CurvePredict(){_CurvePredict=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref6){var Weighings,Batch,Curve,Graphs,Target,BatchEndDate,Weighing,weight,weight2,Weighing2,StartIndex,PredictCurve,CurveLenght,StartTime,lastIndex,lastIndexTime,CurrentTimeStep,nextIndex,CurveData,index,next_CurrentTimeStep,_weight,CurvePointData,obj,nextIndexTime,next_CurrentTimeStep2,data,Data,time;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:Weighings=_ref6.Weighings,Batch=_ref6.Batch,Curve=_ref6.Curve,Graphs=_ref6.Graphs;if(!Curve)Curve=getCurveData({Graphs:Graphs,Batch:Batch});if(!(Curve&&Curve.data&&Batch&&Batch.time)){_context2.next=26;break;}Target=Batch&&Batch.datas&&Batch.datas.target?Batch.datas.target:Curve.data[Curve.data.length-1];BatchEndDate=GetBatchEnd(Batch,Curve);Weighing=getLatestWeight(Weighings,Batch.time,BatchEndDate);if(!(Weighing&&Weighing.weight)){_context2.next=26;break;}weight=Weighing.weight;if(Weighing.count)weight=weight/Weighing.count;weight2=0;Weighing2=getLatestWeight(Weighings,Batch.time,Weighing.time-1);if(Weighing2){weight2=Weighing2.weight;if(Weighing2.count)weight2=weight2/Weighing2.count;}StartIndex="none";PredictCurve={periode:Curve.periode,data:[],time:[],Now:null,TempEx:null,lastWeighing:Weighing,TargetForcast:null};CurveLenght=parseInt(Object.keys(Curve.data)[Object.keys(Curve.data).length-1]);StartTime=new Date(Batch.time);lastIndex=0;lastIndexTime=StartTime;Object.entries(Curve.data).forEach(function(_ref7){var _ref8=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7,2),_index=_ref8[0],Data=_ref8[1];var index=parseInt(_index);if(lastIndex!=index&&!PredictCurve.TempEx){var nextIndexTime=AccumulateTime(lastIndexTime,Curve.periode,index-lastIndex);if(nextIndexTime>=new Date(Date.now()).setHours(0,0,0,0)){var data=get_DataSpot([lastIndexTime,nextIndexTime],[Curve.data[lastIndex],Curve.data[index]],new Date(Date.now()));PredictCurve.TempEx=data.ExValue;}lastIndexTime=nextIndexTime;}lastIndex=index;});CurrentTimeStep=new Date(Weighing.time);lastIndex=0;nextIndex=0;lastIndexTime=CurrentTimeStep;CurveData=Object.keys(Curve.data).values();for(index=0;index<CurveLenght;index++){next_CurrentTimeStep=new Date(AccumulateTime(CurrentTimeStep,Curve.periode));_weight=PredictCurve.data.length?PredictCurve.data[PredictCurve.data.length-1]:weight;CurvePointData=Curve.data[index];if(CurvePointData&&CurvePointData<_weight)CurvePointData=null;if(!CurvePointData&&index>0){nextIndex=index-1;do{nextIndex++;obj=Curve.data[nextIndex];}while(!obj&&nextIndex<CurveLenght);if(obj>_weight){nextIndexTime=AccumulateTime(lastIndexTime,Curve.periode,nextIndex-lastIndex);next_CurrentTimeStep2=new Date(AccumulateTime(lastIndexTime,Curve.periode));data=get_DataSpot([lastIndexTime.getTime(),nextIndexTime.getTime()],[Curve.data[lastIndex],Curve.data[nextIndex]],next_CurrentTimeStep2.getTime(),_weight,Curve.data[nextIndex]);CurvePointData=data.ExValue;}else{lastIndex=nextIndex;lastIndexTime=AccumulateTime(lastIndexTime,Curve.periode,nextIndex-lastIndex);index=nextIndex;}}else{lastIndex=index;lastIndexTime=CurrentTimeStep;}if(CurvePointData&&weight<CurvePointData){if(StartIndex==="none"){if(index===0){if(Weighing2){Data=get_DataSpot([Weighing2.time,Weighing.time],[weight2,weight],next_CurrentTimeStep);}else{time=AccumulateTime(new Date(Weighing.time),Curve.periode,Object.keys(Curve.data)[1]);Data=get_DataSpot([Weighing.time,time.getTime()],[Curve.data[0],Curve.data[1]],next_CurrentTimeStep,weight);}Data.Weighing={weight:Data.ExValue,time:next_CurrentTimeStep.getTime()};PredictCurve.data.push(Data.Weighing.weight);PredictCurve.time.push(Data.Weighing.time);Weighing2=Weighing;weight2=weight;Weighing=Data.Weighing;weight=Data.ExValue;StartIndex="none";}else{StartIndex=index;}}else{PredictCurve.data.push(CurvePointData);PredictCurve.time.push(CurrentTimeStep.getTime());}if(CurrentTimeStep>=new Date(Date.now()).setHours(0,0,0,0)){if(!PredictCurve.Now){if(CurrentTimeStep===new Date(Date.now()).setHours(0,0,0,0))PredictCurve.Now=PredictCurve.data[PredictCurve.data.length-1];else{Data=get_DataSpot([PredictCurve.time[PredictCurve.time.length-3],PredictCurve.time[PredictCurve.time.length-2]],[PredictCurve.data[PredictCurve.data.length-3],PredictCurve.data[PredictCurve.data.length-2]],new Date(Date.now()));PredictCurve.Now=Data.ExValue;}}}StartTime=new Date(AccumulateTime(StartTime,Curve.periode));CurrentTimeStep=next_CurrentTimeStep;if(CurvePointData<=Batch.datas.target){PredictCurve.TargetForcast=CurrentTimeStep.getTime();}}}return _context2.abrupt("return",PredictCurve);case 26:return _context2.abrupt("return",null);case 27:case"end":return _context2.stop();}}},_callee2);}));return _CurvePredict.apply(this,arguments);}function WeightCalc(_x3,_x4){return _WeightCalc.apply(this,arguments);}function _WeightCalc(){_WeightCalc=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref9,_rend){var Weighings,StartDate,EndDate,Batch,Graphs,PenWeight,PenGrowth,LastWeight,LastWeightDay,FirstWeightDay,today,isVirtual,isClosed,GrowthCount,Predict,weight,days;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:Weighings=_ref9.Weighings,StartDate=_ref9.StartDate,EndDate=_ref9.EndDate,Batch=_ref9.Batch,Graphs=_ref9.Graphs;PenWeight=0;PenGrowth=0;LastWeight=undefined;LastWeightDay=undefined;FirstWeightDay=undefined;today=false;isVirtual=null;isClosed=false;if(!Weighings&&!isBatchClosed(Batch)){Weighings=getBatchWeights(Batch);}if(Weighings){GrowthCount=0;Weighings=Object.fromEntries(Object.entries(Weighings).sort(function(_ref10,_ref11){var _ref12=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref10,2),a=_ref12[1];var _ref13=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref11,2),b=_ref13[1];return a.time<b.time?1:-1;}));Object.entries(Weighings).forEach(function(_ref14){var _ref15=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref14,2),Id=_ref15[0],Weighing=_ref15[1];if(!Weighing.deleted&&!Weighing.edited&&(!StartDate||!EndDate||Weighing.time>=StartDate&&Weighing.time<=EndDate)){PenWeight=Weighing.weight;if(Weighing.count)PenWeight=Weighing.weight/Weighing.count;if(LastWeight!==undefined){var weight=PenWeight-LastWeight;PenGrowth+=weight;GrowthCount++;}LastWeight=PenWeight;LastWeightDay=Weighing.time;if(new Date(LastWeightDay).setHours(0,0,0,0)===new Date(Date.now()).setHours(0,0,0,0))today=true;if(!FirstWeightDay)FirstWeightDay=Weighing.time;}});}if(!(!today&&Batch)){_context3.next=17;break;}_context3.next=14;return CurvePredict({Weighings:Weighings,Batch:Batch,Graphs:Graphs});case 14:Predict=_context3.sent;isVirtual=Predict;if(Predict&&Predict.Now&&Date.now()>=new Date(LastWeightDay).getDate()){PenWeight=Predict.Now;if(LastWeight!==undefined){weight=PenWeight-LastWeight;PenGrowth+=weight;GrowthCount++;}LastWeight=PenWeight;LastWeightDay=Date.now();}case 17:if(GrowthCount>0){days=(LastWeightDay-FirstWeightDay)/(1000*60*60*24);PenGrowth=PenGrowth/days;}return _context3.abrupt("return",{PenWeight:PenWeight,PenGrowth:PenGrowth,isVirtual:isVirtual});case 19:case"end":return _context3.stop();}}},_callee3);}));return _WeightCalc.apply(this,arguments);}

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js
var Section = __webpack_require__(116);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Comments.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,PenId,_ref$limitStart,limitStart,_ref$limitTo,limitTo,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId,_ref$limitStart=_ref.limitStart,limitStart=_ref$limitStart===void 0?0:_ref$limitStart,_ref$limitTo=_ref.limitTo,limitTo=_ref$limitTo===void 0?9999:_ref$limitTo;if(!FarmId){_context.next=11;break;}ref="farms_data/"+FarmId+"/datas/comments";if(!PenId){_context.next=9;break;}ref+="/"+PenId;_context.next=7;return Object(Initial["b" /* database */])().ref(ref).orderByChild('time').limitToLast(limitTo).once('value',function(snapshot){var comment=defineProperty_default()({},snapshot.key,{});snapshot.forEach(function(c){comment[snapshot.key][c.key]=c.val();});res=comment;});case 7:_context.next=9;break;case 9:if(!res){_context.next=11;break;}return _context.abrupt("return",res);case 11:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Comments Error'}));case 12:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}function create(_x2){return _create.apply(this,arguments);}function _create(){_create=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(_ref2){var FarmId,PenId,_ref2$Action,Action,_ref2$Data,Data,_ref2$Date,Date,_ref2$Quantity,Quantity,_ref2$Weight,Weight,_ref2$Code,Code,ref,commentRef,commentId,res;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:FarmId=_ref2.FarmId,PenId=_ref2.PenId,_ref2$Action=_ref2.Action,Action=_ref2$Action===void 0?null:_ref2$Action,_ref2$Data=_ref2.Data,Data=_ref2$Data===void 0?null:_ref2$Data,_ref2$Date=_ref2.Date,Date=_ref2$Date===void 0?null:_ref2$Date,_ref2$Quantity=_ref2.Quantity,Quantity=_ref2$Quantity===void 0?null:_ref2$Quantity,_ref2$Weight=_ref2.Weight,Weight=_ref2$Weight===void 0?null:_ref2$Weight,_ref2$Code=_ref2.Code,Code=_ref2$Code===void 0?null:_ref2$Code;if(!FarmId){_context3.next=15;break;}ref="farms_data/"+FarmId+"/datas/comments";if(!PenId){_context3.next=15;break;}ref+="/"+PenId+"/";_context3.next=7;return Object(Initial["b" /* database */])().ref(ref).push();case 7:commentRef=_context3.sent;commentId=commentRef.key;_context3.next=11;return commentRef.set({time:Date,user:Object(Initial["a" /* auth */])().currentUser.email,action:Action,quantity:Quantity,weight:Weight,code:Code,data:Data}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(){var res2;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return fetch({FarmId:FarmId,PenId:PenId}).then(function(Comments){return Comments;});case 2:res2=_context2.sent;return _context2.abrupt("return",res2);case 4:case"end":return _context2.stop();}}},_callee2);}))).catch(function(error){console.log("Create Comments Error: ",error);return Object(handleError["a" /* default */])({message:'Create Comments Error'});});case 11:res=_context3.sent;return _context3.abrupt("return",res);case 15:return _context3.abrupt("return",Object(handleError["a" /* default */])({message:'Create Comments Error'}));case 16:case"end":return _context3.stop();}}},_callee3);}));return _create.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Comment.js
/* harmony default export */ var Comment = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/comments',fetch),create:Object(lib["buildAsyncActions"])('firebase/comments',create),reducers:Object(lib["buildAsyncReducers"])({itemKey:'comments',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('theme/changeTheme'),reducers:function reducers(state,_ref){var payload=_ref.payload;if(typeof payload.theme!=='undefined'){state.theme=payload.theme;}if(typeof payload.darkMode!=='undefined'){console.log("no darkmode");}}});

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
var MainStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();var MainNavigator=function MainNavigator(){var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_4__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Navigator,{headerMode:'none',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexAgrisysContainer */ "f"],options:function options(_ref){var navigation=_ref.navigation;return{headerShown:false};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Screen,{name:"Test",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexExampleContainer */ "h"]})));};/* harmony default export */ __webpack_exports__["default"] = (MainNavigator);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return update; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x,_x2){return _fetch.apply(this,arguments);}function _fetch(){_fetch=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref,_rend){var FarmId,PenId,ref,res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId;if(!FarmId){_context.next=8;break;}ref="farms_data/"+FarmId+"/pens";if(PenId){ref+="/"+PenId;}_context.next=6;return Object(_Initial__WEBPACK_IMPORTED_MODULE_4__[/* database */ "b"])().ref(ref).once('value').then(function(_pensData){if(PenId){var penData=_pensData.val();if(!penData)penData={};if(!penData.datas)penData.datas={};var res=_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},PenId,penData);var state=_rend.getState();if(state.firebase.pens){res=_objectSpread({},state.firebase.pens);res[PenId]=penData;}return res;}else{var res=_pensData.val();return res;}});case 6:res=_context.sent;return _context.abrupt("return",res);case 8:return _context.abrupt("return",Object(_utils_handleError__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({message:'Fecth Pens Error'}));case 9:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}function update(_x3){return _update.apply(this,arguments);}function _update(){_update=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref2){var FarmId,PenId,Pen,ref,res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:FarmId=_ref2.FarmId,PenId=_ref2.PenId,Pen=_ref2.Pen;if(!FarmId){_context4.next=8;break;}ref="farms_data/"+FarmId+"/";if(!PenId){_context4.next=8;break;}_context4.next=6;return fetch({FarmId:FarmId,PenId:PenId}).then(function(){var _ref3=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_Pen){var ref2,data,_data,Datas,res2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:ref2=ref+"pens/"+PenId+"/";data=Pen.datas;_data=_Pen[PenId].datas;Datas=_objectSpread(_objectSpread({},_data),data);_Pen[PenId].datas=Datas;_context3.next=7;return Object(_Initial__WEBPACK_IMPORTED_MODULE_4__[/* database */ "b"])().ref(ref2).update(_objectSpread({},_Pen[PenId])).then(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(){var penData;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:penData=_Pen[PenId];return _context2.abrupt("return",_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},PenId,penData));case 2:case"end":return _context2.stop();}}},_callee2);}))).catch(function(error){console.log("Update Pen Error: ",error);return Object(_utils_handleError__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({message:'Update Pens Error'});});case 7:res2=_context3.sent;return _context3.abrupt("return",res2);case 9:case"end":return _context3.stop();}}},_callee3);}));return function(_x4){return _ref3.apply(this,arguments);};}());case 6:res=_context4.sent;return _context4.abrupt("return",res);case 8:case"end":return _context4.stop();}}},_callee4);}));return _update.apply(this,arguments);}

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(228);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncActions"])('startup/init',function(){var _ref=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(args,_ref2){var dispatch;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch=_ref2.dispatch;_context.next=3;return dispatch(_Theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].action({theme:'default',darkMode:null}));case 3:Object(_Navigators_Root__WEBPACK_IMPORTED_MODULE_4__[/* navigateAndSimpleReset */ "b"])('Main');case 4:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}()),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncReducers"])({itemKey:null})});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('theme/setDefaultTheme'),reducers:function reducers(state,_ref){var payload=_ref.payload;if(!state.theme){state.theme=payload.theme;state.darkMode=payload.darkMode;}}});

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _utils_formators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref){var FarmId,SectionId,ref,res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,SectionId=_ref.SectionId;if(!FarmId){_context.next=8;break;}ref="farms_data/"+FarmId+"/sections";if(SectionId){ref+="/"+SectionId;}_context.next=6;return Object(_Initial__WEBPACK_IMPORTED_MODULE_3__[/* database */ "b"])().ref(ref).once('value').then(function(_sectionidData){return Object(_utils_formators__WEBPACK_IMPORTED_MODULE_4__[/* sortObject */ "b"])(_sectionidData.val());});case 6:res=_context.sent;return _context.abrupt("return",res);case 8:return _context.abrupt("return",Object(_utils_handleError__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({message:'Fecth Sections Error'}));case 9:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
var AuthStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();var AuthNavigator=function AuthNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_4__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexAuthContainer */ "g"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysConnect.NavTitle')};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"CreateUser",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* CreateUserContainer */ "b"],options:function options(_ref2){var navigation=_ref2.navigation;return{title:t('AgrisysConnect.NavTitle')};}})));};/* harmony default export */ __webpack_exports__["default"] = (AuthNavigator);

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: FirebaseInitialState

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Utils.js
var Utils = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/User.js + 1 modules
var User = __webpack_require__(72);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Farm.js + 1 modules
var Farm = __webpack_require__(115);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Batch.js + 1 modules
var Batch = __webpack_require__(100);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Graph.js + 1 modules
var Graph = __webpack_require__(101);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js
var Section = __webpack_require__(116);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Pen.js
var Pen = __webpack_require__(109);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Pens.js
var Pens = __webpack_require__(185);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Pigs.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,TagId,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,TagId=_ref.TagId;if(!FarmId){_context.next=8;break;}ref="farms_data/"+FarmId+"/pigs";if(TagId){ref+="/"+TagId;}_context.next=6;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_pigsData){if(TagId){var pigData=_pigsData.val();if(!pigData)return null;if(!pigData.datas)pigData.datas={};if(!pigData.datas.gcurve)pigData.datas.gcurve="default";return defineProperty_default()({},TagId,pigData);}else{return _pigsData.val();}});case 6:res=_context.sent;return _context.abrupt("return",res);case 8:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Pigs Error'}));case 9:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}function updatePigPen(_x2){return _updatePigPen.apply(this,arguments);}function _updatePigPen(){_updatePigPen=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(_ref3){var FarmId,TagId,PenId,Action,ref,res;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:FarmId=_ref3.FarmId,TagId=_ref3.TagId,PenId=_ref3.PenId,Action=_ref3.Action;if(!(FarmId&&PenId)){_context4.next=7;break;}ref="farms_data/"+FarmId+"/"+"pens/"+PenId+"/datas";_context4.next=5;return Object(Initial["b" /* database */])().ref(ref+"/count").once('value').then(function(){var _ref4=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(counts){var val,res2;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:val=counts.val();if(!val)val=0;if(Action&&!isNaN(Action)){val=parseInt(val)+parseInt(Action);}else{val=parseInt(val)+1;}_context3.next=5;return Object(Initial["b" /* database */])().ref(ref).update({count:val}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(){var res3;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(Pens["a" /* fetch */])({FarmId:FarmId,PenId:PenId}).then(function(pen){return pen;});case 2:res3=_context2.sent;return _context2.abrupt("return",res3);case 4:case"end":return _context2.stop();}}},_callee2);})));case 5:res2=_context3.sent;return _context3.abrupt("return",res2);case 7:case"end":return _context3.stop();}}},_callee3);}));return function(_x4){return _ref4.apply(this,arguments);};}()).catch(function(error){console.log("Update pig pen Error: ",error);return Object(handleError["a" /* default */])({message:'Update Pigs pen Error'});});case 5:res=_context4.sent;return _context4.abrupt("return",res);case 7:return _context4.abrupt("return",Object(handleError["a" /* default */])({message:'Update Pigs pen Error'}));case 8:case"end":return _context4.stop();}}},_callee4);}));return _updatePigPen.apply(this,arguments);}function updateData(_x3){return _updateData.apply(this,arguments);}function _updateData(){_updateData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(_ref6){var FarmId,TagId,PenId,Action,ref,res;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:FarmId=_ref6.FarmId,TagId=_ref6.TagId,PenId=_ref6.PenId,Action=_ref6.Action;if(!FarmId){_context5.next=9;break;}ref="farms_data/"+FarmId+"/";if(!TagId){_context5.next=6;break;}_context5.next=9;break;case 6:_context5.next=8;return updatePigPen({FarmId:FarmId,TagId:TagId,PenId:PenId,Action:Action}).then(function(data){return data;});case 8:res=_context5.sent;case 9:case"end":return _context5.stop();}}},_callee5);}));return _updateData.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Pig.js
/* harmony default export */ var Pig = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/pigs',fetch),updateData:Object(lib["buildAsyncActions"])('firebase/pigs',updateData),updatePigPen:Object(lib["buildAsyncActions"])('firebase/pigs',updatePigPen),reducers:Object(lib["buildAsyncReducers"])({itemKey:'pigs',errorKey:'error',loadingKey:'loading'})});
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Weighing.js + 1 modules
var Weighing = __webpack_require__(91);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Comment.js + 1 modules
var Comment = __webpack_require__(136);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/index.js
var FirebaseInitialState={activeData:{weightCalc:null},user:null,farms:null,batchs:null,graphs:null,sections:null,pens:null,weighings:null,comments:null};/* harmony default export */ var Firebase = __webpack_exports__["a"] = (Object(lib["buildSlice"])('firebase',[Utils["c" /* ErrorHandler */],Utils["d" /* SetData */],Utils["b" /* EditData */],Utils["a" /* ClearData */],Utils["e" /* WeightCalculate */],User["a" /* default */],Farm["a" /* default */],Batch["a" /* default */],Graph["a" /* default */],Section["a" /* default */],Pen["a" /* default */],Pig,Weighing["a" /* default */],Comment["a" /* default */]],FirebaseInitialState).reducer);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useTheme; });

// NAMESPACE OBJECT: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Variables.js
var Variables_namespaceObject = {};
__webpack_require__.r(Variables_namespaceObject);
__webpack_require__.d(Variables_namespaceObject, "Colors", function() { return Variables_Colors; });
__webpack_require__.d(Variables_namespaceObject, "NavigationColors", function() { return NavigationColors; });
__webpack_require__.d(Variables_namespaceObject, "FontSize", function() { return Variables_FontSize; });
__webpack_require__.d(Variables_namespaceObject, "MetricsSizes", function() { return Variables_MetricsSizes; });

// NAMESPACE OBJECT: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/index.js
var default_dark_namespaceObject = {};
__webpack_require__.r(default_dark_namespaceObject);
__webpack_require__.d(default_dark_namespaceObject, "Variables", function() { return Variables; });
__webpack_require__.d(default_dark_namespaceObject, "Images", function() { return default_dark_Images; });

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(28);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/useColorScheme/index.js
var useColorScheme = __webpack_require__(307);
var useColorScheme_default = /*#__PURE__*/__webpack_require__.n(useColorScheme);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/theming/DarkTheme.js
var DarkTheme = __webpack_require__(369);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/theming/DefaultTheme.js
var DefaultTheme = __webpack_require__(154);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js
var StyleSheet = __webpack_require__(3);
var StyleSheet_default = /*#__PURE__*/__webpack_require__.n(StyleSheet);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Fonts.js
/* harmony default export */ var Fonts = (function(_ref){var FontSize=_ref.FontSize,Colors=_ref.Colors;return StyleSheet_default.a.create({textSmall:{fontSize:FontSize.small,color:Colors.text},textRegular:{fontSize:FontSize.regular,color:Colors.text},textLarge:{fontSize:FontSize.large,color:Colors.text},titleSmall:{fontSize:FontSize.small*2,fontWeight:'bold',color:Colors.text},titleRegular:{fontSize:FontSize.regular*2,fontWeight:'bold',color:Colors.text},titleLarge:{fontSize:FontSize.large*2,fontWeight:'bold',color:Colors.text},textCenter:{textAlign:'center'},textJustify:{textAlign:'justify'},textLeft:{textAlign:'left'},textRight:{textAlign:'right'},textReverse:{color:Colors.secountText}});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Gutters.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Theme_Gutters = (function(_ref){var MetricsSizes=_ref.MetricsSizes;return StyleSheet_default.a.create(_objectSpread({},Object.entries(MetricsSizes).reduce(function(acc,_ref2){var _objectSpread2;var _ref3=slicedToArray_default()(_ref2,2),key=_ref3[0],value=_ref3[1];return _objectSpread(_objectSpread({},acc),{},(_objectSpread2={},defineProperty_default()(_objectSpread2,key+"BMargin",{marginBottom:value}),defineProperty_default()(_objectSpread2,key+"TMargin",{marginTop:value}),defineProperty_default()(_objectSpread2,key+"RMargin",{marginRight:value}),defineProperty_default()(_objectSpread2,key+"LMargin",{marginLeft:value}),defineProperty_default()(_objectSpread2,key+"VMargin",{marginVertical:value}),defineProperty_default()(_objectSpread2,key+"HMargin",{marginHorizontal:value}),defineProperty_default()(_objectSpread2,key+"BPadding",{paddingBottom:value}),defineProperty_default()(_objectSpread2,key+"TPadding",{paddingTop:value}),defineProperty_default()(_objectSpread2,key+"RPadding",{paddingRight:value}),defineProperty_default()(_objectSpread2,key+"LPadding",{paddingLeft:value}),defineProperty_default()(_objectSpread2,key+"VPadding",{paddingVertical:value}),defineProperty_default()(_objectSpread2,key+"HPadding",{paddingHorizontal:value}),_objectSpread2));},{})));});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Images.js
/* harmony default export */ var Images = (function(){return{Haxa_globe:__webpack_require__(766),Hexa_icon:__webpack_require__(767),Loading:__webpack_require__(768),Login_bottom:__webpack_require__(769),Login_protein:__webpack_require__(770),Logo:__webpack_require__(771),Home:__webpack_require__(772),DashBoard:__webpack_require__(773),System:__webpack_require__(774),Curves:__webpack_require__(775),GCurves:__webpack_require__(776),User:__webpack_require__(777),Sow:__webpack_require__(778),Section:__webpack_require__(779),Pens:__webpack_require__(780),AutoPig:__webpack_require__(781),Feed:__webpack_require__(782),logo:__webpack_require__(783)};});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Layout.js
/* harmony default export */ var Theme_Layout = (function(){return StyleSheet_default.a.create({column:{flexDirection:'column'},columnReverse:{flexDirection:'column-reverse'},colCenter:{flexDirection:'column',alignItems:'center',justifyContent:'center'},colVCenter:{flexDirection:'column',alignItems:'center'},colHCenter:{flexDirection:'column',justifyContent:'center'},row:{flexDirection:'row'},rowReverse:{flexDirection:'row-reverse'},rowCenter:{flexDirection:'row',alignItems:'center',justifyContent:'center'},rowVCenter:{flexDirection:'row',justifyContent:'center'},rowHCenter:{flexDirection:'row',alignItems:'center'},center:{alignItems:'center',justifyContent:'center'},alignItemsCenter:{alignItems:'center'},alignItemsStart:{alignItems:'flex-start'},alignItemsStretch:{alignItems:'stretch'},justifyContentCenter:{justifyContent:'center'},justifyContentAround:{justifyContent:'space-around'},justifyContentBetween:{justifyContent:'space-between'},scrollSpaceAround:{flexGrow:1,justifyContent:'space-around'},scrollSpaceBetween:{flexGrow:1,justifyContent:'space-between'},selfStretch:{alignSelf:'stretch'},fill:{flex:1},fillCol:{flex:1,flexDirection:'column'},fillRow:{flex:1,flexDirection:'row'},fullSize:{height:'100%',width:'100%'},fullWidth:{width:'100%'},midWidth:{width:'75%'},halvWidth:{width:'50%'},quarterWidth:{width:'25%'},fullHeight:{height:'100%'},midHeight:{height:'75%'},halvHeight:{height:'50%'},quarterHeight:{height:'25%'},mirror:{transform:[{scaleX:-1}]},rotate90:{transform:[{rotate:'90deg'}]},rotate90Inverse:{transform:[{rotate:'-90deg'}]}});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/components/Buttons.js
function Buttons_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Buttons_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Buttons_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Buttons_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Buttons = (function(_ref){var Colors=_ref.Colors,Gutters=_ref.Gutters,Layout=_ref.Layout;var base=Buttons_objectSpread(Buttons_objectSpread(Buttons_objectSpread({},Layout.center),Gutters.largeHPadding),{},{height:40,backgroundColor:Colors.primary});var rounded=Buttons_objectSpread(Buttons_objectSpread({},base),{},{borderRadius:20});var outline=Buttons_objectSpread(Buttons_objectSpread({},base),{},{backgroundColor:Colors.transparent,borderWidth:2,borderColor:Colors.primary});var filled=Buttons_objectSpread(Buttons_objectSpread({},base),{},{backgroundColor:Colors.primary,borderWidth:2,borderColor:Colors.primary});return StyleSheet_default.a.create({base:base,rounded:rounded,outline:outline,filled:filled,outlineRounded:Buttons_objectSpread(Buttons_objectSpread({},rounded),outline),filledRounded:Buttons_objectSpread(Buttons_objectSpread({},rounded),filled)});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Common.js
var _excluded=["Colors"];function Common_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Common_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Common_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Common_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Common = (function(_ref){var Colors=_ref.Colors,args=objectWithoutProperties_default()(_ref,_excluded);return Common_objectSpread({button:Buttons(Common_objectSpread({Colors:Colors},args))},StyleSheet_default.a.create({backgroundPrimary:{backgroundColor:Colors.primary},backgroundReset:{backgroundColor:Colors.transparent},textInput:{borderWidth:0,borderColor:Colors.text,backgroundColor:Colors.inputBackground,color:Colors.text,minHeight:35,textAlign:'left'},border:{borderWidth:2,borderRadius:10,borderColor:Colors.text,color:Colors.text,minHeight:30,marginVertical:5,marginHorizontal:2,padding:2.5}}));});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Variables.js
var Variables_Colors={transparent:'rgba(0,0,0,0)',white:'#ffffff',gray:'#a6a6a6',text:'#4a4a49',secountText:'#ffffff',primary:'#a3b9cf',input:'#86939e',inputBackground:'#FFFFFF',success:'#03a489',error:'#dc3545',overest:'#4cafea',pigpink:'#FFAA95',BUMBLEBEE:'#FCE205',AgriGreen:'#03a489',AgriDarkblue:'#4463ab',AgriLightblue:'#a3b9cf',AgriDark:'#4a4a49'};var NavigationColors={primary:Variables_Colors.primary,card:Variables_Colors.AgriDarkblue};var Variables_FontSize={small:16,regular:20,large:40};var tiny=5;var small=tiny*2;var regular=tiny*3;var large=regular*2;var huge=large*2;var Variables_MetricsSizes={tiny:tiny,small:small,regular:regular,large:large,huge:huge};
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/Variables.js
var default_dark_Variables_Colors={};var Variables_NavigationColors={};/* harmony default export */ var Variables = ({Colors:default_dark_Variables_Colors,NavigationColors:Variables_NavigationColors});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/Images.js
/* harmony default export */ var default_dark_Images = (function(){});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/index.js

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/index.js
/* harmony default export */ var themes = ({default_dark:default_dark_namespaceObject});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/hooks/useTheme.js
var useTheme_excluded=["Variables"],_excluded2=["Variables"];function useTheme_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function useTheme_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){useTheme_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{useTheme_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var useTheme = (function(){var colorScheme=useColorScheme_default()();var currentTheme=Object(es["c" /* useSelector */])(function(state){return state.theme.theme||'default';});var isDark=Object(es["c" /* useSelector */])(function(state){return state.theme.darkMode;});var darkMode=isDark===null?colorScheme==='dark':isDark;var _ref=themes[currentTheme]||{},_ref$Variables=_ref.Variables,themeConfigVars=_ref$Variables===void 0?{}:_ref$Variables,themeConfig=objectWithoutProperties_default()(_ref,useTheme_excluded);var _ref2=darkMode?themes[currentTheme+"_dark"]||{}:{},_ref2$Variables=_ref2.Variables,darkThemeConfigVars=_ref2$Variables===void 0?{}:_ref2$Variables,darkThemeConfig=objectWithoutProperties_default()(_ref2,_excluded2);var themeVariables=useTheme_mergeVariables(Variables_namespaceObject,themeConfigVars,darkThemeConfigVars);var baseTheme=useTheme_objectSpread({Fonts:Fonts(themeVariables),Gutters:Theme_Gutters(themeVariables),Images:Images(themeVariables),Layout:Theme_Layout(themeVariables),Common:Common(useTheme_objectSpread(useTheme_objectSpread({},themeVariables),{},{Layout:Theme_Layout(themeVariables),Gutters:Theme_Gutters(themeVariables)}))},themeVariables);return useTheme_buildTheme(darkMode,baseTheme,useTheme_formatTheme(themeVariables,themeConfig||{}),useTheme_formatTheme(themeVariables,darkThemeConfig||{}));});var useTheme_formatTheme=function formatTheme(variables,theme){return Object.entries(theme).reduce(function(acc,_ref3){var _ref4=slicedToArray_default()(_ref3,2),name=_ref4[0],generate=_ref4[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},name,generate(variables)));},{});};var useTheme_mergeVariables=function mergeVariables(variables,themeConfig,darkThemeConfig){return Object.entries(variables).reduce(function(acc,_ref5){var _ref6=slicedToArray_default()(_ref5,2),group=_ref6[0],vars=_ref6[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},group,useTheme_objectSpread(useTheme_objectSpread(useTheme_objectSpread({},vars),themeConfig[group]||{}),darkThemeConfig[group]||{})));},{});};var useTheme_buildTheme=function buildTheme(darkMode,baseTheme,themeConfig,darkThemeConfig){return useTheme_objectSpread(useTheme_objectSpread({},useTheme_mergeTheme(baseTheme,themeConfig,darkThemeConfig)),{},{darkMode:darkMode,NavigationTheme:mergeNavigationTheme(darkMode?DarkTheme["a" /* default */]:DefaultTheme["a" /* default */],baseTheme.NavigationColors)});};var useTheme_mergeTheme=function mergeTheme(baseTheme,theme,darkTheme){return useTheme_objectSpread({},Object.entries(baseTheme).reduce(function(acc,_ref7){var _ref8=slicedToArray_default()(_ref7,2),key=_ref8[0],value=_ref8[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},key,useTheme_objectSpread(useTheme_objectSpread(useTheme_objectSpread({},value),theme[key]||{}),darkTheme[key]||{})));},{}));};var mergeNavigationTheme=function mergeNavigationTheme(reactNavigationTheme,overrideColors){return useTheme_objectSpread(useTheme_objectSpread({},reactNavigationTheme),{},{colors:useTheme_objectSpread(useTheme_objectSpread({},reactNavigationTheme.colors),overrideColors)});};
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRefs; });
/* unused harmony export ConsysRefs */
/* unused harmony export TeweRefs */
/* unused harmony export DataAvgType */
/* unused harmony export Actions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Operations; });
/* unused harmony export ErrorTypes */
var UserStates={STARTER:'starter',FREE:'free',WORKER:'worker',OWNER:'owner',ADMIN:'admin',TECH:'tech'};var DataStates={CLOSED:'Closed'};var DataRefs={ACTIVE:'activeData',FIREBASEUSER:'firebaseuser',USERSDATA:'usersdata',USERS:'users',FARMS:'farms',SECTIONS:'farms_data/$farmid/sections',PENS:'farms_data/$farmid/pens',PIGS:'farms_data/$farmid/pigs',BATCHS:'farms_data/$farmid/batchs',WEIGHING:'farms_data/$farmid/pens/$penid/weighings/',GRAPH:'farms_data/$farmid/Graph/$graphid/',AUTOPIGS:'farms_data/$farmid/autopigs',COMMENTS:'farms_data/$farmid/datas/comments/',FARMDATAS:'farms_data/$farmid/datas/',SHARES:'shareData',CONSYS:'consys',TEWE:'tewe'};var ConsysRefs={VALVEFEED:'100',SCALE:'700',TEMPERATURE:'702',ACTIVITY:'703',WATERCOUNT:'704'};var TeweRefs={VALVEFEED:'Tewe100'};var DataAvgType={DAYS:0,HOUR:1,PURE:3};var Actions={SIGN:'sign',FETCH:'fetch',CREATE:'create',UPDATE:'update',MOVE:'move',DELETE:'delete',CLEAR:'clear',ADD:'add'};var Operations={ADD:'Add pig',MOVE:'Move pig',TREATMENT:'Treatment',SOLD:'Sold pig',NOTE:'Pen Note'};var ErrorTypes={SYSTEM:'System',EMAIL:'Email',PASSWORD:'Password',FORMAT:'Format'};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return navigationRef; });
/* unused harmony export navigate */
/* unused harmony export navigateAndReset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navigateAndSimpleReset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__);
function isApp(){var window=react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3___default.a.get("window");var wide=window.width>900?true:false;var App=react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default.a.OS==='ios'||react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default.a.OS==='android'||!wide;return App;}var navigationRef=react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();function navigate(name,params){var _navigationRef$curren;(_navigationRef$curren=navigationRef.current)==null?void 0:_navigationRef$curren.navigate(name,params);}function navigateAndReset(){var _navigationRef$curren2;var routes=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;(_navigationRef$curren2=navigationRef.current)==null?void 0:_navigationRef$curren2.dispatch(_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__["CommonActions"].reset({index:index,routes:routes}));}function navigateAndSimpleReset(name){var _navigationRef$curren3;var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;(_navigationRef$curren3=navigationRef.current)==null?void 0:_navigationRef$curren3.dispatch(_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__["CommonActions"].reset({index:index,routes:[{name:name}]}));}

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(_ref){var message=_ref.message,data=_ref.data,status=_ref.status;return Promise.reject({message:message,data:data,status:status});});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WeightCalculate; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(311);
/* harmony import */ var _Services_Firebase_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _Services_utils_handleError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ErrorHandler={initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncActions"])('firebase/setError',function(){var _ref=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(){var message,data,status,_args=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:message=_args.length>0&&_args[0]!==undefined?_args[0]:"";data=_args.length>1&&_args[1]!==undefined?_args[1]:"";status=_args.length>2&&_args[2]!==undefined?_args[2]:"";return _context.abrupt("return",Object(_Services_utils_handleError__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(message,data,status));case 4:case"end":return _context.stop();}}},_callee);}));return function(){return _ref.apply(this,arguments);};}()),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncReducers"])({errorKey:'error',loadingKey:'loading'})};var SetData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/setData'),reducers:function reducers(state,_ref2){var payload=_ref2.payload;if(!state.activeData)state.activeData={weightCalc:{}};if(typeof payload.DataRef!=='undefined'&&typeof payload.Data!=='undefined'){switch(payload.DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].FARMS:state.activeData={weightCalc:{},farm:payload.Data};state.pens=null;state.sections=null;state.batchs=null;state.comments=null;state.graphs=null;state.weighings=null;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].BATCHS:state.activeData.batch=payload.Data;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].SECTIONS:state.activeData.section=payload.Data;state.activeData.pen=null;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].PENS:state.activeData.pen=payload.Data;break;}}}};var EditData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/editData'),reducers:function reducers(state,_ref3){var payload=_ref3.payload;if(typeof payload.DataRef!=='undefined'&&typeof payload.Data!=='undefined'){var Data=payload.Data;switch(payload.DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].ACTIVE:if(typeof payload.Append!=='undefined'&&payload.Append){state.activeData=_objectSpread(_objectSpread({},state.activeData),Data);}else state.activeData=Data;if(!state.activeData.weightCalc)state.activeData.weightCalc={};break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].FARMS:if(typeof payload.Append!=='undefined'&&payload.Append){state.farms=_objectSpread(_objectSpread({},state.farms),Data);}else state.farms=Data;break;}}}};var ClearData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/clearData'),reducers:function reducers(state,_ref4){var payload=_ref4.payload;console.log("test");if(typeof payload.DataRef!=='undefined'){var Clears=Object.values(_Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"]).filter(function(x){return!Object.values(payload.DataRef).includes(x);});var test=_objectSpread({},state);console.log(test);Object.values(Clears).forEach(function(DataRef){switch(DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].ACTIVE:break;case DataRef.PENS:test.pens={};break;case DataRef.SECTIONS:test.sections={};break;}});console.log(test);}}};var WeightCalculate={initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncActions"])('firebase/weightCalc',_Services_Firebase_Utils__WEBPACK_IMPORTED_MODULE_6__[/* WeightCalc */ "c"]),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncReducers"])({itemKey:'activeData.weightCalc',errorKey:'error',loadingKey:'loading'})};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* unused harmony export messaging */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return database; });
/* unused harmony export firebase */
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0__);
var auth,messaging,database,firebase;if(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default.a.OS==='ios'||react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default.a.OS==='android'){auth=__webpack_require__(978).default;messaging=__webpack_require__(984).default;database=__webpack_require__(979).default;}else{console.log("firebase load");var _firebase=__webpack_require__(758).default;__webpack_require__(759).default;__webpack_require__(983).default;__webpack_require__(761).default;firebase=_firebase;if(!firebase.apps.length){console.log("Starting");var Constants=__webpack_require__(981).default;_firebase.initializeApp(Constants.manifest.web.config.firebase);}auth=_firebase.auth;if(_firebase.messaging.isSupported()){messaging=_firebase.messaging;}database=_firebase.database;console.log("Started");}

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ Index; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Agrisys_Index; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Auth_Index; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ UserCreate; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ AdminPanel_Index; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ AdminPanel_SystemBoard; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ UserPanel_Index; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ UserPanel_DashBoard; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ UserPanel_Pens; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ UserPanel_Pen_Display; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ UserPanel_Batchs; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ UserPanel_GrowthCurves; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ UserPanel_Operations; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ UserPanel_Weighing; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Example_Index; });

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(324);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js + 12 modules
var Theme = __webpack_require__(32);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/Init.js
var Init = __webpack_require__(227);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(574);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/View/index.js
var exports_View = __webpack_require__(2);
var View_default = /*#__PURE__*/__webpack_require__.n(exports_View);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Image/index.js
var Image = __webpack_require__(42);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Animated/index.js
var Animated = __webpack_require__(15);
var Animated_default = /*#__PURE__*/__webpack_require__.n(Animated);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js
var StyleSheet = __webpack_require__(3);
var StyleSheet_default = /*#__PURE__*/__webpack_require__.n(StyleSheet);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Easing/index.js
var Easing = __webpack_require__(64);
var Easing_default = /*#__PURE__*/__webpack_require__.n(Easing);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Assets/Images/Loading/index.js
/* harmony default export */ var Loading = ({Loading:__webpack_require__(784),Dot0:__webpack_require__(785),Dot1:__webpack_require__(786),Dot2:__webpack_require__(787),Dot3:__webpack_require__(788),Dot4:__webpack_require__(789),Dot5:__webpack_require__(790),Dot6:__webpack_require__(791),Dot7:__webpack_require__(792),Dot8:__webpack_require__(793),Dot9:__webpack_require__(794)});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/LoadingSplash.js
var LoadingSplash_LoadingSplash=function LoadingSplash(_ref){objectDestructuringEmpty_default()(_ref);var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images;var LoadingBar=[{image:Loading.Dot0,spinOffset:0,jumpOffset:0},{image:Loading.Dot1,spinOffset:40,jumpOffset:0},{image:Loading.Dot2,spinOffset:80,jumpOffset:0},{image:Loading.Dot3,spinOffset:120,jumpOffset:0},{image:Loading.Dot4,spinOffset:160,jumpOffset:0},{image:Loading.Dot5,spinOffset:200,jumpOffset:0},{image:Loading.Dot6,spinOffset:240,jumpOffset:0},{image:Loading.Dot7,spinOffset:280,jumpOffset:0},{image:Loading.Dot8,spinOffset:320,jumpOffset:0},{image:Loading.Dot9,spinOffset:360,jumpOffset:0}];var spinValue=new Animated_default.a.Value(0);var startValue=new Animated_default.a.Value(1);Object(react["useEffect"])(function(){Animated_default.a.loop(Animated_default.a.parallel([Animated_default.a.timing(spinValue,{toValue:1,duration:4000,easing:Easing_default.a.linear,useNativeDriver:true}),Animated_default.a.sequence([Animated_default.a.timing(startValue,{toValue:0.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:1.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:0.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:1,duration:1000,useNativeDriver:true})])])).start();},[spinValue,startValue]);return react_default.a.createElement(View_default.a,{style:[Layout.fillcolumn,Layout.fullSize,Layout.center]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize,{maxWidth:250,maxHeight:40}],source:Loading.Loading,resizeMode:'contain'}),react_default.a.createElement(View_default.a,{style:[Layout.row,{height:25,width:250}]},LoadingBar.map(function(e,i){return react_default.a.createElement(View_default.a,{key:"dot"+i,style:[{height:25,width:25,transform:[{rotate:e.spinOffset+"deg"}]}]},react_default.a.createElement(Animated_default.a.Image,{source:e.image,resizeMode:'center',style:[Layout.fullSize,{maxWidth:25,maxHeight:25,transform:[{scale:startValue},{rotate:spinValue.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})}]}]}));})));};var styles=StyleSheet_default.a.create({container:{flex:1,justifyContent:'center',alignItems:'center'},square:{height:50,width:50,backgroundColor:'red'}});LoadingSplash_LoadingSplash.propTypes={};LoadingSplash_LoadingSplash.defaultProps={};/* harmony default export */ var Components_LoadingSplash = (LoadingSplash_LoadingSplash);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Brand.js
var Brand_Brand=function Brand(_ref){var height=_ref.height,mode=_ref.mode;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Images=_useTheme.Images;return react_default.a.createElement(Image_default.a,{style:[Layout.fullSize,{height:height}],source:Images.Logo,resizeMode:mode});};Brand_Brand.propTypes={height:prop_types_default.a.number,mode:prop_types_default.a.oneOf(['contain','cover','stretch','repeat','center']),width:prop_types_default.a.number};Brand_Brand.defaultProps={height:270,mode:'contain'};/* harmony default export */ var Components_Brand = (Brand_Brand);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Frame.js
var Frame_Frame=function Frame(_ref){var logo=_ref.logo,protein=_ref.protein,bottom=_ref.bottom,childs=_ref.childs;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Images=_useTheme.Images;return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,{position:'absolute'}]},logo&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',top:"5%",left:"2%",width:"33%",height:"15%"}],source:Images.Logo,resizeMode:'center'}),protein&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',top:"10%",right:"0%",width:"30%",height:"50%"}],source:Images.Login_protein,resizeMode:'contain'}),bottom&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',bottom:0,width:"100%",height:"40%"}],source:Images.Login_bottom,resizeMode:'cover'}));};Frame_Frame.propTypes={logo:prop_types_default.a.bool,childs:prop_types_default.a.node};Frame_Frame.defaultProps={logo:true,protein:true,bottom:true,childs:null};/* harmony default export */ var Components_Frame = (Frame_Frame);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-elements/dist/index.js + 73 modules
var dist = __webpack_require__(47);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/CustomListItem.js
var CustomListItem_CustomListItem=function CustomListItem(_ref){var key=_ref.key,Title=_ref.Title,Subtitle=_ref.Subtitle,onPress=_ref.onPress,itemStyle=_ref.itemStyle;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Common=_useTheme.Common,Images=_useTheme.Images;return react_default.a.createElement(dist["c" /* ListItem */],{key:key,containerStyle:[Layout.fill,Common.border,{flexDirection:"column",marginBottom:0,marginTop:0,padding:0,borderRadius:0},itemStyle],button:true,onPress:onPress},react_default.a.createElement(dist["c" /* ListItem */].Content,null,react_default.a.createElement(dist["c" /* ListItem */].Title,{style:{height:30,alignContent:'center'}},Title),Subtitle&&react_default.a.createElement(dist["c" /* ListItem */].Subtitle,null,Subtitle)));};CustomListItem_CustomListItem.propTypes={key:prop_types_default.a.number,Title:prop_types_default.a.string,Subtitle:prop_types_default.a.string,onPress:prop_types_default.a.func,itemStyle:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.array])};CustomListItem_CustomListItem.defaultProps={key:0,Title:"",Subtitle:null,onPress:null,itemStyle:{}};/* harmony default export */ var Components_CustomListItem = (CustomListItem_CustomListItem);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Text/index.js
var Text = __webpack_require__(25);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__(31);
var TouchableOpacity_default = /*#__PURE__*/__webpack_require__.n(TouchableOpacity);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/ContentProp.js
var ContentProp_ContentProp=function ContentProp(_ref){var Columns=_ref.Columns,Datas=_ref.Datas,Actions=_ref.Actions,Title=_ref.Title,maxWidth=_ref.maxWidth,Frame=_ref.Frame;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images,Fonts=_useTheme.Fonts,Colors=_useTheme.Colors;return react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{maxWidth:maxWidth}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Frame?Common.border:{}]},Datas.map(function(data,row){var _Columns=[];var _loop=function _loop(column){Action=Actions[column]?Actions[column]:Actions[0];data=Datas[row][column];_Columns.push(react_default.a.createElement(TouchableOpacity_default.a,{style:[Layout.fill,Layout.fullWidth,Layout.colCenter,Common.border],onLongPress:function onLongPress(){if(Action){Action({data:data,row:row,column:column});}},key:"data_"+row+"_"+column},react_default.a.createElement(Text_default.a,null,data)));};for(var column=0;column<Columns;column++){var Action;var data;_loop(column);}return react_default.a.createElement(View_default.a,{key:"row"+row,style:[Layout.fill,Layout.row]},_Columns);})));};ContentProp_ContentProp.propTypes={Columns:prop_types_default.a.number,Datas:prop_types_default.a.arrayOf(prop_types_default.a.arrayOf(prop_types_default.a.string)),Actions:prop_types_default.a.arrayOf(prop_types_default.a.func),Title:prop_types_default.a.string,maxWidth:prop_types_default.a.number,Frame:prop_types_default.a.bool};ContentProp_ContentProp.defaultProps={Columns:2,Datas:{},Actions:[function(){}],Title:null,maxWidth:600,Frame:false};/* harmony default export */ var Components_ContentProp = (ContentProp_ContentProp);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Button.js
var Button_Button=function Button(_ref){var Texts=_ref.Texts,Icons=_ref.Icons,Actions=_ref.Actions,maxWidth=_ref.maxWidth,Frame=_ref.Frame,Title=_ref.Title;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images,Fonts=_useTheme.Fonts,Colors=_useTheme.Colors;return react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Frame?Common.border:{},Frame?{paddingVertical:10}:{},{maxWidth:maxWidth}]},Texts.map(function(text,index){var icon=Icons[index]?Icons[index]:null;var Action=Actions[index]?Actions[index]:Actions[0];return react_default.a.createElement(TouchableOpacity_default.a,{key:index,style:[Common.button.filledRounded,index>0?Gutters.smallTMargin:{},icon?{minHeight:60}:{minHeight:50},Title?{backgroundColor:Colors.AgriDarkblue,borderColor:Colors.AgriDarkblue}:{}],onPress:function onPress(){if(Action&&!Title){Action({index:index,text:text});}}},icon?react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall,Fonts.textReverse]},text),react_default.a.createElement(View_default.a,{style:[Layout.colCenter,Layout.quarterWidth,{height:50}]},react_default.a.createElement(Image_default.a,{style:Layout.fullSize,source:icon,resizeMode:'contain'}))):react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall,Fonts.textReverse]},text),Icons.length>0&&react_default.a.createElement(View_default.a,{style:[Layout.colCenter,Layout.quarterWidth,{height:50}]})));}));};Button_Button.propTypes={Texts:prop_types_default.a.arrayOf(prop_types_default.a.string),Icons:prop_types_default.a.arrayOf(prop_types_default.a.string),Actions:prop_types_default.a.arrayOf(prop_types_default.a.func),maxWidth:prop_types_default.a.number,Frame:prop_types_default.a.bool,Title:prop_types_default.a.bool};Button_Button.defaultProps={Texts:[],Icons:[],Actions:[],maxWidth:600,Frame:false,Title:false};/* harmony default export */ var Components_Button = (Button_Button);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Root.js
var Root = __webpack_require__(34);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/defines.js
var defines = __webpack_require__(33);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Utils.js
var Utils = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Weighing.js + 1 modules
var Firebase_Weighing = __webpack_require__(91);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Comment.js + 1 modules
var Comment = __webpack_require__(136);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Pen.js
var Firebase_Pen = __webpack_require__(109);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/OperationsPanel.js
var OperationsPanel_OperationsPanel=function OperationsPanel(_ref){var maxWidth=_ref.maxWidth,Type=_ref.Type;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Common=_useTheme.Common,Images=_useTheme.Images;var _useState=Object(react["useState"])(0),_useState2=slicedToArray_default()(_useState,2),_View=_useState2[0],setView=_useState2[1];var dispatch=Object(es["b" /* useDispatch */])();var activeData=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData?state.firebase.activeData:undefined;});var penDatas=Object(es["c" /* useSelector */])(function(state){return activeData&&activeData.pen&&state.firebase.pens&&state.firebase.pens[activeData.pen]?state.firebase.pens[activeData.pen]:undefined;});var weightCalcs=Object(es["c" /* useSelector */])(function(state){return activeData&&state.firebase.activeData&&state.firebase.activeData.weightCalc?state.firebase.activeData.weightCalc:undefined;});switch(Type){case 1:break;case 2:return react_default.a.createElement(View_default.a,{style:[Common.border,Layout.fullWidth,{maxWidth:maxWidth}]},react_default.a.createElement(Components_Button,{Texts:[t('Operations.Weight')],Icons:[],Actions:[function(ele){var _navigationRef$curren;switch(ele.index){case 0:dispatch(Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].SECTIONS,Data:null}));(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:'WeighingOperations'});break;}}]}),react_default.a.createElement(View_default.a,{style:[{minHeight:20}]}),react_default.a.createElement(Components_Button,{Texts:[t('Operations.AddPen'),t('Operations.RemovePen')],Icons:[],Actions:[function(ele){switch(ele.index){case 0:break;case 1:break;}}]}));break;case 3:var Action=1;var _CodeList=false;var _Quantity=true;var _Weight=true;var _Date=true;switch(_View){case defines["c" /* Operations */].TREATMENT:_Weight=false;case defines["c" /* Operations */].MOVE:_CodeList=false;case defines["c" /* Operations */].SOLD:Action=-1;case defines["c" /* Operations */].ADD:return react_default.a.createElement(Components_Comment_Module,{maxWidth:maxWidth,Title:t('Operations.OperationTitle'),HaveQuantity:_Quantity,HaveWeight:_Weight,HaveCodeList:_CodeList,HaveDate:_Date,onDone:function onDone(res){if(res.res&&res.data){var _DateTime=res.date;var action=_View;action=action.charAt(0).toUpperCase()+action.slice(1);var quantity=parseInt(res.quantity);if(isNaN(quantity))quantity=1;Action=Action*quantity;var PenCount=penDatas&&penDatas.datas&&penDatas.datas.count?penDatas.datas.count:0;var weight;if(res.weight&&res.weight!==""){weight=Math.round(parseFloat(res.weight)*quantity*100)/100;}if(weight){if(_View===defines["c" /* Operations */].ADD){var quant=quantity;var weight2=weight;if(weightCalcs&&weightCalcs.PenWeight){weight2+=weightCalcs.PenWeight*PenCount;quant+=PenCount;}weight2=Math.round(parseFloat(weight2)*1000)/1000;console.log(weight2,quant,PenCount,weightCalcs.PenWeight);dispatch(Firebase_Weighing["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Weight:weight2,Quantity:quant,Date:_DateTime}));}}if(_View===defines["c" /* Operations */].MOVE){dispatch(Comment["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Action:action,Data:res.data,Date:res.date,Quantity:res.quantity,Weight:res.weight,Code:res.code}));}else{dispatch(Comment["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Action:action,Data:res.data,Date:res.date,Quantity:res.quantity,Weight:res.weight}));}if(_View!==defines["c" /* Operations */].TREATMENT){var newQ=PenCount+Action;dispatch(Firebase_Pen["a" /* default */].update({FarmId:activeData.farm,PenId:activeData.pen,Pen:{datas:{count:newQ}}}));}if(weight){if(_View===defines["c" /* Operations */].MOVE||_View===defines["c" /* Operations */].SOLD){var newQ=PenCount-quantity;if(newQ>0){var weight2=weight;if(weightCalcs&&weightCalcs.PenWeight){weight2+=weightCalcs.PenWeight*newQ;}weight2=Math.round(parseFloat(weight2)*1000)/1000;dispatch(Firebase_Weighing["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Weight:weight2,Quantity:PenCount,Date:_DateTime}));}else{dispatch(Firebase_Weighing["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Weight:weight,Quantity:1,Date:_DateTime}));}}}}setView(0);}});case defines["c" /* Operations */].NOTE:return react_default.a.createElement(Components_Comment_Module,{maxWidth:maxWidth,Title:t('Operations.NoteTitle'),HaveDate:true,onDone:function onDone(res){if(res.res&&res.data){var action=_View;action=action.charAt(0).toUpperCase()+action.slice(1);dispatch(Comment["a" /* default */].create({FarmId:activeData.farm,PenId:activeData.pen,Action:action,Data:res.data,Date:res.date}));}setView(0);}});default:return react_default.a.createElement(View_default.a,{style:[Common.border,Layout.fullWidth,{maxWidth:maxWidth,paddingVertical:10,paddingHorizontal:5}]},react_default.a.createElement(Components_Button,{Texts:[t('Operations.Weight'),t('Operations.Note')],Icons:[],Actions:[function(ele){switch(ele.index){case 0:break;case 1:setView(defines["c" /* Operations */].NOTE);break;}}]}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_Button,{Texts:[t('Operations.AddPig'),t('Operations.MovePig'),t('Operations.Treatment'),t('Operations.SoldPig')],Icons:[],Actions:[function(ele){switch(ele.index){case 0:setView(defines["c" /* Operations */].ADD);break;case 1:setView(defines["c" /* Operations */].MOVE);break;case 2:setView(defines["c" /* Operations */].TREATMENT);break;case 3:setView(defines["c" /* Operations */].SOLD);break;}}]}));}break;}};OperationsPanel_OperationsPanel.propTypes={maxWidth:prop_types_default.a.number,Type:prop_types_default.a.oneOf([1,2,3])};OperationsPanel_OperationsPanel.defaultProps={maxWidth:600,Type:2};/* harmony default export */ var Components_OperationsPanel = (OperationsPanel_OperationsPanel);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Picker/index.js
var Picker = __webpack_require__(55);
var Picker_default = /*#__PURE__*/__webpack_require__.n(Picker);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Comment_Module.js
var Comment_Module_Comment_Module=function Comment_Module(_ref){var maxWidth=_ref.maxWidth,Title=_ref.Title,HaveDate=_ref.HaveDate,HaveCodeList=_ref.HaveCodeList,HaveQuantity=_ref.HaveQuantity,HaveWeight=_ref.HaveWeight,onDone=_ref.onDone;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Common=_useTheme.Common,Fonts=_useTheme.Fonts,Colors=_useTheme.Colors;var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),InputText=_useState2[0],setInputText=_useState2[1];var _useState3=Object(react["useState"])("1"),_useState4=slicedToArray_default()(_useState3,2),QuantityText=_useState4[0],setQuantityText=_useState4[1];var _useState5=Object(react["useState"])(""),_useState6=slicedToArray_default()(_useState5,2),WeightText=_useState6[0],setWeightText=_useState6[1];var _useState7=Object(react["useState"])(0),_useState8=slicedToArray_default()(_useState7,2),CodeListItem=_useState8[0],setCodeListItem=_useState8[1];var _useState9=Object(react["useState"])(new Date(Date.now())),_useState10=slicedToArray_default()(_useState9,2),DateSet=_useState10[0],setDateSet=_useState10[1];return react_default.a.createElement(View_default.a,{style:[Common.border,Layout.fullWidth,{maxWidth:maxWidth,paddingVertical:10,paddingHorizontal:5}]},react_default.a.createElement(View_default.a,{style:Comment_Module_styles.textAreaContainer},react_default.a.createElement(View_default.a,{style:Object(Root["a" /* isApp */])()?[{}]:[Layout.row,{justifyContent:'space-between'}]},(Title&&Title!==""||HaveDate||HaveCodeList)&&react_default.a.createElement(View_default.a,{style:[Layout.column,{marginBottom:5}]},Title&&Title!==""&&react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,{height:48,color:Colors.input}]},Title),HaveDate&&react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{alignItems:'flex-start',marginBottom:20}]},react_default.a.createElement(Components_Datetime_Picker,{Selected:DateSet,onValueChange:function onValueChange(date){setDateSet(date);}})),HaveCodeList&&react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:CodeListItem,style:[Layout.fullWidth,{height:30}],onValueChange:function onValueChange(itemValue,itemIndex){setCodeListItem(itemValue);}},react_default.a.createElement(Picker_default.a.Item,{label:"---",value:0}),react_default.a.createElement(Picker_default.a.Item,{label:"Relocation",value:1}),react_default.a.createElement(Picker_default.a.Item,{label:"Hernia",value:2}),react_default.a.createElement(Picker_default.a.Item,{label:"Diarrhea",value:3}))),(HaveQuantity||HaveWeight)&&react_default.a.createElement(View_default.a,{style:[Layout.column,{marginBottom:5}]},HaveQuantity&&react_default.a.createElement(View_default.a,{style:[Layout.rowCenter,{marginBottom:5}]},react_default.a.createElement(Text_default.a,{style:[Fonts.normal,{width:75,color:Colors.input,textAlignVertical:'center'}]},"Quantity:"),react_default.a.createElement(dist["b" /* Input */],{style:[Comment_Module_styles.textArea,{minHeight:35,height:35,width:55,paddingBottom:-10}],containerStyle:[{minHeight:35,height:35,width:55,paddingHorizontal:0}],inputStyle:{paddingHorizontal:5},multiline:false,onChangeText:function onChangeText(text){if(text===""||!isNaN(text))setQuantityText(text);},value:QuantityText})),HaveWeight&&react_default.a.createElement(View_default.a,{style:[Layout.rowCenter]},react_default.a.createElement(Text_default.a,{style:[Fonts.normal,{width:75,color:Colors.input,textAlignVertical:'center'}]},"Average Weight:"),react_default.a.createElement(dist["b" /* Input */],{style:[Comment_Module_styles.textArea,{minHeight:35,height:35,width:55,paddingBottom:-10}],containerStyle:[{minHeight:35,height:35,width:55,paddingHorizontal:0}],inputStyle:{paddingHorizontal:5},multiline:false,onChangeText:function onChangeText(text){if(text===""||!isNaN(text))setWeightText(text);},value:WeightText})))),react_default.a.createElement(dist["b" /* Input */],{style:[Comment_Module_styles.textAreaContainer,Comment_Module_styles.textArea],underlineColorAndroid:"transparent",placeholder:t('CommentModule.NotePlaceholder'),placeholderTextColor:"gray",numberOfLines:10,multiline:true,onChangeText:function onChangeText(text){return setInputText(text);},value:InputText})),react_default.a.createElement(Components_Button,{Texts:[t('ActionButtons.Done'),t('ActionButtons.Cancel')],Icons:[],Actions:[function(ele){if(onDone){if(ele.index===1)onDone({res:false,data:InputText});else{onDone({res:true,data:InputText,quantity:QuantityText,weight:WeightText,code:CodeListItem,date:DateSet.getTime()});}}}]}));};var Comment_Module_styles=StyleSheet_default.a.create({textAreaContainer:{borderColor:'#a6a6a6',borderWidth:1,padding:5,marginBottom:10},textArea:{height:150,justifyContent:"flex-start",borderColor:"black",borderWidth:0.5}});Comment_Module_Comment_Module.propTypes={maxWidth:prop_types_default.a.number,Title:prop_types_default.a.string,HaveDate:prop_types_default.a.bool,HaveQuantity:prop_types_default.a.bool,HaveWeight:prop_types_default.a.bool,HaveCodeList:prop_types_default.a.bool};Comment_Module_Comment_Module.defaultProps={maxWidth:600,Title:"",HaveDate:false,HaveQuantity:false,HaveWeight:false,HaveCodeList:false};/* harmony default export */ var Components_Comment_Module = (Comment_Module_Comment_Module);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Datetime_Picker.js
var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];var Datetime_Picker_Datetime_Picker=function Datetime_Picker(_ref){var Selected=_ref.Selected,_onValueChange=_ref.onValueChange;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Images=_useTheme.Images;var year,month,day;year=Selected.getFullYear();month=Selected.getMonth();day=Selected.getDate();var Today=new Date();var _year=Today.getFullYear();var YearItems=[];for(var index=_year+25;index>_year-25;index--){var val=String(index);YearItems.push(react_default.a.createElement(Picker_default.a.Item,{key:"Year_"+index,value:index,label:val}));}var MonthItems=[];var _month=Today.getMonth();for(var _index=0;_index<monthNames.length;_index++){var val=String(_index);MonthItems.push(react_default.a.createElement(Picker_default.a.Item,{key:"Month_"+_index,value:_index,label:monthNames[_index]}));}var DayItems=[];var _days=new Date(_year,_month+1,0).getDate();for(var _index2=1;_index2<=_days+1;_index2++){var val=String(_index2);DayItems.push(react_default.a.createElement(Picker_default.a.Item,{key:"Day_"+_index2,value:_index2,label:val}));}return react_default.a.createElement(View_default.a,{style:[Layout.row,{marginBottom:-10}]},react_default.a.createElement(Picker_default.a,{selectedValue:year,style:[{minWidth:101,marginRight:5}],onValueChange:function onValueChange(_year){year=_year;_onValueChange(new Date(_year,month,day));}},YearItems),react_default.a.createElement(Picker_default.a,{selectedValue:month,style:[{minWidth:110,marginRight:5}],onValueChange:function onValueChange(_month){month=_month;_onValueChange(new Date(year,_month,day));}},MonthItems),react_default.a.createElement(Picker_default.a,{selectedValue:day,style:[{minWidth:83}],onValueChange:function onValueChange(_day){_days=parseInt(_day);_onValueChange(new Date(year,month,_days));}},DayItems));};Datetime_Picker_Datetime_Picker.propTypes={Selected:prop_types_default.a.instanceOf(Date),year:prop_types_default.a.number,month:prop_types_default.a.number,day:prop_types_default.a.number,onValueChange:prop_types_default.a.func};Datetime_Picker_Datetime_Picker.defaultProps={Selected:new Date(),onValueChange:function onValueChange(){}};/* harmony default export */ var Components_Datetime_Picker = (Datetime_Picker_Datetime_Picker);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Utils.js
var Firebase_Utils = __webpack_require__(132);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-create-container/es/create-container.js + 11 modules
var create_container = __webpack_require__(1016);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-chart/es/victory-chart.js + 5 modules
var victory_chart = __webpack_require__(1018);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-tooltip/es/victory-tooltip.js + 1 modules
var victory_tooltip = __webpack_require__(1024);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-axis/es/victory-axis.js + 1 modules
var victory_axis = __webpack_require__(1026);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-core/es/victory-theme/victory-theme.js + 2 modules
var victory_theme = __webpack_require__(1020);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-group/es/victory-group.js + 1 modules
var victory_group = __webpack_require__(1027);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-line/es/victory-line.js + 55 modules
var victory_line = __webpack_require__(1014);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-scatter/es/victory-scatter.js + 3 modules
var victory_scatter = __webpack_require__(1019);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Batch.js + 1 modules
var Batch = __webpack_require__(100);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/CurveViewer.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var VictoryZoomVoronoiContainer=Object(create_container["a" /* createContainer */])("zoom","voronoi");function setWeightData(_x,_x2){return _setWeightData.apply(this,arguments);}function _setWeightData(){_setWeightData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(DataSets,WeighningsDatas){var test,newDataSet;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:test=CalcWeighningsSeries(DataSets,WeighningsDatas);console.log(test);newDataSet=Array.from({length:100},function(u,x){return{x:x,y:100+x+Math.floor(Math.random()*11)};});return _context2.abrupt("return",newDataSet);case 4:case"end":return _context2.stop();}}},_callee2);}));return _setWeightData.apply(this,arguments);}var CurveViewer_CurveViewer=function CurveViewer(_ref){var maxHeight=_ref.maxHeight,DisplayPoints=_ref.DisplayPoints,WeighningsDatas=_ref.WeighningsDatas,yShrink=_ref.yShrink;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Common=_useTheme.Common,Images=_useTheme.Images;var _useState=Object(react["useState"])([]),_useState2=slicedToArray_default()(_useState,2),DataSets=_useState2[0],setDataSets=_useState2[1];var _useState3=Object(react["useState"])([]),_useState4=slicedToArray_default()(_useState3,2),Labels=_useState4[0],setLabels=_useState4[1];Object(react["useEffect"])(function(){if(WeighningsDatas&&WeighningsDatas.Weights){CalcWeighningsSeries(DataSets,WeighningsDatas).then(function(_ref2){var DataSets=_ref2.DataSets,Legends=_ref2.Legends;setDataSets(function(oldDataSets){var Data=toConsumableArray_default()(oldDataSets);Data["Weights"]=DataSets;return Data;});});}},[WeighningsDatas]);Object(react["useEffect"])(asyncToGenerator_default()(regenerator_default.a.mark(function _callee(){var _DataSets,_Legends,TemplateData,StartDate,deactive,index;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_DataSets=[];_Legends=[];if(!(DisplayPoints&&DisplayPoints.data)){_context.next=12;break;}DisplayPoints.data.forEach(function(e,i){_Legends.push(i);});TemplateData=[];StartDate=new Date(Date.now());_context.next=8;return Promise.all(Object.entries(DisplayPoints.data).map(function(_ref4){var _ref5=slicedToArray_default()(_ref4,2),_index=_ref5[0],Data=_ref5[1];var index=Object(Firebase_Utils["a" /* AccumulateTime */])(StartDate,"Days",parseInt(_index)+1);if(Data){_Legends.push(index);TemplateData.push({x:index.getTime(),y:Data});}}));case 8:deactive=false;if(DataSets){index=DataSets.findIndex(function(i){return i.name===DisplayPoints.name;});if(index!==-1&&DataSets[index].deactivate)deactive=true;}_DataSets.push({type:"Line",name:DisplayPoints.name,color:"#000",data:TemplateData,deactive:deactive});_Legends.push({name:DisplayPoints.name,type:"Display",symbol:{fill:"#000"}});case 12:setDataSets(function(oldDataSets){var Data=toConsumableArray_default()(oldDataSets);Data["Display"]=_DataSets;return Data;});case 13:case"end":return _context.stop();}}},_callee);})),[DisplayPoints]);var _useState5=Object(react["useState"])({x:[0,1],y:[0,1]}),_useState6=slicedToArray_default()(_useState5,2),entireDomain=_useState6[0],setentireDomain=_useState6[1];var _useState7=Object(react["useState"])(entireDomain.x),_useState8=slicedToArray_default()(_useState7,2),zoomedXDomain=_useState8[0],setzoomedXDomain=_useState8[1];var _useState9=Object(react["useState"])([]),_useState10=slicedToArray_default()(_useState9,2),renderedData=_useState10[0],setrenderedData=_useState10[1];var maxPoints=365;var GetEntireDomain=function GetEntireDomain(){var MinMax={y:[undefined,1],x:[undefined,1]};Object.entries(DataSets).forEach(function(_ref6){var _ref7=slicedToArray_default()(_ref6,2),Id=_ref7[0],data=_ref7[1];var Serie=[];Object.entries(DataSets[Id]).forEach(function(_ref8){var _ref9=slicedToArray_default()(_ref8,2),Id2=_ref9[0],datas=_ref9[1];var data=datas.data;if(data.length>0){var x=[data[0].x,_.last(data).x];var y=[_.minBy(data,function(d){return d.y;}).y,_.maxBy(data,function(d){return d.y;}).y];if(MinMax.x[0]===undefined||x[0]<MinMax.x[0])MinMax.x[0]=x[0];if(x[1]>MinMax.x[1])MinMax.x[1]=x[1];if(MinMax.y[0]===undefined||y[0]<MinMax.y[0])MinMax.y[0]=y[0];if(y[1]>MinMax.y[1])MinMax.y[1]=y[1];}});});if(typeof MinMax.y[0]==="string")MinMax.y[0]=parseFloat(MinMax.y[0]);if(typeof MinMax.y[1]==="string")MinMax.y[1]=parseFloat(MinMax.y[1]);if(MinMax.y[0]===undefined)MinMax.y[0]=0;if(MinMax.x[0]===undefined)MinMax.x[0]=0;if(MinMax.y[0]===MinMax.y[1])MinMax.y[1]=MinMax.y[0]+1;if(MinMax.x[0]===MinMax.x[1])MinMax.x[1]=MinMax.x[0]+1;setentireDomain(MinMax);if(zoomedXDomain[0]<MinMax.x[0])setzoomedXDomain(MinMax.x);};var GetRenderData=function GetRenderData(){var _renderedData=toConsumableArray_default()(renderedData);Object.entries(DataSets).forEach(function(_ref10){var _ref11=slicedToArray_default()(_ref10,2),Id=_ref11[0],data=_ref11[1];var Serie=[];Object.entries(DataSets[Id]).forEach(function(_ref12){var _ref13=slicedToArray_default()(_ref12,2),Id2=_ref13[0],datas=_ref13[1];if(datas.data.length>0){var filtered=[];if(datas.type==="Line"){var last=null;datas.data.forEach(function(data){if(data.x>=zoomedXDomain[0]){if(data.x<=zoomedXDomain[1]){if(filtered.length===0&&last!==null)filtered.push(last);filtered.push(data);}else if(last&&last.x<=zoomedXDomain[1])filtered.push(data);}last=data;});}else{filtered=element.data.filter(function(d){return d.x>=zoomedXDomain[0]&&d.x<=zoomedXDomain[1];});}if(filtered.length>maxPoints){var k=Math.ceil(filtered.length/maxPoints);return filtered.filter(function(d,i){return i!==0&&i!==filtered.length-1&&i%k===0;});}Serie[Id2]=_objectSpread(_objectSpread({},datas),{},{data:filtered});}});_renderedData[Id]=Serie;});setrenderedData(_renderedData);};Object(react["useEffect"])(function(){GetEntireDomain();GetRenderData();},[DataSets]);Object(react["useEffect"])(function(){GetRenderData();},[zoomedXDomain]);var Legends=[zoomedXDomain[0]];while(Legends[Legends.length-1]<zoomedXDomain[1]){Legends.push(Legends[Legends.length-1]+3600000);}var LastLegend="";var minY=yShrink?entireDomain.y[0]/entireDomain.y[1]:0;return react_default.a.createElement(View_default.a,{style:[{width:'100%',maxHeight:maxHeight,alignItems:'center'}]},DataSets&&Object.keys(DataSets).length>0&&react_default.a.createElement(View_default.a,{style:[{width:'100%',maxHeight:maxHeight-50,marginVertical:5,marginHorizontal:5,padding:2.5}]},react_default.a.createElement(victory_chart["a" /* default */],{animate:{duration:1000},scale:{x:"time"},padding:{top:10,bottom:15,right:20,left:30},domain:{x:entireDomain.x,y:[minY,1]},containerComponent:react_default.a.createElement(VictoryZoomVoronoiContainer,{voronoiDimension:"x",zoomDimension:"x",onZoomDomainChange:function onZoomDomainChange(domain){setzoomedXDomain(domain.x);},labelComponent:react_default.a.createElement(victory_tooltip["a" /* default */],{cornerRadius:0,centerOffset:{y:-30},flyoutStyle:{fill:"white"},style:{fontSize:8},constrainToVisibleArea:true}),labels:function labels(_ref14){var datum=_ref14.datum;if(datum.childName==="none")return;var name=datum.childName;if(datum.prefix)name=datum.prefix+datum.childName;var format=t('GraphViewer.X_DateFormat',{date:new Date(datum.x)});return name+' y: '+datum.y+"\n"+format;}})},react_default.a.createElement(victory_axis["a" /* default */],{crossAxis:false,scale:{x:"time"},tickCount:8,minDomain:{x:entireDomain.x[0],y:entireDomain.y[0]},tickFormat:function tickFormat(tick){var format=t('GraphViewer.X_DateFormat',{date:new Date(tick)});if(LastLegend===format)return;else LastLegend=format;return format;},theme:victory_theme["a" /* default */].material,standalone:false,fixLabelOverlap:true,tickValues:Legends,style:{tickLabels:{fontSize:8,padding:2.5},grid:{stroke:"#818e99",strokeWidth:0.5}}}),react_default.a.createElement(victory_axis["a" /* default */],{dependentAxis:true,crossAxis:false,orientation:"left",maxDomain:{y:1},tickValues:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],tickFormat:function tickFormat(tick){var _Tick=Math.round(tick*entireDomain.y[1]*100)/100;return _Tick;},theme:victory_theme["a" /* default */].material,standalone:false,style:{tickLabels:{fontSize:8,padding:2.5},grid:{stroke:"#818e99",strokeWidth:0.5}}}),entireDomain.y2&&react_default.a.createElement(victory_axis["a" /* default */],{dependentAxis:true,crossAxis:false,orientation:"right",tickValues:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],tickFormat:function tickFormat(t){return Math.round(t*entireDomain.y2*100)/100;},theme:victory_theme["a" /* default */].material,standalone:false,style:{tickLabels:{fontSize:8,padding:2.5},grid:{stroke:"#818e99",strokeWidth:0.5}}}),renderedData["Display"]&&renderedData["Display"].map(function(Serie,i){if(Serie.type==="Line"&&!Serie.deactivate){return react_default.a.createElement(victory_group["a" /* default */],{key:"Line_"+Serie.name,data:Serie.data,y:function y(datum){var num=datum.y;return Math.round(num/entireDomain.y[1]*100)/100;}},react_default.a.createElement(victory_line["a" /* default */],{style:{data:{stroke:Serie.color,strokeWidth:function strokeWidth(_ref15){var active=_ref15.active;return active?2:2;}}},name:Serie.name}),react_default.a.createElement(victory_scatter["a" /* default */],{size:2,style:{data:{stroke:"#000",strokeWidth:0.5,fill:Serie.color}},name:"none"}));}}),renderedData["Weights"]&&renderedData["Weights"].map(function(Serie,i){if(Serie.type==="Line"&&!Serie.deactivate){return react_default.a.createElement(victory_group["a" /* default */],{key:"Line_"+Serie.name,data:Serie.data,y:function y(datum){var num=datum.y;return Math.round(num/entireDomain.y[1]*100)/100;}},react_default.a.createElement(victory_line["a" /* default */],{style:{data:{stroke:Serie.color,strokeWidth:function strokeWidth(_ref16){var active=_ref16.active;return active?2:2;}}},name:Serie.name}),react_default.a.createElement(victory_scatter["a" /* default */],{size:2,style:{data:{stroke:"#000",strokeWidth:0.5,fill:Serie.color}},name:"none"}));}}))));};CurveViewer_CurveViewer.propTypes={maxHeight:prop_types_default.a.number,DisplayPoints:prop_types_default.a.object,WeighningsDatas:prop_types_default.a.object,yShrink:prop_types_default.a.bool};CurveViewer_CurveViewer.defaultProps={maxHeight:650,DisplayPoints:null,WeighningsDatas:null,yShrink:false};/* harmony default export */ var Components_CurveViewer = (CurveViewer_CurveViewer);function getRandomNumber(low,high){var r=Math.floor(Math.random()*(high-low+1))+low;return r;}function getRandomColor(){var red_range=[15,230];var green_range=[15,230];var blue_range=[15,230];var a_range=[0.3,1];var red=getRandomNumber(red_range[0],red_range[1]);var green=getRandomNumber(green_range[0],green_range[1]);var blue=getRandomNumber(blue_range[0],blue_range[1]);var alpha=getRandomNumber(a_range[0]*100,a_range[1]*100)/100;return{r:red,g:green,b:blue,a:alpha,rgbaValue:'rgba('+red+','+green+','+blue+','+alpha+')'};}function CalcWeighningsSeries(_x3,_x4){return _CalcWeighningsSeries.apply(this,arguments);}function _CalcWeighningsSeries(){_CalcWeighningsSeries=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(Series,WeighningsDatas){var DataSets,Legends,_StartDate,StartDate,EndDate,TempCurve,TemplateData,deactive,index,DoPredict,TempEndDate;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:DataSets=[];Legends=[];if(!(WeighningsDatas&&WeighningsDatas.Batch&&WeighningsDatas.Batch.pens&&WeighningsDatas.Weights&&Object.keys(WeighningsDatas.Weights).length>0)){_context4.next=20;break;}_StartDate=new Date(WeighningsDatas.Batch.time);StartDate=new Date(WeighningsDatas.Batch.time).getTime();EndDate=new Date(_StartDate.setDate(_StartDate.getDate()+7*8));if(!WeighningsDatas.TempCurve){_context4.next=20;break;}TempCurve=WeighningsDatas.TempCurve;TemplateData=[];_context4.next=11;return Object.entries(TempCurve.data).forEach(function(_ref17){var _ref18=slicedToArray_default()(_ref17,2),_index=_ref18[0],Data=_ref18[1];var index=parseInt(_index);if(Data){TemplateData.push({x:new Date(Object(Firebase_Utils["a" /* AccumulateTime */])(new Date(StartDate),TempCurve.periode,index)).getTime(),y:Data});}});case 11:if(TemplateData.length>0){EndDate=TemplateData[TemplateData.length-1].x;}deactive=false;if(Series){index=Series.findIndex(function(i){return i.name===WeighningsDatas.Batch.gcurve;});if(index!==-1&&Series[index].deactivate)deactive=true;}DataSets.push({type:"Line",name:WeighningsDatas.Batch.gcurve,color:"#000",data:TemplateData,deactive:deactive});Legends.push({name:WeighningsDatas.Batch.gcurve,type:"Weights",symbol:{fill:"#000"}});DoPredict=WeighningsDatas.Batch&&(!WeighningsDatas.Batch.state||WeighningsDatas.Batch.state!==defines["b" /* DataStates */].CLOSED)?true:false;TempEndDate=EndDate;_context4.next=20;return Object.entries(WeighningsDatas.Batch.pens).reverse().forEach(function(){var _ref19=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(_ref20){var _ref21,PenId,BatchPen,DataSet,PenWeighings,Predict,color,deactive,index;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_ref21=slicedToArray_default()(_ref20,2),PenId=_ref21[0],BatchPen=_ref21[1];DataSet=[];if(!(WeighningsDatas.Weights[PenId]||WeighningsDatas.Batch.state&&WeighningsDatas.Batch.state===defines["b" /* DataStates */].CLOSED)){_context3.next=12;break;}PenWeighings=WeighningsDatas.Weights[PenId];if(Batch["a" /* default */].state&&Batch["a" /* default */].state==="Closed"){PenWeighings=WeighningsDatas.Batch.closed.weighings[Pen];}if(!(PenWeighings&&Object.keys(PenWeighings).length>=1)){_context3.next=12;break;}Object.entries(PenWeighings).sort(function(_ref22,_ref23){var _ref24=slicedToArray_default()(_ref22,2),a=_ref24[1];var _ref25=slicedToArray_default()(_ref23,2),b=_ref25[1];return a.time-b.time;}).forEach(function(_ref26){var _ref27=slicedToArray_default()(_ref26,2),Id=_ref27[0],WeighingData=_ref27[1];if(WeighingData.weight&&!WeighingData.deleted&&!WeighingData.edited){if((!StartDate||WeighingData.time>=StartDate)&&(!EndDate||WeighingData.time<=EndDate)){if((!BatchPen.startdate||WeighingData.time>=BatchPen.startdate)&&(!BatchPen.enddate||WeighingData.time<=BatchPen.enddate)){var weight=WeighingData.weight;if(WeighingData.count){weight=Math.round(weight/WeighingData.count*100)/100;}DataSet.push({x:WeighingData.time,y:weight});if(!EndDate&&WeighingData.time>EndDate){EndDate=WeighingData.time;}}}}});if(!DoPredict){_context3.next=12;break;}_context3.next=10;return Object(Firebase_Utils["b" /* CurvePredict */])({Weighings:PenWeighings,Batch:WeighningsDatas.Batch,Curve:WeighningsDatas.TempCurve});case 10:Predict=_context3.sent;if(Predict&&Predict.data){Predict.data.forEach(function(element,index){var Time=Predict.time[index];DataSet.push({x:Time,y:element,predict:true});});}case 12:if(DataSet.length>0){color=getRandomColor().rgbaValue;deactive=false;if(Series){index=Series.findIndex(function(i){return i.name===PenId;});if(index!==-1&&Series[index].deactivate)deactive=true;}DataSets.push({type:"Line",name:PenId,color:color,data:DataSet,deactive:deactive});Legends.push({name:PenId+'',type:"Weights",symbol:{fill:color}});}if(TempEndDate>EndDate){EndDate=TempEndDate;}case 14:case"end":return _context3.stop();}}},_callee3);}));return function(_x5){return _ref19.apply(this,arguments);};}());case 20:return _context4.abrupt("return",{DataSets:DataSets,Legends:Legends});case 21:case"end":return _context4.stop();}}},_callee4);}));return _CalcWeighningsSeries.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/index.js

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Startup/Index.js
var Index_IndexStartupContainer=function IndexStartupContainer(){var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Fonts=_useTheme.Fonts;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var dispatch=Object(es["b" /* useDispatch */])();Object(react["useEffect"])(function(){dispatch(Init["a" /* default */].action());},[dispatch]);return react_default.a.createElement(Components_LoadingSplash,null);};/* harmony default export */ var Index = (Index_IndexStartupContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/ChangeTheme.js
var ChangeTheme = __webpack_require__(157);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Agrisys/Index.js
var Index_IndexAgrisysContainer=function IndexAgrisysContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var changeTheme=function changeTheme(_ref){var theme=_ref.theme,darkMode=_ref.darkMode;dispatch(ChangeTheme["a" /* default */].action({theme:theme,darkMode:darkMode}));};Object(react["useEffect"])(function(){},[]);return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullWidth,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,{protein:false,logo:false}),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colCenter,Gutters.largeBMargin]},react_default.a.createElement(Components_Brand,null),react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},t('AgrisysFront.Welcome'))),react_default.a.createElement(View_default.a,{style:[Layout.halvWidth,Gutters.hugeTMargin,{maxWidth:400}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysFront.Menu1'),t('AgrisysFront.Menu2')],Icons:[Images.Haxa_globe],Actions:[function(ele){var _navigationRef$curren;switch(ele.index){case 0:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});break;case 1:break;case 2:break;}}]})));};/* harmony default export */ var Agrisys_Index = (Index_IndexAgrisysContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/ActivityIndicator/index.js
var ActivityIndicator = __webpack_require__(53);
var ActivityIndicator_default = /*#__PURE__*/__webpack_require__.n(ActivityIndicator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/User.js + 1 modules
var Firebase_User = __webpack_require__(72);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/UserLogin.js
var _this=undefined;var UserLogin_LoginContainer=function LoginContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Email=_useState2[0],setEmail=_useState2[1];var _useState3=Object(react["useState"])(""),_useState4=slicedToArray_default()(_useState3,2),Pass=_useState4[0],setPass=_useState4[1];var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var signin=function signin(_Email,_Pass){dispatch(Firebase_User["a" /* default */].signin({Email:_Email,Pass:_Pass}));};var resetPass=function resetPass(_Email){dispatch(Firebase_User["a" /* default */].reset({Email:_Email}));};var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,null),firebaseError&&firebaseError.message&&react_default.a.createElement(Text_default.a,{style:[{color:Colors.error}]},firebaseError.message),react_default.a.createElement(View_default.a,{style:[Common.border,Layout.midWidth,Layout.colCenter,Gutters.regularBMargin,Gutters.smallVPadding,{backgroundColor:"white",maxWidth:650}]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullWidth,Gutters.smallVMargin,{maxWidth:600}]},react_default.a.createElement(dist["b" /* Input */],{label:t('AgrisysConnect.label1'),onChangeText:function onChangeText(text){return setEmail(text);},editable:!firebaseLoading,keyboardType:'default',value:Email,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]}),react_default.a.createElement(dist["b" /* Input */],{label:t('AgrisysConnect.label2'),onChangeText:function onChangeText(text){return setPass(text);},editable:!firebaseLoading,keyboardType:'default',value:Pass,selectTextOnFocus:true,secureTextEntry:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysConnect.submit_btn')],Icons:[Images.User],Actions:[function(ele){if(Email&&Email!==""){if(Email==="CLEAR"){_this.props.clearDataMem();}else if(Pass&&Pass!==""){signin(Email,Pass);}}else{dispatch(Utils["c" /* ErrorHandler */].action({message:"Please provide an Email"}));}}]})),react_default.a.createElement(View_default.a,{style:[Layout.halvWidth,{maxWidth:450}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysConnect.reset'),t('AgrisysConnect.create')],Icons:[],Actions:[function(ele){var _navigationRef$curren;switch(ele.index){case 0:if(Email&&Email!==""){resetPass(Email);}else{dispatch(Utils["c" /* ErrorHandler */].action({message:"Please provide an Email"}));}break;case 1:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'CreateUser'});break;}}]})));};/* harmony default export */ var UserLogin = (UserLogin_LoginContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/Index.js
var Index_PanelsSorter=function PanelsSorter(userType){switch(userType){case defines["d" /* UserStates */].ADMIN:case defines["d" /* UserStates */].TECH:return"AdminPanel";case defines["d" /* UserStates */].OWNER:return"ConsysPanel";case defines["d" /* UserStates */].FREE:return"UserPanel";case defines["d" /* UserStates */].STARTER:return"CreateUserData";default:return"LoginUser";}};var Index_IndexAuthContainer=function IndexAuthContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout;var _useState=Object(react["useState"])(false),_useState2=slicedToArray_default()(_useState,2),isAuthLoaded=_useState2[0],setIsAuthLoaded=_useState2[1];var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var _useState3=Object(react["useState"])(false),_useState4=slicedToArray_default()(_useState3,2),isUserLoaded=_useState4[0],setIsUserLoaded=_useState4[1];var User=Object(es["c" /* useSelector */])(function(state){return state.firebase.user;});var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){var _navigationRef$curren,_navigationRef$curren2,_navigationRef$curren3,_navigationRef$curren4;if(!User||!User.state)setIsUserLoaded('Login');else{if(User.state===defines["d" /* UserStates */].STARTER&&!User.emailVerified){setIsUserLoaded('Verify');}else{switch(User.state){case defines["d" /* UserStates */].ADMIN:case defines["d" /* UserStates */].TECH:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Admin',{screen:'Home'});break;case defines["d" /* UserStates */].OWNER:(_navigationRef$curren2=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren2.navigate('User',{screen:'Home'});break;case defines["d" /* UserStates */].FREE:(_navigationRef$curren3=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren3.navigate('User',{screen:'Home'});break;case defines["d" /* UserStates */].STARTER:(_navigationRef$curren4=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren4.navigate('Auth',{screen:'CreateUser'});break;default:setIsUserLoaded('Login');break;}}}},[User]);Object(react["useEffect"])(function(){dispatch(Utils["c" /* ErrorHandler */].action());},[]);if(!isUserLoaded){return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter]},react_default.a.createElement(Components_Brand,null),react_default.a.createElement(ActivityIndicator_default.a,{size:'large',style:[Gutters.largeVMargin]}),react_default.a.createElement(Text_default.a,{style:Fonts.textCenter},t('SplashText')));}else if(isUserLoaded==="Login"){return react_default.a.createElement(UserLogin,null);}else if(isUserLoaded==="Verify"){return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter]},react_default.a.createElement(Text_default.a,null,"Do Verify ???"));}};/* harmony default export */ var Auth_Index = (Index_IndexAuthContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/UserCreate.js
var UserCreate_this=undefined;var UserCreate_LoginContainer=function LoginContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Email=_useState2[0],setEmail=_useState2[1];var _useState3=Object(react["useState"])(""),_useState4=slicedToArray_default()(_useState3,2),Pass=_useState4[0],setPass=_useState4[1];var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var signin=function signin(_Email,_Pass){dispatch(Firebase_User["a" /* default */].signin({Email:_Email,Pass:_Pass}));};var resetPass=function resetPass(_Email){dispatch(Firebase_User["a" /* default */].reset({Email:_Email}));};var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,null),firebaseError&&firebaseError.message&&react_default.a.createElement(Text_default.a,null,firebaseError.message),react_default.a.createElement(View_default.a,{style:[Common.border,Layout.midWidth,Layout.colCenter,Gutters.regularBMargin,Gutters.smallVPadding,{backgroundColor:"white",maxWidth:650}]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullWidth,Gutters.smallVMargin,{maxWidth:600}]},react_default.a.createElement(dist["b" /* Input */],{style:[Common.textInput,{height:40,width:160}],containerStyle:[Layout.quarterWidth,{width:180,height:70,borderWidth:1,marginTop:10}],inputStyle:{paddingHorizontal:5},label:"Farm-tag:",onChangeText:function onChangeText(text){return setFarmSelect(text);},editable:false,keyboardType:'default',value:FarmSelect.name,selectTextOnFocus:true}),react_default.a.createElement(dist["b" /* Input */],{label:"Email",onChangeText:function onChangeText(text){return setEmail(text);},editable:!firebaseLoading,keyboardType:'default',value:Email,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]}),react_default.a.createElement(dist["b" /* Input */],{label:"Password",onChangeText:function onChangeText(text){return setPass(text);},editable:!firebaseLoading,keyboardType:'default',value:Pass,selectTextOnFocus:true,secureTextEntry:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Components_Button,{Texts:["Login"],Icons:[Images.User],Actions:[function(ele){if(Email&&Email!==""){if(Email==="CLEAR"){UserCreate_this.props.clearDataMem();}else if(Pass&&Pass!==""){signin(Email,Pass);}}}]})));};/* harmony default export */ var UserCreate = (UserCreate_LoginContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/ScrollView/index.js
var ScrollView = __webpack_require__(48);
var ScrollView_default = /*#__PURE__*/__webpack_require__.n(ScrollView);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/SafeAreaView/index.js
var SafeAreaView = __webpack_require__(46);
var SafeAreaView_default = /*#__PURE__*/__webpack_require__.n(SafeAreaView);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/MenuView.js
var MenuView_MenuView=function MenuView(props){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var User=Object(es["c" /* useSelector */])(function(state){return state.firebase.user;});var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Username=_useState2[0],setUsername=_useState2[1];var logout=function logout(){dispatch(Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:null}));dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){if(User.displayName){setUsername(User.displayName);}else if(User.name){setUsername(User.name);}else{setUsername("");}},[User]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill]},react_default.a.createElement(ScrollView_default.a,{style:Gutters.regularBPadding},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,{paddingVertical:35,alignSelf:'center'}]},t('AgrisysAdmin.Welcome',{name:Username})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{maxWidth:300,alignSelf:'center'}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysAdmin.UserBoard'),t('AgrisysAdmin.Systems'),t('AgrisysAdmin.Tools')],Icons:[Images.DashBoard,Images.System],Actions:[function(ele){var _View=["UserBoard","System","Tools"][ele.index];props.setView({View:_View});}]}),react_default.a.createElement(View_default.a,{style:{minHeight:30}}),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysAdmin.Logout')],Icons:[],Actions:[function(ele){var _navigationRef$curren;logout();(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});}]})))));};/* harmony default export */ var AdminPanel_MenuView = (MenuView_MenuView);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/FlatList/index.js
var FlatList = __webpack_require__(66);
var FlatList_default = /*#__PURE__*/__webpack_require__.n(FlatList);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Linking/index.js
var Linking = __webpack_require__(178);
var Linking_default = /*#__PURE__*/__webpack_require__.n(Linking);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Farm.js + 1 modules
var Firebase_Farm = __webpack_require__(115);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/SystemBoard.js
function SystemBoard_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function SystemBoard_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){SystemBoard_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{SystemBoard_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var SystemBoard_SystemBoard=function SystemBoard(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmState=Object(es["c" /* useSelector */])(function(state){return state.firebase.farms;});var _useState=Object(react["useState"])({name:""}),_useState2=slicedToArray_default()(_useState,2),FarmSelect=_useState2[0],setFarmSelect=_useState2[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());dispatch(Firebase_Farm["a" /* default */].action({FarmId:null}));},[]);if(farmState&&Object.keys(farmState).length>0){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(FlatList_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding],data:Object.keys(farmState),renderItem:function renderItem(_ref){var item=_ref.item,index=_ref.index;var Farm=SystemBoard_objectSpread({},farmState[item]);if(!Farm)return null;Farm.id=item;return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter,Layout.fullWidth]},react_default.a.createElement(Components_CustomListItem,{Title:Farm.name,itemStyle:[{minWidth:100,height:35}],onPress:function onPress(){}}),react_default.a.createElement(Components_CustomListItem,{itemStyle:[{minWidth:150,height:35,justifyContent:"center"}],Title:Farm.manager,onPress:function onPress(){setFarmSelect(Farm);}}),react_default.a.createElement(Components_CustomListItem,{itemStyle:[{minWidth:150,height:35}],Title:Farm.email,onPress:function onPress(){setFarmSelect(Farm);}}));},keyExtractor:function keyExtractor(item,index){return index.toString();}}),react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullWidth,{height:70,justifyContent:'center'}]},react_default.a.createElement(dist["b" /* Input */],{style:[Common.textInput,{height:40,width:160}],containerStyle:[Layout.quarterWidth,{width:180,height:70,borderWidth:1,marginTop:10}],inputStyle:{paddingHorizontal:5},label:"Farm-tag:",onChangeText:function onChangeText(text){return setFarmSelect(text);},editable:false,keyboardType:'default',value:FarmSelect.name,selectTextOnFocus:true}),react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.quarterWidth,{height:50,paddingTop:20,marginHorizontal:10,maxWidth:220,justifyContent:'space-between'}]},react_default.a.createElement(Components_Button,{Texts:["Consys"],maxWidth:90,Actions:[function(){if(FarmSelect.site){var Cloud="http://"+FarmSelect.site+".agrisys.cloud/";Linking_default.a.openURL(Cloud);}}]}),react_default.a.createElement(Components_Button,{Texts:["Farm Panel"],maxWidth:110,Actions:[function(){if(FarmSelect.id!==""){var _navigationRef$curren;dispatch(Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:FarmSelect.id}));(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:'Home'});}}]}))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var AdminPanel_SystemBoard = (SystemBoard_SystemBoard);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/Index.js
var Index_IndexAdminContainer=function IndexAdminContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var _useState=Object(react["useState"])(null),_useState2=slicedToArray_default()(_useState,2),isAppView=_useState2[0],setIsAppView=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=slicedToArray_default()(_useState3,2),currentView=_useState4[0],setView=_useState4[1];Object(react["useEffect"])(function(){setIsAppView(Object(Root["a" /* isApp */])());});var changeView=function changeView(_ref){var View=_ref.View;if(isAppView){var _navigationRef$curren;(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Admin',{screen:View});}else{switch(View){case"UserBoard":break;case"System":setView([react_default.a.createElement(AdminPanel_SystemBoard,{key:"View_Board"})]);break;case"Tools":break;}}};if(isAppView===null){return react_default.a.createElement(ActivityIndicator_default.a,null);}else if(isAppView){if(currentView)return currentView;else return react_default.a.createElement(AdminPanel_MenuView,{setView:changeView});}else{if(!currentView)setView([react_default.a.createElement(AdminPanel_SystemBoard,{key:"View_Board"})]);return react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullSize,{alignItems:'flex-start'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullHeight,{minWidth:300,maxWidth:320,borderRightWidth:1}]},react_default.a.createElement(ScrollView_default.a,{style:[Layout.fill]},react_default.a.createElement(AdminPanel_MenuView,{setView:changeView})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{height:110,marginBottom:15}]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize],source:Images.Logo,resizeMode:'contain'}))),react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullSize,{alignItems:'flex-start'}]},currentView));}};/* harmony default export */ var AdminPanel_Index = (Index_IndexAdminContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/MenuView.js
var UserPanel_MenuView_MenuView=function MenuView(props){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var User=Object(es["c" /* useSelector */])(function(state){return state.firebase.user;});var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Username=_useState2[0],setUsername=_useState2[1];var logout=function logout(){dispatch(Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:null}));dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){if(User.displayName){setUsername(User.displayName);}else if(User.name){setUsername(User.name);}else{setUsername("");}},[User]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill]},react_default.a.createElement(ScrollView_default.a,{style:Gutters.regularBPadding},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,{paddingVertical:35,alignSelf:'center'}]},t('AgrisysMenu.Welcome',{name:Username})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{maxWidth:300,alignSelf:'center'}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysMenu.DashBoard'),t('AgrisysMenu.Pens'),t('AgrisysMenu.Batchs'),t('AgrisysMenu.Growth'),t('AgrisysMenu.Operations'),t('AgrisysMenu.Autofunctions'),t('AgrisysMenu.FeedingFunctions'),t('AgrisysMenu.Pigs')],Icons:[Images.DashBoard,Images.Pens,Images.Section,Images.GCurves,Images.System,Images.AutoPig,Images.Feed,Images.Sow],Actions:[function(ele){var _View=["DashBoard","Pens","Batchs","Growth","Operations","Autofunctions","FeedingFunctions","Pigs"][ele.index];props.setView({View:_View});}]}),react_default.a.createElement(View_default.a,{style:{minHeight:30}}),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysMenu.Logout')],Icons:[],Actions:[function(ele){var _navigationRef$curren;logout();(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});}]})))));};/* harmony default export */ var UserPanel_MenuView = (UserPanel_MenuView_MenuView);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/DashBoard.js
var DashBoard_DashBoard=function DashBoard(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.farms&&state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.farms[state.firebase.activeData.farm]:undefined;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);if(farmDatas&&typeof farmDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_Button,{Texts:[t('DashBoard.Title')],Title:true}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('DashBoard.Prop1'),farmDatas.name],[t('DashBoard.Prop2'),farmDatas.manager],[t('DashBoard.Prop3'),farmDatas.email]]}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Text_default.a,null,t('DashBoard.BatchesTitle')),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(Text_default.a,null,"Element not done"))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_DashBoard = (DashBoard_DashBoard);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-super-grid/index.js + 3 modules
var react_native_super_grid = __webpack_require__(310);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js
var Firebase_Section = __webpack_require__(116);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Graph.js + 1 modules
var Graph = __webpack_require__(101);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/formators.js
var formators = __webpack_require__(86);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Pens.js
var Pens_Pens=function Pens(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmId=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.activeData.farm:undefined;});var sectionDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.sections;});var pensDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.pens;});var batchDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.batchs;});var graphDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.graphs;});var weighingsDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.weighings;});var autoPigs=Object(es["c" /* useSelector */])(function(state){return state.firebase.autopigs;});var _useState=Object(react["useState"])([]),_useState2=slicedToArray_default()(_useState,2),PenData=_useState2[0],setPenData=_useState2[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(farmId&&(!sectionDatas||typeof sectionDatas==='undefined')){dispatch(Firebase_Section["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!pensDatas||typeof pensDatas==='undefined')){dispatch(Firebase_Pen["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!weighingsDatas||typeof weighingsDatas==='undefined')){dispatch(Firebase_Weighing["a" /* default */].action({FarmId:farmId,PenId:null,SectionId:null}));}if(farmId&&(!batchDatas||typeof batchDatas==='undefined')){dispatch(Batch["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!graphDatas||typeof graphDatas==='undefined')){dispatch(Graph["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!autoPigs||typeof autoPigs==='undefined')){}},[farmId]);Object(react["useEffect"])(asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!pensDatas){_context2.next=3;break;}_context2.next=3;return Promise.all(Object.entries(pensDatas).map(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref3){var _ref4,Id,Pen,color,displayWeight,batch,Curve;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_ref4=slicedToArray_default()(_ref3,2),Id=_ref4[0],Pen=_ref4[1];if(!(Id==="update_time")){_context.next=3;break;}return _context.abrupt("return");case 3:color=Colors.gray;displayWeight=null;if(!(Pen.datas&&Pen.datas.batch&&batchDatas&&batchDatas[Pen.datas.batch])){_context.next=12;break;}batch=batchDatas[Pen.datas.batch];if(!(batch&&batch.gcurve&&graphDatas&&graphDatas[batch.gcurve])){_context.next=12;break;}Curve=graphDatas[batch.gcurve];if(!(Curve&&weighingsDatas&&weighingsDatas[Id])){_context.next=12;break;}_context.next=12;return Object(Firebase_Utils["c" /* WeightCalc */])({Weighings:weighingsDatas[Id],Batch:batch,Graphs:Curve}).then(function(data){displayWeight=data.PenWeight;displayWeight=Math.round(displayWeight*100)/100;var TargetWeight=batch.datas.target?batch.datas.target:null;if(TargetWeight&&displayWeight>=TargetWeight){color=Colors.pigpink;}else if(data.isVirtual){var devianceMin=batch.datas.devianceMin?batch.datas.devianceMin:2;var devianceMax=batch.datas.devianceMax?batch.datas.devianceMax:5;var Weight=data.isVirtual.Now;var ExValue=data.isVirtual.TempEx;var devianceValMin=ExValue/100*devianceMin;var devianceValMax=ExValue/100*devianceMax;if(ExValue&&Weight<ExValue&&Weight<ExValue-devianceValMin){color=Colors.error;}else if(ExValue&&Weight>ExValue&&Weight>ExValue+devianceValMax){color=Colors.overest;}else{color=Colors.success;}}});case 12:setPenData(function(data){if(data[Id]&&data[Id].AutoPig)data[Id]={datas:Pen.datas,color:color,displayWeight:displayWeight,AutoPig:data[Id].AutoPig};else data[Id]={datas:Pen.datas,color:color,displayWeight:displayWeight};return data;});case 13:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref2.apply(this,arguments);};}()));case 3:case"end":return _context2.stop();}}},_callee2);})),[pensDatas,batchDatas,graphDatas,autoPigs,weighingsDatas]);Object(react["useEffect"])(asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(){return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!pensDatas){_context4.next=3;break;}_context4.next=3;return Promise.all(Object.entries(pensDatas).map(function(){var _ref6=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(_ref7){var _ref8,Id,Pen,AutoPig;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_ref8=slicedToArray_default()(_ref7,2),Id=_ref8[0],Pen=_ref8[1];AutoPig=false;if(autoPigs&&autoPigs.some(function(e){return e[item.item];})){}if(Pen.datas&&Pen.datas.autopig)AutoPig=Pen.datas.autopig;setPenData(function(data){if(data[Id])data[Id].AutoPig=AutoPig;else data[Id]={AutoPig:AutoPig};return data;});case 5:case"end":return _context3.stop();}}},_callee3);}));return function(_x2){return _ref6.apply(this,arguments);};}()));case 3:case"end":return _context4.stop();}}},_callee4);})),[pensDatas,autoPigs]);if(sectionDatas&&typeof sectionDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(react_native_super_grid["a" /* SectionGrid */],{style:[Layout.fill,Layout.fullSize,Gutters.smallVPadding,Gutters.smallHPadding],itemDimension:70,spacing:10,sections:Object.keys(sectionDatas).filter(function(e){return e!=='update_time';}).map(function(Section){var Pens=Object(formators["b" /* sortObject */])(sectionDatas[Section].pens);return{title:Section,data:Object.keys(Pens)};}),renderSectionHeader:function renderSectionHeader(_ref9){var section=_ref9.section;return react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{marginBottom:0},Object(Root["a" /* isApp */])()?{width:"65%"}:{width:"100%"}]},react_default.a.createElement(Components_Button,{Texts:[section.title],Title:true}));},renderItem:function renderItem(item){var color=Colors.gray;var displayWeight=null;var AutoPig=false;if(PenData[item.item]){var Pen=PenData[item.item];color=Pen.color;displayWeight=Pen.displayWeight;AutoPig=Pen.AutoPig;}return react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outlineRounded,{borderColor:'#000000',borderWidth:AutoPig?5:0,width:70,height:70,alignItems:"center",justifyContent:"center",backgroundColor:color}],onPress:function onPress(){var _navigationRef$curren;var batch=Pen&&Pen.datas&&Pen.datas.batch?Pen.datas.batch:null;dispatch(Utils["b" /* EditData */].action({DataRef:defines["a" /* DataRefs */].ACTIVE,Data:{farm:farmId,section:item.section.title,pen:item.item,batch:batch}}));(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:'Pen_Display'});}},react_default.a.createElement(Text_default.a,null,item.item),displayWeight?react_default.a.createElement(Text_default.a,null,displayWeight+" kg"):react_default.a.createElement(react_default.a.Fragment,null));}}));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Pens = (Pens_Pens);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-multi-selectbox/index.js + 3 modules
var react_native_multi_selectbox = __webpack_require__(624);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/lodash/lodash.js
var lodash = __webpack_require__(133);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Batchs.js
var Batchs_Batchs=function Batchs(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmId=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.activeData.farm:undefined;});var batchDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.batchs;});var graphDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.graphs;});var sectionDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.sections;});var pensDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.pens;});var _useState=Object(react["useState"])(0),_useState2=slicedToArray_default()(_useState,2),EditView=_useState2[0],setEditView=_useState2[1];var _useState3=Object(react["useState"])(true),_useState4=slicedToArray_default()(_useState3,2),HideClosed=_useState4[0],setHideClosed=_useState4[1];var _useState5=Object(react["useState"])(""),_useState6=slicedToArray_default()(_useState5,2),SelectedBatch=_useState6[0],setSelectedBatch=_useState6[1];var _useState7=Object(react["useState"])(new Date(Date.now())),_useState8=slicedToArray_default()(_useState7,2),StartDate=_useState8[0],setStartDate=_useState8[1];var _useState9=Object(react["useState"])(""),_useState10=slicedToArray_default()(_useState9,2),SelectedCurve=_useState10[0],setSelectedCurve=_useState10[1];var _useState11=Object(react["useState"])(33),_useState12=slicedToArray_default()(_useState11,2),TargetWeight=_useState12[0],setTargetWeight=_useState12[1];var _useState13=Object(react["useState"])(2),_useState14=slicedToArray_default()(_useState13,2),DevianceMin=_useState14[0],setDevianceMin=_useState14[1];var _useState15=Object(react["useState"])(2),_useState16=slicedToArray_default()(_useState15,2),DevianceMax=_useState16[0],setDevianceMax=_useState16[1];var _useState17=Object(react["useState"])([]),_useState18=slicedToArray_default()(_useState17,2),freePens=_useState18[0],setfreePens=_useState18[1];var _useState19=Object(react["useState"])([]),_useState20=slicedToArray_default()(_useState19,2),avaiblePens=_useState20[0],setavaiblePens=_useState20[1];var _useState21=Object(react["useState"])([]),_useState22=slicedToArray_default()(_useState21,2),selectedPens=_useState22[0],setselectedPens=_useState22[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(batchDatas&&sectionDatas){var _freePens=[];Object.keys(sectionDatas).forEach(function(section){if(sectionDatas[section].pens){var pens=[];Object.keys(sectionDatas[section].pens).filter(function(e){return e!=='update_time';}).forEach(function(pen){var add=true;var batchList=Object.keys(batchDatas).filter(function(e){return e!=='update_time'&&(!batchDatas[e].state||batchDatas[e].state!==defines["b" /* DataStates */].CLOSED);});batchList.forEach(function(batch){if(batchDatas[batch].pens&&batchDatas[batch].pens[pen]&&!batchDatas[batch].pens[pen].enddate){add=false;}});if(add){var item={item:pen,id:section+"_"+pen};_freePens.push(item);}});}});setfreePens(_freePens);setavaiblePens(_freePens);}},[batchDatas,sectionDatas]);Object(react["useEffect"])(function(){if(farmId&&(!batchDatas||typeof batchDatas==='undefined')){dispatch(Batch["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!graphDatas||typeof graphDatas==='undefined')){dispatch(Graph["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!sectionDatas||typeof sectionDatas==='undefined')){dispatch(Firebase_Section["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!pensDatas||typeof pensDatas==='undefined')){dispatch(Firebase_Pen["a" /* default */].action({FarmId:farmId}));}},[farmId]);var onMultiChange=function onMultiChange(item){var items=Object(lodash["xorBy"])(selectedPens,[item],'id');setselectedPens(items);};if(batchDatas&&typeof batchDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},EditView===0?react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_Button,{Texts:[t('Batchs.New'),t('Batchs.Edit')],Frame:true,Actions:[function(ele){if(ele.index===0){var graph=0;if(graphDatas){graph=Object.keys(graphDatas).filter(function(e){return e!=='update_time';})[0];}setSelectedBatch("");setSelectedCurve(graph);setTargetWeight(33);setDevianceMin(2);setDevianceMax(2);setavaiblePens(freePens);setselectedPens([]);setEditView(1);}else{if(batchDatas){var batchList=Object.keys(batchDatas).filter(function(e){return e!=='update_time'&&(!batchDatas[e].state||batchDatas[e].state!==defines["b" /* DataStates */].CLOSED);});if(batchList.length>0){var batchName=batchList[0];var batch=batchDatas[batchName];if(batch){var Pens=[];var pens=Object(formators["b" /* sortObject */])(batch.pens);Object.keys(pens).forEach(function(element){if(!batch.pens[element].enddate){if(pensDatas&&pensDatas[element]){var _pen=pensDatas[element];var item={};item.item=element;item.id=_pen.section+"_"+element;Pens.push(item);}}});var target=batch.datas&&batch.datas.target?batch.datas.target:33;setSelectedBatch(batchName);setStartDate(new Date(batch.time));setSelectedCurve(batch.gcurve);setTargetWeight(target);setDevianceMin(batch.datas.devianceMin);setDevianceMax(batch.datas.devianceMax);setavaiblePens(freePens.concat(Pens));setselectedPens(Pens);setEditView(2);}}}}}]}),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginVertical:20,marginBottom:40}]},react_default.a.createElement(Components_Button,{Texts:Object.keys(batchDatas).filter(function(e){return e!=='update_time'&&(!batchDatas[e].state||batchDatas[e].state!==defines["b" /* DataStates */].CLOSED);}),Actions:[function(ele){setSelectedBatch(ele.text);}]})),react_default.a.createElement(Components_Button,{Texts:[!HideClosed?t('Batchs.Hide'):t('Batchs.Show')],Actions:[function(){setHideClosed(function(val){return!val;});}]}),!HideClosed&&react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginVertical:20}]},react_default.a.createElement(Components_Button,{Texts:Object.keys(batchDatas).filter(function(e){return e!=='update_time'&&batchDatas[e].state&&batchDatas[e].state===defines["b" /* DataStates */].CLOSED;}),Actions:[function(ele){setSelectedBatch(ele.text);}]}))):react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},EditView===1&&react_default.a.createElement(dist["b" /* Input */],{label:t('Batchs.Name'),containerStyle:[Layout.midWidth,{borderWidth:1,marginTop:10}],style:[Layout.fill,Layout.midWidth,Common.textInput],onChangeText:function onChangeText(text){if(text){if(Object(formators["a" /* DataStringCheck */])(text)){setSelectedBatch(text);}}else{setSelectedBatch(text);}},value:SelectedBatch,selectTextOnFocus:true}),EditView===2&&react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:SelectedBatch,style:[Layout.halvWidth,{height:50,justifyContent:"flex-end"}],onValueChange:function onValueChange(itemValue,itemIndex){if(batchDatas&&batchDatas[itemValue]){var batch=batchDatas[itemValue];var Pens=[];var pens=Object(formators["b" /* sortObject */])(batch.pens);Object.keys(pens).forEach(function(element){if(!batch.pens[element].enddate){if(pensDatas&&pensDatas[element]){var _pen=pensDatas[element];var item={};item.item=element;item.id=_pen.section+"_"+element;Pens.push(item);}}});var target=batch.datas&&batch.datas.target?batch.datas.target:33;setSelectedBatch(itemValue);setStartDate(new Date(batch.time));setSelectedCurve(batch.gcurve);setTargetWeight(target);setDevianceMin(batch.datas.devianceMin);setDevianceMax(batch.datas.devianceMax);setavaiblePens(freePens.concat(Pens));setselectedPens(Pens);}}},Object.keys(batchDatas).filter(function(e){return e!=='update_time'&&(!batchDatas[e].state||batchDatas[e].state!==defines["b" /* DataStates */].CLOSED);}).map(function(batch,i){return react_default.a.createElement(Picker_default.a.Item,{label:batch,value:batch,key:i});})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.alignItemsCenter,{marginVertical:20}]},react_default.a.createElement(View_default.a,{style:[Layout.midWidth,Object(Root["a" /* isApp */])()?{}:Layout.row,Layout.justifyContentCenter,{minWidth:430}]},react_default.a.createElement(View_default.a,{style:[Object(Root["a" /* isApp */])()?{}:Layout.midWidth,{minWidth:315,borderWidth:1,marginTop:10,paddingHorizontal:5,paddingTop:0,borderRadius:0,alignItems:"center",zIndex:1,backgroundColor:Colors.inputBackground}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{alignItems:"flex-start",height:22}]},react_default.a.createElement(Text_default.a,{style:[Layout.fullWidth,Common.textInput,{marginHorizontal:5,marginVertical:2,color:Colors.input,fontSize:15,fontWeight:"bold"}]},t('Batchs.StartD'))),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Object(Root["a" /* isApp */])()?{marginBottom:10}:{},{alignItems:'flex-start',height:28}]},react_default.a.createElement(Components_Datetime_Picker,{Selected:StartDate,onValueChange:function onValueChange(date){setStartDate(date);}}))),react_default.a.createElement(View_default.a,{style:[Object(Root["a" /* isApp */])()?{}:Layout.quarterWidth,{minWidth:120,borderWidth:1,marginTop:10,paddingHorizontal:5,paddingTop:0,borderRadius:0,alignItems:"center",zIndex:1,backgroundColor:Colors.inputBackground}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{alignItems:"flex-start",height:22}]},react_default.a.createElement(Text_default.a,{style:[Layout.fullWidth,Common.textInput,{marginHorizontal:5,marginVertical:2,color:Colors.input,fontSize:15,fontWeight:"bold"}]},t('Batchs.GrowthCurve'))),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Object(Root["a" /* isApp */])()?{marginBottom:10}:{},{alignItems:"center",height:28}]},react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:SelectedCurve,style:[Layout.fullWidth,{height:30}],onValueChange:function onValueChange(itemValue,itemIndex){setSelectedCurve(itemValue);}},Object.keys(graphDatas).filter(function(e){return e!=='update_time';}).map(function(graph,i){return react_default.a.createElement(Picker_default.a.Item,{label:graph,value:graph,key:i});}))))),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,Object(Root["a" /* isApp */])()?{}:Layout.row,Layout.justifyContentCenter,{minWidth:430}]},react_default.a.createElement(dist["b" /* Input */],{label:t('Batchs.Target'),type:"number",step:"0.1",containerStyle:[Layout.halvWidth,{borderWidth:1,marginTop:10}],style:[Common.textInput,{marginBottom:-10}],onChangeText:function onChangeText(text){if(!isNaN(text)||text.endsWith('.')&&text.split('.').length<=2){setTargetWeight(text);}},value:TargetWeight}),react_default.a.createElement(View_default.a,{style:[Layout.halvWidth]})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,Object(Root["a" /* isApp */])()?{}:Layout.row,Layout.justifyContentCenter,{minWidth:430}]},react_default.a.createElement(dist["b" /* Input */],{label:t('Batchs.DevianceMin'),type:"number",step:"0.1",containerStyle:[Layout.halvWidth,{borderWidth:1,marginTop:10}],style:[Common.textInput,{marginBottom:-10}],onChangeText:function onChangeText(text){if(!isNaN(text)||text.endsWith('.')&&text.split('.').length<=2){setDevianceMin(text);}},value:DevianceMin}),react_default.a.createElement(dist["b" /* Input */],{label:t('Batchs.DevianceMax'),type:"number",step:"0.1",containerStyle:[Layout.halvWidth,{borderWidth:1,marginTop:10}],style:[Common.textInput,{marginBottom:-10}],onChangeText:function onChangeText(text){if(!isNaN(text)||text.endsWith('.')&&text.split('.').length<=2){setDevianceMax(text);}},value:DevianceMax})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,Object(Root["a" /* isApp */])()?{}:Layout.row,Layout.justifyContentCenter,{minWidth:430}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{borderWidth:1,marginTop:10,paddingHorizontal:10,paddingTop:5}]},react_default.a.createElement(react_native_multi_selectbox["a" /* default */],{label:t('Batchs.PensIn'),labelStyle:{color:Colors.input,fontSize:15,fontWeight:"bold"},optionsLabelStyle:{minWidth:100,color:"black",fontSize:12,fontWeight:"bold"},options:avaiblePens,selectedValues:selectedPens,onMultiSelect:onMultiChange,onTapClose:onMultiChange,isMulti:true}))),EditView===2&&react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.alignItemsCenter,{marginVertical:10}]},react_default.a.createElement(Components_Button,{Texts:[t('Batchs.Close')],Actions:[function(ele){var Batch=batchDatas[SelectedBatch];if(Batch){}}]})),react_default.a.createElement(Components_Button,{Texts:[t('ActionButtons.Save'),t('ActionButtons.Cancel')],Frame:true,Actions:[function(ele){if(ele.index===1){setEditView(0);}else{var update=true;if(SelectedBatch&&SelectedBatch!==""){if(batchDatas[SelectedBatch]){if(EditView===1){dispatch(Utils["c" /* ErrorHandler */].action({message:"BatchName error, batch allready exists"}));update=false;}}else{if(EditView===2){dispatch(Utils["c" /* ErrorHandler */].action({message:"BatchName error, batch does not exists"}));update=false;}}}else{dispatch(Utils["c" /* ErrorHandler */].action({message:"Batch Name error."}));update=false;}if(TargetWeight===""||TargetWeight.length>3||isNaN(TargetWeight)){dispatch(Utils["c" /* ErrorHandler */].action({message:"Tartget weight setting error"}));update=false;}if(DevianceMin===""||DevianceMin.length>3||isNaN(DevianceMin)||DevianceMin>100){dispatch(Utils["c" /* ErrorHandler */].action({message:"DevianceMin setting error"}));update=false;}if(DevianceMax===""||DevianceMax.length>3||isNaN(DevianceMax)||DevianceMax>100){dispatch(Utils["c" /* ErrorHandler */].action({message:"DevianceMax setting error"}));update=false;}if(SelectedCurve===""){dispatch(Utils["c" /* ErrorHandler */].action({message:"Growth curve setting error, please reselect a curve"}));update=false;}var Pens={};if(selectedPens&&selectedPens.length>0){selectedPens.forEach(function(element){Pens[element.item]=true;});}if(Object.keys(Pens).length!==selectedPens.length){dispatch(Utils["c" /* ErrorHandler */].action({message:"An error occurred during Pen assigning (please update the page)"}));update=false;}if(update){console.log("done");}}}]})))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Batchs = (Batchs_Batchs);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/GrowthCurves.js
var GrowthCurves_GrowthCurves=function GrowthCurves(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmId=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.activeData.farm:undefined;});var graphDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.graphs;});var _useState=Object(react["useState"])(0),_useState2=slicedToArray_default()(_useState,2),EditView=_useState2[0],setEditView=_useState2[1];var _useState3=Object(react["useState"])(""),_useState4=slicedToArray_default()(_useState3,2),SelectedCurve=_useState4[0],setSelectedCurve=_useState4[1];var _useState5=Object(react["useState"])({StartData:null,EndData:null,error:false}),_useState6=slicedToArray_default()(_useState5,2),SelectedData=_useState6[0],setSelectedData=_useState6[1];var _useState7=Object(react["useState"])([]),_useState8=slicedToArray_default()(_useState7,2),DataPoints=_useState8[0],setDataPoints=_useState8[1];var _useState9=Object(react["useState"])(""),_useState10=slicedToArray_default()(_useState9,2),ChangingVal=_useState10[0],setChangingVal=_useState10[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(farmId&&(!graphDatas||typeof graphDatas==='undefined')){dispatch(Graph["a" /* default */].action({FarmId:farmId}));}},[farmId]);if(graphDatas&&typeof graphDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},EditView===0?react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter,{marginVertical:20}]},react_default.a.createElement(Components_Button,{Texts:Object.keys(graphDatas).filter(function(e){return e!=='update_time';}),Actions:[function(ele){var CurveData=graphDatas[ele.text];if(CurveData&&CurveData.hasOwnProperty("data")){setSelectedCurve(ele.text);var DataPoints=[];var _index=0;Object.keys(CurveData.data).map(function(index){DataPoints[index]=CurveData.data[index];for(var i=index-1;i>_index;i--){DataPoints[i]=null;}_index=index;});setDataPoints(DataPoints);setEditView(2);}}]})),react_default.a.createElement(Components_Button,{Texts:[t('Graphs.New')],Frame:true,Actions:[function(){setDataPoints([6,18]);setEditView(1);}]})):react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},EditView===1&&react_default.a.createElement(dist["b" /* Input */],{label:t('Graphs.Name'),containerStyle:[Layout.midWidth,{borderWidth:1,marginTop:10}],style:[Layout.fill,Layout.midWidth,Common.textInput],onChangeText:function onChangeText(text){if(text){if(Object(formators["a" /* DataStringCheck */])(text)){setSelectedCurve(text);}}else{setSelectedCurve(text);}},value:SelectedCurve,selectTextOnFocus:true}),EditView===2&&react_default.a.createElement(Components_Button,{Texts:[SelectedCurve],Title:true}),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.alignItemsCenter,Common.border,{marginBottom:20,paddingLeft:20}]},react_default.a.createElement(Components_CurveViewer,{DisplayPoints:{name:SelectedCurve,data:DataPoints}})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,Layout.alignItemsCenter,{marginBottom:20}]},firebaseError&&firebaseError.message&&react_default.a.createElement(Text_default.a,{style:[{color:Colors.error}]},firebaseError.message),react_default.a.createElement(FlatList_default.a,{nestedScrollEnabled:true,data:DataPoints,style:[Layout.fullWidth,{marginBottom:20}],renderItem:function renderItem(_ref){var item=_ref.item,index=_ref.index;var Selected=index===SelectedData.StartData;if((!item||item===null||item===undefined)&&!Selected)return null;return react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.alignItemsCenter,Layout.row],onFocus:function onFocus(){setSelectedData({StartData:index,EndData:index,error:false});},onBlur:function onBlur(){setSelectedData({StartData:null,EndData:null,error:false});}},react_default.a.createElement(dist["b" /* Input */],{label:t('Graphs.Day'),type:"number",step:"0.1",containerStyle:[{width:120,borderWidth:1,marginTop:10,marginRight:10}],style:[Common.textInput,{width:100}],errorMessage:Selected&&SelectedData.error?t('Graphs.EValue'):"",editable:index===0?false:true,onFocus:function onFocus(){setChangingVal(index);},onChangeText:function onChangeText(text){if(!isNaN(text)){var _Selected=SelectedData;_Selected.EndData=text;_Selected.error=false;if(DataPoints[text]&&parseFloat(text)!=SelectedData.StartData&&text!=SelectedData.StartData){_Selected.error=true;}setSelectedData(_Selected);setChangingVal(text);}},onBlur:function onBlur(){if(!SelectedData.error&&SelectedData.StartData.toString()!==SelectedData.EndData.toString()){var _DataPoints=toConsumableArray_default()(DataPoints);_DataPoints[SelectedData.EndData]=parseFloat(item.toString());_DataPoints[SelectedData.StartData]=null;var FirstData=false;for(var i=_DataPoints.length-1;i>1;i--){if(!_DataPoints[i]||!_DataPoints[i]){if(FirstData){_DataPoints[i]=null;}else _DataPoints.pop();}else{FirstData=true;}}setDataPoints(_DataPoints);}},value:""+(Selected?SelectedData.EndData:index)}),react_default.a.createElement(dist["b" /* Input */],{label:t('Graphs.Weight'),type:"number",step:"0.1",containerStyle:[Layout.fill,{borderWidth:1,marginTop:10}],style:[Common.textInput],onFocus:function onFocus(){setChangingVal(index);},onChangeText:function onChangeText(text){if(!isNaN(text)||text.endsWith('.')&&text.split('.').length<=2){setDataPoints(function(old){old[index]=text;return old;});setChangingVal(text);}},onBlur:function onBlur(e){var text=e.nativeEvent.text;if(text===undefined||text===null||text===""){setDataPoints(function(old){old[index]=0;return old;});}},value:DataPoints[index]}));},keyExtractor:function keyExtractor(item,index){return index.toString();},numColumns:1}),react_default.a.createElement(Components_Button,{Texts:[t('Graphs.NewPoint')],Actions:[function(){var _DataPoints=toConsumableArray_default()(DataPoints);var value=DataPoints&&DataPoints.length>=1?DataPoints[DataPoints.length-1]:0;_DataPoints.push(value);setDataPoints(_DataPoints);}]})),react_default.a.createElement(Components_Button,{Texts:[t('ActionButtons.Save'),t('ActionButtons.Cancel')],Frame:true,Actions:[function(ele){if(ele.index===1){setEditView(0);}else{var update=true;if(SelectedCurve&&SelectedCurve!==""){if(graphDatas[SelectedCurve]){if(EditView===1){dispatch(Utils["c" /* ErrorHandler */].action({message:"Cannot create allready existing Curve."}));update=false;}}else{if(EditView===2){dispatch(Utils["c" /* ErrorHandler */].action({message:"Cannot update non-existing Curve. (Please refresh)"}));update=false;}}}else{dispatch(Utils["c" /* ErrorHandler */].action({message:"Curve template need a name."}));update=false;}if(update){var lastDataIndex=0;DataPoints.forEach(function(element,index){if(update&&element!==null&&element!==undefined){if(index>0&&parseFloat(element)<=parseFloat(DataPoints[lastDataIndex])){console.log(parseFloat(element),parseFloat(DataPoints[lastDataIndex]),index,lastDataIndex);var Eindex=lastDataIndex;if(element===DataPoints[lastDataIndex])Eindex=index;dispatch(Utils["c" /* ErrorHandler */].action({message:"Curve template needs to be incremental: error at day: "+Eindex+" - "+index}));update=false;}else{lastDataIndex=index;}}});if(update){dispatch(Utils["c" /* ErrorHandler */].action());var newCurve={periode:"Days",data:[]};var Data=[];var index=0;DataPoints.forEach(function(element){if(element)Data[index]=parseFloat(element);index++;});newCurve.data=Data;dispatch(Graph["a" /* default */].update({FarmId:farmId,GraphId:SelectedCurve,Graph:newCurve}));setEditView(0);}}}}]}))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_GrowthCurves = (GrowthCurves_GrowthCurves);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Operations.js
var Operations_Operations=function Operations(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.farms&&state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.farms[state.firebase.activeData.farm]:undefined;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);if(farmDatas&&typeof farmDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_OperationsPanel,{Type:2}))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Operations = (Operations_Operations);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Index.js
var Index_IndexUserContainer=function IndexUserContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var _useState=Object(react["useState"])(null),_useState2=slicedToArray_default()(_useState,2),isAppView=_useState2[0],setIsAppView=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=slicedToArray_default()(_useState3,2),currentView=_useState4[0],setView=_useState4[1];var activeFarm=Object(es["c" /* useSelector */])(function(state){if(state.firebase.activeData&&state.firebase.activeData.farm)return state.firebase.activeData.farm;else if(state.firebase.user&&state.firebase.user.farms){var FarmId=Object.keys(state.firebase.user.farms)[0];dispatch(Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:FarmId}));return FarmId;}else return undefined;});var farmDatas=activeFarm?Object(es["c" /* useSelector */])(function(state){return state.firebase.farms?state.firebase.farms[activeFarm]:undefined;}):undefined;Object(react["useEffect"])(function(){if(activeFarm&&(!farmDatas||typeof farmDatas==='undefined')){dispatch(Firebase_Farm["a" /* default */].action({FarmId:activeFarm}));}},[activeFarm]);Object(react["useEffect"])(function(){if(Object(Root["a" /* isApp */])()!=isAppView)setIsAppView(Root["a" /* isApp */]);});var changeView=function changeView(_ref){var View=_ref.View;if(isAppView){var _navigationRef$curren;(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:View});}else{switch(View){case"DashBoard":setView([react_default.a.createElement(UserPanel_DashBoard,{key:"View_Board"})]);break;case"Pens":setView([react_default.a.createElement(UserPanel_Pens,{key:"View_Board"})]);break;case"Batchs":setView([react_default.a.createElement(UserPanel_Batchs,{key:"View_Board"})]);break;case"Growth":setView([react_default.a.createElement(UserPanel_GrowthCurves,{key:"View_Board"})]);break;case"Operations":setView([react_default.a.createElement(UserPanel_Operations,{key:"View_Board"})]);break;}}};if(isAppView===null){return react_default.a.createElement(ActivityIndicator_default.a,null);}else if(isAppView){if(currentView)return currentView;else return react_default.a.createElement(UserPanel_MenuView,{setView:changeView});}else{if(!currentView){setView([react_default.a.createElement(UserPanel_DashBoard,{key:"View_Board"})]);}return react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullSize,{alignItems:'flex-start'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullHeight,{minWidth:300,maxWidth:320,borderRightWidth:1}]},react_default.a.createElement(View_default.a,{style:[Layout.fill]},react_default.a.createElement(UserPanel_MenuView,{setView:changeView})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{height:110,marginBottom:15}]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize],source:Images.Logo,resizeMode:'contain'}))),react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullSize,{alignItems:'flex-start'}]},currentView));}};/* harmony default export */ var UserPanel_Index = (Index_IndexUserContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Pen_Display.js
var Pen_Display_Pen_Display=function Pen_Display(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var activeData=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData?state.firebase.activeData:undefined;});var batchDatas=Object(es["c" /* useSelector */])(function(state){return activeData&&activeData.batch&&state.firebase.batchs&&state.firebase.batchs[activeData.batch]?state.firebase.batchs[activeData.batch]:undefined;});var graphDatas=Object(es["c" /* useSelector */])(function(state){return batchDatas&&batchDatas.gcurve&&state.firebase.graphs&&state.firebase.graphs[batchDatas.gcurve]?state.firebase.graphs[batchDatas.gcurve]:undefined;});var penDatas=Object(es["c" /* useSelector */])(function(state){return activeData&&activeData.pen&&state.firebase.pens&&state.firebase.pens[activeData.pen]?state.firebase.pens[activeData.pen]:undefined;});var weighingsDatas=Object(es["c" /* useSelector */])(function(state){return activeData&&activeData.pen&&state.firebase.weighings&&state.firebase.weighings[activeData.pen]?state.firebase.weighings[activeData.pen]:undefined;});var commentsDatas=Object(es["c" /* useSelector */])(function(state){return activeData&&activeData.pen&&state.firebase.comments&&state.firebase.comments[activeData.pen]?state.firebase.comments[activeData.pen]:undefined;});var weightCalcs=Object(es["c" /* useSelector */])(function(state){return activeData&&state.firebase.activeData&&state.firebase.activeData.weightCalc?state.firebase.activeData.weightCalc:undefined;});var autoPigs=Object(es["c" /* useSelector */])(function(state){return state.firebase.autopigs;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(activeData&&activeData.farm&&activeData.pen&&(!weighingsDatas||typeof weighingsDatas==='undefined')){dispatch(Firebase_Weighing["a" /* default */].action({FarmId:activeData.farm,PenId:activeData.pen,SectionId:activeData.section}));}if(activeData&&activeData.farm&&activeData.pen&&(!commentsDatas||typeof commentsDatas==='undefined')){dispatch(Comment["a" /* default */].action({FarmId:activeData.farm,PenId:activeData.pen}));}if(activeData&&activeData.farm&&activeData.pen&&activeData.batch&&(!batchDatas||typeof batchDatas==='undefined')){dispatch(Batch["a" /* default */].action({FarmId:activeData.farm,BatchId:activeData.batch}));}if(activeData&&activeData.farm&&batchDatas&&batchDatas.gcurve&&(!graphDatas||typeof graphDatas==='undefined')){dispatch(Graph["a" /* default */].action({FarmId:activeData.farm,GraphId:batchDatas.gcurve}));}},[activeData]);Object(react["useEffect"])(function(){if(weighingsDatas,batchDatas,graphDatas)dispatch(Utils["e" /* WeightCalculate */].action({Weighings:weighingsDatas,Batch:batchDatas,Graphs:graphDatas}));},[weighingsDatas,batchDatas,graphDatas]);if(activeData&&penDatas&&typeof penDatas!=='undefined'){var count="0";var batch="-";var age="-";var curve="-";var aweight="0";var agrowth="0";var bmin=undefined;var bmax=undefined;if(penDatas.datas){if(penDatas.datas.count)count=penDatas.datas.count+'';if(penDatas.datas.batch)batch=penDatas.datas.batch;if(batchDatas){age=Math.floor((Date.now()-batchDatas.time)/(1000*60*60*24))+'';curve=batchDatas.gcurve;bmin=batchDatas.datas.devianceMax+'';bmax=batchDatas.datas.devianceMax+'';}if(weightCalcs){if(weightCalcs.PenWeight)aweight=Math.round(weightCalcs.PenWeight*1000)/1000+'';if(weightCalcs.PenGrowth)agrowth=Math.round(weightCalcs.PenGrowth*1000)/1000+'';}}return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_Button,{Texts:[activeData.pen],Title:true}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.Prop1'),count],[t('Pen_Display.Prop2'),batch],[t('Pen_Display.Prop3'),age],[t('Pen_Display.Prop4'),aweight],[t('Pen_Display.Prop5'),agrowth],[t('Pen_Display.Prop6'),curve],[t('Pen_Display.Prop7'),t('Pen_Display.Prop7Data',{min:bmin,max:bmax})],[t('Pen_Display.Prop8'),t('Pen_Display.Prop8Time',{date:undefined})],[t('Pen_Display.Prop9'),""]]}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.alignItemsCenter,Common.border,Object(Root["a" /* isApp */])()?{width:'80%'}:{},{minHeight:400,minWidth:400,marginBottom:20}]},react_default.a.createElement(Components_CurveViewer,{WeighningsDatas:{Batch:batchDatas,TempCurve:graphDatas,Weights:defineProperty_default()({},activeData.pen,weighingsDatas)},maxHeight:650})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginBottom:20}]},react_default.a.createElement(Components_ContentProp,{Columns:1,Datas:[[t('Pen_Display.ControlWeights_Title')]]}),react_default.a.createElement(View_default.a,{style:{height:10}}),react_default.a.createElement(FlatList_default.a,{style:[Layout.fullWidth,{maxWidth:600,minHeight:125,maxHeight:250}],data:weighingsDatas?Object.keys(weighingsDatas).reverse():null,renderItem:function renderItem(_ref){var item=_ref.item,index=_ref.index;var WeightData=weighingsDatas[item];var weight=Math.round(WeightData.weight*1000)/1000+'';return react_default.a.createElement(View_default.a,{style:[Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.WeightTime',{date:new Date(WeightData.time)}),t('Pen_Display.WeightData',{weight:weight,count:WeightData.count})]]}));},numColumns:1,keyExtractor:function keyExtractor(item,index){return String(index);}})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginBottom:20}]},react_default.a.createElement(Components_ContentProp,{Columns:1,Datas:[[t('Pen_Display.ActivityLog_Title')]]}),react_default.a.createElement(View_default.a,{style:{height:10}}),react_default.a.createElement(FlatList_default.a,{style:[Layout.fullWidth,{maxWidth:600,minHeight:125,maxHeight:250}],data:commentsDatas?Object.keys(commentsDatas).reverse():null,renderItem:function renderItem(_ref2){var item=_ref2.item,index=_ref2.index;var CommentData=commentsDatas[item];var weight=CommentData.weight?Math.round(CommentData.weight*1000)/1000+'':'-';var DataString="";if(CommentData.action===defines["c" /* Operations */].NOTE)DataString=t('Pen_Display.NoteData',{note:CommentData.data});else DataString=t('Pen_Display.ActivityData',{count:CommentData.quantity,action:CommentData.action,weight:weight,note:CommentData.data});return react_default.a.createElement(View_default.a,{style:[Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.ActivityTime',{date:new Date(CommentData.time)}),DataString]]}));},numColumns:1,keyExtractor:function keyExtractor(item,index){return String(index);}})),react_default.a.createElement(Components_OperationsPanel,{Type:3}))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Pen_Display = (Pen_Display_Pen_Display);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/CheckBox/index.js
var CheckBox = __webpack_require__(309);
var CheckBox_default = /*#__PURE__*/__webpack_require__.n(CheckBox);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Weighing.js
var Weighing_Weighing=function Weighing(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["b" /* useDispatch */])();var firebaseLoading=Object(es["c" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["c" /* useSelector */])(function(state){return state.firebase.error;});var farmId=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.activeData.farm:undefined;});var activeData=Object(es["c" /* useSelector */])(function(state){return state.firebase.activeData?state.firebase.activeData:undefined;});var sectionDatas=Object(es["c" /* useSelector */])(function(state){return state.firebase.sections;});var _useState=Object(react["useState"])({}),_useState2=slicedToArray_default()(_useState,2),Sections=_useState2[0],setSections=_useState2[1];var _useState3=Object(react["useState"])({}),_useState4=slicedToArray_default()(_useState3,2),Pens=_useState4[0],setPens=_useState4[1];var _useState5=Object(react["useState"])(""),_useState6=slicedToArray_default()(_useState5,2),SelectedSection=_useState6[0],setSelectedSection=_useState6[1];var _useState7=Object(react["useState"])(""),_useState8=slicedToArray_default()(_useState7,2),SelectedPen=_useState8[0],setSelectedPen=_useState8[1];var lastWeighingPen=null;var weighingsDatas=Object(es["c" /* useSelector */])(function(state){return SelectedPen&&state.firebase.weighings&&state.firebase.weighings[SelectedPen]?state.firebase.weighings[SelectedPen]:undefined;});var penDatas=Object(es["c" /* useSelector */])(function(state){return SelectedPen&&state.firebase.pens&&state.firebase.pens[SelectedPen]?state.firebase.pens[SelectedPen]:undefined;});var _useState9=Object(react["useState"])(new Date()),_useState10=slicedToArray_default()(_useState9,2),WeightDate=_useState10[0],setWeightDate=_useState10[1];var _useState11=Object(react["useState"])(0),_useState12=slicedToArray_default()(_useState11,2),Quantity=_useState12[0],setQuantity=_useState12[1];var _useState13=Object(react["useState"])(0),_useState14=slicedToArray_default()(_useState13,2),Weight=_useState14[0],setWeight=_useState14[1];var _useState15=Object(react["useState"])(""),_useState16=slicedToArray_default()(_useState15,2),SelectedWeight=_useState16[0],setSelectedWeight=_useState16[1];var _useState17=Object(react["useState"])(false),_useState18=slicedToArray_default()(_useState17,2),Edit=_useState18[0],setEdit=_useState18[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(farmId&&(!sectionDatas||typeof sectionDatas==='undefined')){dispatch(Firebase_Section["a" /* default */].action({FarmId:farmId}));}},[farmId]);Object(react["useEffect"])(function(){var _Sections=sectionDatas?Object(formators["b" /* sortObject */])(sectionDatas):{};var Section=_Sections?Object.keys(_Sections)[0]:"";if(activeData&&activeData.section&&_Sections[activeData.section]){Section=activeData.section;}setSections(_Sections);setSelectedSection(Section);},[sectionDatas,activeData]);Object(react["useEffect"])(function(){var _Pens=Sections&&Sections[SelectedSection]?Object(formators["b" /* sortObject */])(Sections[SelectedSection].pens):{};var Pen=_Pens?Object.keys(_Pens)[0]:"";if(activeData&&activeData.pen&&_Pens[activeData.pen]){Pen=activeData.pen;}setPens(_Pens);setSelectedPen(Pen);},[SelectedSection,Sections]);Object(react["useEffect"])(function(){if(SelectedPen&&lastWeighingPen!==SelectedPen){lastWeighingPen=SelectedPen;dispatch(Firebase_Weighing["a" /* default */].action({FarmId:farmId,PenId:SelectedPen,SectionId:SelectedSection}));dispatch(Firebase_Pen["a" /* default */].action({FarmId:farmId,PenId:SelectedPen}));}},[SelectedPen]);Object(react["useEffect"])(function(){ChangeSelectedWeight();},[penDatas]);var ChangeSelectedWeight=function ChangeSelectedWeight(){var _Edit=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(!_Edit)_Edit=Edit;if(_Edit){if(weighingsDatas&&Object.keys(weighingsDatas).length>0){var Id=Object.keys(weighingsDatas)[0];var Weight=weighingsDatas[Id];setWeightDate(new Date(Weight.time));setWeight(Weight.weight);setQuantity(Weight.count);setSelectedWeight(Id);}else{setWeightDate(new Date());setWeight(0);setQuantity(0);setSelectedWeight("");}}else{setWeightDate(new Date());setWeight(0);setQuantity(0);setSelectedWeight("");}};Object(react["useEffect"])(function(){ChangeSelectedWeight();},[weighingsDatas]);if(sectionDatas&&typeof sectionDatas!=='undefined'&&Sections&&Pens){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.midWidth,Common.border,{padding:5,minWidth:330}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.row,{justifyContent:'space-between',marginBottom:4}]},react_default.a.createElement(View_default.a,{style:[Layout.column,Layout.halvWidth]},react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:SelectedSection,style:[Layout.midWidth,{height:50}],onValueChange:function onValueChange(itemValue,itemIndex){if(Sections[itemValue]){setSelectedSection(itemValue);}}},Object.keys(Sections).map(function(Section,i){return react_default.a.createElement(Picker_default.a.Item,{label:Section,value:Section,key:i});})),react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:SelectedPen,style:[Layout.midWidth,{height:50}],onValueChange:function onValueChange(itemValue,itemIndex){if(Pens[itemValue]){setSelectedPen(itemValue);}}},Object.keys(Pens).map(function(Pen,i){return react_default.a.createElement(Picker_default.a.Item,{label:Pen,value:Pen,key:i});}))),react_default.a.createElement(View_default.a,{style:[Layout.column,Layout.halvWidth,{alignItems:'flex-end'}]},react_default.a.createElement(View_default.a,{style:[Layout.row,Layout.fullWidth,{borderWidth:0,height:50,alignItems:'center',justifyContent:'flex-end'}]},react_default.a.createElement(Text_default.a,{style:[{marginLeft:5}]},"Edit Weights: "),react_default.a.createElement(CheckBox_default.a,{style:[{marginTop:2,marginHorizontal:5}],value:Edit,onValueChange:function onValueChange(){var _Edit=!Edit;setEdit(_Edit);ChangeSelectedWeight(_Edit);}})),Edit&&weighingsDatas&&react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{justifyContent:'flex-end'}]},react_default.a.createElement(Picker_default.a,{mode:"dropdown",selectedValue:SelectedWeight,style:[Layout.fullWidth,{height:50,alignSelf:'flex-end'}],onValueChange:function onValueChange(itemValue,itemIndex){var Weight=weighingsDatas[itemValue];setWeightDate(new Date(Weight.time));setWeight(Weight.weight);setQuantity(Weight.count);setSelectedWeight(itemValue);}},Object.entries(weighingsDatas).map(function(_ref){var _ref2=slicedToArray_default()(_ref,2),Id=_ref2[0],weight=_ref2[1];var d=new Date(weight.time);var time=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();var name=time+" - "+weight.count+":"+weight.weight;return react_default.a.createElement(Picker_default.a.Item,{label:name,value:Id,key:Id});}))))),!Edit?react_default.a.createElement(View_default.a,{style:[Object(Root["a" /* isApp */])()?{}:Layout.halvWidth,{width:315,marginTop:10,paddingHorizontal:5,paddingTop:0,borderRadius:0,alignItems:"center",zIndex:1}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{alignItems:"flex-start",height:22}]},react_default.a.createElement(Text_default.a,{style:[Layout.fullWidth,{marginHorizontal:5,marginVertical:2,color:Colors.input,fontSize:15,fontWeight:"bold"}]},"Weight date:")),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Object(Root["a" /* isApp */])()?{marginBottom:10}:{},{alignItems:'flex-start',height:28}]},react_default.a.createElement(Components_Datetime_Picker,{Selected:WeightDate,onValueChange:function onValueChange(date){setWeightDate(date);}})))):react_default.a.createElement(View_default.a,{style:[Layout.halvWidth,{alignSelf:'flex-end'}]},react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{alignSelf:'center',marginTop:8}]},react_default.a.createElement(Components_Button,{Texts:["Delete weighing"],Actions:[function(){if(!SelectedSection||SelectedSection===""){}else if(!SelectedPen||SelectedPen===""){}else if(!Weight||!Weight.id){}else{}}]}))),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.row,{justifyContent:'space-between'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.halvWidth]},react_default.a.createElement(dist["b" /* Input */],{label:"Animal quantity",style:[Common.textInput,{width:100}],containerStyle:{maxWidth:315},onChangeText:function onChangeText(text){if(!isNaN(text)&&!text.endsWith('.')){setQuantity(text);}},value:Quantity})),react_default.a.createElement(View_default.a,{style:[Layout.column,Layout.halvWidth,{alignItems:'flex-end'}]})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.row,{justifyContent:'space-between'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.halvWidth]},react_default.a.createElement(dist["b" /* Input */],{label:"Total Weight",style:[Common.textInput,{width:100}],containerStyle:{maxWidth:315},onChangeText:function onChangeText(text){if(!isNaN(text)){setWeight(text);}},value:Weight})),react_default.a.createElement(View_default.a,{style:[Layout.column,Layout.halvWidth,{alignItems:'flex-end'}]},react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{alignSelf:'center',marginTop:8}]},react_default.a.createElement(Components_Button,{Texts:["Corridor Scale"],Actions:[function(){}]}))))))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Weighing = (Weighing_Weighing);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/TextInput/index.js
var TextInput = __webpack_require__(69);
var TextInput_default = /*#__PURE__*/__webpack_require__.n(TextInput);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/axios/index.js
var axios = __webpack_require__(622);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Config/index.js
var Config={API_URL:'https://jsonplaceholder.typicode.com/'};
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/index.js
var instance=axios_default.a.create({baseURL:Config.API_URL,headers:{Accept:'application/json','Content-Type':'application/json'},timeout:3000});instance.interceptors.response.use(function(response){return response;},function(_ref){var message=_ref.message,_ref$response=_ref.response,data=_ref$response.data,status=_ref$response.status;return Object(handleError["a" /* default */])({message:message,data:data,status:status});});/* harmony default export */ var Services = (instance);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/User/FetchOne.js
/* harmony default export */ var FetchOne = ((function(){var _ref=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(userId){var response;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log("??2");if(userId){_context.next=3;break;}return _context.abrupt("return",Object(handleError["a" /* default */])({message:'User ID is required'}));case 3:_context.next=5;return Services.get("users/"+userId);case 5:response=_context.sent;return _context.abrupt("return",response.data);case 7:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref.apply(this,arguments);};})());
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/User/FetchOne.js
/* harmony default export */ var User_FetchOne = ({initialState:Object(lib["buildAsyncState"])('fetchOne'),action:Object(lib["buildAsyncActions"])('user/fetchOne',FetchOne),reducers:Object(lib["buildAsyncReducers"])({errorKey:'fetchOne.error',loadingKey:'fetchOne.loading'})});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Example/Index.js
var Index_IndexExampleContainer=function IndexExampleContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout;var dispatch=Object(es["b" /* useDispatch */])();var user=Object(es["c" /* useSelector */])(function(state){return state.user.item;});var fetchOneUserLoading=Object(es["c" /* useSelector */])(function(state){return state.user.fetchOne.loading;});var fetchOneUserError=Object(es["c" /* useSelector */])(function(state){return state.user.fetchOne.error;});var _useState=Object(react["useState"])('1'),_useState2=slicedToArray_default()(_useState,2),userId=_useState2[0],setUserId=_useState2[1];console.log("??");var fetch=function fetch(id){setUserId(id);dispatch(User_FetchOne.action(id));};var changeTheme=function changeTheme(_ref){var theme=_ref.theme,darkMode=_ref.darkMode;dispatch(ChangeTheme["a" /* default */].action({theme:theme,darkMode:darkMode}));};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[[Layout.colCenter,Gutters.smallHPadding]]},react_default.a.createElement(Components_Brand,null),fetchOneUserLoading&&react_default.a.createElement(ActivityIndicator_default.a,null),fetchOneUserError?react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},fetchOneUserError.message):react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Example ",t('example.helloUser',{name:user.name}))),react_default.a.createElement(View_default.a,{style:[Layout.row,Layout.rowHCenter,Gutters.smallHPadding,Gutters.largeVMargin,Common.backgroundPrimary]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall]},t('example.labels.userId')),react_default.a.createElement(TextInput_default.a,{onChangeText:function onChangeText(text){return fetch(text);},editable:!fetchOneUserLoading,keyboardType:'number-pad',maxLength:1,value:userId,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,Gutters.smallBMargin]},"DarkMode :"),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.rounded,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:null});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Auto")),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outlineRounded,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:true});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Dark")),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outline,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:false});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Light")));};/* harmony default export */ var Example_Index = (Index_IndexExampleContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/index.js


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/index.js
var resources_namespaceObject = {};
__webpack_require__.r(resources_namespaceObject);
__webpack_require__.d(resources_namespaceObject, "en", function() { return en; });

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-gesture-handler/lib/module/index.js + 18 modules
var lib_module = __webpack_require__(977);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux-persist/lib/integration/react.js
var integration_react = __webpack_require__(566);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-native-async-storage/async-storage/lib/module/index.js + 2 modules
var async_storage_lib_module = __webpack_require__(323);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(80);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux-persist/es/index.js + 11 modules
var redux_persist_es = __webpack_require__(111);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 3 modules
var redux_toolkit_esm = __webpack_require__(90);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/Init.js
var Init = __webpack_require__(227);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/index.js
/* harmony default export */ var Startup = (Object(lib["buildSlice"])('startup',[Init["a" /* default */]]).reducer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/index.js + 2 modules
var Firebase = __webpack_require__(311);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/DefaultTheme.js
var DefaultTheme = __webpack_require__(228);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/ChangeTheme.js
var ChangeTheme = __webpack_require__(157);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/index.js
/* harmony default export */ var Theme = (Object(lib["buildSlice"])('theme',[DefaultTheme["a" /* default */],ChangeTheme["a" /* default */]],{theme:null,darkMode:null}).reducer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/index.js
var firebasePersistConfig={key:'firebase',storage:async_storage_lib_module["a" /* default */],blacklist:['loading','error','farms','batchs','graphs','activeData','sections','pens','weighings','comments']};var reducers=Object(redux["d" /* combineReducers */])({startup:Startup,firebase:Object(redux_persist_es["g" /* persistReducer */])(firebasePersistConfig,Firebase["a" /* default */]),theme:Theme});var rootPersistConfig={key:'root',storage:async_storage_lib_module["a" /* default */],blacklist:['startup','firebase']};var persistedReducer=Object(redux_persist_es["g" /* persistReducer */])(rootPersistConfig,reducers);var store=Object(redux_toolkit_esm["configureStore"])({reducer:persistedReducer,middleware:function middleware(getDefaultMiddleware){var middlewares=getDefaultMiddleware({serializableCheck:{ignoredActions:[redux_persist_es["a" /* FLUSH */],redux_persist_es["f" /* REHYDRATE */],redux_persist_es["b" /* PAUSE */],redux_persist_es["c" /* PERSIST */],redux_persist_es["d" /* PURGE */],redux_persist_es["e" /* REGISTER */]]}});if(false){ var createDebugger; }return middlewares;}});var persistor=Object(redux_persist_es["h" /* persistStore */])(store);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/stack/lib/module/navigators/createStackNavigator.js + 32 modules
var createStackNavigator = __webpack_require__(248);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/index.js + 34 modules
var Containers = __webpack_require__(62);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/NavigationContainer.js + 3 modules
var NavigationContainer = __webpack_require__(563);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Root.js
var Root = __webpack_require__(34);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/SafeAreaView/index.js
var SafeAreaView = __webpack_require__(46);
var SafeAreaView_default = /*#__PURE__*/__webpack_require__.n(SafeAreaView);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StatusBar/index.js
var StatusBar = __webpack_require__(71);
var StatusBar_default = /*#__PURE__*/__webpack_require__.n(StatusBar);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js + 12 modules
var src_Theme = __webpack_require__(32);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Application.js
var Stack=Object(createStackNavigator["a" /* default */])();var MainNavigator;var AuthNavigator;var AdminNavigator;var UserNavigator;var Application_ApplicationNavigator=function ApplicationNavigator(){var _useTheme=Object(src_Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;var _useState=Object(react["useState"])(false),_useState2=slicedToArray_default()(_useState,2),isApplicationLoaded=_useState2[0],setIsApplicationLoaded=_useState2[1];var applicationIsLoading=Object(es["c" /* useSelector */])(function(state){return state.startup.loading;});Object(react["useEffect"])(function(){if(MainNavigator==null&&!applicationIsLoading){MainNavigator=__webpack_require__(176).default;}if(AuthNavigator==null&&!applicationIsLoading){AuthNavigator=__webpack_require__(290).default;}if(AdminNavigator==null&&!applicationIsLoading){AdminNavigator=__webpack_require__(974).default;}if(UserNavigator==null&&!applicationIsLoading){UserNavigator=__webpack_require__(975).default;}if(MainNavigator!==null&&AuthNavigator!==null&&AdminNavigator!==null&&UserNavigator!==null){setIsApplicationLoaded(true);}},[applicationIsLoading]);Object(react["useEffect"])(function(){return function(){setIsApplicationLoaded(false);MainNavigator=null;AuthNavigator=null;};},[]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react_default.a.createElement(NavigationContainer["a" /* default */],{theme:NavigationTheme,ref:Root["c" /* navigationRef */]},react_default.a.createElement(StatusBar_default.a,{barStyle:darkMode?'light-content':'dark-content'}),react_default.a.createElement(Stack.Navigator,{headerMode:'none',initialRouteName:"Startup"},react_default.a.createElement(Stack.Screen,{name:"Startup",component:Containers["i" /* IndexStartupContainer */]}),isApplicationLoaded&&MainNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Main",component:MainNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&AuthNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Auth",component:AuthNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&AdminNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Admin",component:AdminNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&UserNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"User",component:UserNavigator,options:{animationEnabled:false}}))));};/* harmony default export */ var Application = (Application_ApplicationNavigator);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Main.js
var Main = __webpack_require__(176);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Auth.js
var Auth = __webpack_require__(290);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/index.js

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/i18next/dist/esm/i18next.js + 9 modules
var i18next = __webpack_require__(322);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(189);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/en.js
/* harmony default export */ var en = ({SplashText:'AgrisysApp, protein automation technology.',AgrisysFront:{Welcome:'Welcome to Agrisys App',Menu1:'Agrisys Cloud',Menu2:'Connect to Device'},AgrisysConnect:{NavTitle:'User Login',label1:'Email:',label2:'Password:',submit_btn:'Login',reset:'Send reset password',create:'Create New User'},AgrisysAdmin:{NavTitle:'Admin Panel',Welcome:'Welcome: {{name}}',UserBoard:'User Board',Systems:'Systems',Tools:'Tools',Logout:'Log Out'},AgrisysMenu:{NavTitle:'User Panel',Welcome:'Welcome: {{name}}',DashBoard:'DashBoard',Pens:'Pens',Batchs:'Batchs',Growth:'Growth Curves',Operations:'Operations',Autofunctions:'AutoPigs',FeedingFunctions:'Feeding',Pigs:'Pigs',Logout:'Log Out'},DashBoard:{Title:'Farm description',Prop1:'Farm Name',Prop2:'Manager',Prop3:'E-mail',CapacityTxt:'Farm Capacity {{current}} of {{full}}',PerformanceTxt:'Farm performance',BatchesTitle:'Batches:',BatchLable:'{{name}} Startdate: {{Sdate}} EndForcast: {{Edate}},\n{{pigs}} pigs, weight: {{weight}}',FarmInfo_btn:'Farm Information',UserInfo_btn:'User Information',ClearData:'Clear local datastore'},Pens:{},Pen_Display:{Prop1:'Pig count',Prop2:'Batch',Prop3:'Age Days',Prop4:'Average Weight',Prop5:'Average growth pr pig a day',Prop6:'Growth Curve',Prop7:'Alarm Min-Max',Prop7Data:'{{min}}% - {{max}}%',Prop8:'Last Feed time',Prop8Time:'{{date, DD-MM-YYYY HH:mm:ss}}',Prop9:'Portion in kg.',ControlWeights_Title:'Control weighings',WeightTime:'{{date, DD-MM-YYYY HH:mm:ss}}',WeightData:'{{weight}} kg : {{count}} pigs',ActivityLog_Title:'Activity Log',ActivityTime:'{{date, DD-MM-YYYY HH:mm:ss}}',NoteData:'Pen Note: \n{{note}}',ActivityData:'{{count}} * {{action}} of {{weight}} kg \n{{note}}'},Batchs:{New:'New Batch',Edit:'Edit or Close Batch',Close:'Close Batch',Hide:'Hide Closed Batche\'s',Show:'Show Closed Batche\'s',Name:'Batch Name',StartD:'Start date:',GrowthCurve:'Growth curve:',Target:'Target',DevianceMin:'Deviance Min alert procentage',DevianceMax:'Devoamce Max alert procentage',PensIn:'Pens in Batch..'},Graphs:{New:'New Curve',Name:'Curve Name',Day:'Day:',Weight:'Weight:',NewPoint:'New Point',EValue:'Value error'},Operations:{Weight:'Weight',AddPen:'Add Pen',RemovePen:'Remove Pen',Note:'Note',AddPig:'Add Pig',MovePig:'Move Pig',Treatment:'Treatment',SoldPig:'Sold Pig',NoteTitle:'Pen Note:',OperationTitle:'Operations comment:'},CommentModule:{NotePlaceholder:'Note context..'},ActionButtons:{Save:'Save',Done:'Done',Cancel:'Cancel'},GraphViewer:{X_DateFormat:'{{date, DD-MM-YYYY HH:mm}}'},example:{helloUser:'I am a fake user, my name is {{name}}',labels:{userId:'Enter a user id'}}});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/index.js

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/moment/moment.js
var moment = __webpack_require__(18);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}i18next["a" /* default */].use(context["e" /* initReactI18next */]).init({resources:_objectSpread({},Object.entries(resources_namespaceObject).reduce(function(acc,_ref){var _ref2=slicedToArray_default()(_ref,2),key=_ref2[0],value=_ref2[1];return _objectSpread(_objectSpread({},acc),{},defineProperty_default()({},key,{translation:value}));},{})),interpolation:{format:function format(value,_format,lng){if(_format==='uppercase')return value.toUpperCase();if(value instanceof Date){var formated=moment_default()(value).format(_format);return formated;}return value;}},lng:'en'});/* harmony default export */ var Translations = (i18next["a" /* default */]);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/App.tsx
var App_App=function App(){return react_default.a.createElement(es["a" /* Provider */],{store:store},react_default.a.createElement(integration_react["PersistGate"],{loading:null,persistor:persistor},react_default.a.createElement(Application,null)));};/* harmony default export */ var AgrisysApp_App = __webpack_exports__["a"] = (App_App);

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(980);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/User.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function signin(_x){return _signin.apply(this,arguments);}function _signin(){_signin=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(_ref){var Email,Pass,res;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:Email=_ref.Email,Pass=_ref.Pass;if(!Object(Initial["a" /* auth */])().currentUser){_context2.next=10;break;}if(!(Object(Initial["a" /* auth */])().currentUser.email!=Email)){_context2.next=7;break;}_context2.next=5;return logout();case 5:_context2.next=10;break;case 7:_context2.next=9;return getUserData();case 9:return _context2.abrupt("return",_context2.sent);case 10:_context2.next=12;return Object(Initial["a" /* auth */])().signInWithEmailAndPassword(Email,Pass).then(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(e){var User;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return getUserData();case 2:User=_context.sent;return _context.abrupt("return",User);case 4:case"end":return _context.stop();}}},_callee);}));return function(_x5){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log("User Signin Error: ",error);if(error.code==='auth/invalid-email'){return Object(handleError["a" /* default */])({message:'The email addres is invalid'});}return Object(handleError["a" /* default */])({message:'Could not singin'});});case 12:res=_context2.sent;return _context2.abrupt("return",res);case 14:case"end":return _context2.stop();}}},_callee2);}));return _signin.apply(this,arguments);}function logout(){return _logout.apply(this,arguments);}function _logout(){_logout=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(){var res;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return Object(Initial["a" /* auth */])().signOut().then(function(){console.log("logout");return null;}).catch(function(){var _ref3=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(error){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log("User logout error:",error);_context3.next=3;return getUserData();case 3:return _context3.abrupt("return",_context3.sent);case 4:case"end":return _context3.stop();}}},_callee3);}));return function(_x6){return _ref3.apply(this,arguments);};}());case 2:res=_context4.sent;return _context4.abrupt("return",res);case 4:case"end":return _context4.stop();}}},_callee4);}));return _logout.apply(this,arguments);}function resetPassword(_x2){return _resetPassword.apply(this,arguments);}function _resetPassword(){_resetPassword=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(_ref4){var Email,res;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:Email=_ref4.Email;_context5.next=3;return Object(Initial["a" /* auth */])().sendPasswordResetEmail(Email).then(function(){return null;}).catch(function(error){console.log("User resetPass error:",error);if(error.code==='auth/user-not-found'){}return Object(handleError["a" /* default */])({message:'Could not send reset'});});case 3:res=_context5.sent;return _context5.abrupt("return",res);case 5:case"end":return _context5.stop();}}},_callee5);}));return _resetPassword.apply(this,arguments);}function getUserData(){return _getUserData.apply(this,arguments);}function _getUserData(){_getUserData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee6(){var Data,_Meta,Data2;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(!Object(Initial["a" /* auth */])().currentUser){_context6.next=11;break;}Data=function(_ref5){var displayName=_ref5.displayName,email=_ref5.email,emailVerified=_ref5.emailVerified,phoneNumber=_ref5.phoneNumber,photoURL=_ref5.photoURL,uid=_ref5.uid,refreshToken=_ref5.refreshToken;return{displayName:displayName,email:email,emailVerified:emailVerified,phoneNumber:phoneNumber,photoURL:photoURL,uid:uid,refreshToken:refreshToken};}(Object(Initial["a" /* auth */])().currentUser);if(Object(Initial["a" /* auth */])().currentUser.metadata){_Meta=function(_ref6){var creationTime=_ref6.creationTime,lastSignInTime=_ref6.lastSignInTime;return{creationTime:creationTime,lastSignInTime:lastSignInTime};}(Object(Initial["a" /* auth */])().currentUser.metadata);Data.metadata=_Meta;}if(!Object(Initial["a" /* auth */])().currentUser.uid){_context6.next=8;break;}_context6.next=6;return fetch(Data.uid);case 6:Data2=_context6.sent;Data=_objectSpread(_objectSpread({},Data),Data2);case 8:return _context6.abrupt("return",Data);case 11:return _context6.abrupt("return",null);case 12:case"end":return _context6.stop();}}},_callee6);}));return _getUserData.apply(this,arguments);}function fetch(_x3){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee7(UserId){var List,user,ref,userData,_args7=arguments;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:List=_args7.length>1&&_args7[1]!==undefined?_args7[1]:false;user="";if(UserId)user=UserId;else if(!List&&Object(Initial["a" /* auth */])().currentUser)user=Object(Initial["a" /* auth */])().currentUser.uid;if(!(user||List)){_context7.next=11;break;}ref="users/"+user;_context7.next=7;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(userData){var data=userData.val();return data;}).catch(function(error){console.log(error);if(error.code==='database/permission-denied'){console.log("User update was permission denied. ");}else if(error.code){console.log("User update Error: ",error);}return Object(handleError["a" /* default */])({message:'User fetch, An error occurred'});});case 7:userData=_context7.sent;return _context7.abrupt("return",userData);case 11:return _context7.abrupt("return",Object(handleError["a" /* default */])({message:'User uid in fecth unknown'}));case 12:case"end":return _context7.stop();}}},_callee7);}));return _fetch.apply(this,arguments);}function update(_x4){return _update.apply(this,arguments);}function _update(){_update=asyncToGenerator_default()(regenerator_default.a.mark(function _callee8(userId){var response;return regenerator_default.a.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(userId){_context8.next=2;break;}return _context8.abrupt("return",Object(handleError["a" /* default */])({message:'User ID is required'}));case 2:_context8.next=4;return api.get("users/"+userId);case 4:response=_context8.sent;return _context8.abrupt("return",response.data);case 6:case"end":return _context8.stop();}}},_callee8);}));return _update.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/User.js
/* harmony default export */ var Firebase_User = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/user',getUserData),signin:Object(lib["buildAsyncActions"])('firebase/user',signin),logout:Object(lib["buildAsyncActions"])('firebase/user',logout),reset:Object(lib["buildAsyncActions"])('firebase/user',resetPassword),fetch:Object(lib["buildAsyncActions"])('firebase/user',fetch),update:Object(lib["buildAsyncActions"])('firebase/user',update),reducers:Object(lib["buildAsyncReducers"])({itemKey:'user',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Hexagon-globe.fce26805.png";

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Hexa-icon.5129d536.png";

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Loading_Colour.4562350c.png";

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login-bottom.bc3dd278.png";

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login-protein.d27f7882.png";

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Logo.9b051259.png";

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Home.1fff8434.png";

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dashboard.26766c7a.png";

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/System.7e4af00c.png";

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Feed-Curves.da739887.png";

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Growth-curve.7f9a7fea.png";

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/User.d73be9fd.png";

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Sow.beff0aff.png";

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABRCAYAAACuepoLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAq9JREFUeNrsnT1Lw1AUhk9FRFEhDhV0qgouLlrcjYOLi3XpasEfYjo62X/Quorg5iS0P0D8GBzVOAkWP6CVigg1197E0Naa3ER7b/K+cLig3tP4eJJz8g5XIig0JRS8Zr3Pn1+JUgE0JYgjK1JRqEz2y9DE1IJwgrdalRr1BxoZm6Th8aTvfVwvVqxacaE8zLXtQ+EEN+cHdH12QHPpLM0uZX3tbdSrdHmyS7VH0wY6w1caQNvwp5GxJC2v57+q2pJmRc7+HmAKaHBolGbTTkVvAGYIFdoBucfPp7p1rH8efwr280iJiu3ytUUr9iSY5+yZrqIqTAayzB+sIgOqHtJgq7vGD1IRpsaHUY3PTptWmCJjC5+/Ao8/7hlONZgZ/ow0OQylqkIGubv5Cl/3ATI4zFQUX+T7BRMCTMCM5mumqhf+fH8lvLdRqzqraJ7aU++pscznuyBvPk3XjEh/lKcpWZSVr8x+mMNufby/2p6m+rc58xRFZZvD0/O6b3PY/Zg5Pd5BA0I3B0yMRlsU3Ms0ALOlXAh5dwCzpZIVdwEh5uP4x+gGk1lwlYAQjDjCRAMCTMAETAgwARMwoZ5zphJiNpqonri73lrF8thu/U+C0x5Dpz0v2fWYKlcmGhC6OQSYMo1GMjnthkSsfr2WRFsD0lFfnlh5rswSyeO0y5BHyKiO4mgURh7POdCA0M0BEzAhwARMwIQAEzABEzAhwARMwIQ6FRen3fgPmHDaxVh5rswSwWnvlsOX4LQHzIEGhG4OmIAJASZgAiYEmIAJmPGEafJVBxZHi21sPCvH30Fv8W7uqMj3F/1uZCe6PtP3vxvQYg7TcO33dLe6LTh2ACk7Gpe5RxkeFcELKYd0m/UrT4q+zxMtBODgHOLcjHnc8oLyrMQvUDWKr3xX46cAAwCxt3YCfnN46AAAAABJRU5ErkJggg=="

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Area_Colour.f4a4e098.png";

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AutoPig.ec16c410.png";

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Feed-Components.224ca1b3.png";

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/TOM.c88886f3.png";

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Loading.d6c81c08.png";

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJGQgms3HggAqXogBtGFWhoKH8gyDGhQAZJBIAAyaCLQwAaiDQMa4gCk5gOxAg57HgBxItDQA8iCTDhcsx+PQQxQuf1QtbgNQ/ISMUCAkGFkgxFs2AcS9H/Aaxgw7UwAUoHQtMRAIJ1NICUHgFJ6PnoOAOIJ2LIVMXlTAZqlQKARaMiDoVcEAQQYAAGBK0YfviPfAAAAAElFTkSuQmCC"

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dot1.3d67e5c4.png";

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNpiYBgRgJEYRau2XEgAUv5APDHMx+AAWYYBDXEAUv1AbIAkvACIG4GGPiDKMKAhClBDAnDY8wHqyga8hgENArliPxALEBECG4AGBsI4TFgUCBBpEAO6OiZqxuYINuwDCfo/4DUMGNUXgJQiEB8gYFAjECeSmgPmA7ECctoC4kKicwAWQ0Ep3R6ajQ4MvSIIIMAAPMImij6WWagAAAAASUVORK5CYII="

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNpiYBgRgJGQghlLTwYAqXwgnpgRbb6BLMOAhigAqflA7IAkfACIE4GGPiDKMKAhAkCqHogL8DhiAhA3Ag39gCzIgkXhfSAWIOB7kEUJQCyILMiERaEAkeGNoY6JmrE5gg37QKTeD8QYpgjECwgYtACqjugc4ABNvOg5AJRYD5CbN0GJMx6IFwINWTA0iyCAAAMArochall3X5YAAAAASUVORK5CYII="

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJJJREFUeNpiYBgRgJGQgpaphxyAVD4Qb6zJtltAlmFAQxSAVD0QJyAJXwDiQqChB4g2DGhQA9Q1Ajjs2gA19AFew4AGrQdSAUQE0QcgdgQaeAEmwIRFkQCR4S2ArpaJmrE5ahhR4AMhwwKBuJGAIaBEq4icLIjJAf1oaQ6USBNJygFY8iYoWx0EGtIwNIsggAADADEdJt0T+TglAAAAAElFTkSuQmCC"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNpiYBgRgJGQguL2PQpAqh+ILwLxhN5Klw8kGwY0RABIFQBxPZLwAyAuBBq4gWjDgAYlQF0jgMOuA1BDL+A1DGjQeiAVQGQwGSIbyIRFgQAJYY6ilomasTmCDftAgv4PeA0DRnUgKA0RMBSUHBwJpjO0HABKuAloLgEl1gXk5k0DaJYimDcHLwAIMACbvCs8jFzcagAAAABJRU5ErkJggg=="

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJGQgvjyrQJAqh+IPwBx48JO7w9kGQY0qAFI5QOxAFQIZuAEog0DGuIApOYDsQIOex4AcSLQ0APIgkxYDCoAUvvxGMQAldsPVYvbMCQvEQMECBlGNhjBhn0gQf8HvIZBE2QiNC0x4ElngeiJl5FANirAkgMmAg1pIDdvghJoPZQLykoPhl4RBBBgAK6NK0a1l76JAAAAAElFTkSuQmCC"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJFJREFUeNpiYBgRgJGQgrCCTQJAqgCI5YG4cdUEvwdkGQY0KAFI1QOxApJwIxBPABr6gSjDgIY4QA1xwGHPA6grF+A1DGiQAZA6T2QwFQINnADjMGFRIEBCmKOoZaJmbI4aRgXDgFF9AEg5AvEFPPo+QJNFAyk5oACaeJGTwARogv1Abt6EZalCfHlz8AKAAAMA8Rkn94mFeZ0AAAAASUVORK5CYII="

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJFYhX6Z6wuAlD0QN26aHniBLMOAhjgAqflArIAkvACIC4GGfiDKMKAhIM39QByAQ8kHqCsn4DUMaJABkDpPZAhsABoYCGIw4VAgQEK4w9UyUTM2R7hhH0gw4wNew6Ap3BCIDxAwpBGIE0nJAQHQxIucAzZAc8ADcvNmA5DSB+KJQEMODK0iCCDAAE9gKELWpYShAAAAAElFTkSuQmCC"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNpiYBgRgJFYhW7JawKAVD4QN+6aG3KALMOAhhgAqX4gdkASBhmWCDT0AVGGAQ0RgBqSgMeuRiCeADT0A4jDhEfhfQIGgUA9VB0DIcMEiAxOAWIMIxmMGsbwgUgzPhBjmCEQLyBgEEhekZQc4ABNvAZoOaAQmFgvkJs3QQk4HognAg3ZMLSKIIAAAwAWbSJFecmUZwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ObjectsEqual */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sortObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStringCheck; });
function _createForOfIteratorHelperLoose(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function ObjectsEqual(first,second){if(!first){if(second)return false;else return true;}if(!second)return false;var al=Object.getOwnPropertyNames(first);var bl=Object.getOwnPropertyNames(second);if(al.length!==bl.length)return false;var hasAllKeys=al.every(function(value){return!!bl.find(function(v){return v===value;});});if(!hasAllKeys)return false;for(var _iterator=_createForOfIteratorHelperLoose(al),_step;!(_step=_iterator()).done;){var key=_step.value;if(first[key]!==second[key]){if(typeof first[key]!=='object'||typeof second[key]!=='object'||!ObjectsEqual(first[key],second[key]))return false;}}return true;}var reA=/[^a-zA-Z]/g;var reN=/[^0-9]/g;function sortAlphaNum(a,b){var aA=a.replace(reA,"");var bA=b.replace(reA,"");if(aA===bA){var aN=parseInt(a.replace(reN,""),10);var bN=parseInt(b.replace(reN,""),10);return aN===bN?0:aN>bN?1:-1;}else{return aA>bA?1:-1;}}function sortObject(o){var sorted={},key,a=[];for(key in o){if(o.hasOwnProperty(key)&&key!=="__jsogObjectId"&&key!=="update_time"){a.push(key);}}a.sort(sortAlphaNum);for(key=0;key<a.length;key++){sorted[a[key]]=o[a[key]];}return sorted;}function DataStringCheck(data){var Check_num=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!data||data===""){return false;}if(!typeof data==='string'){return false;}else{if(Check_num){var first=data[0];var numbers='0123456789';for(var i=0;i<numbers.length;i++){if(first===numbers[i]){return false;}}}var specialChars='/[`!@#$%^&*()+\-=\[\]{};\':"\\|,.<>\/?~]/¨´';for(var i=0;i<specialChars.length;i++){if(data.indexOf(specialChars[i])>-1){return false;}}}return true;}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(27);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(35);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Sections.js
var Firebase_Sections = __webpack_require__(238);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Weighings.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x,_x2){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee6(_ref,_rend){var FarmId,PenId,SectionId,_ref$limitStart,limitStart,_ref$limitTo,limitTo,DataTime,MemSections,ref,res,state,te,newWeights;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId,SectionId=_ref.SectionId,_ref$limitStart=_ref.limitStart,limitStart=_ref$limitStart===void 0?0:_ref$limitStart,_ref$limitTo=_ref.limitTo,limitTo=_ref$limitTo===void 0?9999:_ref$limitTo,DataTime=_ref.DataTime,MemSections=_ref.MemSections;if(!FarmId){_context6.next=22;break;}ref="farms_data/"+FarmId+"/weighings";if(!PenId){_context6.next=15;break;}console.log("Weight fetch called, getting Pen");ref+="/"+PenId;res=defineProperty_default()({},PenId,{});state=_rend.getState();if(state.firebase.weighings){res=_objectSpread({},state.firebase.weighings);}_context6.next=11;return Object(Initial["b" /* database */])().ref(ref).orderByChild('time').limitToLast(limitTo).once('value',function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(snapshot){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:res[snapshot.key]={};snapshot.forEach(function(c){res[snapshot.key][c.key]=c.val();});case 2:case"end":return _context.stop();}}},_callee);}));return function(_x4){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log(error);return Object(handleError["a" /* default */])({message:'Fecth Weights Error'});});case 11:te=_context6.sent;return _context6.abrupt("return",res);case 15:console.log("Weight fetch called, getting Sections");newWeights={};_context6.next=19;return Object(Firebase_Sections["a" /* fetch */])({FarmId:FarmId}).then(function(){var _ref3=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(sections){var Sections;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:Sections=sections?sections:MemSections;_context5.next=3;return Promise.all(Object.entries(Sections).map(function(){var _ref4=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(_ref5){var _ref6,section,data;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_ref6=slicedToArray_default()(_ref5,2),section=_ref6[0],data=_ref6[1];if(!(data&&data.pens)){_context4.next=4;break;}_context4.next=4;return Promise.all(Object.entries(data.pens).map(function(){var _ref7=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(_ref8){var _ref9,pen,data;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_ref9=slicedToArray_default()(_ref8,2),pen=_ref9[0],data=_ref9[1];if(!(pen!=="update_time")){_context3.next=4;break;}_context3.next=4;return fetch({FarmId:FarmId,PenId:pen,limitStart:0,limitTo:limitTo},_rend).then(function(){var _ref10=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(weights){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(Object.keys(weights[Object.keys(weights)[0]]).length>0){newWeights=_objectSpread(_objectSpread({},newWeights),weights);}case 1:case"end":return _context2.stop();}}},_callee2);}));return function(_x8){return _ref10.apply(this,arguments);};}()).catch(function(error){console.log(error);});case 4:case"end":return _context3.stop();}}},_callee3);}));return function(_x7){return _ref7.apply(this,arguments);};}()));case 4:case"end":return _context4.stop();}}},_callee4);}));return function(_x6){return _ref4.apply(this,arguments);};}()));case 3:case"end":return _context5.stop();}}},_callee5);}));return function(_x5){return _ref3.apply(this,arguments);};}()).catch(function(error){console.log(error);return Object(handleError["a" /* default */])({message:'Fecth Weights Error'});});case 19:if(!(Object.keys(newWeights).length>0)){_context6.next=22;break;}newWeights.update_time=Date.now();return _context6.abrupt("return",newWeights);case 22:return _context6.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Weights Error'}));case 23:case"end":return _context6.stop();}}},_callee6);}));return _fetch.apply(this,arguments);}function create(_x3){return _create.apply(this,arguments);}function _create(){_create=asyncToGenerator_default()(regenerator_default.a.mark(function _callee8(_ref11){var FarmId,PenId,Weight,Quantity,Date,ref,weightRef,weightId,res;return regenerator_default.a.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:FarmId=_ref11.FarmId,PenId=_ref11.PenId,Weight=_ref11.Weight,Quantity=_ref11.Quantity,Date=_ref11.Date;if(!FarmId){_context8.next=15;break;}ref="farms_data/"+FarmId+"/weighings";if(!PenId){_context8.next=15;break;}ref+="/"+PenId+"/";_context8.next=7;return Object(Initial["b" /* database */])().ref(ref).push();case 7:weightRef=_context8.sent;weightId=weightRef.key;_context8.next=11;return weightRef.set({time:Date,weight:Weight,count:Quantity}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee7(){var res2;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return fetch({FarmId:FarmId,PenId:PenId,DataTime:"SET"}).then(function(weights){return weights;});case 2:res2=_context7.sent;return _context7.abrupt("return",res2);case 4:case"end":return _context7.stop();}}},_callee7);}))).catch(function(error){console.log("Create Weight Error: ",error);return Object(handleError["a" /* default */])({message:'Create Weight Error'});});case 11:res=_context8.sent;return _context8.abrupt("return",res);case 15:return _context8.abrupt("return",Object(handleError["a" /* default */])({message:'Create Weights Error'}));case 16:case"end":return _context8.stop();}}},_callee8);}));return _create.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Weighing.js
/* harmony default export */ var Weighing = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/weighings',fetch),create:Object(lib["buildAsyncActions"])('firebase/weighings',create),reducers:Object(lib["buildAsyncReducers"])({itemKey:'weighings',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(248);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(324);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
var AuthStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();var AdminNavigator=function AdminNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_8__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* IndexAdminContainer */ "e"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysAdmin.NavTitle'),headerLeft:function headerLeft(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{padding:6,paddingLeft:15}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_elements__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"],{name:"md-arrow-back",type:"ionicon",size:25,color:"white",iconStyle:{color:"white"},onPress:function onPress(){var _navigationRef$curren;return(_navigationRef$curren=_Navigators_Root__WEBPACK_IMPORTED_MODULE_3__[/* navigationRef */ "c"].current)==null?void 0:_navigationRef$curren.navigate('Main',{screen:'Home'});}}));}};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"System",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* SystemsBoard */ "n"],options:function options(_ref2){var navigation=_ref2.navigation;return{};}})));};/* harmony default export */ __webpack_exports__["default"] = (AdminNavigator);

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(248);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(324);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
var UserStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();var UserNavigator=function UserNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_8__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* IndexUserContainer */ "j"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysMenu.NavTitle'),headerLeft:function headerLeft(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{padding:6,paddingLeft:15}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_elements__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"],{name:"md-arrow-back",type:"ionicon",size:25,color:"white",iconStyle:{color:"white"},onPress:function onPress(){console.log(props);if(props.label==="Admin"){var _navigationRef$curren;(_navigationRef$curren=_Navigators_Root__WEBPACK_IMPORTED_MODULE_3__[/* navigationRef */ "c"].current)==null?void 0:_navigationRef$curren.navigate('Admin',{screen:'Home'});}else{var _navigationRef$curren2;(_navigationRef$curren2=_Navigators_Root__WEBPACK_IMPORTED_MODULE_3__[/* navigationRef */ "c"].current)==null?void 0:_navigationRef$curren2.navigate('Main',{screen:'Home'});}}}));}};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"DashBoard",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* DashBoard */ "c"],options:function options(_ref2){var navigation=_ref2.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Pens",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Pens */ "m"],options:function options(_ref3){var navigation=_ref3.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Pen_Display",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Pen_Display */ "l"],options:function options(_ref4){var navigation=_ref4.navigation;return{title:'Pen Display'};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Batchs",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Batchs */ "a"],options:function options(_ref5){var navigation=_ref5.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"GrowthCurves",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* GrowthCurves */ "d"],options:function options(_ref6){var navigation=_ref6.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Operations",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Operations */ "k"],options:function options(_ref7){var navigation=_ref7.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"WeighingOperations",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Weighing */ "o"],options:function options(_ref8){var navigation=_ref8.navigation;return{title:'Weighing'};}})));};/* harmony default export */ __webpack_exports__["default"] = (UserNavigator);

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 427,
	"./af.js": 427,
	"./ar": 428,
	"./ar-dz": 429,
	"./ar-dz.js": 429,
	"./ar-kw": 430,
	"./ar-kw.js": 430,
	"./ar-ly": 431,
	"./ar-ly.js": 431,
	"./ar-ma": 432,
	"./ar-ma.js": 432,
	"./ar-sa": 433,
	"./ar-sa.js": 433,
	"./ar-tn": 434,
	"./ar-tn.js": 434,
	"./ar.js": 428,
	"./az": 435,
	"./az.js": 435,
	"./be": 436,
	"./be.js": 436,
	"./bg": 437,
	"./bg.js": 437,
	"./bm": 438,
	"./bm.js": 438,
	"./bn": 439,
	"./bn-bd": 440,
	"./bn-bd.js": 440,
	"./bn.js": 439,
	"./bo": 441,
	"./bo.js": 441,
	"./br": 442,
	"./br.js": 442,
	"./bs": 443,
	"./bs.js": 443,
	"./ca": 444,
	"./ca.js": 444,
	"./cs": 445,
	"./cs.js": 445,
	"./cv": 446,
	"./cv.js": 446,
	"./cy": 447,
	"./cy.js": 447,
	"./da": 448,
	"./da.js": 448,
	"./de": 449,
	"./de-at": 450,
	"./de-at.js": 450,
	"./de-ch": 451,
	"./de-ch.js": 451,
	"./de.js": 449,
	"./dv": 452,
	"./dv.js": 452,
	"./el": 453,
	"./el.js": 453,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 455,
	"./en-ca.js": 455,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 457,
	"./en-ie.js": 457,
	"./en-il": 458,
	"./en-il.js": 458,
	"./en-in": 459,
	"./en-in.js": 459,
	"./en-nz": 460,
	"./en-nz.js": 460,
	"./en-sg": 461,
	"./en-sg.js": 461,
	"./eo": 462,
	"./eo.js": 462,
	"./es": 463,
	"./es-do": 464,
	"./es-do.js": 464,
	"./es-mx": 465,
	"./es-mx.js": 465,
	"./es-us": 466,
	"./es-us.js": 466,
	"./es.js": 463,
	"./et": 467,
	"./et.js": 467,
	"./eu": 468,
	"./eu.js": 468,
	"./fa": 469,
	"./fa.js": 469,
	"./fi": 470,
	"./fi.js": 470,
	"./fil": 471,
	"./fil.js": 471,
	"./fo": 472,
	"./fo.js": 472,
	"./fr": 473,
	"./fr-ca": 474,
	"./fr-ca.js": 474,
	"./fr-ch": 475,
	"./fr-ch.js": 475,
	"./fr.js": 473,
	"./fy": 476,
	"./fy.js": 476,
	"./ga": 477,
	"./ga.js": 477,
	"./gd": 478,
	"./gd.js": 478,
	"./gl": 479,
	"./gl.js": 479,
	"./gom-deva": 480,
	"./gom-deva.js": 480,
	"./gom-latn": 481,
	"./gom-latn.js": 481,
	"./gu": 482,
	"./gu.js": 482,
	"./he": 483,
	"./he.js": 483,
	"./hi": 484,
	"./hi.js": 484,
	"./hr": 485,
	"./hr.js": 485,
	"./hu": 486,
	"./hu.js": 486,
	"./hy-am": 487,
	"./hy-am.js": 487,
	"./id": 488,
	"./id.js": 488,
	"./is": 489,
	"./is.js": 489,
	"./it": 490,
	"./it-ch": 491,
	"./it-ch.js": 491,
	"./it.js": 490,
	"./ja": 492,
	"./ja.js": 492,
	"./jv": 493,
	"./jv.js": 493,
	"./ka": 494,
	"./ka.js": 494,
	"./kk": 495,
	"./kk.js": 495,
	"./km": 496,
	"./km.js": 496,
	"./kn": 497,
	"./kn.js": 497,
	"./ko": 498,
	"./ko.js": 498,
	"./ku": 499,
	"./ku.js": 499,
	"./ky": 500,
	"./ky.js": 500,
	"./lb": 501,
	"./lb.js": 501,
	"./lo": 502,
	"./lo.js": 502,
	"./lt": 503,
	"./lt.js": 503,
	"./lv": 504,
	"./lv.js": 504,
	"./me": 505,
	"./me.js": 505,
	"./mi": 506,
	"./mi.js": 506,
	"./mk": 507,
	"./mk.js": 507,
	"./ml": 508,
	"./ml.js": 508,
	"./mn": 509,
	"./mn.js": 509,
	"./mr": 510,
	"./mr.js": 510,
	"./ms": 511,
	"./ms-my": 512,
	"./ms-my.js": 512,
	"./ms.js": 511,
	"./mt": 513,
	"./mt.js": 513,
	"./my": 514,
	"./my.js": 514,
	"./nb": 515,
	"./nb.js": 515,
	"./ne": 516,
	"./ne.js": 516,
	"./nl": 517,
	"./nl-be": 518,
	"./nl-be.js": 518,
	"./nl.js": 517,
	"./nn": 519,
	"./nn.js": 519,
	"./oc-lnc": 520,
	"./oc-lnc.js": 520,
	"./pa-in": 521,
	"./pa-in.js": 521,
	"./pl": 522,
	"./pl.js": 522,
	"./pt": 523,
	"./pt-br": 524,
	"./pt-br.js": 524,
	"./pt.js": 523,
	"./ro": 525,
	"./ro.js": 525,
	"./ru": 526,
	"./ru.js": 526,
	"./sd": 527,
	"./sd.js": 527,
	"./se": 528,
	"./se.js": 528,
	"./si": 529,
	"./si.js": 529,
	"./sk": 530,
	"./sk.js": 530,
	"./sl": 531,
	"./sl.js": 531,
	"./sq": 532,
	"./sq.js": 532,
	"./sr": 533,
	"./sr-cyrl": 534,
	"./sr-cyrl.js": 534,
	"./sr.js": 533,
	"./ss": 535,
	"./ss.js": 535,
	"./sv": 536,
	"./sv.js": 536,
	"./sw": 537,
	"./sw.js": 537,
	"./ta": 538,
	"./ta.js": 538,
	"./te": 539,
	"./te.js": 539,
	"./tet": 540,
	"./tet.js": 540,
	"./tg": 541,
	"./tg.js": 541,
	"./th": 542,
	"./th.js": 542,
	"./tk": 543,
	"./tk.js": 543,
	"./tl-ph": 544,
	"./tl-ph.js": 544,
	"./tlh": 545,
	"./tlh.js": 545,
	"./tr": 546,
	"./tr.js": 546,
	"./tzl": 547,
	"./tzl.js": 547,
	"./tzm": 548,
	"./tzm-latn": 549,
	"./tzm-latn.js": 549,
	"./tzm.js": 548,
	"./ug-cn": 550,
	"./ug-cn.js": 550,
	"./uk": 551,
	"./uk.js": 551,
	"./ur": 552,
	"./ur.js": 552,
	"./uz": 553,
	"./uz-latn": 554,
	"./uz-latn.js": 554,
	"./uz.js": 553,
	"./vi": 555,
	"./vi.js": 555,
	"./x-pseudo": 556,
	"./x-pseudo.js": 556,
	"./yo": 557,
	"./yo.js": 557,
	"./zh-cn": 558,
	"./zh-cn.js": 558,
	"./zh-hk": 559,
	"./zh-hk.js": 559,
	"./zh-mo": 560,
	"./zh-mo.js": 560,
	"./zh-tw": 561,
	"./zh-tw.js": 561
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 976;

/***/ })

},[[637,1,2]]]);
//# sourceMappingURL=app.03dd98a0.chunk.js.map