(self["webpackChunklogan_city"] = self["webpackChunklogan_city"] || []).push([["src_app_subpages_category-content_category-content_module_ts"],{

/***/ 3629:
/*!******************************************************************************!*\
  !*** ./src/app/subpages/category-content/category-content-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryContentPageRoutingModule": () => (/* binding */ CategoryContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _category_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-content.page */ 5990);




const routes = [
    {
        path: '',
        component: _category_content_page__WEBPACK_IMPORTED_MODULE_0__.CategoryContentPage
    }
];
let CategoryContentPageRoutingModule = class CategoryContentPageRoutingModule {
};
CategoryContentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryContentPageRoutingModule);



/***/ }),

/***/ 7819:
/*!**********************************************************************!*\
  !*** ./src/app/subpages/category-content/category-content.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryContentPageModule": () => (/* binding */ CategoryContentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _category_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-content-routing.module */ 3629);
/* harmony import */ var _category_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-content.page */ 5990);
/* harmony import */ var src_app_models_text_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/text-highlight */ 827);








let CategoryContentPageModule = class CategoryContentPageModule {
};
CategoryContentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryContentPageRoutingModule,
        ],
        declarations: [_category_content_page__WEBPACK_IMPORTED_MODULE_1__.CategoryContentPage, src_app_models_text_highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightPipe],
        // providers: [HighlightPipe]
    })
], CategoryContentPageModule);



/***/ }),

/***/ 5990:
/*!********************************************************************!*\
  !*** ./src/app/subpages/category-content/category-content.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryContentPage": () => (/* binding */ CategoryContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_category_content_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category-content.page.html */ 171);
/* harmony import */ var _category_content_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-content.page.scss */ 7854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_category_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category-item.service */ 3331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







// import { HighlightPipe } from 'src/app/models/text-highlight';

let CategoryContentPage = class CategoryContentPage {
    constructor(route, content, navCtrl, location) {
        this.route = route;
        this.content = content;
        this.navCtrl = navCtrl;
        this.location = location;
        this.level = null;
        this.level = this.route.snapshot.paramMap.get('level');
        this.content.getContent(this.level);
        console.log(this.content);
        switch (this.level) {
            case '1':
                this.protocolLevel = 1;
                break;
            case '2':
                this.protocolLevel = 9;
                break;
            case '3':
                this.protocolLevel = 16;
                break;
            case '4':
                this.protocolLevel = 31;
                break;
            default:
                this.protocolLevel = 0;
                break;
        }
    }
    openProtocol(routurl, i) {
        this.navCtrl.navigateForward(routurl + (this.protocolLevel + i));
    }
    openInfo(infoUrl) {
        this.navCtrl.navigateForward(infoUrl);
    }
    sublink(url) {
        this.navCtrl.navigateForward(url);
    }
    ngOnInit() {
        this.name = this.content.name;
        this.discription = this.content.discription;
        this.subPointsHeading = this.content.subPointsHeading;
        this.subPoints = this.content.subPoints;
        this.footerText = this.content.footerText;
        this.protocols = this.content.protocols;
        this.introduction = this.content.introduction;
    }
    backButton() {
        this.location.back();
    }
};
CategoryContentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_category_item_service__WEBPACK_IMPORTED_MODULE_2__.CategoryItemService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
CategoryContentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-category-content',
        template: _raw_loader_category_content_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_content_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryContentPage);



/***/ }),

