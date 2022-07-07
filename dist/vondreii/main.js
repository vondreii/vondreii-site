(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+p9S":
/*!********************************************************!*\
  !*** ./src/app/page-manager/page-manager.component.ts ***!
  \********************************************************/
/*! exports provided: PageManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageManagerComponent", function() { return PageManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_blog_page1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/blog/page1.json */ "PbFL");
var _assets_blog_page1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/blog/page1.json */ "PbFL", 1);
/* harmony import */ var _assets_portfolio_page1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/portfolio/page1.json */ "4LvQ");
var _assets_portfolio_page1_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/portfolio/page1.json */ "4LvQ", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blog_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog/blog-list/blog-list.component */ "2mxM");
/* harmony import */ var _portfolio_portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../portfolio/portfolio-list/portfolio-list.component */ "PrwW");

// Import posts per page

// Import projects per page





function PageManagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-blog-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentList", ctx_r0.itemsToDisplay)("currentPage", ctx_r0.currentPage);
} }
function PageManagerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-portfolio-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentList", ctx_r2.itemsToDisplay)("currentPage", ctx_r2.currentPage);
} }
class PageManagerComponent {
    constructor() {
        // Posts already sorted into their different pages
        this.posts1 = _assets_blog_page1_json__WEBPACK_IMPORTED_MODULE_1__;
        this.portfolio1 = _assets_portfolio_page1_json__WEBPACK_IMPORTED_MODULE_2__;
        // Variables to keep track of current data to be displayed
        this.itemsToDisplay = this.posts1;
        this.currentPage = 1;
    }
    ngOnInit() {
        if (window.location.href.includes("blog")) {
            this.blog = true;
            this.itemsToDisplay = this.posts1;
        }
        else {
            this.itemsToDisplay = this.portfolio1;
        }
    }
    changePageBlog(pageNo) {
        // Switches to view appropriate content depending on page
        switch (pageNo) {
            case 1: {
                this.itemsToDisplay = this.posts1;
                this.currentPage = 1;
                break;
            }
            default: {
                break;
            }
        }
        window.scrollTo(0, 0);
    }
}
PageManagerComponent.ɵfac = function PageManagerComponent_Factory(t) { return new (t || PageManagerComponent)(); };
PageManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageManagerComponent, selectors: [["app-page-manager"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["something", ""], [1, "content", "bg-grey"], [3, "contentList", "currentPage"]], template: function PageManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageManagerComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageManagerComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blog)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _blog_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"], _portfolio_portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioListComponent"]], styles: [".page-no[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin-right: 20px;\n  background-color: lightgrey;\n  text-decoration: none;\n  color: #ffffff;\n  border-radius: 5px;\n}\n\n.page-no[_ngcontent-%COMP%]:hover {\n  background-color: #0cdbb2bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2UtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGIiwiZmlsZSI6InBhZ2UtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5vIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5wYWdlLW5vOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNkYmIyYmQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-manager',
                templateUrl: './page-manager.component.html',
                styleUrls: ['./page-manager.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sharl\Desktop\All Files\Side Projects\vondreii-site\src\main.ts */"zUnb");


/***/ }),

