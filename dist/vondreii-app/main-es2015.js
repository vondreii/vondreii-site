(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-navbar></app-navbar> -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<div class=\"bg-color\">\r\n  <div class=\"rows\"> \r\n    <!-- Designer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content first\"> \r\n        <h2>Designer</h2>\r\n        <p>I love experimenting with different designs before implementing websites.</p>\r\n        <img src=\"../../assets/about/designer.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Software Developer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Software Developer</h2>\r\n        <p>I develop games and simple applications that solve problems (Java or C#).</p>\r\n        <img src=\"../../assets/about/developer.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Photographer -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Photographer</h2>\r\n        <p>I take photos as a hobby and edit them in lightroom or VSCO.</p>\r\n        <img src=\"../../assets/about/photography.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n    <!-- Traveller -->\r\n    <div class=\"column-4\">\r\n      <div class=\"about-content\"> \r\n        <h2>Traveller</h2>\r\n        <p>Anytime I have a break, I always take the opportunity to travel somewhere new.</p>\r\n        <img src=\"../../assets/about/traveller.jpg\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n</div>\r\n<!-- Social links for instagram, linkedIn and Github -->\r\n<app-social></app-social>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding-post/coding-post.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding-post/coding-post.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<section class=\"bg-color\">\r\n  <div class=\"container search-container\">\r\n    <!-- Search input box -->\r\n    <input type=\"text\" id=\"myInput\" (keyup)=\"searchbar()\" placeholder=\"Search Coding Posts (by title, language, year..)\" title=\"SearchBar\">\r\n    <!-- List of all posts -->\r\n    <div id=\"myUL\">\r\n      <article *ngFor=\"let i of postArray\">\r\n        <!-- display each article card with it's own background image  -->\r\n        <section class=\"card\" [ngStyle]=\"{'background-image': 'url(' + getURL(i) + ')'}\">\r\n          <div class=\"padding\">\r\n            <!-- Tags on the top-right corner -->\r\n            <div class=\"tags\">\r\n              <div class=\"tag\">{{tags[i]}}</div>\r\n            </div>\r\n            <!-- Article information -->\r\n            <h1>{{titles[i]}}</h1>\r\n            <div class=\"date\">{{dates[i]}}</div>\r\n            <p>Something something something…</p>\r\n            <div class=\"read-more-container\">\r\n              <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <!-- End of article -->\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<section class=\"bg-color projects\">\r\n  <div class=\"container rows allCards\">\r\n    <!-- List all projects -->\r\n    <div class=\"project-card column-3\" *ngFor=\"let i of postArray\">\r\n      <!-- Image for each card -->\r\n      <img class=\"card-img-top\" src={{images[i]}} alt=\"img\">\r\n      <!-- Card information -->\r\n      <div class=\"card-body\">\r\n        <h5>{{titles[i]}}</h5>\r\n        <p><small class=\"text-muted\">{{descriptions[i]}}</small></p>\r\n        <div class=\"read-more-container\">\r\n          <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End of all projects -->\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<section class=\"bg-color\">\r\n  <div class=\"container search-container\">\r\n    <!-- Search input box -->\r\n    <input type=\"text\" id=\"myInput\" (keyup)=\"searchbar()\" placeholder=\"Search Posts for Students (by title, topic, year..)\" title=\"SearchBar\">\r\n    <!-- List of all posts -->\r\n    <div id=\"myUL\">\r\n      <article *ngFor=\"let i of postArray\">\r\n        <!-- display each article card with it's own background image  -->\r\n        <section class=\"card\" [ngStyle]=\"{'background-image': 'url(' + getURL(i) + ')'}\">\r\n          <div class=\"padding\">\r\n            <!-- Tags on the top-right corner -->\r\n            <div class=\"tags\">\r\n              <div class=\"tag\">{{tags[i]}}</div>\r\n            </div>\r\n            <!-- Article information -->\r\n            <h1>{{titles[i]}}</h1>\r\n            <div class=\"date\">{{dates[i]}}</div>\r\n            <p>Something something something…</p>\r\n            <div class=\"read-more-container\">\r\n              <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <!-- End of article -->\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev-post/webdev-post.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev-post/webdev-post.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<!-- Display markdown file -->\r\n<div markdown [src]=\"post\"></div>\r\n<!-- Contact links -->\r\n<app-social></app-social>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If the screen is smaller, show the collapsable navbar -->\r\n<div class=\"show-navbar\">\r\n  <app-navbar></app-navbar>\r\n</div>\r\n<!-- If the screen is bigger, show the header -->\r\n<div class=\"show-header\">\r\n  <app-header></app-header>\r\n</div>\r\n<section class=\"bg-color\">\r\n  <div class=\"container search-container\">\r\n    <!-- Search input box -->\r\n    <input type=\"text\" id=\"myInput\" (keyup)=\"searchbar()\" placeholder=\"Search Web Dev posts (by title, language, year..)\" title=\"SearchBar\">\r\n    <!-- List of all posts -->\r\n    <div id=\"myUL\">\r\n      <article *ngFor=\"let i of postArray\">\r\n        <!-- display each article card with it's own background image  -->\r\n        <section class=\"card\" [ngStyle]=\"{'background-image': 'url(' + getURL(i) + ')'}\">\r\n          <div class=\"padding\">\r\n            <!-- Tags on the top-right corner -->\r\n            <div class=\"tags\">\r\n              <div class=\"tag\">{{tags[i]}}</div>\r\n            </div>\r\n            <!-- Article information -->\r\n            <h1>{{titles[i]}}</h1>\r\n            <div class=\"date\">{{dates[i]}}</div>\r\n            <p>Something something something…</p>\r\n            <div class=\"read-more-container\">\r\n              <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <!-- End of article -->\r\n      </article>\r\n    </div>\r\n    <!-- Loop of posts - https://codepen.io/MattRuddick/pen/xaZXgE -->\r\n    <!-- <div class=\"card-columns\" style=\"color:black\">\r\n      <div class=\"card\" *ngFor=\"let i of postArray\">\r\n        <h1>HTML Syntax</h1>\r\n        <img class=\"card-img-top\" src={{images[i]}} alt=\"img\">\r\n        <h1>HTML Syntax</h1>\r\n        <div class=\"padding\">\r\n          <div class=\"tags\">\r\n            <div class=\"tag\">{{tags[i]}}</div>\r\n          </div>\r\n          <h1>{{titles[i]}}</h1>\r\n          <div class=\"date\">{{dates[i]}}</div>\r\n          <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>\r\n          <div class=\"read-more-project-button-container\">\r\n            <a routerLink=\"{{links[i]}}\" class=\"button read-more-button second-button\">Read More >></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</section>\r\n\r\n<!-- https://codepen.io/Booligoosh/pen/mKPpQp -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div style=\"background-color:whitesmoke\">\r\n  <!-- Parallax and main heading -->\r\n  <div class=\"parallax\" style=\"height: 350px;background-image: url('../../../assets/contact/header.jpg');\">\r\n    <div class=\"imageTextCollage\"><a class=\"photoCred\" style=\"margin-top: 300px; float: right; position:relative\" href=\"https://unsplash.com/@heytowner\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Download free do whatever you want high-resolution photos from Taylor Smith\"><span style=\"display:inline-block;padding:2px 3px\"><svg xmlns=\"http://www.w3.org/2000/svg\" style=\"height:12px;width:auto;vertical-align:middle;top:-2px;fill:white\" viewBox=\"0 0 32 32\"><title>unsplash-logo</title><path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path></svg></span><span style=\"display:inline-block;padding:2px 3px\">John Towner</span></a></div>\r\n  </div>\r\n  <div class=\"parallax\" style=\"height: 150px;\">\r\n    <h2 class=\"main-heading\"><span class=\"heading-border\">Contact</span></h2>\r\n  </div>\r\n  <div class=\"form\">\r\n    <p class=\"paragraph-center\"> Just write your name, email and message and I will get back to you as soon as possible. </p>\r\n    <form name=\"contact\" method=\"POST\" data-netlify=\"true\">\r\n        <input name=\"name\" type=\"text\" class=\"feedback-input\" placeholder=\"Name\" />   \r\n        <input name=\"email\" type=\"text\" class=\"feedback-input\" placeholder=\"Email\" />\r\n        <textarea name=\"text\" class=\"feedback-input\" placeholder=\"Comment\"></textarea>\r\n        <input type=\"submit\" value=\"SUBMIT\"/>\r\n    </form>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"contact-card\">\r\n    <br><br>\r\n    <div style=\"text-align:center\">\r\n        <a href=\"https://www.instagram.com/vondreii\"><img src=\"../../assets/social/instagram.png\" alt=\"image\"/></a><span style=\"padding:10px\"></span>\r\n        <a href=\"https://www.linkedin.com/in/sharlene-von-drehnen\"><img src=\"../../assets/social/linkedin.png\" alt=\"image\"/></a><span style=\"padding:10px\"></span>\r\n        <a href=\"https://github.com/vondreii\"><img src=\"../../assets/social/github.png\" alt=\"image\"/></a><span style=\"padding:10px\"></span>\r\n    </div>\r\n    <br><br>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <div class=\"social-footer\">\r\n      <!-- Github -->\r\n      <a data-hint=\"Github\" title=\"Github\" href=\"https://github.com/vondreii\" rel=\"me\">\r\n        <i class=\"fa fa-github-alt\"></i>\r\n      </a>\r\n      <!-- LinkedIn -->\r\n      <a data-hint=\"LinkedIn\" title=\"LinkedIn\" href=\"https://www.linkedin.com/in/sharlene-von-drehnen\" rel=\"me\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </a>\r\n      <!-- About/Contact -->\r\n      <a data-hint=\"Email\" title=\"Email\" routerLink=\"about\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n      </a>\r\n    </div>\r\n    <br>\r\n    <!-- Copyright -->\r\n    <div class=\"copy\">\r\n      <p>&copy; 2020 Copyright <strong>SVD</strong> | LAST MODIFIED <strong>08/06/2020</strong></p>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <div class=\"maxwidth\">\r\n        <!-- Temporary logo -->\r\n        <!-- <img src=\"../../../assets/logos/angular.png\" alt=\"img\" class=\"logo\"> -->\r\n        <!-- Links -->\r\n        <ul class=\"main-nav\">\r\n            <li><a routerLink=\"/webdev\">Web Development</a></li>\r\n            <li><a routerLink=\"/coding\">Coding</a></li>\r\n            <li><a routerLink=\"/students\">For Students</a></li>\r\n            <li><a routerLink=\"/projects\">Projects</a></li>\r\n            <li><a routerLink=\"/about\">About</a></li>\r\n        </ul>\r\n    </div>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Bootstrap navbar -->\r\n<nav>\r\n  <div class=\"navbar navbar-expand-md navbar-light\">\r\n    <!-- Vondreii Logo -->\r\n    <a routerLink=\"/webdev\">VONDREII</a>\r\n    <!-- Hamburger button -->\r\n    <button type=\"button\" class=\"navbar-toggler hamburger\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\r\n        <span class=\"navbar-toggler-icon hamburger\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n        <div class=\"navbar-nav center\">\r\n            <!-- The ' | ' line -->\r\n            <div class=\"separator-vertical\">\r\n              <a href=\"#\" class=\"nav-item nav-link disabled\" style=\"color:grey\">|</a>\r\n            </div>\r\n            <!-- Links -->\r\n            <a routerLink=\"/webdev\">WEB DEV</a>\r\n            <a routerLink=\"/coding\">CODING</a>\r\n            <a routerLink=\"/students\">FOR STUDENTS</a>\r\n            <a routerLink=\"/projects\">PROJECTS</a>\r\n            <a routerLink=\"/about\">ABOUT</a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography-location/photography-location.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography-location/photography-location.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<!-- #region 1st Parallax image-->\r\n<div class=\"parallax\" style=\"height: 350px; background-image: url('../../assets/photography/blue-mountains/blue-mountains-header-cropped2.png');\">\r\n  <div class=\"imageTextCollage\">\r\n    <br><br>\r\n    <h3 class=\"sidebar-bottom-headings\"><b>{{loc}}</b></h3><h3><b>▼</b></h3>\r\n  </div>\r\n</div>\r\n<!-- <ul>\r\n  <li *ngFor=\"let location of collection | async\"  role=\"listitem\">\r\n    <p> {{loc}}</p>\r\n  </li>\r\n</ul> -->\r\n<p></p>\r\n\r\n<div class=\"rows\">\r\n  <div class=\"column-4\">\r\n    <img *ngFor=\"let img of col1\" src=\"{{img}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"column-4\">\r\n    <img *ngFor=\"let img of col2\" src=\"{{img}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"column-4\">\r\n    <img *ngFor=\"let img of col3\" src=\"{{img}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"column-4\">\r\n    <img *ngFor=\"let img of col4\" src=\"{{img}}\" alt=\"\">\r\n  </div>\r\n</div>\r\n<br><br>\r\n\r\n<div class=\"more-like-this\">\r\n  <br><h3 class=\"sidebar-bottom-headings more-like-this-heading\">MORE LIKE THIS</h3>\r\n  <div class=\"spacing\"></div>\r\n  <div class=\"rows\"> \r\n    <div class=\"column-2 blog-image-container\">\r\n      <div class=\"image-container\">\r\n          <a routerLink={{moreLikeThis1RouterLink}}>\r\n          <img src={{moreLikeThis1Background}} alt=\"\" class=\"image\">\r\n          <div class=\"centered\">{{moreLikeThis1Location}}</div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"column-2 blog-image-container\">\r\n      <div class=\"image-container\">\r\n          <a routerLink={{moreLikeThis2RouterLink}}>\r\n          <img src={{moreLikeThis2Background}} alt=\"\" class=\"image\">\r\n          <div class=\"centered\">{{moreLikeThis2Location}}</div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n<!-- <div *ngFor=\"let photos of collectionPhotos | async\">\r\n  {{photos.photos.length}}\r\n\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div style=\"background-color:whitesmoke\">\r\n  <!-- Parallax and main heading -->\r\n  <div class=\"parallax\" style=\"height: 350px;background-image: url('../../../assets/photography/header.jpg');\">\r\n    <div class=\"imageTextCollage\"><a class=\"photoCred\" style=\"margin-top: 300px; float: right; position:relative\" href=\"https://unsplash.com/@vondreii\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Download free do whatever you want high-resolution photos from Taylor Smith\"><span style=\"display:inline-block;padding:2px 3px\"><svg xmlns=\"http://www.w3.org/2000/svg\" style=\"height:12px;width:auto;vertical-align:middle;top:-2px;fill:white\" viewBox=\"0 0 32 32\"><title>unsplash-logo</title><path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path></svg></span><span style=\"display:inline-block;padding:2px 3px\">Vondreii</span></a></div>\r\n  </div>\r\n  <div class=\"parallax\" style=\"height: 150px;\">\r\n    <h2 class=\"main-heading\"><span class=\"heading-border\">Photography</span></h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"container\">\r\n      <div class=\"card-columns\">\r\n        <!-- Loop of projects -->\r\n        <div class=\"card\" *ngFor=\"let i of postArray\">\r\n          <img class=\"card-img-top\" src={{images[i]}} alt=\"img\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{titles[i]}}</h5>\r\n            <p><small class=\"text-muted\">{{descriptions[i]}}</small></p>\r\n            <div class=\"read-more-container\">\r\n              <a routerLink=\"{{links[i]}}\" class=\"button\">Read More >></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- #endregion -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Social links for instagram, linkedIn and Github -->\n<div class=\"contact-card\">\n    <br><br>\n    <div class=\"center\">\n        <!-- Instagram -->\n        <a href=\"https://www.instagram.com/vondreii\">\n            <img src=\"../../assets/social/instagram.png\" alt=\"image\"/>\n        </a>\n        <span class=\"space-between-links\"></span>\n        <!-- LinkedIn -->\n        <a href=\"https://www.linkedin.com/in/sharlene-von-drehnen\">\n            <img src=\"../../assets/social/linkedin.png\" alt=\"image\"/>\n        </a>\n        <span class=\"space-between-links\"></span>\n        <!-- Github -->\n        <a href=\"https://github.com/vondreii\">\n            <img src=\"../../assets/social/github.png\" alt=\"image\"/>\n        </a>\n        <span class=\"space-between-links\"></span>\n    </div>\n    <br><br>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/articles/projects/projects.component */ "./src/app/components/articles/projects/projects.component.ts");
/* harmony import */ var _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/articles/projects/project-post/project-post.component */ "./src/app/components/articles/projects/project-post/project-post.component.ts");
/* harmony import */ var _components_photography_photography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photography/photography.component */ "./src/app/components/photography/photography.component.ts");
/* harmony import */ var _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/photography/photography-location/photography-location.component */ "./src/app/components/photography/photography-location/photography-location.component.ts");
/* harmony import */ var _components_articles_webdev_webdev_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/articles/webdev/webdev.component */ "./src/app/components/articles/webdev/webdev.component.ts");
/* harmony import */ var _components_articles_webdev_webdev_post_webdev_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/articles/webdev/webdev-post/webdev-post.component */ "./src/app/components/articles/webdev/webdev-post/webdev-post.component.ts");
/* harmony import */ var _components_articles_coding_coding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/articles/coding/coding.component */ "./src/app/components/articles/coding/coding.component.ts");
/* harmony import */ var _components_articles_coding_coding_post_coding_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/articles/coding/coding-post/coding-post.component */ "./src/app/components/articles/coding/coding-post/coding-post.component.ts");
/* harmony import */ var _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/articles/students/students.component */ "./src/app/components/articles/students/students.component.ts");
/* harmony import */ var _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/articles/students/students-post/students-post.component */ "./src/app/components/articles/students/students-post/students-post.component.ts");
















