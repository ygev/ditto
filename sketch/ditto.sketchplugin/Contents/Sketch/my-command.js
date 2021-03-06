var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-levenshtein/index.js":
/*!**********************************************!*\
  !*** ./node_modules/js-levenshtein/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (function()
{
  function _min(d0, d1, d2, bx, ay)
  {
    return d0 < d1 || d2 < d1
        ? d0 > d2
            ? d2 + 1
            : d0 + 1
        : bx === ay
            ? d1
            : d1 + 1;
  }

  return function(a, b)
  {
    if (a === b) {
      return 0;
    }

    if (a.length > b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var la = a.length;
    var lb = b.length;

    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
      la--;
      lb--;
    }

    var offset = 0;

    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
      offset++;
    }

    la -= offset;
    lb -= offset;

    if (la === 0 || lb < 3) {
      return lb;
    }

    var x = 0;
    var y;
    var d0;
    var d1;
    var d2;
    var d3;
    var dd;
    var dy;
    var ay;
    var bx0;
    var bx1;
    var bx2;
    var bx3;

    var vector = [];

    for (y = 0; y < la; y++) {
      vector.push(y + 1);
      vector.push(a.charCodeAt(offset + y));
    }

    var len = vector.length - 1;

    for (; x < lb - 3;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      bx1 = b.charCodeAt(offset + (d1 = x + 1));
      bx2 = b.charCodeAt(offset + (d2 = x + 2));
      bx3 = b.charCodeAt(offset + (d3 = x + 3));
      dd = (x += 4);
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        ay = vector[y + 1];
        d0 = _min(dy, d0, d1, bx0, ay);
        d1 = _min(d0, d1, d2, bx1, ay);
        d2 = _min(d1, d2, d3, bx2, ay);
        dd = _min(d2, d3, dd, bx3, ay);
        vector[y] = dd;
        d3 = d2;
        d2 = d1;
        d1 = d0;
        d0 = dy;
      }
    }

    for (; x < lb;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      dd = ++x;
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
        d0 = dy;
      }
    }

    return dd;
  };
})();



/***/ }),

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);


var levenshtein = __webpack_require__(/*! js-levenshtein */ "./node_modules/js-levenshtein/index.js");

var systemFonts = NSFontManager.sharedFontManager().availableFontFamilies();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var selectedLayers = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument().selectedLayers;
  var lines = NSPasteboard.generalPasteboard().stringForType(NSPasteboardTypeString).split("\n");
  var sketchStyles = preprocessStyles(lines);
  selectedLayers.forEach(function (layer) {
    layer.style.fontSize = sketchStyles[0];
    layer.style.textColor = sketchStyles[1];
    layer.style.lineHeight = sketchStyles[2];
    layer.style.fontWeight = sketchStyles[3];
    layer.style.textUnderline = sketchStyles[4];
    layer.style.textStrikethrough = sketchStyles[5];
    layer.style.fontFamily = sketchStyles[6];
    layer.style.fontStyle = sketchStyles[7];
    layer.style.kerning = sketchStyles[8];
    layer.style.textTransform = sketchStyles[9];
    layer.style.fontVariant = sketchStyles[10];
    layer.style.shadows = [{
      enabled: sketchStyles[11]
    }];

    if (sketchStyles[11]) {
      layer.style.shadows = [{
        x: sketchStyles[12],
        y: sketchStyles[13],
        blur: sketchStyles[14],
        color: sketchStyles[15]
      }];
    }
  });
});