/***/ 7854:
/*!**********************************************************************!*\
  !*** ./src/app/subpages/category-content/category-content.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1jb250ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 171:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subpages/category-content/category-content.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref = \"inside/tabs/tab1\" >\n      </ion-back-button>\n    </ion-buttons> -->\n    <ion-button slot=\"start\" (click)=\"backButton()\" mode=\"ios\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n      Back\n    </ion-button>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"introduction\">\n  <div class=\"mx-3\">\n    <h2 id=\"introduction-heading859\" style=\"color:#000000;text-align:center;\">Introduction</h2>\n    <div class=\"spacer\" style=\"height: 17px;\"></div>\n    <div id=\"introduction-container116\">\n      <div id=\"introduction-markdown2005\" class=\"show-list-numbers-and-dots\"></div>\n    </div>\n    <div id=\"introduction-markdown2006\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">\n        <strong>Welcome:</strong>\n      </p>\n\n      <p style=\"color:#000000;\">The following document consists of triage, transport, standing orders and patient care protocols for those licensed and designated EMS units that are a functioning part of Logan City Fire Department. </p>\n\n      <ol>\n        <li>Logan City Fire Department (LCFD) is a multi-tiered EMS systems composed of Fire, Search and Rescue, Paramedic Rescue /Advanced EMT Ambulance services. Personnel are certified by BEMS to the Advanced EMT and Paramedic levels. As such these protocols\n          reflect these two certification levels. To cover different responding personnel, it is understood that those with a higher levels of certification shall complete all tasks assigned to a lesser certification level in the event they are the\n          initial care providers. </li>\n      </ol>\n\n      <p style=\"color:#000000;\">The State of Utah, Bureau of Emergency Medical Services administrative rules, set forth the requirements of off-line medical control.</p>\n    </div>\n    <div id=\"introduction-markdown2007\" class=\"show-list-numbers-and-dots\"></div>\n    <div id=\"introduction-markdown2008\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <div id=\"introduction-markdown2009\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">\n        <strong>R426-15-401. Medical Control</strong>\n      </p>\n\n      <ol>\n        <li>All licensees, designated dispatch centers, and quick response units must enter into a written agreement with a physician to serve as its off-line medical director to supervise the medical care or instructions provided by the field EMS personnel\n          and dispatchers.</li>\n        <li>The off-line medical director shall:\n          <ul>\n            <li>develop and implement patient care standards which include written standing orders and triage, treatment, and transport protocols or pre-arrival instructions to be given by designated emergency medical dispatch centers.</li>\n            <li>Ensure the qualification of field EMS personnel involved in patient care and dispatch through the provision of ongoing continuing medical education programs and appropriate review and evaluation</li>\n            <li>Develop and implement an effective quality improvement program, including medical audit, review, and critique of patient care </li>\n            <li>Annually review triage, treatment, and transport protocols and update them as necessary</li>\n            <li>Suspend from patient care, pending Department review, any field EMS personnel who does not comply with local medical triage, treatment and transport protocols, pre-arrival instruction protocols, or who violates any of the EMS rules, or who\n              the medical director determines is providing emergency medical service in a careless or unsafe manner. The medical director must notify the Department within one business day of the suspension</li>\n          </ul>\n        </li>\n      </ol>\n    </div>\n    <div id=\"introduction-markdown2010\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <div id=\"introduction-markdown2011\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">\n        <strong>ALL responding EMS unit affiliated with the LCFD shall refer to EMS administrative rule: R426-15-402. Scene and Patient Management.</strong>\n      </p>\n\n      <ol>\n        <li>Upon arrival at the scene of an injury or illness, the field EMS personnel shall secure radio or telephonic contact with on-line medical control as quickly as possible</li>\n        <li>If radio or telephonic contact cannot be obtained, the field EMS personnel shall so indicate on the EMS report form and follow local written protocol</li>\n      </ol>\n    </div>\n    <div id=\"introduction-markdown2012\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <div id=\"introduction-markdown2013\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">As additionally set forth in the EMS rules and per off-line medical control mandate it shall be noted that:</p>\n\n      <ol>\n        <li>As noted throughout this document the abbreviation\n          <strong>“OLMC”</strong> shall denote\n          <strong>“On Line Medical Control”. For these protocols OLMC shall denote a Licensed Emergency Department Physician who will give medical direction to LCFD units in the field. As noted in BEMS rules, a PA, NP, RN in direct voice communication with the\n            physician may relay their directions. Proper documentation on the PCR shall include the name of the OLMC physician and the name of any other individual who is relaying medical direction</strong>\n        </li>\n        <li>Paramedics acting within their approved scope of practice and functioning as agents of the LCFD shall utilize the following document as standing orders except where it is specified that Medical Control shall be contacted\n          before performing a specific treatment or drug administration. Regardless, they should contact Online medical control at the earliest possible opportunity. LCFD  Advanced EMT’s shall contact Online Medical Control prior to administering\n          any medication with the exceptions noted in Section # 5. </li>\n        <li>\n          <p style=\"color:#000000;\">While on scene with a LCFD Paramedic and an LCFD Ambulance AEMT, the Paramedic can authorize the AEMT to administer a medication or treatment that would normally require the AEMT to contact OLMC prior to giving if: </p>\n          <ul>\n            <li>\n              <p style=\"color:#000000;\">The medication or procedure is within the AEMT’s State approved scope of practice to give-preform and the AEMT is certified and approved to administer by Logan City Fire.</p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">The AEMT shall document the order and the authorizing Paramedic on the PCR</p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">The PM shall stay with the patient and ensure the correct medication and dose will be given and shall retain full responsibility. </p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">A Paramedic shall not order the AEMT to administer or perform a procedure or administer a medication beyond the AEMT’s scope of practice. </p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">A Paramedic shall not authorize the AEMT to give additional future doses of a medication without the Paramedic being physically present at the time of administration. </p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">Once on scene it is recognized the Paramedic will always be the Primary Care Provider and the PCR shall reflect this. </p>\n            </li>\n            <li>\n              <p style=\"color:#000000;\">If there is no Paramedic on scene the AEMT shall abide by the provisions of AEMT Standing Orders and shall follow all Protocols as written. </p>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <p style=\"color:#000000;\">All certified EMT and/or Advanced-leveled EMT’s operating as first responders, or Quick Response Units as contracted under LCFD, Do Not have standing orders and must establish online medical control prior to any medication\n            or IV administration with the exception of Oxygen. Protocols may be utilized if unable to contact medical control as per Bureau of EMS rule 425-15-402 (2) and the reason documented in the EMS PCR report</p>\n        </li>\n        <li>Only those medications found in the Drugs section of this application as approved by the off-line Medical Control Physician are to be used by LCFD personnel</li>\n        <li>An exception is recognized for those EMT-Advanced assigned to a LCFD ambulance who while attached to an ambulance and dispatched to a scene may prior to establishing on-line medical control (OLMC):\n          <ul>\n            <li>Start an IV with NS</li>\n            <li>In a cardiac arrest deliver 1 round of rhythm appropriate ACLS medications</li>\n            <li>In a verified hypoglycemic patient give an appropriate dose of\n              <a  class=\"text-danger text-underline\" (click)=\"sublink('inside/tabs/drugs-content/9')\">Dextrose D50</a> (D50- D25-D10 ) or\n              <a  class=\"text-danger text-underline\" (click)=\"sublink('inside/tabs/drugs-content/14')\">Glucagon</a> if unable to establish venous access</li>\n            <li>In a patient with nausea/vomiting, or as an adjunct to narcotic administration may give an appropriate dose of\n              <a  class=\"text-danger text-underline\" (click)=\"sublink('inside/tabs/drugs-content/35')\">Zofran</a>\n            </li>\n            <li>In a suspected narcotic overdose with a decreased LOC and associated bradypnea/hypoxia may given an appropriate dose of\n              <a  class=\"text-danger text-underline\" (click)=\"sublink('inside/tabs/drugs-content/26')\">Naloxone</a>\n            </li>\n            <li>In an actively seizing patient administer 1 dose of the approved benzodiazepine</li>\n            <li>Insert a supraglottic airway</li>\n          </ul>\n        </li>\n      </ol>\n    </div>\n    <div id=\"introduction-markdown2014\" class=\"show-list-numbers-and-dots\">\n      <hr>\n    </div>\n    <div id=\"introduction-markdown2015\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">Logan Regional Hospital Emergency Department and Cache Valley Hospital are 800 mHz radio available 24 hours a day on the Hospital common channel. The direct phone number at Logan Hospital Emergency to establish on-line medical is 435-755-6642 and\n        for Cache Valley Hospital 435-881-8575. </p>\n\n      <p style=\"color:#000000;\">Cache County EMS dispatch may also be utilized to relay information to either Emergency department and obtain on-line medical control direction. </p>\n\n      <p style=\"color:#000000;\">These protocols/standing orders shall be reviewed annually by the designated off-line medical control physician and updated accordingly. </p>\n\n      <p style=\"color:#000000;\">The off-line medical control physician reserves the right to change, add to or delete any protocol or portion of, at any time. </p>\n\n      <p style=\"color:#000000;\">Any affiliate member or department may petition the off-line medical control physician for additions or revisions based on new technology or approved concepts. </p>\n\n      <p style=\"color:#000000;\">It is recognized that there are accredited entities such as American Heart Association that sponsor and certify EMS personnel for certain levels of training/competencies such as (ACLS, PALS, and CPR). Such certifications and recognition to follow\n        the guidelines of these programs are solely at the discretion and approval of the off-line medical control physician and if approved those certified may follow those guidelines. </p>\n\n      <p style=\"color:#000000;\">Additional certification courses may be presented to the off-line medical control physician for consideration and adoption. </p>\n    </div>\n    <div class=\"spacer\" style=\"height: 22px;\"></div>\n    <div>\n      <img src=\"../../../assets/sign.jpg\" style=\"display:block;width:50%;height:auto;\">\n    </div>\n    <div id=\"introduction-markdown2016\" style=\"text-align:right;\" class=\"show-list-numbers-and-dots\">\n      <p style=\"color:#000000;\">William Betz</p>\n\n      <p style=\"color:#000000;\">October 19, 2020</p>\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"!introduction\">\n\n\n  <ion-item lines=\"full\" (click)=\"openInfo('inside/tabs/category-info/'+ level)\">\n    <ion-label>{{name}}</ion-label>\n    <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"full\" (click)=\"openInfo('inside/tabs/category-info/5')\" *ngIf=\" level === '4'\">\n    <ion-label>Utah Trauma System Advisory Committiee</ion-label>\n    <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n  </ion-item>\n\n\n  <h2 class=\"text-center\" *ngIf=\"protocols\" class=\"f-1 text-center\">Protocols</h2>\n  <div *ngFor=\"let protocol of protocols; let i = index\">\n    <ion-list class=\"py-0\">\n      <ion-item lines=\"full\" (click)=\"openProtocol('inside/tabs/protocols-content/',i)\">\n        <ion-label>{{protocol}}</ion-label>\n        <ion-icon name=\"document-text-outline\" slot=\"start\" size=\"large\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"mt-5\"></div>\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_subpages_category-content_category-content_module_ts.js.map