const routes = [
    { path: '', component: _components_articles_webdev_webdev_component__WEBPACK_IMPORTED_MODULE_10__["WebdevComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    // Webdev posts
    { path: 'webdev', component: _components_articles_webdev_webdev_component__WEBPACK_IMPORTED_MODULE_10__["WebdevComponent"] },
    { path: 'webdev/post/:article', component: _components_articles_webdev_webdev_post_webdev_post_component__WEBPACK_IMPORTED_MODULE_11__["WebdevPostComponent"] },
    // Coding posts
    { path: 'coding', component: _components_articles_coding_coding_component__WEBPACK_IMPORTED_MODULE_12__["CodingComponent"] },
    { path: 'coding/post/:article', component: _components_articles_coding_coding_post_coding_post_component__WEBPACK_IMPORTED_MODULE_13__["CodingPostComponent"] },
    // Students posts
    { path: 'students', component: _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_14__["StudentsComponent"] },
    { path: 'students/post/:article', component: _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_15__["StudentsPostComponent"] },
    // Projects
    { path: 'projects', component: _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'projects/post/:article', component: _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_7__["ProjectPostComponent"] },
    // Photography pages
    { path: 'photography', component: _components_photography_photography_component__WEBPACK_IMPORTED_MODULE_8__["PhotographyComponent"] },
    { path: 'photography/blue-mountains', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/central-coast', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/hobart', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/hunter-valley', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/manila', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/melbourne', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/newcastle', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/rural-philippines', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
    { path: 'photography/sydney', component: _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_9__["PhotographyLocationComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Screen definitions */\r\n\r\n/* Bigger screens (desktop) */\r\n\r\n@media screen and (min-width:767px) {\r\n}\r\n\r\n/* Medium devices (ipads, small desktop) #1 */\r\n\r\n@media screen and (min-width:1101px) and (max-width:1400px) {\r\n}\r\n\r\n/* Medium devices (ipads) #2 */\r\n\r\n@media screen and (min-width:901px) and (max-width:1100px) {\r\n}\r\n\r\n/* Medium devices (ipads) #3 */\r\n\r\n@media screen and (min-width:767px) and (max-width:900px) {\r\n}\r\n\r\n/* Smallest screens (phones) */\r\n\r\n@media screen and (max-width:766px) {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2Qiw2QkFBNkI7O0FBQzdCO0FBQ0E7O0FBQ0EsNkNBQTZDOztBQUM3QztBQUNBOztBQUNBLDhCQUE4Qjs7QUFDOUI7QUFDQTs7QUFDQSw4QkFBOEI7O0FBQzlCO0FBQ0E7O0FBQ0EsOEJBQThCOztBQUM5QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTY3JlZW4gZGVmaW5pdGlvbnMgKi9cclxuXHJcbi8qIEJpZ2dlciBzY3JlZW5zIChkZXNrdG9wKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSB7XHJcbn0gXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChpcGFkcywgc21hbGwgZGVza3RvcCkgIzEgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTAxcHgpIGFuZCAobWF4LXdpZHRoOjE0MDBweCkge1xyXG59IFxyXG4vKiBNZWRpdW0gZGV2aWNlcyAoaXBhZHMpICMyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAxcHgpIGFuZCAobWF4LXdpZHRoOjExMDBweCkge1xyXG59IFxyXG4vKiBNZWRpdW0gZGV2aWNlcyAoaXBhZHMpICMzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpIGFuZCAobWF4LXdpZHRoOjkwMHB4KSB7XHJcbn0gXHJcbi8qIFNtYWxsZXN0IHNjcmVlbnMgKHBob25lcykgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjZweCkge1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'vondreii-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/articles/projects/projects.component */ "./src/app/components/articles/projects/projects.component.ts");
/* harmony import */ var _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/articles/projects/project-post/project-post.component */ "./src/app/components/articles/projects/project-post/project-post.component.ts");
/* harmony import */ var _components_photography_photography_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/photography/photography.component */ "./src/app/components/photography/photography.component.ts");
/* harmony import */ var _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/photography/photography-location/photography-location.component */ "./src/app/components/photography/photography-location/photography-location.component.ts");
/* harmony import */ var _components_articles_webdev_webdev_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/articles/webdev/webdev.component */ "./src/app/components/articles/webdev/webdev.component.ts");
/* harmony import */ var _components_articles_webdev_webdev_post_webdev_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/articles/webdev/webdev-post/webdev-post.component */ "./src/app/components/articles/webdev/webdev-post/webdev-post.component.ts");
/* harmony import */ var _components_articles_coding_coding_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/articles/coding/coding.component */ "./src/app/components/articles/coding/coding.component.ts");
/* harmony import */ var _components_articles_coding_coding_post_coding_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/articles/coding/coding-post/coding-post.component */ "./src/app/components/articles/coding/coding-post/coding-post.component.ts");
/* harmony import */ var _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/articles/students/students.component */ "./src/app/components/articles/students/students.component.ts");
/* harmony import */ var _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/articles/students/students-post/students-post.component */ "./src/app/components/articles/students/students-post/students-post.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");



