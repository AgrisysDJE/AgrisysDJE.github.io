(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Farms.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,ref,farmData;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId;ref="farms/";if(FarmId)ref+=FarmId;_context.next=5;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_farmData){var data=_farmData.val();if(FarmId){data=defineProperty_default()({},FarmId,data);}return data;});case 5:farmData=_context.sent;return _context.abrupt("return",farmData);case 7:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}function update(_x2){return _update.apply(this,arguments);}function _update(){_update=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(_ref2){var FarmId,Data,res,farm,farmid;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:FarmId=_ref2.FarmId,Data=_ref2.Data;if(!FarmId){_context4.next=7;break;}_context4.next=4;return Object(Initial["b" /* database */])().ref('farms/'+FarmId).update(_objectSpread({},Data)).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(){var data;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return fetch(FarmId);case 2:data=_context2.sent;return _context2.abrupt("return",data);case 4:case"end":return _context2.stop();}}},_callee2);}))).catch(function(error){console.log("Update Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Update Farm Error'});});case 4:res=_context4.sent;_context4.next=12;break;case 7:farm=Object(Initial["b" /* database */])().ref('farms/').push();farmid=farm.key;_context4.next=11;return farm.set({Data:Data}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(){var data;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return fetch(FarmId);case 2:data=_context3.sent;return _context3.abrupt("return",data);case 4:case"end":return _context3.stop();}}},_callee3);}))).catch(function(error){console.log("Update Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Update Farm Error'});});case 11:res=_context4.sent;case 12:return _context4.abrupt("return",res);case 13:case"end":return _context4.stop();}}},_callee4);}));return _update.apply(this,arguments);}function updateData(_x3){return _updateData.apply(this,arguments);}function _updateData(){_updateData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(_ref5){var FarmId,Data,ref,res;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:FarmId=_ref5.FarmId,Data=_ref5.Data;if(!FarmId){_context5.next=9;break;}ref="farms_data/"+FarmId;_context5.next=5;return Object(Initial["b" /* database */])().ref(ref).update(Data).then(function(){return null;}).catch(function(error){if(error.code==='database/permission-denied'){console.log("Farm data update was permission denied.");}else if(error.code){console.log("User update Error: ",error);}return Object(handleError["a" /* default */])({message:'Farm updateData Error'});});case 5:res=_context5.sent;return _context5.abrupt("return",res);case 9:console.log("Farm uid in updateData unknown");return _context5.abrupt("return",Object(handleError["a" /* default */])({message:'Farm uid in updateData unknown'}));case 11:case"end":return _context5.stop();}}},_callee5);}));return _updateData.apply(this,arguments);}function create(_x4){return _create.apply(this,arguments);}function _create(){_create=asyncToGenerator_default()(regenerator_default.a.mark(function _callee7(_ref6){var Data,user,ref,farm,farmid,res;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:Data=_ref6.Data;user=Object(Initial["a" /* auth */])().currentUser;ref="users/"+user.uid;farm=Object(Initial["b" /* database */])().ref('farms/').push();farmid=farm.key;_context7.next=7;return farm.set({email:user.email,manager:user.displayName?user.displayName:user.email,name:Data.name}).then(asyncToGenerator_default()(regenerator_default.a.mark(function _callee6(){var data;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return fetch(FarmId);case 2:data=_context6.sent;return _context6.abrupt("return",data);case 4:case"end":return _context6.stop();}}},_callee6);}))).catch(function(error){console.log("Create Farm Error: ",error);return Object(handleError["a" /* default */])({message:'Create Farm Error'});});case 7:res=_context7.sent;return _context7.abrupt("return",res);case 9:case"end":return _context7.stop();}}},_callee7);}));return _create.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Farm.js
/* harmony default export */ var Farm = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/farms',fetch),update:Object(lib["buildAsyncActions"])('firebase/farms',update),updateData:Object(lib["buildAsyncActions"])('firebase/farms',updateData),create:Object(lib["buildAsyncActions"])('firebase/farms',create),reducers:Object(lib["buildAsyncReducers"])({itemKey:'farms',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/formators.js
var formators = __webpack_require__(168);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Sections.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,SectionId,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,SectionId=_ref.SectionId;if(!FarmId){_context.next=8;break;}ref="farms_data/"+FarmId+"/sections";if(SectionId){ref+="/"+SectionId;}_context.next=6;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_sectionidData){return Object(formators["a" /* sortObject */])(_sectionidData.val());});case 6:res=_context.sent;return _context.abrupt("return",res);case 8:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Sections Error'}));case 9:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js
/* harmony default export */ var Section = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/sections',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'sections',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('theme/changeTheme'),reducers:function reducers(state,_ref){var payload=_ref.payload;if(typeof payload.theme!=='undefined'){state.theme=payload.theme;}if(typeof payload.darkMode!=='undefined'){state.darkMode=payload.darkMode;}}});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(230);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
var MainStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();var MainNavigator=function MainNavigator(){var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_4__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Navigator,{headerMode:'none',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexAgrisysContainer */ "d"],options:function options(_ref){var navigation=_ref.navigation;return{headerShown:false};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainStack.Screen,{name:"Test",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexExampleContainer */ "f"]})));};/* harmony default export */ __webpack_exports__["default"] = (MainNavigator);

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ObjectsEqual */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortObject; });
function _createForOfIteratorHelperLoose(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function ObjectsEqual(first,second){if(!first){if(second)return false;else return true;}if(!second)return false;var al=Object.getOwnPropertyNames(first);var bl=Object.getOwnPropertyNames(second);if(al.length!==bl.length)return false;var hasAllKeys=al.every(function(value){return!!bl.find(function(v){return v===value;});});if(!hasAllKeys)return false;for(var _iterator=_createForOfIteratorHelperLoose(al),_step;!(_step=_iterator()).done;){var key=_step.value;if(first[key]!==second[key]){if(typeof first[key]!=='object'||typeof second[key]!=='object'||!ObjectsEqual(first[key],second[key]))return false;}}return true;}var reA=/[^a-zA-Z]/g;var reN=/[^0-9]/g;function sortAlphaNum(a,b){var aA=a.replace(reA,"");var bA=b.replace(reA,"");if(aA===bA){var aN=parseInt(a.replace(reN,""),10);var bN=parseInt(b.replace(reN,""),10);return aN===bN?0:aN>bN?1:-1;}else{return aA>bA?1:-1;}}function sortObject(o){var sorted={},key,a=[];for(key in o){if(o.hasOwnProperty(key)&&key!=="__jsogObjectId"&&key!=="update_time"){a.push(key);}}a.sort(sortAlphaNum);for(key=0;key<a.length;key++){sorted[a[key]]=o[a[key]];}return sorted;}

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncActions"])('startup/init',function(){var _ref=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(args,_ref2){var dispatch;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch=_ref2.dispatch;_context.next=3;return dispatch(_Theme_DefaultTheme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].action({theme:'default',darkMode:null}));case 3:Object(_Navigators_Root__WEBPACK_IMPORTED_MODULE_4__[/* navigateAndSimpleReset */ "b"])('Main');case 4:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}()),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_2__["buildAsyncReducers"])({itemKey:null})});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony default export */ __webpack_exports__["a"] = ({initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('theme/setDefaultTheme'),reducers:function reducers(state,_ref){var payload=_ref.payload;if(!state.theme){state.theme=payload.theme;state.darkMode=payload.darkMode;}}});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get_DataSpot */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccumulateTime; });
/* unused harmony export CurvePredict */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeightCalc; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Services_utils_defines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
function AccumulateTime(Time,PeriodeLength){var Times=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var NewTime=new Date(Time.getTime());switch(PeriodeLength){case"Weeks":NewTime.setDate(NewTime.getDate()+7);break;case"Month":NewTime.setMonth(NewTime.getMonth()+1);break;case"Days":default:do{NewTime.setDate(NewTime.getDate()+1);Times--;}while(Times>0);break;}return NewTime;}function GetSlope_Between(MinMax_Time,MinMax_Data){var minX=MinMax_Time[0];var maxX=MinMax_Time[1];var minY=MinMax_Data[0];var maxY=MinMax_Data[1];var slope=(maxY-minY)/(maxX-minX);if(minY>minX)slope=-slope;return slope;}function get_DataSpot(MinMax_Time,MinMax_Data,AtTime,ForData){var ExValue=null;var ExTime=null;var slope=GetSlope_Between(MinMax_Time,MinMax_Data);if(AtTime){var FindX=AtTime-MinMax_Time[0];ExValue=FindX*slope+MinMax_Data[0];}if(ForData){ExTime=(ForData-MinMax_Data[0])/slope;ExTime=MinMax_Time[0]+ExTime;ExTime=Math.floor(ExTime);}return{ExValue:ExValue,ExTime:ExTime};}function isBatchClosed(Batch){return Batch&&Batch.state&&Batch.state===_Services_utils_defines__WEBPACK_IMPORTED_MODULE_5__[/* DataStates */ "b"].CLOSED?true:false;}function getBatchWeights(Batch){return Batch&&Batch.closed&&Batch.closed.weighings?Batch.closed.weighings:null;}function GetBatchEnd(Batch,Curve){if(Batch&&Batch.time&&Curve){var currentTime=new Date(Batch.time);var CurveLenght=Object.keys(Curve.data)[Object.keys(Curve.data).length-1];for(var i=0;i<CurveLenght;i++){if(i<CurveLenght-1&&Curve.data[i+1]<=Batch.datas.target){currentTime=new Date(AccumulateTime(currentTime,Curve.periode));}}return currentTime.getTime();}return null;}function GetNewestWeight(_ref){var Weighings=_ref.Weighings,AfterTime=_ref.AfterTime,BeforeTime=_ref.BeforeTime;var Weighing=null;if(Weighings){for(var _weighing in Weighings){var weighing=WeighingsStore[_weighing];if(weighing&&!weighing.deleted&&!weighing.edited&&(!Weighing||Weighing.time<weighing.time)){if((!AfterTime||weighing.time>=AfterTime)&&(!BeforeTime||weighing.time<=BeforeTime)){Weighing=weighing;}}}}return Weighing;}function getCurveData(_ref2){var Graphs=_ref2.Graphs,Batch=_ref2.Batch;if(Batch&&Graphs&&!Graphs.data){if(isBatchClosed(Batch)&&Batch.gcurve)return Batch.gcurve;else if(Batch.gcurve&&Graphs&&Graphs[Batch.gcurve])return Graphs[Batch.gcurve];}else if(Graphs&&Graphs.data)return Graphs;return null;}function CurvePredict(_x){return _CurvePredict.apply(this,arguments);}function _CurvePredict(){_CurvePredict=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref3){var Weighings,Batch,Curve,Graphs,Target,BatchEndDate,Weighing,weight,weight2,Weighing2,StartIndex,PredictCurve,now,StartTime,CurrentTimeStep,EndWeight_Index,CurveLenght,lastIndex,lastIndexTime,low,high;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Weighings=_ref3.Weighings,Batch=_ref3.Batch,Curve=_ref3.Curve,Graphs=_ref3.Graphs;if(!Curve)Curve=getCurveData({Graphs:Graphs,Batch:Batch});if(Curve&&Curve.data&&Batch&&Batch.time){Target=Batch&&Batch.datas&&Batch.datas.target?Batch.datas.target:Curve.data[Curve.data.length-1];BatchEndDate=GetBatchEnd(Batch,Curve);Weighing=Weighings&&Object.keys(Weighings).length>=1?Weighings[Object.keys(Weighings)[Object.keys(Weighings).length-1]]:null;if(Weighing&&Weighing.weight){weight=Weighing.weight;if(Weighing.count)weight=weight/Weighing.count;weight2=0;Weighing2=Weighings&&Object.keys(Weighings).length>=2?Weighings[Object.keys(Weighings)[Object.keys(Weighings).length-2]]:null;if(Weighing2){weight2=Weighing2.weight;if(Weighing2.count)weight2=weight2/Weighing2.count;}StartIndex="none";PredictCurve={periode:Curve.periode,data:[],Now:null,TempEx:null};now=new Date(Date.now());now.setHours(0,0,0,0);StartTime=new Date(Batch.time);CurrentTimeStep=StartTime;EndWeight_Index=0;CurveLenght=Object.keys(Curve.data)[Object.keys(Curve.data).length-1];lastIndex=0;lastIndexTime=CurrentTimeStep;low=0;high=CurveLenght;}}return _context.abrupt("return",null);case 4:case"end":return _context.stop();}}},_callee);}));return _CurvePredict.apply(this,arguments);}function WeightCalc(_x2,_x3){return _WeightCalc.apply(this,arguments);}function _WeightCalc(){_WeightCalc=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref4,_rend){var Weighings,StartDate,EndDate,Batch,Graphs,PenWeight,PenGrowth,LastWeight,LastWeightDay,FirstWeightDay,today,isVirtual,Forcast,isClosed,GrowthCount,days,Predict;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:Weighings=_ref4.Weighings,StartDate=_ref4.StartDate,EndDate=_ref4.EndDate,Batch=_ref4.Batch,Graphs=_ref4.Graphs;PenWeight=0;PenGrowth=0;LastWeight=undefined;LastWeightDay=undefined;FirstWeightDay=undefined;today=false;isVirtual=false;Forcast=null;isClosed=false;if(!Weighings&&!isBatchClosed(Batch)){Weighings=getBatchWeights(Batch);}if(Weighings){GrowthCount=0;Weighings=Object.fromEntries(Object.entries(Weighings).sort(function(_ref5,_ref6){var _ref7=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5,2),a=_ref7[1];var _ref8=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref6,2),b=_ref8[1];return a.time<b.time?1:-1;}));Object.entries(Weighings).forEach(function(_ref9){var _ref10=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref9,2),Id=_ref10[0],Weighing=_ref10[1];if(!Weighing.deleted&&!Weighing.edited&&(!StartDate||!EndDate||Weighing.time>=StartDate&&Weighing.time<=EndDate)){PenWeight=Weighing.weight;if(Weighing.count)PenWeight=Weighing.weight/Weighing.count;if(LastWeight!==undefined){var weight=PenWeight-LastWeight;PenGrowth+=weight;GrowthCount++;}LastWeight=PenWeight;LastWeightDay=Weighing.time;if(new Date(LastWeightDay).setHours(0,0,0,0)===new Date(Date.now()).setHours(0,0,0,0))today=true;if(!FirstWeightDay)FirstWeightDay=Weighing.time;}});if(GrowthCount>0){days=(LastWeightDay-FirstWeightDay)/(1000*60*60*24);PenGrowth=PenGrowth/days;}}if(!(!today&&Batch)){_context2.next=17;break;}_context2.next=15;return CurvePredict({Weighings:Weighings,Batch:Batch,Graphs:Graphs});case 15:Predict=_context2.sent;if(Predict&&Predict.Now&&Date.now()>=new Date(LastWeightDay).getDate()){}case 17:return _context2.abrupt("return",{PenWeight:PenWeight,PenGrowth:PenGrowth,Forcast:Forcast,isVirtual:isVirtual});case 18:case"end":return _context2.stop();}}},_callee2);}));return _WeightCalc.apply(this,arguments);}

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Batchs.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,BatchId,Data,DataTime,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,BatchId=_ref.BatchId,Data=_ref.Data,DataTime=_ref.DataTime;if(!FarmId){_context.next=31;break;}ref="farms_data/"+FarmId+"/batchs";if(BatchId){ref+="/"+BatchId;}if(Data){_context.next=10;break;}_context.next=7;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){if(BatchId){var batchdata=_batchdata.val();if(!batchdata)return null;if(!batchdata.datas)batchdata.datas={};if(!batchdata.pens)batchdata.pens=[];if(!batchdata.datas.gcurve)batchdata.datas.gcurve="default";var batch=defineProperty_default()({},BatchId,batchdata);return batch;}else{return batchdata.val();}});case 7:res=_context.sent;_context.next=29;break;case 10:if(!BatchId){_context.next=29;break;}_context.t0=Data;_context.next=_context.t0===DataRefs.BATCHS?14:_context.t0===DataRefs.PENS?19:_context.t0===DataRefs.GRAPH?24:29;break;case 14:ref+="/"+"datas";_context.next=17;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var data=defineProperty_default()({},BatchId,{datas:_batchdata.val()});return data;});case 17:res=_context.sent;return _context.abrupt("break",29);case 19:ref+="/"+"pens";_context.next=22;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var pens=defineProperty_default()({},BatchId,{pens:_batchdata.val()});return pens;});case 22:res=_context.sent;return _context.abrupt("break",29);case 24:ref+="/"+"gcurve";_context.next=27;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_batchdata){var curve=defineProperty_default()({},BatchId,{gcurve:_batchdata.val()});return curve;});case 27:res=_context.sent;return _context.abrupt("break",29);case 29:if(!res){_context.next=31;break;}return _context.abrupt("return",res);case 31:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Batchs Error'}));case 32:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Batch.js
/* harmony default export */ var Batch = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/batchs',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'batchs',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Graphs.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(_ref){var FarmId,GraphId,DataTime,ref,res;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:FarmId=_ref.FarmId,GraphId=_ref.GraphId,DataTime=_ref.DataTime;if(!FarmId){_context2.next=8;break;}ref="farms_data/"+FarmId+"/graph";ref+="/"+GraphId;_context2.next=6;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(graph){var Graphs,GraphVal,newGraph;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Graphs=null;GraphVal=graph.val();if(GraphVal){if(GraphId){newGraph=defineProperty_default()({},graph.key,GraphVal);Graphs=_objectSpread(_objectSpread({},Graphs),newGraph);}else{Graphs=_objectSpread(_objectSpread({},Graphs),GraphVal);}}else{GraphId=null;}if(GraphId){_context.next=7;break;}_context.next=6;return Object(Initial["b" /* database */])().ref("farms_data/Agrisys/graph").once('value').then(function(Agraph){var AgraphVal=Agraph.val();if(AgraphVal){Graphs=_objectSpread(_objectSpread({},AgraphVal),Graphs);}return Graphs;}).catch(function(error){console.log("Get Agrisys graph Error: ",error);if(Graphs)return Graphs;else return Object(handleError["a" /* default */])({message:'Get Agrisys graph Error'});});case 6:Graphs=_context.sent;case 7:return _context.abrupt("return",Graphs);case 8:case"end":return _context.stop();}}},_callee);}));return function(_x2){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log("Get farm graph Error: ",error);return Object(handleError["a" /* default */])({message:'Get farm graph Error'});});case 6:res=_context2.sent;return _context2.abrupt("return",res);case 8:return _context2.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Graphs Error'}));case 9:case"end":return _context2.stop();}}},_callee2);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Graph.js
/* harmony default export */ var Graph = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/graphs',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'graphs',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Pens.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,PenId,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId;if(!FarmId){_context.next=8;break;}ref="farms_data/"+FarmId+"/pens";if(PenId){ref+="/"+PenId;}_context.next=6;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(_pensData){if(PenId){var penData=_pensData.val();if(!penData)penData={};if(!penData.datas)penData.datas={};return defineProperty_default()({},PenId,penData);}else{return _pensData.val();}});case 6:res=_context.sent;return _context.abrupt("return",res);case 8:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Pens Error'}));case 9:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Pen.js
/* harmony default export */ var Pen = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/pens',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'pens',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js + 1 modules
var Section = __webpack_require__(129);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Weighings.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(_ref){var FarmId,PenId,SectionId,_ref$limitStart,limitStart,_ref$limitTo,limitTo,DataTime,MemSections,ref,res;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId,SectionId=_ref.SectionId,_ref$limitStart=_ref.limitStart,limitStart=_ref$limitStart===void 0?0:_ref$limitStart,_ref$limitTo=_ref.limitTo,limitTo=_ref$limitTo===void 0?9999:_ref$limitTo,DataTime=_ref.DataTime,MemSections=_ref.MemSections;if(!FarmId){_context2.next=16;break;}ref="farms_data/"+FarmId+"/weighings";if(!PenId){_context2.next=10;break;}console.log("Weight fetch called, getting Pen");ref+="/"+PenId;_context2.next=8;return Object(Initial["b" /* database */])().ref(ref).orderByChild('time').limitToLast(limitTo).once('value',function(snapshot){var weighing=defineProperty_default()({},snapshot.key,{});snapshot.forEach(function(c){weighing[snapshot.key][c.key]=c.val();});res=weighing;});case 8:_context2.next=14;break;case 10:console.log("Weight fetch called, getting Sections");_context2.next=13;return Object(Initial["b" /* database */])().ref(ref+"/update_time").once('value').then(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_weighingTime){var Weighings_Time,res2;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Weighings_Time=_weighingTime.val();_context.next=3;return Section["a" /* default */].action({FarmId:FarmId}).then(function(sections){console.log(sections);var itemsProcessed=0;var length=0;var newWeights={update_time:Date.now()};var Sections=sections?sections.data:MemSections;Object.entries(Sections).forEach(function(_ref3){var _ref4=slicedToArray_default()(_ref3,2),section=_ref4[0],data=_ref4[1];if(data&&data.pens){length+=Object.keys(data.pens).filter(function(e){return e!=='update_time';}).length;Object.keys(data.pens).filter(function(e){return e!=='update_time';}).forEach(function(pen){fetchWeights({FarmId:FarmId,PenId:pen,limitStart:0,limitTo:limitTo}).then(function(weights){itemsProcessed++;newWeights=_objectSpread(_objectSpread({},newWeights),weights.data);if(itemsProcessed===length){newWeights.update_time=Weighings_Time;resolve({type:Actions.UPDATE,path:DataRefs.WEIGHING,data:newWeights});}}).catch(function(error){console.log(error);resolve({type:Actions.UPDATE,path:DataRefs.WEIGHING,data:newWeights});});});}});if(!Sections.length||Sections.length<=1){}}).catch(function(error){console.log(error);});case 3:res2=_context.sent;return _context.abrupt("return",res2);case 5:case"end":return _context.stop();}}},_callee);}));return function(_x2){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log(error);});case 13:res=_context2.sent;case 14:if(!res){_context2.next=16;break;}return _context2.abrupt("return",res);case 16:return _context2.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Weights Error'}));case 17:case"end":return _context2.stop();}}},_callee2);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Weighing.js
/* harmony default export */ var Weighing = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/weighings',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'weighings',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js + 1 modules
var Section = __webpack_require__(129);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Comments.js
function fetch(_x){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(_ref){var FarmId,PenId,_ref$limitStart,limitStart,_ref$limitTo,limitTo,ref,res;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:FarmId=_ref.FarmId,PenId=_ref.PenId,_ref$limitStart=_ref.limitStart,limitStart=_ref$limitStart===void 0?0:_ref$limitStart,_ref$limitTo=_ref.limitTo,limitTo=_ref$limitTo===void 0?9999:_ref$limitTo;if(!FarmId){_context.next=11;break;}ref="farms_data/"+FarmId+"/datas/comments";if(!PenId){_context.next=9;break;}ref+="/"+PenId;_context.next=7;return Object(Initial["b" /* database */])().ref(ref).orderByChild('time').limitToLast(limitTo).once('value',function(snapshot){var comment=defineProperty_default()({},snapshot.key,{});snapshot.forEach(function(c){comment[snapshot.key][c.key]=c.val();});res=comment;});case 7:_context.next=9;break;case 9:if(!res){_context.next=11;break;}return _context.abrupt("return",res);case 11:return _context.abrupt("return",Object(handleError["a" /* default */])({message:'Fecth Comments Error'}));case 12:case"end":return _context.stop();}}},_callee);}));return _fetch.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Comment.js
/* harmony default export */ var Comment = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/comments',fetch),reducers:Object(lib["buildAsyncReducers"])({itemKey:'comments',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(230);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(312);
var AuthStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();var AuthNavigator=function AuthNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_4__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_3___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* IndexAuthContainer */ "e"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysConnect.NavTitle')};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"CreateUser",component:_Containers__WEBPACK_IMPORTED_MODULE_2__[/* CreateUserContainer */ "a"],options:function options(_ref2){var navigation=_ref2.navigation;return{title:t('AgrisysConnect.NavTitle')};}})));};/* harmony default export */ __webpack_exports__["default"] = (AuthNavigator);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirebaseInitialState */
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _Farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _Batch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(225);
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(226);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(129);
/* harmony import */ var _Pen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(227);
/* harmony import */ var _Weighing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(228);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(229);
var FirebaseInitialState={activeData:{weightCalc:null},user:null,farms:null,batchs:null,graphs:null,sections:null,pens:null,weighings:null,comments:null};/* harmony default export */ __webpack_exports__["a"] = (Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_0__["buildSlice"])('firebase',[_Utils__WEBPACK_IMPORTED_MODULE_1__[/* ErrorHandler */ "c"],_Utils__WEBPACK_IMPORTED_MODULE_1__[/* SetData */ "d"],_Utils__WEBPACK_IMPORTED_MODULE_1__[/* EditData */ "b"],_Utils__WEBPACK_IMPORTED_MODULE_1__[/* ClearData */ "a"],_Utils__WEBPACK_IMPORTED_MODULE_1__[/* WeightCalculate */ "e"],_User__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],_Farm__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_Batch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_Graph__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],_Section__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],_Pen__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],_Weighing__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],_Comment__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]],FirebaseInitialState).reducer);

