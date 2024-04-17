/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header{
    max-width: 1200px;
    margin: 1rem auto;
    font-size: 44px;
}


#container{
    display: flex;
    gap: 35px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
}

#projects{
    display: flex;
    flex-direction: column;
    gap: 1em;
}

button{
    font-size: 20px;
}

input{
    font-size: 20px;
}

.edit--modal,
.modal {
    font-size: 28px;
}


#description, #edit--description{
    font-size: 22px;
}

#priority, #edit--priority{
    font-size: 22px;
}


#addToDo {
    /* background-color: aqua; */
    height: fit-content;
    /* width: fit-content; */
    font-size: 20px;
    border: 0;
    /* border-radius: 2rem; */
    border: 1px solid black;
}

#addToDo:hover{
    cursor: pointer;
    background-color: rgb(193, 215, 208);
}

form, .edit--form{
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 0.5em;
}


.todoCard {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid grey;
    padding: 0.5rem;
    font-size: 26px;
}

.firstRow{
    display: flex;
    justify-content: space-between;
    
}

.secondRow{
    display: flex;
    justify-content: space-between;
}
.thirdRow{
    display: flex;
    gap: 0.3rem;
}


#todos {
    display: flex;
    flex-grow: 3;
    flex-direction: column;
    gap: 2rem;
}

.projectButton{
    width: 100%;
}

.project{
    display: flex;
}


#projectButtons{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}


@media screen and (max-width: 1066px) {
    #container{
        display: block;
    }
    body{
        max-width: 85%;
        margin: 0 auto;
    }
    #addToDo{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
  }

@media screen and (max-width: 570px) {
  .firstRow, .secondRow{
    display: block;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,4BAA4B;IAC5B,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,SAAS;IACT,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,sBAAsB;IACtB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;;AAElC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI;QACI,cAAc;IAClB;IACA;QACI,cAAc;QACd,cAAc;IAClB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;EACF;;AAEF;EACE;IACE,cAAc;EAChB;AACF","sourcesContent":["header{\n    max-width: 1200px;\n    margin: 1rem auto;\n    font-size: 44px;\n}\n\n\n#container{\n    display: flex;\n    gap: 35px;\n    max-width: 1200px;\n    margin: 0 auto;\n    justify-content: space-between;\n}\n\n#projects{\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\nbutton{\n    font-size: 20px;\n}\n\ninput{\n    font-size: 20px;\n}\n\n.edit--modal,\n.modal {\n    font-size: 28px;\n}\n\n\n#description, #edit--description{\n    font-size: 22px;\n}\n\n#priority, #edit--priority{\n    font-size: 22px;\n}\n\n\n#addToDo {\n    /* background-color: aqua; */\n    height: fit-content;\n    /* width: fit-content; */\n    font-size: 20px;\n    border: 0;\n    /* border-radius: 2rem; */\n    border: 1px solid black;\n}\n\n#addToDo:hover{\n    cursor: pointer;\n    background-color: rgb(193, 215, 208);\n}\n\nform, .edit--form{\n    display: flex;\n    flex-direction: column;\n    padding: 1rem 0;\n    gap: 0.5em;\n}\n\n\n.todoCard {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    border: 2px solid grey;\n    padding: 0.5rem;\n    font-size: 26px;\n}\n\n.firstRow{\n    display: flex;\n    justify-content: space-between;\n    \n}\n\n.secondRow{\n    display: flex;\n    justify-content: space-between;\n}\n.thirdRow{\n    display: flex;\n    gap: 0.3rem;\n}\n\n\n#todos {\n    display: flex;\n    flex-grow: 3;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.projectButton{\n    width: 100%;\n}\n\n.project{\n    display: flex;\n}\n\n\n#projectButtons{\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n\n@media screen and (max-width: 1066px) {\n    #container{\n        display: block;\n    }\n    body{\n        max-width: 85%;\n        margin: 0 auto;\n    }\n    #addToDo{\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n  }\n\n@media screen and (max-width: 570px) {\n  .firstRow, .secondRow{\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSubmit: () => (/* binding */ handleSubmit)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





// let parent = document.querySelector('#projects');
// let projectForm = document.querySelector('#addProjectForm');
// let number = 1;  // number attribute

let parent = document.querySelector('#projectButtons');


function handleSubmit(event){
    event.preventDefault();

    // let newProject = document.createElement('button');
    // newProject.setAttribute('number', number);
    // newProject.classList.add('projectButton')

    // ++number;

    let projectName = document.querySelector('#inputProject').value;

    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.populateProjectsStorage)(projectName);

    parent.textContent = '';
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadProjectsFromStorage)();

    // newProject.textContent = projectName;

    // parent.insertBefore(newProject, projectForm);

    // projectForm.reset();
}





/***/ }),

/***/ "./src/addToDo.js":
/*!************************!*\
  !*** ./src/addToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleModal: () => (/* binding */ handleModal)
/* harmony export */ });

let modal = document.querySelector('#modal');
let form = document.querySelector('.form')

function handleModal(event){
    event.preventDefault();
    modal.showModal()
    form.reset();
}





/***/ }),

/***/ "./src/createObject.js":
/*!*****************************!*\
  !*** ./src/createObject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleToDoSubmit: () => (/* binding */ handleToDoSubmit)
/* harmony export */ });
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");



let form = document.querySelector('.form');

let todo;
let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
        console.log(index);
    }
})

