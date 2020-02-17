function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-nav></app-top-nav>\n<div class=\"app-content-wrapper\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar fixed-bottom footer milliken-blue-background\">\n    <div>\n        <p class=\"footer-text\">Contents Copyright © 2002 - 2020 Milliken & Company.</p>\n        <p class=\"footer-text\">All Rights Reserved. “Milliken” is a registered trademark of Milliken & Company.</p>\n    </div>\n    <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"img-responsive\" src=\"assets/brand/milliken-logo-white.svg\" width=\"150px\">\n    </a>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-nav/top-nav.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-nav/top-nav.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutTopNavTopNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-custom\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"img-responsive\" src=\"assets/brand/andover_milliken_logo_black.png\" width=\"140px\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.html":
  /*!******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.html ***!
    \******************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSavingsCalculatorComponentsSavingsCalculatorChartSummarySavingsCalculatorChartSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <h3 class=\"product-savings-title\">Annual Savings Percentages</h3>\n    </div>\n    <div class=\"row chart-content-wrapper\">\n        <ngx-charts-bar-vertical\n            [view]=\"view\"\n            [results]=\"chartInput\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [roundEdges]=\"roundEdges\"\n        >\n        </ngx-charts-bar-vertical>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSavingsCalculatorComponentsSavingsCalculatorFormSavingsCalculatorFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-wrapper milliken-blue-background\">\n    <div class=\"form-title-wrapper\">\n        <h3>Current Annual Product Usage</h3>\n    </div>\n    <form [formGroup]=\"productForm\">\n        <div class=\"form-group row\">\n            <label for=\"adhesiveSprayInput\" class=\"col-sm-6 col-form-label\">Adhesive Spray (Bottles)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"adhesiveSprayInput\" formControlName=\"TufSkinCases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"heelPlusLaceInput\" class=\"col-sm-6 col-form-label\">Heel + Lace Pads (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"heelPlusLaceInput\" formControlName=\"HLPadCases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"preWrapInput\" class=\"col-sm-6 col-form-label\">Pre-Wrap (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"preWrapInput\" formControlName=\"PreWrapCases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"whiteTapeLowInput\" class=\"col-sm-6 col-form-label\">White Tape (economy) (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"whiteTapeLowInput\" formControlName=\"LCWhiteTapeCases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"whiteTapeHighInput\" class=\"col-sm-6 col-form-label\">White Tape (premium) (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"whiteTapeHighInput\" formControlName=\"HCWhiteTapeCases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"STEInput\" class=\"col-sm-6 col-form-label\">Stretch Tear Adhesive (STE) (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"STEInput\" formControlName=\"STECases\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"cohesiveInput\" class=\"col-sm-6 col-form-label\">Cohesive (Cases)</label>\n            <div class=\"col-sm-6\">\n                <input type=\"number\" min=\"0\" class=\"form-control\" id=\"cohesiveInput\" formControlName=\"CohesiveCases\">\n            </div>\n        </div>\n    </form>\n      \n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"calculateSavings()\">Calculate Savings</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.html":
  /*!**********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.html ***!
    \**********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSavingsCalculatorComponentsSavingsCalculatorProductSummarySavingsCalculatorProductSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <h3 class=\"product-savings-title\">Annual Cost Savings Summary</h3>\n    </div>\n    <div class=\"product-savings-content row\">\n        <div class=\"savings-showcase-wrapper\">\n            <p class=\"savings-showcase-text\">PowerFlex + PowerPro: <span class=\"savings-showcase-value\">${{PowerProSavings}}</span></p>\n        </div>\n        <div class=\"savings-showcase-wrapper\">\n            <p class=\"savings-showcase-text\">PowerFlex + VictoryTape: <span class=\"savings-showcase-value\">${{VictoryTapeSavings}}</span></p>\n        </div>\n        <div class=\"savings-showcase-wrapper\">\n            <p class=\"savings-showcase-text\">PowerFlex + PowerTape: <span class=\"savings-showcase-value\">${{PowerTapeSavings}}</span></p>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSavingsCalculatorPagesSavingsCalculatorPageSavingsCalculatorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm form-wrapper\">\n                <app-savings-calculator-form\n                [productForm]=\"productForm\"\n                [calculateSavings]=\"calculateSavings\"\n                ></app-savings-calculator-form>\n            </div>\n            <div class=\"col-sm savings-output-wrapper\">\n                <div class=\"container\">\n                    <div class=\"row justify-content-center output-content\">\n                       <app-savings-calculator-product-summary\n                       [PowerProSavings]=\"PowerProSavings\"\n                       [VictoryTapeSavings]=\"VictoryTapeSavings\"\n                       [PowerTapeSavings]=\"PowerTapeSavings\"\n                       ></app-savings-calculator-product-summary\n                        > \n                    </div>\n                    <div class=\"row justify-content-center output-content\">\n                        <app-savings-calculator-chart-summary class=\"chart-content-wrapper\"\n                        [PowerProSavingsPercentage]=\"PowerProSavingsPercentage\"\n                        [VictoryTapeSavingsPercentage]=\"VictoryTapeSavingsPercentage\"\n                        [PowerTapeSavingsPercentage]=\"PowerTapeSavingsPercentage\"\n                        ></app-savings-calculator-chart-summary> \n                    </div>\n                </div>\n          </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_savings_calculator_pages_savings_calculator_page_savings_calculator_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component */
    "./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.ts");

    var routes = [{
      path: 'savings-calculator',
      component: _modules_savings_calculator_pages_savings_calculator_page_savings_calculator_page_component__WEBPACK_IMPORTED_MODULE_3__["SavingsCalculatorPageComponent"],
      data: {
        title: 'Savings Calculator'
      }
    }, {
      path: '',
      redirectTo: '/savings-calculator',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _modules_savings_calculator_pages_savings_calculator_page_savings_calculator_page_component__WEBPACK_IMPORTED_MODULE_3__["SavingsCalculatorPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-content-wrapper{\n    padding-top: 100px;\n    padding-bottom: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRlbnQtd3JhcHBlcntcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'cost-saver-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/top-nav/top-nav.component */
    "./src/app/layout/top-nav/top-nav.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _modules_savings_calculator_savings_calculator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/savings-calculator/savings-calculator.module */
    "./src/app/modules/savings-calculator/savings-calculator.module.ts");
    /*Custom App Components*/

    /*Custom Modules*/


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layout_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_6__["TopNavComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _modules_savings_calculator_savings_calculator_module__WEBPACK_IMPORTED_MODULE_8__["SavingsCalculatorModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/footer/footer.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-text{\n    color: #FFFFFF;\n    font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci10ZXh0e1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layout/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/top-nav/top-nav.component.css":
  /*!******************************************************!*\
    !*** ./src/app/layout/top-nav/top-nav.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutTopNavTopNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-custom{\n    background-color: #f4f4fa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/top-nav/top-nav.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/top-nav/top-nav.component.ts ***!
    \*****************************************************/

  /*! exports provided: TopNavComponent */

  /***/
  function srcAppLayoutTopNavTopNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
      return TopNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TopNavComponent =
    /*#__PURE__*/
    function () {
      function TopNavComponent() {
        _classCallCheck(this, TopNavComponent);
      }

      _createClass(TopNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavComponent;
    }();

    TopNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-nav/top-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-nav.component.css */
      "./src/app/layout/top-nav/top-nav.component.css")).default]
    })], TopNavComponent);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.css":
  /*!***************************************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.css ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorChartSummarySavingsCalculatorChartSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-savings-title{\n    color: #2A285E;\n    font-weight: bold;\n}\n\n.chart-content-wrapper{\n    padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYXZpbmdzLWNhbGN1bGF0b3IvY29tcG9uZW50cy9zYXZpbmdzLWNhbGN1bGF0b3ItY2hhcnQtc3VtbWFyeS9zYXZpbmdzLWNhbGN1bGF0b3ItY2hhcnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NhdmluZ3MtY2FsY3VsYXRvci9jb21wb25lbnRzL3NhdmluZ3MtY2FsY3VsYXRvci1jaGFydC1zdW1tYXJ5L3NhdmluZ3MtY2FsY3VsYXRvci1jaGFydC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1zYXZpbmdzLXRpdGxle1xuICAgIGNvbG9yOiAjMkEyODVFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hhcnQtY29udGVudC13cmFwcGVye1xuICAgIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.ts":
  /*!**************************************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: SavingsCalculatorChartSummaryComponent */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorChartSummarySavingsCalculatorChartSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsCalculatorChartSummaryComponent", function () {
      return SavingsCalculatorChartSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SavingsCalculatorChartSummaryComponent =
    /*#__PURE__*/
    function () {
      function SavingsCalculatorChartSummaryComponent() {
        _classCallCheck(this, SavingsCalculatorChartSummaryComponent);

        this.PowerProSavingsPercentage = 0;
        this.VictoryTapeSavingsPercentage = 0;
        this.PowerTapeSavingsPercentage = 0;
        this.chartInput = [{
          "name": "PowerFlex + PowerPro",
          "value": this.PowerProSavingsPercentage
        }, {
          "name": "PowerFlex + VictoryTape",
          "value": this.VictoryTapeSavingsPercentage
        }, {
          "name": "PowerFlex + PowerTape",
          "value": this.PowerTapeSavingsPercentage
        }];
        this.view = [420, 340]; // options

        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Product';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Annual Savings Percentage';
        this.roundEdges = false;
      }

      _createClass(SavingsCalculatorChartSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          //Only update if I have all three savings percentage available to chart.
          if (Object.keys(changes).length === 3) {
            // clear the data array
            this.chartInput = [];
            this.chartInput = [{
              "name": "PowerFlex + PowerPro",
              "value": Number.isNaN(changes.PowerProSavingsPercentage.currentValue) ? 0 : changes.PowerProSavingsPercentage.currentValue
            }, {
              "name": "PowerFlex + VictoryTape",
              "value": Number.isNaN(changes.VictoryTapeSavingsPercentage.currentValue) ? 0 : changes.VictoryTapeSavingsPercentage.currentValue
            }, {
              "name": "PowerFlex + PowerTape",
              "value": Number.isNaN(changes.PowerTapeSavingsPercentage.currentValue) ? 0 : changes.PowerTapeSavingsPercentage.currentValue
            }];
          }
        }
      }]);

      return SavingsCalculatorChartSummaryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorChartSummaryComponent.prototype, "PowerProSavingsPercentage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorChartSummaryComponent.prototype, "VictoryTapeSavingsPercentage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorChartSummaryComponent.prototype, "PowerTapeSavingsPercentage", void 0);
    SavingsCalculatorChartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-savings-calculator-chart-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./savings-calculator-chart-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./savings-calculator-chart-summary.component.css */
      "./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.css")).default]
    })], SavingsCalculatorChartSummaryComponent);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.css":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.css ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorFormSavingsCalculatorFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-wrapper{\n    padding: 20px;\n    color: #FFFFFF;\n    border-radius: 5px;\n}\n\n.form-title-wrapper{\n    margin-bottom: 2rem;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYXZpbmdzLWNhbGN1bGF0b3IvY29tcG9uZW50cy9zYXZpbmdzLWNhbGN1bGF0b3ItZm9ybS9zYXZpbmdzLWNhbGN1bGF0b3ItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2F2aW5ncy1jYWxjdWxhdG9yL2NvbXBvbmVudHMvc2F2aW5ncy1jYWxjdWxhdG9yLWZvcm0vc2F2aW5ncy1jYWxjdWxhdG9yLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXdyYXBwZXJ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLXRpdGxlLXdyYXBwZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: SavingsCalculatorFormComponent */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorFormSavingsCalculatorFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsCalculatorFormComponent", function () {
      return SavingsCalculatorFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SavingsCalculatorFormComponent =
    /*#__PURE__*/
    function () {
      function SavingsCalculatorFormComponent() {
        _classCallCheck(this, SavingsCalculatorFormComponent);
      }

      _createClass(SavingsCalculatorFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SavingsCalculatorFormComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorFormComponent.prototype, "productForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorFormComponent.prototype, "calculateSavings", void 0);
    SavingsCalculatorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-savings-calculator-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./savings-calculator-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./savings-calculator-form.component.css */
      "./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.css")).default]
    })], SavingsCalculatorFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.css":
  /*!*******************************************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.css ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorProductSummarySavingsCalculatorProductSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".savings-showcase-wrapper{\n\n}\n\n.savings-showcase-text{\n    font-weight: bold;\n}\n\n.savings-showcase-value{\n    font-size: 1.4rem;\n    text-decoration: underline;\n    color: #2A285E;\n}\n\n.product-savings-title{\n    color: #2A285E;\n    font-weight: bold;\n}\n\n.product-savings-content{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    border: 3px solid #2A285E;\n    padding: 10px;\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYXZpbmdzLWNhbGN1bGF0b3IvY29tcG9uZW50cy9zYXZpbmdzLWNhbGN1bGF0b3ItcHJvZHVjdC1zdW1tYXJ5L3NhdmluZ3MtY2FsY3VsYXRvci1wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zYXZpbmdzLWNhbGN1bGF0b3IvY29tcG9uZW50cy9zYXZpbmdzLWNhbGN1bGF0b3ItcHJvZHVjdC1zdW1tYXJ5L3NhdmluZ3MtY2FsY3VsYXRvci1wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZpbmdzLXNob3djYXNlLXdyYXBwZXJ7XG5cbn1cblxuLnNhdmluZ3Mtc2hvd2Nhc2UtdGV4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNhdmluZ3Mtc2hvd2Nhc2UtdmFsdWV7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMyQTI4NUU7XG59XG5cbi5wcm9kdWN0LXNhdmluZ3MtdGl0bGV7XG4gICAgY29sb3I6ICMyQTI4NUU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LXNhdmluZ3MtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMkEyODVFO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.ts":
  /*!******************************************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.ts ***!
    \******************************************************************************************************************************************/

  /*! exports provided: SavingsCalculatorProductSummaryComponent */

  /***/
  function srcAppModulesSavingsCalculatorComponentsSavingsCalculatorProductSummarySavingsCalculatorProductSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsCalculatorProductSummaryComponent", function () {
      return SavingsCalculatorProductSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SavingsCalculatorProductSummaryComponent =
    /*#__PURE__*/
    function () {
      function SavingsCalculatorProductSummaryComponent() {
        _classCallCheck(this, SavingsCalculatorProductSummaryComponent);
      }

      _createClass(SavingsCalculatorProductSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SavingsCalculatorProductSummaryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorProductSummaryComponent.prototype, "PowerProSavings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorProductSummaryComponent.prototype, "VictoryTapeSavings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SavingsCalculatorProductSummaryComponent.prototype, "PowerTapeSavings", void 0);
    SavingsCalculatorProductSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-savings-calculator-product-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./savings-calculator-product-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./savings-calculator-product-summary.component.css */
      "./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.css")).default]
    })], SavingsCalculatorProductSummaryComponent);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.css":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.css ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSavingsCalculatorPagesSavingsCalculatorPageSavingsCalculatorPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-wrapper{\n    border-radius: 5px;\n}\n\n.output-content{\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zYXZpbmdzLWNhbGN1bGF0b3IvcGFnZXMvc2F2aW5ncy1jYWxjdWxhdG9yLXBhZ2Uvc2F2aW5ncy1jYWxjdWxhdG9yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NhdmluZ3MtY2FsY3VsYXRvci9wYWdlcy9zYXZpbmdzLWNhbGN1bGF0b3ItcGFnZS9zYXZpbmdzLWNhbGN1bGF0b3ItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcHBlcntcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5vdXRwdXQtY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: SavingsCalculatorPageComponent */

  /***/
  function srcAppModulesSavingsCalculatorPagesSavingsCalculatorPageSavingsCalculatorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsCalculatorPageComponent", function () {
      return SavingsCalculatorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_cost_calculation_service_cost_calculation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/cost-calculation-service/cost-calculation.service */
    "./src/app/modules/savings-calculator/providers/cost-calculation-service/cost-calculation.service.ts");

    var SavingsCalculatorPageComponent =
    /*#__PURE__*/
    function () {
      function SavingsCalculatorPageComponent(formBuilder, costCalcService) {
        var _this = this;

        _classCallCheck(this, SavingsCalculatorPageComponent);

        this.formBuilder = formBuilder;
        this.costCalcService = costCalcService;
        this.PowerProSavings = 0;
        this.VictoryTapeSavings = 0;
        this.PowerTapeSavings = 0;
        this.PowerProSavingsPercentage = 0;
        this.VictoryTapeSavingsPercentage = 0;
        this.PowerTapeSavingsPercentage = 0; //Creating Binding for function so it can be called from form component

        this.calculateSavings = function () {
          var powerFlexCases = _this.productForm.value.STECases + _this.productForm.value.CohesiveCases;
          var tapeCases = _this.productForm.value.LCWhiteTapeCases + _this.productForm.value.HCWhiteTapeCases;

          var competingProductCost = _this.costCalcService.calculateCompetingProductCost(_this.productForm.value.TufSkinCases, _this.productForm.value.HLPadCases, _this.productForm.value.PreWrapCases, _this.productForm.value.LCWhiteTapeCases, _this.productForm.value.HCWhiteTapeCases, _this.productForm.value.STECases, _this.productForm.value.CohesiveCases);

          var powerProCost = _this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "PowerPro");

          _this.PowerProSavings = _this.costCalcService.calculateMillikenProductSavings(powerProCost, competingProductCost);
          _this.PowerProSavingsPercentage = _this.costCalcService.calculateMillikenProductSavingsPercentage(_this.PowerProSavings, competingProductCost);

          var victoryTapeCost = _this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "VictoryTape");

          _this.VictoryTapeSavings = _this.costCalcService.calculateMillikenProductSavings(victoryTapeCost, competingProductCost);
          _this.VictoryTapeSavingsPercentage = _this.costCalcService.calculateMillikenProductSavingsPercentage(_this.VictoryTapeSavings, competingProductCost);

          var powerTapeCost = _this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "PowerTape");

          _this.PowerTapeSavings = _this.costCalcService.calculateMillikenProductSavings(powerTapeCost, competingProductCost);
          _this.PowerTapeSavingsPercentage = _this.costCalcService.calculateMillikenProductSavingsPercentage(_this.PowerTapeSavings, competingProductCost);
        };

        this.productForm = this.formBuilder.group({
          TufSkinCases: [0],
          HLPadCases: [0],
          PreWrapCases: [0],
          LCWhiteTapeCases: [0],
          HCWhiteTapeCases: [0],
          STECases: [0],
          CohesiveCases: [0]
        });
      }

      _createClass(SavingsCalculatorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SavingsCalculatorPageComponent;
    }();

    SavingsCalculatorPageComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _providers_cost_calculation_service_cost_calculation_service__WEBPACK_IMPORTED_MODULE_3__["CostCalculationService"]
      }];
    };

    SavingsCalculatorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-savings-calculator-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./savings-calculator-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./savings-calculator-page.component.css */
      "./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.css")).default]
    })], SavingsCalculatorPageComponent);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/providers/cost-calculation-service/cost-calculation.service.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/providers/cost-calculation-service/cost-calculation.service.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: CostCalculationService */

  /***/
  function srcAppModulesSavingsCalculatorProvidersCostCalculationServiceCostCalculationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CostCalculationService", function () {
      return CostCalculationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CostCalculationService =
    /*#__PURE__*/
    function () {
      function CostCalculationService() {
        _classCallCheck(this, CostCalculationService);

        this.competing_product_cost_mapper = {
          TufSkin: 10.00,
          HLPads: 25.00,
          PreWrap: 47.00,
          LCWhiteTape: 42.00,
          HCWhiteTape: 55.00,
          STE: 42.00,
          Cohesive: 26.00
        };
        this.milliken_product_cost_mapper = {
          PowerFlex: 26.00,
          VictoryTape: 29.00,
          PowerPro: 53.00,
          PowerTape: 34.00
        };
      }

      _createClass(CostCalculationService, [{
        key: "cleanInput",
        value: function cleanInput(input) {
          if (input == null || Number.isNaN(input) || input < 0) {
            return null;
          }

          return input;
        }
      }, {
        key: "calculateCompetingProductCost",
        value: function calculateCompetingProductCost() {
          var TufSkinBottles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var HLPadCases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var PreWrapCases = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var LCWhiteTapeCases = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var HCWhiteTapeCases = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var STECases = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var CohesiveCases = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
          return this.competing_product_cost_mapper["TufSkin"] * this.cleanInput(TufSkinBottles) + this.competing_product_cost_mapper["HLPads"] * this.cleanInput(HLPadCases) + this.competing_product_cost_mapper["PreWrap"] * this.cleanInput(PreWrapCases) + this.competing_product_cost_mapper["LCWhiteTape"] * this.cleanInput(LCWhiteTapeCases) + this.competing_product_cost_mapper["HCWhiteTape"] * this.cleanInput(HCWhiteTapeCases) + this.competing_product_cost_mapper["STE"] * this.cleanInput(STECases) + this.competing_product_cost_mapper["Cohesive"] * this.cleanInput(CohesiveCases);
        }
      }, {
        key: "calculateMillikenProductCost",
        value: function calculateMillikenProductCost(PowerFlexCases, ProductTapeCases, ProductName) {
          return this.milliken_product_cost_mapper["PowerFlex"] * PowerFlexCases + this.milliken_product_cost_mapper[ProductName] * ProductTapeCases;
        }
      }, {
        key: "calculateMillikenProductSavings",
        value: function calculateMillikenProductSavings(millikenProductsCost, competetiveProductsCost) {
          return competetiveProductsCost - millikenProductsCost;
        }
      }, {
        key: "calculateMillikenProductSavingsPercentage",
        value: function calculateMillikenProductSavingsPercentage(calculatedSavings, competetiveProductsCost) {
          return Math.round(calculatedSavings / competetiveProductsCost * 100);
        }
      }]);

      return CostCalculationService;
    }();

    CostCalculationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CostCalculationService);
    /***/
  },

  /***/
  "./src/app/modules/savings-calculator/savings-calculator.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/savings-calculator/savings-calculator.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SavingsCalculatorModule */

  /***/
  function srcAppModulesSavingsCalculatorSavingsCalculatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingsCalculatorModule", function () {
      return SavingsCalculatorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _pages_savings_calculator_page_savings_calculator_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/savings-calculator-page/savings-calculator-page.component */
    "./src/app/modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component.ts");
    /* harmony import */


    var _components_savings_calculator_form_savings_calculator_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/savings-calculator-form/savings-calculator-form.component */
    "./src/app/modules/savings-calculator/components/savings-calculator-form/savings-calculator-form.component.ts");
    /* harmony import */


    var _components_savings_calculator_chart_summary_savings_calculator_chart_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/savings-calculator-chart-summary/savings-calculator-chart-summary.component */
    "./src/app/modules/savings-calculator/components/savings-calculator-chart-summary/savings-calculator-chart-summary.component.ts");
    /* harmony import */


    var _components_savings_calculator_product_summary_savings_calculator_product_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/savings-calculator-product-summary/savings-calculator-product-summary.component */
    "./src/app/modules/savings-calculator/components/savings-calculator-product-summary/savings-calculator-product-summary.component.ts");
    /* harmony import */


    var _providers_cost_calculation_service_cost_calculation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./providers/cost-calculation-service/cost-calculation.service */
    "./src/app/modules/savings-calculator/providers/cost-calculation-service/cost-calculation.service.ts");

    var SavingsCalculatorModule = function SavingsCalculatorModule() {
      _classCallCheck(this, SavingsCalculatorModule);
    };

    SavingsCalculatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_savings_calculator_page_savings_calculator_page_component__WEBPACK_IMPORTED_MODULE_5__["SavingsCalculatorPageComponent"], _components_savings_calculator_form_savings_calculator_form_component__WEBPACK_IMPORTED_MODULE_6__["SavingsCalculatorFormComponent"], _components_savings_calculator_chart_summary_savings_calculator_chart_summary_component__WEBPACK_IMPORTED_MODULE_7__["SavingsCalculatorChartSummaryComponent"], _components_savings_calculator_product_summary_savings_calculator_product_summary_component__WEBPACK_IMPORTED_MODULE_8__["SavingsCalculatorProductSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_providers_cost_calculation_service_cost_calculation_service__WEBPACK_IMPORTED_MODULE_9__["CostCalculationService"]]
    })], SavingsCalculatorModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/pbooth/PersonalProjects/cost-saver-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map