/***/ }),

/***/ 33:
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
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(28);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/useColorScheme/index.js
var useColorScheme = __webpack_require__(556);
var useColorScheme_default = /*#__PURE__*/__webpack_require__.n(useColorScheme);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(23);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/theming/DarkTheme.js
var DarkTheme = __webpack_require__(354);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/theming/DefaultTheme.js
var DefaultTheme = __webpack_require__(142);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js
var StyleSheet = __webpack_require__(2);
var StyleSheet_default = /*#__PURE__*/__webpack_require__.n(StyleSheet);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Fonts.js
/* harmony default export */ var Fonts = (function(_ref){var FontSize=_ref.FontSize,Colors=_ref.Colors;return StyleSheet_default.a.create({textSmall:{fontSize:FontSize.small,color:Colors.text},textRegular:{fontSize:FontSize.regular,color:Colors.text},textLarge:{fontSize:FontSize.large,color:Colors.text},titleSmall:{fontSize:FontSize.small*2,fontWeight:'bold',color:Colors.text},titleRegular:{fontSize:FontSize.regular*2,fontWeight:'bold',color:Colors.text},titleLarge:{fontSize:FontSize.large*2,fontWeight:'bold',color:Colors.text},textCenter:{textAlign:'center'},textJustify:{textAlign:'justify'},textLeft:{textAlign:'left'},textRight:{textAlign:'right'},textReverse:{color:Colors.secountText}});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Gutters.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Theme_Gutters = (function(_ref){var MetricsSizes=_ref.MetricsSizes;return StyleSheet_default.a.create(_objectSpread({},Object.entries(MetricsSizes).reduce(function(acc,_ref2){var _objectSpread2;var _ref3=slicedToArray_default()(_ref2,2),key=_ref3[0],value=_ref3[1];return _objectSpread(_objectSpread({},acc),{},(_objectSpread2={},defineProperty_default()(_objectSpread2,key+"BMargin",{marginBottom:value}),defineProperty_default()(_objectSpread2,key+"TMargin",{marginTop:value}),defineProperty_default()(_objectSpread2,key+"RMargin",{marginRight:value}),defineProperty_default()(_objectSpread2,key+"LMargin",{marginLeft:value}),defineProperty_default()(_objectSpread2,key+"VMargin",{marginVertical:value}),defineProperty_default()(_objectSpread2,key+"HMargin",{marginHorizontal:value}),defineProperty_default()(_objectSpread2,key+"BPadding",{paddingBottom:value}),defineProperty_default()(_objectSpread2,key+"TPadding",{paddingTop:value}),defineProperty_default()(_objectSpread2,key+"RPadding",{paddingRight:value}),defineProperty_default()(_objectSpread2,key+"LPadding",{paddingLeft:value}),defineProperty_default()(_objectSpread2,key+"VPadding",{paddingVertical:value}),defineProperty_default()(_objectSpread2,key+"HPadding",{paddingHorizontal:value}),_objectSpread2));},{})));});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Images.js
/* harmony default export */ var Images = (function(){return{Haxa_globe:__webpack_require__(753),Hexa_icon:__webpack_require__(754),Loading:__webpack_require__(755),Login_bottom:__webpack_require__(756),Login_protein:__webpack_require__(757),Logo:__webpack_require__(758),Home:__webpack_require__(759),DashBoard:__webpack_require__(760),System:__webpack_require__(761),Curves:__webpack_require__(762),GCurves:__webpack_require__(763),User:__webpack_require__(764),Sow:__webpack_require__(765),Section:__webpack_require__(766),Pens:__webpack_require__(767),AutoPig:__webpack_require__(768),Feed:__webpack_require__(769),logo:__webpack_require__(770)};});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Layout.js
/* harmony default export */ var Theme_Layout = (function(){return StyleSheet_default.a.create({column:{flexDirection:'column'},columnReverse:{flexDirection:'column-reverse'},colCenter:{flexDirection:'column',alignItems:'center',justifyContent:'center'},colVCenter:{flexDirection:'column',alignItems:'center'},colHCenter:{flexDirection:'column',justifyContent:'center'},row:{flexDirection:'row'},rowReverse:{flexDirection:'row-reverse'},rowCenter:{flexDirection:'row',alignItems:'center',justifyContent:'center'},rowVCenter:{flexDirection:'row',justifyContent:'center'},rowHCenter:{flexDirection:'row',alignItems:'center'},center:{alignItems:'center',justifyContent:'center'},alignItemsCenter:{alignItems:'center'},alignItemsStart:{alignItems:'flex-start'},alignItemsStretch:{alignItems:'stretch'},justifyContentCenter:{justifyContent:'center'},justifyContentAround:{justifyContent:'space-around'},justifyContentBetween:{justifyContent:'space-between'},scrollSpaceAround:{flexGrow:1,justifyContent:'space-around'},scrollSpaceBetween:{flexGrow:1,justifyContent:'space-between'},selfStretch:{alignSelf:'stretch'},fill:{flex:1},fillCol:{flex:1,flexDirection:'column'},fillRow:{flex:1,flexDirection:'row'},fullSize:{height:'100%',width:'100%'},fullWidth:{width:'100%'},midWidth:{width:'75%'},halvWidth:{width:'50%'},quarterWidth:{width:'25%'},fullHeight:{height:'100%'},midHeight:{height:'75%'},halvHeight:{height:'50%'},quarterHeight:{height:'25%'},mirror:{transform:[{scaleX:-1}]},rotate90:{transform:[{rotate:'90deg'}]},rotate90Inverse:{transform:[{rotate:'-90deg'}]}});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/components/Buttons.js
function Buttons_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Buttons_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Buttons_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Buttons_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Buttons = (function(_ref){var Colors=_ref.Colors,Gutters=_ref.Gutters,Layout=_ref.Layout;var base=Buttons_objectSpread(Buttons_objectSpread(Buttons_objectSpread({},Layout.center),Gutters.largeHPadding),{},{height:40,backgroundColor:Colors.primary});var rounded=Buttons_objectSpread(Buttons_objectSpread({},base),{},{borderRadius:20});var outline=Buttons_objectSpread(Buttons_objectSpread({},base),{},{backgroundColor:Colors.transparent,borderWidth:2,borderColor:Colors.primary});var filled=Buttons_objectSpread(Buttons_objectSpread({},base),{},{backgroundColor:Colors.primary,borderWidth:2,borderColor:Colors.primary});return StyleSheet_default.a.create({base:base,rounded:rounded,outline:outline,filled:filled,outlineRounded:Buttons_objectSpread(Buttons_objectSpread({},rounded),outline),filledRounded:Buttons_objectSpread(Buttons_objectSpread({},rounded),filled)});});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Common.js
var _excluded=["Colors"];function Common_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Common_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Common_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Common_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var Common = (function(_ref){var Colors=_ref.Colors,args=objectWithoutProperties_default()(_ref,_excluded);return Common_objectSpread({button:Buttons(Common_objectSpread({Colors:Colors},args))},StyleSheet_default.a.create({backgroundPrimary:{backgroundColor:Colors.primary},backgroundReset:{backgroundColor:Colors.transparent},textInput:{borderWidth:0,borderColor:Colors.text,backgroundColor:Colors.inputBackground,color:Colors.text,minHeight:35,textAlign:'left'},border:{borderWidth:2,borderRadius:10,borderColor:Colors.text,color:Colors.text,minHeight:30,marginVertical:5,marginHorizontal:2,padding:2.5}}));});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/Variables.js
var Variables_Colors={transparent:'rgba(0,0,0,0)',white:'#ffffff',gray:'#a6a6a6',text:'#4a4a49',secountText:'#ffffff',primary:'#a3b9cf',input:'#86939e',inputBackground:'#FFFFFF',success:'#03a489',error:'#dc3545',overest:'#4cafea',pigpink:'#FFAA95',BUMBLEBEE:'#FCE205',AgriGreen:'#03a489',AgriDarkblue:'#4463ab',AgriLightblue:'#a3b9cf',AgriDark:'#4a4a49'};var NavigationColors={primary:Variables_Colors.primary,card:Variables_Colors.AgriDarkblue};var Variables_FontSize={small:16,regular:20,large:40};var tiny=5;var small=tiny*2;var regular=tiny*3;var large=regular*2;var huge=large*2;var Variables_MetricsSizes={tiny:tiny,small:small,regular:regular,large:large,huge:huge};
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/Variables.js
var default_dark_Variables_Colors={primary:'lightblue',text:'white',inputBackground:'gray'};var Variables_NavigationColors={primary:default_dark_Variables_Colors.primary};/* harmony default export */ var Variables = ({Colors:default_dark_Variables_Colors,NavigationColors:Variables_NavigationColors});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/Images.js
/* harmony default export */ var default_dark_Images = (function(){return{logo:{uri:'https://thecodingmachine.github.io/react-native-agrisysapp/img/TOM-small.png'}};});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/default_dark/index.js

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/themes/index.js
/* harmony default export */ var themes = ({default_dark:default_dark_namespaceObject});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/hooks/useTheme.js
var useTheme_excluded=["Variables"],_excluded2=["Variables"];function useTheme_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function useTheme_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){useTheme_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{useTheme_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* harmony default export */ var useTheme = (function(){var colorScheme=useColorScheme_default()();var currentTheme=Object(es["d" /* useSelector */])(function(state){return state.theme.theme||'default';});var isDark=Object(es["d" /* useSelector */])(function(state){return state.theme.darkMode;});var darkMode=isDark===null?colorScheme==='dark':isDark;var _ref=themes[currentTheme]||{},_ref$Variables=_ref.Variables,themeConfigVars=_ref$Variables===void 0?{}:_ref$Variables,themeConfig=objectWithoutProperties_default()(_ref,useTheme_excluded);var _ref2=darkMode?themes[currentTheme+"_dark"]||{}:{},_ref2$Variables=_ref2.Variables,darkThemeConfigVars=_ref2$Variables===void 0?{}:_ref2$Variables,darkThemeConfig=objectWithoutProperties_default()(_ref2,_excluded2);var themeVariables=useTheme_mergeVariables(Variables_namespaceObject,themeConfigVars,darkThemeConfigVars);var baseTheme=useTheme_objectSpread({Fonts:Fonts(themeVariables),Gutters:Theme_Gutters(themeVariables),Images:Images(themeVariables),Layout:Theme_Layout(themeVariables),Common:Common(useTheme_objectSpread(useTheme_objectSpread({},themeVariables),{},{Layout:Theme_Layout(themeVariables),Gutters:Theme_Gutters(themeVariables)}))},themeVariables);return useTheme_buildTheme(darkMode,baseTheme,useTheme_formatTheme(themeVariables,themeConfig||{}),useTheme_formatTheme(themeVariables,darkThemeConfig||{}));});var useTheme_formatTheme=function formatTheme(variables,theme){return Object.entries(theme).reduce(function(acc,_ref3){var _ref4=slicedToArray_default()(_ref3,2),name=_ref4[0],generate=_ref4[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},name,generate(variables)));},{});};var useTheme_mergeVariables=function mergeVariables(variables,themeConfig,darkThemeConfig){return Object.entries(variables).reduce(function(acc,_ref5){var _ref6=slicedToArray_default()(_ref5,2),group=_ref6[0],vars=_ref6[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},group,useTheme_objectSpread(useTheme_objectSpread(useTheme_objectSpread({},vars),themeConfig[group]||{}),darkThemeConfig[group]||{})));},{});};var useTheme_buildTheme=function buildTheme(darkMode,baseTheme,themeConfig,darkThemeConfig){return useTheme_objectSpread(useTheme_objectSpread({},useTheme_mergeTheme(baseTheme,themeConfig,darkThemeConfig)),{},{darkMode:darkMode,NavigationTheme:mergeNavigationTheme(darkMode?DarkTheme["a" /* default */]:DefaultTheme["a" /* default */],baseTheme.NavigationColors)});};var useTheme_mergeTheme=function mergeTheme(baseTheme,theme,darkTheme){return useTheme_objectSpread({},Object.entries(baseTheme).reduce(function(acc,_ref7){var _ref8=slicedToArray_default()(_ref7,2),key=_ref8[0],value=_ref8[1];return useTheme_objectSpread(useTheme_objectSpread({},acc),{},defineProperty_default()({},key,useTheme_objectSpread(useTheme_objectSpread(useTheme_objectSpread({},value),theme[key]||{}),darkTheme[key]||{})));},{}));};var mergeNavigationTheme=function mergeNavigationTheme(reactNavigationTheme,overrideColors){return useTheme_objectSpread(useTheme_objectSpread({},reactNavigationTheme),{},{colors:useTheme_objectSpread(useTheme_objectSpread({},reactNavigationTheme.colors),overrideColors)});};
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(_ref){var message=_ref.message,data=_ref.data,status=_ref.status;return Promise.reject({message:message,data:data,status:status});});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return navigationRef; });
/* unused harmony export navigate */
/* unused harmony export navigateAndReset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navigateAndSimpleReset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3__);
function isApp(){var window=react_native_web_dist_cjs_exports_Dimensions__WEBPACK_IMPORTED_MODULE_3___default.a.get("window");var wide=window.width>900?true:false;var App=react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default.a.OS==='ios'||react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_2___default.a.OS==='android'||!wide;return App;}var navigationRef=react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();function navigate(name,params){var _navigationRef$curren;(_navigationRef$curren=navigationRef.current)==null?void 0:_navigationRef$curren.navigate(name,params);}function navigateAndReset(){var _navigationRef$curren2;var routes=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;(_navigationRef$curren2=navigationRef.current)==null?void 0:_navigationRef$curren2.dispatch(_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__["CommonActions"].reset({index:index,routes:routes}));}function navigateAndSimpleReset(name){var _navigationRef$curren3;var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;(_navigationRef$curren3=navigationRef.current)==null?void 0:_navigationRef$curren3.dispatch(_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__["CommonActions"].reset({index:index,routes:[{name:name}]}));}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* unused harmony export messaging */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return database; });
/* unused harmony export firebase */
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0__);
var auth,messaging,database,firebase;if(react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default.a.OS==='ios'||react_native_web_dist_cjs_exports_Platform__WEBPACK_IMPORTED_MODULE_0___default.a.OS==='android'){auth=__webpack_require__(938).default;messaging=__webpack_require__(944).default;database=__webpack_require__(939).default;}else{console.log("firebase load");var _firebase=__webpack_require__(745).default;__webpack_require__(746).default;__webpack_require__(943).default;__webpack_require__(748).default;firebase=_firebase;if(!firebase.apps.length){console.log("Starting");var Constants=__webpack_require__(941).default;_firebase.initializeApp(Constants.manifest.web.config.firebase);}auth=_firebase.auth;if(_firebase.messaging.isSupported()){messaging=_firebase.messaging;}database=_firebase.database;console.log("Started");}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRefs; });
/* unused harmony export ConsysRefs */
/* unused harmony export TeweRefs */
/* unused harmony export DataAvgType */
/* unused harmony export Actions */
/* unused harmony export Operations */
/* unused harmony export ErrorTypes */
var UserStates={STARTER:'starter',FREE:'free',WORKER:'worker',OWNER:'owner',ADMIN:'admin',TECH:'tech'};var DataStates={CLOSED:'Closed'};var DataRefs={ACTIVE:'activeData',FIREBASEUSER:'firebaseuser',USERSDATA:'usersdata',USERS:'users',FARMS:'farms',SECTIONS:'farms_data/$farmid/sections',PENS:'farms_data/$farmid/pens',PIGS:'farms_data/$farmid/pigs',BATCHS:'farms_data/$farmid/batchs',WEIGHING:'farms_data/$farmid/pens/$penid/weighings/',GRAPH:'farms_data/$farmid/Graph/$graphid/',AUTOPIGS:'farms_data/$farmid/autopigs',COMMENTS:'farms_data/$farmid/datas/comments/',FARMDATAS:'farms_data/$farmid/datas/',SHARES:'shareData',CONSYS:'consys',TEWE:'tewe'};var ConsysRefs={VALVEFEED:'100',SCALE:'700',TEMPERATURE:'702',ACTIVITY:'703',WATERCOUNT:'704'};var TeweRefs={VALVEFEED:'Tewe100'};var DataAvgType={DAYS:0,HOUR:1,PURE:3};var Actions={SIGN:'sign',FETCH:'fetch',CREATE:'create',UPDATE:'update',MOVE:'move',DELETE:'delete',CLEAR:'clear',ADD:'add'};var Operations={ADD:'Add pig',MOVE:'Move pig',TREATMENT:'Treatment',SOLD:'Sold pig',NOTE:'Pen Note'};var ErrorTypes={SYSTEM:'System',EMAIL:'Email',PASSWORD:'Password',FORMAT:'Format'};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WeightCalculate; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(292);
/* harmony import */ var _Services_Firebase_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(213);
/* harmony import */ var _Services_utils_handleError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ErrorHandler={initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncActions"])('firebase/setError',function(){var _ref=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(){var message,data,status,_args=arguments;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:message=_args.length>0&&_args[0]!==undefined?_args[0]:"";data=_args.length>1&&_args[1]!==undefined?_args[1]:"";status=_args.length>2&&_args[2]!==undefined?_args[2]:"";return _context.abrupt("return",Object(_Services_utils_handleError__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(message,data,status));case 4:case"end":return _context.stop();}}},_callee);}));return function(){return _ref.apply(this,arguments);};}()),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncReducers"])({errorKey:'error',loadingKey:'loading'})};var SetData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/setData'),reducers:function reducers(state,_ref2){var payload=_ref2.payload;if(!state.activeData)state.activeData={weightCalc:{}};if(typeof payload.DataRef!=='undefined'&&typeof payload.Data!=='undefined'){switch(payload.DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].FARMS:state.activeData={weightCalc:{},farm:payload.Data};state.pens=null;state.sections=null;state.batchs=null;state.comments=null;state.graphs=null;state.weighings=null;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].BATCHS:state.activeData.batch=payload.Data;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].SECTIONS:state.activeData.section=payload.Data;break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].PENS:state.activeData.pen=payload.Data;break;}}}};var EditData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/editData'),reducers:function reducers(state,_ref3){var payload=_ref3.payload;if(typeof payload.DataRef!=='undefined'&&typeof payload.Data!=='undefined'){var Data=payload.Data;switch(payload.DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].ACTIVE:if(typeof payload.Append!=='undefined'&&payload.Append){state.activeData=_objectSpread(_objectSpread({},state.activeData),Data);}else state.activeData=Data;if(!state.activeData.weightCalc)state.activeData.weightCalc={};break;case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].FARMS:if(typeof payload.Append!=='undefined'&&payload.Append){state.farms=_objectSpread(_objectSpread({},state.farms),Data);}else state.farms=Data;break;}}}};var ClearData={initialState:{},action:Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["createAction"])('firebase/clearData'),reducers:function reducers(state,_ref4){var payload=_ref4.payload;console.log("test");if(typeof payload.DataRef!=='undefined'){var Clears=Object.values(_Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"]).filter(function(x){return!Object.values(payload.DataRef).includes(x);});var test=_objectSpread({},state);console.log(test);Object.values(Clears).forEach(function(DataRef){switch(DataRef){case _Services_utils_defines__WEBPACK_IMPORTED_MODULE_8__[/* DataRefs */ "a"].ACTIVE:break;case DataRef.PENS:test.pens={};break;case DataRef.SECTIONS:test.sections={};break;}});console.log(test);}}};var WeightCalculate={initialState:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncState"])(),action:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncActions"])('firebase/weightCalc',_Services_Firebase_Utils__WEBPACK_IMPORTED_MODULE_6__[/* WeightCalc */ "b"]),reducers:Object(_thecodingmachine_redux_toolkit_wrapper__WEBPACK_IMPORTED_MODULE_3__["buildAsyncReducers"])({itemKey:'activeData.weightCalc',errorKey:'error',loadingKey:'loading'})};

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/index.js
var resources_namespaceObject = {};
__webpack_require__.r(resources_namespaceObject);
__webpack_require__.d(resources_namespaceObject, "en", function() { return en; });

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-gesture-handler/lib/module/index.js + 18 modules
var lib_module = __webpack_require__(937);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(23);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux-persist/lib/integration/react.js
var integration_react = __webpack_require__(547);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-native-async-storage/async-storage/lib/module/index.js + 2 modules
var async_storage_lib_module = __webpack_require__(311);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(76);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/redux-persist/es/index.js + 11 modules
var redux_persist_es = __webpack_require__(101);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 3 modules
var redux_toolkit_esm = __webpack_require__(87);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/Init.js
var Init = __webpack_require__(202);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/index.js
/* harmony default export */ var Startup = (Object(lib["buildSlice"])('startup',[Init["a" /* default */]]).reducer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/index.js
var Firebase = __webpack_require__(292);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/DefaultTheme.js
var DefaultTheme = __webpack_require__(203);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/ChangeTheme.js
var ChangeTheme = __webpack_require__(145);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/index.js
/* harmony default export */ var Theme = (Object(lib["buildSlice"])('theme',[DefaultTheme["a" /* default */],ChangeTheme["a" /* default */]],{theme:null,darkMode:null}).reducer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/index.js
var firebasePersistConfig={key:'firebase',storage:async_storage_lib_module["a" /* default */],blacklist:['loading','error','farms','batchs','graphs','activeData','sections','pens','weighings','comments']};var reducers=Object(redux["d" /* combineReducers */])({startup:Startup,firebase:Object(redux_persist_es["g" /* persistReducer */])(firebasePersistConfig,Firebase["a" /* default */]),theme:Theme});var rootPersistConfig={key:'root',storage:async_storage_lib_module["a" /* default */],blacklist:['startup','firebase']};var persistedReducer=Object(redux_persist_es["g" /* persistReducer */])(rootPersistConfig,reducers);var store=Object(redux_toolkit_esm["configureStore"])({reducer:persistedReducer,middleware:function middleware(getDefaultMiddleware){var middlewares=getDefaultMiddleware({serializableCheck:{ignoredActions:[redux_persist_es["a" /* FLUSH */],redux_persist_es["f" /* REHYDRATE */],redux_persist_es["b" /* PAUSE */],redux_persist_es["c" /* PERSIST */],redux_persist_es["d" /* PURGE */],redux_persist_es["e" /* REGISTER */]]}});if(false){ var createDebugger; }return middlewares;}});var persistor=Object(redux_persist_es["h" /* persistStore */])(store);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/stack/lib/module/navigators/createStackNavigator.js + 32 modules
var createStackNavigator = __webpack_require__(230);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/index.js + 27 modules
var Containers = __webpack_require__(68);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@react-navigation/native/lib/module/NavigationContainer.js + 3 modules
var NavigationContainer = __webpack_require__(544);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Root.js
var Root = __webpack_require__(38);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/SafeAreaView/index.js
var SafeAreaView = __webpack_require__(52);
var SafeAreaView_default = /*#__PURE__*/__webpack_require__.n(SafeAreaView);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StatusBar/index.js
var StatusBar = __webpack_require__(72);
var StatusBar_default = /*#__PURE__*/__webpack_require__.n(StatusBar);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js + 12 modules
var src_Theme = __webpack_require__(33);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Application.js
var Stack=Object(createStackNavigator["a" /* default */])();var MainNavigator;var AuthNavigator;var AdminNavigator;var UserNavigator;var Application_ApplicationNavigator=function ApplicationNavigator(){var _useTheme=Object(src_Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;var _useState=Object(react["useState"])(false),_useState2=slicedToArray_default()(_useState,2),isApplicationLoaded=_useState2[0],setIsApplicationLoaded=_useState2[1];var applicationIsLoading=Object(es["d" /* useSelector */])(function(state){return state.startup.loading;});Object(react["useEffect"])(function(){if(MainNavigator==null&&!applicationIsLoading){MainNavigator=__webpack_require__(165).default;}if(AuthNavigator==null&&!applicationIsLoading){AuthNavigator=__webpack_require__(272).default;}if(AdminNavigator==null&&!applicationIsLoading){AdminNavigator=__webpack_require__(934).default;}if(UserNavigator==null&&!applicationIsLoading){UserNavigator=__webpack_require__(935).default;}if(MainNavigator!==null&&AuthNavigator!==null&&AdminNavigator!==null&&UserNavigator!==null){setIsApplicationLoaded(true);}},[applicationIsLoading]);Object(react["useEffect"])(function(){return function(){setIsApplicationLoaded(false);MainNavigator=null;AuthNavigator=null;};},[]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react_default.a.createElement(NavigationContainer["a" /* default */],{theme:NavigationTheme,ref:Root["c" /* navigationRef */]},react_default.a.createElement(StatusBar_default.a,{barStyle:darkMode?'light-content':'dark-content'}),react_default.a.createElement(Stack.Navigator,{headerMode:'none',initialRouteName:"Startup"},react_default.a.createElement(Stack.Screen,{name:"Startup",component:Containers["g" /* IndexStartupContainer */]}),isApplicationLoaded&&MainNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Main",component:MainNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&AuthNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Auth",component:AuthNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&AdminNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"Admin",component:AdminNavigator,options:{animationEnabled:false}}),isApplicationLoaded&&UserNavigator!=null&&react_default.a.createElement(Stack.Screen,{name:"User",component:UserNavigator,options:{animationEnabled:false}}))));};/* harmony default export */ var Application = (Application_ApplicationNavigator);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Main.js
var Main = __webpack_require__(165);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Auth.js
var Auth = __webpack_require__(272);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/index.js

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/i18next/dist/esm/i18next.js + 9 modules
var i18next = __webpack_require__(310);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(174);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/en.js
/* harmony default export */ var en = ({SplashText:'AgrisysApp, protein automation technology.',AgrisysFront:{Welcome:'Welcome to Agrisys App',Menu1:'Agrisys Cloud',Menu2:'Connect to Device'},AgrisysConnect:{NavTitle:'User Login',label1:'Email:',label2:'Password:',submit_btn:'Login',reset:'Send reset password',create:'Create New User'},AgrisysAdmin:{NavTitle:'Admin Panel',Welcome:'Welcome: {{name}}',UserBoard:'User Board',Systems:'Systems',Tools:'Tools',Logout:'Log Out'},AgrisysMenu:{NavTitle:'User Panel',Welcome:'Welcome: {{name}}',DashBoard:'DashBoard',Pens:'Pens',Batchs:'Batchs',Growth:'Growth Curves',Operations:'Operations',Autofunctions:'AutoPigs',FeedingFunctions:'Feeding',Pigs:'Pigs',Logout:'Log Out'},DashBoard:{Title:'Farm description',Prop1:'Farm Name',Prop2:'Manager',Prop3:'E-mail',CapacityTxt:'Farm Capacity {{current}} of {{full}}',PerformanceTxt:'Farm performance',BatchesTitle:'Batches:',BatchLable:'{{name}} Startdate: {{Sdate}} EndForcast: {{Edate}},\n{{pigs}} pigs, weight: {{weight}}',FarmInfo_btn:'Farm Information',UserInfo_btn:'User Information',ClearData:'Clear local datastore'},Pens:{},Pen_Display:{Prop1:'Pig count',Prop2:'Batch',Prop3:'Age Days',Prop4:'Average Weight',Prop5:'Average growth pr pig a day',Prop6:'Growth Curve',Prop7:'Alarm Min-Max',Prop7Data:'{{min}}% - {{max}}%',Prop8:'Last Feed time',Prop8Time:'{{date, DD-MM-YYYY HH:mm:ss}}',Prop9:'Portion in kg.',ControlWeights_Title:'Control weighings',WeightTime:'{{date, DD-MM-YYYY HH:mm:ss}}',WeightData:'{{weight}}    : {{count}} pigs',ActivityLog_Title:'Activity Log',ActivityTime:'{{date, DD-MM-YYYY HH:mm:ss}}',ActivityData:'{{count}} * {{action}} of {{weight}}kg \n{{note}}'},example:{helloUser:'I am a fake user, my name is {{name}}',labels:{userId:'Enter a user id'}}});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/resources/index.js

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/moment/moment.js
var moment = __webpack_require__(16);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Translations/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}i18next["a" /* default */].use(context["e" /* initReactI18next */]).init({resources:_objectSpread({},Object.entries(resources_namespaceObject).reduce(function(acc,_ref){var _ref2=slicedToArray_default()(_ref,2),key=_ref2[0],value=_ref2[1];return _objectSpread(_objectSpread({},acc),{},defineProperty_default()({},key,{translation:value}));},{})),interpolation:{format:function format(value,_format,lng){if(_format==='uppercase')return value.toUpperCase();if(value instanceof Date)return moment_default()(value).format(_format);return value;}},lng:'en'});/* harmony default export */ var Translations = (i18next["a" /* default */]);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/App.tsx
var App_App=function App(){return react_default.a.createElement(es["a" /* Provider */],{store:store},react_default.a.createElement(integration_react["PersistGate"],{loading:null,persistor:persistor},react_default.a.createElement(Application,null)));};/* harmony default export */ var AgrisysApp_App = __webpack_exports__["a"] = (App_App);

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(940);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/User.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function signin(_x){return _signin.apply(this,arguments);}function _signin(){_signin=asyncToGenerator_default()(regenerator_default.a.mark(function _callee2(_ref){var Email,Pass,res;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:Email=_ref.Email,Pass=_ref.Pass;if(!Object(Initial["a" /* auth */])().currentUser){_context2.next=10;break;}if(!(Object(Initial["a" /* auth */])().currentUser.email!=Email)){_context2.next=7;break;}_context2.next=5;return logout();case 5:_context2.next=10;break;case 7:_context2.next=9;return getUserData();case 9:return _context2.abrupt("return",_context2.sent);case 10:_context2.next=12;return Object(Initial["a" /* auth */])().signInWithEmailAndPassword(Email,Pass).then(function(){var _ref2=asyncToGenerator_default()(regenerator_default.a.mark(function _callee(e){var User;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return getUserData();case 2:User=_context.sent;return _context.abrupt("return",User);case 4:case"end":return _context.stop();}}},_callee);}));return function(_x5){return _ref2.apply(this,arguments);};}()).catch(function(error){console.log("User Signin Error: ",error);if(error.code==='auth/invalid-email'){return Object(handleError["a" /* default */])({message:'The email addres is invalid'});}return Object(handleError["a" /* default */])({message:'Could not singin'});});case 12:res=_context2.sent;return _context2.abrupt("return",res);case 14:case"end":return _context2.stop();}}},_callee2);}));return _signin.apply(this,arguments);}function logout(){return _logout.apply(this,arguments);}function _logout(){_logout=asyncToGenerator_default()(regenerator_default.a.mark(function _callee4(){var res;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return Object(Initial["a" /* auth */])().signOut().then(function(){console.log("logout");return null;}).catch(function(){var _ref3=asyncToGenerator_default()(regenerator_default.a.mark(function _callee3(error){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log("User logout error:",error);_context3.next=3;return getUserData();case 3:return _context3.abrupt("return",_context3.sent);case 4:case"end":return _context3.stop();}}},_callee3);}));return function(_x6){return _ref3.apply(this,arguments);};}());case 2:res=_context4.sent;return _context4.abrupt("return",res);case 4:case"end":return _context4.stop();}}},_callee4);}));return _logout.apply(this,arguments);}function resetPassword(_x2){return _resetPassword.apply(this,arguments);}function _resetPassword(){_resetPassword=asyncToGenerator_default()(regenerator_default.a.mark(function _callee5(_ref4){var Email,res;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:Email=_ref4.Email;_context5.next=3;return Object(Initial["a" /* auth */])().sendPasswordResetEmail(Email).then(function(){return null;}).catch(function(error){console.log("User resetPass error:",error);if(error.code==='auth/user-not-found'){}return Object(handleError["a" /* default */])({message:'Could not send reset'});});case 3:res=_context5.sent;return _context5.abrupt("return",res);case 5:case"end":return _context5.stop();}}},_callee5);}));return _resetPassword.apply(this,arguments);}function getUserData(){return _getUserData.apply(this,arguments);}function _getUserData(){_getUserData=asyncToGenerator_default()(regenerator_default.a.mark(function _callee6(){var Data,_Meta,Data2;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(!Object(Initial["a" /* auth */])().currentUser){_context6.next=11;break;}Data=function(_ref5){var displayName=_ref5.displayName,email=_ref5.email,emailVerified=_ref5.emailVerified,phoneNumber=_ref5.phoneNumber,photoURL=_ref5.photoURL,uid=_ref5.uid,refreshToken=_ref5.refreshToken;return{displayName:displayName,email:email,emailVerified:emailVerified,phoneNumber:phoneNumber,photoURL:photoURL,uid:uid,refreshToken:refreshToken};}(Object(Initial["a" /* auth */])().currentUser);if(Object(Initial["a" /* auth */])().currentUser.metadata){_Meta=function(_ref6){var creationTime=_ref6.creationTime,lastSignInTime=_ref6.lastSignInTime;return{creationTime:creationTime,lastSignInTime:lastSignInTime};}(Object(Initial["a" /* auth */])().currentUser.metadata);Data.metadata=_Meta;}if(!Object(Initial["a" /* auth */])().currentUser.uid){_context6.next=8;break;}_context6.next=6;return fetch(Data.uid);case 6:Data2=_context6.sent;Data=_objectSpread(_objectSpread({},Data),Data2);case 8:return _context6.abrupt("return",Data);case 11:return _context6.abrupt("return",null);case 12:case"end":return _context6.stop();}}},_callee6);}));return _getUserData.apply(this,arguments);}function fetch(_x3){return _fetch.apply(this,arguments);}function _fetch(){_fetch=asyncToGenerator_default()(regenerator_default.a.mark(function _callee7(UserId){var List,user,ref,userData,_args7=arguments;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:List=_args7.length>1&&_args7[1]!==undefined?_args7[1]:false;user="";if(UserId)user=UserId;else if(!List&&Object(Initial["a" /* auth */])().currentUser)user=Object(Initial["a" /* auth */])().currentUser.uid;if(!(user||List)){_context7.next=11;break;}ref="users/"+user;_context7.next=7;return Object(Initial["b" /* database */])().ref(ref).once('value').then(function(userData){var data=userData.val();return data;}).catch(function(error){console.log(error);if(error.code==='database/permission-denied'){console.log("User update was permission denied. ");}else if(error.code){console.log("User update Error: ",error);}return Object(handleError["a" /* default */])({message:'User fetch, An error occurred'});});case 7:userData=_context7.sent;return _context7.abrupt("return",userData);case 11:return _context7.abrupt("return",Object(handleError["a" /* default */])({message:'User uid in fecth unknown'}));case 12:case"end":return _context7.stop();}}},_callee7);}));return _fetch.apply(this,arguments);}function update(_x4){return _update.apply(this,arguments);}function _update(){_update=asyncToGenerator_default()(regenerator_default.a.mark(function _callee8(userId){var response;return regenerator_default.a.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(userId){_context8.next=2;break;}return _context8.abrupt("return",Object(handleError["a" /* default */])({message:'User ID is required'}));case 2:_context8.next=4;return api.get("users/"+userId);case 4:response=_context8.sent;return _context8.abrupt("return",response.data);case 6:case"end":return _context8.stop();}}},_callee8);}));return _update.apply(this,arguments);}
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/User.js
/* harmony default export */ var Firebase_User = __webpack_exports__["a"] = ({initialState:Object(lib["buildAsyncState"])(),action:Object(lib["buildAsyncActions"])('firebase/user',getUserData),signin:Object(lib["buildAsyncActions"])('firebase/user',signin),logout:Object(lib["buildAsyncActions"])('firebase/user',logout),reset:Object(lib["buildAsyncActions"])('firebase/user',resetPassword),fetch:Object(lib["buildAsyncActions"])('firebase/user',fetch),update:Object(lib["buildAsyncActions"])('firebase/user',update),reducers:Object(lib["buildAsyncReducers"])({itemKey:'user',errorKey:'error',loadingKey:'loading'})});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Index; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Agrisys_Index; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Auth_Index; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ UserCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ AdminPanel_Index; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ AdminPanel_SystemBoard; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ UserPanel_Index; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ UserPanel_DashBoard; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ UserPanel_Pens; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ UserPanel_Pen_Display; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Example_Index; });

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(23);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(312);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Theme/index.js + 12 modules
var Theme = __webpack_require__(33);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Startup/Init.js
var Init = __webpack_require__(202);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(557);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/View/index.js
var exports_View = __webpack_require__(4);
var View_default = /*#__PURE__*/__webpack_require__.n(exports_View);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Image/index.js
var Image = __webpack_require__(41);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Animated/index.js
var Animated = __webpack_require__(14);
var Animated_default = /*#__PURE__*/__webpack_require__.n(Animated);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js
var StyleSheet = __webpack_require__(2);
var StyleSheet_default = /*#__PURE__*/__webpack_require__.n(StyleSheet);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Easing/index.js
var Easing = __webpack_require__(61);
var Easing_default = /*#__PURE__*/__webpack_require__.n(Easing);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Assets/Images/Loading/index.js
/* harmony default export */ var Loading = ({Loading:__webpack_require__(772),Dot0:__webpack_require__(773),Dot1:__webpack_require__(774),Dot2:__webpack_require__(775),Dot3:__webpack_require__(776),Dot4:__webpack_require__(777),Dot5:__webpack_require__(778),Dot6:__webpack_require__(779),Dot7:__webpack_require__(780),Dot8:__webpack_require__(781),Dot9:__webpack_require__(782)});
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/LoadingSplash.js
var LoadingSplash_LoadingSplash=function LoadingSplash(_ref){objectDestructuringEmpty_default()(_ref);var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images;var LoadingBar=[{image:Loading.Dot0,spinOffset:0,jumpOffset:0},{image:Loading.Dot1,spinOffset:40,jumpOffset:0},{image:Loading.Dot2,spinOffset:80,jumpOffset:0},{image:Loading.Dot3,spinOffset:120,jumpOffset:0},{image:Loading.Dot4,spinOffset:160,jumpOffset:0},{image:Loading.Dot5,spinOffset:200,jumpOffset:0},{image:Loading.Dot6,spinOffset:240,jumpOffset:0},{image:Loading.Dot7,spinOffset:280,jumpOffset:0},{image:Loading.Dot8,spinOffset:320,jumpOffset:0},{image:Loading.Dot9,spinOffset:360,jumpOffset:0}];var spinValue=new Animated_default.a.Value(0);var startValue=new Animated_default.a.Value(1);Object(react["useEffect"])(function(){Animated_default.a.loop(Animated_default.a.parallel([Animated_default.a.timing(spinValue,{toValue:1,duration:4000,easing:Easing_default.a.linear,useNativeDriver:true}),Animated_default.a.sequence([Animated_default.a.timing(startValue,{toValue:0.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:1.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:0.5,duration:1000,useNativeDriver:true}),Animated_default.a.timing(startValue,{toValue:1,duration:1000,useNativeDriver:true})])])).start();},[spinValue,startValue]);return react_default.a.createElement(View_default.a,{style:[Layout.fillcolumn,Layout.fullSize,Layout.center]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize,{maxWidth:250,maxHeight:40}],source:Loading.Loading,resizeMode:'contain'}),react_default.a.createElement(View_default.a,{style:[Layout.row,{height:25,width:250}]},LoadingBar.map(function(e,i){return react_default.a.createElement(View_default.a,{key:"dot"+i,style:[{height:25,width:25,transform:[{rotate:e.spinOffset+"deg"}]}]},react_default.a.createElement(Animated_default.a.Image,{source:e.image,resizeMode:'center',style:[Layout.fullSize,{maxWidth:25,maxHeight:25,transform:[{scale:startValue},{rotate:spinValue.interpolate({inputRange:[0,1],outputRange:['0deg','360deg']})}]}]}));})));};var styles=StyleSheet_default.a.create({container:{flex:1,justifyContent:'center',alignItems:'center'},square:{height:50,width:50,backgroundColor:'red'}});LoadingSplash_LoadingSplash.propTypes={};LoadingSplash_LoadingSplash.defaultProps={};/* harmony default export */ var Components_LoadingSplash = (LoadingSplash_LoadingSplash);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Brand.js
var Brand_Brand=function Brand(_ref){var height=_ref.height,width=_ref.width,mode=_ref.mode;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Images=_useTheme.Images;return react_default.a.createElement(Image_default.a,{style:[Layout.fullSize,{height:height,width:width}],source:Images.Logo,resizeMode:mode});};Brand_Brand.propTypes={height:prop_types_default.a.number,mode:prop_types_default.a.oneOf(['contain','cover','stretch','repeat','center']),width:prop_types_default.a.number};Brand_Brand.defaultProps={height:270,width:450,mode:'contain'};/* harmony default export */ var Components_Brand = (Brand_Brand);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Frame.js
var Frame_Frame=function Frame(_ref){var logo=_ref.logo,protein=_ref.protein,bottom=_ref.bottom,childs=_ref.childs;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Images=_useTheme.Images;return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,{position:'absolute'}]},logo&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',top:"5%",left:"2%",width:"33%",height:"15%"}],source:Images.Logo,resizeMode:'center'}),protein&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',top:"10%",right:"0%",width:"30%",height:"50%"}],source:Images.Login_protein,resizeMode:'contain'}),bottom&&react_default.a.createElement(Image_default.a,{style:[Layout.fill,{position:'absolute',bottom:0,width:"100%",height:"40%"}],source:Images.Login_bottom,resizeMode:'cover'}));};Frame_Frame.propTypes={logo:prop_types_default.a.bool,childs:prop_types_default.a.node};Frame_Frame.defaultProps={logo:true,protein:true,bottom:true,childs:null};/* harmony default export */ var Components_Frame = (Frame_Frame);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-elements/dist/index.js + 73 modules
var dist = __webpack_require__(60);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/CustomListItem.js
var CustomListItem_CustomListItem=function CustomListItem(_ref){var key=_ref.key,Title=_ref.Title,Subtitle=_ref.Subtitle,onPress=_ref.onPress,itemStyle=_ref.itemStyle;var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Common=_useTheme.Common,Images=_useTheme.Images;return react_default.a.createElement(dist["c" /* ListItem */],{key:key,containerStyle:[Layout.fill,Common.border,{flexDirection:"column",marginBottom:0,marginTop:0,padding:0,borderRadius:0},itemStyle],button:true,onPress:onPress},react_default.a.createElement(dist["c" /* ListItem */].Content,null,react_default.a.createElement(dist["c" /* ListItem */].Title,{style:{height:30,alignContent:'center'}},Title),Subtitle&&react_default.a.createElement(dist["c" /* ListItem */].Subtitle,null,Subtitle)));};CustomListItem_CustomListItem.propTypes={key:prop_types_default.a.number,Title:prop_types_default.a.string,Subtitle:prop_types_default.a.string,onPress:prop_types_default.a.func,itemStyle:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.array])};CustomListItem_CustomListItem.defaultProps={key:0,Title:"",Subtitle:null,onPress:null,itemStyle:{}};/* harmony default export */ var Components_CustomListItem = (CustomListItem_CustomListItem);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Text/index.js
var Text = __webpack_require__(25);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__(32);
var TouchableOpacity_default = /*#__PURE__*/__webpack_require__.n(TouchableOpacity);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/ContentProp.js
var ContentProp_ContentProp=function ContentProp(_ref){var Columns=_ref.Columns,Datas=_ref.Datas,Actions=_ref.Actions,Title=_ref.Title,maxWidth=_ref.maxWidth,Frame=_ref.Frame;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images,Fonts=_useTheme.Fonts,Colors=_useTheme.Colors;return react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{maxWidth:maxWidth}]},react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Frame?Common.border:{}]},Datas.map(function(data,row){var _Columns=[];var _loop=function _loop(column){Action=Actions[column]?Actions[column]:Actions[0];data=Datas[row][column];_Columns.push(react_default.a.createElement(TouchableOpacity_default.a,{style:[Layout.fill,Layout.fullWidth,Layout.colCenter,Common.border],onLongPress:function onLongPress(){if(Action){Action({data:data,row:row,column:column});}},key:"data_"+row+"_"+column},react_default.a.createElement(Text_default.a,null,data)));};for(var column=0;column<Columns;column++){var Action;var data;_loop(column);}return react_default.a.createElement(View_default.a,{key:"row"+row,style:[Layout.fill,Layout.row]},_Columns);})));};ContentProp_ContentProp.propTypes={Columns:prop_types_default.a.number,Datas:prop_types_default.a.arrayOf(prop_types_default.a.arrayOf(prop_types_default.a.string)),Actions:prop_types_default.a.arrayOf(prop_types_default.a.func),Title:prop_types_default.a.string,maxWidth:prop_types_default.a.number,Frame:prop_types_default.a.bool};ContentProp_ContentProp.defaultProps={Columns:2,Datas:{},Actions:[function(){}],Title:null,maxWidth:600,Frame:false};/* harmony default export */ var Components_ContentProp = (ContentProp_ContentProp);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/Button.js
var Button_Button=function Button(_ref){var Texts=_ref.Texts,Icons=_ref.Icons,Actions=_ref.Actions,maxWidth=_ref.maxWidth,Frame=_ref.Frame,Title=_ref.Title;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Images=_useTheme.Images,Fonts=_useTheme.Fonts,Colors=_useTheme.Colors;return react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Frame?Common.border:{},{maxWidth:maxWidth}]},Texts.map(function(text,index){var icon=Icons[index]?Icons[index]:null;var Action=Actions[index]?Actions[index]:Actions[0];return react_default.a.createElement(TouchableOpacity_default.a,{key:index,style:[Common.button.filledRounded,index>0?Gutters.smallTMargin:{},icon?{minHeight:60}:{minHeight:50},Title?{backgroundColor:Colors.AgriDarkblue,borderColor:Colors.AgriDarkblue}:{}],onPress:function onPress(){if(Action&&!Title){Action({index:index,text:text});}}},icon?react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall,Fonts.textReverse]},text),react_default.a.createElement(View_default.a,{style:[Layout.colCenter,Layout.quarterWidth,{height:50}]},react_default.a.createElement(Image_default.a,{style:Layout.fullSize,source:icon,resizeMode:'contain'}))):react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall,Fonts.textReverse]},text),Icons.length>0&&react_default.a.createElement(View_default.a,{style:[Layout.colCenter,Layout.quarterWidth,{height:50}]})));}));};Button_Button.propTypes={Texts:prop_types_default.a.arrayOf(prop_types_default.a.string),Icons:prop_types_default.a.arrayOf(prop_types_default.a.string),Actions:prop_types_default.a.arrayOf(prop_types_default.a.func),maxWidth:prop_types_default.a.number,Frame:prop_types_default.a.bool,Title:prop_types_default.a.bool};Button_Button.defaultProps={Texts:[],Icons:[],Actions:[],maxWidth:600,Frame:false,Title:false};/* harmony default export */ var Components_Button = (Button_Button);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(13);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(20);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(21);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Navigators/Root.js
var Root = __webpack_require__(38);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Utils.js
var Utils = __webpack_require__(213);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-create-container/es/create-container.js + 11 modules
var create_container = __webpack_require__(978);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-chart/es/victory-chart.js + 5 modules
var victory_chart = __webpack_require__(980);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-core/es/victory-theme/victory-theme.js + 2 modules
var victory_theme = __webpack_require__(982);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-tooltip/es/victory-tooltip.js + 1 modules
var victory_tooltip = __webpack_require__(986);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-axis/es/victory-axis.js + 1 modules
var victory_axis = __webpack_require__(988);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-group/es/victory-group.js + 1 modules
var victory_group = __webpack_require__(989);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-line/es/victory-line.js + 55 modules
var victory_line = __webpack_require__(976);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/victory-scatter/es/victory-scatter.js + 3 modules
var victory_scatter = __webpack_require__(981);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/CurveViewer.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var VictoryZoomVoronoiContainer=Object(create_container["a" /* createContainer */])("zoom","voronoi");function getRandomNumber(low,high){var r=Math.floor(Math.random()*(high-low+1))+low;return r;}function getRandomColor(){var red_range=[15,230];var green_range=[15,230];var blue_range=[15,230];var a_range=[0.3,1];var red=getRandomNumber(red_range[0],red_range[1]);var green=getRandomNumber(green_range[0],green_range[1]);var blue=getRandomNumber(blue_range[0],blue_range[1]);var alpha=getRandomNumber(a_range[0]*100,a_range[1]*100)/100;return{r:red,g:green,b:blue,a:alpha,rgbaValue:'rgba('+red+','+green+','+blue+','+alpha+')'};}function CalcWeighningsSeries(_ref){var WeighningsDatas=_ref.WeighningsDatas,Series=_ref.Series;var DataSets=[];var Legends=[];if(WeighningsDatas&&WeighningsDatas.Batch){var StartDate=new Date(WeighningsDatas.Batch.time);var EndDate=new Date(StartDate.setDate(StartDate.getDate()+7*8));if(WeighningsDatas.TempCurve){var TempCurve=WeighningsDatas.TempCurve;var TemplateData=[];var currentTime=StartDate;for(var i=0;i<TempCurve.data.length;i++){if(TempCurve.data[i]){TemplateData.push({x:currentTime.getTime(),y:TempCurve.data[i]});}if(i<TempCurve.data.length-1){currentTime=new Date(Object(Utils["a" /* AccumulateTime */])(currentTime,TempCurve.periode));}}EndDate=currentTime.getTime();TemplateData.push({x:EndDate,y:TempCurve.data[TempCurve.data.length-1]});var deactive=false;if(Series){var index=Series.findIndex(function(i){return i.name===WeighningsDatas.Batch.gcurve;});if(index!==-1&&Series[index].deactivate)deactive=true;}DataSets.push({type:"Line",name:WeighningsDatas.Batch.gcurve,color:"#000",data:TemplateData,deactive:deactive});Legends.push({name:WeighningsDatas.Batch.gcurve,symbol:{fill:"#000"}});}}return{DataSets:DataSets,Legends:Legends};}var CurveViewer_CurveViewer=function(_Component){inherits_default()(CurveViewer,_Component);var _super=_createSuper(CurveViewer);function CurveViewer(props){var _this;classCallCheck_default()(this,CurveViewer);_this=_super.call(this,props);var _this$setData=_this.setData(props),Legends=_this$setData.Legends,DataSets=_this$setData.DataSets,StartDate=_this$setData.StartDate,EndDate=_this$setData.EndDate,Domain=_this$setData.Domain;_this.state={DataSets:DataSets,Legends:Legends,StartDate:StartDate,EndDate:EndDate,Labels:[],entireDomain:Domain,zoomedDomain:Domain};return _this;}createClass_default()(CurveViewer,[{key:"setData",value:function setData(Props,State){var D=new Date();var StartDate=D.getTime();var EndDate=new Date(D.setDate(D.getDate()+7*8));var Legends=[];var DataSets=[];var Domain=[];if(Props.WeighningsDatas){var WeighningSeries=CalcWeighningsSeries({WeighningsDatas:Props.WeighningsDatas,Series:State?State.DataSets:null});DataSets=DataSets.concat(WeighningSeries.DataSets);Legends=Legends.concat(WeighningSeries.Legends);}var Domain=this.getEntireDomain(DataSets);return{Legends:Legends,DataSets:DataSets,StartDate:StartDate,EndDate:EndDate,Domain:Domain};}},{key:"getData",value:function getData(){}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props!==prevProps){var _this$setData2=this.setData(this.props,this.state),Legends=_this$setData2.Legends,DataSets=_this$setData2.DataSets,StartDate=_this$setData2.StartDate,EndDate=_this$setData2.EndDate,Domain=_this$setData2.Domain;this.setState({Legends:Legends,DataSets:DataSets,StartDate:StartDate,EndDate:EndDate,entireDomain:Domain,zoomedDomain:Domain},function(){_this2.forceUpdate();});}}},{key:"componentDidMount",value:function componentDidMount(){this.getData();}},{key:"componentWillUnmount",value:function componentWillUnmount(){}},{key:"getEntireDomain",value:function getEntireDomain(series){var MinMax={y:[0,1],x:[0,1]};series.forEach(function(element){if(!element.deactivate&&element.data){var data=element.data;if(data.length>0){var min=_.minBy(data,function(d){return d.y;}).y;var max=_.maxBy(data,function(d){return d.y;}).y;if(min<MinMax.y[0]||MinMax.y[0]===0)MinMax.y[0]=min;if(max>MinMax.y[1])MinMax.y[1]=max;min=_.minBy(data,function(d){return d.x;}).x;max=_.maxBy(data,function(d){return d.x;}).x;if(min<MinMax.x[0]||MinMax.x[0]===0)MinMax.x[0]=min;if(max>MinMax.x[1])MinMax.x[1]=max;}}});return MinMax;}},{key:"getZoomDomain",value:function getZoomDomain(Props){var Serie=this.state.DataSets;var filteredSeries=[];Serie.forEach(function(element){var filtered=[];if(element.type==="Line"){element.data.forEach(function(data){if(!data.predict||Props.Predict){filtered.push(data);}});}if(filtered.length>0){filteredSeries.push(_objectSpread(_objectSpread({},element),{},{data:filtered}));}});return filteredSeries;}},{key:"onDomainChange",value:function onDomainChange(domain){this.setState({zoomedDomain:domain});}},{key:"render",value:function render(){var App=Object(Root["a" /* isApp */])();var Legends=[this.state.zoomedDomain.x[0]];while(Legends[Legends.length-1]<this.state.zoomedDomain.x[1]){if(this.props.Display)Legends.push(this.state.DataSets[0].data[Legends.length-1].x);else Legends.push(Legends[Legends.length-1]+3600000);}if(this.props.Display&&this.state.DataSets){this.state.DataSets.forEach(function(e,i){Legends.push(i);});}var LastLegend="";return react_default.a.createElement(View_default.a,{style:[{height:650,width:'100%',alignItems:'center'}]},Legends&&Legends.length>0&&this.state.DataSets&&this.state.DataSets.length>0&&react_default.a.createElement(View_default.a,{style:[{height:600,width:'100%'},{maxWidth:Object(Root["a" /* isApp */])()?450:950},{borderWidth:2,borderRadius:10,minHeight:400,marginVertical:5,marginHorizontal:5,padding:2.5}]},react_default.a.createElement(victory_chart["a" /* default */],{scale:{x:"time"},width:Object(Root["a" /* isApp */])()?370:950,height:600,padding:50,domain:this.state.entireDomain,theme:victory_theme["a" /* default */].material,containerComponent:react_default.a.createElement(VictoryZoomVoronoiContainer,{voronoiDimension:"x",zoomDimension:"x",mouseFollowTooltips:true,onZoomDomainChange:this.onDomainChange.bind(this),labels:function labels(_ref2){var datum=_ref2.datum;if(datum.childName==="none"||!datum.y)return;var DateTime=new Date(datum.x);var format=DateTime.getDate()+"/"+(DateTime.getMonth()+1)+"/"+DateTime.getFullYear()+" "+ +("0"+DateTime.getHours()).slice(-2)+":"+("0"+DateTime.getMinutes()).slice(-2);return datum.childName+"\n"+format+" : "+datum.y.toFixed(2)+"\n ";},labelComponent:react_default.a.createElement(victory_tooltip["a" /* default */],{cornerRadius:0,flyoutStyle:{fill:"white"}})})},react_default.a.createElement(victory_axis["a" /* default */],{crossAxis:false,scale:{x:"time"},tickCount:8,minDomain:{x:1,y:0},tickFormat:function tickFormat(t){var DateTime=new Date(t);var format=DateTime.getDate()+"/"+(DateTime.getMonth()+1)+"/"+DateTime.getFullYear()+" "+("0"+DateTime.getHours()).slice(-2)+":"+("0"+DateTime.getMinutes()).slice(-2);if(LastLegend===format)return;else LastLegend=format;return format;},theme:victory_theme["a" /* default */].material,standalone:false,fixLabelOverlap:true,tickValues:Legends,style:{grid:{stroke:"#818e99",strokeWidth:0.5}}}),react_default.a.createElement(victory_axis["a" /* default */],{dependentAxis:true,crossAxis:false,tickCount:20,minDomain:{x:0,y:0},tickFormat:function tickFormat(t){return Math.round(t*10)/10;},theme:victory_theme["a" /* default */].material,standalone:false,style:{grid:{stroke:"#818e99",strokeWidth:0.5}}}),this.state.DataSets&&this.state.DataSets.map(function(Serie,i){console.log(Serie);if(Serie.type==="Line"&&!Serie.deactivate){return react_default.a.createElement(victory_group["a" /* default */],{key:"Line_"+Serie.name,data:Serie.data},react_default.a.createElement(victory_line["a" /* default */],{style:{data:{stroke:Serie.color,strokeWidth:function strokeWidth(_ref3){var active=_ref3.active;return active?4:2;}}},name:Serie.name}),react_default.a.createElement(victory_scatter["a" /* default */],{size:2,style:{data:{stroke:"#000",strokeWidth:0.5,fill:Serie.color}},name:"none"}));}}))));}}]);return CurveViewer;}(react["Component"]);var mapStateToProps=function mapStateToProps(state){var firebase=state.firebase;return{firebase:firebase};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{};};/* harmony default export */ var Components_CurveViewer = (Object(es["b" /* connect */])(mapStateToProps,mapDispatchToProps)(CurveViewer_CurveViewer));
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Components/index.js

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Startup/Index.js
var Index_IndexStartupContainer=function IndexStartupContainer(){var _useTheme=Object(Theme["a" /* useTheme */])(),Layout=_useTheme.Layout,Gutters=_useTheme.Gutters,Fonts=_useTheme.Fonts;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var dispatch=Object(es["c" /* useDispatch */])();Object(react["useEffect"])(function(){dispatch(Init["a" /* default */].action());},[dispatch]);return react_default.a.createElement(Components_LoadingSplash,null);};/* harmony default export */ var Index = (Index_IndexStartupContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Theme/ChangeTheme.js
var ChangeTheme = __webpack_require__(145);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Agrisys/Index.js
var Index_IndexAgrisysContainer=function IndexAgrisysContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var changeTheme=function changeTheme(_ref){var theme=_ref.theme,darkMode=_ref.darkMode;dispatch(ChangeTheme["a" /* default */].action({theme:theme,darkMode:darkMode}));};Object(react["useEffect"])(function(){},[]);return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,{protein:false,logo:false}),react_default.a.createElement(View_default.a,{style:[Layout.colCenter,Gutters.largeBMargin]},react_default.a.createElement(Components_Brand,null),react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},t('AgrisysFront.Welcome'))),react_default.a.createElement(View_default.a,{style:[Layout.halvWidth,Gutters.hugeTMargin,{maxWidth:400}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysFront.Menu1'),t('AgrisysFront.Menu2')],Icons:[Images.Haxa_globe],Actions:[function(ele){var _navigationRef$curren;switch(ele.index){case 0:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});break;case 1:break;case 2:break;}}]})));};/* harmony default export */ var Agrisys_Index = (Index_IndexAgrisysContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/ActivityIndicator/index.js
var ActivityIndicator = __webpack_require__(50);
var ActivityIndicator_default = /*#__PURE__*/__webpack_require__.n(ActivityIndicator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/User.js + 1 modules
var Firebase_User = __webpack_require__(67);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Utils.js
var Firebase_Utils = __webpack_require__(45);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/defines.js
var defines = __webpack_require__(44);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/Firebase/Initial.js
var Initial = __webpack_require__(39);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/UserLogin.js
var UserLogin_this=undefined;var UserLogin_LoginContainer=function LoginContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Email=_useState2[0],setEmail=_useState2[1];var _useState3=Object(react["useState"])(""),_useState4=slicedToArray_default()(_useState3,2),Pass=_useState4[0],setPass=_useState4[1];var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var signin=function signin(_Email,_Pass){dispatch(Firebase_User["a" /* default */].signin({Email:_Email,Pass:_Pass}));};var resetPass=function resetPass(_Email){dispatch(Firebase_User["a" /* default */].reset({Email:_Email}));};var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,null),firebaseError&&firebaseError.message&&react_default.a.createElement(Text_default.a,null,firebaseError.message),react_default.a.createElement(View_default.a,{style:[Common.border,Layout.halvWidth,Layout.colCenter,Gutters.regularBMargin,Gutters.smallVPadding,{backgroundColor:"white",maxWidth:650}]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullWidth,Gutters.smallVMargin,{maxWidth:600}]},react_default.a.createElement(dist["b" /* Input */],{label:t('AgrisysConnect.label1'),onChangeText:function onChangeText(text){return setEmail(text);},editable:!firebaseLoading,keyboardType:'default',value:Email,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]}),react_default.a.createElement(dist["b" /* Input */],{label:t('AgrisysConnect.label2'),onChangeText:function onChangeText(text){return setPass(text);},editable:!firebaseLoading,keyboardType:'default',value:Pass,selectTextOnFocus:true,secureTextEntry:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysConnect.submit_btn')],Icons:[Images.User],Actions:[function(ele){if(Email&&Email!==""){if(Email==="CLEAR"){UserLogin_this.props.clearDataMem();}else if(Pass&&Pass!==""){signin(Email,Pass);}}else{dispatch(Firebase_Utils["c" /* ErrorHandler */].action({message:"Please provide an Email"}));}}]})),react_default.a.createElement(View_default.a,{style:[Layout.halvWidth,{maxWidth:450}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysConnect.reset'),t('AgrisysConnect.create')],Icons:[],Actions:[function(ele){var _navigationRef$curren;switch(ele.index){case 0:if(Email&&Email!==""){resetPass(Email);}else{dispatch(Firebase_Utils["c" /* ErrorHandler */].action({message:"Please provide an Email"}));}break;case 1:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'CreateUser'});break;}}]})));};/* harmony default export */ var UserLogin = (UserLogin_LoginContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/Index.js
var Index_PanelsSorter=function PanelsSorter(userType){switch(userType){case defines["c" /* UserStates */].ADMIN:case defines["c" /* UserStates */].TECH:return"AdminPanel";case defines["c" /* UserStates */].OWNER:return"ConsysPanel";case defines["c" /* UserStates */].FREE:return"UserPanel";case defines["c" /* UserStates */].STARTER:return"CreateUserData";default:return"LoginUser";}};var Index_IndexAuthContainer=function IndexAuthContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout;var _useState=Object(react["useState"])(false),_useState2=slicedToArray_default()(_useState,2),isAuthLoaded=_useState2[0],setIsAuthLoaded=_useState2[1];var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var _useState3=Object(react["useState"])(false),_useState4=slicedToArray_default()(_useState3,2),isUserLoaded=_useState4[0],setIsUserLoaded=_useState4[1];var User=Object(es["d" /* useSelector */])(function(state){return state.firebase.user;});var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){var _navigationRef$curren,_navigationRef$curren2,_navigationRef$curren3,_navigationRef$curren4;if(!User||!User.state)setIsUserLoaded('Login');else{if(User.state===defines["c" /* UserStates */].STARTER&&!User.emailVerified){setIsUserLoaded('Verify');}else{switch(User.state){case defines["c" /* UserStates */].ADMIN:case defines["c" /* UserStates */].TECH:(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Admin',{screen:'Home'});break;case defines["c" /* UserStates */].OWNER:(_navigationRef$curren2=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren2.navigate('User',{screen:'Home'});break;case defines["c" /* UserStates */].FREE:(_navigationRef$curren3=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren3.navigate('User',{screen:'Home'});break;case defines["c" /* UserStates */].STARTER:(_navigationRef$curren4=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren4.navigate('Auth',{screen:'CreateUser'});break;default:setIsUserLoaded('Login');break;}}}},[User]);Object(react["useEffect"])(function(){dispatch(Firebase_Utils["c" /* ErrorHandler */].action());},[]);if(!isUserLoaded){return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter]},react_default.a.createElement(Components_Brand,null),react_default.a.createElement(ActivityIndicator_default.a,{size:'large',style:[Gutters.largeVMargin]}),react_default.a.createElement(Text_default.a,{style:Fonts.textCenter},t('SplashText')));}else if(isUserLoaded==="Login"){return react_default.a.createElement(UserLogin,null);}else if(isUserLoaded==="Verify"){return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter]},react_default.a.createElement(Text_default.a,null,"Do Verify ???"));}};/* harmony default export */ var Auth_Index = (Index_IndexAuthContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/Auth/UserCreate.js
var UserCreate_this=undefined;var UserCreate_LoginContainer=function LoginContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Email=_useState2[0],setEmail=_useState2[1];var _useState3=Object(react["useState"])(""),_useState4=slicedToArray_default()(_useState3,2),Pass=_useState4[0],setPass=_useState4[1];var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var signin=function signin(_Email,_Pass){dispatch(Firebase_User["a" /* default */].signin({Email:_Email,Pass:_Pass}));};var resetPass=function resetPass(_Email){dispatch(Firebase_User["a" /* default */].reset({Email:_Email}));};var logout=function logout(){dispatch(Firebase_User["a" /* default */].logout());};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(Components_Frame,null),firebaseError&&firebaseError.message&&react_default.a.createElement(Text_default.a,null,firebaseError.message),react_default.a.createElement(View_default.a,{style:[Common.border,Layout.halvWidth,Layout.colCenter,Gutters.regularBMargin,Gutters.smallVPadding,{backgroundColor:"white",maxWidth:650}]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullWidth,Gutters.smallVMargin,{maxWidth:600}]},react_default.a.createElement(dist["b" /* Input */],{label:"Email",onChangeText:function onChangeText(text){return setEmail(text);},editable:!firebaseLoading,keyboardType:'default',value:Email,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]}),react_default.a.createElement(dist["b" /* Input */],{label:"Password",onChangeText:function onChangeText(text){return setPass(text);},editable:!firebaseLoading,keyboardType:'default',value:Pass,selectTextOnFocus:true,secureTextEntry:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Components_Button,{Texts:["Login"],Icons:[Images.User],Actions:[function(ele){if(Email&&Email!==""){if(Email==="CLEAR"){UserCreate_this.props.clearDataMem();}else if(Pass&&Pass!==""){signin(Email,Pass);}}}]})));};/* harmony default export */ var UserCreate = (UserCreate_LoginContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/ScrollView/index.js
var ScrollView = __webpack_require__(59);
var ScrollView_default = /*#__PURE__*/__webpack_require__.n(ScrollView);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/SafeAreaView/index.js
var SafeAreaView = __webpack_require__(52);
var SafeAreaView_default = /*#__PURE__*/__webpack_require__.n(SafeAreaView);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/MenuView.js
var MenuView_MenuView=function MenuView(props){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var User=Object(es["d" /* useSelector */])(function(state){return state.firebase.user;});var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Username=_useState2[0],setUsername=_useState2[1];var logout=function logout(){dispatch(Firebase_Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:null}));dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){if(User.displayName){setUsername(User.displayName);}else if(User.name){setUsername(User.name);}else{setUsername("");}},[User]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill]},react_default.a.createElement(ScrollView_default.a,{style:Gutters.regularBPadding},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,{paddingVertical:35,alignSelf:'center'}]},t('AgrisysAdmin.Welcome',{name:Username})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{maxWidth:300,alignSelf:'center'}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysAdmin.UserBoard'),t('AgrisysAdmin.Systems'),t('AgrisysAdmin.Tools')],Icons:[Images.DashBoard,Images.System],Actions:[function(ele){var _View=["UserBoard","System","Tools"][ele.index];props.setView({View:_View});}]}),react_default.a.createElement(View_default.a,{style:{minHeight:30}}),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysAdmin.Logout')],Icons:[],Actions:[function(ele){var _navigationRef$curren;logout();(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});}]})))));};/* harmony default export */ var AdminPanel_MenuView = (MenuView_MenuView);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/FlatList/index.js
var FlatList = __webpack_require__(85);
var FlatList_default = /*#__PURE__*/__webpack_require__.n(FlatList);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/Linking/index.js
var Linking = __webpack_require__(294);
var Linking_default = /*#__PURE__*/__webpack_require__.n(Linking);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Farm.js + 1 modules
var Firebase_Farm = __webpack_require__(128);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/SystemBoard.js
function SystemBoard_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function SystemBoard_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){SystemBoard_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{SystemBoard_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var SystemBoard_SystemBoard=function SystemBoard(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var farmState=Object(es["d" /* useSelector */])(function(state){return state.firebase.farms;});var _useState=Object(react["useState"])({name:""}),_useState2=slicedToArray_default()(_useState,2),FarmSelect=_useState2[0],setFarmSelect=_useState2[1];Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Firebase_Utils["c" /* ErrorHandler */].action());dispatch(Firebase_Farm["a" /* default */].action({FarmId:null}));},[]);if(farmState&&Object.keys(farmState).length>0){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(FlatList_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding],data:Object.keys(farmState),renderItem:function renderItem(_ref){var item=_ref.item,index=_ref.index;var Farm=SystemBoard_objectSpread({},farmState[item]);if(!Farm)return null;Farm.id=item;return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.rowCenter,Layout.fullWidth]},react_default.a.createElement(Components_CustomListItem,{Title:Farm.name,itemStyle:[{minWidth:100,height:35}],onPress:function onPress(){}}),react_default.a.createElement(Components_CustomListItem,{itemStyle:[{minWidth:150,height:35,justifyContent:"center"}],Title:Farm.manager,onPress:function onPress(){setFarmSelect(Farm);}}),react_default.a.createElement(Components_CustomListItem,{itemStyle:[{minWidth:150,height:35}],Title:Farm.email,onPress:function onPress(){setFarmSelect(Farm);}}));},keyExtractor:function keyExtractor(item,index){return index.toString();}}),react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullWidth,{height:50,justifyContent:'center'}]},react_default.a.createElement(dist["b" /* Input */],{containerStyle:[Layout.quarterWidth,{minWidth:120,height:70,borderWidth:1,marginTop:10}],label:"Farm-tag:",onChangeText:function onChangeText(text){return setFarmSelect(text);},editable:false,keyboardType:'default',value:FarmSelect.name,selectTextOnFocus:true,style:[Common.textInput,{height:40,minWidth:120}]}),react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.quarterWidth,{height:50,paddingTop:20,marginHorizontal:10,maxWidth:220,justifyContent:'space-between'}]},react_default.a.createElement(Components_Button,{Texts:["Consys"],maxWidth:90,Actions:[function(){if(FarmSelect.site){var Cloud="http://"+FarmSelect.site+".agrisys.cloud/";Linking_default.a.openURL(Cloud);}}]}),react_default.a.createElement(Components_Button,{Texts:["Farm Panel"],maxWidth:110,Actions:[function(){if(FarmSelect.id!==""){var _navigationRef$curren;dispatch(Firebase_Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:FarmSelect.id}));(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:'Home'});}}]}))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var AdminPanel_SystemBoard = (SystemBoard_SystemBoard);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/AdminPanel/Index.js
var Index_IndexAdminContainer=function IndexAdminContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var _useState=Object(react["useState"])(null),_useState2=slicedToArray_default()(_useState,2),isAppView=_useState2[0],setIsAppView=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=slicedToArray_default()(_useState3,2),currentView=_useState4[0],setView=_useState4[1];Object(react["useEffect"])(function(){setIsAppView(Object(Root["a" /* isApp */])());});var changeView=function changeView(_ref){var View=_ref.View;if(isAppView){var _navigationRef$curren;(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Admin',{screen:View});}else{switch(View){case"UserBoard":break;case"System":setView([react_default.a.createElement(AdminPanel_SystemBoard,{key:"View_Board"})]);break;case"Tools":break;}}};if(isAppView===null){return react_default.a.createElement(ActivityIndicator_default.a,null);}else if(isAppView){if(currentView)return currentView;else return react_default.a.createElement(AdminPanel_MenuView,{setView:changeView});}else{if(!currentView)setView([react_default.a.createElement(AdminPanel_SystemBoard,{key:"View_Board"})]);return react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullSize,{alignItems:'flex-start'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullHeight,{minWidth:300,maxWidth:320,borderRightWidth:1}]},react_default.a.createElement(ScrollView_default.a,{style:[Layout.fill]},react_default.a.createElement(AdminPanel_MenuView,{setView:changeView})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{height:110,marginBottom:15}]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize],source:Images.Logo,resizeMode:'contain'}))),react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullSize,{alignItems:'flex-start'}]},currentView));}};/* harmony default export */ var AdminPanel_Index = (Index_IndexAdminContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/MenuView.js
var UserPanel_MenuView_MenuView=function MenuView(props){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var User=Object(es["d" /* useSelector */])(function(state){return state.firebase.user;});var _useState=Object(react["useState"])(""),_useState2=slicedToArray_default()(_useState,2),Username=_useState2[0],setUsername=_useState2[1];var logout=function logout(){dispatch(Firebase_Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:null}));dispatch(Firebase_User["a" /* default */].logout());};Object(react["useEffect"])(function(){if(User.displayName){setUsername(User.displayName);}else if(User.name){setUsername(User.name);}else{setUsername("");}},[User]);return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill]},react_default.a.createElement(ScrollView_default.a,{style:Gutters.regularBPadding},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colCenter]},react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,{paddingVertical:35,alignSelf:'center'}]},t('AgrisysMenu.Welcome',{name:Username})),react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{maxWidth:300,alignSelf:'center'}]},react_default.a.createElement(Components_Button,{Texts:[t('AgrisysMenu.DashBoard'),t('AgrisysMenu.Pens'),t('AgrisysMenu.Batchs'),t('AgrisysMenu.Growth'),t('AgrisysMenu.Operations'),t('AgrisysMenu.Autofunctions'),t('AgrisysMenu.FeedingFunctions'),t('AgrisysMenu.Pigs')],Icons:[Images.DashBoard,Images.Pens,Images.Section,Images.GCurves,Images.System,Images.AutoPig,Images.Feed,Images.Sow],Actions:[function(ele){var _View=["DashBoard","Pens","Batchs","Growth","Operations","Autofunctions","FeedingFunctions","Pigs"][ele.index];props.setView({View:_View});}]}),react_default.a.createElement(View_default.a,{style:{minHeight:30}}),react_default.a.createElement(Components_Button,{Texts:[t('AgrisysMenu.Logout')],Icons:[],Actions:[function(ele){var _navigationRef$curren;logout();(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('Auth',{screen:'Home'});}]})))));};/* harmony default export */ var UserPanel_MenuView = (UserPanel_MenuView_MenuView);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/DashBoard.js
var DashBoard_DashBoard=function DashBoard(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var farmDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.farms&&state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.farms[state.firebase.activeData.farm]:undefined;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Firebase_Utils["c" /* ErrorHandler */].action());},[]);if(farmDatas&&typeof farmDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_Button,{Texts:[t('DashBoard.Title')],Title:true}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('DashBoard.Prop1'),farmDatas.name],[t('DashBoard.Prop2'),farmDatas.manager],[t('DashBoard.Prop3'),farmDatas.email]]}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Text_default.a,null,t('DashBoard.BatchesTitle')),react_default.a.createElement(Text_default.a,null,"Element not done"),react_default.a.createElement(Text_default.a,null,"Element not done"))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_DashBoard = (DashBoard_DashBoard);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-super-grid/index.js + 3 modules
var react_native_super_grid = __webpack_require__(296);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Section.js + 1 modules
var Firebase_Section = __webpack_require__(129);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Pen.js + 1 modules
var Firebase_Pen = __webpack_require__(227);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/formators.js
var formators = __webpack_require__(168);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Pens.js
var Pens_Pens=function Pens(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var farmId=Object(es["d" /* useSelector */])(function(state){return state.firebase.activeData&&state.firebase.activeData.farm?state.firebase.activeData.farm:undefined;});var sectionDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.sections;});var pensDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.pens;});var weighingsDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.weighings;});var autoPigs=Object(es["d" /* useSelector */])(function(state){return state.firebase.autopigs;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Firebase_Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(farmId&&(!sectionDatas||typeof sectionDatas==='undefined')){dispatch(Firebase_Section["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!pensDatas||typeof pensDatas==='undefined')){dispatch(Firebase_Pen["a" /* default */].action({FarmId:farmId}));}if(farmId&&(!weighingsDatas||typeof weighingsDatas==='undefined')){}if(farmId&&(!autoPigs||typeof autoPigs==='undefined')){}},[farmId]);if(sectionDatas&&typeof sectionDatas!=='undefined'){return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(react_native_super_grid["a" /* SectionGrid */],{style:[Layout.fill,Layout.fullSize,Gutters.smallVPadding,Gutters.smallHPadding],itemDimension:70,spacing:10,sections:Object.keys(sectionDatas).filter(function(e){return e!=='update_time';}).map(function(Section){var Pens=Object(formators["a" /* sortObject */])(sectionDatas[Section].pens);return{title:Section,data:Object.keys(Pens)};}),renderSectionHeader:function renderSectionHeader(_ref){var section=_ref.section;return react_default.a.createElement(View_default.a,{style:[Layout.midWidth,{marginBottom:0},Object(Root["a" /* isApp */])()?{width:"65%"}:{width:"100%"}]},react_default.a.createElement(Components_Button,{Texts:[section.title],Title:true}));},renderItem:function renderItem(item){var color=Colors.gray;var displayWeight=null;var AutoPig=false;var Pen;if(pensDatas&&pensDatas[item.item]){Pen=pensDatas[item.item];if(autoPigs&&autoPigs.some(function(e){return e[item.item];})){console.log("Pens: "+item.item+" is autopig property");}if(Pen.datas&&Pen.datas.autopig)AutoPig=Pen.datas.autopig;}return react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outlineRounded,{borderColor:'#000000',borderWidth:AutoPig?5:0,width:70,height:70,alignItems:"center",justifyContent:"center",backgroundColor:color}],onPress:function onPress(){var _navigationRef$curren;var batch=Pen&&Pen.datas&&Pen.datas.batch?Pen.datas.batch:null;dispatch(Firebase_Utils["b" /* EditData */].action({DataRef:defines["a" /* DataRefs */].ACTIVE,Data:{farm:farmId,section:item.section.title,pen:item.item,batch:batch}}));(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:'Pen_Display'});}},react_default.a.createElement(Text_default.a,null,item.item),displayWeight?react_default.a.createElement(Text_default.a,null,displayWeight+" kg"):react_default.a.createElement(react_default.a.Fragment,null));}}));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Pens = (Pens_Pens);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Index.js
var Index_IndexUserContainer=function IndexUserContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var _useState=Object(react["useState"])(null),_useState2=slicedToArray_default()(_useState,2),isAppView=_useState2[0],setIsAppView=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=slicedToArray_default()(_useState3,2),currentView=_useState4[0],setView=_useState4[1];var activeFarm=Object(es["d" /* useSelector */])(function(state){if(state.firebase.activeData&&state.firebase.activeData.farm)return state.firebase.activeData.farm;else if(state.firebase.user&&state.firebase.user.farms){var FarmId=Object.keys(state.firebase.user.farms)[0];dispatch(Firebase_Utils["d" /* SetData */].action({DataRef:defines["a" /* DataRefs */].FARMS,Data:FarmId}));return FarmId;}else return undefined;});var farmDatas=activeFarm?Object(es["d" /* useSelector */])(function(state){return state.firebase.farms?state.firebase.farms[activeFarm]:undefined;}):undefined;Object(react["useEffect"])(function(){if(activeFarm&&(!farmDatas||typeof farmDatas==='undefined')){dispatch(Firebase_Farm["a" /* default */].action({FarmId:activeFarm}));}},[activeFarm]);Object(react["useEffect"])(function(){if(Object(Root["a" /* isApp */])()!=isAppView)setIsAppView(Root["a" /* isApp */]);});var changeView=function changeView(_ref){var View=_ref.View;if(isAppView){var _navigationRef$curren;(_navigationRef$curren=Root["c" /* navigationRef */].current)==null?void 0:_navigationRef$curren.navigate('User',{screen:View});}else{switch(View){case"DashBoard":setView([react_default.a.createElement(UserPanel_DashBoard,{key:"View_Board"})]);break;case"Pens":setView([react_default.a.createElement(UserPanel_Pens,{key:"View_Board"})]);break;case"Tools":break;}}};if(isAppView===null){return react_default.a.createElement(ActivityIndicator_default.a,null);}else if(isAppView){if(currentView)return currentView;else return react_default.a.createElement(UserPanel_MenuView,{setView:changeView});}else{if(!currentView){setView([react_default.a.createElement(UserPanel_DashBoard,{key:"View_Board"})]);}return react_default.a.createElement(View_default.a,{style:[Layout.fillRow,Layout.fullSize,{alignItems:'flex-start'}]},react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullHeight,{minWidth:300,maxWidth:320,borderRightWidth:1}]},react_default.a.createElement(View_default.a,{style:[Layout.fill]},react_default.a.createElement(UserPanel_MenuView,{setView:changeView})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,{height:110,marginBottom:15}]},react_default.a.createElement(Image_default.a,{style:[Layout.fullSize],source:Images.Logo,resizeMode:'contain'}))),react_default.a.createElement(View_default.a,{style:[Layout.fillCol,Layout.fullSize,{alignItems:'flex-start'}]},currentView));}};/* harmony default export */ var UserPanel_Index = (Index_IndexUserContainer);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Weighing.js + 1 modules
var Weighing = __webpack_require__(228);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Comment.js + 1 modules
var Comment = __webpack_require__(229);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Batch.js + 1 modules
var Batch = __webpack_require__(225);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Store/Firebase/Graph.js + 1 modules
var Graph = __webpack_require__(226);

// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/Cloud/UserPanel/Pen_Display.js
var Pen_Display_Pen_Display=function Pen_Display(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout,Images=_useTheme.Images,Colors=_useTheme.Colors;var dispatch=Object(es["c" /* useDispatch */])();var firebaseLoading=Object(es["d" /* useSelector */])(function(state){return state.firebase.loading;});var firebaseError=Object(es["d" /* useSelector */])(function(state){return state.firebase.error;});var testerf=Object(es["d" /* useSelector */])(function(state){return state.firebase;});var activeData=Object(es["d" /* useSelector */])(function(state){return state.firebase.activeData?state.firebase.activeData:undefined;});var batchDatas=Object(es["d" /* useSelector */])(function(state){return activeData&&activeData.batch&&state.firebase.batchs&&state.firebase.batchs[activeData.batch]?state.firebase.batchs[activeData.batch]:undefined;});var graphDatas=Object(es["d" /* useSelector */])(function(state){return batchDatas&&batchDatas.gcurve&&state.firebase.graphs&&state.firebase.graphs[batchDatas.gcurve]?state.firebase.graphs[batchDatas.gcurve]:undefined;});var penDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.pens&&state.firebase.pens[activeData.pen]?state.firebase.pens[activeData.pen]:undefined;});var weighingsDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.weighings&&state.firebase.weighings[activeData.pen]?state.firebase.weighings[activeData.pen]:undefined;});var commentsDatas=Object(es["d" /* useSelector */])(function(state){return state.firebase.comments&&state.firebase.comments[activeData.pen]?state.firebase.comments[activeData.pen]:undefined;});var autoPigs=Object(es["d" /* useSelector */])(function(state){return state.firebase.autopigs;});Object(react["useEffect"])(function(){if(firebaseError&&firebaseError.message)dispatch(Firebase_Utils["c" /* ErrorHandler */].action());},[]);Object(react["useEffect"])(function(){if(activeData&&activeData.farm&&activeData.pen&&(!weighingsDatas||typeof weighingsDatas==='undefined')){dispatch(Weighing["a" /* default */].action({FarmId:activeData.farm,PenId:activeData.pen,SectionId:activeData.section}));}if(activeData&&activeData.farm&&activeData.pen&&(!commentsDatas||typeof commentsDatas==='undefined')){dispatch(Comment["a" /* default */].action({FarmId:activeData.farm,PenId:activeData.pen}));}if(activeData&&activeData.farm&&activeData.pen&&activeData.batch&&(!batchDatas||typeof batchDatas==='undefined')){dispatch(Batch["a" /* default */].action({FarmId:activeData.farm,BatchId:activeData.batch}));}},[activeData]);Object(react["useEffect"])(function(){if(activeData&&activeData.farm&&batchDatas&&batchDatas.gcurve&&(!graphDatas||typeof graphDatas==='undefined')){dispatch(Graph["a" /* default */].action({FarmId:activeData.farm,GraphId:batchDatas.gcurve}));}if(weighingsDatas,batchDatas,graphDatas)dispatch(Firebase_Utils["e" /* WeightCalculate */].action({Weighings:weighingsDatas,Batch:batchDatas,Graphs:graphDatas}));},[weighingsDatas,batchDatas,graphDatas]);if(activeData&&penDatas&&typeof penDatas!=='undefined'){var count="0";var batch="-";var age="-";var curve="-";var aweight="0";var agrowth="0";var bmin=undefined;var bmax=undefined;if(penDatas.datas){count=penDatas.datas.count+'';batch=penDatas.datas.batch;if(batchDatas){age=Math.floor((Date.now()-batchDatas.time)/(1000*60*60*24))+'';curve=batchDatas.gcurve;bmin=batchDatas.datas.devianceMax+'';bmax=batchDatas.datas.devianceMax+'';}if(activeData&&activeData.weightCalc){if(activeData.weightCalc.PenWeight)aweight=Math.round(activeData.weightCalc.PenWeight*1000)/1000+'';if(activeData.weightCalc.PenGrowth)agrowth=Math.round(activeData.weightCalc.PenGrowth*1000)/1000+'';}}return react_default.a.createElement(SafeAreaView_default.a,{style:[Layout.fill,Layout.fullSize]},react_default.a.createElement(ScrollView_default.a,{style:[Gutters.smallVPadding,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_Button,{Texts:[activeData.pen],Title:true}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.Prop1'),count],[t('Pen_Display.Prop2'),batch],[t('Pen_Display.Prop3'),age],[t('Pen_Display.Prop4'),aweight],[t('Pen_Display.Prop5'),agrowth],[t('Pen_Display.Prop6'),curve],[t('Pen_Display.Prop7'),t('Pen_Display.Prop7Data',{min:bmin,max:bmax})],[t('Pen_Display.Prop8'),t('Pen_Display.Prop8Time',{date:undefined})],[t('Pen_Display.Prop9'),""]]}),react_default.a.createElement(View_default.a,{style:{height:20}}),react_default.a.createElement(Components_CurveViewer,{WeighningsDatas:{Batch:batchDatas,TempCurve:graphDatas}}),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginBottom:20}]},react_default.a.createElement(Components_ContentProp,{Columns:1,Datas:[[t('Pen_Display.ControlWeights_Title')]]}),react_default.a.createElement(View_default.a,{style:{height:10}}),react_default.a.createElement(FlatList_default.a,{style:[Layout.fullWidth,{maxWidth:600,minHeight:125,maxHeight:250}],data:weighingsDatas?Object.keys(weighingsDatas).reverse():null,renderItem:function renderItem(_ref){var item=_ref.item,index=_ref.index;var WeightData=weighingsDatas[item];var weight=Math.round(WeightData.weight*1000)/1000+'';return react_default.a.createElement(View_default.a,{style:[Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.WeightTime',{date:new Date(WeightData.time)}),t('Pen_Display.WeightData',{weight:weight,count:WeightData.count})]]}));},numColumns:1,keyExtractor:function keyExtractor(item,index){return String(index);}})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colVCenter,{marginBottom:20}]},react_default.a.createElement(Components_ContentProp,{Columns:1,Datas:[[t('Pen_Display.ActivityLog_Title')]]}),react_default.a.createElement(View_default.a,{style:{height:10}}),react_default.a.createElement(FlatList_default.a,{style:[Layout.fullWidth,{maxWidth:600,minHeight:125,maxHeight:250}],data:commentsDatas?Object.keys(commentsDatas).reverse():null,renderItem:function renderItem(_ref2){var item=_ref2.item,index=_ref2.index;var CommentData=commentsDatas[item];var weight=CommentData.weight?Math.round(CommentData.weight*1000)/1000+'':'-';var DataString=t('Pen_Display.ActivityData',{count:CommentData.quantity,action:CommentData.action,weight:weight,note:CommentData.data});return react_default.a.createElement(View_default.a,{style:[Layout.fullSize,Layout.colVCenter]},react_default.a.createElement(Components_ContentProp,{Columns:2,Datas:[[t('Pen_Display.ActivityTime',{date:new Date(CommentData.time)}),DataString]]}));},numColumns:1,keyExtractor:function keyExtractor(item,index){return String(index);}})),react_default.a.createElement(View_default.a,{style:[Layout.fullWidth,Layout.colCenter]},react_default.a.createElement(Text_default.a,null,"Element not done")))));}else{return react_default.a.createElement(Components_LoadingSplash,null);}};/* harmony default export */ var UserPanel_Pen_Display = (Pen_Display_Pen_Display);
// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/react-native-web/dist/cjs/exports/TextInput/index.js
var TextInput = __webpack_require__(56);
var TextInput_default = /*#__PURE__*/__webpack_require__.n(TextInput);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@thecodingmachine/redux-toolkit-wrapper/lib/index.js
var lib = __webpack_require__(29);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(26);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(18);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Services/utils/handleError.js
var handleError = __webpack_require__(36);