function handleToDoSubmit(){

    let title = document.querySelector('#title').value;
    let priority = document.querySelector("#priority").value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#dueDate').value; 
    
    todo = createTodoObject(title, priority, description, dueDate);
    console.log(todo);

    (0,_toDoArray__WEBPACK_IMPORTED_MODULE_0__.addToDo)(index, todo);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.populateToDoArrayStorage)(index,todo);
    form.reset();
}

function createTodoObject(title, priority, description, dueDate){

    return {
        title: title,
        priority : priority,
        description: description,
        dueDate: dueDate
    }

}



/***/ }),

/***/ "./src/deleteItem.js":
/*!***************************!*\
  !*** ./src/deleteItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteItem: () => (/* binding */ deleteItem)
/* harmony export */ });
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");
/* harmony import */ var _displayFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayFunction */ "./src/displayFunction.js");




let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }

})


function deleteItem(event){

    let todos = document.querySelector('#todos')

    let childrenTemp = todos.children;
    let children = Array.from(childrenTemp)
    console.log(children)    // get child elemnts of todos, i.e all todo cards

    let temp = event.target.parentNode;
    let parent = temp.parentNode;     // get the single todo card that wants to be deleted

    console.log(parent);

    for (let i = 0 ; i < children.length; ++i){

        // check at which subindex (i) this card was in todoarray[index]
        // and remove it from todoarray and call display again for rerender
        if( children[i] === parent){

            console.log(i);
            let subindex;
            subindex = i;
            (0,_toDoArray__WEBPACK_IMPORTED_MODULE_0__.deleteObject)(index, subindex)

            // let todoArray = getToDoArray();
            let array = JSON.parse(localStorage.getItem("todoArray"));

            todos.textContent = '';
            
            (0,_displayFunction__WEBPACK_IMPORTED_MODULE_1__.display)(array, index);

        }
    }

}






/***/ }),

/***/ "./src/displayFunction.js":
/*!********************************!*\
  !*** ./src/displayFunction.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   display: () => (/* binding */ display)
/* harmony export */ });

function display(array, index){
    array[index].forEach((object)=>{

        let card = document.createElement('div');
        card.classList.add('todoCard');

        let firstRow = document.createElement('div');
        firstRow.classList.add('firstRow');
        let secondRow = document.createElement('div');
        secondRow.classList.add('secondRow');
        let thirdRow = document.createElement('div');
        thirdRow.classList.add('thirdRow');

        let titleDiv = document.createElement('div');
        titleDiv.textContent = 'Title:' + ' ' + object.title;

        let priority = document.createElement('div');
        priority.textContent = 'Priority:' + ' ' + object.priority;

        let description = document.createElement('div');
        description.textContent = 'Description:' + ' ' + object.description;

        let dueDate = document.createElement('div');
        dueDate.textContent = 'Due Date:' + ' ' + object.dueDate;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Completed';
        deleteButton.classList.add('delete');

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        
        firstRow.appendChild(titleDiv);
        firstRow.appendChild(priority);

        secondRow.appendChild(description);
        secondRow.appendChild(dueDate);

        thirdRow.appendChild(deleteButton);
        thirdRow.appendChild(editButton);

        card.appendChild(firstRow);
        card.appendChild(secondRow);
        card.appendChild(thirdRow);

        todos.appendChild(card);
    })
}



/***/ }),

/***/ "./src/displayToDos.js":
/*!*****************************!*\
  !*** ./src/displayToDos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePlusClick: () => (/* binding */ handlePlusClick),
/* harmony export */   handleProjectClick: () => (/* binding */ handleProjectClick)
/* harmony export */ });
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");
/* harmony import */ var _displayFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayFunction */ "./src/displayFunction.js");




let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }
})


//when form is submitted after + click, we display the todos corresponding to the project 
//selected which is stored in index
function handlePlusClick(){

    let todos = document.querySelector('#todos');

    todos.textContent = '';

    //let toDoArray = getToDoArray();

    let toDoArray = JSON.parse(localStorage.getItem("todoArray"));

    (0,_displayFunction__WEBPACK_IMPORTED_MODULE_1__.display)(toDoArray, index);

}

function handleProjectClick(event){

    let number = event.target.getAttribute('number');
    let toDoArray = JSON.parse(localStorage.getItem("todoArray"));

    todos.textContent = '';

    (0,_displayFunction__WEBPACK_IMPORTED_MODULE_1__.display)(toDoArray, number);
}




/***/ }),

/***/ "./src/editItem.js":
/*!*************************!*\
  !*** ./src/editItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodo: () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");
/* harmony import */ var _displayFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayFunction */ "./src/displayFunction.js");




let index = 0;

let editIndex = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }

})