// Markdown Files


// Angular Fire Modules




// Environment Files

// App Files


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
            _components_articles_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"],
            _components_articles_projects_project_post_project_post_component__WEBPACK_IMPORTED_MODULE_17__["ProjectPostComponent"],
            _components_photography_photography_component__WEBPACK_IMPORTED_MODULE_18__["PhotographyComponent"],
            _components_photography_photography_location_photography_location_component__WEBPACK_IMPORTED_MODULE_19__["PhotographyLocationComponent"],
            _components_articles_webdev_webdev_component__WEBPACK_IMPORTED_MODULE_20__["WebdevComponent"],
            _components_articles_webdev_webdev_post_webdev_post_component__WEBPACK_IMPORTED_MODULE_21__["WebdevPostComponent"],
            _components_articles_coding_coding_component__WEBPACK_IMPORTED_MODULE_22__["CodingComponent"],
            _components_articles_coding_coding_post_coding_post_component__WEBPACK_IMPORTED_MODULE_23__["CodingPostComponent"],
            _components_articles_students_students_component__WEBPACK_IMPORTED_MODULE_24__["StudentsComponent"],
            _components_articles_students_students_post_students_post_component__WEBPACK_IMPORTED_MODULE_25__["StudentsPostComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
            _components_social_social_component__WEBPACK_IMPORTED_MODULE_27__["SocialComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].NONE })
        ],
        exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styling for the about component */\r\n.about-content { \r\n\tmargin-top:2rem;margin-bottom:2rem;margin-left:auto;margin-right:auto;\r\n\tposition:relative;padding:30px 25px 40px 25px; \r\n\tbox-shadow:0 2px 5px 0 rgba(0,0,0,0.15);\r\n\tfont-size:16px;text-align:center; \r\n\tbackground-color:white;color:rgb(85, 85, 85)\r\n}\r\n.about-content h2 {\r\n\tmargin-bottom:1rem\r\n}\r\n.about-content p {\r\n\tpadding-bottom:1rem\r\n}\r\n/* Smaller screens (phone) */\r\n@media screen and (max-width:766px) {\r\n\t.first {\r\n\t\tmargin-top:6rem\r\n\t}\r\n} \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQztDQUNDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7Q0FDckUsaUJBQWlCLENBQUMsMkJBQTJCO0NBQzdDLHVDQUF1QztDQUN2QyxjQUFjLENBQUMsaUJBQWlCO0NBQ2hDLHNCQUFzQixDQUFDO0FBQ3hCO0FBQ0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQztBQUNEO0FBRUEsNEJBQTRCO0FBQzVCO0NBQ0M7RUFDQztDQUNEO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciB0aGUgYWJvdXQgY29tcG9uZW50ICovXHJcbi5hYm91dC1jb250ZW50IHsgXHJcblx0bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbTttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MzBweCAyNXB4IDQwcHggMjVweDsgXHJcblx0Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xyXG5cdGZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyOyBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2NvbG9yOnJnYig4NSwgODUsIDg1KVxyXG59XHJcbi5hYm91dC1jb250ZW50IGgyIHtcclxuXHRtYXJnaW4tYm90dG9tOjFyZW1cclxufVxyXG4uYWJvdXQtY29udGVudCBwIHtcclxuXHRwYWRkaW5nLWJvdHRvbToxcmVtXHJcbn1cclxuXHJcbi8qIFNtYWxsZXIgc2NyZWVucyAocGhvbmUpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpIHtcclxuXHQuZmlyc3Qge1xyXG5cdFx0bWFyZ2luLXRvcDo2cmVtXHJcblx0fVxyXG59IFxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/articles/coding/coding-post/coding-post.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/articles/coding/coding-post/coding-post.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvY29kaW5nL2NvZGluZy1wb3N0L2NvZGluZy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/articles/coding/coding-post/coding-post.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/articles/coding/coding-post/coding-post.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CodingPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodingPostComponent", function() { return CodingPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CodingPostComponent = class CodingPostComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('article');
        this.post = './assets/articles/coding-posts/' + articleName + '.md';
    }
};
CodingPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CodingPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coding-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coding-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding-post/coding-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coding-post.component.css */ "./src/app/components/articles/coding/coding-post/coding-post.component.css")).default]
    })
], CodingPostComponent);



