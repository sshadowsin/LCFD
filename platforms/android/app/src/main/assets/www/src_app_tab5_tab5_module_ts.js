(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 6672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 2584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 6672);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 2584);







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 2584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab5.page.html */ 6717);
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss */ 4966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let Tab5Page = class Tab5Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    openItem(routurl) {
        this.navCtrl.navigateForward(routurl);
    }
};
Tab5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab5Page);



/***/ }),

/***/ 4966:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ref-div {\n  border: 1px solid gainsboro;\n  margin: 2%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWYtZGl2e1xuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gIG1hcmdpbjogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 6717:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Quick Reference\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"bg-info\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Quick Reference</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/0')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>MIST</h3>\n        <p>Guidline for providing a CO..........</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/telephone.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/1')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>12 Leads</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/bar-graph.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/2')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>Rule of 9's</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/body-scan.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/3')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>Glasgow Coma Score</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/pie-chart.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/4')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>Vital Signs</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/penis.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/5')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>Common Lab Values</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/microscope.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\" class=\"ref-div\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/refrence-content/6')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h3>APGAR</h3>\n        <p>Quick Reference</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/toddler.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map