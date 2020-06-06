(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-dialog/app-dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-dialog/app-dialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1kaWFsb2cvYXBwLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-dialog/app-dialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-dialog/app-dialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-dialog/app-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-dialog/app-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: AppDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogComponent", function() { return AppDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppDialogComponent = /** @class */ (function () {
    function AppDialogComponent() {
    }
    AppDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-dialog',
            template: __webpack_require__(/*! ./app-dialog.component.html */ "./src/app/app-dialog/app-dialog.component.html"),
            styles: [__webpack_require__(/*! ./app-dialog.component.css */ "./src/app/app-dialog/app-dialog.component.css")]
        })
    ], AppDialogComponent);
    return AppDialogComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeApp {\r\n    background-image: url('/assets/img/bg.png') !important;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lQXBwIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmcucG5nJykgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"homeApp\">\n\n\n\n<app-base-app></app-base-app>\n\n</body>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BridgeTheGap';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _base_app_base_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-app/base-app.component */ "./src/app/base-app/base-app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _base_app_base_app_component__WEBPACK_IMPORTED_MODULE_5__["BaseAppComponent"],
                _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AppDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-app/base-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/base-app/base-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-horizontal {\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    margin-top: 16px;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS1hcHAvYmFzZS1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYmFzZS1hcHAvYmFzZS1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/base-app/base-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/base-app/base-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homeApp\" style=\"height: 100%;width:100%;\">\n  <div class=\"container\">\n    <div style=\"text-align: center; font-size: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n    <h1>Bridge The Gap</h1>\n  </div>\n    <mat-horizontal-stepper [linear]=\"isLinear\" labelPosition=\"bottom\" *ngIf=\"!showresult\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Select Skill</ng-template>\n          <mat-form-field>\n            <mat-label>Select Skills</mat-label>\n            <mat-select [formControl]=\"industries\" multiple>\n              <mat-option *ngFor=\"let industry of industryList\" [value]=\"industry\">{{industry}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Select Domain</ng-template>\n          <mat-form-field>\n            <mat-label>Select Domain</mat-label>          \n            <mat-select [formControl]=\"domains\" multiple>\n              <mat-option *ngFor=\"let domain of domainList\" [value]=\"domain\">{{domain}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          \n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"thirdFormGroup\" optional>\n        <form [formGroup]=\"thirdFormGroup\">\n          <ng-template matStepLabel>Select Location</ng-template>\n          <mat-form-field>\n            <mat-label>Select Location</mat-label>\n            <mat-select [formControl]=\"locations\" multiple>\n              <mat-option *ngFor=\"let location of locationList\" [value]=\"locations\">{{location}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          \n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"fifthGroup\" optional>\n        <form [formGroup]=\"fifthGroup\">\n          <ng-template matStepLabel>Select Experience</ng-template>\n          <mat-form-field>\n            <mat-label>Select Experience</mat-label>\n            <mat-select [formControl]=\"exps\" multiple>\n              <mat-option *ngFor=\"let exp of expList\" [value]=\"exp\">{{exp}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          \n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"fourthGroup\">\n        <form [formGroup]=\"fourthGroup\">\n          <ng-template matStepLabel>Select Gap</ng-template>\n          <mat-form-field>\n            <mat-label>Select Gap</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let gap of gapList\" [value]=\"gap\">\n                {{gap}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          \n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        <h3 style=\"color:whitesmoke;\">You are now done.</h3>\n        <div>\n          <div>\n            <button mat-button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          \n         \n          <button mat-raised-button color=\"primary\" (click)=\"showresult=true; \">Show Result</button>\n          </div>\n\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n    \n\n\n\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\" layout-wrap *ngIf=\"showresult\" style=\"margin-left:50px; text-align: align;\">\n    <h1 style=\"text-align: center;\">Here are top matched job based on your selection!</h1>\n    <div class=\"grid-container\">\n      <mat-grid-list cols=\"3\" rowHeight=\"400px\">\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n      <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title> \tAccenture India Pvt Ltd. - Bangalore</mat-card-title>\n        <mat-card-title > Job Title - Senior Analyst</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"../../assets/img/1.jpg\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        \n          Skilmatch:-\n          <ul>\n            <li>Adversiting - 45%</li>\n            <li>Event Management - 30%</li>\n          </ul>\n          \n        \n        <p>Increase your chances for selection. We recommend below courses</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <a mat-button matTooltip=\"15 people have viewed this course in the past 2 hours.\" matBadge=\"15\" matBadgeColor=\"warn\" style=\"color: blue;\" href=\"#\" target=\"_blank\">Win from courseERA</a>\n        <span class=\"material-icons\">\n          trending_up\n          </span><a mat-button style=\"color:blue;\" href=\"#\" target=\"_blank\">Softskills from LinkedIn</a>\n        \n        \n      </mat-card-actions>\n    </mat-card>  \n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n            <mat-card class=\"example-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title> \tFlipkart India Pvt Ltd. - Bangalore</mat-card-title>\n              <mat-card-title > Job Title - Business Development Manager</mat-card-title>\n            </mat-card-header>\n            <img mat-card-image src=\"../../assets/img/3.jpg\" alt=\"Photo of a Shiba Inu\">\n            <mat-card-content>\n              \n                Skilmatch:-\n                <ul>\n                  <li>Adversiting - 45%</li>\n                  <li>Management - 30%</li>\n                </ul>\n                \n              \n              <p>Increase your chances for selection. We recommend below courses</p>\n            </mat-card-content>\n            <mat-card-actions>\n              <a mat-button style=\"color: blue;\" href=\"#\" target=\"_blank\">Win from courseERA</a>\n              <a mat-button style=\"color:blue;\" href=\"#\" target=\"_blank\">Softskills from LinkedIn</a>\n              \n              \n            </mat-card-actions>\n          </mat-card>  \n                </mat-grid-tile>\n                 <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\n             <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>MM Media Pvt Ltd - Mumbai</mat-card-title>\n        <mat-card-title>Job Title -Associate</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"../../assets/img/2.jpg\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        \n          Skilmatch to profile:-\n          <ul>\n            <li>Communication - 50%</li>\n            <li>Microsoft Office - 40%</li>\n          </ul>\n          \n        \n        <p>Increase your chances for selection. We recommend below courses</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <a mat-button style=\"color:blue\" href=\"#\" target=\"_blank\">Python from courseERA</a>\n        <a mat-button style=\"color:blue;\" href=\"#\" target=\"_blank\">Softskills from LinkedIn</a>\n        \n      </mat-card-actions>\n    </mat-card>  \n          </mat-grid-tile>\n      </mat-grid-list>\n  </div>\n  </div>\n  <div>\n    <button style=\"margin-left:850px; background-color:teal\" mat-button mat-raised-button (click)=\"showresult=false; \">Try Again</button>\n  </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/base-app/base-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/base-app/base-app.component.ts ***!
  \************************************************/
/*! exports provided: BaseAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAppComponent", function() { return BaseAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");






var BaseAppComponent = /** @class */ (function () {
    function BaseAppComponent(_formBuilder, _snackBar, dialog) {
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.isLinear = true;
        this.industries = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.domains = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.locations = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.exps = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.gap = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.showresult = false;
        this.industryList = ['Marketing', 'Microsoft Office', 'Communication', 'Accounts', 'JAVA', 'Hadoop', 'Django', 'Ruby', 'HR', 'Python', 'SQL', 'Trainer'];
        this.locationList = ['Bangalore', 'Chennai', 'Mumbai', 'Delhi/NCR', 'Gurugram', 'Noida', 'Ahmedabad', 'Kolkata'];
        this.expList = ['0-1 yrs', '1-3 yrs', '3-5 yrs', '5-8 yrs', '8-10 yrs', '10+ yrs'];
        this.gapList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.domainList = ['Media / Entertainment / Internet', 'Advertising / PR / MR / Event Management', 'Banking / Financial Services / Broking', 'Aviation', 'Manager', 'IT-Software Programming', 'Data Science',];
    }
    BaseAppComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            industries: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
            domains: ['']
        });
        this.thirdFormGroup = this._formBuilder.group({
            locations: ['']
        });
        this.fourthGroup = this._formBuilder.group({
            gap: ['']
        });
        this.fifthGroup = this._formBuilder.group({
            exps: ['']
        });
        this._snackBar.open('Check out the latest job trending accross industries.', 'here..', {
            duration: 10000,
            horizontalPosition: 'start',
            verticalPosition: 'top',
        });
    };
    BaseAppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BaseAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-app',
            template: __webpack_require__(/*! ./base-app.component.html */ "./src/app/base-app/base-app.component.html"),
            styles: [__webpack_require__(/*! ./base-app.component.css */ "./src/app/base-app/base-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], BaseAppComponent);
    return BaseAppComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\srdev\Hackathon\UI\BridgeTheGap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map