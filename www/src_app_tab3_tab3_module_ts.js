(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 4255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let Tab3Page = class Tab3Page {
    constructor(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.searchTerm2 = null;
        this.protocols = [
            {
                name: 'Introduction to Logan City Fire Dept. Protocols',
                level: 0,
            },
            {
                name: 'Protocol 01: AIRWAY AND TRACHEOSTOMY MANAGEMENT',
                level: 1,
            },
            {
                name: 'Protocol 02: ALTERED MENTAL STATUS',
                level: 2,
            },
            {
                name: 'Protocol 03:DEATH DETERMINATION AND TERMINATION OF RESUSCITATION',
                level: 3,
            },
            { name: 'Protocol 04: FAMILY CENTERED CARE', level: 4 },
            { name: 'Protocol 05: NAUSEA / VOMITING', level: 5 },
            { name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT', level: 6 },
            { name: 'Protocol 07: PEDIATRIC ASSESSMENT', level: 7 },
            { name: 'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY', level: 8 },
            { name: 'Protocol 09: CARDIAC ARREST', level: 9 },
            { name: 'Protocol 10: BRADYCARDIA (Symptomatic)', level: 10 },
            {
                name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
                level: 11,
            },
            {
                name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
                level: 12,
            },
            { name: 'Protocol 13: NEWBORN RESUSCITATION', level: 13 },
            { name: 'Protocol 14: POST CARDIAC ARREST (ROSC)', level: 14 },
            { name: 'Protocol 15: TACHYCARDIA (With a Pulse)', level: 15 },
            { name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS', level: 16 },
            { name: 'Protocol 17 : DROWNING OR SUBMERSION', level: 17 },
            { name: 'Protocol 18: FEVER MANAGEMENT', level: 18 },
            { name: 'Protocol 19: GLUCOSE EMERGENCIES', level: 19 },
            { name: 'Protocol 20: OBSTETRICAL EMERGENCIES', level: 20 },
            { name: 'Protocol 21: OPIOID OVERDOSE', level: 21 },
            { name: 'Protocol 22: RESPIRATORY DISTRESS', level: 22 },
            { name: 'Protocol 23: SEIZURES', level: 23 },
            { name: 'Protocol 24: SUSPECTED STROKE', level: 24 },
            {
                name: 'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES',
                level: 25,
            },
            { name: 'Protocol 26: TOXIC EXPOSURE - CARBON MONOXIDE', level: 26 },
            { name: 'Protocol 27: TOXIC EXPOSURE – CYANIDE', level: 27 },
            { name: 'Protocol 28: TOXIC EXPOSURE - HYDROFLUORIC ACID', level: 28 },
            {
                name: 'Protocol 29: TOXIC EXPOSURE - ORGANOPHOSPHATES / NERVE AGENTS',
                level: 29,
            },
            {
                name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
                level: 30,
            },
            { name: 'Protocol 31: GENERAL TRAUMA MANAGEMENT', level: 31 },
            { name: 'Protocol 32: AMPUTATIONS / TOOTH AVULSIONS', level: 32 },
            {
                name: 'Protocol 33: BURNS – THERMAL / ELECTRICAL / LIGHTNING',
                level: 33,
            },
            { name: 'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)', level: 34 },
            {
                name: 'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES',
                level: 35,
            },
            { name: 'Protocol 36: NON-ACCIDENTAL TRAUMA/ABUSE', level: 36 },
            { name: 'Protocol 37: SNAKE BITES', level: 37 },
            { name: 'Protocol 38: SPINAL MOTION RESTRICTION (SMR)', level: 38 },
        ];
        this.platform.backButton.subscribe(() => {
            this.searchTerm2 = null;
            this.navCtrl.navigateBack('inside/tabs/tab1');
        });
    }
    openProtocol(routurl) {
        this.searchTerm2 = null;
        this.navCtrl.navigateForward(routurl);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".proto-div {\n  border: 1px solid gainsboro;\n  margin: 0 3%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm90by1kaXZ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgbWFyZ2luOiAwIDMlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ 4255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Protocols\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-item lines=\"none\" class=\"mt-2\">\n    <ion-searchbar showCancelButton=\"always\" mode=\"ios\" placeholder=\"Search\" animated [(ngModel)]=\"searchTerm2\">\n    </ion-searchbar>\n  </ion-item>\n\n  <!-- <div>\n    <h1 class=\"text-center f-1\">Introduction</h1>\n    <ion-item lines=\"none\" class=\"proto-div\" (click)=\"openProtocol('protocols-content/0')\">\n      <ion-label>{{protocols[0]}}</ion-label>\n      <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n    </ion-item>\n  </div> -->\n\n\n  <ion-list *ngFor=\"let protocol of protocols | filter:searchTerm2; let i = index;\">\n    <h1 class=\"text-center f-1 mx-1\" *ngIf=\" i===0 && !searchTerm2\">Introduction</h1>\n    <h1 class=\"text-center f-1 mx-1\" *ngIf=\" i===1 && !searchTerm2\">General Patient Care Guidelines</h1>\n    <h1 class=\"text-center f-1 mx-1\" *ngIf=\" i===9 && !searchTerm2\">CARDIAC PATIENT CARE GUIDELINES</h1>\n    <h1 class=\"text-center f-1 mx-1\" *ngIf=\" i===16 && !searchTerm2\">MEDICAL PATIENT CARE GUIDELINES</h1>\n    <h1 class=\"text-center f-1 mx-1\" *ngIf=\" i===31 && !searchTerm2\">TRAUMA PATIENT CARE GUIDELINES</h1>\n    <ion-item (click)=\"openProtocol('inside/tabs/protocols-content/'+ protocol.level)\" lines=\"none\" class=\"proto-div\">\n      <ion-label>{{protocol.name}}</ion-label>\n      <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n\n  <!-- <div>\n    <h1 class=\"text-center f-1\">General Patient Care Guidelines</h1>\n\n    <div *ngFor=\"let protocol of protocols | filter:searchTerm; let i = index;\">\n      <div *ngIf=\" i>0 && i<9\">\n        <ion-item lines=\"none\" class=\"proto-div\" (click)=\"openProtocol('protocols-content/'+i)\">\n          <ion-label>{{protocol}}</ion-label>\n          <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n        </ion-item>\n      </div>\n    </div>\n\n  </div>\n\n  <div>\n    <h1 class=\"text-center f-1\">CARDIAC PATIENT CARE GUIDELINES</h1>\n\n    <div *ngFor=\"let protocol of protocols; let i = index;\">\n      <div *ngIf=\" i>8 && i<16\">\n        <ion-item lines=\"none\" class=\"proto-div\" (click)=\"openProtocol('protocols-content/'+i)\">\n          <ion-label>{{protocol}}</ion-label>\n          <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n        </ion-item>\n      </div>\n    </div>\n\n  </div>\n  <div>\n    <h1 class=\"text-center f-1\">MEDICAL PATIENT CARE GUIDELINES</h1>\n\n    <div *ngFor=\"let protocol of protocols; let i = index;\">\n      <div *ngIf=\" i>15 && i<31\">\n        <ion-item lines=\"none\" class=\"proto-div\" (click)=\"openProtocol('protocols-content/'+i)\">\n          <ion-label>{{protocol}}</ion-label>\n          <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n        </ion-item>\n      </div>\n    </div>\n\n  </div>\n  <div>\n    <h1 class=\"text-center f-1\">TRAUMA PATIENT CARE GUIDELINES</h1>\n\n    <div *ngFor=\"let protocol of protocols; let i = index;\">\n      <div *ngIf=\" i>30 && i<39\">\n        <ion-item lines=\"none\" class=\"proto-div\" (click)=\"openProtocol('protocols-content/'+i)\">\n          <ion-label>{{protocol}}</ion-label>\n          <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n        </ion-item>\n      </div>\n    </div>\n\n  </div> -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map