function editTodo(event){

    let modal = document.querySelector('#edit--modal');
    
    let todos = document.querySelector('#todos');
    let childrenTemp = todos.children;
    let children = Array.from(childrenTemp)
    console.log(children)    // get child elemnts of todos, i.e all todo cards

    let temp = event.target.parentNode;
    let parent = temp.parentNode;     // get the single todo card that wants to be deleted

    console.log(parent);

    let title = document.querySelector('#edit--title');
    let priority = document.querySelector("#edit--priority");
    let description = document.querySelector('#edit--description');
    let dueDate = document.querySelector('#edit--dueDate'); 

    for (let i = 0 ; i < children.length; ++i){

        // on edit clicked, i contains the index of object in tododarray
        if( children[i] === parent){

            let array = JSON.parse(localStorage.getItem("todoArray"));
            editIndex = i;

            title.value = array[index][i].title;
            priority.value = array[index][i].priority;
            description.value = array[index][i].description;
            dueDate.value = array[index][i].dueDate;

            break;
            
        }

        
    }


    let form = document.querySelector('.edit--form');

            form.addEventListener('submit', (event)=>{

            event.preventDefault();
            // let array = getToDoArray();
            
            let array = JSON.parse(localStorage.getItem("todoArray"));
            //add edited values to todoarray and trigger and re render the display
            array[index][editIndex].title = title.value;
            array[index][editIndex].priority = priority.value;
            array[index][editIndex].description = description.value;
            array[index][editIndex].dueDate = dueDate.value;

            todos.textContent = '';
            localStorage.setItem("todoArray", JSON.stringify(array))
            ;(0,_displayFunction__WEBPACK_IMPORTED_MODULE_1__.display)(array, index);
            modal.close();
            
    })

    modal.showModal();
    
}





/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectsFromStorage: () => (/* binding */ loadProjectsFromStorage),
/* harmony export */   populateProjectsStorage: () => (/* binding */ populateProjectsStorage),
/* harmony export */   populateToDoArrayStorage: () => (/* binding */ populateToDoArrayStorage)
/* harmony export */ });
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");


function populateProjectsStorage(projectName){

    if (!localStorage.getItem("projectArray")) 
       {
           let projectArray = [];
           localStorage.setItem("projectArray", JSON.stringify(projectArray))
       }  

   let array = JSON.parse(localStorage.getItem("projectArray"))
   array.push(projectName);
   localStorage.setItem("projectArray", JSON.stringify(array))
}


function loadProjectsFromStorage(){
    if (!localStorage.getItem("projectArray")){
        return
    }

    else {
        let array = JSON.parse(localStorage.getItem("projectArray"));

        let parent = document.querySelector('#projectButtons');
        let projectForm = document.querySelector('#addProjectForm');

        addProjectArray();
        array.forEach((element, index)=>{
            
            (0,_toDoArray__WEBPACK_IMPORTED_MODULE_0__.addProject)();
            let newProject = document.createElement('button');
            newProject.setAttribute('number', index+1);
            newProject.classList.add('projectButton');

            newProject.textContent = element;

            parent.appendChild(newProject);
            projectForm.reset();
        })
    }
}

function populateToDoArrayStorage(index,todo){
    if (!localStorage.getItem("todoArray"))
    {   
        let todoArray = [
            [
             {
             title: "Gym",
             priority: "Medium",
             dueDate: "2024-04-10",
             description: "Its Leg Day",
             },
             { 
             title: "Work on Project",
             priority: "Medium",
             dueDate: "2024-04-12",
             description: "Fix bugs"
             },
             {
             title: "Feed the cat",
             priority: "High",
             dueDate: "2024-04-24",
             description: "Treat also!"
             }
          ]
        ]
        localStorage.setItem("todoArray", JSON.stringify(todoArray))
    }

    let array = JSON.parse(localStorage.getItem("todoArray"));

    array[index].push(todo);

    localStorage.setItem("todoArray", JSON.stringify(array))

}

function addProjectArray(){
    if (!localStorage.getItem("todoArray"))
    {   
        let todoArray = [
            [
                {
                    title: "Gym",
                    priority: "Medium",
                    dueDate: "2024-04-10",
                    description: "Its Leg Day",
                    },
                    { 
                    title: "Work on Project",
                    priority: "Medium",
                    dueDate: "2024-04-12",
                    description: "Fix bugs"
                    },
                    {
                    title: "Feed the cat",
                    priority: "High",
                    dueDate: "2024-04-24",
                    description: "Treat also!"
                    }
            ]
        ]
        localStorage.setItem("todoArray", JSON.stringify(todoArray))
    }
    let array = JSON.parse(localStorage.getItem("todoArray"));
    array.push([]);
    localStorage.setItem("todoArray", JSON.stringify(array))
}



/***/ }),

/***/ "./src/projectColor.js":
/*!*****************************!*\
  !*** ./src/projectColor.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeColor: () => (/* binding */ changeColor)
/* harmony export */ });


function changeColor(event){

    let buttons = document.querySelectorAll('.projectButton')

    buttons.forEach((button)=>{
        button.style.backgroundColor = '#d3d3d3';
    })
    event.target.style.backgroundColor = '#a8d9da'
}



/***/ }),

/***/ "./src/toDoArray.js":
/*!**************************!*\
  !*** ./src/toDoArray.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   getToDoArray: () => (/* binding */ getToDoArray)
/* harmony export */ });
/* harmony import */ var _displayFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayFunction */ "./src/displayFunction.js");
// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project




let toDoArray = [
    [
        
    ]
];

function addProject(){
    toDoArray.push([]);
}

function addToDo(index,object){

    toDoArray[index].push(object)
    console.log(toDoArray);

}

function getToDoArray(){

    return toDoArray;

}

function deleteObject(index, subIndex){

    // toDoArray[index].splice(subIndex,1)

    let array = JSON.parse(localStorage.getItem("todoArray"));
    array[index].splice(subIndex,1)
    localStorage.setItem("todoArray", JSON.stringify(array))
    
}







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _toDoArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoArray */ "./src/toDoArray.js");
/* harmony import */ var _addToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToDo */ "./src/addToDo.js");
/* harmony import */ var _createObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createObject */ "./src/createObject.js");
/* harmony import */ var _displayToDos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayToDos */ "./src/displayToDos.js");
/* harmony import */ var _deleteItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteItem */ "./src/deleteItem.js");
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editItem */ "./src/editItem.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _displayFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayFunction */ "./src/displayFunction.js");
/* harmony import */ var _projectColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectColor */ "./src/projectColor.js");
 //manipulates the DOM

