/***/ }),

/***/ "./src/app/components/articles/coding/coding.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/articles/coding/coding.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvY29kaW5nL2NvZGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/articles/coding/coding.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/articles/coding/coding.component.ts ***!
  \****************************************************************/
/*! exports provided: CodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodingComponent", function() { return CodingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodingComponent = class CodingComponent {
    constructor() {
        this.titles = [
            ["Setting Up A Github Repository and Creating A Local Copy"]
        ];
        this.images = [
            ["../../assets/articles/coding-images/settingUpASimpleGithubRemoteAndLocalRepository/header-dark.jpg"]
        ];
        this.dates = [
            ["22 Aug 2020"]
        ];
        this.links = [
            ["/coding/post/settingUpASimpleGithubRemoteAndLocalRepository"]
        ];
        this.tags = [
            ["Version Control, Github"]
        ];
    }
    ngOnInit() {
        this.postArray = [0];
    }
    getURL(i) {
        return this.images[i];
    }
    searchbar() {
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
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
};
CodingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/coding/coding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coding.component.css */ "./src/app/components/articles/coding/coding.component.css")).default]
    })
], CodingComponent);



/***/ }),

/***/ "./src/app/components/articles/projects/project-post/project-post.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/articles/projects/project-post/project-post.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcHJvamVjdHMvcHJvamVjdC1wb3N0L3Byb2plY3QtcG9zdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/articles/projects/project-post/project-post.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/articles/projects/project-post/project-post.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPostComponent", function() { return ProjectPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProjectPostComponent = class ProjectPostComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('article');
        this.post = './assets/articles/projects-posts/' + articleName + '.md';
    }
};
ProjectPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProjectPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/project-post/project-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-post.component.css */ "./src/app/components/articles/projects/project-post/project-post.component.css")).default]
    })
], ProjectPostComponent);



/***/ }),

/***/ "./src/app/components/articles/projects/projects.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/projects/projects.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".projects {\r\n    padding-bottom: 50px\r\n}\r\n.allCards {\r\n    padding-top:50px;\r\n}\r\n.project-card {\r\n    margin-bottom: 40px; padding-bottom:50px; box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1); border: none;\r\n}\r\n.text-muted {\r\n    color: rgba(0, 0, 0, 0.3)\r\n}\r\n/* Smallest screens (phones) */\r\n@media screen and (max-width:766px) {\r\n    .allCards {\r\n        padding-top:100px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSwwQ0FBMEMsRUFBRSxZQUFZO0FBQ3RHO0FBQ0E7SUFDSTtBQUNKO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxyXG59XHJcbi5hbGxDYXJkcyB7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDsgcGFkZGluZy1ib3R0b206NTBweDsgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKVxyXG59XHJcblxyXG4vKiBTbWFsbGVzdCBzY3JlZW5zIChwaG9uZXMpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpIHtcclxuICAgIC5hbGxDYXJkcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/articles/projects/projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/articles/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.titles = [
            ["Cyan X"],
            ["3D Street Racing Game"],
            ["Ice Capades"],
        ];
        this.images = [
            ["../../assets/articles/projects-images/cyanX/preview.png"],
            ["../../assets/articles/projects-images/racingGame/gameplay.PNG"],
            ["../../assets/articles/projects-images/iceCapades/preview.jpg"],
        ];
        this.descriptions = [
            ["A 2D platformer game set in the distant future. Solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals..."],
            ["This is a modified version of the street racing game sourced from this Microsoft's Github repository. The original game is a 3D street racing game where the player must avoid the obstacles on the road..."],
            ["Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change on the environment. You must pass through multiple levels, interact with objects, solve puzzles..."],
        ];
        this.links = [
            ["/projects/post/cyanX"],
            ["/projects/post/streetRacingGame"],
            ["/projects/post/iceCapades"],
        ];
    }
    ngOnInit() {
        this.postArray = [0, 1, 2];
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/articles/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/components/articles/students/students-post/students-post.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/articles/students/students-post/students-post.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvc3R1ZGVudHMvc3R1ZGVudHMtcG9zdC9zdHVkZW50cy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/articles/students/students-post/students-post.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/articles/students/students-post/students-post.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StudentsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPostComponent", function() { return StudentsPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StudentsPostComponent = class StudentsPostComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('article');
        this.post = './assets/articles/students-posts/' + articleName + '.md';
    }
};
StudentsPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students-post/students-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students-post.component.css */ "./src/app/components/articles/students/students-post/students-post.component.css")).default]
    })
], StudentsPostComponent);



/***/ }),

/***/ "./src/app/components/articles/students/students.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/students/students.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvc3R1ZGVudHMvc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/articles/students/students.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/articles/students/students.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentsComponent = class StudentsComponent {
    constructor() {
        this.titles = [
            ["Adding Photos To Instagram Using A Desktop Computer"],
            ["Tips on Making The Most Out Of Your First Year At Uni"],
            ["Decluttering Your Home"],
            ["How To Organise Your Web Browsing"],
            ["Organising Your Computer To Increase Productivity"],
            ["Ways To Be More Organised"]
        ];
        this.images = [
            ["../../assets/articles/students-images/uploadImageToInstagramViaDesktop/header-dark.jpg"],
            ["../../assets/articles/students-images/tipsOnMakingTheMostOutOfYourFirstYearUni/header-dark.jpg"],
            ["../../assets/articles/students-images/declutteringYourHome/header-dark.jpg"],
            ["../../assets/articles/students-images/howToOrganiseYourWebBrowsing/header-dark.jpg"],
            ["../../assets/articles/students-images/organisingYourComputerToIncreaseProductivity/header-dark.jpg"],
            ["../../assets/articles/students-images/waysToBeMoreOrganised/header-dark.jpg"]
        ];
        this.dates = [
            ["11 Aug 2020"],
            ["8 June 2020"],
            ["12 May 2020"],
            ["25 May 2020"],
            ["16 May 2020"],
            ["19 May 2020"]
        ];
        this.links = [
            ["/students/post/uploadImageToInstagramViaDesktop"],
            ["/students/post/tipsOnMakingTheMostOutOfYourFirstYearUni"],
            ["/students/post/declutteringYourHome"],
            ["/students/post/howToOrganiseYourWebBrowsing"],
            ["/students/post/organisingYourComputerToIncreaseProductivity"],
            ["/students/post/waysToBeMoreOrganised"]
        ];
        this.tags = [
            ["Design & Social Media"],
            ["Uni"],
            ["Organisation"],
            ["Organisation"],
            ["Organisation"],
            ["Organisation"]
        ];
    }
    ngOnInit() {
        this.postArray = [0, 1, 2, 3, 4, 5];
    }
    getURL(i) {
        return this.images[i];
    }
    searchbar() {
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
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
};
StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/students/students.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./students.component.css */ "./src/app/components/articles/students/students.component.css")).default]
    })
], StudentsComponent);



