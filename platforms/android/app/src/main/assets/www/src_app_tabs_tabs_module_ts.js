(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_category-item_service_ts"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab2_tab2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 7008)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_tab3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
            },
            {
                path: 'tab5',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab5_tab5_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab5/tab5.module */ 5184)).then(m => m.Tab5PageModule)
            },
            {
                path: 'category-content/:level',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_category-item_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_subpages_category-content_category-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../subpages/category-content/category-content.module */ 7819)).then(m => m.CategoryContentPageModule)
            },
            {
                path: 'drugs-content/:level',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_subpages_drugs-content_drugs-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../subpages/drugs-content/drugs-content.module */ 9057)).then(m => m.DrugsContentPageModule)
            },
            {
                path: 'protocols-content/:level',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_subpages_protocols-content_protocols-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../subpages/protocols-content/protocols-content.module */ 9269)).then(m => m.ProtocolsContentPageModule)
            },
            {
                path: 'refrence-content/:level',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_subpages_refrence-content_refrence-content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../subpages/refrence-content/refrence-content.module */ 7923)).then(m => m.RefrenceContentPageModule)
            },
            {
                path: 'category-info/:level',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_category-item_service_ts"), __webpack_require__.e("src_app_subpages_category-info_category-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../subpages/category-info/category-info.module */ 9121)).then(m => m.CategoryInfoPageModule)
            },
            {
                path: '',
                redirectTo: 'tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"file-tray-stacked\"></ion-icon>\n      <ion-label>Category</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"bag-add\"></ion-icon>\n      <ion-label>Drugs</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"grid\"></ion-icon>\n      <ion-label>Protocols</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>Info</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab5\">\n      <ion-icon name=\"pulse\"></ion-icon>\n      <ion-label>Quick Ref</ion-label>\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map