let deleteButton;
//adds a new project when user hits add project
let projectForm = document.querySelector('#addProjectForm');

// projectForm.addEventListener('submit', addProject);
projectForm.addEventListener('submit', _addProject__WEBPACK_IMPORTED_MODULE_0__.handleSubmit);


//on initial page load

// onLoad();

//show modal on clicking add new todo

let addToDo = document.querySelector('#addToDo');
addToDo.addEventListener('click', _addToDo__WEBPACK_IMPORTED_MODULE_2__.handleModal)

//create todo
let form = document.querySelector('.form');
form.addEventListener('submit', _createObject__WEBPACK_IMPORTED_MODULE_3__.handleToDoSubmit)


//on clicking add new todo

form.addEventListener('submit', _displayToDos__WEBPACK_IMPORTED_MODULE_4__.handlePlusClick);



//on project click
window.addEventListener('click', (event)=>{
    if(event.target.className == "projectButton"){

        //display todos of clicked project
        (0,_displayToDos__WEBPACK_IMPORTED_MODULE_4__.handleProjectClick)(event);
    }
})


window.addEventListener('mouseover', (event)=>{

    if(event.target.className == 'delete'){ 
        deleteButton = document.querySelectorAll('.delete');

        deleteButton.forEach((button)=>{

            button.addEventListener('click', _deleteItem__WEBPACK_IMPORTED_MODULE_5__.deleteItem)

        })
    }
})

window.addEventListener('click', (event)=>{

    if(event.target.className == 'edit'){ 
        let editButton = document.querySelectorAll('.edit');

        editButton.forEach((button)=>{

            button.addEventListener('click', (0,_editItem__WEBPACK_IMPORTED_MODULE_6__.editTodo)(event))

        })
    }
})

window.addEventListener('click', (event)=>{
    if(event.target.className == 'projectButton'){
        (0,_projectColor__WEBPACK_IMPORTED_MODULE_9__.changeColor)(event);
    }
})
window.addEventListener('load', _localStorage__WEBPACK_IMPORTED_MODULE_7__.loadProjectsFromStorage)