/***/ }),

/***/ "./src/app/components/articles/webdev/webdev-post/webdev-post.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/articles/webdev/webdev-post/webdev-post.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZXMvd2ViZGV2L3dlYmRldi1wb3N0L3dlYmRldi1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/articles/webdev/webdev-post/webdev-post.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/articles/webdev/webdev-post/webdev-post.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WebdevPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebdevPostComponent", function() { return WebdevPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WebdevPostComponent = class WebdevPostComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('article');
        this.href = window.location.href;
        this.post = './assets/articles/web-dev-posts/' + articleName + '.md';
    }
};
WebdevPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WebdevPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-webdev-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webdev-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev-post/webdev-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webdev-post.component.css */ "./src/app/components/articles/webdev/webdev-post/webdev-post.component.css")).default]
    })
], WebdevPostComponent);



/***/ }),

/***/ "./src/app/components/articles/webdev/webdev.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/articles/webdev/webdev.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchbar {\r\n    background-image: url('header-original.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    padding-top: 0px;\r\n    height: 15vh;\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n    .searchbar {padding-top: 100px;height: 30vh;}\r\n    .show-header {display:none;}\r\n    .show-navbar {display:block;}\r\n}\r\n\r\n@media screen and (min-width:901px) {\r\n    .show-header {display:block;}\r\n    .show-navbar {display:none;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy93ZWJkZXYvd2ViZGV2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBd0U7SUFDeEUsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZLGtCQUFrQixDQUFDLFlBQVksQ0FBQztJQUM1QyxjQUFjLFlBQVksQ0FBQztJQUMzQixjQUFjLGFBQWEsQ0FBQztBQUNoQzs7QUFDQTtJQUNJLGNBQWMsYUFBYSxDQUFDO0lBQzVCLGNBQWMsWUFBWSxDQUFDO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy93ZWJkZXYvd2ViZGV2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoYmFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2FydGljbGVzL2hlYWRlci1vcmlnaW5hbC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gICAgLnNlYXJjaGJhciB7cGFkZGluZy10b3A6IDEwMHB4O2hlaWdodDogMzB2aDt9XHJcbiAgICAuc2hvdy1oZWFkZXIge2Rpc3BsYXk6bm9uZTt9XHJcbiAgICAuc2hvdy1uYXZiYXIge2Rpc3BsYXk6YmxvY2s7fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAxcHgpIHtcclxuICAgIC5zaG93LWhlYWRlciB7ZGlzcGxheTpibG9jazt9XHJcbiAgICAuc2hvdy1uYXZiYXIge2Rpc3BsYXk6bm9uZTt9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/articles/webdev/webdev.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/articles/webdev/webdev.component.ts ***!
  \****************************************************************/
