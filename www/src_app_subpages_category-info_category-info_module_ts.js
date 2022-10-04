(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_subpages_category-info_category-info_module_ts"],{

/***/ 3371:
/*!************************************************************************!*\
  !*** ./src/app/subpages/category-info/category-info-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryInfoPageRoutingModule": () => (/* binding */ CategoryInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _category_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-info.page */ 3947);




const routes = [
    {
        path: '',
        component: _category_info_page__WEBPACK_IMPORTED_MODULE_0__.CategoryInfoPage
    }
];
let CategoryInfoPageRoutingModule = class CategoryInfoPageRoutingModule {
};
CategoryInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryInfoPageRoutingModule);



/***/ }),

/***/ 9121:
/*!****************************************************************!*\
  !*** ./src/app/subpages/category-info/category-info.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryInfoPageModule": () => (/* binding */ CategoryInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _category_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-info-routing.module */ 3371);
/* harmony import */ var _category_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-info.page */ 3947);







let CategoryInfoPageModule = class CategoryInfoPageModule {
};
CategoryInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _category_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryInfoPageRoutingModule
        ],
        declarations: [_category_info_page__WEBPACK_IMPORTED_MODULE_1__.CategoryInfoPage]
    })
], CategoryInfoPageModule);



/***/ }),

/***/ 3947:
/*!**************************************************************!*\
  !*** ./src/app/subpages/category-info/category-info.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryInfoPage": () => (/* binding */ CategoryInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_category_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category-info.page.html */ 1836);
/* harmony import */ var _category_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-info.page.scss */ 1824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_category_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category-item.service */ 3331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);







let CategoryInfoPage = class CategoryInfoPage {
    constructor(route, content, location) {
        this.route = route;
        this.content = content;
        this.location = location;
        this.level = null;
        this.level = this.route.snapshot.paramMap.get('level');
        this.content.getContent(this.level);
    }
    ngOnInit() {
        this.name = this.content.name;
        this.discription = this.content.discription;
        this.subPointsHeading = this.content.subPointsHeading;
        this.subPoints = this.content.subPoints;
        this.footerText = this.content.footerText;
        this.image = this.content.image;
    }
    backButton() {
        this.location.back();
    }
};
CategoryInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_category_item_service__WEBPACK_IMPORTED_MODULE_2__.CategoryItemService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
CategoryInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-category-info',
        template: _raw_loader_category_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryInfoPage);



/***/ }),

/***/ 1824:
/*!****************************************************************!*\
  !*** ./src/app/subpages/category-info/category-info.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1pbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1836:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subpages/category-info/category-info.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\" *ngIf=\"level !== '5'\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref = \"inside/tabs/category-content/{{level}}\" >\n      </ion-back-button>\n    </ion-buttons> -->\n    <ion-button slot=\"start\" (click)=\"backButton()\" mode=\"ios\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      Back\n    </ion-button>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"primary\" *ngIf=\"level === '5'\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref = \"inside/tabs/category-content/4\" >\n      </ion-back-button>\n    </ion-buttons> -->\n    <ion-button slot=\"start\" (click)=\"backButton()\" mode=\"ios\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      Back\n    </ion-button>\n    <ion-title>Utah Trauma System Advisory Committee</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content *ngIf=\"level !== '5'\">\n  <ion-item>\n    <div class=\"d-block\">\n      <h1 class=\"f-1 text-center\">{{name}}</h1>\n      <p [innerHtml]=\" discription\" class=\"text-center mt-3\">\n      </p>\n    </div>\n  </ion-item>\n\n  <div *ngIf=\"subPointsHeading\">\n    <div *ngFor=\"let heading of subPointsHeading; let i = index\" class=\"mx-3\">\n      <h6 [innerHtml]=\"heading\" class=\"f-2 mb-3\"></h6>\n      <div *ngFor=\"let point of subPoints[i].points\">\n        <p [innerHtml]=\"point\" class=\"my-1\"></p>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n  <ion-item *ngIf=\"footerText\">\n    <p [innerHtml]=\"footerText\" class=\"magenta\"></p>\n  </ion-item>\n\n  <ion-item *ngIf=\"image\">\n    <img src=\"../../../assets/{{image}}\" alt=\"\">\n  </ion-item>\n</ion-content>\n\n\n<ion-content *ngIf=\"level === '5'\">\n  <div class=\"mx-3\">\n    <div class=\"spacer\" style=\"height: 17px;\"></div>\n    <div id=\"utahTraumaSystemAdvisoryCommittee-container160\">\n      <div id=\"utahTraumaSystemAdvisoryCommittee-markdown2596\" class=\"show-list-numbers-and-dots\"></div>\n    </div>\n    <div id=\"utahTraumaSystemAdvisoryCommittee-markdown2598\" class=\"show-list-numbers-and-dots\"></div>\n    <div id=\"utahTraumaSystemAdvisoryCommittee-markdown2599\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <h2 style=\"background-color:magenta;text-align:center ;font-size: 24px; color: Black;\">\n      <p>•\n        <b>Utah Trauma System Advisory Committee</b>\n      </p>\n\n    </h2>\n    <div id=\"utahTraumaSystemAdvisoryCommittee-markdown2600\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <h2 style=\"background-color:magenta;text-align:center ;font-size: 18px; color: Black;\">\n      <p>•\n        <b>Guidelines for transport of Trauma Patients to Freestanding Emergency Departments</b>\n      </p>\n\n    </h2>\n    <h2 style=\"background-color:magenta;text-align:left ;font-size: 14px; color: Black;\">\n      <p>• The following types of patients are NOT candidates for transport to a freestanding ED (FSED):\n        <br>\n      </p>\n      <blockquote> • Critically-injured patients with unstable vital signs or other life-threatening conditions UNLESS the patient’s airway is not maintainable with EMS advanced or basic airway management techniques and the FSED is the closest ED\n        <p></p>• Traumatic cardiac arrest patients\n        <p></p>• Patients meeting Steps 1-3 criteria of the Utah Trauma Field Triage Guidelines\n        <p></p>• Patients with head injuries who are over 65 years old OR who are taking anticoagulants\n        <p></p>• Patients with angulated long bone fractures\n        <p></p>• Patients with suspected open fractures or dislocations\n        <p></p>• EMS provider judgement\n        <p></p>\n      </blockquote>\n    </h2>\n    <div id=\"utahTraumaSystemAdvisoryCommittee-markdown2603\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <h2 style=\"background-color:magenta;text-align:center ;font-size: 18px; color: Black;\">\n      <p>•\n        <b>THESE GUIDELINES MAY BE MODIFIED DURING A DISASTER SITUATION</b>\n      </p>\n\n    </h2>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_subpages_category-info_category-info_module_ts.js.map