//on loading page display Default Project Folder
window.addEventListener('load', ()=>{


    if (!localStorage.getItem("todoArray"))
    {   
        let todoArray = [
            [
             {
             title: "Gym",
             priority: "Medium",
             dueDate: "2024-04-10",
             description: "Its Leg Day",
             },
             { 
             title: "Work on Project",
             priority: "Medium",
             dueDate: "2024-04-12",
             description: "Fix bugs"
             },
             {
             title: "Feed the cat",
             priority: "High",
             dueDate: "2024-04-24",
             description: "Treat also!"
             }
          ]
        ]
        localStorage.setItem("todoArray", JSON.stringify(todoArray))
    }
    let array = JSON.parse(localStorage.getItem("todoArray"));

    let button = document.querySelector('#default');

    button.style.backgroundColor = '#a8d9da';
    (0,_displayFunction__WEBPACK_IMPORTED_MODULE_8__.display)(array, 0);
})







        // //add background color to selected project
        // let buttons = document.querySelectorAll('.projectButton')
        // buttons.forEach((button)=>{
        //     button.style.backgroundColor = '#d3d3d3';
        // })
        // event.target.style.backgroundColor = '#a8d9da'








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsNkNBQTZDLG1EQUFROztBQUVyRCxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxRQUFRLDBEQUFXO0FBQ25CO0FBQ0EsQ0FBQztBQUNELGdDQUFnQyxrRUFBdUI7O0FBRXZEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHlEQUFPO0FBQ1gsQ0FBQzs7Ozs7Ozs7QUFRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlT2JqZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGVJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb0Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXJ7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgZm9udC1zaXplOiA0NHB4O1xufVxuXG5cbiNjb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDM1cHg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jcHJvamVjdHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xufVxuXG5idXR0b257XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbnB1dHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5lZGl0LS1tb2RhbCxcbi5tb2RhbCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5cbiNkZXNjcmlwdGlvbiwgI2VkaXQtLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuI3ByaW9yaXR5LCAjZWRpdC0tcHJpb3JpdHl7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cbiNhZGRUb0RvIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMnJlbTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2FkZFRvRG86aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTMsIDIxNSwgMjA4KTtcbn1cblxuZm9ybSwgLmVkaXQtLWZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBnYXA6IDAuNWVtO1xufVxuXG5cbi50b2RvQ2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5maXJzdFJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbn1cblxuLnNlY29uZFJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50aGlyZFJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4zcmVtO1xufVxuXG5cbiN0b2RvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDM7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5wcm9qZWN0QnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cbiNwcm9qZWN0QnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NnB4KSB7XG4gICAgI2NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGJvZHl7XG4gICAgICAgIG1heC13aWR0aDogODUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgI2FkZFRvRG97XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIC5maXJzdFJvdywgLnNlY29uZFJvd3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7O0FBR0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0VBQ0Y7O0FBRUY7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXJ7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbn1cXG5cXG5cXG4jY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM1cHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jcHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVkaXQtLW1vZGFsLFxcbi5tb2RhbCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuXFxuI2Rlc2NyaXB0aW9uLCAjZWRpdC0tZGVzY3JpcHRpb257XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuI3ByaW9yaXR5LCAjZWRpdC0tcHJpb3JpdHl7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuXFxuI2FkZFRvRG8ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAycmVtOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2FkZFRvRG86aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjE1LCAyMDgpO1xcbn1cXG5cXG5mb3JtLCAuZWRpdC0tZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG5cXG4udG9kb0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uZmlyc3RSb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5zZWNvbmRSb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRoaXJkUm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuXFxuI3RvZG9zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAzO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiNwcm9qZWN0QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjZweCkge1xcbiAgICAjY29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgYm9keXtcXG4gICAgICAgIG1heC13aWR0aDogODUlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIH1cXG4gICAgI2FkZFRvRG97XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICAuZmlyc3RSb3csIC5zZWNvbmRSb3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHBvcHVsYXRlUHJvamVjdHNTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbVN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbi8vIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbi8vIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Rm9ybScpO1xuLy8gbGV0IG51bWJlciA9IDE7ICAvLyBudW1iZXIgYXR0cmlidXRlXG5cbmxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ1dHRvbnMnKTtcblxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdudW1iZXInLCBudW1iZXIpO1xuICAgIC8vIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ1dHRvbicpXG5cbiAgICAvLyArK251bWJlcjtcblxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFByb2plY3QnKS52YWx1ZTtcblxuICAgIHBvcHVsYXRlUHJvamVjdHNTdG9yYWdlKHByb2plY3ROYW1lKTtcblxuICAgIHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKCk7XG5cbiAgICAvLyBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICAvLyBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIHByb2plY3RGb3JtKTtcblxuICAgIC8vIHByb2plY3RGb3JtLnJlc2V0KCk7XG59XG5cblxuXG5leHBvcnQge2hhbmRsZVN1Ym1pdH0iLCJcbmxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpXG5cbmZ1bmN0aW9uIGhhbmRsZU1vZGFsKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpXG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5leHBvcnQge2hhbmRsZU1vZGFsfVxuXG4iLCJpbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vdG9Eb0FycmF5XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVRvRG9BcnJheVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG5sZXQgdG9kbztcbmxldCBpbmRleCA9IDA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09ICdwcm9qZWN0QnV0dG9uJyl7XG4gICAgICAgIGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm51bWJlclwiKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZVRvRG9TdWJtaXQoKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlOyBcbiAgICBcbiAgICB0b2RvID0gY3JlYXRlVG9kb09iamVjdCh0aXRsZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcblxuICAgIGFkZFRvRG8oaW5kZXgsIHRvZG8pO1xuICAgIHBvcHVsYXRlVG9Eb0FycmF5U3RvcmFnZShpbmRleCx0b2RvKTtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9PYmplY3QodGl0bGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSl7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHByaW9yaXR5IDogcHJpb3JpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZVxuICAgIH1cblxufVxuXG5leHBvcnQgeyBoYW5kbGVUb0RvU3VibWl0IH07IiwiaW1wb3J0IHsgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdG9Eb0FycmF5XCI7XG5pbXBvcnQgeyBnZXRUb0RvQXJyYXkgfSBmcm9tIFwiLi90b0RvQXJyYXlcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25cIjtcblxubGV0IGluZGV4ID0gMDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2plY3RCdXR0b24nKXtcbiAgICAgICAgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwibnVtYmVyXCIpO1xuICAgIH1cblxufSlcblxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKGV2ZW50KXtcblxuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpXG5cbiAgICBsZXQgY2hpbGRyZW5UZW1wID0gdG9kb3MuY2hpbGRyZW47XG4gICAgbGV0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShjaGlsZHJlblRlbXApXG4gICAgY29uc29sZS5sb2coY2hpbGRyZW4pICAgIC8vIGdldCBjaGlsZCBlbGVtbnRzIG9mIHRvZG9zLCBpLmUgYWxsIHRvZG8gY2FyZHNcblxuICAgIGxldCB0ZW1wID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IHBhcmVudCA9IHRlbXAucGFyZW50Tm9kZTsgICAgIC8vIGdldCB0aGUgc2luZ2xlIHRvZG8gY2FyZCB0aGF0IHdhbnRzIHRvIGJlIGRlbGV0ZWRcblxuICAgIGNvbnNvbGUubG9nKHBhcmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSl7XG5cbiAgICAgICAgLy8gY2hlY2sgYXQgd2hpY2ggc3ViaW5kZXggKGkpIHRoaXMgY2FyZCB3YXMgaW4gdG9kb2FycmF5W2luZGV4XVxuICAgICAgICAvLyBhbmQgcmVtb3ZlIGl0IGZyb20gdG9kb2FycmF5IGFuZCBjYWxsIGRpc3BsYXkgYWdhaW4gZm9yIHJlcmVuZGVyXG4gICAgICAgIGlmKCBjaGlsZHJlbltpXSA9PT0gcGFyZW50KXtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICBsZXQgc3ViaW5kZXg7XG4gICAgICAgICAgICBzdWJpbmRleCA9IGk7XG4gICAgICAgICAgICBkZWxldGVPYmplY3QoaW5kZXgsIHN1YmluZGV4KVxuXG4gICAgICAgICAgICAvLyBsZXQgdG9kb0FycmF5ID0gZ2V0VG9Eb0FycmF5KCk7XG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FycmF5XCIpKTtcblxuICAgICAgICAgICAgdG9kb3MudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheShhcnJheSwgaW5kZXgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgZGVsZXRlSXRlbSB9XG5cblxuIiwiXG5mdW5jdGlvbiBkaXNwbGF5KGFycmF5LCBpbmRleCl7XG4gICAgYXJyYXlbaW5kZXhdLmZvckVhY2goKG9iamVjdCk9PntcblxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG9DYXJkJyk7XG5cbiAgICAgICAgbGV0IGZpcnN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpcnN0Um93LmNsYXNzTGlzdC5hZGQoJ2ZpcnN0Um93Jyk7XG4gICAgICAgIGxldCBzZWNvbmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2Vjb25kUm93LmNsYXNzTGlzdC5hZGQoJ3NlY29uZFJvdycpO1xuICAgICAgICBsZXQgdGhpcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcmRSb3cuY2xhc3NMaXN0LmFkZCgndGhpcmRSb3cnKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSAnVGl0bGU6JyArICcgJyArIG9iamVjdC50aXRsZTtcblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JyArICcgJyArIG9iamVjdC5wcmlvcml0eTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JyArICcgJyArIG9iamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOicgKyAnICcgKyBvYmplY3QuZHVlRGF0ZTtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG5cbiAgICAgICAgXG4gICAgICAgIGZpcnN0Um93LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgZmlyc3RSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICB0aGlyZFJvdy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICB0aGlyZFJvdy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGZpcnN0Um93KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzZWNvbmRSb3cpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRoaXJkUm93KTtcblxuICAgICAgICB0b2Rvcy5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KVxufVxuXG5leHBvcnQge2Rpc3BsYXl9IiwiXG5pbXBvcnQgeyBnZXRUb0RvQXJyYXkgfSBmcm9tIFwiLi90b0RvQXJyYXlcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25cIjtcblxubGV0IGluZGV4ID0gMDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2plY3RCdXR0b24nKXtcbiAgICAgICAgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwibnVtYmVyXCIpO1xuICAgIH1cbn0pXG5cblxuLy93aGVuIGZvcm0gaXMgc3VibWl0dGVkIGFmdGVyICsgY2xpY2ssIHdlIGRpc3BsYXkgdGhlIHRvZG9zIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb2plY3QgXG4vL3NlbGVjdGVkIHdoaWNoIGlzIHN0b3JlZCBpbiBpbmRleFxuZnVuY3Rpb24gaGFuZGxlUGx1c0NsaWNrKCl7XG5cbiAgICBsZXQgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3MnKTtcblxuICAgIHRvZG9zLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvL2xldCB0b0RvQXJyYXkgPSBnZXRUb0RvQXJyYXkoKTtcblxuICAgIGxldCB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FycmF5XCIpKTtcblxuICAgIGRpc3BsYXkodG9Eb0FycmF5LCBpbmRleCk7XG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKGV2ZW50KXtcblxuICAgIGxldCBudW1iZXIgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdudW1iZXInKTtcbiAgICBsZXQgdG9Eb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSk7XG5cbiAgICB0b2Rvcy50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZGlzcGxheSh0b0RvQXJyYXksIG51bWJlcik7XG59XG5cblxuZXhwb3J0IHtoYW5kbGVQbHVzQ2xpY2ssIGhhbmRsZVByb2plY3RDbGlja307IiwiaW1wb3J0IHsgZGVsZXRlT2JqZWN0IH0gZnJvbSBcIi4vdG9Eb0FycmF5XCI7XG5pbXBvcnQgeyBnZXRUb0RvQXJyYXkgfSBmcm9tIFwiLi90b0RvQXJyYXlcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25cIjtcblxubGV0IGluZGV4ID0gMDtcblxubGV0IGVkaXRJbmRleCA9IDA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09ICdwcm9qZWN0QnV0dG9uJyl7XG4gICAgICAgIGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm51bWJlclwiKTtcbiAgICB9XG5cbn0pXG5cblxuZnVuY3Rpb24gZWRpdFRvZG8oZXZlbnQpe1xuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtLW1vZGFsJyk7XG4gICAgXG4gICAgbGV0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zJyk7XG4gICAgbGV0IGNoaWxkcmVuVGVtcCA9IHRvZG9zLmNoaWxkcmVuO1xuICAgIGxldCBjaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRyZW5UZW1wKVxuICAgIGNvbnNvbGUubG9nKGNoaWxkcmVuKSAgICAvLyBnZXQgY2hpbGQgZWxlbW50cyBvZiB0b2RvcywgaS5lIGFsbCB0b2RvIGNhcmRzXG5cbiAgICBsZXQgdGVtcCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCBwYXJlbnQgPSB0ZW1wLnBhcmVudE5vZGU7ICAgICAvLyBnZXQgdGhlIHNpbmdsZSB0b2RvIGNhcmQgdGhhdCB3YW50cyB0byBiZSBkZWxldGVkXG5cbiAgICBjb25zb2xlLmxvZyhwYXJlbnQpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtLXRpdGxlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LS1wcmlvcml0eVwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC0tZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LS1kdWVEYXRlJyk7IFxuXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpe1xuXG4gICAgICAgIC8vIG9uIGVkaXQgY2xpY2tlZCwgaSBjb250YWlucyB0aGUgaW5kZXggb2Ygb2JqZWN0IGluIHRvZG9kYXJyYXlcbiAgICAgICAgaWYoIGNoaWxkcmVuW2ldID09PSBwYXJlbnQpe1xuXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FycmF5XCIpKTtcbiAgICAgICAgICAgIGVkaXRJbmRleCA9IGk7XG5cbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gYXJyYXlbaW5kZXhdW2ldLnRpdGxlO1xuICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBhcnJheVtpbmRleF1baV0ucHJpb3JpdHk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGFycmF5W2luZGV4XVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSBhcnJheVtpbmRleF1baV0uZHVlRGF0ZTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC0tZm9ybScpO1xuXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCk9PntcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGxldCBhcnJheSA9IGdldFRvRG9BcnJheSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FycmF5XCIpKTtcbiAgICAgICAgICAgIC8vYWRkIGVkaXRlZCB2YWx1ZXMgdG8gdG9kb2FycmF5IGFuZCB0cmlnZ2VyIGFuZCByZSByZW5kZXIgdGhlIGRpc3BsYXlcbiAgICAgICAgICAgIGFycmF5W2luZGV4XVtlZGl0SW5kZXhdLnRpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgICAgICAgICBhcnJheVtpbmRleF1bZWRpdEluZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgYXJyYXlbaW5kZXhdW2VkaXRJbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIGFycmF5W2luZGV4XVtlZGl0SW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xuXG4gICAgICAgICAgICB0b2Rvcy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxuICAgICAgICAgICAgZGlzcGxheShhcnJheSwgaW5kZXgpO1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIFxuICAgIH0pXG5cbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICBcbn1cblxuXG5cbmV4cG9ydCB7IGVkaXRUb2RvIH0iLCJpbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi90b0RvQXJyYXknO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0TmFtZSl7XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKSBcbiAgICAgICB7XG4gICAgICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcbiAgICAgICB9ICBcblxuICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSlcbiAgIGFycmF5LnB1c2gocHJvamVjdE5hbWUpO1xuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKCl7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSl7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKTtcblxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCdXR0b25zJyk7XG4gICAgICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Rm9ybScpO1xuXG4gICAgICAgIGFkZFByb2plY3RBcnJheSgpO1xuICAgICAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdudW1iZXInLCBpbmRleCsxKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ1dHRvbicpO1xuXG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9Eb0FycmF5U3RvcmFnZShpbmRleCx0b2RvKXtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FycmF5XCIpKVxuICAgIHsgICBcbiAgICAgICAgbGV0IHRvZG9BcnJheSA9IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgdGl0bGU6IFwiR3ltXCIsXG4gICAgICAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICAgZHVlRGF0ZTogXCIyMDI0LTA0LTEwXCIsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSXRzIExlZyBEYXlcIixcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgdGl0bGU6IFwiV29yayBvbiBQcm9qZWN0XCIsXG4gICAgICAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICAgZHVlRGF0ZTogXCIyMDI0LTA0LTEyXCIsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRml4IGJ1Z3NcIlxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgIHRpdGxlOiBcIkZlZWQgdGhlIGNhdFwiLFxuICAgICAgICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgICAgICBkdWVEYXRlOiBcIjIwMjQtMDQtMjRcIixcbiAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUcmVhdCBhbHNvIVwiXG4gICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJheVwiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpKVxuICAgIH1cblxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvQXJyYXlcIikpO1xuXG4gICAgYXJyYXlbaW5kZXhdLnB1c2godG9kbyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJheVwiLCBKU09OLnN0cmluZ2lmeShhcnJheSkpXG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEFycmF5KCl7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSlcbiAgICB7ICAgXG4gICAgICAgIGxldCB0b2RvQXJyYXkgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJHeW1cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC0wNC0xMFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJdHMgTGVnIERheVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXb3JrIG9uIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC0wNC0xMlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaXggYnVnc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRmVlZCB0aGUgY2F0XCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogXCIyMDI0LTA0LTI0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRyZWF0IGFsc28hXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpXG4gICAgfVxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvQXJyYXlcIikpO1xuICAgIGFycmF5LnB1c2goW10pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcbn1cblxuZXhwb3J0IHtsb2FkUHJvamVjdHNGcm9tU3RvcmFnZSAsIHBvcHVsYXRlUHJvamVjdHNTdG9yYWdlLCBwb3B1bGF0ZVRvRG9BcnJheVN0b3JhZ2V9IiwiXG5cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKGV2ZW50KXtcblxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RCdXR0b24nKVxuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QzZDNkMyc7XG4gICAgfSlcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhOGQ5ZGEnXG59XG5cbmV4cG9ydCB7Y2hhbmdlQ29sb3J9IiwiLy8gdGhpcyBtb2R1bGUgY29udGFpbnMgdGhlIHBhcmVudCB0b0RvQXJyYXkgXG4vLyBhbmQgd2lsbCBhZGQgYW4gYXJyYXkgdG8gaXQgd2hlbiBmb3JtIGlzIHN1Ym1pdGVkXG4vLyBlYWNoIHN1YiBhcnJheSByZXByZXNlbnRzIGEgcHJvamVjdFxuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlGdW5jdGlvblwiO1xuXG5cblxubGV0IHRvRG9BcnJheSA9IFtcbiAgICBbXG4gICAgICAgIFxuICAgIF1cbl07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcbiAgICB0b0RvQXJyYXkucHVzaChbXSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG8oaW5kZXgsb2JqZWN0KXtcblxuICAgIHRvRG9BcnJheVtpbmRleF0ucHVzaChvYmplY3QpXG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5KTtcblxufVxuXG5mdW5jdGlvbiBnZXRUb0RvQXJyYXkoKXtcblxuICAgIHJldHVybiB0b0RvQXJyYXk7XG5cbn1cblxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KGluZGV4LCBzdWJJbmRleCl7XG5cbiAgICAvLyB0b0RvQXJyYXlbaW5kZXhdLnNwbGljZShzdWJJbmRleCwxKVxuXG4gICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSk7XG4gICAgYXJyYXlbaW5kZXhdLnNwbGljZShzdWJJbmRleCwxKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcbiAgICBcbn1cblxuXG5cbmV4cG9ydCB7YWRkUHJvamVjdCwgYWRkVG9EbywgZ2V0VG9Eb0FycmF5LCBkZWxldGVPYmplY3R9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBoYW5kbGVTdWJtaXQgfSBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7IC8vbWFuaXB1bGF0ZXMgdGhlIERPTVxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gXCIuL3RvRG9BcnJheVwiO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSBcIi4vdG9Eb0FycmF5XCI7XG5pbXBvcnQgeyBoYW5kbGVNb2RhbCB9IGZyb20gXCIuL2FkZFRvRG9cIjtcbmltcG9ydCB7IGhhbmRsZVRvRG9TdWJtaXQgfSBmcm9tIFwiLi9jcmVhdGVPYmplY3RcIjtcblxuaW1wb3J0IHsgaGFuZGxlUGx1c0NsaWNrIH0gZnJvbSBcIi4vZGlzcGxheVRvRG9zXCI7XG5pbXBvcnQgeyBoYW5kbGVQcm9qZWN0Q2xpY2sgfSBmcm9tIFwiLi9kaXNwbGF5VG9Eb3NcIjtcblxuaW1wb3J0IHsgZGVsZXRlSXRlbSB9IGZyb20gXCIuL2RlbGV0ZUl0ZW1cIjtcbmltcG9ydCB7IGVkaXRUb2RvIH0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcblxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5RnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgY2hhbmdlQ29sb3IgfSBmcm9tIFwiLi9wcm9qZWN0Q29sb3JcIjtcblxuXG5sZXQgZGVsZXRlQnV0dG9uO1xuLy9hZGRzIGEgbmV3IHByb2plY3Qgd2hlbiB1c2VyIGhpdHMgYWRkIHByb2plY3RcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Rm9ybScpO1xuXG4vLyBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRQcm9qZWN0KTtcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG5cblxuLy9vbiBpbml0aWFsIHBhZ2UgbG9hZFxuXG4vLyBvbkxvYWQoKTtcblxuLy9zaG93IG1vZGFsIG9uIGNsaWNraW5nIGFkZCBuZXcgdG9kb1xuXG5sZXQgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0RvJyk7XG5hZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTW9kYWwpXG5cbi8vY3JlYXRlIHRvZG9cbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlVG9Eb1N1Ym1pdClcblxuXG4vL29uIGNsaWNraW5nIGFkZCBuZXcgdG9kb1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVBsdXNDbGljayk7XG5cblxuXG4vL29uIHByb2plY3QgY2xpY2tcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwicHJvamVjdEJ1dHRvblwiKXtcblxuICAgICAgICAvL2Rpc3BsYXkgdG9kb3Mgb2YgY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgIGhhbmRsZVByb2plY3RDbGljayhldmVudCk7XG4gICAgfVxufSlcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KT0+e1xuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVsZXRlJyl7IFxuICAgICAgICBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9uLmZvckVhY2goKGJ1dHRvbik9PntcblxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbSlcblxuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcblxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXQnKXsgXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goKGJ1dHRvbik9PntcblxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8oZXZlbnQpKVxuXG4gICAgICAgIH0pXG4gICAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2plY3RCdXR0b24nKXtcbiAgICAgICAgY2hhbmdlQ29sb3IoZXZlbnQpO1xuICAgIH1cbn0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKVxuXG4vL29uIGxvYWRpbmcgcGFnZSBkaXNwbGF5IERlZmF1bHQgUHJvamVjdCBGb2xkZXJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcblxuXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSlcbiAgICB7ICAgXG4gICAgICAgIGxldCB0b2RvQXJyYXkgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgIHRpdGxlOiBcIkd5bVwiLFxuICAgICAgICAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC0wNC0xMFwiLFxuICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkl0cyBMZWcgRGF5XCIsXG4gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgIHRpdGxlOiBcIldvcmsgb24gUHJvamVjdFwiLFxuICAgICAgICAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgICAgICAgIGR1ZURhdGU6IFwiMjAyNC0wNC0xMlwiLFxuICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpeCBidWdzXCJcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICB0aXRsZTogXCJGZWVkIHRoZSBjYXRcIixcbiAgICAgICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICAgICAgICAgZHVlRGF0ZTogXCIyMDI0LTA0LTI0XCIsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVHJlYXQgYWxzbyFcIlxuICAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSlcbiAgICB9XG4gICAgbGV0IGFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJheVwiKSk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmF1bHQnKTtcblxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2E4ZDlkYSc7XG4gICAgZGlzcGxheShhcnJheSwgMCk7XG59KVxuXG5cblxuXG5cblxuXG4gICAgICAgIC8vIC8vYWRkIGJhY2tncm91bmQgY29sb3IgdG8gc2VsZWN0ZWQgcHJvamVjdFxuICAgICAgICAvLyBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0QnV0dG9uJylcbiAgICAgICAgLy8gYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgIC8vICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkM2QzZDMnO1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhOGQ5ZGEnXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==