/*! exports provided: WebdevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebdevComponent", function() { return WebdevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebdevComponent = class WebdevComponent {
    constructor() {
        this.titles = [
            // Webdev
            ["Hosting an Angular Application using Netlify"],
            ["Creating A Simple Angular Web Application"],
        ];
        this.images = [
            // Webdev
            ["../../assets/articles/web-dev-images/hostingAngularApplicationUsingNetlify/header-dark.jpg"],
            ["../../assets/articles/web-dev-images/creatingASimpleAngularWebApplication/header-dark.jpg"],
        ];
        this.dates = [
            // Webdev
            ["30 Aug 2020"],
            ["04 Aug 2020"],
        ];
        this.links = [
            // Webdev
            ["/webdev/post/hostingAngularApplicationUsingNetlify"],
            ["/webdev/post/creatingASimpleAngularWebApplication"],
        ];
        this.tags = [
            // Webdev
            ["Angular, Netlify, Hosting"],
            ["Angular"],
        ];
        this.category = [
            // Webdev
            ["webdev"],
            ["webdev"],
        ];
    }
    ngOnInit() {
        this.postArray = [0, 1];
        this.href = window.location.href;
        this.hrefId = this.href.substring(this.href.lastIndexOf("/") + 1, this.href.length);
    }
    isCategory(i) {
        return this.hrefId === this.category[i].toString();
    }
    getURL(i) {
        return this.images[i];
    }
    searchbar() {
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
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
};
WebdevComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-webdev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./webdev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/webdev/webdev.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./webdev.component.css */ "./src/app/components/articles/webdev/webdev.component.css")).default]
    })
], WebdevComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\n/* ******************************* CONTACT ******************************* */\n/* Contact form design */\nform { max-width:420px; margin:50px auto; padding: 20px }\n.feedback-input:focus { border:2px solid #303030; background: #f3f3f3; }\ntextarea { height: 150px; line-height: 150%; resize:vertical; }\ntextarea:hover, .feedback-input:hover {background-color: #f3f1f3;}\n.form .paragraph-center {text-align: center; font-size: 16pt; padding: 20px }\n/* Contact form inputs */\n.feedback-input {\r\n  color:black; font-family: Helvetica, Arial, sans-serif; font-weight:500; font-size: 18px;\r\n  border-radius: 5px; line-height: 22px; border:2px solid #707070;\r\n  background-color: transparent;\r\n  transition: all 0.3s;\r\n  padding: 13px; margin-bottom: 15px; width:100%; box-sizing: border-box; outline:0;\r\n}\n[type=\"submit\"] {\r\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\r\n  width: 100%; background:darkgrey;\r\n  border-radius: 5px; border:0;\r\n  cursor: pointer;\r\n  color:white; font-size:24px; font-weight:700;\r\n  padding-top:10px; padding-bottom:10px; margin-top:-4px;\r\n  transition: all 0.3s;\r\n}\n[type=\"submit\"]:hover { background:#303030; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsdUVBQXVFO0FBRnZFLDRFQUE0RTtBQUM1RSx3QkFBd0I7QUFFeEIsT0FBTyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYztBQUN4RCx3QkFBd0Isd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUU7QUFDdkUsV0FBVyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFO0FBQzlELHVDQUF1Qyx5QkFBeUIsQ0FBQztBQUNqRSx5QkFBeUIsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWM7QUFFNUUsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVyxFQUFFLHlDQUF5QyxFQUFFLGVBQWUsRUFBRSxlQUFlO0VBQ3hGLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMvRCw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsU0FBUztBQUNuRjtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVcsRUFBRSxtQkFBbUI7RUFDaEMsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QixlQUFlO0VBQ2YsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlO0VBQzVDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWU7RUFDdEQsb0JBQW9CO0FBQ3RCO0FBQ0Esd0JBQXdCLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ09OVEFDVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIENvbnRhY3QgZm9ybSBkZXNpZ24gKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XHJcbmZvcm0geyBtYXgtd2lkdGg6NDIwcHg7IG1hcmdpbjo1MHB4IGF1dG87IHBhZGRpbmc6IDIwcHggfVxyXG4uZmVlZGJhY2staW5wdXQ6Zm9jdXMgeyBib3JkZXI6MnB4IHNvbGlkICMzMDMwMzA7IGJhY2tncm91bmQ6ICNmM2YzZjM7IH1cclxudGV4dGFyZWEgeyBoZWlnaHQ6IDE1MHB4OyBsaW5lLWhlaWdodDogMTUwJTsgcmVzaXplOnZlcnRpY2FsOyB9XHJcbnRleHRhcmVhOmhvdmVyLCAuZmVlZGJhY2staW5wdXQ6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmM2YxZjM7fVxyXG4uZm9ybSAucGFyYWdyYXBoLWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE2cHQ7IHBhZGRpbmc6IDIwcHggfVxyXG5cclxuLyogQ29udGFjdCBmb3JtIGlucHV0cyAqL1xyXG4uZmVlZGJhY2staW5wdXQge1xyXG4gIGNvbG9yOmJsYWNrOyBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6NTAwOyBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogMjJweDsgYm9yZGVyOjJweCBzb2xpZCAjNzA3MDcwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBhZGRpbmc6IDEzcHg7IG1hcmdpbi1ib3R0b206IDE1cHg7IHdpZHRoOjEwMCU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG91dGxpbmU6MDtcclxufVxyXG5bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDpkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlcjowO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjp3aGl0ZTsgZm9udC1zaXplOjI0cHg7IGZvbnQtd2VpZ2h0OjcwMDtcclxuICBwYWRkaW5nLXRvcDoxMHB4OyBwYWRkaW5nLWJvdHRvbToxMHB4OyBtYXJnaW4tdG9wOi00cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIgeyBiYWNrZ3JvdW5kOiMzMDMwMzA7IH0iXX0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");



let ContactComponent = class ContactComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.users = this.db.collection('users').valueChanges({ idField: 'id' });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styling for the footer component */ \r\nfooter {\r\n    background-color:#272727;position:relative;bottom:0;height:250px;padding:50px;margin-top:0px;text-align:center\r\n} \r\n.social-footer {\r\n    margin-top:20px\r\n} \r\n.social-footer a {\r\n    padding:10px 20px;color:white \r\n} \r\n.social-footer a:hover {\r\n    background-color:lightgrey;border-radius:25px;color:#272727 \r\n} \r\n.copy {\r\n    margin-top:30px;font-size:16px;color:whitesmoke \r\n} \r\n.copy p {\r\n    text-align:center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0lBQ0ksd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO0FBQ2pHO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxpQkFBaUIsQ0FBQztBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCLENBQUMsa0JBQWtCLENBQUM7QUFDbEQ7QUFDQTtJQUNJLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDbkM7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBmb290ZXIgY29tcG9uZW50ICovIFxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjcyNzI3O3Bvc2l0aW9uOnJlbGF0aXZlO2JvdHRvbTowO2hlaWdodDoyNTBweDtwYWRkaW5nOjUwcHg7bWFyZ2luLXRvcDowcHg7dGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4uc29jaWFsLWZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHhcclxufVxyXG4uc29jaWFsLWZvb3RlciBhIHtcclxuICAgIHBhZGRpbmc6MTBweCAyMHB4O2NvbG9yOndoaXRlIFxyXG59XHJcbi5zb2NpYWwtZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7Ym9yZGVyLXJhZGl1czoyNXB4O2NvbG9yOiMyNzI3MjcgXHJcbn1cclxuLmNvcHkge1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOndoaXRlc21va2UgXHJcbn1cclxuLmNvcHkgcCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styling for the header component */\r\nheader {\r\n    background-image:url('header-original.jpg');\r\n    /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../assets/articles/header.jpg'); */\r\n    background-size:cover;background-position:center;height:20vh;background-attachment:fixed\r\n}\r\n.maxwidth {\r\n    max-width:1250px;margin:0 auto\r\n}\r\n.maxwidth img {\r\n    margin-left:20px\r\n}\r\n.logo {\r\n    height:100px;width:auto;float:left;margin-top:20px\r\n}\r\n.main-nav {\r\n    float:right;list-style:none;margin-top:55px;margin-right:30px\r\n}\r\n.main-nav li {\r\n    display:inline-block;margin-left:40px\r\n}\r\n.main-nav li a:link,\r\n.main-nav li a:visited {\r\n    padding:8px 0;color:#fff;transition:border-bottom 0.2s;\r\n    text-decoration:none;text-transform:uppercase;font-size:90%;\r\n    border-bottom:2px solid transparent;-webkit-transition:border-bottom 0.2s\r\n}\r\n.main-nav li a:hover,\r\n.main-nav li a:active {\r\n    border-bottom:2px solid #40bedd\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0lBQ0ksMkNBQW9FO0lBQ3BFLDJIQUEySDtJQUMzSCxxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUM7QUFDakU7QUFDQTtJQUNJLGdCQUFnQixDQUFDO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUN2QztBQUNBO0lBQ0ksV0FBVyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUM7QUFDaEQ7QUFDQTtJQUNJLG9CQUFvQixDQUFDO0FBQ3pCO0FBQ0E7O0lBRUksYUFBYSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkI7SUFDdEQsb0JBQW9CLENBQUMsd0JBQXdCLENBQUMsYUFBYTtJQUMzRCxtQ0FBbUMsQ0FBQztBQUN4QztBQUNBOztJQUVJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBoZWFkZXIgY29tcG9uZW50ICovXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2FydGljbGVzL2hlYWRlci1vcmlnaW5hbC5qcGcnKTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2FydGljbGVzL2hlYWRlci5qcGcnKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtoZWlnaHQ6MjB2aDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWRcclxufVxyXG4ubWF4d2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOjEyNTBweDttYXJnaW46MCBhdXRvXHJcbn1cclxuLm1heHdpZHRoIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OjEwMHB4O3dpZHRoOmF1dG87ZmxvYXQ6bGVmdDttYXJnaW4tdG9wOjIwcHhcclxufVxyXG4ubWFpbi1uYXYge1xyXG4gICAgZmxvYXQ6cmlnaHQ7bGlzdC1zdHlsZTpub25lO21hcmdpbi10b3A6NTVweDttYXJnaW4tcmlnaHQ6MzBweFxyXG59XHJcbi5tYWluLW5hdiBsaSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDo0MHB4XHJcbn1cclxuLm1haW4tbmF2IGxpIGE6bGluayxcclxuLm1haW4tbmF2IGxpIGE6dmlzaXRlZCB7XHJcbiAgICBwYWRkaW5nOjhweCAwO2NvbG9yOiNmZmY7dHJhbnNpdGlvbjpib3JkZXItYm90dG9tIDAuMnM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjkwJTtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50Oy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItYm90dG9tIDAuMnNcclxufVxyXG4ubWFpbi1uYXYgbGkgYTpob3ZlcixcclxuLm1haW4tbmF2IGxpIGE6YWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICM0MGJlZGRcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styling for the navbar component */\r\nnav {\r\n  background-image:url('header-original.jpg');\r\n  background-size:cover;background-position:center;height:20vh;background-attachment:fixed\r\n}\r\n.hamburger {\r\n  background-color:grey\r\n}\r\nnav a {\r\n  display:inline-block;margin-left:10px\r\n}\r\nnav a:link,\r\nnav a:visited {\r\n  padding:8px 8px;color:#fff;transition:border-bottom 0.2s;text-decoration:none;text-transform:uppercase;font-size:90%\r\n}\r\nnav a:hover,\r\nnav a:active {\r\n  border-bottom:2px solid #40bedd\r\n}\r\n/* Medium devices (ipads) #3 */\r\n@media screen and (min-width:767px) and (max-width:900px) {\r\n  nav {\r\n    padding-top:30px;height:20vh\r\n  }\r\n  #navbarCollapse {\r\n    background-color:transparent\r\n  }\r\n  .separator-vertical {\r\n    display:block\r\n  }\r\n}\r\n/* Smallest screens (phones) */\r\n@media screen and (max-width:766px) {\r\n  nav {\r\n    height:auto;position:fixed;width:100%;z-index:99;padding-bottom:10px\r\n  }\r\n  .separator-vertical {\r\n    display:none\r\n  }\r\n  nav a {\r\n    padding:8px;margin-bottom:2px;border-bottom:none;\r\n  }\r\n  nav a:link, nav a:visited {\r\n    border-bottom:none;\r\n  }\r\n  nav a:hover, nav a:active {\r\n    border-bottom:none;color:lightgrey\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0UsMkNBQW9FO0VBQ3BFLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQztBQUMvRDtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0Usb0JBQW9CLENBQUM7QUFDdkI7QUFDQTs7RUFFRSxlQUFlLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDO0FBQ3pHO0FBQ0E7O0VBRUU7QUFDRjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFO0lBQ0UsZ0JBQWdCLENBQUM7RUFDbkI7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFO0lBQ0UsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0VBQ25EO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCO0VBQ2xEO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQixDQUFDO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBuYXZiYXIgY29tcG9uZW50ICovXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcnRpY2xlcy9oZWFkZXItb3JpZ2luYWwuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2hlaWdodDoyMHZoO2JhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZFxyXG59XHJcbi5oYW1idXJnZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6Z3JleVxyXG59XHJcbm5hdiBhIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxMHB4XHJcbn1cclxubmF2IGE6bGluayxcclxubmF2IGE6dmlzaXRlZCB7XHJcbiAgcGFkZGluZzo4cHggOHB4O2NvbG9yOiNmZmY7dHJhbnNpdGlvbjpib3JkZXItYm90dG9tIDAuMnM7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTo5MCVcclxufVxyXG5uYXYgYTpob3ZlcixcclxubmF2IGE6YWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjNDBiZWRkXHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChpcGFkcykgIzMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCkgYW5kIChtYXgtd2lkdGg6OTAwcHgpIHtcclxuICBuYXYge1xyXG4gICAgcGFkZGluZy10b3A6MzBweDtoZWlnaHQ6MjB2aFxyXG4gIH1cclxuICAjbmF2YmFyQ29sbGFwc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxyXG4gIH1cclxuICAuc2VwYXJhdG9yLXZlcnRpY2FsIHtcclxuICAgIGRpc3BsYXk6YmxvY2tcclxuICB9XHJcbn0gXHJcblxyXG4vKiBTbWFsbGVzdCBzY3JlZW5zIChwaG9uZXMpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY2cHgpIHtcclxuICBuYXYge1xyXG4gICAgaGVpZ2h0OmF1dG87cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTt6LWluZGV4Ojk5O3BhZGRpbmctYm90dG9tOjEwcHhcclxuICB9XHJcbiAgLnNlcGFyYXRvci12ZXJ0aWNhbCB7XHJcbiAgICBkaXNwbGF5Om5vbmVcclxuICB9XHJcbiAgbmF2IGEge1xyXG4gICAgcGFkZGluZzo4cHg7bWFyZ2luLWJvdHRvbToycHg7Ym9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuICBuYXYgYTpsaW5rLCBuYXYgYTp2aXNpdGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICB9XHJcbiAgbmF2IGE6aG92ZXIsIG5hdiBhOmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7Y29sb3I6bGlnaHRncmV5XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/photography/photography-location/photography-location.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/photography/photography-location/photography-location.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ****************************** COMMON EFFECTS ****************************** */\r\n/* Parallax effect */\r\n.parallax {background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}\r\n.photoCred {background-color:black;color:white;text-decoration:none;padding:4px 6px;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px}\r\nh1 {font-family:Helvetica,sans-serif;text-align:center;line-height:50px}\r\nh2, h3 {font-family:Helvetica,sans-serif;text-align:center;line-height:50px}\r\n.spacing {padding-bottom:15px;}\r\n/* ****************************** HEADINGS EFFECTS ****************************** */\r\n.imageTextCollage { padding: 150px 20px; color:white }\r\n.sidebar-bottom-headings {font-family:Helvetica,sans-serif;text-align:center;line-height:50px;letter-spacing:3px}\r\n/* ******************************* COLUMN LAYOUT ******************************* */\r\n.rows { display: flex; flex-wrap: wrap; padding: 0 4px; }\r\n.column-2 { flex: 50%; max-width: 50%; padding: 0 4px; }\r\n.column-2 img { margin-top: 8px; vertical-align: middle; width: 100%; }\r\n@media screen and (max-width: 900px) {.column-2 { flex: 100%; max-width: 100%; }}\r\n.column-4 { flex: 25%; max-width: 25%; padding: 0 4px; }\r\n.column-4 img { margin-top: 8px; vertical-align: middle; width: 100%; }\r\n@media screen and (max-width: 1200px) and (min-width: 681px) {.column-4 { flex: 50%; max-width: 50%; }}\r\n@media screen and (max-width: 680px) {.column-4 { flex: 100%; max-width: 100%; }}\r\n/* ******************************* PHOTOGRAPHY ******************************* */\r\n/* Images for photography list in photography-main */\r\n.photography-list {text-align:center}\r\n.photography-list-image { background-size: cover; background-repeat: no-repeat; background-position: center; width: 90%; display: inline-block; }\r\n.destination-text { color: white; text-align: center; background-color: rgba(0,0,0,0.5); font-size: 40px; padding: 200px 800px;}\r\n/* More like this section */\r\n.more-like-this { background-color:rgb(240, 240, 240); color:grey; font-size:36px }\r\n.more-like-this-heading{ font-size:18pt }\r\n@media screen and (max-width: 900px) {.more-like-this-heading { font-size:16pt }}\r\n.image {\r\n    height: 400px;\r\n}\r\n@media screen and (max-width: 601px) {.image { width: 100%; height: 220px; padding-bottom:10px }}\r\n@media screen and (min-width: 600px) and (max-width: 900px) {.image { width: 100%; height: 400px; padding-bottom:10px }}\r\n@media screen and (min-width: 901px) and (max-width: 1200px) {.image { width: 100%; height: 300px }}\r\n.image-container {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n.centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white; text-align: center; font-size: 40px; \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90b2dyYXBoeS9waG90b2dyYXBoeS1sb2NhdGlvbi9waG90b2dyYXBoeS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFpRjtBQUNqRixvQkFBb0I7QUFDcEIsV0FBVywyQkFBMkIsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUI7QUFDbkgsWUFBWSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCO0FBRTFLLElBQUksZ0NBQWdDLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCO0FBQ3ZFLFFBQVEsZ0NBQWdDLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCO0FBRzNFLFVBQVUsbUJBQW1CLENBQUM7QUFFOUIsbUZBQW1GO0FBQ25GLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZO0FBQ3JELDBCQUEwQixnQ0FBZ0MsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0I7QUFFaEgsa0ZBQWtGO0FBQ2xGLFFBQVEsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUU7QUFDeEQsWUFBWSxTQUFTLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUN2RCxnQkFBZ0IsZUFBZSxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRTtBQUN0RSxzQ0FBc0MsWUFBWSxVQUFVLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFDaEYsWUFBWSxTQUFTLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUN2RCxnQkFBZ0IsZUFBZSxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRTtBQUN0RSw4REFBOEQsWUFBWSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUM7QUFDdEcsc0NBQXNDLFlBQVksVUFBVSxFQUFFLGVBQWUsRUFBRSxDQUFDO0FBRWhGLGdGQUFnRjtBQUNoRixvREFBb0Q7QUFDcEQsbUJBQW1CLGlCQUFpQjtBQUNwQywwQkFBMEIsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFO0FBQ2hKLG9CQUFvQixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsaUNBQWlDLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixDQUFDO0FBQy9ILDJCQUEyQjtBQUMzQixrQkFBa0IsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLGVBQWU7QUFFbEYseUJBQXlCLGVBQWU7QUFDeEMsc0NBQXNDLDBCQUEwQixlQUFlLENBQUM7QUFFaEY7SUFDSSxhQUFhO0FBQ2pCO0FBQ0Esc0NBQXNDLFNBQVMsV0FBVyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztBQUNoRyw2REFBNkQsU0FBUyxXQUFXLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixDQUFDO0FBQ3ZILDhEQUE4RCxTQUFTLFdBQVcsRUFBRSxjQUFjLENBQUM7QUFFbkc7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlO0VBQ25EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG90b2dyYXBoeS9waG90b2dyYXBoeS1sb2NhdGlvbi9waG90b2dyYXBoeS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENPTU1PTiBFRkZFQ1RTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBQYXJhbGxheCBlZmZlY3QgKi9cclxuLnBhcmFsbGF4IHtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3Zlcn1cclxuLnBob3RvQ3JlZCB7YmFja2dyb3VuZC1jb2xvcjpibGFjaztjb2xvcjp3aGl0ZTt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOjRweCA2cHg7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxLjI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czozcHh9XHJcblxyXG5oMSB7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLHNhbnMtc2VyaWY7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6NTBweH1cclxuaDIsIGgzIHtmb250LWZhbWlseTpIZWx2ZXRpY2Esc2Fucy1zZXJpZjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo1MHB4fVxyXG5cclxuXHJcbi5zcGFjaW5nIHtwYWRkaW5nLWJvdHRvbToxNXB4O31cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBIRUFESU5HUyBFRkZFQ1RTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4uaW1hZ2VUZXh0Q29sbGFnZSB7IHBhZGRpbmc6IDE1MHB4IDIwcHg7IGNvbG9yOndoaXRlIH1cclxuLnNpZGViYXItYm90dG9tLWhlYWRpbmdzIHtmb250LWZhbWlseTpIZWx2ZXRpY2Esc2Fucy1zZXJpZjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo1MHB4O2xldHRlci1zcGFjaW5nOjNweH1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ09MVU1OIExBWU9VVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi5yb3dzIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBwYWRkaW5nOiAwIDRweDsgfVxyXG4uY29sdW1uLTIgeyBmbGV4OiA1MCU7IG1heC13aWR0aDogNTAlOyBwYWRkaW5nOiAwIDRweDsgfVxyXG4uY29sdW1uLTIgaW1nIHsgbWFyZ2luLXRvcDogOHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB3aWR0aDogMTAwJTsgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgey5jb2x1bW4tMiB7IGZsZXg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgfX1cclxuLmNvbHVtbi00IHsgZmxleDogMjUlOyBtYXgtd2lkdGg6IDI1JTsgcGFkZGluZzogMCA0cHg7IH1cclxuLmNvbHVtbi00IGltZyB7IG1hcmdpbi10b3A6IDhweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgd2lkdGg6IDEwMCU7IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNjgxcHgpIHsuY29sdW1uLTQgeyBmbGV4OiA1MCU7IG1heC13aWR0aDogNTAlOyB9fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkgey5jb2x1bW4tNCB7IGZsZXg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgfX1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUEhPVE9HUkFQSFkgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBJbWFnZXMgZm9yIHBob3RvZ3JhcGh5IGxpc3QgaW4gcGhvdG9ncmFwaHktbWFpbiAqL1xyXG4ucGhvdG9ncmFwaHktbGlzdCB7dGV4dC1hbGlnbjpjZW50ZXJ9XHJcbi5waG90b2dyYXBoeS1saXN0LWltYWdlIHsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB3aWR0aDogOTAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLmRlc3RpbmF0aW9uLXRleHQgeyBjb2xvcjogd2hpdGU7IHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpOyBmb250LXNpemU6IDQwcHg7IHBhZGRpbmc6IDIwMHB4IDgwMHB4O31cclxuLyogTW9yZSBsaWtlIHRoaXMgc2VjdGlvbiAqL1xyXG4ubW9yZS1saWtlLXRoaXMgeyBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDI0MCwgMjQwKTsgY29sb3I6Z3JleTsgZm9udC1zaXplOjM2cHggfVxyXG5cclxuLm1vcmUtbGlrZS10aGlzLWhlYWRpbmd7IGZvbnQtc2l6ZToxOHB0IH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHsubW9yZS1saWtlLXRoaXMtaGVhZGluZyB7IGZvbnQtc2l6ZToxNnB0IH19XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDFweCkgey5pbWFnZSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDIyMHB4OyBwYWRkaW5nLWJvdHRvbToxMHB4IH19XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHsuaW1hZ2UgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MDBweDsgcGFkZGluZy1ib3R0b206MTBweCB9fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgey5pbWFnZSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4IH19XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IHdoaXRlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/photography/photography-location/photography-location.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/photography/photography-location/photography-location.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PhotographyLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographyLocationComponent", function() { return PhotographyLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");



let PhotographyLocationComponent = class PhotographyLocationComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        // Gets the hyperlink in the browser window, eg "vondreii/photography/blue-mountains" and gets the id, eg 'blue-mountains'
        this.href = window.location.href;
        this.hrefId = this.href.substring(this.href.lastIndexOf("/") + 1, this.href.length);
        // Reads from the 'photography' collection in the Firebase Database
        this.collectionPhotos = this.db.collection('photography').valueChanges({ idField: 'id' });
        this.collectionPhotos.forEach(photography => {
            // For each location, save the images/info of the matching location
            photography.forEach(location => {
                if (location.id == this.hrefId) {
                    // this.allPhotos = location.photos;
                    // this.photosLength = location.photos.length;
                    // console.log("photosLengthFromFirebase: "+location.photos.length);
                    // console.log("photosLengthFromVariable: "+this.photosLength);
                    this.col1 = location.col1;
                    this.col2 = location.col2;
                    this.col3 = location.col3;
                    this.col4 = location.col4;
                    this.loc = location.location;
                    this.moreLikeThis1 = location.moreLikeThis1;
                    this.moreLikeThis2 = location.moreLikeThis2;
                    // console.log(location.moreLikeThis1);
                    // console.log(location.moreLikeThis2);
                }
                // console.log(location.location);
                // console.log(window.location.href);
            });
        });
        console.log("photosLengthFromVariable: " + this.photosLength);
        // console.log("photosLength: "+this.photosLength);
        // console.log("avgColumnLength: "+this.avgColumnLength);
        // Reads from the 'photography-more-like-this' collection in the Firebase Database
        this.collectionMoreLikeThis = this.db.collection("photography-more-like-this").valueChanges({ idField: 'id' });
        // each location has a display title, background image and router link to its corresponding page 
        this.collectionMoreLikeThis.forEach(location => {
            location.forEach(link => {
                // Saves the 2 more like this links that are associated with the current page
                if (link.id == this.moreLikeThis1) {
                    this.moreLikeThis1Location = link.location;
                    this.moreLikeThis1Background = link.background;
                    this.moreLikeThis1RouterLink = link.routerLink;
                }
                else if (link.id == this.moreLikeThis2) {
                    this.moreLikeThis2Location = link.location;
                    this.moreLikeThis2Background = link.background;
                    this.moreLikeThis2RouterLink = link.routerLink;
                }
            });
        });
    }
};
PhotographyLocationComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PhotographyLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photography-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photography-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography-location/photography-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photography-location.component.css */ "./src/app/components/photography/photography-location/photography-location.component.css")).default]
    })
], PhotographyLocationComponent);



