(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page],
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
var Tab2Page_1;





let Tab2Page = Tab2Page_1 = class Tab2Page {
    constructor(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        // level = 0;
        this.nextPage = Tab2Page_1;
        this.searchTerm = null;
        this.drugs = [
            { name: 'Acetaminophen (Tylenol)', level: 0 },
            { name: 'Adenosine (Adenocard)', level: 1 },
            { name: 'Albuterol (Ventolin/Proair/Proventil)', level: 2 },
            { name: 'Amiodarone Hydrochloride (Cordarone)', level: 3 },
            { name: 'Aspirin (Ecotrin)', level: 4 },
            { name: 'Atropine', level: 5 },
            { name: 'Calcium Chloride/ Calcium Gluconate', level: 6 },
            // { name: 'Diazepam (Valium)', level: 7 },
            { name: 'Diphenhydramine (Benadryl)', level: 8 },
            { name: 'Dextrose', level: 9 },
            { name: 'Epinephrine (Adrenaline)', level: 10 },
            // { name: 'Epi Drip', level: 11 },
            { name: 'Epinephrine“Push Dose” Pressor Administration', level: 12 },
            { name: 'Fentanyl', level: 13 },
            { name: 'Glucagon (GlucaGen)', level: 14 },
            { name: 'Haloperidol (Haldol)', level: 15 },
            // { name: 'Hydroxocobalamin', level: 16 },
            { name: 'Ibuprofen (Motrin/Advil)', level: 17 },
            { name: 'Ipratropium (Atrovent)', level: 18 },
            { name: 'Ketamine HCL', level: 19 },
            { name: 'Ketorolac (Toradol)', level: 20 },
            { name: 'Lidocaine', level: 21 },
            { name: 'Lorazepam (Ativan)', level: 22 },
            { name: 'Magnesium Sulfate', level: 23 },
            { name: 'Morphine', level: 24 },
            { name: 'Midazolam (Versed)', level: 25 },
            { name: 'Naloxone (Narcan)', level: 26 },
            { name: 'Nitroglycerin', level: 27 },
            { name: 'Norepinephrine', level: 28 },
            { name: 'Ondansetron', level: 29 },
            { name: 'Oral Glucose', level: 30 },
            { name: 'Oxytocin (Pitocin)', level: 31 },
            { name: 'Promethazine (Phenergan)', level: 32 },
            { name: 'Sodium Bicarbonate', level: 33 },
            { name: 'Tranexamic Acid/TXA (Cyklokapron)', level: 34 },
        ];
        this.platform.backButton.subscribe(() => {
            this.searchTerm = null;
            this.navCtrl.navigateBack('inside/tabs/tab1');
        });
    }
    openItem(routurl) {
        this.navCtrl.navigateForward(routurl);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
Tab2Page = Tab2Page_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Medications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-item lines=\"none\" class=\"mt-2\">\n    <ion-searchbar showCancelButton=\"always\" mode=\"ios\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" animated>\n    </ion-searchbar>\n  </ion-item>\n\n\n  <ion-list *ngFor=\"let drug of drugs | filter:searchTerm\">\n    <ion-item (click)=\"openItem('inside/tabs/drugs-content/' + drug.level )\" lines=\"full\">\n      <ion-label>\n        {{drug.name}}\n      </ion-label>\n      <ion-icon name=\"medical-outline\" size=\"large\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map