// EXTERNAL MODULE: C:/Users/daniel/Desktop/AgrisysApp/node_modules/axios/index.js
var axios = __webpack_require__(605);
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
var Index_IndexExampleContainer=function IndexExampleContainer(){var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var _useTheme=Object(Theme["a" /* useTheme */])(),Common=_useTheme.Common,Fonts=_useTheme.Fonts,Gutters=_useTheme.Gutters,Layout=_useTheme.Layout;var dispatch=Object(es["c" /* useDispatch */])();var user=Object(es["d" /* useSelector */])(function(state){return state.user.item;});var fetchOneUserLoading=Object(es["d" /* useSelector */])(function(state){return state.user.fetchOne.loading;});var fetchOneUserError=Object(es["d" /* useSelector */])(function(state){return state.user.fetchOne.error;});var _useState=Object(react["useState"])('1'),_useState2=slicedToArray_default()(_useState,2),userId=_useState2[0],setUserId=_useState2[1];console.log("??");var fetch=function fetch(id){setUserId(id);dispatch(User_FetchOne.action(id));};var changeTheme=function changeTheme(_ref){var theme=_ref.theme,darkMode=_ref.darkMode;dispatch(ChangeTheme["a" /* default */].action({theme:theme,darkMode:darkMode}));};return react_default.a.createElement(View_default.a,{style:[Layout.fill,Layout.colCenter,Gutters.smallHPadding]},react_default.a.createElement(View_default.a,{style:[[Layout.colCenter,Gutters.smallHPadding]]},react_default.a.createElement(Components_Brand,null),fetchOneUserLoading&&react_default.a.createElement(ActivityIndicator_default.a,null),fetchOneUserError?react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},fetchOneUserError.message):react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Example ",t('example.helloUser',{name:user.name}))),react_default.a.createElement(View_default.a,{style:[Layout.row,Layout.rowHCenter,Gutters.smallHPadding,Gutters.largeVMargin,Common.backgroundPrimary]},react_default.a.createElement(Text_default.a,{style:[Layout.fill,Fonts.textCenter,Fonts.textSmall]},t('example.labels.userId')),react_default.a.createElement(TextInput_default.a,{onChangeText:function onChangeText(text){return fetch(text);},editable:!fetchOneUserLoading,keyboardType:'number-pad',maxLength:1,value:userId,selectTextOnFocus:true,style:[Layout.fill,Common.textInput]})),react_default.a.createElement(Text_default.a,{style:[Fonts.textRegular,Gutters.smallBMargin]},"DarkMode :"),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.rounded,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:null});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Auto")),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outlineRounded,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:true});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Dark")),react_default.a.createElement(TouchableOpacity_default.a,{style:[Common.button.outline,Gutters.regularBMargin],onPress:function onPress(){return changeTheme({darkMode:false});}},react_default.a.createElement(Text_default.a,{style:Fonts.textRegular},"Light")));};/* harmony default export */ var Example_Index = (Index_IndexExampleContainer);
// CONCATENATED MODULE: C:/Users/daniel/Desktop/AgrisysApp/src/Containers/index.js


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Hexagon-globe.fce26805.png";

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Hexa-icon.5129d536.png";

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Loading_Colour.4562350c.png";

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login-bottom.bc3dd278.png";

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login-protein.d27f7882.png";

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Logo.9b051259.png";

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Home.1fff8434.png";

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dashboard.26766c7a.png";

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/System.7e4af00c.png";

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Feed-Curves.da739887.png";

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Growth-curve.7f9a7fea.png";

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/User.d73be9fd.png";

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Sow.beff0aff.png";

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABRCAYAAACuepoLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAq9JREFUeNrsnT1Lw1AUhk9FRFEhDhV0qgouLlrcjYOLi3XpasEfYjo62X/Quorg5iS0P0D8GBzVOAkWP6CVigg1197E0Naa3ER7b/K+cLig3tP4eJJz8g5XIig0JRS8Zr3Pn1+JUgE0JYgjK1JRqEz2y9DE1IJwgrdalRr1BxoZm6Th8aTvfVwvVqxacaE8zLXtQ+EEN+cHdH12QHPpLM0uZX3tbdSrdHmyS7VH0wY6w1caQNvwp5GxJC2v57+q2pJmRc7+HmAKaHBolGbTTkVvAGYIFdoBucfPp7p1rH8efwr280iJiu3ytUUr9iSY5+yZrqIqTAayzB+sIgOqHtJgq7vGD1IRpsaHUY3PTptWmCJjC5+/Ao8/7hlONZgZ/ow0OQylqkIGubv5Cl/3ATI4zFQUX+T7BRMCTMCM5mumqhf+fH8lvLdRqzqraJ7aU++pscznuyBvPk3XjEh/lKcpWZSVr8x+mMNufby/2p6m+rc58xRFZZvD0/O6b3PY/Zg5Pd5BA0I3B0yMRlsU3Ms0ALOlXAh5dwCzpZIVdwEh5uP4x+gGk1lwlYAQjDjCRAMCTMAETAgwARMwoZ5zphJiNpqonri73lrF8thu/U+C0x5Dpz0v2fWYKlcmGhC6OQSYMo1GMjnthkSsfr2WRFsD0lFfnlh5rswSyeO0y5BHyKiO4mgURh7POdCA0M0BEzAhwARMwIQAEzABEzAhwARMwIQ6FRen3fgPmHDaxVh5rswSwWnvlsOX4LQHzIEGhG4OmIAJASZgAiYEmIAJmPGEafJVBxZHi21sPCvH30Fv8W7uqMj3F/1uZCe6PtP3vxvQYg7TcO33dLe6LTh2ACk7Gpe5RxkeFcELKYd0m/UrT4q+zxMtBODgHOLcjHnc8oLyrMQvUDWKr3xX46cAAwCxt3YCfnN46AAAAABJRU5ErkJggg=="

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Area_Colour.f4a4e098.png";

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/AutoPig.ec16c410.png";

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Feed-Components.224ca1b3.png";

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/TOM.c88886f3.png";

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Loading.d6c81c08.png";

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJGQgms3HggAqXogBtGFWhoKH8gyDGhQAZJBIAAyaCLQwAaiDQMa4gCk5gOxAg57HgBxItDQA8iCTDhcsx+PQQxQuf1QtbgNQ/ISMUCAkGFkgxFs2AcS9H/Aaxgw7UwAUoHQtMRAIJ1NICUHgFJ6PnoOAOIJ2LIVMXlTAZqlQKARaMiDoVcEAQQYAAGBK0YfviPfAAAAAElFTkSuQmCC"

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Dot1.3d67e5c4.png";

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNpiYBgRgJEYRau2XEgAUv5APDHMx+AAWYYBDXEAUv1AbIAkvACIG4GGPiDKMKAhClBDAnDY8wHqyga8hgENArliPxALEBECG4AGBsI4TFgUCBBpEAO6OiZqxuYINuwDCfo/4DUMGNUXgJQiEB8gYFAjECeSmgPmA7ECctoC4kKicwAWQ0Ep3R6ajQ4MvSIIIMAAPMImij6WWagAAAAASUVORK5CYII="

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJdJREFUeNpiYBgRgJGQghlLTwYAqXwgnpgRbb6BLMOAhigAqflA7IAkfACIE4GGPiDKMKAhAkCqHogL8DhiAhA3Ag39gCzIgkXhfSAWIOB7kEUJQCyILMiERaEAkeGNoY6JmrE5gg37QKTeD8QYpgjECwgYtACqjugc4ABNvOg5AJRYD5CbN0GJMx6IFwINWTA0iyCAAAMArochall3X5YAAAAASUVORK5CYII="

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJJJREFUeNpiYBgRgJGQgpaphxyAVD4Qb6zJtltAlmFAQxSAVD0QJyAJXwDiQqChB4g2DGhQA9Q1Ajjs2gA19AFew4AGrQdSAUQE0QcgdgQaeAEmwIRFkQCR4S2ArpaJmrE5ahhR4AMhwwKBuJGAIaBEq4icLIjJAf1oaQ6USBNJygFY8iYoWx0EGtIwNIsggAADADEdJt0T+TglAAAAAElFTkSuQmCC"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNpiYBgRgJGQguL2PQpAqh+ILwLxhN5Klw8kGwY0RABIFQBxPZLwAyAuBBq4gWjDgAYlQF0jgMOuA1BDL+A1DGjQeiAVQGQwGSIbyIRFgQAJYY6ilomasTmCDftAgv4PeA0DRnUgKA0RMBSUHBwJpjO0HABKuAloLgEl1gXk5k0DaJYimDcHLwAIMACbvCs8jFzcagAAAABJRU5ErkJggg=="

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJGQgvjyrQJAqh+IPwBx48JO7w9kGQY0qAFI5QOxAFQIZuAEog0DGuIApOYDsQIOex4AcSLQ0APIgkxYDCoAUvvxGMQAldsPVYvbMCQvEQMECBlGNhjBhn0gQf8HvIZBE2QiNC0x4ElngeiJl5FANirAkgMmAg1pIDdvghJoPZQLykoPhl4RBBBgAK6NK0a1l76JAAAAAElFTkSuQmCC"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJFJREFUeNpiYBgRgJGQgrCCTQJAqgCI5YG4cdUEvwdkGQY0KAFI1QOxApJwIxBPABr6gSjDgIY4QA1xwGHPA6grF+A1DGiQAZA6T2QwFQINnADjMGFRIEBCmKOoZaJmbI4aRgXDgFF9AEg5AvEFPPo+QJNFAyk5oACaeJGTwARogv1Abt6EZalCfHlz8AKAAAMA8Rkn94mFeZ0AAAAASUVORK5CYII="

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgRgJFYhX6Z6wuAlD0QN26aHniBLMOAhjgAqflArIAkvACIC4GGfiDKMKAhIM39QByAQ8kHqCsn4DUMaJABkDpPZAhsABoYCGIw4VAgQEK4w9UyUTM2R7hhH0gw4wNew6Ap3BCIDxAwpBGIE0nJAQHQxIucAzZAc8ADcvNmA5DSB+KJQEMODK0iCCDAAE9gKELWpYShAAAAAElFTkSuQmCC"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNpiYBgRgJFYhW7JawKAVD4QN+6aG3KALMOAhhgAqX4gdkASBhmWCDT0AVGGAQ0RgBqSgMeuRiCeADT0A4jDhEfhfQIGgUA9VB0DIcMEiAxOAWIMIxmMGsbwgUgzPhBjmCEQLyBgEEhekZQc4ABNvAZoOaAQmFgvkJs3QQk4HognAg3ZMLSKIIAAAwAWbSJFecmUZwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(312);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
var AuthStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();var AdminNavigator=function AdminNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_8__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* IndexAdminContainer */ "c"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysAdmin.NavTitle'),headerLeft:function headerLeft(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{padding:6,paddingLeft:15}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_elements__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"],{name:"md-arrow-back",type:"ionicon",size:25,color:"white",iconStyle:{color:"white"},onPress:function onPress(){var _navigationRef$curren;return(_navigationRef$curren=_Navigators_Root__WEBPACK_IMPORTED_MODULE_3__[/* navigationRef */ "c"].current)==null?void 0:_navigationRef$curren.navigate('Main',{screen:'Home'});}}));}};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthStack.Screen,{name:"System",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* SystemsBoard */ "k"],options:function options(_ref2){var navigation=_ref2.navigation;return{};}})));};/* harmony default export */ __webpack_exports__["default"] = (AdminNavigator);

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _Navigators_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(312);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
var UserStack=Object(_react_navigation_stack__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();var UserNavigator=function UserNavigator(){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__[/* useTranslation */ "a"])(),t=_useTranslation.t;var _useTheme=Object(_Theme__WEBPACK_IMPORTED_MODULE_8__[/* useTheme */ "a"])(),Layout=_useTheme.Layout,darkMode=_useTheme.darkMode,NavigationTheme=_useTheme.NavigationTheme;var colors=NavigationTheme.colors;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_6___default.a,{style:[Layout.fill,{backgroundColor:colors.card}]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Navigator,{headerMode:'screen',initialRouteName:"Home",mode:"modal",screenOptions:{title:'AgrisysApp',headerTintColor:'white',headerTitleAlign:'center'}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Home",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* IndexUserContainer */ "h"],options:function options(_ref){var navigation=_ref.navigation;return{title:t('AgrisysMenu.NavTitle'),headerLeft:function headerLeft(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_1___default.a,{style:{padding:6,paddingLeft:15}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_elements__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"],{name:"md-arrow-back",type:"ionicon",size:25,color:"white",iconStyle:{color:"white"},onPress:function onPress(){var _navigationRef$curren;return(_navigationRef$curren=_Navigators_Root__WEBPACK_IMPORTED_MODULE_3__[/* navigationRef */ "c"].current)==null?void 0:_navigationRef$curren.navigate('Main',{screen:'Home'});}}));}};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"DashBoard",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* DashBoard */ "b"],options:function options(_ref2){var navigation=_ref2.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Pens",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Pens */ "j"],options:function options(_ref3){var navigation=_ref3.navigation;return{};}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStack.Screen,{name:"Pen_Display",component:_Containers__WEBPACK_IMPORTED_MODULE_5__[/* Pen_Display */ "i"],options:function options(_ref4){var navigation=_ref4.navigation;return{title:'Pen Display'};}})));};/* harmony default export */ __webpack_exports__["default"] = (UserNavigator);

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 408,
	"./af.js": 408,
	"./ar": 409,
	"./ar-dz": 410,
	"./ar-dz.js": 410,
	"./ar-kw": 411,
	"./ar-kw.js": 411,
	"./ar-ly": 412,
	"./ar-ly.js": 412,
	"./ar-ma": 413,
	"./ar-ma.js": 413,
	"./ar-sa": 414,
	"./ar-sa.js": 414,
	"./ar-tn": 415,
	"./ar-tn.js": 415,
	"./ar.js": 409,
	"./az": 416,
	"./az.js": 416,
	"./be": 417,
	"./be.js": 417,
	"./bg": 418,
	"./bg.js": 418,
	"./bm": 419,
	"./bm.js": 419,
	"./bn": 420,
	"./bn-bd": 421,
	"./bn-bd.js": 421,
	"./bn.js": 420,
	"./bo": 422,
	"./bo.js": 422,
	"./br": 423,
	"./br.js": 423,
	"./bs": 424,
	"./bs.js": 424,
	"./ca": 425,
	"./ca.js": 425,
	"./cs": 426,
	"./cs.js": 426,
	"./cv": 427,
	"./cv.js": 427,
	"./cy": 428,
	"./cy.js": 428,
	"./da": 429,
	"./da.js": 429,
	"./de": 430,
	"./de-at": 431,
	"./de-at.js": 431,
	"./de-ch": 432,
	"./de-ch.js": 432,
	"./de.js": 430,
	"./dv": 433,
	"./dv.js": 433,
	"./el": 434,
	"./el.js": 434,
	"./en-au": 435,
	"./en-au.js": 435,
	"./en-ca": 436,
	"./en-ca.js": 436,
	"./en-gb": 437,
	"./en-gb.js": 437,
	"./en-ie": 438,
	"./en-ie.js": 438,
	"./en-il": 439,
	"./en-il.js": 439,
	"./en-in": 440,
	"./en-in.js": 440,
	"./en-nz": 441,
	"./en-nz.js": 441,
	"./en-sg": 442,
	"./en-sg.js": 442,
	"./eo": 443,
	"./eo.js": 443,
	"./es": 444,
	"./es-do": 445,
	"./es-do.js": 445,
	"./es-mx": 446,
	"./es-mx.js": 446,
	"./es-us": 447,
	"./es-us.js": 447,
	"./es.js": 444,
	"./et": 448,
	"./et.js": 448,
	"./eu": 449,
	"./eu.js": 449,
	"./fa": 450,
	"./fa.js": 450,
	"./fi": 451,
	"./fi.js": 451,
	"./fil": 452,
	"./fil.js": 452,
	"./fo": 453,
	"./fo.js": 453,
	"./fr": 454,
	"./fr-ca": 455,
	"./fr-ca.js": 455,
	"./fr-ch": 456,
	"./fr-ch.js": 456,
	"./fr.js": 454,
	"./fy": 457,
	"./fy.js": 457,
	"./ga": 458,
	"./ga.js": 458,
	"./gd": 459,
	"./gd.js": 459,
	"./gl": 460,
	"./gl.js": 460,
	"./gom-deva": 461,
	"./gom-deva.js": 461,
	"./gom-latn": 462,
	"./gom-latn.js": 462,
	"./gu": 463,
	"./gu.js": 463,
	"./he": 464,
	"./he.js": 464,
	"./hi": 465,
	"./hi.js": 465,
	"./hr": 466,
	"./hr.js": 466,
	"./hu": 467,
	"./hu.js": 467,
	"./hy-am": 468,
	"./hy-am.js": 468,
	"./id": 469,
	"./id.js": 469,
	"./is": 470,
	"./is.js": 470,
	"./it": 471,
	"./it-ch": 472,
	"./it-ch.js": 472,
	"./it.js": 471,
	"./ja": 473,
	"./ja.js": 473,
	"./jv": 474,
	"./jv.js": 474,
	"./ka": 475,
	"./ka.js": 475,
	"./kk": 476,
	"./kk.js": 476,
	"./km": 477,
	"./km.js": 477,
	"./kn": 478,
	"./kn.js": 478,
	"./ko": 479,
	"./ko.js": 479,
	"./ku": 480,
	"./ku.js": 480,
	"./ky": 481,
	"./ky.js": 481,
	"./lb": 482,
	"./lb.js": 482,
	"./lo": 483,
	"./lo.js": 483,
	"./lt": 484,
	"./lt.js": 484,
	"./lv": 485,
	"./lv.js": 485,
	"./me": 486,
	"./me.js": 486,
	"./mi": 487,
	"./mi.js": 487,
	"./mk": 488,
	"./mk.js": 488,
	"./ml": 489,
	"./ml.js": 489,
	"./mn": 490,
	"./mn.js": 490,
	"./mr": 491,
	"./mr.js": 491,
	"./ms": 492,
	"./ms-my": 493,
	"./ms-my.js": 493,
	"./ms.js": 492,
	"./mt": 494,
	"./mt.js": 494,
	"./my": 495,
	"./my.js": 495,
	"./nb": 496,
	"./nb.js": 496,
	"./ne": 497,
	"./ne.js": 497,
	"./nl": 498,
	"./nl-be": 499,
	"./nl-be.js": 499,
	"./nl.js": 498,
	"./nn": 500,
	"./nn.js": 500,
	"./oc-lnc": 501,
	"./oc-lnc.js": 501,
	"./pa-in": 502,
	"./pa-in.js": 502,
	"./pl": 503,
	"./pl.js": 503,
	"./pt": 504,
	"./pt-br": 505,
	"./pt-br.js": 505,
	"./pt.js": 504,
	"./ro": 506,
	"./ro.js": 506,
	"./ru": 507,
	"./ru.js": 507,
	"./sd": 508,
	"./sd.js": 508,
	"./se": 509,
	"./se.js": 509,
	"./si": 510,
	"./si.js": 510,
	"./sk": 511,
	"./sk.js": 511,
	"./sl": 512,
	"./sl.js": 512,
	"./sq": 513,
	"./sq.js": 513,
	"./sr": 514,
	"./sr-cyrl": 515,
	"./sr-cyrl.js": 515,
	"./sr.js": 514,
	"./ss": 516,
	"./ss.js": 516,
	"./sv": 517,
	"./sv.js": 517,
	"./sw": 518,
	"./sw.js": 518,
	"./ta": 519,
	"./ta.js": 519,
	"./te": 520,
	"./te.js": 520,
	"./tet": 521,
	"./tet.js": 521,
	"./tg": 522,
	"./tg.js": 522,
	"./th": 523,
	"./th.js": 523,
	"./tk": 524,
	"./tk.js": 524,
	"./tl-ph": 525,
	"./tl-ph.js": 525,
	"./tlh": 526,
	"./tlh.js": 526,
	"./tr": 527,
	"./tr.js": 527,
	"./tzl": 528,
	"./tzl.js": 528,
	"./tzm": 529,
	"./tzm-latn": 530,
	"./tzm-latn.js": 530,
	"./tzm.js": 529,
	"./ug-cn": 531,
	"./ug-cn.js": 531,
	"./uk": 532,
	"./uk.js": 532,
	"./ur": 533,
	"./ur.js": 533,
	"./uz": 534,
	"./uz-latn": 535,
	"./uz-latn.js": 535,
	"./uz.js": 534,
	"./vi": 536,
	"./vi.js": 536,
	"./x-pseudo": 537,
	"./x-pseudo.js": 537,
	"./yo": 538,
	"./yo.js": 538,
	"./zh-cn": 539,
	"./zh-cn.js": 539,
	"./zh-hk": 540,
	"./zh-hk.js": 540,
	"./zh-mo": 541,
	"./zh-mo.js": 541,
	"./zh-tw": 542,
	"./zh-tw.js": 542
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
webpackContext.id = 936;

/***/ })

},[[619,1,2]]]);
//# sourceMappingURL=app.276f3b00.chunk.js.map