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


    __webpack_exports__["default"] = "<!-- <app-navbar></app-navbar> -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\r\n<app-navbar></app-navbar>\r\n<!-- Content -->\r\n<div class=\"bg-color\">\r\n  <div class=\"rows\"> \r\n    <!-- Designer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content first\"> \r\n        <h2>Designer</h2>\r\n        <p>I love experimenting with different designs before implementing websites.</p>\r\n        <img src=\"../../assets/about/designer.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Software Developer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Software Developer</h2>\r\n        <p>I develop games and simple applications that solve problems (Java or C#).</p>\r\n        <img src=\"../../assets/about/developer.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Photographer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Photographer</h2>\r\n        <p>I take photos as a hobby and edit them in lightroom or VSCO.</p>\r\n        <img src=\"../../assets/about/photography.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Traveller -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Traveller</h2>\r\n        <p>Anytime I have a break, I always take the opportunity to travel somewhere new.</p>\r\n        <img src=\"../../assets/about/traveller.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n</div>\r\n<!-- Social links for instagram, linkedIn and Github -->\r\n<app-social></app-social>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts-post/posts-post.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts-post/posts-post.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesPostsPostsPostPostsPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\n<app-navbar></app-navbar>\n<!-- Display markdown file -->\n<div markdown [src]=\"post\"></div>\n<!-- Contact links -->\n<app-social></app-social>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\n<app-navbar></app-navbar>\n<!-- Content -->\n<section class=\"bg-color\">\n  <div class=\"container search-container\">\n    <!-- Search input box (change this to what are you looking for?) -->\n    <div class=\"padding\">\n      <input type=\"text\" id=\"myInput\" (keyup)=\"searchbar()\" placeholder=\"Search posts (by title, language, topic, year..)\" title=\"SearchBar\">\n    </div>\n    <!-- List of all posts -->\n    <div id=\"myUL\">\n      <article *ngFor=\"let i of postArray\">\n        <!-- display each article card with it's own background image  -->\n        <section class=\"cardPreview\">\n          <div class=\"padding\">\n            <div class=\"card-image\" [ngStyle]=\"{'background-image': 'url(' + getURL(i) + ')'}\"></div>\n              <div class=\"card-info\">\n                <a class=\"date\">{{dates[i]}}</a>\n                <a class=\"tag\">{{tags[i]}}</a>\n              </div>\n            <!-- Article information -->\n            <h1>{{titles[i]}}</h1>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim semper leo a facilisis. Donec eget felis molestie, fringilla turpis at, cursus neque. Maecenas consectetur, metus condimentum rutrum auctor, metus enim ornare mi, vitae venenatis urna nisl ornare dui. Sed odio turpis, pulvinar ac diam sit amet, porta eleifend risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum consectetur felis eu elit sollicitudin aliquam.\n              <a routerLink=\"{{links[i]}}\">Read More >></a>\n            </p>\n          </div>\n        </section>\n        <!-- End of article -->\n      </article>\n    </div>\n    <!-- Loop of posts - https://codepen.io/MattRuddick/pen/xaZXgE -->\n    <!-- <div class=\"card-columns\" style=\"color:black\">\n      <div class=\"card\" *ngFor=\"let i of postArray\">\n        <h1>HTML Syntax</h1>\n        <img class=\"card-img-top\" src={{images[i]}} alt=\"img\">\n        <h1>HTML Syntax</h1>\n        <div class=\"padding\">\n          <div class=\"tags\">\n            <div class=\"tag\">{{tags[i]}}</div>\n          </div>\n          <h1>{{titles[i]}}</h1>\n          <div class=\"date\">{{dates[i]}}</div>\n          <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>\n          <div class=\"read-more-project-button-container\">\n            <a routerLink=\"{{links[i]}}\" class=\"button read-more-button second-button\">Read More >></a>\n          </div>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</section>\n\n<!-- https://codepen.io/Booligoosh/pen/mKPpQp -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesProjectsProjectPostProjectPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\r\n<app-navbar></app-navbar>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\r\n<app-navbar></app-navbar>\r\n<!-- Content -->\r\n<section class=\"bg-color projects\">\r\n  <div class=\"container rows allCards\">\r\n    <!-- List all projects -->\r\n    <div class=\"project-card column-3\" *ngFor=\"let i of postArray\">\r\n      <!-- Image for each card -->\r\n      <img class=\"card-img-top\" src={{images[i]}} alt=\"img\">\r\n      <!-- Card information -->\r\n      <div class=\"card-body\">\r\n        <h5>{{titles[i]}}</h5>\r\n        <p><small class=\"text-muted\">{{descriptions[i]}}</small></p>\r\n        <div class=\"read-more-container\">\r\n          <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End of all projects -->\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesStudentsStudentsPostStudentsPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\r\n<app-navbar></app-navbar>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesStudentsStudentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\r\n<app-navbar></app-navbar>\r\n<!-- Content -->\r\n<section class=\"bg-color\">\r\n  <div class=\"container search-container\">\r\n    <!-- Search input box (change this to what are you looking for?) -->\r\n    <div class=\"padding\">\r\n      <input type=\"text\" id=\"myInput\" (keyup)=\"searchbar()\" placeholder=\"Search posts for students (by title, topic, year..)\" title=\"SearchBar\">\r\n    </div>\r\n    <!-- List of all posts -->\r\n    <div id=\"myUL\">\r\n      <article *ngFor=\"let i of postArray\">\r\n        <!-- display each article card with it's own background image  -->\r\n        <section class=\"cardPreview\">\r\n          <div class=\"padding\">\r\n            <div class=\"card-image\" [ngStyle]=\"{'background-image': 'url(' + getURL(i) + ')'}\"></div>\r\n              <div>\r\n                <a class=\"date\">{{dates[i]}}</a>\r\n                <a class=\"tag\">{{tags[i]}}</a>\r\n              </div>\r\n            <!-- Article information -->\r\n            <h1>{{titles[i]}}</h1>\r\n            <p>\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim semper leo a facilisis. Donec eget felis molestie, fringilla turpis at, cursus neque. Maecenas consectetur, metus condimentum rutrum auctor, metus enim ornare mi, vitae venenatis urna nisl ornare dui. Sed odio turpis, pulvinar ac diam sit amet, porta eleifend risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum consectetur felis eu elit sollicitudin aliquam.\r\n              <a routerLink=\"{{links[i]}}\">Read More >></a>\r\n            </p>\r\n          </div>\r\n        </section>\r\n        <!-- End of article -->\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <div class=\"social-footer\">\r\n      <!-- Github -->\r\n      <a data-hint=\"Github\" title=\"Github\" href=\"https://github.com/vondreii\" rel=\"me\">\r\n        <i class=\"fa fa-github-alt\"></i>\r\n      </a>\r\n      <!-- LinkedIn -->\r\n      <a data-hint=\"LinkedIn\" title=\"LinkedIn\" href=\"https://www.linkedin.com/in/sharlene-von-drehnen\" rel=\"me\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </a>\r\n      <!-- About/Contact -->\r\n      <a data-hint=\"Email\" title=\"Email\" routerLink=\"about\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n      </a>\r\n    </div>\r\n    <br>\r\n    <!-- Copyright -->\r\n    <div class=\"copy\">\r\n      <p>&copy; 2020 Copyright <strong>SVD</strong> | LAST MODIFIED <strong>08/06/2020</strong></p>\r\n    </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Bootstrap navbar -->\r\n<nav class=\"navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm\">\r\n  <div class=\"container\">\r\n    <a href=\"#\" class=\"navbar-brand\">\r\n      <!-- Logo Image -->\r\n      <img src=\"https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png\" width=\"45\" alt=\"\" class=\"d-inline-block align-middle mr-2\">\r\n      <!-- Logo Text -->\r\n      <span class=\"text-uppercase font-weight-bold\">Vondreii</span>\r\n    </a>\r\n\r\n    <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button>\r\n\r\n    <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\"><a routerLink=\"/posts\" class=\"nav-link\">Posts</a></li>\r\n        <li class=\"nav-item\"><a routerLink=\"/projects\" class=\"nav-link\">Projects</a></li>\r\n        <li class=\"nav-item\"><a routerLink=\"/about\" class=\"nav-link\">About</a></li>\r\n        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">Contact</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSocialSocialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Social links for instagram, linkedIn and Github -->\r\n<div class=\"contact-card\">\r\n    <br><br>\r\n    <div class=\"center\">\r\n        <!-- Instagram -->\r\n        <a href=\"https://www.instagram.com/vondreii\">\r\n            <img src=\"../../assets/social/instagram.png\" alt=\"image\"/>\r\n        </a>\r\n        <span class=\"space-between-links\"></span>\r\n        <!-- LinkedIn -->\r\n        <a href=\"https://www.linkedin.com/in/sharlene-von-drehnen\">\r\n            <img src=\"../../assets/social/linkedin.png\" alt=\"image\"/>\r\n        </a>\r\n        <span class=\"space-between-links\"></span>\r\n        <!-- Github -->\r\n        <a href=\"https://github.com/vondreii\">\r\n            <img src=\"../../assets/social/github.png\" alt=\"image\"/>\r\n        </a>\r\n        <span class=\"space-between-links\"></span>\r\n    </div>\r\n    <br><br>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/articles/projects/projects.component */
    "./src/app/components/articles/projects/projects.component.ts");
    /* harmony import */


    var _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/articles/projects/project-post/project-post.component */
    "./src/app/components/articles/projects/project-post/project-post.component.ts");
    /* harmony import */


    var _components_articles_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/articles/posts/posts.component */
    "./src/app/components/articles/posts/posts.component.ts");
    /* harmony import */


    var _components_articles_posts_posts_post_posts_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/articles/posts/posts-post/posts-post.component */
    "./src/app/components/articles/posts/posts-post/posts-post.component.ts");

    var routes = [{
      path: '',
      component: _components_articles_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, // All posts
    {
      path: 'posts',
      component: _components_articles_posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"]
    }, {
      path: 'posts/post/:article',
      component: _components_articles_posts_posts_post_posts_post_component__WEBPACK_IMPORTED_MODULE_8__["PostsPostComponent"]
    }, // Projects
    {
      path: 'projects',
      component: _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    }, {
      path: 'projects/post/:article',
      component: _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_6__["ProjectPostComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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


    __webpack_exports__["default"] = "/* Screen definitions */\r\n\r\n/* Bigger screens (desktop) */\r\n\r\n@media screen and (min-width:767px) {\r\n}\r\n\r\n/* Medium devices (ipads, small desktop) #1 */\r\n\r\n@media screen and (min-width:1101px) and (max-width:1400px) {\r\n}\r\n\r\n/* Medium devices (ipads) #2 */\r\n\r\n@media screen and (min-width:901px) and (max-width:1100px) {\r\n}\r\n\r\n/* Medium devices (ipads) #3 */\r\n\r\n@media screen and (min-width:767px) and (max-width:900px) {\r\n}\r\n\r\n/* Smallest screens (phones) */\r\n\r\n@media screen and (max-width:766px) {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2Qiw2QkFBNkI7O0FBQzdCO0FBQ0E7O0FBQ0EsNkNBQTZDOztBQUM3QztBQUNBOztBQUNBLDhCQUE4Qjs7QUFDOUI7QUFDQTs7QUFDQSw4QkFBOEI7O0FBQzlCO0FBQ0E7O0FBQ0EsOEJBQThCOztBQUM5QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTY3JlZW4gZGVmaW5pdGlvbnMgKi9cclxuXHJcbi8qIEJpZ2dlciBzY3JlZW5zIChkZXNrdG9wKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSB7XHJcbn0gXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChpcGFkcywgc21hbGwgZGVza3RvcCkgIzEgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTAxcHgpIGFuZCAobWF4LXdpZHRoOjE0MDBweCkge1xyXG59IFxyXG4vKiBNZWRpdW0gZGV2aWNlcyAoaXBhZHMpICMyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAxcHgpIGFuZCAobWF4LXdpZHRoOjExMDBweCkge1xyXG59IFxyXG4vKiBNZWRpdW0gZGV2aWNlcyAoaXBhZHMpICMzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpIGFuZCAobWF4LXdpZHRoOjkwMHB4KSB7XHJcbn0gXHJcbi8qIFNtYWxsZXN0IHNjcmVlbnMgKHBob25lcykgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjZweCkge1xyXG59Il19 */";
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

      this.title = 'vondreii-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/articles/projects/projects.component */
    "./src/app/components/articles/projects/projects.component.ts");
    /* harmony import */


    var _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/articles/projects/project-post/project-post.component */
    "./src/app/components/articles/projects/project-post/project-post.component.ts");
    /* harmony import */


    var _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/articles/students/students.component */
    "./src/app/components/articles/students/students.component.ts");
    /* harmony import */


    var _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/articles/students/students-post/students-post.component */
    "./src/app/components/articles/students/students-post/students-post.component.ts");
    /* harmony import */


    var _components_social_social_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/social/social.component */
    "./src/app/components/social/social.component.ts");
    /* harmony import */


    var _components_articles_posts_posts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/articles/posts/posts.component */
    "./src/app/components/articles/posts/posts.component.ts");
    /* harmony import */


    var _components_articles_posts_posts_post_posts_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/articles/posts/posts-post/posts-post.component */
    "./src/app/components/articles/posts/posts-post/posts-post.component.ts"); // Markdown Files
    // Angular Fire Modules
    // Environment Files
    // App Files


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"], _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_16__["ProjectPostComponent"], _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_17__["StudentsComponent"], _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_18__["StudentsPostComponent"], _components_social_social_component__WEBPACK_IMPORTED_MODULE_19__["SocialComponent"], _components_articles_posts_posts_component__WEBPACK_IMPORTED_MODULE_20__["PostsComponent"], _components_articles_posts_posts_post_posts_post_component__WEBPACK_IMPORTED_MODULE_21__["PostsPostComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].NONE
      })],
      exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styling for the about component */\r\n.about-content { \r\n\tmargin-top:2rem;margin-bottom:2rem;margin-left:auto;margin-right:auto;\r\n\tposition:relative;padding:30px 25px 40px 25px; \r\n\tbox-shadow:0 2px 5px 0 rgba(0,0,0,0.15);\r\n\tfont-size:16px;text-align:center; \r\n\tbackground-color:white;color:rgb(85, 85, 85)\r\n}\r\n.about-content h2 {\r\n\tmargin-bottom:1rem\r\n}\r\n.about-content p {\r\n\tpadding-bottom:1rem\r\n}\r\n/* Smaller screens (phone) */\r\n@media screen and (max-width:766px) {\r\n\t.first {\r\n\t\tmargin-top:6rem\r\n\t}\r\n} \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQztDQUNDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7Q0FDckUsaUJBQWlCLENBQUMsMkJBQTJCO0NBQzdDLHVDQUF1QztDQUN2QyxjQUFjLENBQUMsaUJBQWlCO0NBQ2hDLHNCQUFzQixDQUFDO0FBQ3hCO0FBQ0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQztBQUNEO0FBRUEsNEJBQTRCO0FBQzVCO0NBQ0M7RUFDQztDQUNEO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciB0aGUgYWJvdXQgY29tcG9uZW50ICovXHJcbi5hYm91dC1jb250ZW50IHsgXHJcblx0bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbTttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MzBweCAyNXB4IDQwcHggMjVweDsgXHJcblx0Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xyXG5cdGZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyOyBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2NvbG9yOnJnYig4NSwgODUsIDg1KVxyXG59XHJcbi5hYm91dC1jb250ZW50IGgyIHtcclxuXHRtYXJnaW4tYm90dG9tOjFyZW1cclxufVxyXG4uYWJvdXQtY29udGVudCBwIHtcclxuXHRwYWRkaW5nLWJvdHRvbToxcmVtXHJcbn1cclxuXHJcbi8qIFNtYWxsZXIgc2NyZWVucyAocGhvbmUpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpIHtcclxuXHQuZmlyc3Qge1xyXG5cdFx0bWFyZ2luLXRvcDo2cmVtXHJcblx0fVxyXG59IFxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/posts/posts-post/posts-post.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/articles/posts/posts-post/posts-post.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesPostsPostsPostPostsPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcG9zdHMvcG9zdHMtcG9zdC9wb3N0cy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/articles/posts/posts-post/posts-post.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/articles/posts/posts-post/posts-post.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PostsPostComponent */

  /***/
  function srcAppComponentsArticlesPostsPostsPostPostsPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsPostComponent", function () {
      return PostsPostComponent;
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

    var PostsPostComponent = /*#__PURE__*/function () {
      function PostsPostComponent(route) {
        _classCallCheck(this, PostsPostComponent);

        this.route = route;
      }

      _createClass(PostsPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var articleName = this.route.snapshot.paramMap.get('article');
          this.href = window.location.href;
          this.post = './assets/articles/posts/' + articleName + '.md';
        }
      }]);

      return PostsPostComponent;
    }();

    PostsPostComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PostsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts-post/posts-post.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts-post.component.css */
      "./src/app/components/articles/posts/posts-post/posts-post.component.css"))["default"]]
    })], PostsPostComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/posts/posts.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/articles/posts/posts.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesPostsPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/articles/posts/posts.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/articles/posts/posts.component.ts ***!
    \**************************************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppComponentsArticlesPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent() {
        _classCallCheck(this, PostsComponent);

        this.titles = [//["Creating Your Own Blog Using Hugo"],
        ["Linking A Namecheap Domain To Firebase"], ["Hosting An Angular App On Firebase"], ["Creating A Calculator in C#"], ["Hosting an Angular Application using Netlify"], ["Setting Up A Github Repository and Creating A Local Copy"], ["Adding Photos To Instagram Using A Desktop Computer"], ["Creating A Simple Angular Web Application"], ["How To Organise Your Web Browsing"], ["Organising Your Computer To Increase Productivity"]];
        this.images = [//["../../assets/articles/post-images/createYourOwnBlogUsingHugo/header-dark.jpg"],
        ["../../assets/articles/post-images/linkingANamecheapDomainToFirebase/header-dark.jpg"], ["../../assets/articles/post-images/hostingAnAngularAppOnFirebase/header-dark.jpg"], ["../../assets/articles/post-images/creatingACalculatorInCSharp/header-dark.jpg"], ["../../assets/articles/post-images/hostingAngularApplicationUsingNetlify/header-dark.jpg"], ["../../assets/articles/post-images/settingUpASimpleGithubRemoteAndLocalRepository/header-dark.jpg"], ["../../assets/articles/post-images/uploadImageToInstagramViaDesktop/header-dark.jpg"], ["../../assets/articles/post-images/creatingASimpleAngularWebApplication/header-dark.jpg"], ["../../assets/articles/post-images/howToOrganiseYourWebBrowsing/header-dark.jpg"], ["../../assets/articles/post-images/organisingYourComputerToIncreaseProductivity/header-dark.jpg"]];
        this.dates = [//["Coming Soon!"],
        ["4 Oct 2020"], ["3 Oct 2020"], ["26 Sept 2020"], ["30 Aug 2020"], ["22 Aug 2020"], ["11 Aug 2020"], ["04 Aug 2020"], ["25 May 2020"], ["16 May 2020"]];
        this.links = [// ["/posts/post/createYourOwnBlogUsingHugo"],
        ["/posts/post/linkingANamecheapDomainToFirebase"], ["/posts/post/hostingAnAngularAppOnFirebase"], ["/posts/post/creatingACalculatorInCSharp"], ["/posts/post/hostingAngularApplicationUsingNetlify"], ["/posts/post/settingUpASimpleGithubRemoteAndLocalRepository"], ["/posts/post/uploadImageToInstagramViaDesktop"], ["/posts/post/creatingASimpleAngularWebApplication"], ["/posts/post/howToOrganiseYourWebBrowsing"], ["/posts/post/organisingYourComputerToIncreaseProductivity"]];
        this.tags = [//["Hugo"],
        ["Hosting • Firebase • Namecheap"], ["Angular • Hosting • Firebase"], ["C#"], ["Angular • Netlify • Hosting"], ["Version Control • Github"], ["Design • Social Media"], ["Angular"], ["Organisation"], ["Organisation"]];
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          this.href = window.location.href;
          this.hrefId = this.href.substring(this.href.lastIndexOf("/") + 1, this.href.length);
        }
      }, {
        key: "getURL",
        value: function getURL(i) {
          return this.images[i];
        }
      }, {
        key: "searchbar",
        value: function searchbar() {
          var input, filter, ul, li, a, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUL");
          li = ul.getElementsByTagName("section");

          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("div")[0];
            txtValue = a.textContent || a.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/posts/posts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.css */
      "./src/app/components/articles/posts/posts.component.css"))["default"]]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/projects/project-post/project-post.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/articles/projects/project-post/project-post.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesProjectsProjectPostProjectPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcHJvamVjdHMvcHJvamVjdC1wb3N0L3Byb2plY3QtcG9zdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/articles/projects/project-post/project-post.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/articles/projects/project-post/project-post.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProjectPostComponent */

  /***/
  function srcAppComponentsArticlesProjectsProjectPostProjectPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPostComponent", function () {
      return ProjectPostComponent;
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

    var ProjectPostComponent = /*#__PURE__*/function () {
      function ProjectPostComponent(route) {
        _classCallCheck(this, ProjectPostComponent);

        this.route = route;
      }

      _createClass(ProjectPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var articleName = this.route.snapshot.paramMap.get('article');
          this.post = './assets/articles/projects-posts/' + articleName + '.md';
        }
      }]);

      return ProjectPostComponent;
    }();

    ProjectPostComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProjectPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-post.component.css */
      "./src/app/components/articles/projects/project-post/project-post.component.css"))["default"]]
    })], ProjectPostComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/projects/projects.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/articles/projects/projects.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".projects {\r\n    padding-bottom: 50px\r\n}\r\n.allCards {\r\n    padding-top:50px;\r\n}\r\n.project-card {\r\n    margin-bottom: 40px; padding-bottom:50px; box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1); border: none;\r\n}\r\n.text-muted {\r\n    color: rgba(0, 0, 0, 0.3)\r\n}\r\n/* Smallest screens (phones) */\r\n@media screen and (max-width:766px) {\r\n    .allCards {\r\n        padding-top:100px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSwwQ0FBMEMsRUFBRSxZQUFZO0FBQ3RHO0FBQ0E7SUFDSTtBQUNKO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxyXG59XHJcbi5hbGxDYXJkcyB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDsgcGFkZGluZy1ib3R0b206NTBweDsgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKVxyXG59XHJcblxyXG4vKiBTbWFsbGVzdCBzY3JlZW5zIChwaG9uZXMpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpIHtcclxuICAgIC5hbGxDYXJkcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/articles/projects/projects.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/articles/projects/projects.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsArticlesProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        this.titles = [["Cyan X"], ["3D Street Racing Game"], ["Ice Capades"]];
        this.images = [["../../assets/articles/projects-images/cyanX/preview.png"], ["../../assets/articles/projects-images/racingGame/gameplay.PNG"], ["../../assets/articles/projects-images/iceCapades/preview.jpg"]];
        this.descriptions = [["A 2D platformer game set in the distant future. Solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals..."], ["This is a modified version of the street racing game sourced from this Microsoft's Github repository. The original game is a 3D street racing game where the player must avoid the obstacles on the road..."], ["Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change on the environment. You must pass through multiple levels, interact with objects, solve puzzles..."]];
        this.links = [["/projects/post/cyanX"], ["/projects/post/streetRacingGame"], ["/projects/post/iceCapades"]];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postArray = [0, 1, 2];
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/components/articles/projects/projects.component.css"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/students/students-post/students-post.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/articles/students/students-post/students-post.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesStudentsStudentsPostStudentsPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvc3R1ZGVudHMvc3R1ZGVudHMtcG9zdC9zdHVkZW50cy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/articles/students/students-post/students-post.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/articles/students/students-post/students-post.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: StudentsPostComponent */

  /***/
  function srcAppComponentsArticlesStudentsStudentsPostStudentsPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsPostComponent", function () {
      return StudentsPostComponent;
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

    var StudentsPostComponent = /*#__PURE__*/function () {
      function StudentsPostComponent(route) {
        _classCallCheck(this, StudentsPostComponent);

        this.route = route;
      }

      _createClass(StudentsPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var articleName = this.route.snapshot.paramMap.get('article');
          this.post = './assets/articles/students-posts/' + articleName + '.md';
        }
      }]);

      return StudentsPostComponent;
    }();

    StudentsPostComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    StudentsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students-post.component.css */
      "./src/app/components/articles/students/students-post/students-post.component.css"))["default"]]
    })], StudentsPostComponent);
    /***/
  },

  /***/
  "./src/app/components/articles/students/students.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/articles/students/students.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesStudentsStudentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvc3R1ZGVudHMvc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/articles/students/students.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/articles/students/students.component.ts ***!
    \********************************************************************/

  /*! exports provided: StudentsComponent */

  /***/
  function srcAppComponentsArticlesStudentsStudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsComponent", function () {
      return StudentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentsComponent = /*#__PURE__*/function () {
      function StudentsComponent() {
        _classCallCheck(this, StudentsComponent);

        this.titles = [["Tips on Making The Most Out Of Your First Year At Uni"], ["Decluttering Your Home"], ["Ways To Be More Organised"]];
        this.images = [["../../assets/articles/students-images/tipsOnMakingTheMostOutOfYourFirstYearUni/header-dark.jpg"], ["../../assets/articles/students-images/declutteringYourHome/header-dark.jpg"], ["../../assets/articles/students-images/waysToBeMoreOrganised/header-dark.jpg"]];
        this.dates = [["8 June 2020"], ["12 May 2020"], ["19 May 2020"]];
        this.links = [["/students/post/tipsOnMakingTheMostOutOfYourFirstYearUni"], ["/students/post/declutteringYourHome"], ["/students/post/waysToBeMoreOrganised"]];
        this.tags = [["Uni"], ["Organisation"], ["Organisation"]];
      }

      _createClass(StudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postArray = [0, 1, 2, 3, 4, 5];
        }
      }, {
        key: "getURL",
        value: function getURL(i) {
          return this.images[i];
        }
      }, {
        key: "searchbar",
        value: function searchbar() {
          var input, filter, ul, li, a, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUL");
          li = ul.getElementsByTagName("section");

          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("div")[0];
            txtValue = a.textContent || a.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
      }]);

      return StudentsComponent;
    }();

    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students.component.css */
      "./src/app/components/articles/students/students.component.css"))["default"]]
    })], StudentsComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styling for the footer component */ \r\nfooter {\r\n    background-color:#363a40;position:relative;bottom:0;height:250px;padding:50px;margin-top:0px;text-align:center\r\n} \r\n.social-footer {\r\n    margin-top:20px\r\n} \r\n.social-footer a {\r\n    padding:10px 20px;color:white \r\n} \r\n.social-footer a:hover {\r\n    background-color:lightgrey;border-radius:25px;color:#272727 \r\n} \r\n.copy {\r\n    margin-top:30px;font-size:16px;color:whitesmoke \r\n} \r\n.copy p {\r\n    text-align:center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0lBQ0ksd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO0FBQ2pHO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxpQkFBaUIsQ0FBQztBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDbEQ7QUFDQTtJQUNJLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDbkM7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBmb290ZXIgY29tcG9uZW50ICovIFxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzYzYTQwO3Bvc2l0aW9uOnJlbGF0aXZlO2JvdHRvbTowO2hlaWdodDoyNTBweDtwYWRkaW5nOjUwcHg7bWFyZ2luLXRvcDowcHg7dGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4uc29jaWFsLWZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHhcclxufVxyXG4uc29jaWFsLWZvb3RlciBhIHtcclxuICAgIHBhZGRpbmc6MTBweCAyMHB4O2NvbG9yOndoaXRlIFxyXG59XHJcbi5zb2NpYWwtZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7Ym9yZGVyLXJhZGl1czoyNXB4O2NvbG9yOiMyNzI3MjcgXHJcbn1cclxuLmNvcHkge1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOndoaXRlc21va2UgXHJcbn1cclxuLmNvcHkgcCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var FooterComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/social/social.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/social/social.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSocialSocialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Styling for the social component */\r\n.contact-card {\r\n    border:none;border-top:1px solid #dddddd;background-color:whitesmoke;padding:0px\r\n}\r\n.space-between-links {\r\n    padding:0px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0lBQ0ksV0FBVyxDQUFDLDRCQUE0QixDQUFDLDJCQUEyQixDQUFDO0FBQ3pFO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBzb2NpYWwgY29tcG9uZW50ICovXHJcbi5jb250YWN0LWNhcmQge1xyXG4gICAgYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZGRkZDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7cGFkZGluZzowcHhcclxufVxyXG4uc3BhY2UtYmV0d2Vlbi1saW5rcyB7XHJcbiAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/social/social.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/social/social.component.ts ***!
    \*******************************************************/

  /*! exports provided: SocialComponent */

  /***/
  function srcAppComponentsSocialSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialComponent", function () {
      return SocialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SocialComponent = /*#__PURE__*/function () {
      function SocialComponent() {
        _classCallCheck(this, SocialComponent);
      }

      _createClass(SocialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialComponent;
    }();

    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-social',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./social.component.css */
      "./src/app/components/social/social.component.css"))["default"]]
    })], SocialComponent);
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
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyAulgpBe7kTKWfv-WCE34LYPoApmcGb-Yw",
        authDomain: "vondreii.firebaseapp.com",
        databaseURL: "https://vondreii.firebaseio.com",
        projectId: "vondreii",
        storageBucket: "vondreii.appspot.com",
        messagingSenderId: "1028729098630",
        appId: "1:1028729098630:web:597fa29e9a67fb71da5c07",
        measurementId: "G-5R0HJRVCN3"
      }
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Sharl\Documents\My Documents\Side Projects\Vondreii\dev\vondreii-site\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map