function preprocessStyles(styleLines) {
  var sketchStyles = [];
  styleLines.forEach(function (declaration) {
    var colon = declaration.indexOf(":");

    if (colon !== -1) {
      var prop = declaration.slice(0, colon).trim();
      var val = declaration.slice(colon + 1).trim();

      switch (prop) {
        case 'font-size':
          sketchStyles[0] = Math.round(parseFloat(val));
          break;

        case 'color':
          sketchStyles[1] = val;
          break;

        case 'line-height':
          sketchStyles[2] = Math.round(parseFloat(val));
          break;

        case 'font-weight':
          sketchStyles[3] = convertWeight(val);
          break;

        case 'text-decoration':
          var textDecorations = convertDecoration(val);
          sketchStyles[4] = textDecorations[0];
          sketchStyles[5] = textDecorations[1];
          break;

        case 'font-family':
          sketchStyles[6] = convertFontFamily(val);
          break;

        case 'font-style':
          sketchStyles[7] = convertFontStyle(val);
          break;

        case 'letter-spacing':
          sketchStyles[8] = convertKerning(val);
          break;

        case 'text-transform':
          sketchStyles[9] = convertTransform(val);
          break;

        case 'font-variant':
          sketchStyles[10] = convertVariant(val);
          break;

        case 'text-shadow':
          var textShadows = convertTextShadows(val);

          if (textShadows) {
            sketchStyles[11] = true;

            for (var i = 0; i < 4; ++i) {
              sketchStyles[12 + i] = textShadows[i];
            }
          } else {
            sketchStyles[11] = textShadows;
          }

          break;

        default:
          alertM('Unknown CSS property: ' + prop);
      }
    }
  });
  return sketchStyles;
}

function convertWeight(weight) {
  if (weight <= 50 || weight >= 950) return 5;
  var select_weight = Math.round(weight / 100) - 1;
  var app_kit_font_weights = [2, // FontWeight100
  3, // FontWeight200
  4, // FontWeight300
  5, // FontWeight400
  6, // FontWeight500
  8, // FontWeight600
  9, // FontWeight700
  10, // FontWeight800
  12];
  return app_kit_font_weights[select_weight];
}

function convertDecoration(dec) {
  dec = dec.substring(0, dec.indexOf("rgb") - 1);
  var split = dec.split(' ');
  var decorations = [];

  for (var i = 0; i < split.length - 1; ++i) {
    switch (split[i]) {
      case 'underline':
        decorations[0] = true;
        break;

      case 'line-through':
        decorations[1] = true;
        break;

      case 'none':
        decorations[0] = false;
        decorations[1] = false;
        break;

      default:
        alertM('Unknown text-decoration: ' + split[i]);
    }
  }

  for (var _i = 0; _i <= 1; ++_i) {
    if (decorations[_i]) {
      switch (split[split.length - 1]) {
        case 'double':
          decorations[_i] = 'double';
          break;

        case 'solid':
          decorations[_i] = 'single';
          break;

        case 'dotted':
          decorations[_i] = 'single dot';
          break;

        case 'dashed':
          decorations[_i] = 'single dash';
          break;

        default:
          alertM('Unknown text-decoration-style: ' + split[split.length - 1]);
      }
    }
  }

  return decorations;
}

function convertFontFamily(fonts) {
  var firstFont = fonts.indexOf(',');

  if (firstFont !== -1) {
    fonts = fonts.substring(0, firstFont);
  }

  fonts = fonts.replace(/"|'/g, ''); // let bestFontScore = Infinity;
  // let bestFont;
  // for (let i = 0; i < systemFonts.count(); ++i) {
  //   let fontScore = levenshtein(systemFonts[i].toLowerCase(), fonts.toLowerCase());
  //   if (fontScore < bestFontScore) {
  //     bestFont = systemFonts[i];
  //     bestFontScore = fontScore;
  //   }
  // }
  // console.log(fonts);
  // console.log(bestFont);
  // console.log(bestFontScore);

  return fonts;
}

function convertFontStyle(style) {
  return style === 'italic' || style === 'oblique' ? 'italic' : undefined;
}

function convertKerning(kerning) {
  var num = parseFloat(kerning);
  return isNaN(num) ? 0 : num;
}

function convertTransform(transform) {
  return transform === 'capitalize' ? 'none' : transform;
}

function convertVariant(variant) {
  return variant === 'small-caps' ? variant : undefined;
}

function convertTextShadows(shadow) {
  var rgb = shadow.indexOf(')');

  if (rgb === -1) {
    return false;
  } else {
    var rgbStr = shadow.substring(0, rgb + 1);
    shadow = shadow.substring(rgb + 2);
    shadow = shadow.split(' ');

    for (var i = 0; i < 3; ++i) {
      shadow[i] = parseFloat(shadow[i]);
    }

    shadow.push(rgbStr);
    return shadow;
  }
}

function alertM(alert) {
  console.log(alert);
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(alert);
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map