/***/ }),

/***/ "./src/app/components/photography/photography.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/photography/photography.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG9ncmFwaHkvcGhvdG9ncmFwaHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/photography/photography.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/photography/photography.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function() { return PhotographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotographyComponent = class PhotographyComponent {
    constructor() {
        this.titles = [
            ["Blue Mountains"],
            ["Central Coast"],
            ["Hobart"],
            ["Hunter Valley"],
            ["Melbourne"],
            ["Newcastle"],
            ["Manila"],
            ["Rural Philippines"],
            ["Sydney"]
        ];
        this.images = [
            ["../../assets/photography/blue-mountains/three-sisters-lookout-cropped.JPG"],
            ["../../assets/photography/central-coast/long-jetty-cropped.jpg"],
            ["../../assets/photography/hobart/hobart-street.jpg"],
            ["../../assets/photography/hunter-valley/waterfall.jpg"],
            ["../../assets/photography/melbourne/melbourne-street.jpg"],
            ["../../assets/photography/newcastle/train-tracks-cropped.jpg"],
            ["../../assets/photography/manila/overpass-1-cropped.JPG"],
            ["../../assets/photography/rural-philippines/corn-fields-cropped.JPG"],
            ["../../assets/photography/sydney/sydney-bridge-cropped.jpg"]
        ];
        this.descriptions = [
            ["A mountainous region found approximately 60km north of Sydney, NSW, Australia."],
            ["A region filled with beaches that stretches the coast from Sydney up until Newcastle, NSW, Australia."],
            ["The state capital city of Tasmania, NSW, Australia - which is an island underneath the mainland of Australia."],
            ["A rural regional area located inland west of Newcastle and the Central Coast, NSW, Australia."],
            ["The state capital city of Victoria, Australia."],
            ["A major city approximately 160km north of Sydney, Australia."],
            ["The capital city of the Philippines."],
            ["Various towns and rural locations scattered throughout the Philippines."],
            ["The capital city of NSW, Australia. Home to Australian landmarks like the Sydney Opera House and the Harbour Bridge."]
        ];
        this.links = [
            ["/photography/blue-mountains"],
            ["/photography/central-coast"],
            ["/photography/hobart"],
            ["/photography/hunter-valley"],
            ["/photography/melbourne"],
            ["/photography/newcastle"],
            ["/photography/manila"],
            ["/photography/rural-philippines"],
            ["/photography/sydney"]
        ];
    }
    ngOnInit() {
        this.postArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
};
PhotographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photography',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photography/photography.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photography.component.css */ "./src/app/components/photography/photography.component.css")).default]
    })
], PhotographyComponent);



/***/ }),

/***/ "./src/app/components/social/social.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/social/social.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styling for the social component */\r\n.contact-card {\r\n    border:none;border-top:1px solid #dddddd;background-color:#303030;padding:0px\r\n}\r\n.space-between-links {\r\n    padding:0px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0lBQ0ksV0FBVyxDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDO0FBQ3RFO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxpbmcgZm9yIHRoZSBzb2NpYWwgY29tcG9uZW50ICovXHJcbi5jb250YWN0LWNhcmQge1xyXG4gICAgYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZGRkZDtiYWNrZ3JvdW5kLWNvbG9yOiMzMDMwMzA7cGFkZGluZzowcHhcclxufVxyXG4uc3BhY2UtYmV0d2Vlbi1saW5rcyB7XHJcbiAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialComponent = class SocialComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.component.css */ "./src/app/components/social/social.component.css")).default]
    })
], SocialComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sharl\Documents\My Documents\Side Projects\Vondreii\Dev\vondreii-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map