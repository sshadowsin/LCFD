(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule,
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_category_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category-item.service */ 3331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);








let Tab1Page = class Tab1Page {
    constructor(navCtrl, categoryService, platform, router) {
        this.navCtrl = navCtrl;
        this.categoryService = categoryService;
        this.platform = platform;
        this.router = router;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
        // this.items = this.categoryService.getItems();
    }
    openItem(routurl) {
        this.navCtrl.navigateForward(routurl);
    }
    ngAfterViewInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            const currentUrl = this.router.url;
            if (currentUrl === '/inside/tabs/tab1') {
                // eslint-disable-next-line @typescript-eslint/dot-notation
                navigator['app'].exitApp();
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_category_item_service__WEBPACK_IMPORTED_MODULE_2__.CategoryItemService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Category\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Category</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n\n  <ion-list lines=\"none\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/category-content/0')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Introduction</h2>\n        <p>LCFD Protocols Intro</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/medical-history.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/category-content/1')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>General Patient Care Guidelines</h2>\n        <p>Protocols 1-8</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/medical-equipment.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/category-content/2')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Cardiac Patient Care Guidelines</h2>\n        <p>Protocols 9-15</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/cardiogram.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/category-content/3')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Medical Patient Care Guidelines</h2>\n        <p>Protocols 16-30</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/ambulance.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item detail=\"true\" (click)=\"openItem('inside/tabs/category-content/4')\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Trauma Patient Care Guidelines</h2>\n        <p>Protocols 31-38</p>\n      </ion-label>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../assets/band-aid.png\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map