(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "EWb5":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "rUYa");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "Tett");







// 22.1) Importando dependências

let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"],
            // 22.2) Importando dependências
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "O6Z6":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Tett":
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contacts.page.html */ "vIa4");
/* harmony import */ var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.page.scss */ "O6Z6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




// 22.1) Importa dependências





let ContactsPage = class ContactsPage {
    constructor(
    // 22.2) Injeta dependências
    form, storage, fbStore, alert) {
        this.form = form;
        this.storage = storage;
        this.fbStore = fbStore;
        this.alert = alert;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en_US');
    }
    // 22.4) Inclua 'void' no 'OnInit'
    ngOnInit() {
        // 22.5) Obtém dados do perfil. Se existir, preenche formulário automaticamente.
        this.storage.get('userProfile', { type: 'string' }).subscribe((pData) => {
            if (pData) {
                this.userProfile = JSON.parse(pData);
                this.contactForm.controls.uid.setValue(this.userProfile.uid);
                this.contactForm.controls.name.setValue(this.userProfile.name);
                this.contactForm.controls.email.setValue(this.userProfile.email);
            }
        });
        // 22.6) Cria formulário reativo
        this.contactFormCreate();
    }
    // 22.7) Cria formulário reativo
    contactFormCreate() {
        this.contactForm = this.form.group({
            date: [''],
            uid: [''],
            name: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)
                ])
            ],
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email
                ])
            ],
            subject: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)
                ])
            ],
            message: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)
                ])
            ]
        });
    }
    // 22.8) Processa envio do contato
    contactSend() {
        // Formata documento
        this.contactForm.controls.date.setValue(this.pipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss').trim());
        // Salva documento no Firestore
        this.fbStore.collection('contacts').add(this.contactForm.value).then(() => {
            // Exibe feedback
            this.contactConfirm();
            // Em caso de erro, gera log
        }).catch((error) => { console.error(error); });
    }
    // 22.9) Exibe feedback
    contactConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Contato Enviado',
                message: 'Seu contato foi enviado com sucesso!<br><br>Obrigado...',
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            // Reinicia formulário
                            this.contactForm.reset({
                                uid: this.contactForm.value.uid.trim(),
                                name: this.contactForm.value.name.trim(),
                                email: this.contactForm.value.email.trim(),
                                subject: '',
                                message: ''
                            });
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactsPage);



/***/ }),

/***/ "rUYa":
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "Tett");




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ "vIa4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Faça Contato</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p class=\"ion-no-margin\">Preencha o formulário abaixo para entrar em contato com a equipe do aplicativo.</p>\r\n\r\n    <p class=\"ion-text-center\"><small>\r\n        <ion-text color=\"danger\">Preencha todos os campos.</ion-text>\r\n      </small></p>\r\n\r\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"contactSend()\">\r\n      <ion-input type=\"hidden\" id=\"uid\" name=\"uid\" formControlName=\"uid\"></ion-input>\r\n\r\n      <ion-list lines=\"full\" class=\"ion-no-padding\">\r\n\r\n        <ion-item>\r\n          <ion-label for=\"name\" position=\"floating\" color=\"primary\">\r\n            Seu nome:\r\n            <ion-text color=\"danger\" *ngIf=\"contactForm.controls.name.errors\">\r\n              <small *ngIf=\"contactForm.controls.name.errors.required\">* Obrigatório</small>\r\n              <small *ngIf=\"contactForm.controls.name.errors.minlength\">* Inválido</small>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\" placeholder=\"Seu nome completo\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label for=\"email\" position=\"floating\" color=\"primary\">\r\n            E-mail:\r\n            <ion-text color=\"danger\" *ngIf=\"contactForm.controls.email.errors\">\r\n              <small *ngIf=\"contactForm.controls.email.errors.required\">* Obrigatório</small>\r\n              <small *ngIf=\"contactForm.controls.email.errors.email\">* Inválido</small>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-input type=\"text\" id=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Seu e-mail principal\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label for=\"subject\" position=\"floating\" color=\"primary\">\r\n            Assunto:\r\n            <ion-text color=\"danger\" *ngIf=\"contactForm.controls.subject.errors\">\r\n              <small *ngIf=\"contactForm.controls.subject.errors.required\">* Obrigatório</small>\r\n              <small *ngIf=\"contactForm.controls.subject.errors.minlength\">* Inválido</small>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-input type=\"text\" id=\"subject\" name=\"subject\" formControlName=\"subject\" placeholder=\"Assunto do contato\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label for=\"message\" position=\"floating\" color=\"primary\">\r\n            Mensagem:\r\n            <ion-text color=\"danger\" *ngIf=\"contactForm.controls.message.errors\">\r\n              <small *ngIf=\"contactForm.controls.message.errors.required\">* Obrigatório</small>\r\n              <small *ngIf=\"contactForm.controls.message.errors.minlength\">* Inválido</small>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-textarea rows=\"1\" type=\"text\" id=\"message\" name=\"message\" formControlName=\"message\"\r\n            placeholder=\"Texto do contato\" autoGrow=\"true\"></ion-textarea>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n\r\n      <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-vertical\" [disabled]=\"contactForm.invalid\">\r\n        Enviar\r\n      </ion-button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es2015.js.map