/***/ "2mxM":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-list/blog-list.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BlogListComponent_article_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More >>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", post_r1.link);
} }
class BlogListComponent {
    // Automatically scroll to the top of the page when page is refreshed
    constructor(route) {
        this.route = route;
        // The list of articles displayed on this page
        this.contentList = [];
        this.currentPage = 1;
        this.route.params.subscribe(params => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    ngOnInit() {
    }
}
BlogListComponent.ɵfac = function BlogListComponent_Factory(t) { return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogListComponent, selectors: [["app-blog-list"]], inputs: { contentList: "contentList", currentPage: "currentPage" }, decls: 5, vars: 1, consts: [[1, "pt-5", "text-center"], [1, "text-grey"], [1, "container"], ["class", "card bg-grey", 4, "ngFor", "ngForOf"], [1, "card", "bg-grey"], [1, "padding"], [1, "sub", "right"], [1, "sub", "left"], [1, "heading"], [1, "description"], [1, "cyanLink", 3, "routerLink"]], template: function BlogListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogListComponent_article_4_Template, 12, 5, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contentList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  border: none;\n  margin-bottom: 10px;\n  background-color: inherit;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding: 1em 10em 1em 10em;\n}\n\n.sub[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #a8abb3 !important;\n  text-decoration: none;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.heading[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  font-size: 2rem;\n  line-height: 1.2em;\n  text-align: left;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 20px;\n  text-align: left;\n  padding-bottom: 3rem;\n  border-bottom: 1px solid #45474b;\n}\n\n@media screen and (max-width: 1000px) {\n  .padding[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBT0Y7O0FBTEE7RUFDRTtJQUNFLGVBQUE7RUFRRjs7RUFOQTtJQUNFLGFBQUE7RUFTRjtBQUNGIiwiZmlsZSI6ImJsb2ctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG4ucGFkZGluZyB7XHJcbiAgcGFkZGluZzogMWVtIDEwZW0gMWVtIDEwZW07XHJcbn1cclxuLnN1YiB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogI2E4YWJiMyAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NTQ3NGI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-list',
                templateUrl: './blog-list.component.html',
                styleUrls: ['./blog-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { contentList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4LvQ":
/*!*****************************************!*\
  !*** ./src/assets/portfolio/page1.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Windows File Manager\",\"date\":\"2022\",\"link\":\"/portfolio/windowsFileManager\",\"tags\":\"C# • Windows Forms\",\"description\":\"A replica of the Windows file manager app, where you can open and navigate to file and directories. This also has tagging functionality and you can also filter files by tags...\",\"image\":\"./assets/portfolio/images/windowsFileManager/header.PNG\"},{\"title\":\"Netflix Clone\",\"date\":\"2021\",\"link\":\"/portfolio/netflixClone\",\"tags\":\"Clone • React • Firebase\",\"description\":\"Following this tutorial from Youtube, I was able to build a clone of Netflix that pulls a list of movies using The Movie Database API, and display them in the style of the Netflix Home Page...\",\"image\":\"./assets/portfolio/images/netflixClone/header.jpg\"},{\"title\":\"Hugo Tutorial Website\",\"date\":\"2021\",\"link\":\"/portfolio/hugoBlogTutorial\",\"tags\":\"Hugo • Github • Netlify • Markdown\",\"description\":\"This is a tutorial my partner and I created on how to create a website using Hugo and host it using Netlify. We presented this at the Blast Furnace Meetup and at the Newcastle Coders group...\",\"image\":\"./assets/portfolio/images/hugoBlogTutorial/header.png\"},{\"title\":\"CyanX\",\"date\":\"2018\",\"link\":\"/portfolio/cyanX\",\"tags\":\"2D • Game • Side scroller • Puzzle\",\"description\":\"A 2D platformer side-scroller game set in the distant future. The player must solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals. There are 3 levels...\",\"image\":\"./assets/portfolio/images/cyanX/header.png\"},{\"title\":\"Ice Capades\",\"date\":\"2015\",\"link\":\"/portfolio/iceCapades\",\"tags\":\"2D • Game • Top-Down • Puzzle\",\"description\":\"Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change. You must pass through multiple levels, interact with objects, solve puzzles...\",\"image\":\"./assets/portfolio/images/iceCapades/header.PNG\"},{\"title\":\"3D Racing Game\",\"date\":\"2019\",\"link\":\"/portfolio/streetRacingGame\",\"tags\":\"3D • Game • Research • Racing\",\"description\":\"This is a modified version of the street racing game sourced from this Microsoft's Github repository. This is a 3D street racing game where the player must avoid obstacles on the road...\",\"image\":\"./assets/portfolio/images/racingGame/header.jpg\"},{\"title\":\"Doco Summaries\",\"date\":\"2021\",\"link\":\"/portfolio/docosummaries\",\"tags\":\"Angular • Firebase\",\"description\":\"Docosummaries is a place where you can learn about new documentaries, read their plot summaries, and find links where you could watch the documentaries for free online...\",\"image\":\"./assets/portfolio/images/docosummaries/header.jpg\"},{\"title\":\"Research Excel Automation\",\"date\":\"2021\",\"link\":\"/portfolio/excelAutomation\",\"tags\":\"Python • Excel\",\"description\":\"These are a collection of Python automation scripts to help me with the data analysis for my research project, including cleaning the data and doing maths calculations...\",\"image\":\"./assets/portfolio/images/excelAutomation/header.png\"},{\"title\":\"Calculator\",\"date\":\"2019\",\"link\":\"/portfolio/calculator\",\"tags\":\"C# • Tools\",\"description\":\"This is a simple calculator app that was made to replicate modern calculator apps that can be seen on smartphones. This is a Visual Studio Windows Form Application that runs on the desktop...\",\"image\":\"./assets/portfolio/images/calculator/header.PNG\"}]");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Ejur":
/*!**********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-item/portfolio-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");




class PortfolioItemComponent {
    // Automatically scroll to the top of the page when page is refreshed
    constructor(route) {
        this.route = route;
        this.route.params.subscribe(params => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    // Opens the content for that individual page (located in ./assets/portfolio/articles/articleName)
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('project');
        this.href = window.location.href;
        this.post = './assets/portfolio/articles/' + articleName + '.md';
    }
}
PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) { return new (t || PortfolioItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PortfolioItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioItemComponent, selectors: [["app-portfolio-item"]], decls: 3, vars: 1, consts: [[1, "content", "pb-5"], [1, "pt-3", "pb-5", "extra-padding"], ["markdown", "", 3, "src"]], template: function PortfolioItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-item',
                templateUrl: './portfolio-item.component.html',
                styleUrls: ['./portfolio-item.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 26, vars: 0, consts: [[1, "content", "bg-grey"], [1, "pt-5", "text-center"], [1, "text-grey"], [1, "mb-5", "extra-padding", "article"], [1, "pb-3"], [1, "mt-3"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I like learning about new things and I try to fill some of my spare time with small projects outside my work hours. Currently I've been self-learning and exploring some concepts like Hugo, Angular and Firebase. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I currenty work full time in Software Development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I used to work full time in QA, and this included both QA automation tasks and manual testing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I have done quite a few projects at uni related to creating games with Unity and C#.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "My main side project that I am working on uses Firebase, Node.js, and Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This website uses Angular, but it has gone through iterations of other tech stacks in the past (hugo, vanilla js, html, css).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I really like the idea of automation. I made a simple automation script in Java to help speed up some of the formal processes at my last job.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CREDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " I am a Graduate of the University of Newcastle, NSW, Australia (Bachelor of IT and Honours in Computer Science). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PbFL":
/*!************************************!*\
  !*** ./src/assets/blog/page1.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Building A Second Brain With Notion: Storing Everything You Know In One Place\",\"date\":\"12 Feb 2021\",\"link\":\"/blog/buildingASecondBrainWithNotion\",\"tags\":\"Organisation\",\"description\":\"A Second Brain is simply just a single place where you store the things you know and learn. Whatever you store depends entirely on you and is based on what things add value to your life. Before, I was mostly relying on my brain to remember everything I knew or any new information I had learnt. If I did need to write things down, I would store information in many different places...\"},{\"title\":\"Hosting A Hugo Application Using Github and Netlify\",\"date\":\"4 Jan 2021\",\"link\":\"/blog/hostingAHugoAppUsingGithubAndNetlify\",\"tags\":\"Hugo • Netlify\",\"description\":\"Netlify is a free hosting platform where you can host your website live for free. One way it can do this is by linking to an existing Github repository and hosting your code stored there. If you have a Hugo App stored on a repository, you can use Netlify to host it. All you have to do is buy your own custom domain name and link it to Netlify...\"},{\"title\":\"Linking A Namecheap Domain To Firebase\",\"date\":\"4 Oct 2020\",\"link\":\"/blog/linkingANamecheapDomainToFirebase\",\"tags\":\"Hosting • Firebase • Namecheap\",\"description\":\"Assuming you already have a website hosted on Firebase, you might not be satisfied with the default free domain name (which ends in something like .firebaseapp.com or .web.app). If you've already bought a Namecheap domain name, this is how you can link it to your Firebase hosted website...\"},{\"title\":\"Hosting An Angular Application Using Github And Netlify\",\"date\":\"30 Aug 2020\",\"link\":\"/blog/hostingAngularApplicationUsingGithubAndNetlify\",\"tags\":\"Angular • Github • Netlify\",\"description\":\"Hugo is a framework where you can create your own website, completely from scratch without much effort or without knowing too much (or any) of the internal programming. There are also many web hosting platforms that can easily host a Hugo project for free - meaning, the only money you will spend will be for the custom domain name...\"},{\"title\":\"Setting Up A Github Repository and Creating A Local Copy\",\"date\":\"22 Aug 2020\",\"link\":\"/blog/settingUpAGithubRepositoryAndCreatingALocalCopy\",\"tags\":\"Version Control • Github\",\"description\":\"GitHub is a free version control platform where you can store your code online in repositories. When we create a Github repository, we are creating a place online where we can store our code files for a project remotely. This is a simple tutorial that will help you quickly set up an online remote repository on Github, which will be linked to a local folder on your computer...\"},{\"title\":\"Upload An Image To Instagram Using A Desktop Computer\",\"date\":\"11 Aug 2020\",\"link\":\"/blog/uploadAnImageToInstagramUsingADesktopComputer\",\"tags\":\"Design • Social Media\",\"description\":\"Sometimes you need to upload photos to Instagram on a computer, especially if you are using a computer to edit photos or create vector art. It can be really annoying to keep transferring them onto your phone and uploading it from there (and if you can't airdrop it using an IPhone, the quality of these photos can be reduced)...\"}]");

/***/ }),

/***/ "PrwW":
/*!**********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-list/portfolio-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: PortfolioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioListComponent", function() { return PortfolioListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PortfolioListComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PortfolioListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioListComponent_div_14_div_1_Template, 13, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
class PortfolioListComponent {
    // Automatically scroll to the top of the page when page is refreshed
    constructor(route) {
        this.route = route;
        // The list of articles displayed on this page
        this.contentList = [];
        this.numRows = 0;
        this.sortedRowsWithItems = [];
        this.route.params.subscribe(params => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    // number of items per row and array of items. result = [['a','b'], ['c','d'], ['e']]
    ngOnInit() {
        this.numRows = Math.ceil(this.contentList.length / 3);
        this.sortedRowsWithItems = this.createRows();
    }
    // Determines the number of rows, splits it into 3 projects per row (sub-array)  
    createRows() {
        var perChunk = 3;
        var inputArray = this.contentList;
        // compile data structure
        var result = inputArray.reduce((resultArray, item, index) => {
            // index of sub-array (chunk)
            const chunkIndex = Math.floor(index / perChunk);
            // start a new chunk
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, []);
        return result;
    }
}
PortfolioListComponent.ɵfac = function PortfolioListComponent_Factory(t) { return new (t || PortfolioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PortfolioListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioListComponent, selectors: [["app-portfolio-list"]], inputs: { contentList: "contentList" }, decls: 15, vars: 1, consts: [[1, "mobile-intro"], [1, "mt-5", "mb-5", "text-black", "text-center"], [1, "mt-5", "text-black", "text-center"], [1, "mt-5", "text-grey", "text-center"], [1, "mb-2", "text-grey", "text-center"], [1, "mobile-desktop"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "card", "bg-white", "mb-5"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "demo-1"], [1, "p-3"], [1, "button", 3, "href"], [1, "p-2"]], template: function PortfolioListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there \uD83D\uDC4B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'm Vondreii and I work as a developer from Sydney, Australia :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u142F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PortfolioListComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortedRowsWithItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 33%;\n  padding: 0 10px;\n}\n\n\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 4px;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n\n\n\n@media screen and (max-width: 800px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n    padding: 0;\n  }\n\n  .demo-1[_ngcontent-%COMP%] {\n    -webkit-line-clamp: 5;\n  }\n}\n\n.mobile-intro[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.demo-1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n\n@media screen and (max-width: 1000px) {\n  .mobile-intro[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .mobile-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1001px) {\n  .mobile-intro[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-desktop[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.mobile-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3J0Zm9saW8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtBQUNGOztBQUVBLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUEsbUNBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQSw0QkFBQTs7QUFDQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQSx1QkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFDRjs7RUFDQTtJQUNFLHFCQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQUE7RUFDRjs7RUFFQTtJQUNFLGFBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQUY7O0VBR0E7SUFDRSxjQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InBvcnRmb2xpby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGZvdXIgY29sdW1ucyBzaWRlIGJ5IHNpZGUgKi9cclxuLmNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBjb2x1bW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5kZW1vLTEge1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xyXG4gIH1cclxufVxyXG5cclxuLm1vYmlsZS1pbnRybyB7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uZGVtby0xIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAubW9iaWxlLWludHJvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1kZXNrdG9wIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpIHtcclxuICAubW9iaWxlLWludHJvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlLWludHJvIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-list',
                templateUrl: './portfolio-list.component.html',
                styleUrls: ['./portfolio-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { contentList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






class AppComponent {
    // On app load, determine if the navbar should be open/closed
    constructor() {
        // variables
        this.title = 'vondreii';
        this.navOpen = true;
        console.log(this.getScreenSize());
        if (this.screenWidth < 1000) {
            this.navOpen = true;
        }
        else {
            this.navOpen = false;
        }
    }
    // Listens to window resize event
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
    // Button to open/close the navbar
    openCloseNav() {
        if (this.navOpen) {
            if (this.screenWidth < 1000) {
                document.getElementById("mySidebar").style.width = "100%";
                document.getElementById("mySidebar").style.marginTop = "50px";
                document.getElementById("main").style.marginLeft = "0px";
                document.getElementById("main").style.marginBottom = "0px";
            }
            else {
                document.getElementById("mySidebar").style.width = "250px";
                document.getElementById("main").style.marginLeft = "230px";
                document.getElementById("main").style.marginBottom = "0px";
            }
        }
        else {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        this.navOpen = !this.navOpen;
    }
    // For small screens, automatically close navbar if page selected
    closeNavOnClick() {
        if (this.screenWidth < 1000) {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            this.navOpen = !this.navOpen;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog-post/blog-post.component */ "oNsn");
/* harmony import */ var _blog_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog-list/blog-list.component */ "2mxM");
/* harmony import */ var _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-manager/page-manager.component */ "+p9S");
/* harmony import */ var _portfolio_portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio-list/portfolio-list.component */ "PrwW");
/* harmony import */ var _portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio-item/portfolio-item.component */ "Ejur");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_8__["BlogPostComponent"],
        _blog_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_9__["BlogListComponent"],
        _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_10__["PageManagerComponent"],
        _portfolio_portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioListComponent"],
        _portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioItemComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_8__["BlogPostComponent"],
                    _blog_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_9__["BlogListComponent"],
                    _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_10__["PageManagerComponent"],
                    _portfolio_portfolio_list_portfolio_list_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioListComponent"],
                    _portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioItemComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 34, vars: 0, consts: [[1, "content", "bg-grey"], [1, "pt-5", "text-center"], [1, "text-grey"], [1, "extra-padding", "article"], ["href", "https://www.linkedin.com/in/sharlene-von-drehnen", 1, "cyanLink"], ["href", "https://www.instagram.com/vondreii", 1, "cyanLink"], ["href", "https://github.com/vondreii", 1, "cyanLink"], ["action", "https://formspree.io/f/xjvlaqpe", "method", "POST", 1, "extra-padding"], [1, "form-group"], ["for", "replyTo"], ["type", "email", "id", "replyTo", "name", "_replyto", "ngModel", "reply", "aria-describedby", "emailHelp", "placeholder", "test@outlook.com", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "message"], ["name", "message", "id", "message", "placeholder", "Hey there! I'm contacting you because...", 1, "form-control", 2, "height", "200px"], ["type", "submit", 1, "button"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You can get in contact with me via any of the following platforms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LinkedIn Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Instagram Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "You can also send me your message through this form and I will get back to you as soon as I can!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Your Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your email will not be shared with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box[_ngcontent-%COMP%] {\n  margin: 2rem auto 2rem auto;\n  padding: 30px 25px 60px 25px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  background-color: #2e3741;\n  color: #D3D5D9;\n  border-radius: 5px;\n}\n\n.box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  background-color: #2e3741;\n}\n\n.box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  background-color: #252729;\n}\n\n.box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #2e3741;\n}\n\n.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #D3D5D9;\n  transition: ease 0.3s;\n  background-color: #2e3741;\n}\n\n.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #0CDBB3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBQTtFQUEyQiw0QkFBQTtFQUE0QiwyQ0FBQTtFQUF3QyxlQUFBO0VBQWUseUJBQUE7RUFBeUIsY0FBQTtFQUFjLGtCQUFBO0FBT3RKOztBQUxBO0VBQ0MsbUJBQUE7RUFBbUIseUJBQUE7QUFTcEI7O0FBUEE7RUFDRSx5QkFBQTtBQVVGOztBQVJBO0VBQ0MseUJBQUE7QUFXRDs7QUFUQTtFQUNDLHFCQUFBO0VBQXFCLGNBQUE7RUFBYyxxQkFBQTtFQUFzQix5QkFBQTtBQWUxRDs7QUFiQTtFQUNDLHFCQUFBO0VBQXFCLGNBQUE7QUFpQnRCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHsgXHJcblx0bWFyZ2luOjJyZW0gYXV0byAycmVtIGF1dG87cGFkZGluZzozMHB4IDI1cHggNjBweCAyNXB4O2JveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjE1KTtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiMyZTM3NDE7Y29sb3I6I0QzRDVEOTtib3JkZXItcmFkaXVzOjVweFxyXG59XHJcbi5ib3ggaDIge1xyXG5cdG1hcmdpbi1ib3R0b206MXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiMyZTM3NDFcclxufVxyXG4uYm94IGg1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNTI3MjlcclxufVxyXG4uYm94IGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMmUzNzQxXHJcbn1cclxuLmJveCBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojRDNENUQ5O3RyYW5zaXRpb246IGVhc2UgMC4zcztiYWNrZ3JvdW5kLWNvbG9yOiMyZTM3NDFcclxufVxyXG4uYm94IGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMwQ0RCQjNcclxufVxyXG4uZm9ybSB7XHJcblx0XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 0, consts: [[1, "footer", "content", "pt-5"], [1, "container"], [1, "row"], [1, "col-md-6", "col-lg-3"], [1, "footer-links"], ["href", "/portfolio"], ["href", "https://github.com/vondreii"], ["href", "/blog"], ["href", "/about-me"], ["href", "/contact"], ["href", "https://www.linkedin.com/in/sharlene-von-drehnen"], ["href", "https://www.instagram.com/vondreii"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Github Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "SOCIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.green-content[_ngcontent-%COMP%] {\n  padding: 2px 16%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 20px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-about[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-project[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 45px;\n  color: #999999;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-project[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #999999;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3bd1b3;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  position: absolute;\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOzs7O0VBSUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTs7OztFQUlFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5ncmVlbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAycHggMTYlO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1hYm91dCxcclxuLmZvb3RlciAuZm9vdGVyLWNvbnRhY3QsXHJcbi5mb290ZXIgLmZvb3Rlci1saW5rcyxcclxuLmZvb3RlciAuZm9vdGVyLXByb2plY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItYWJvdXQgaDMsXHJcbi5mb290ZXIgLmZvb3Rlci1jb250YWN0IGgzLFxyXG4uZm9vdGVyIC5mb290ZXItbGlua3MgaDMsXHJcbi5mb290ZXIgLmZvb3Rlci1wcm9qZWN0IGgzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLWxpbmtzIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLWxpbmtzIGE6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItbGlua3MgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzYmQxYjM7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1saW5rcyBhOjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-black", "shadow-sm", "p-4", "pl-5", "bg-body"], ["routerLink", "", 1, "navbar-brand", "pr-5", "logoFont"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mr-5", "pr-5"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "navbar-nav", "article"], [1, "nav-item"], ["href", "/portfolio", 1, "nav-link", "pr-5"], ["href", "/blog", 1, "nav-link", "pr-5"], ["href", "/about-me", 1, "nav-link", "pr-5"], ["href", "/contact", 1, "nav-link", "pr-5"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VONDREII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".logoFont[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb0ZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oNsn":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-post/blog-post.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");




class BlogPostComponent {
    // Automatically scroll to the top of the page when page is refreshed
    constructor(route) {
        this.route = route;
        this.route.params.subscribe(params => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    // Opens the content for that individual page (located in ./assets/blog/articles/articleName)
    ngOnInit() {
        let articleName = this.route.snapshot.paramMap.get('article');
        this.article = articleName;
        this.href = window.location.href;
        this.post = './assets/blog/articles/' + articleName + '.md';
    }
}
BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) { return new (t || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPostComponent, selectors: [["app-blog-post"]], decls: 3, vars: 1, consts: [[1, "content", "pb-5"], [1, "pt-3", "pb-5", "extra-padding"], ["markdown", "", 3, "src"]], template: function BlogPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-post',
                templateUrl: './blog-post.component.html',
                styleUrls: ['./blog-post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog-post/blog-post.component */ "oNsn");
/* harmony import */ var _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-manager/page-manager.component */ "+p9S");
/* harmony import */ var _portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio-item/portfolio-item.component */ "Ejur");
// General Imports and Routing



// Imports for Components







const routes = [
    { path: '', component: _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_6__["PageManagerComponent"] },
    // Portfolio and Blog lists
    { path: 'portfolio', component: _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_6__["PageManagerComponent"] },
    { path: 'blog', component: _page_manager_page_manager_component__WEBPACK_IMPORTED_MODULE_6__["PageManagerComponent"] },
    // Individual pages
    { path: 'portfolio/:project', component: _portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioItemComponent"] },
    { path: 'blog/:article', component: _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostComponent"] },
    // About and contact
    { path: 'about-me', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map