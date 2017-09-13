webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n    height: 700px;\r\n    width: 600px;\r\n  }\r\n\r\na.chatbutton{\r\n  padding: 18px 18px 18px 10px;\r\n  background-color: #0084ff;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">De Afvalkalender chatbot</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#howitworks\">Hoe werkt het</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#pushnotifications\">Push notificaties</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#gemeentes\">Gemeentes</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<header class=\"masthead\">\n  <div class=\"overlay\">\n    <div class=\"container\">\n      <h1 class=\"display-1 text-white\">Afvalkalender chatbot</h1>\n      <h2 class=\"display-4 text-white\">Nooit meer te laat met het afval buiten zetten!</h2>\n      <img src=\"./../assets/images/cover-small.png\" />      <br /><br /><br />\n      \n      <a class=\"chatbutton\" target=\"_blank\" href=\"https://m.me/afvalkalender\">\n        <img src=\"./../assets/images/facebook-messenger-white.svg\" />Vraag het de afvalkalender\n     </a>\n     \n    </div>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-6 order-2\">\n        <div class=\"p-5\">\n\n          <img class=\"img-fluid\" src=\"./../assets/images/animation.gif\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-md-6 order-1\" id=\"howitworks\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\" >Hoe werkt het</h2>\n          <p>Wil je weten welke afvalsoort er wanneer naar buiten moet? Vraag het de afvalkalender chatbot. Op basis van je\n            postcode en huisnummer kan de afvalkalender chatbot je vertellen welke afvalsoort er wanneer wordt opgehaald.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-6\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"./../assets/images/Pushbericht.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-md-6\" id=\"pushnotifications\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Push notificaties</h2>\n          <p>Met de afvalkalender chatbot is het mogelijk om notificaties te ontvangen als er afval wordt opgehaald. U krijgt\n            de avond ervoor om 19:00 uur een berichtje op uw facebook messenger over welke afvalsoort er wordt opgehaald de volgende dag.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-6 order-1\" id=\"gemeentes\">\n        <div class=\"p-5\">\n          <h2>De afvalkalender heeft afvalinformatie van de volgende gemeentes: </h2>\n          <br />\n          <span *ngFor=\"let municipality of municipalities; let isLast=last\">\n              {{municipality}}{{isLast ? '' : ', '}}\n            </span>\n        </div>\n      </div>\n      <div class=\"col-md-6 order-2\">\n        <div class=\"p-5\">\n          <div id=\"map\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-6 order-2\">\n        <div class=\"p-5\">\n          <img class=\"img-fluid rounded-circle\" src=\"./../assets/images/messenger_code.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"col-md-6 order-1\">\n        <div class=\"p-5\">\n          <h2 class=\"display-4\">Let's chat!</h2>\n          <p>Om de chat te beginnen scan de code met facebook messenger of gebruik de onderstaande knop.</p>\n          <a class=\"chatbutton\" target=\"_blank\" href=\"https://m.me/afvalkalender\">\n            <img src=\"./../assets/images/facebook-messenger-white.svg\" />Let's chat\n         </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2017</p>\n  </div>\n  <!-- /.container -->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cityService__ = __webpack_require__("../../../../../src/app/services/cityService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(el, cityService) {
        this.el = el;
        this.cityService = cityService;
        this.title = 'app';
        this.map = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: { lat: 52.164786, lng: 5.541559 }
        });
        this.cityService.getCities().subscribe(function (response) { return _this.parseCities(response); }, function (error) { console.log(error); });
        this.cityService.getMunicipalities().subscribe(function (response) { return _this.municipalities = response; }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.parseCities = function (cities) {
        var markers = cities.map(function (city, i) {
            return new google.maps.Marker({
                position: { lat: +city.lat, lng: +city.long },
                label: city.name[0],
                title: city.name
            });
        });
        var markerCluster = new MarkerClusterer(this.map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    AppComponent.prototype.compare = function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_cityService__["a" /* CityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cityService__["a" /* CityService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cityService__ = __webpack_require__("../../../../../src/app/services/cityService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_cityService__["a" /* CityService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/cityService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityService = (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCities = function () {
        return this.http.get('./assets/cities.json');
    };
    CityService.prototype.getMunicipalities = function () {
        return this.http.get('./assets/municipalities.json');
    };
    return CityService;
}());
CityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CityService);

var _a;
//# sourceMappingURL=cityService.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map