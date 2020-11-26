(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  text-align: center;\n}\n\nion-grid fa-icon {\n  font-size: 1.5rem;\n}\n\nion-grid small {\n  display: block;\n}\n\nion-col div {\n  background: steelblue;\n  padding: 0.5rem;\n  border-radius: 0.4rem;\n  cursor: pointer;\n}\n\nion-col div:hover {\n  background: orangered;\n}\n\nh4 {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWdyaWQgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuaW9uLWdyaWQgc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1jb2wgZGl2IHtcclxuICAgIGJhY2tncm91bmQgICA6IHN0ZWVsYmx1ZTtcclxuICAgIHBhZGRpbmcgICAgICA6IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XHJcbiAgICBjdXJzb3IgICAgICAgOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24tY29sIGRpdjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZSAgOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







// 20.1) Importa FontAwesome

let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // 20.2) Importa FontAwesome
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Início</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2 class=\"ion-no-margin\">Olá<span *ngIf=\"userData\"> {{ userData.displayName }}</span>!</h2>\r\n\r\n    <p>Este é um aplicativo modelo de cadastro de usuários e de troca de mensagens entre estes usuários.</p>\r\n\r\n    <div *ngIf=\"!userData\" class=\"ion-margin-bottom\">\r\n      <hr>\r\n      <h3>Logue-se!</h3>\r\n      <p>Para usar todos os recursos deste aplicativo, você precisa se identificar.</p>\r\n\r\n      <h4>Ações</h4>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div routerLink=\"/user/login\">\r\n              <fa-icon icon=\"sign-in-alt\"></fa-icon>\r\n              <small>Entrar / Login</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div routerLink=\"/contacts\">\r\n              <fa-icon icon=\"comments\"></fa-icon>\r\n              <small>Contatos</small>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div routerLink=\"/info\">\r\n              <fa-icon icon=\"info-circle\"></fa-icon>\r\n              <small>Sobre</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"userData\">\r\n\r\n      <h4>Ações</h4>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n            <div routerLink=\"/user/profile\">\r\n              <fa-icon icon=\"id-card\"></fa-icon>\r\n              <small>Ver Perfil</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div routerLink=\"/user/logout\">\r\n              <fa-icon icon=\"sign-out-alt\"></fa-icon>\r\n              <small>Logout</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <div routerLink=\"/contacts\">\r\n              <fa-icon icon=\"comments\"></fa-icon>\r\n              <small>Contatos</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div routerLink=\"/info\">\r\n              <fa-icon icon=\"info-circle\"></fa-icon>\r\n              <small>Sobre</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n\r\n      <h4>Mensagens</h4>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n            <div routerLink=\"/msg/inbox\">\r\n              <fa-icon icon=\"mail-bulk\"></fa-icon>\r\n              <small>Recebidas</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div routerLink=\"/msg/outbox\">\r\n              <fa-icon icon=\"inbox\"></fa-icon>\r\n              <small>Enviadas</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <div routerLink=\"/msg/send\">\r\n              <fa-icon icon=\"paper-plane\"></fa-icon>\r\n              <small>Nova</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </div>\r\n\r\n    <div>\r\n\r\n      <h4>Links Externos</h4>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div (click)=\"openSite('https://luferat.net/')\">\r\n              <fa-icon icon=\"chalkboard-teacher\"></fa-icon>\r\n              <small>Professor</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div (click)=\"openSite('https://www.pi2c.tk/')\">\r\n              <fa-icon icon=\"sitemap\"></fa-icon>\r\n              <small>Documentação</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <div (click)=\"openSite('https://github.com/Luferat/SLTec-ionic-firebase-06')\">\r\n              <fa-icon [icon]=\"['fab', 'github']\"></fa-icon>\r\n              <small>GitHub.com</small>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div (click)=\"openSite('https://luferat.github.io/SLTec-ionic-firebase-06/')\">\r\n              <fa-icon icon=\"globe\"></fa-icon>\r\n              <small>Versão Web</small>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "8YY3");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ "riPR");




// 3.1) Importa dependências
 // Armazenamento local
// 10.1) Importa dependências

let HomePage = class HomePage {
    constructor(
    // 3.3) Injeção de dependências
    storage, // Armazenamento local
    // 10.2) Injeta dependências
    events) {
        this.storage = storage;
        this.events = events;
    }
    ngOnInit() { }
    // 10.3) Quando componente estiver pronto...
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // 3.4) Obtém dados do usuário
            // 10.4)  Obtém dados do usuário
            this.storage.get('userData', { type: 'string' }).subscribe((uData) => {
                if (uData) {
                    this.userData = JSON.parse(uData);
                }
            });
            // 10.5) Altera dados do usuário sem recarga do script (assíncrono)
            this.events.subscribe('userData', (uData) => {
                this.userData = uData;
            });
        });
    }
    // 20.1) Método que abre links externos em outra guia do navegador
    openSite(URL) {
        window.open(URL);
    }
};
HomePage.ctorParameters = () => [
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map