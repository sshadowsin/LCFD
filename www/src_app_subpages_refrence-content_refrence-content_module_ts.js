(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_subpages_refrence-content_refrence-content_module_ts"],{

/***/ 4930:
/*!******************************************************!*\
  !*** ./src/app/services/refrence-content.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrenceContentService": () => (/* binding */ RefrenceContentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let RefrenceContentService = class RefrenceContentService {
    constructor() { }
    getContent(level) {
        switch (level) {
            case '0':
                this.name = 'MIST';
                this.images = ['mist1.jpg'];
                this.headings = [''];
                this.contacts = [
                    {
                        name: 'Cache Valley Hospital',
                        no: '(435) 753-2847'
                    },
                    {
                        name: 'Logan Regional Hospital',
                        no: '(435) 755-6642'
                    }
                ];
                break;
            case '1':
                this.name = '12 Leads';
                this.images = ['lead1.jpg', 'lead2.png'];
                this.headings = ['Precordial Lead Placement', ''];
                this.contacts = null;
                break;
            case '2':
                // eslint-disable-next-line @typescript-eslint/quotes
                this.name = "Rule of 9's";
                this.images = ['rule1.jpg'];
                this.headings = [''];
                this.contacts = null;
                break;
            case '3':
                this.name = 'Glasgow Coma Score';
                this.images = ['glasgow1.jpg', 'glasgow2.jpg'];
                this.headings = ['Adult', 'Pediatric'];
                this.contacts = null;
                break;
            case '4':
                this.name = 'Vital Signs';
                this.images = ['vital1.jpg'];
                this.headings = [''];
                this.contacts = null;
                break;
            case '5':
                this.name = 'Common Lab Values';
                this.images = ['common1.jpg'];
                this.headings = [''];
                this.contacts = null;
                break;
            case '6':
                this.name = 'APGAR';
                this.images = ['apgar1.jpg'];
                this.headings = [''];
                this.contacts = null;
                break;
            case '7':
                this.name = 'Trauma Level Criteria (I, II, III)';
                this.images = ['2022.jpg'];
                this.headings = [''];
                this.contacts = null;
                break;  
            case '8':
                this.name = '913: Needle Decompression Prodecure';
                this.images = ['913ND.pdf'];
                this.headings = [' '];
                this.contacts = null;
                break;
            case '9':
                this.name = '914: I/O Procedure';
                this.images = ['914IO1.pdf', '914IO2.pdf', '914IO3.pdf', '914IO4.pdf', '914IO5.pdf', '914IO6.pdf', '914IO7.pdf'];
                this.headings = ['-', '-', '-', '-', '-', '-', '-'];
                this.contacts = null;
                break;
            case '10':
                this.name = '915: Sucking Chest Wound Procedure';
                this.images = ['915Suck.pdf'];
                this.headings = [''];
                this.contacts = null;
                break; 
            default:
                this.name = 'Default';
                this.images = null;
                this.headings = null;
                this.contacts = null;
                break;
        }
    }
};
RefrenceContentService.ctorParameters = () => [];
RefrenceContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], RefrenceContentService);



/***/ }),

/***/ 9033:
/*!******************************************************************************!*\
  !*** ./src/app/subpages/refrence-content/refrence-content-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrenceContentPageRoutingModule": () => (/* binding */ RefrenceContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _refrence_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refrence-content.page */ 8740);




const routes = [
    {
        path: '',
        component: _refrence_content_page__WEBPACK_IMPORTED_MODULE_0__.RefrenceContentPage
    }
];
let RefrenceContentPageRoutingModule = class RefrenceContentPageRoutingModule {
};
RefrenceContentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RefrenceContentPageRoutingModule);



/***/ }),

/***/ 7923:
/*!**********************************************************************!*\
  !*** ./src/app/subpages/refrence-content/refrence-content.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrenceContentPageModule": () => (/* binding */ RefrenceContentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _refrence_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refrence-content-routing.module */ 9033);
/* harmony import */ var _refrence_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refrence-content.page */ 8740);







let RefrenceContentPageModule = class RefrenceContentPageModule {
};
RefrenceContentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _refrence_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.RefrenceContentPageRoutingModule
        ],
        declarations: [_refrence_content_page__WEBPACK_IMPORTED_MODULE_1__.RefrenceContentPage]
    })
], RefrenceContentPageModule);



/***/ }),

/***/ 8740:
/*!********************************************************************!*\
  !*** ./src/app/subpages/refrence-content/refrence-content.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrenceContentPage": () => (/* binding */ RefrenceContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_refrence_content_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./refrence-content.page.html */ 9360);
/* harmony import */ var _refrence_content_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refrence-content.page.scss */ 1748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_refrence_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/refrence-content.service */ 4930);







let RefrenceContentPage = class RefrenceContentPage {
    constructor(content, route, location) {
        this.content = content;
        this.route = route;
        this.location = location;
        this.level = null;
        this.level = this.route.snapshot.paramMap.get('level');
        this.content.getContent(this.level);
    }
    ngOnInit() {
        this.name = this.content.name;
        this.images = this.content.images;
        this.headings = this.content.headings;
        this.contacts = this.content.contacts;
    }
    backButton() {
        this.location.back();
    }
};
RefrenceContentPage.ctorParameters = () => [
    { type: src_app_services_refrence_content_service__WEBPACK_IMPORTED_MODULE_2__.RefrenceContentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
RefrenceContentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-refrence-content',
        template: _raw_loader_refrence_content_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_refrence_content_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RefrenceContentPage);



/***/ }),

/***/ 1748:
/*!**********************************************************************!*\
  !*** ./src/app/subpages/refrence-content/refrence-content.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZyZW5jZS1jb250ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9360:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subpages/refrence-content/refrence-content.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" (click)=\"backButton()\" mode=\"ios\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      Back\n    </ion-button>\n    <!-- <ion-button slot=\"start\" (click)=\"backButton()\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon> -->\n      <!-- <ion-back-button defaultHref = \"inside/tabs/tab5\">\n      </ion-back-button> -->\n      <!-- <ion-back-button></ion-back-button> -->\n    <!-- </ion-button> -->\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <div class=\"d-flex flex-column\">\n      <div *ngFor=\"let head of headings; let i = index\">\n        <div>\n          <h1 class=\"text-center\">{{head}}</h1>\n          <img src=\"../../../assets/{{images[i]}}\" alt=\"\" class=\"img-fluid d-block\">\n        </div>\n      </div>\n    </div>\n  </ion-item>\n\n  <div *ngIf=\"contacts\">\n    <div *ngFor=\"let number of contacts\">\n      <a href=\"tel:+{{number.no}}\" class=\"text-dark no-underline\">\n      <ion-item class=\"mist-tel m-3\" lines=\"none\">\n        <ion-label>{{number.name}}</ion-label>\n        <ion-icon name=\"call\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_subpages_refrence-content_refrence-content_module_ts.js.map