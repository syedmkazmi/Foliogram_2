webpackJsonp(["main"],{

/***/ "../../../../../angular-src/src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../angular-src/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_component__ = __webpack_require__("../../../../../angular-src/src/app/authentication/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_component__ = __webpack_require__("../../../../../angular-src/src/app/authentication/components/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_login_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_components_notifications_component__ = __webpack_require__("../../../../../angular-src/src/app/root/components/notifications.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_login_guard__["a" /* LoginGuard */]] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__components_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_login_guard__["a" /* LoginGuard */]] }
                ]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__root_components_notifications_component__["a" /* NotificationsComponent */]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.uk-grid {\n  margin: 0;\n}\n\n.uk-margin {\n  margin-top: 64px;\n}\n\n.heading {\n  height: 50px;\n  width: 250px;\n  color: #333333;\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 50px;\n  margin-bottom: 0;\n}\n\n.sub-heading {\n  height: 25px;\n  width: 249px;\n  color: #84878A;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 25px;\n  margin: 0;\n}\n\n.section-one {\n  padding: 60px 77px 60px 77px;\n  height: 100%;\n  width: 40%;\n}\n\n.section-two {\n  width: 60%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100vh;\n}\n\n.uk-input {\n  height: 55px;\n  width: 100%;\n  border: 1px solid #C4CDD5;\n}\n\n#submit-btn {\n  height: 50px;\n  background-color: #0070E0;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n}\n\n#submit-btn:disabled {\n  color: #FFFFFF;\n  background-color: #C4CDD1;\n  border-color: transparent;\n}\n\n#logo {\n  padding-bottom: 80px;\n}\n\n#dont-have-an-account {\n  text-align: center;\n  margin-top: 10px;\n  height: 20px;\n  color: #121212;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n#forgot-password {\n  height: 20px;\n  float: right;\n  color: #0070E0;\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\n.linear-grad {\n  position: absolute;\n  width: 60%;\n  right: 0;\n  top: 0;\n  height: 500px;\n  background: -webkit-gradient(linear, left top, left bottom, from(black), to(transparent));\n  background: linear-gradient(black, transparent);\n}\n\n#section-two-title {\n  color: #FFFFFF;\n  font-size: 60px;\n  margin-left: 5%;\n  font-weight: 600;\n  margin-top: 10%;\n  line-height: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div uk-grid>\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION ONE ------------------------->\n  <!--------------------------------------------------------------->\n  <div class=\"section-one\">\n    <!----- LOGO ------>\n    <div id=\"logo\">\n      <img src=\"assets/images/Logo.svg\">\n    </div>\n    <!----- LOGIN BOX ----->\n    <div class=\"login-box\">\n      <!----- TITLES ----->\n      <div>\n        <h2 class=\"heading\" style=\"white-space: pre\">Welcome Back</h2>\n        <p class=\"sub-heading\">Please login into your account.</p>\n      </div>\n      <!------------------------- LOGIN FORM ------------------------->\n      <form (ngSubmit)=\"logIn()\" [formGroup]=\"loginForm\" novalidate>\n        <!----- SERVER ERRORS ----->\n        <app-notifications></app-notifications>\n\n        <!------------------------- EMAIL FIELD ------------------------->\n        <div class=\"uk-margin\">\n          <input type=\"email\" class=\"uk-input\" placeholder=\"Enter email\" formControlName=\"email\">\n\n          <!----- VALIDATION WARNINGS ----->\n          <div *ngIf=\"loginForm.get('email').touched || loginForm.get('email').dirty\">\n            <div class=\"uk-text-danger\" *ngIf=\"loginForm.get('email').hasError('pattern')\">Remember to use your @kmandt.com email.</div>\n          </div>\n\n          <div *ngIf=\"loginForm.get('email').touched\">\n            <div *ngIf=\"loginForm.get('email').hasError('required')\">\n              <div class=\"uk-text-danger\"> Email is required.</div>\n            </div>\n          </div>\n\n        </div>\n\n        <!------------------------- PASSWORD FIELD ------------------------->\n        <div class=\"uk-margin\">\n          <input type=\"password\" class=\"uk-input\" placeholder=\"Enter Password\" formControlName=\"password\">\n\n          <!----- VALIDATION WARNINGS ----->\n          <div *ngIf=\"loginForm.get('password').touched\">\n            <div *ngIf=\"loginForm.get('password').hasError('required')\">\n              <div class=\"uk-text-danger\"> Password is required.</div>\n            </div>\n          </div>\n\n        </div>\n\n        <div id=\"forgot-password\"><a>Forgot Password?</a></div>\n        <!----- SUBMIT BUTTON ----->\n        <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\" id=\"submit-btn\">{{loginForm.invalid ? \"Enter Data To Login\" : \"LOGIN\"}}</button>\n      </form>\n\n      <div id=\"dont-have-an-account\">Don't have an account? <a>Sign Up</a></div>\n    </div>\n  </div>\n\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION TWO ------------------------->\n  <!--------------------------------------------------------------->\n  <div class=\"linear-grad\">\n      <h1 id=\"section-two-title\">Knowledge<br>Management and<br>Transfer</h1>\n    </div>\n  <div class=\"section-two\" id=\"bg\">\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_fb, _authService, _notificationService) {
        this._fb = _fb;
        this._authService = _authService;
        this._notificationService = _notificationService;
        this.title = "Welcome to the Knowledge Base\n you can login below";
        this.backgroundImages = ["assets/images/backgrounds/login-bg.jpg", "assets/images/backgrounds/login-bg-2.jpg", "assets/images/backgrounds/login-bg-3.jpg", "assets/images/backgrounds/login-bg-4.jpg", "assets/images/backgrounds/login-bg-5.jpg", "assets/images/backgrounds/login-bg-6.jpg", "assets/images/backgrounds/login-bg-7.jpg", "assets/images/backgrounds/login-bg-8.jpg", "assets/images/backgrounds/login-bg-9.jpg", "assets/images/backgrounds/login-bg-10.jpg", "assets/images/backgrounds/login-bg-11.jpg", "assets/images/backgrounds/login-bg-12.jpg", "assets/images/backgrounds/login-bg-13.jpg", "assets/images/backgrounds/login-bg-14.jpg", "assets/images/backgrounds/login-bg-15.jpg"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var element = document.getElementById("bg");
        this.setBgImage = this.backgroundImages[this.randomImage()];
        element.setAttribute('style', 'background-image: url(' + this.setBgImage + ');');
        //this.setBgImage = this.backgroundImages[this.randomImage()];
        this.loginForm = this._fb.group({
            email: ['', { updateOn: 'blur', validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[A-Za-z0-9._%+-]+@kmandt.com$')] }],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this._authService.login({ "email": this.loginForm.value.email, "password": this.loginForm.value.password })
            .subscribe(function (data) {
            console.log("Login Token" + data);
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this._notificationService.sendNotification(err.error.message);
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    LoginComponent.prototype.randomImage = function () {
        return Math.floor((Math.random() * 14));
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/authentication/components/login.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/authentication/components/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__["a" /* NotificationsService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container {\n  padding-top: 5%;\n  width: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{title}}</h2>\n  <form (ngSubmit)=\"signUp()\" [formGroup]=\"signupForm\" novalidate>\n\n    <div class=\"form-group\">\n      <label for=\"fullName\">Full Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"fullName\" placeholder=\"Enter full name\" formControlName=\"fullName\">\n\n      <span *ngIf=\"signupForm.get('fullName').touched || signupForm.get('fullName').dirty\">\n        <small class=\"form-text text-muted\" *ngIf=\"signupForm.get('fullName').hasError('required')\">Please enter your full name.</small>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"email\">\n\n      <span *ngIf=\"signupForm.get('email').touched || signupForm.get('email').dirty\">\n        <small class=\"form-text text-muted\" *ngIf=\"signupForm.get('email').hasError('required')\">Please enter your email.</small>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\n\n      <span *ngIf=\"signupForm.get('password').touched || signupForm.get('password').dirty\">\n        <small class=\"form-text text-muted\" *ngIf=\"signupForm.get('password').hasError('required')\">Please enter your password.</small>\n      </span>\n    </div>\n\n    <button type=\"submit\" [disabled]=\"signupForm.invalid\" class=\"btn btn-primary\">Submit</button>\n  </form>\n\n  {{user}}\n\n  <div *ngFor=\"let data of user\">\n    {{data.fullName}}\n    {{data.email}}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/components/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(_fb, _authenticationService, _notificationService) {
        this._fb = _fb;
        this._authenticationService = _authenticationService;
        this._notificationService = _notificationService;
        this.title = "Sign up";
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this._authenticationService.signUp({
            "fullName": this.signupForm.value.fullName,
            "email": this.signupForm.value.email,
            "password": this.signupForm.value.password
        })
            .subscribe(function (data) {
            console.log("REG " + data);
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this._notificationService.sendNotification(err.error.message);
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/authentication/components/signup.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/authentication/components/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__["a" /* NotificationsService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this._authService.isLoggedIn();
        if (isLoggedIn) {
            //return true and proceed with the route
            this._authService.sendMessage(isLoggedIn);
            return true;
        }
        this._authService.sendMessage(isLoggedIn);
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this._authService.isLoggedIn();
        if (isLoggedIn) {
            //it true then DON'T proceed to route and go to welcome.
            this._router.navigate(['/dashboard']);
            return false;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/services/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptorService = (function () {
    function AuthInterceptorService() {
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        if (token) {
            var cloned = req.clone({
                setHeaders: {
                    'x-access-token': JSON.parse(token)
                }
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthenticationService = (function () {
    function AuthenticationService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
    }
    AuthenticationService_1 = AuthenticationService;
    AuthenticationService.prototype.signUp = function (body) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].apiUrl;
        return this._http.post(BASE_URL + '/api/register', body)
            .do(function (data) { return console.log(data); })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
        //return body
    };
    AuthenticationService.prototype.login = function (body) {
        var _this = this;
        //const DEV_BASE_URL = "http://localhost:3000";
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].apiUrl;
        return this._http.post(BASE_URL + '/api/login', body)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (data) { return console.log(JSON.stringify(data)); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (data) {
            var token = data.token;
            var unit = 'hour';
            var expiresIn = __WEBPACK_IMPORTED_MODULE_7_moment__().add(1, unit);
            var userInfo = data.userInfo;
            if (token) {
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("expiresIn", JSON.stringify(expiresIn));
                localStorage.setItem("userInfo", JSON.stringify(userInfo));
                _this._router.navigate(['/']);
            }
            return token;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        }));
        //.do(data => console.log(JSON.stringify(data)))
        /*.map(data => {
    
          const token = data.token;
          const unit: moment.unitOfTime.DurationConstructor = 'hour';
          const expiresIn = moment().add(1, unit);
          const userInfo = data.userInfo;
    
          if (token) {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("expiresIn", JSON.stringify(expiresIn));
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            this._router.navigate(['/'])
          }
          return token;
        })*/
        /*.catch(err => {
          // do whatever you want when error occurs
          console.log(err);
    
          // re-throw error so you can catch it when subscribing, fallback to generic error code
          return Observable.throw(err || 'API_ERROR');
        });*/
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_7_moment__().isBefore(AuthenticationService_1.getExpiration());
    };
    AuthenticationService.getExpiration = function () {
        var expiration = localStorage.getItem('expiresIn');
        var expiresAt = JSON.parse(expiration);
        return __WEBPACK_IMPORTED_MODULE_7_moment__(expiresAt);
    };
    AuthenticationService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    AuthenticationService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AuthenticationService = AuthenticationService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
    var AuthenticationService_1;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/authentication/services/error-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorInterceptorService = (function () {
    function ErrorInterceptorService(_router) {
        this._router = _router;
    }
    ErrorInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .do(function (event) {
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    console.log("Inside error interceptor");
                    _this._router.navigate(['/login']);
                }
                else if (err.status === 500) {
                    console.log("Inside error interceptor");
                    _this._router.navigate(['/']);
                }
            }
        });
    };
    ErrorInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], ErrorInterceptorService);
    return ErrorInterceptorService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/bio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_services_sector_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/sector-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_services_skill_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/skill-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_services_icon_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/icon-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_bio_edit_component__ = __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_bio_edit_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio-edit-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_bio_add_component__ = __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_bio_list_component__ = __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_bio_list_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio-list-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../angular-src/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_bio_pdf_component__ = __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-pdf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var BioModule = (function () {
    function BioModule() {
    }
    BioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: 'bios',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_guard__["a" /* AuthGuard */]],
                        resolve: { icon: __WEBPACK_IMPORTED_MODULE_7__root_services_icon_resolver_service__["a" /* IconResolverService */], skill: __WEBPACK_IMPORTED_MODULE_6__root_services_skill_resolver_service__["a" /* SkillResolverService */], sector: __WEBPACK_IMPORTED_MODULE_5__root_services_sector_resolver_service__["a" /* SectorResolverService */] },
                        children: [
                            {
                                path: '',
                                component: __WEBPACK_IMPORTED_MODULE_12__components_bio_list_component__["a" /* BioListComponent */],
                                resolve: { bios: __WEBPACK_IMPORTED_MODULE_13__services_bio_list_resolver_service__["a" /* BioListResolverService */] }
                            },
                            {
                                path: '0/new',
                                component: __WEBPACK_IMPORTED_MODULE_11__components_bio_add_component__["a" /* BioAddComponent */]
                            },
                            {
                                path: ':id',
                                component: __WEBPACK_IMPORTED_MODULE_8__components_bio_edit_component__["a" /* BioEditComponent */],
                                resolve: { bio: __WEBPACK_IMPORTED_MODULE_9__services_bio_edit_resolver_service__["a" /* BioEditResolverService */] }
                            },
                            {
                                path: ':id/pdf',
                                component: __WEBPACK_IMPORTED_MODULE_15__components_bio_pdf_component__["a" /* BioPdfComponent */],
                                resolve: { bio: __WEBPACK_IMPORTED_MODULE_9__services_bio_edit_resolver_service__["a" /* BioEditResolverService */] }
                            }
                        ]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__components_bio_add_component__["a" /* BioAddComponent */], __WEBPACK_IMPORTED_MODULE_8__components_bio_edit_component__["a" /* BioEditComponent */], __WEBPACK_IMPORTED_MODULE_12__components_bio_list_component__["a" /* BioListComponent */], __WEBPACK_IMPORTED_MODULE_15__components_bio_pdf_component__["a" /* BioPdfComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_bio_edit_resolver_service__["a" /* BioEditResolverService */], __WEBPACK_IMPORTED_MODULE_13__services_bio_list_resolver_service__["a" /* BioListResolverService */]]
        })
    ], BioModule);
    return BioModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n\n.bioAddForm {\n  margin-left: 240px;\n  padding: 40px 60px 40px 60px;\n}\n\n\n#section-one {\n  width: 70%;\n}\n\n\n.user-info {\n  margin-bottom: 50px;\n}\n\n\n#image {\n  width: 130px;\n  height: 130px;\n  display: inline-block;\n}\n\n\n#image > img {\n  width: 130px;\n  display: inline-block;\n  border-radius: 100%;\n}\n\n\n#name {\n  height: 60px;\n  width: 172px;\n  color: #333333;\n  font-size: 32px;\n  font-weight: 600;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: text-bottom;\n  text-transform: capitalize;\n  margin-top: 15px;\n  margin-left: 10px;\n}\n\n\n#name > .uk-margin {\n  margin-left: 3px;\n}\n\n\nlabel[for=sector] {\n  color: #121212;\n  font-size: 15px;\n}\n\n\n.uk-select[name=sector] {\n  height: 22px;\n  width: 134px;\n  color: #AFAFBB;\n  font-size: 15px;\n  margin-top: -15px;\n  padding-left: 0;\n  padding-right: 0;\n  border: none;\n}\n\n\n#background-heading, #skills-heading, #experience-heading {\n  height: 31px;\n  color: #1B1A3D;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 31px;\n}\n\n\n#background-tip, #skills-tips, #experience-tips, #icon-tips {\n  color: #616171;\n  font-size: 15px;\n  line-height: 1.7;\n}\n\n\n#background-example, #experience-example {\n  margin-top: 20px;\n}\n\n\n#background-example, #experience-example > div {\n  padding: 15px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n\n.uk-accordion-title {\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n\n.uk-accordion-content {\n  margin-left: 4%;\n  color: #616171;\n  font-size: 13px;\n  line-height: 22px;\n}\n\n\n.uk-textarea {\n  padding: 20px;\n  border-radius: 4px;\n  border: 2px solid #E9E9EF;\n  height: 180px;\n}\n\n\n.uk-textarea:focus {\n  border: 2px solid #0070E0;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n}\n\n\n#background-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n\n#experience-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n\n#background-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n\n#experience-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n\n.skills > .uk-margin {\n  -webkit-column-count: 3; /* Chrome, Safari, Opera */ /* Firefox */\n  column-count: 3;\n}\n\n\n#skills-label {\n  width: 100%;\n  border: 1px solid #E9E9EF;\n  border-radius: 3px;\n  background-color: #F7F8F9;\n  display: inline-block;\n  margin: 3px;\n  padding: 6px;\n  color: #616171;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n\n#skills-label > input {\n  float: right;\n}\n\n\n.uk-checkbox {\n  margin-top: 0;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n}\n\n\n.uk-checkbox:checked {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n  background-color: #0070E0;\n}\n\n\n.uk-checkbox:checked + label {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n}\n\n\n.uk-select.ng-valid.ng-touched {\n  border: none;\n}\n\n\n.uk-select.ng-invalid.ng-touched {\n  border: none;\n}\n\n\n#experience {\n  margin-top: 20px;\n}\n\n\n.experience-fields {\n  height: 120px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  padding: 20px;\n}\n\n\n.experience-fields:focus {\n  border: 2px solid #0070E0;\n}\n\n\n#add-more-exp-btn {\n  border-radius: 4px;\n  background-color: #AFAFBB;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 10px;\n}\n\n\n#add-more-exp-btn > .uk-icon {\n  margin-right: 10px;\n}\n\n\n#section-two {\n  width: 30%;\n  text-align: -webkit-center;\n}\n\n\n#select-icons {\n  margin-top: 250px;\n}\n\n\n#select-icons > div {\n  margin-bottom: 10%;\n}\n\n\n#select-icons > div > img {\n  width: 160px;\n  /*height: 200px;*/\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n\n.uk-switcher > li {\n  -webkit-column-count: 5;\n          column-count: 5;\n}\n\n\n#custom-input[type=file]{\n  position: absolute;\n  width: 100px;\n  height: 40px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n#image > #add-btn {\n  text-align: center;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0070E0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bioAddForm\" uk-grid>\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION ONE ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-one\">\n    <!------------------------- BIO ADD FORM ------------------------->\n    <form (ngSubmit)=\"save()\" [formGroup]=\"bioForm\" novalidate>\n      <div class=\"user-info\">\n        <!----- BIO IMAGE ----->\n        <div id=\"image\">\n          <img id=\"user-img\" src=\"{{userImage}}\" onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\">\n          <div id=\"add-btn\">\n            <div>\n              <input id=\"custom-input\" type=\"file\" (change)=\"imageCropperListener($event)\">\n              <a class=\"uk-link-muted\" type=\"button\" tabindex=\"-1\">Set New Image</a>\n            </div>\n          </div>\n        </div>\n        <!----- USER NAME & SELECT SECTOR ----->\n        <div class=\"uk-text-top\" id=\"name\">\n          {{userName}}\n          <div class=\"uk-margin\">\n            <label for=\"sector\">Sector</label>\n            <select class=\"uk-select\" formControlName=\"bioForSector\" id=\"sector\" name=\"sector\">\n              <option value=\"\" disabled selected>Select Sector</option>\n              <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <!------------------------- BACKGROUND & OVERVIEW FIELD ------------------------->\n      <div class=\"background-and-overview\">\n        <h1 id=\"background-heading\">Background and Overview</h1>\n        <!----- TIP ----->\n        <div id=\"background-tip\">\n          Write a detailed statement into your background. (Where you came from e.g. Toyota, Healthcare, Engineering)\n          Write about yourself in the third tense, as if describing somebody else.\n          Highlight the sector experience and years in industry.\n          Include your experience in the relevant sectors/industries (e.g. Supply Chain, Theatres, Emergency Department,\n          Mining, Rail, etc.)\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"background-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Background and Overview Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                Adam is an experienced Consultant who has led Lean programmes in a range of sectors including\n                healthcare, manufacturing, FMCG, public services, retail and utilities. He has a broad range of\n                knowledge and practical experience of Lean principles, tools and techniques.\n\n                He has more than 15 years’ experience of delivering Lean transformational change and supplier\n                development. His background also includes engineering and operations management in manufacturing and\n                retail including senior global supply chain management delivering savings through supply chain redesign\n              </div>\n            </div>\n          </div>\n        </div>\n        <!----- VALIDATORS ----->\n        <div *ngIf=\"bioForm.get('background').dirty\">\n          <div *ngIf=\"bioForm.get('background').hasError('maxlength')\">\n            <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n          </div>\n        </div>\n\n        <div class=\"uk-margin\">\n          <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"Enter Background and Overview here\"\n                    formControlName=\"background\"></textarea>\n        </div>\n      </div>\n      <!------------------------- SKILLS FIELD ------------------------->\n      <div class=\"skills\">\n        <h1 id=\"skills-heading\">Skills</h1>\n        <!----- TIP ----->\n        <div id=\"skills-tips\">\n          From the list below, select all the different skills you are able to deliver.\n        </div>\n        <div class=\"uk-margin\">\n          <div *ngFor=\"let data of skills\">\n            <label id=\"skills-label\" *ngFor=\"let skill of data.allSkills\">\n              <input class=\"uk-checkbox\" type=\"checkbox\" (change)=\"skillsOnChange(skill, $event.target.checked)\">\n              {{skill}}\n            </label>\n          </div>\n        </div>\n      </div>\n      <!------------------------- EXPERIENCE FIELD ------------------------->\n      <div class=\"experience\">\n        <h1 id=\"experience-heading\">Experience</h1>\n        <!----- TIP ----->\n        <div id=\"experience-tips\">\n          The experience section should help demonstrate the ROI achieved in various projects, included points such as:\n\n          - % Reductions\n          - Money saved, monthly and yearly\n          - Hours saved\n\n          Each text field below represents 1 bullet point. You can have a maximum of 6 bullet points & a minimum of\n          atleast 4 for your experience.\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"experience-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Experience Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                - Delivered £127M savings by completely redesigning the business process landscape of a major Utilities\n                Infrastructure company and implementing a new Lean business process from the end-to-end of the business\n                resulting in an efficiency improvement of +40%.\n                - Project managed a MRO project for a leading aviation company, generating a 25% reduction in lead time\n                on\n                major overhauls.\n                - Delivered “Opportunity Searches” within a hospital trust identifying £13m benefits to be delivered\n                within 2 years. Similar opportunity searches have been done within the Gas Utility industry to improve\n                productivity and reduce costs.\n                - Managed the assembly and commission phase of a $120 million locomotive delivery contract on-time,\n                on-budget and to quality requirements for a blue-chip rail business in Australia.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"experience\" formGroupName=\"experience\">\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioForm.get('experience.field0').dirty\">\n            <div *ngIf=\"bioForm.get('experience.field0').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field0\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioForm.get('experience.field1').dirty\">\n            <div *ngIf=\"bioForm.get('experience.field1').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field1\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioForm.get('experience.field2').dirty\">\n            <div *ngIf=\"bioForm.get('experience.field2').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field2\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioForm.get('experience.field3').dirty\">\n            <div *ngIf=\"bioForm.get('experience.field3').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field3\"></textarea>\n          </div>\n\n          <!----- OPTIONAL EXPERIENCE FIELDS ----->\n          <div id=\"optional-experience\" *ngIf=\"addMoreExperience\">\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioForm.get('experience.field4').dirty\">\n              <div *ngIf=\"bioForm.get('experience.field4').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field4\"></textarea>\n            </div>\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioForm.get('experience.field5').dirty\">\n              <div *ngIf=\"bioForm.get('experience.field5').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field5\"></textarea>\n            </div>\n          </div>\n          <!----- OPTIONAL EXPERIENCE FIELD ----->\n          <a (click)=\"addMoreExp()\">Add More Experience</a>\n        </div>\n      </div>\n      <!------------------------- SUBMIT BUTTON ------------------------->\n      <button class=\"uk-button uk-button-primary uk-margin-top\" [disabled]=\"bioForm.invalid\">{{bioForm.invalid ? \"Fill All Fields To Activate Me\" : \"SAVE\"}}</button>\n    </form>\n  </div>\n\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION TWO ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-two\">\n    <!------------------------- SELECT ICONS FIELDS ------------------------->\n    <div id=\"select-icons\">\n      <!------ TIP ------>\n      <div id=\"icon-tips\">\n        Use the icon selectors below to chose what icons to display on your bio.\n      </div>\n      <!------ ICON 1 ------>\n      <div>\n        <img id=\"image1\" (click)=\"getBioIconElementId($event)\" src=\"{{image1}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\" href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 2 ------>\n      <div>\n        <img id=\"image2\" (click)=\"getBioIconElementId($event)\" src=\"{{image2}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 3 ------>\n      <div>\n        <img id=\"image3\" (click)=\"getBioIconElementId($event)\" src=\"{{image3}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 4 ------>\n      <div>\n        <img id=\"image4\" (click)=\"getBioIconElementId($event)\" src=\"{{image4}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n    </div>\n\n    <div id=\"modal-sections\" uk-modal>\n      <div class=\"uk-modal-dialog\">\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header\">\n          <h2 class=\"uk-modal-title\">Select Icon</h2>\n        </div>\n        <div class=\"uk-modal-body\">\n          <ul class=\"uk-subnav uk-subnav-pill\" uk-switcher>\n            <li><a href=\"#\">All</a></li>\n            <li><a href=\"#\">Healthcare</a></li>\n            <li><a href=\"#\">Manufacturing</a></li>\n            <li><a href=\"#\">Other</a></li>\n          </ul>\n\n          <ul class=\"uk-switcher uk-margin\">\n            <li *ngFor=\"let data of icons\">\n              <div *ngFor=\"let icon of data.url\">\n                <img class=\"uk-modal-close\" src=\"{{icon}}\" (click)=\"setBioIcon(icon)\">\n              </div>\n            </li>\n            <li>Hello again!</li>\n            <li>Bazinga!</li>\n            <li>Bazinga!</li>\n          </ul>\n        </div>\n        <div class=\"uk-modal-footer uk-text-right\">\n          <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!------------------------------------------------------------------------->\n<!------------------------- BIO ICONS POPUP MODAL ------------------------->\n<!------------------------------------------------------------------------->\n<div id=\"modal-container\" class=\"uk-modal-container\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header\">\n      <h2 class=\"uk-modal-title\">Set Profile Picture</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n      <img-cropper #cropper [image]=\"croppedImage\" [settings]=\"cropperSettings\"></img-cropper>\n      <br>\n      <span class=\"result rounded\" *ngIf=\"croppedImage.image\">\n        <img [src]=\"croppedImage.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </span>\n    </div>\n    <div class=\"uk-modal-footer uk-text-right\">\n      <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n      <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"setBioImage()\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======================================================
// INTERNAL ANGULAR IMPORTS      =========================
// =======================================================



// =======================================================
// OTHER IMPORTS                 =========================
// =======================================================




// =======================================================
// SERVICE IMPORTS               =========================
// =======================================================


var BioAddComponent = (function () {
    function BioAddComponent(_fb, _router, _route, _bioService, _notificationService) {
        this._fb = _fb;
        this._router = _router;
        this._route = _route;
        this._bioService = _bioService;
        this._notificationService = _notificationService;
        // COMPONENT VARIABLES
        this.title = "Add Bio";
        this.addMoreExperience = false;
    }
    BioAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get all skills from skills resolver service
        this._route.data.subscribe(function (data) {
            _this.skills = data['skill'];
        });
        // Get all sector from user sector resolver service
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get all icons from icon resolver service
        this._route.parent.data.subscribe(function (data) {
            _this.icons = data['icon'];
        });
        // Setting Up the fields for the Bio Add Form
        this.bioForm = this._fb.group({
            photo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            bioForSector: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            background: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(1500)]],
            experience: this._fb.group({
                field0: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field1: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field2: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field3: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field4: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field5: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]]
            }),
            skills: this._fb.array([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            iconOne: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconTwo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconThree: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconFour: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        this._setUserName();
        // Image Cropper Settings
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.compressRatio = 1.0;
        this.croppedImage = {};
    };
    // =======================================================
    // SAVE DATA FUNCTIONS           =========================
    // =======================================================
    // Send bioForm data to bio service to be handle & redirect on success and show error on failure
    BioAddComponent.prototype.save = function () {
        var _this = this;
        if (this.bioForm.dirty && this.bioForm.touched) {
            var p = Object.assign({}, this.bio, this.bioForm.value);
            this._bioService.addBio(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                    console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
                }
            });
        }
        else if (!this.bioForm.dirty) {
            this.onSaveComplete();
        }
    };
    BioAddComponent.prototype.onSaveComplete = function () {
        this.bioForm.reset();
        this._router.navigate(['/welcome']);
    };
    // =======================================================
    // PRIVATE FUNCTIONS             =========================
    // =======================================================
    // Gets users name & profile image (if exists) from browser local storage & assigns the profile picture to the bioForm "photo" control on
    // component initialisation
    BioAddComponent.prototype._setUserName = function () {
        this.userName = JSON.parse(localStorage.getItem("userInfo")).firstName + " " + JSON.parse(localStorage.getItem("userInfo")).lastName;
        this.userImage = localStorage.getItem("profile-img");
        if (this.userImage != null) {
            this.bioForm.controls['photo'].setValue(this._stripBase64(this.userImage));
        }
    };
    // Removes the "data:image.." from the base64 image string generated by the image cropper function
    BioAddComponent.prototype._stripBase64 = function (image) {
        return image.replace(/^data:image\/[a-z]+;base64,/, "");
    };
    // =======================================================
    // PUBLIC FUNCTIONS              =========================
    // =======================================================
    // Gets the img tags id for which the user is trying to set an icon for
    BioAddComponent.prototype.getBioIconElementId = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.iconIndex = idAttr.nodeValue;
    };
    // Check the img tag id set by "getBioIconElementId" function and set an icon for that img tag
    BioAddComponent.prototype.setBioIcon = function (url) {
        if (this.iconIndex == "image1") {
            this.image1 = url;
            this.bioForm.controls['iconOne'].setValue(url);
        }
        else if (this.iconIndex == "image2") {
            this.image2 = url;
            this.bioForm.controls['iconTwo'].setValue(url);
        }
        else if (this.iconIndex == "image3") {
            this.image3 = url;
            this.bioForm.controls['iconThree'].setValue(url);
        }
        else if (this.iconIndex == "image4") {
            this.image4 = url;
            this.bioForm.controls['iconFour'].setValue(url);
        }
    };
    // Create a "Form Array" to save skills array in reactive bioForm. If skill is checked add to Form Array and if unchecked then remove
    BioAddComponent.prototype.skillsOnChange = function (skill, isChecked) {
        var skillsArray = this.bioForm.controls.skills;
        if (isChecked) {
            skillsArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](skill));
        }
        else {
            var index = skillsArray.controls.findIndex(function (x) { return x.value == skill; });
            skillsArray.removeAt(index);
        }
    };
    // Show & Hide optional experience fields
    BioAddComponent.prototype.addMoreExp = function () {
        this.addMoreExperience = !this.addMoreExperience;
    };
    // Set the image cropped by user (using the image cropper function) to the bioForm "photo" control
    BioAddComponent.prototype.setBioImage = function () {
        this.bioForm.controls['photo'].setValue(this._stripBase64(this.croppedImage.image));
        this.userImage = this.croppedImage.image;
    };
    BioAddComponent.prototype.imageCropperListener = function ($event) {
        __WEBPACK_IMPORTED_MODULE_4_uikit___default.a.modal('#modal-container').show();
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            setTimeout(function () {
                that.cropper.setImage(image);
            }, 0);
        };
        myReader.readAsDataURL(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], BioAddComponent.prototype, "cropper", void 0);
    BioAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bio-add',
            template: __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-add.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/bios/components/bio-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__services_bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__["a" /* NotificationsService */]])
    ], BioAddComponent);
    return BioAddComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nhtml {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.bioEditForm {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 60px;\n}\n\n#section-one {\n  width: 70%;\n}\n\n.user-info {\n  margin-bottom: 50px;\n}\n\n#image {\n  width: 130px;\n  height: 130px;\n  display: inline-block;\n}\n\n#image > img {\n  width: 130px;\n  display: inline-block;\n  border-radius: 100%;\n}\n\n#name {\n  height: 60px;\n  width: 172px;\n  color: #333333;\n  font-size: 32px;\n  font-weight: 600;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: text-bottom;\n  text-transform: capitalize;\n  margin-top: 15px;\n  margin-left: 10px;\n}\n\n#name > .uk-margin {\n  margin-left: 3px;\n}\n\nlabel[for=sector] {\n  color: #121212;\n  font-size: 15px;\n}\n\n.uk-select[name=sector] {\n  height: 22px;\n  width: 134px;\n  color: #AFAFBB;\n  font-size: 15px;\n  margin-top: -15px;\n  padding-left: 0;\n  padding-right: 0;\n  border: none;\n}\n\n#background-heading, #skills-heading, #experience-heading {\n  height: 31px;\n  color: #1B1A3D;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 31px;\n}\n\n#background-tip, #skills-tips, #experience-tips, #icon-tips {\n  color: #616171;\n  font-size: 15px;\n  line-height: 1.7;\n}\n\n#background-example, #experience-example {\n  margin-top: 20px;\n}\n\n#background-example, #experience-example > div {\n  padding: 15px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.uk-accordion-title {\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.uk-accordion-content {\n  margin-left: 4%;\n  color: #616171;\n  font-size: 13px;\n  line-height: 22px;\n}\n\n.uk-textarea {\n  padding: 20px;\n  border-radius: 4px;\n  border: 2px solid #E9E9EF;\n  height: 180px;\n}\n\n.uk-textarea:focus {\n  border: 2px solid #0070E0;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n}\n\n#background-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n#experience-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n#background-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n#experience-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n.skills > .uk-margin {\n  -webkit-column-count: 3; /* Chrome, Safari, Opera */ /* Firefox */\n  column-count: 3;\n}\n\n#skills-label {\n  width: 100%;\n  border: 1px solid #E9E9EF;\n  border-radius: 3px;\n  background-color: #F7F8F9;\n  display: inline-block;\n  margin: 3px;\n  padding: 6px;\n  color: #616171;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n#skills-label > input {\n  float: right;\n}\n\n.uk-checkbox {\n  margin-top: 0;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n}\n\n.uk-checkbox:checked {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n  background-color: #0070E0;\n}\n\n.uk-checkbox:checked + label {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n}\n\n.uk-select.ng-valid.ng-touched {\n  border: none;\n}\n\n.uk-select.ng-invalid.ng-touched {\n  border: none;\n}\n\n#experience {\n  margin-top: 20px;\n}\n\n.experience-fields {\n  height: 120px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  padding: 20px;\n}\n\n.experience-fields:focus {\n  border: 2px solid #0070E0;\n}\n\n#add-more-exp-btn {\n  border-radius: 4px;\n  background-color: #AFAFBB;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 10px;\n}\n\n#add-more-exp-btn > .uk-icon {\n  margin-right: 10px;\n}\n\n#section-two {\n  width: 30%;\n  text-align: -webkit-center;\n}\n\n#select-icons {\n  margin-top: 250px;\n}\n\n#select-icons > div {\n  margin-bottom: 10%;\n}\n\n#select-icons > div > img {\n  width: 160px;\n  /*height: 200px;*/\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.uk-switcher > li {\n  -webkit-column-count: 5;\n          column-count: 5;\n}\n\n#custom-input[type=file]{\n  position: absolute;\n  width: 100px;\n  height: 40px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#image > #add-btn {\n  text-align: center;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0070E0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bioEditForm\" uk-grid>\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION ONE ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-one\">\n    <!------------------------- BIO ADD FORM ------------------------->\n    <form (ngSubmit)=\"save()\" [formGroup]=\"bioEditForm\" novalidate>\n      <div class=\"user-info\">\n        <!----- BIO IMAGE ----->\n        <div id=\"image\">\n          <img id=\"user-img\" src=\"data:{{imageType}};base64,{{userImage}}\" onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\">\n          <div id=\"add-btn\">\n            <div>\n              <input id=\"custom-input\" type=\"file\" (change)=\"imageCropperListener($event)\">\n              <a class=\"uk-link-muted\" type=\"button\" tabindex=\"-1\">Set New Image</a>\n            </div>\n          </div>\n        </div>\n        <!----- USER NAME & SELECT SECTOR ----->\n        <div class=\"uk-text-top\" id=\"name\">\n          {{userName}}\n          <div class=\"uk-margin\">\n            <label for=\"sector\">Sector</label>\n            <select class=\"uk-select\" formControlName=\"bioForSector\" id=\"sector\" name=\"sector\">\n              <option value=\"\" disabled selected>Select Sector</option>\n              <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <!------------------------- BACKGROUND & OVERVIEW FIELD ------------------------->\n      <div class=\"background-and-overview\">\n        <h1 id=\"background-heading\">Background and Overview</h1>\n        <!----- TIP ----->\n        <div id=\"background-tip\">\n          Write a detailed statement into your background. (Where you came from e.g. Toyota, Healthcare, Engineering)\n          Write about yourself in the third tense, as if describing somebody else.\n          Highlight the sector experience and years in industry.\n          Include your experience in the relevant sectors/industries (e.g. Supply Chain, Theatres, Emergency Department,\n          Mining, Rail, etc.)\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"background-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Background and Overview Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                Adam is an experienced Consultant who has led Lean programmes in a range of sectors including\n                healthcare, manufacturing, FMCG, public services, retail and utilities. He has a broad range of\n                knowledge and practical experience of Lean principles, tools and techniques.\n\n                He has more than 15 years’ experience of delivering Lean transformational change and supplier\n                development. His background also includes engineering and operations management in manufacturing and\n                retail including senior global supply chain management delivering savings through supply chain redesign\n              </div>\n            </div>\n          </div>\n        </div>\n        <!----- VALIDATORS ----->\n        <div *ngIf=\"bioEditForm.get('background').dirty || bioEditForm.get('background').untouched\">\n          <div *ngIf=\"bioEditForm.get('background').hasError('maxlength')\">\n            <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n          </div>\n        </div>\n\n        <div class=\"uk-margin\">\n          <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"Enter Background and Overview here\"\n                    formControlName=\"background\"></textarea>\n        </div>\n      </div>\n      <!------------------------- SKILLS FIELD ------------------------->\n      <div class=\"skills\">\n        <h1 id=\"skills-heading\">Skills</h1>\n        <!----- TIP ----->\n        <div id=\"skills-tips\">\n          From the list below, select all the different skills you are able to deliver.\n        </div>\n        <div class=\"uk-margin\">\n          <div *ngFor=\"let data of skills\">\n            <label id=\"skills-label\" *ngFor=\"let skill of data.allSkills\">\n              <input type=\"checkbox\" [checked]=\"bioEditForm.controls['skills'].value.indexOf(skill) > - 1\" (change)=\"skillsOnChange(skill, $event.target.checked)\"> {{skill}}\n            </label>\n          </div>\n        </div>\n      </div>\n      <!------------------------- EXPERIENCE FIELD ------------------------->\n      <div class=\"experience\">\n        <h1 id=\"experience-heading\">Experience</h1>\n        <!----- TIP ----->\n        <div id=\"experience-tips\">\n          The experience section should help demonstrate the ROI achieved in various projects, included points such as:\n\n          - % Reductions\n          - Money saved, monthly and yearly\n          - Hours saved\n\n          Each text field below represents 1 bullet point. You can have a maximum of 6 bullet points & a minimum of\n          atleast 4 for your experience.\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"experience-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Experience Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                - Delivered £127M savings by completely redesigning the business process landscape of a major Utilities\n                Infrastructure company and implementing a new Lean business process from the end-to-end of the business\n                resulting in an efficiency improvement of +40%.\n                - Project managed a MRO project for a leading aviation company, generating a 25% reduction in lead time\n                on\n                major overhauls.\n                - Delivered “Opportunity Searches” within a hospital trust identifying £13m benefits to be delivered\n                within 2 years. Similar opportunity searches have been done within the Gas Utility industry to improve\n                productivity and reduce costs.\n                - Managed the assembly and commission phase of a $120 million locomotive delivery contract on-time,\n                on-budget and to quality requirements for a blue-chip rail business in Australia.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"experience\" formGroupName=\"experience\">\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioEditForm.get('experience.field0').dirty || bioEditForm.get('experience.field0').untouched\">\n            <div *ngIf=\"bioEditForm.get('experience.field0').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field0\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioEditForm.get('experience.field1').dirty || bioEditForm.get('experience.field1').untouched\">\n            <div *ngIf=\"bioEditForm.get('experience.field1').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field1\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioEditForm.get('experience.field2').dirty || bioEditForm.get('experience.field2').untouched\">\n            <div *ngIf=\"bioEditForm.get('experience.field2').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field2\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioEditForm.get('experience.field3').dirty || bioEditForm.get('experience.field3').untouched\">\n            <div *ngIf=\"bioEditForm.get('experience.field3').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field3\"></textarea>\n          </div>\n\n          <!----- OPTIONAL EXPERIENCE FIELDS ----->\n          <div id=\"optional-experience\" *ngIf=\"addMoreExperience\">\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioEditForm.get('experience.field4').dirty || bioEditForm.get('experience.field4').untouched\">\n              <div *ngIf=\"bioEditForm.get('experience.field4').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field4\"></textarea>\n            </div>\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioEditForm.get('experience.field5').dirty || bioEditForm.get('experience.field5').untouched\">\n              <div *ngIf=\"bioEditForm.get('experience.field5').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field5\"></textarea>\n            </div>\n          </div>\n          <!----- OPTIONAL EXPERIENCE FIELD ----->\n          <a (click)=\"addMoreExp()\">Add More Experience</a>\n        </div>\n      </div>\n      <!------------------------- SUBMIT BUTTON ------------------------->\n      <button class=\"uk-button uk-button-primary uk-margin-top\" [disabled]=\"bioEditForm.invalid\">{{bioEditForm.invalid ? \"Fill All Fields To Activate Me\" : \"SAVE\"}}</button>\n    </form>\n  </div>\n\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION TWO ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-two\">\n    <!------------------------- SELECT ICONS FIELDS ------------------------->\n    <div id=\"select-icons\">\n      <!------ TIP ------>\n      <div id=\"icon-tips\">\n        Use the icon selectors below to chose what icons to display on your bio.\n      </div>\n      <!------ ICON 1 ------>\n      <div>\n        <img id=\"image1\" (click)=\"getBioIconElementId($event)\" src=\"{{image1}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\" href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 2 ------>\n      <div>\n        <img id=\"image2\" (click)=\"getBioIconElementId($event)\" src=\"{{image2}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 3 ------>\n      <div>\n        <img id=\"image3\" (click)=\"getBioIconElementId($event)\" src=\"{{image3}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 4 ------>\n      <div>\n        <img id=\"image4\" (click)=\"getBioIconElementId($event)\" src=\"{{image4}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n    </div>\n\n    <div id=\"modal-sections\" uk-modal>\n      <div class=\"uk-modal-dialog\">\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header\">\n          <h2 class=\"uk-modal-title\">Select Icon</h2>\n        </div>\n        <div class=\"uk-modal-body\">\n          <ul class=\"uk-subnav uk-subnav-pill\" uk-switcher>\n            <li><a href=\"#\">All</a></li>\n            <li><a href=\"#\">Healthcare</a></li>\n            <li><a href=\"#\">Manufacturing</a></li>\n            <li><a href=\"#\">Other</a></li>\n          </ul>\n\n          <ul class=\"uk-switcher uk-margin\">\n            <li *ngFor=\"let data of icons\">\n              <div *ngFor=\"let icon of data.url\">\n                <img class=\"uk-modal-close\" src=\"{{icon}}\" (click)=\"setBioIcon(icon)\">\n              </div>\n            </li>\n            <li>Hello again!</li>\n            <li>Bazinga!</li>\n            <li>Bazinga!</li>\n          </ul>\n        </div>\n        <div class=\"uk-modal-footer uk-text-right\">\n          <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!------------------------------------------------------------------------->\n<!------------------------- BIO ICONS POPUP MODAL ------------------------->\n<!------------------------------------------------------------------------->\n<div id=\"modal-container\" class=\"uk-modal-container\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header\">\n      <h2 class=\"uk-modal-title\">Set Profile Picture</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n      <img-cropper #cropper [image]=\"croppedImage\" [settings]=\"cropperSettings\"></img-cropper>\n      <br>\n      <span class=\"result rounded\" *ngIf=\"croppedImage.image\">\n        <img [src]=\"croppedImage.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </span>\n    </div>\n    <div class=\"uk-modal-footer uk-text-right\">\n      <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n      <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"setBioImage()\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======================================================
// INTERNAL ANGULAR IMPORTS      =========================
// =======================================================



// =======================================================
// OTHER IMPORTS                 =========================
// =======================================================




// =======================================================
// SERVICE IMPORTS               =========================
// =======================================================


var BioEditComponent = (function () {
    function BioEditComponent(_bioService, _router, _route, _fb, _notificationService) {
        this._bioService = _bioService;
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this._notificationService = _notificationService;
        // COMPONENT VARIABLES
        this.title = "Edit Bio";
        this.addMoreExperience = false;
    }
    BioEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setting Up the fields for the Bio Edit Form
        this.bioEditForm = this._fb.group({
            photo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            bioForSector: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            background: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(1500)]],
            experience: this._fb.group({
                field0: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field1: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field2: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field3: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field4: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field5: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]]
            }),
            skills: this._fb.array([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            iconOne: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconTwo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconThree: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconFour: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        this._setUserName();
        // Image Cropper Settings
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.compressRatio = 1.0;
        this.croppedImage = {};
        // Get all skills from skills resolver service
        this._route.data.subscribe(function (data) {
            _this.skills = data['skill'];
        });
        // Get all sector from user sector resolver service
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get all icons from icon resolver service
        this._route.parent.data.subscribe(function (data) {
            _this.icons = data['icon'];
        });
        // Get bio from the bio edit resolver service
        this._route.data.subscribe(function (data) {
            _this.onBioRetrieved(data['bio']);
        });
    };
    // =======================================================
    // BIO RETRIEVED FUNCTION        =========================
    // =======================================================
    // Bio to be edited is retrieved and we use PatchValue to set reactive form controls values
    BioEditComponent.prototype.onBioRetrieved = function (bio) {
        if (this.bioEditForm) {
            this.bioEditForm.reset();
        }
        // Set retrieved bio to the local "this.bio" variable.
        this.bio = bio;
        // Access icons from the retrieved bio and assign them local variable to be displayed on front-end.
        this.image1 = this.bio.iconOne;
        this.image2 = this.bio.iconTwo;
        this.image3 = this.bio.iconThree;
        this.image4 = this.bio.iconFour;
        // Use "patchValue" method to assign values to reactive form controls so they can be edited.
        this.bioEditForm.patchValue({
            photo: this.bio.photo || "",
            bioForSector: this.bio.bioForSector,
            background: this.bio.background,
            iconOne: this.bio.iconOne,
            iconTwo: this.bio.iconTwo,
            iconThree: this.bio.iconThree,
            iconFour: this.bio.iconFour
        });
        // If the retrieved bio contains a photo then ... (read comments below)
        if (this.bio.photo) {
            // then get the mimeType (png/jpg) from the retrieved base64 image
            this.imageType = this._getImageMimeType(this.bio.photo);
            // then set the base64 image to the local variable to be displayed on front-end
            this.userImage = this.bio.photo;
        }
        // Set the values for the reactive form control titled "skills"
        this.bioEditForm.setControl('skills', this._fb.array(this.bio.skills || []));
        // Use "patchValue" to set the values for the reactive form control titled "experience"
        this.bioEditForm.controls['experience'].patchValue({
            field0: this.bio.experience['field0'],
            field1: this.bio.experience['field1'],
            field2: this.bio.experience['field2'],
            field3: this.bio.experience['field3'],
            field4: this.bio.experience['field4'],
            field5: this.bio.experience['field5']
        });
    };
    // =======================================================
    // SAVE DATA FUNCTIONS           =========================
    // =======================================================
    // Send bioEditForm data to bio service to be handle & redirect on success and show error on failure
    BioEditComponent.prototype.save = function () {
        var _this = this;
        if (this.bioEditForm.dirty && this.bioEditForm.touched) {
            var p = Object.assign({}, this.bio, this.bioEditForm.value);
            var id = this._route.snapshot.paramMap.get('id');
            this._bioService.editBio(p, id)
                .subscribe(function () { _this.onSaveComplete(); }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                    console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
                }
            });
        }
        else if (!this.bioEditForm.dirty) {
            this.onSaveComplete();
        }
    };
    BioEditComponent.prototype.onSaveComplete = function () {
        this.bioEditForm.reset();
        this._router.navigate(['/bios']);
    };
    // =======================================================
    // PRIVATE FUNCTIONS             =========================
    // =======================================================
    // Gets users name from browser local storage & assigns the name to local variable on component initialisation
    BioEditComponent.prototype._setUserName = function () {
        this.userName = JSON.parse(localStorage.getItem("userInfo")).firstName + " " + JSON.parse(localStorage.getItem("userInfo")).lastName;
    };
    // Removes the "data:image.." from the base64 image string generated by the image cropper function
    BioEditComponent.prototype._stripBase64 = function (image) {
        return image.replace(/^data:image\/[a-z]+;base64,/, "");
    };
    // Returns the passed in base64 strings mimeType (jpg/png)
    BioEditComponent.prototype._getImageMimeType = function (data) {
        if (data.charAt(0) == '/') {
            return "image/jpeg";
        }
        else if (data.charAt(0) == 'i') {
            return "image/png";
        }
    };
    // Make Bio Pdf Form Dirty & Touched
    BioEditComponent.prototype._changeFormState = function () {
        this.bioEditForm.markAsTouched();
        this.bioEditForm.markAsDirty();
    };
    ;
    // =======================================================
    // PUBLIC FUNCTIONS              =========================
    // =======================================================
    // Gets the img tags id for which the user is trying to set an icon for
    BioEditComponent.prototype.getBioIconElementId = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.iconIndex = idAttr.nodeValue;
    };
    // Check the img tag id set by "getBioIconElementId" function and set an icon for that img tag
    BioEditComponent.prototype.setBioIcon = function (url) {
        if (this.iconIndex == "image1") {
            this.image1 = url;
            this.bioEditForm.controls['iconOne'].setValue(url);
            this._changeFormState();
        }
        else if (this.iconIndex == "image2") {
            this.image2 = url;
            this.bioEditForm.controls['iconTwo'].setValue(url);
            this._changeFormState();
        }
        else if (this.iconIndex == "image3") {
            this.image3 = url;
            this.bioEditForm.controls['iconThree'].setValue(url);
            this._changeFormState();
        }
        else if (this.iconIndex == "image4") {
            this.image4 = url;
            this.bioEditForm.controls['iconFour'].setValue(url);
            this._changeFormState();
        }
    };
    // Create a "Form Array" to save skills array in reactive bioForm. If skill is checked add to Form Array and if unchecked then remove
    BioEditComponent.prototype.skillsOnChange = function (skill, isChecked) {
        var skillsArray = this.bioEditForm.controls.skills;
        if (isChecked) {
            skillsArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](skill));
        }
        else {
            var index = skillsArray.controls.findIndex(function (x) { return x.value == skill; });
            skillsArray.removeAt(index);
        }
    };
    // Show & Hide optional experience fields
    BioEditComponent.prototype.addMoreExp = function () {
        this.addMoreExperience = !this.addMoreExperience;
    };
    // Set the image cropped by user (using the image cropper function) to the bioForm "photo" control
    BioEditComponent.prototype.setBioImage = function () {
        this.bioEditForm.controls['photo'].setValue(this._stripBase64(this.croppedImage.image));
        this._changeFormState();
        this.imageType = this._getImageMimeType(this.bioEditForm.controls['photo'].value);
        // Update the front-end with the new cropped image by the user
        this.userImage = this._stripBase64(this.croppedImage.image);
    };
    BioEditComponent.prototype.imageCropperListener = function ($event) {
        __WEBPACK_IMPORTED_MODULE_4_uikit___default.a.modal('#modal-container').show();
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            setTimeout(function () {
                that.cropper.setImage(image);
            }, 0);
        };
        myReader.readAsDataURL(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], BioEditComponent.prototype, "cropper", void 0);
    BioEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-edit.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/bios/components/bio-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__["a" /* NotificationsService */]])
    ], BioEditComponent);
    return BioEditComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.bios {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 120px;\n}\n\ntable {\n  color: #121212;\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\nth {\n  font-size: 14px;\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 38px;\n  font-weight: normal;\n  display: inline-block;\n  width: auto;\n  line-height: 1;\n}\n\n.search-bar {\n  float: right;\n}\n\n#search-bar {\n  display: inline-block;\n}\n\n.uk-search-input {\n  border-right: none;\n}\n\n.unsuccessful-filter {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100%;\n  height: 100px;\n}\n\n#filters-btn > .uk-button-default {\n  text-transform: capitalize;\n  padding-right: 0;\n  font-size: 15px;\n  margin-top: 1px;\n}\n\n#filters-btn > .uk-button-default > span {\n  margin-right: 20px;\n  margin-left: 10px;\n}\n\n#filters-btn > .uk-button-default:focus {\n  color: #0070E0;\n  border-color: #0070e0;\n}\n\n#filters-btn {\n  margin-left: -10px;\n}\n\n#bio-title {\n  width: 250px;\n  color: #121212;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n#bio-icon {\n  padding: 0;\n  width: 30px;\n}\n\n#title {\n  font-weight: 600;\n  font-size: 15px;\n  color: #121212;\n  line-height: 20px;\n}\n\n#client {\n  display: block;\n  color: #A4ACB3;\n}\n\n#arrow_forward {\n  width: 12px;\n  color: #A4ACB3;\n}\n\n.uk-table > tbody > tr:hover {\n  background-color: #FAFCFF;\n}\n\n.uk-table > tbody > tr:hover .bio-title > #title {\n  color: #0070e0;\n}\n\n.uk-table > tbody > tr:hover .bio-icon-td > .bio-icon {\n  content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 25.97 33.97%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23d4e8f8%3B%7D.cls-2%7Bfill%3A%230470e0%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Ebio-hover%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Web%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M17%2C34H0V0H26V25H17ZM2%2C32H15V23h9V2H2Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M17.39%2C34H0V0H26V25.39ZM2%2C32H16.58L24%2C24.58V2H2Z%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M11.18%2C10.83a.75.75%2C0%2C0%2C0%2C0%2C1.5.75.75%2C0%2C0%2C0%2C0-1.5Zm3.6%2C0a.75.75%2C0%2C0%2C0%2C0%2C1.5.75.75%2C0%2C0%2C0%2C0-1.5ZM13%2C5a6%2C6%2C0%2C1%2C0%2C6%2C6A6%2C6%2C0%2C0%2C0%2C13%2C5Zm0%2C10.8A4.81%2C4.81%2C0%2C0%2C1%2C8.18%2C11c0-.17%2C0-.34%2C0-.51a6%2C6%2C0%2C0%2C0%2C3.13-3.22%2C6%2C6%2C0%2C0%2C0%2C4.9%2C2.53%2C6.07%2C6.07%2C0%2C0%2C0%2C1.35-.15A5%2C5%2C0%2C0%2C1%2C17.78%2C11%2C4.8%2C4.8%2C0%2C0%2C1%2C13%2C15.78Z%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2218.98%22 width%3D%2216%22 height%3D%222%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2222.98%22 width%3D%228%22 height%3D%222%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2226.98%22 width%3D%228%22 height%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n#bio-status {\n}\n\n.live {\n  color: #f9a615;\n}\n\n.won {\n  color: #13CE66;\n}\n\n.lost {\n  color: #ff5346;\n}\n\n.status-circle-live {\n  display: inline-block;\n  background-color: #f9a615;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-lost {\n  display: inline-block;\n  background-color: #ff5346;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-won {\n  display: inline-block;\n  background-color: #13CE66;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n#edit-btn {\n  height: 35px;\n  border: 1px solid #C2C7CF;\n  width: 70px;\n  line-height: 2.5;\n  text-transform: capitalize;\n  padding: 0;\n  color: #ACB6C0;\n}\n\n#bio-owner {\n  width: 200px;\n}\n\n#bio-download{\n  width: 50px;\n}\n\n#bio-added {\n  width: 150px;\n}\n\n#bio-action {\n  width: 10px;\n}\n\n#bio-file {\n}\n\n#bio-file > a > .material-icons {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.file-available {\n  color: #0070e0;\n}\n\n.file-unavailable {\n  color: #ABABAB;\n}\n\n.uk-offcanvas-bar {\n  width: 450px;\n  height: 100%;\n  color: #333333;\n  padding: 0 0 0 0;\n  background-color: #FFFFFF;\n}\n\n.uk-offcanvas-close {\n  color: #333333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bios\">\n  <h1>{{title}}</h1>\n\n  <!--<div class=\"search-bar\">\n    <div class=\"uk-margin\" id=\"search-bar\">\n      <div class=\"uk-search uk-search-default\">\n        <span uk-search-icon></span>\n        <input class=\"uk-search-input\" type=\"search\"  [(ngModel)]=\"_listFilter\" placeholder=\"Search by \">\n      </div>\n    </div>\n\n    <div class=\"uk-inline\" id=\"filters-btn\">\n      <button class=\"uk-button uk-button-default\" type=\"button\">Filters <span uk-icon=\"icon: settings\"></span></button>\n      <div uk-drop=\"mode: click\">\n        <div class=\"uk-card uk-card-body uk-card-default\">\n          <p id=\"filter-title\">Status</p>\n          <fieldset id=\"status\">\n            <div class=\"filter-options\" uk-grid>\n              <div class=\"option-1\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioStatus\" value=\"won\" name=\"status\"> Won</label></div>\n              <div class=\"option-2\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioStatus\" value=\"live\" name=\"status\"> Live</label></div>\n              <div class=\"option-3\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioStatus\" value=\"lost\" name=\"status\"> Lost</label></div>\n            </div>\n          </fieldset>\n\n          <fieldset id=\"region\">\n            <div class=\"filter-options\" uk-grid>\n              <div class=\"option-1\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioRegion\" value=\"UK\" name=\"region\"> UK</label></div>\n              <div class=\"option-2\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioRegion\" value=\"NA\" name=\"region\"> NA</label></div>\n              <div class=\"option-3\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.bioRegion\" value=\"AU\" name=\"region\"> AU</label></div>\n            </div>\n          </fieldset>\n        </div>\n        <button (click)=\"filterbios()\">Apply</button>\n        <button (click)=\"bioList()\">Clear Filters</button>\n      </div>\n    </div>\n  </div>-->\n\n <!-- <section *ngIf=\"!filterStatus\" class=\"unsuccessful-filter\">\n    <div>\n      {{filterMessage}}\n    </div>\n  </section>-->\n\n  <section>\n    <table class=\"uk-table uk-table-middle uk-table-divider\">\n      <thead>\n      <tr>\n        <th></th>\n        <th class=\"uk-width-small\">NAME</th>\n        <th>JOB TITLE</th>\n        <th>SECTOR</th>\n        <th>REGION</th>\n        <th>ADDED</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bio of bios\">\n        <td class=\"bio-icon-td\" id=\"bio-icon\"><img class=\"bio-icon\" src=\"assets/images/bio-icons/bio-normal.svg\"></td>\n        <td class=\"bio-title\" id=\"bio-title\">{{bio.firstName}} {{bio.lastName}}</td>\n        <td>{{bio.jobTitle}}</td>\n        <td id=\"bio-sector\"><span>{{bio.bioForSector}}</span></td>\n        <td id=\"bio-region\">{{bio.region}}</td>\n        <td id=\"bio-added\"><span>{{bio.dateCreated | date }}</span></td>\n        <td id=\"bio-download\">\n          <div>\n            <a [routerLink]=\"['/bios', bio._id,'pdf']\"><i class=\"material-icons\">file_download</i></a>\n          </div>\n        </td>\n        <td id=\"bio-action\">\n          <a class=\"uk-button uk-button-default\" id=\"edit-btn\"  [routerLink]=\"['/bios', bio._id]\">View</a>\n          <!--<button uk-icon=\"icon: more; ratio: 1\"></button>\n          <div uk-dropdown=\"mode: click\">\n            <ul class=\"uk-nav uk-dropdown-nav\"> [routerLink]=\"['/bios', bio._id]\"\n              <li><a (click)=\"onSelect(bio)\" uk-toggle=\"target: #offcanvas-slide\">View</a></li>\n              <li><a [routerLink]=\"['/bios', bio._id]\">Edit</a></li>\n            </ul>\n          </div>-->\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </section>\n</section>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BioListComponent = (function () {
    function BioListComponent(_route) {
        this._route = _route;
        this.title = "Bio's";
    }
    BioListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Bios from bios list route resolver service
        this._route.data.subscribe(function (data) {
            _this.bios = data['bios'];
            console.log(_this.bios);
        });
    };
    BioListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-list.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/bios/components/bio-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BioListComponent);
    return BioListComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-pdf.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nhtml {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.bioPdfForm {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 60px;\n}\n\n#section-one {\n  width: 70%;\n}\n\n.user-info {\n  margin-bottom: 50px;\n}\n\n#image {\n  width: 130px;\n  height: 130px;\n  display: inline-block;\n}\n\n#image > img {\n  width: 130px;\n  display: inline-block;\n  border-radius: 100%;\n}\n\n#name {\n  height: 60px;\n  width: 172px;\n  color: #333333;\n  font-size: 32px;\n  font-weight: 600;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: text-bottom;\n  text-transform: capitalize;\n  margin-top: 15px;\n  margin-left: 10px;\n}\n\n#name > .uk-margin {\n  margin-left: 3px;\n}\n\nlabel[for=sector] {\n  color: #121212;\n  font-size: 15px;\n}\n\n.uk-select[name=sector] {\n  height: 22px;\n  width: 134px;\n  color: #AFAFBB;\n  font-size: 15px;\n  margin-top: -15px;\n  padding-left: 0;\n  padding-right: 0;\n  border: none;\n}\n\n#background-heading, #skills-heading, #experience-heading {\n  height: 31px;\n  color: #1B1A3D;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 31px;\n}\n\n#background-tip, #skills-tips, #experience-tips, #icon-tips {\n  color: #616171;\n  font-size: 15px;\n  line-height: 1.7;\n}\n\n#background-example, #experience-example {\n  margin-top: 20px;\n}\n\n#background-example, #experience-example > div {\n  padding: 15px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.uk-accordion-title {\n  color: #1B1A3D;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.uk-accordion-content {\n  margin-left: 4%;\n  color: #616171;\n  font-size: 13px;\n  line-height: 22px;\n}\n\n.uk-textarea {\n  padding: 20px;\n  border-radius: 4px;\n  border: 2px solid #E9E9EF;\n  height: 180px;\n}\n\n.uk-textarea:focus {\n  border: 2px solid #0070E0;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n}\n\n#background-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n#experience-example > div > div > p > span {\n  margin-right: 10px;\n}\n\n#background-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n#experience-example > div > div > p > .uk-icon {\n  color: #0070E0;\n}\n\n.skills > .uk-margin {\n  -webkit-column-count: 3; /* Chrome, Safari, Opera */ /* Firefox */\n  column-count: 3;\n}\n\n#skills-label {\n  width: 100%;\n  border: 1px solid #E9E9EF;\n  border-radius: 3px;\n  background-color: #F7F8F9;\n  display: inline-block;\n  margin: 3px;\n  padding: 6px;\n  color: #616171;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n#skills-label > input {\n  float: right;\n}\n\n.uk-checkbox {\n  margin-top: 0;\n  border-radius: 3px;\n  background-color: #FFFFFF;\n}\n\n.uk-checkbox:checked {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n  background-color: #0070E0;\n}\n\n.uk-checkbox:checked + label {\n  border: 1px solid #0070E0;\n  border-radius: 3px;\n}\n\n.uk-select.ng-valid.ng-touched {\n  border: none;\n}\n\n.uk-select.ng-invalid.ng-touched {\n  border: none;\n}\n\n#experience {\n  margin-top: 20px;\n}\n\n.experience-fields {\n  height: 120px;\n  border: 2px solid #E9E9EF;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  padding: 20px;\n}\n\n.experience-fields:focus {\n  border: 2px solid #0070E0;\n}\n\n#add-more-exp-btn {\n  border-radius: 4px;\n  background-color: #AFAFBB;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  color: #FFFFFF;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 10px;\n}\n\n#add-more-exp-btn > .uk-icon {\n  margin-right: 10px;\n}\n\n#section-two {\n  width: 30%;\n  text-align: -webkit-center;\n}\n\n#select-icons {\n  margin-top: 250px;\n}\n\n#select-icons > div {\n  margin-bottom: 10%;\n}\n\n#select-icons > div > img {\n  width: 160px;\n  /*height: 200px;*/\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.uk-switcher > li {\n  -webkit-column-count: 5;\n          column-count: 5;\n}\n\n#custom-input[type=file]{\n  position: absolute;\n  width: 100px;\n  height: 40px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#image > #add-btn {\n  text-align: center;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0070E0;\n}\n\n.downloading-file {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100%;\n  height: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-pdf.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"downloadFile\" class=\"downloading-file\">\n  <div>\n    {{generatingPdf}}\n  </div>\n</section>\n\n<section *ngIf=\"!downloadFile\" class=\"bioPdfForm\" uk-grid>\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION ONE ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-one\">\n    <!------------------------- BIO ADD FORM ------------------------->\n    <form (ngSubmit)=\"pdf()\" [formGroup]=\"bioPdfForm\" novalidate>\n      <div class=\"user-info\">\n        <!----- BIO IMAGE ----->\n        <div id=\"image\">\n          <img id=\"user-img\" src=\"{{userImage}}\" onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\">\n          <div id=\"add-btn\">\n            <div>\n              <input id=\"custom-input\" type=\"file\" (change)=\"imageCropperListener($event)\">\n              <a class=\"uk-link-muted\" type=\"button\" tabindex=\"-1\">Set New Image</a>\n            </div>\n          </div>\n        </div>\n        <!----- USER NAME & SELECT SECTOR ----->\n        <div class=\"uk-text-top\" id=\"name\">\n          {{userName}}\n          <div class=\"uk-margin\">\n            <label for=\"sector\">Sector</label>\n            <select class=\"uk-select\" formControlName=\"bioForSector\" id=\"sector\" name=\"sector\">\n              <option value=\"\" disabled selected>Select Sector</option>\n              <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <!------------------------- BACKGROUND & OVERVIEW FIELD ------------------------->\n      <div class=\"background-and-overview\">\n        <h1 id=\"background-heading\">Background and Overview</h1>\n        <!----- TIP ----->\n        <div id=\"background-tip\">\n          Write a detailed statement into your background. (Where you came from e.g. Toyota, Healthcare, Engineering)\n          Write about yourself in the third tense, as if describing somebody else.\n          Highlight the sector experience and years in industry.\n          Include your experience in the relevant sectors/industries (e.g. Supply Chain, Theatres, Emergency Department,\n          Mining, Rail, etc.)\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"background-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Background and Overview Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                Adam is an experienced Consultant who has led Lean programmes in a range of sectors including\n                healthcare, manufacturing, FMCG, public services, retail and utilities. He has a broad range of\n                knowledge and practical experience of Lean principles, tools and techniques.\n\n                He has more than 15 years’ experience of delivering Lean transformational change and supplier\n                development. His background also includes engineering and operations management in manufacturing and\n                retail including senior global supply chain management delivering savings through supply chain redesign\n              </div>\n            </div>\n          </div>\n        </div>\n        <!----- VALIDATORS ----->\n        <div *ngIf=\"bioPdfForm.get('background').dirty || bioPdfForm.get('background').untouched\">\n          <div *ngIf=\"bioPdfForm.get('background').hasError('maxlength')\">\n            <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n          </div>\n        </div>\n\n        <div class=\"uk-margin\">\n          <textarea class=\"uk-textarea\" rows=\"5\" placeholder=\"Enter Background and Overview here\"\n                    formControlName=\"background\"></textarea>\n        </div>\n      </div>\n      <!------------------------- SKILLS FIELD ------------------------->\n      <div class=\"skills\">\n        <h1 id=\"skills-heading\">Skills</h1>\n        <!----- TIP ----->\n        <div id=\"skills-tips\">\n          From the list below, select all the different skills you are able to deliver.\n        </div>\n        <div class=\"uk-margin\">\n          <div *ngFor=\"let data of skills\">\n            <label id=\"skills-label\" *ngFor=\"let skill of data.allSkills\">\n              <input type=\"checkbox\" [checked]=\"bioPdfForm.controls['skills'].value.indexOf(skill) > - 1\" (change)=\"skillsOnChange(skill, $event.target.checked)\"> {{skill}}\n            </label>\n          </div>\n        </div>\n      </div>\n      <!------------------------- EXPERIENCE FIELD ------------------------->\n      <div class=\"experience\">\n        <h1 id=\"experience-heading\">Experience</h1>\n        <!----- TIP ----->\n        <div id=\"experience-tips\">\n          The experience section should help demonstrate the ROI achieved in various projects, included points such as:\n\n          - % Reductions\n          - Money saved, monthly and yearly\n          - Hours saved\n\n          Each text field below represents 1 bullet point. You can have a maximum of 6 bullet points & a minimum of\n          atleast 4 for your experience.\n        </div>\n        <!----- EXAMPLE ----->\n        <div id=\"experience-example\">\n          <div uk-accordion>\n            <div>\n              <p class=\"uk-accordion-title\" href=\"#\"><span uk-icon=\"icon: info\"></span>Experience Example\n              </p>\n              <div class=\"uk-accordion-content\">\n                - Delivered £127M savings by completely redesigning the business process landscape of a major Utilities\n                Infrastructure company and implementing a new Lean business process from the end-to-end of the business\n                resulting in an efficiency improvement of +40%.\n                - Project managed a MRO project for a leading aviation company, generating a 25% reduction in lead time\n                on\n                major overhauls.\n                - Delivered “Opportunity Searches” within a hospital trust identifying £13m benefits to be delivered\n                within 2 years. Similar opportunity searches have been done within the Gas Utility industry to improve\n                productivity and reduce costs.\n                - Managed the assembly and commission phase of a $120 million locomotive delivery contract on-time,\n                on-budget and to quality requirements for a blue-chip rail business in Australia.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"experience\" formGroupName=\"experience\">\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioPdfForm.get('experience.field0').dirty || bioPdfForm.get('experience.field0').untouched\">\n            <div *ngIf=\"bioPdfForm.get('experience.field0').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field0\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioPdfForm.get('experience.field1').dirty || bioPdfForm.get('experience.field1').untouched\">\n            <div *ngIf=\"bioPdfForm.get('experience.field1').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field1\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioPdfForm.get('experience.field2').dirty || bioPdfForm.get('experience.field2').untouched\">\n            <div *ngIf=\"bioPdfForm.get('experience.field2').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field2\"></textarea>\n          </div>\n          <!----- VALIDATORS ----->\n          <div *ngIf=\"bioPdfForm.get('experience.field3').dirty || bioPdfForm.get('experience.field3').untouched\">\n            <div *ngIf=\"bioPdfForm.get('experience.field3').hasError('maxlength')\">\n              <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                      formControlName=\"field3\"></textarea>\n          </div>\n\n          <!----- OPTIONAL EXPERIENCE FIELDS ----->\n          <div id=\"optional-experience\" *ngIf=\"addMoreExperience\">\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioPdfForm.get('experience.field4').dirty || bioPdfForm.get('experience.field4').untouched\">\n              <div *ngIf=\"bioPdfForm.get('experience.field4').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field4\"></textarea>\n            </div>\n            <!----- VALIDATORS ----->\n            <div *ngIf=\"bioPdfForm.get('experience.field5').dirty || bioPdfForm.get('experience.field5').untouched\">\n              <div *ngIf=\"bioPdfForm.get('experience.field5').hasError('maxlength')\">\n                <div class=\"uk-alert-danger\" uk-alert>You are over the word limit.</div>\n              </div>\n            </div>\n            <div class=\"uk-margin\">\n              <textarea class=\"uk-textarea experience-fields\" type=\"text\" placeholder=\"Detail your experience here .....\"\n                        formControlName=\"field5\"></textarea>\n            </div>\n          </div>\n          <!----- OPTIONAL EXPERIENCE FIELD ----->\n          <a (click)=\"addMoreExp()\">Add More Experience</a>\n        </div>\n      </div>\n      <!------------------------- SUBMIT BUTTON ------------------------->\n      <button class=\"uk-button uk-button-primary uk-margin-top\" [disabled]=\"bioPdfForm.invalid\">{{bioPdfForm.invalid ? \"Fill All Fields To Activate Me\" : \"GENERATE BIO PDF\"}}</button>\n    </form>\n  </div>\n\n  <!--------------------------------------------------------------->\n  <!------------------------- SECTION TWO ------------------------->\n  <!--------------------------------------------------------------->\n  <div id=\"section-two\">\n    <!------------------------- SELECT ICONS FIELDS ------------------------->\n    <div id=\"select-icons\">\n      <!------ TIP ------>\n      <div id=\"icon-tips\">\n        Use the icon selectors below to chose what icons to display on your bio.\n      </div>\n      <!------ ICON 1 ------>\n      <div>\n        <img id=\"image1\" (click)=\"getBioIconElementId($event)\" src=\"{{image1}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\" href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 2 ------>\n      <div>\n        <img id=\"image2\" (click)=\"getBioIconElementId($event)\" src=\"{{image2}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 3 ------>\n      <div>\n        <img id=\"image3\" (click)=\"getBioIconElementId($event)\" src=\"{{image3}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n      <!------ ICON 4 ------>\n      <div>\n        <img id=\"image4\" (click)=\"getBioIconElementId($event)\" src=\"{{image4}}\"\n             onerror=\"this.src='/assets/images/add-image-icon/add-image-icon.png'\"\n             href=\"#modal-sections\" uk-toggle>\n      </div>\n    </div>\n\n    <div id=\"modal-sections\" uk-modal>\n      <div class=\"uk-modal-dialog\">\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header\">\n          <h2 class=\"uk-modal-title\">Select Icon</h2>\n        </div>\n        <div class=\"uk-modal-body\">\n          <ul class=\"uk-subnav uk-subnav-pill\" uk-switcher>\n            <li><a href=\"#\">All</a></li>\n            <li><a href=\"#\">Healthcare</a></li>\n            <li><a href=\"#\">Manufacturing</a></li>\n            <li><a href=\"#\">Other</a></li>\n          </ul>\n\n          <ul class=\"uk-switcher uk-margin\">\n            <li *ngFor=\"let data of icons\">\n              <div *ngFor=\"let icon of data.url\">\n                <img class=\"uk-modal-close\" src=\"{{icon}}\" (click)=\"setBioIcon(icon)\">\n              </div>\n            </li>\n            <li>Hello again!</li>\n            <li>Bazinga!</li>\n            <li>Bazinga!</li>\n          </ul>\n        </div>\n        <div class=\"uk-modal-footer uk-text-right\">\n          <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<!------------------------------------------------------------------------->\n<!------------------------- BIO ICONS POPUP MODAL ------------------------->\n<!------------------------------------------------------------------------->\n<div id=\"modal-container\" class=\"uk-modal-container\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header\">\n      <h2 class=\"uk-modal-title\">Set Profile Picture</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n      <img-cropper #cropper [image]=\"croppedImage\" [settings]=\"cropperSettings\"></img-cropper>\n      <br>\n      <span class=\"result rounded\" *ngIf=\"croppedImage.image\">\n        <img [src]=\"croppedImage.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n      </span>\n    </div>\n    <div class=\"uk-modal-footer uk-text-right\">\n      <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n      <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"setBioImage()\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/bios/components/bio-pdf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioPdfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_services_shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======================================================
// INTERNAL ANGULAR IMPORTS      =========================
// =======================================================



// =======================================================
// OTHER IMPORTS                 =========================
// =======================================================




// =======================================================
// SERVICE IMPORTS               =========================
// =======================================================



var BioPdfComponent = (function () {
    function BioPdfComponent(_bioService, _router, _route, _fb, _notificationService, _ss) {
        this._bioService = _bioService;
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this._notificationService = _notificationService;
        this._ss = _ss;
        // COMPONENT VARIABLES
        this.title = "Edit Bio";
        this.addMoreExperience = false;
        this.downloadFile = false;
        this.generatingPdf = "Processing your file....";
        this.nativeWindow = this._ss.getWindowRef();
    }
    BioPdfComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setting Up the fields for the Bio Edit Form
        this.bioPdfForm = this._fb.group({
            photo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            bioForSector: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            background: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(1500)]],
            experience: this._fb.group({
                field0: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field1: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field2: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field3: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field4: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]],
                field5: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(500)]]
            }),
            skills: this._fb.array([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            iconOne: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconTwo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconThree: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            iconFour: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        this._setUserName();
        // Image Cropper Settings
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.compressRatio = 1.0;
        this.croppedImage = {};
        // Get all skills from skills resolver service
        this._route.data.subscribe(function (data) {
            _this.skills = data['skill'];
        });
        // Get all sector from user sector resolver service
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get all icons from icon resolver service
        this._route.parent.data.subscribe(function (data) {
            _this.icons = data['icon'];
        });
        // Get bio from the bio edit resolver service
        this._route.data.subscribe(function (data) {
            _this.onBioRetrieved(data['bio']);
        });
    };
    // =======================================================
    // BIO RETRIEVED FUNCTION        =========================
    // =======================================================
    // Bio to be edited is retrieved and we use PatchValue to set reactive form controls values
    BioPdfComponent.prototype.onBioRetrieved = function (bio) {
        if (this.bioPdfForm) {
            this.bioPdfForm.reset();
        }
        // Set retrieved bio to the local "this.bio" variable.
        this.bio = bio;
        // Access icons from the retrieved bio and assign them local variable to be displayed on front-end.
        this.image1 = this.bio.iconOne;
        this.image2 = this.bio.iconTwo;
        this.image3 = this.bio.iconThree;
        this.image4 = this.bio.iconFour;
        // If the retrieved bio contains a photo
        if (this.bio.photo) {
            this.imageType = this._getImageMimeType(this.bio.photo);
            this.bio.photo = "data:" + this.imageType + ";base64," + this.bio.photo;
            this.userImage = this.bio.photo;
        }
        // Use "patchValue" method to assign values to reactive form controls so they can be edited.
        this.bioPdfForm.patchValue({
            photo: this.bio.photo || "",
            bioForSector: this.bio.bioForSector,
            background: this.bio.background,
            iconOne: this.bio.iconOne,
            iconTwo: this.bio.iconTwo,
            iconThree: this.bio.iconThree,
            iconFour: this.bio.iconFour
        });
        // Set the values for the reactive form control titled "skills"
        this.bioPdfForm.setControl('skills', this._fb.array(this.bio.skills || []));
        // Use "patchValue" to set the values for the reactive form control titled "experience"
        this.bioPdfForm.controls['experience'].patchValue({
            field0: this.bio.experience['field0'],
            field1: this.bio.experience['field1'],
            field2: this.bio.experience['field2'],
            field3: this.bio.experience['field3'],
            field4: this.bio.experience['field4'],
            field5: this.bio.experience['field5']
        });
    };
    // =======================================================
    // SAVE DATA FUNCTIONS           =========================
    // =======================================================
    BioPdfComponent.prototype.pdf = function () {
        var _this = this;
        this.downloadFile = true;
        var p = Object.assign({}, this.bio, this.bioPdfForm.value);
        var id = this._route.snapshot.paramMap.get('id');
        this._bioService.pdfBio(p, id)
            .subscribe(function (data) {
            var parser = document.createElement('a');
            parser.href = data;
            parser.dispatchEvent(new MouseEvent('click'));
            _this.downloadFile = false;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    BioPdfComponent.prototype.onSaveComplete = function () {
        this.bioPdfForm.reset();
        this._router.navigate(['/welcome']);
    };
    // =======================================================
    // PRIVATE FUNCTIONS             =========================
    // =======================================================
    // Gets users name from browser local storage & assigns the name to local variable on component initialisation
    BioPdfComponent.prototype._setUserName = function () {
        this.userName = JSON.parse(localStorage.getItem("userInfo")).firstName + " " + JSON.parse(localStorage.getItem("userInfo")).lastName;
    };
    // Returns the passed in base64 strings mimeType (jpg/png)
    BioPdfComponent.prototype._getImageMimeType = function (data) {
        if (data.charAt(0) == '/') {
            return "image/jpeg";
        }
        else if (data.charAt(0) == 'i') {
            return "image/png";
        }
    };
    // =======================================================
    // PUBLIC FUNCTIONS              =========================
    // =======================================================
    // Gets the img tags id for which the user is trying to set an icon for
    BioPdfComponent.prototype.getBioIconElementId = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.iconIndex = idAttr.nodeValue;
    };
    // Check the img tag id set by "getBioIconElementId" function and set an icon for that img tag
    BioPdfComponent.prototype.setBioIcon = function (url) {
        if (this.iconIndex == "image1") {
            this.image1 = url;
            this.bioPdfForm.controls['iconOne'].setValue(url);
        }
        else if (this.iconIndex == "image2") {
            this.image2 = url;
            this.bioPdfForm.controls['iconTwo'].setValue(url);
        }
        else if (this.iconIndex == "image3") {
            this.image3 = url;
            this.bioPdfForm.controls['iconThree'].setValue(url);
        }
        else if (this.iconIndex == "image4") {
            this.image4 = url;
            this.bioPdfForm.controls['iconFour'].setValue(url);
        }
    };
    // Create a "Form Array" to save skills array in reactive bioForm. If skill is checked add to Form Array and if unchecked then remove
    BioPdfComponent.prototype.skillsOnChange = function (skill, isChecked) {
        var skillsArray = this.bioPdfForm.controls.skills;
        if (isChecked) {
            skillsArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](skill));
        }
        else {
            var index = skillsArray.controls.findIndex(function (x) { return x.value == skill; });
            skillsArray.removeAt(index);
        }
    };
    // Show & Hide optional experience fields
    BioPdfComponent.prototype.addMoreExp = function () {
        this.addMoreExperience = !this.addMoreExperience;
    };
    // Set the image cropped by user (using the image cropper function) to the bioForm "photo" control
    BioPdfComponent.prototype.setBioImage = function () {
        this.bioPdfForm.controls['photo'].setValue(this.croppedImage.image);
        this.userImage = this.croppedImage.image;
    };
    BioPdfComponent.prototype.imageCropperListener = function ($event) {
        __WEBPACK_IMPORTED_MODULE_4_uikit___default.a.modal('#modal-container').show();
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            setTimeout(function () {
                that.cropper.setImage(image);
            }, 0);
        };
        myReader.readAsDataURL(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], BioPdfComponent.prototype, "cropper", void 0);
    BioPdfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/bios/components/bio-pdf.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/bios/components/bio-pdf.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__root_services_notifications_service__["a" /* NotificationsService */], __WEBPACK_IMPORTED_MODULE_7__root_services_shared_service__["a" /* SharedService */]])
    ], BioPdfComponent);
    return BioPdfComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/services/bio-edit-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioEditResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BioEditResolverService = (function () {
    function BioEditResolverService(_bioService, _router) {
        this._bioService = _bioService;
        this._router = _router;
    }
    BioEditResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this._bioService.getBio(id)
            .map(function (data) {
            if (data) {
                return data;
            }
            _this._router.navigate(['/welcome']);
            return null;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            //this._notificationService.sendNotification(err.error.message);
            _this._router.navigate(['/welcome']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioEditResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], BioEditResolverService);
    return BioEditResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/services/bio-list-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioListResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BioListResolverService = (function () {
    function BioListResolverService(_bioService, _notificationService) {
        this._bioService = _bioService;
        this._notificationService = _notificationService;
    }
    BioListResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        //this._spinnerService.displayLoader(true);
        return this._bioService.getAll()
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            _this._notificationService.sendNotification(err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioListResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bio_service__["a" /* BioService */], __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__["a" /* NotificationsService */]])
    ], BioListResolverService);
    return BioListResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/bios/services/bio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BioService = (function () {
    function BioService(_http) {
        this._http = _http;
    }
    BioService.prototype.getAll = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/bios")
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioService.prototype.addBio = function (body) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.post(BASE_URL + '/api/bios', body)
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioService.prototype.getBio = function (id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/bios/" + id)
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioService.prototype.editBio = function (body, id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        console.log("BIO " + body);
        return this._http.put(BASE_URL + '/api/bios/' + id, body)
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioService.prototype.pdfBio = function (body, id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.post(BASE_URL + '/api/bios/' + id + '/pdf', body, { responseType: 'text' })
            .map(function (data) {
            console.log(data);
            var test = data.replace("?dl=0", "?dl=1");
            var url = test.replace(/['"]+/g, '');
            //let url = test + '?dl=1';
            console.log(url);
            console.log(JSON.stringify(test));
            return url;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    BioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BioService);
    return BioService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/dashboard/components/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 60px;\n}\n\n#user-proposals {\n  width: 50%;\n  height: 200px;\n  border: 1px solid lightgrey;\n}\n\n#user-bios {\n  width: 50%;\n  height: 200px;\n  border: 1px solid lightgrey;\n}\n\n.uk-container {\n  padding-top: 100px;\n}\n\n.uk-card-body {\n  padding: 20px;\n  height: 250px;\n}\n\n#col1, #col2 {\n  min-width: 200px;\n}\n\n#proposals {\n  margin-left: 0 !important;\n}\n\n@media screen and (max-width: 600px) {\n  #dashboard {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/dashboard/components/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n  <div>\n    <h1 style=\"white-space: pre\">{{title}} Max!</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n  </div>\n\n  <!--<div>\n    <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper><br>\n    <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n  </div>\n  <br>\n  {{data.image}}-->\n\n  <div class=\"uk-child-width-expand\" uk-grid>\n    <div id=\"col1\">\n      <h3>Proposals</h3>\n      <div class=\"uk-card uk-card-default uk-card-hover uk-card-body\">\n        <h3 class=\"uk-card-title\"></h3>\n        <div id=\"plist\">\n\n        </div>\n      </div>\n    </div>\n\n    <div id=\"col2\">\n      <h3>Bios</h3>\n      <div class=\"uk-card uk-card-default uk-card-hover uk-card-body\">\n        <h3 class=\"uk-card-title\"></h3>\n        <div id=\"blist\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<proposal-list [proposals]=\"proposals\"></proposal-list>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/dashboard/components/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__("../../../../../angular-src/src/app/dashboard/services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_ds) {
        this._ds = _ds;
        this.title = "Dashboard";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._getUserId();
        this.getProposals();
    };
    DashboardComponent.prototype.getProposals = function () {
        var _this = this;
        this._ds.getAll(this.userID)
            .subscribe(function (data) {
            _this.proposals = data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype._getUserId = function () {
        this.userID = JSON.parse(localStorage.getItem("userInfo"))._id;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../angular-src/src/app/dashboard/components/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/dashboard/components/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_component__ = __webpack_require__("../../../../../angular-src/src/app/dashboard/components/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposals_proposal_module__ = __webpack_require__("../../../../../angular-src/src/app/proposals/proposal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__proposals_proposal_module__["a" /* ProposalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/dashboard/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = (function () {
    function DashboardService(_http) {
        this._http = _http;
    }
    // =======================================================
    // GET ALL PROPOSALS FOR THIS USE=========================
    // =======================================================
    DashboardService.prototype.getAll = function (id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/users/" + id + "/proposals")
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nh1 {\n  text-transform: capitalize;\n  font-size: 38px;\n  font-weight: normal;\n  line-height: 1;\n}\n\n#proposalAddForm {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 60px;\n  padding-bottom: 40px;\n}\n\n#select-region {\n  margin-top: 10px;\n}\n\n.grid-container {\n  margin-top: 40px;\n}\n\ninput {\n  text-transform: capitalize;\n}\n\ninput:focus {\n  border-color: #0070e0;\n}\n\n.uk-input {\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\n.uk-select:not([multiple]):not([size]) {\n  height: 55px;\n}\n\n.uk-select {\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\nselect {\n  text-transform: capitalize;\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\nselect:focus {\n  border-color: #0070e0;\n}\n\nlegend {\n  padding-bottom: 17px;\n}\n\n.uk-form-label {\n  color: #121212;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.uk-form-controls {\n  margin-top: 10px;\n}\n\n.uk-legend {\n  color: #333333;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.section-one {\n  width: 60%;\n}\n\n#sec-one-heading {\n  color: #121212;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n#sec-three-heading {\n  color: #121212;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.section-two {\n  width: 50%;\n}\n\n.section-three {\n  width: 25%;\n}\n\n.sticky-upload {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.sticky-upload > #upload-proposal-file-heading {\n  color: #121212;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.drop-zone {\n  height: 131px !important;\n  border: 1px solid #0070E0 !important;\n  border-radius: 0 !important;\n  background-color: #FAFDFF;\n  overflow: hidden;\n}\n\n.drop-zone > #file-upload-spinner {\n  width: 100%;\n  color: #0070e0;\n  margin-top: 20%;\n  padding-right: 42%;\n  padding-left: 42%;\n}\n\n.drop-zone > div > p {\n  text-align: center;\n  color: #0070E0;\n  font-size: 13px;\n}\n\n.drop-zone > div > span {\n  margin-top: 20px;\n  color: #0070E0;\n  padding-right: 42%;\n  padding-left: 42%;\n  width: 100%;\n}\n\n.drop-zone > div > #file-field {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  color: #FFF;\n  font-weight: bold;\n  margin-top: -140px;\n  font-size: 400px;\n  opacity: 0;\n}\n\n#proposal-id {\n  font-size: 26px;\n  color: #0070e0;\n  margin-top: 6px;\n}\n\n.new-client-toggle {\n  width: 100%;\n  margin-top: 5px;\n}\n\n.new-client-toggle > a {\n  float: right;\n}\n\n#barcode {\n  color: #0070e0;\n}\n\n.live {\n  border: 1px solid #f9a615;\n  background-color: #FFFBEE;\n  color: #f9a615;\n}\n\ninput[type=radio] {\n  display: none;\n}\n\ninput[type=radio] + label {\n  border: 1px solid #DADCDF;\n  height: 130px;\n  width: 32%;\n  display: inline-block;\n  margin: 2px;\n  padding: 0 0 0 0;\n  color: #9da2aa;\n  font-size: 14px;\n  font-weight: 600;\n}\n\ninput[type=radio]:checked + label {\n  border: 1px solid #0070E0;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  height: 130px;\n  width: 32%;\n  margin: 2px;\n  display: inline-block;\n  padding: 0 0 0 0;\n  color: #0070E0;\n  font-size: 14px;\n  font-weight: 600;\n}\n\ninput[type=radio]:checked + label > #uk-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2230px%22 height%3D%2236px%22 viewBox%3D%220 0 30 36%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eunited-kingdom%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Crect id%3D%22path-1%22 x%3D%22480%22 y%3D%22257%22 width%3D%22146%22 height%3D%22112%22%3E%3C%2Frect%3E        %3Cfilter x%3D%22-5.1%25%22 y%3D%22-6.7%25%22 width%3D%22110.3%25%22 height%3D%22113.4%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-2%22%3E            %3CfeOffset dx%3D%220%22 dy%3D%220%22 in%3D%22SourceAlpha%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeMorphology radius%3D%221%22 operator%3D%22erode%22 in%3D%22SourceAlpha%22 result%3D%22shadowInner%22%3E%3C%2FfeMorphology%3E            %3CfeOffset dx%3D%220%22 dy%3D%220%22 in%3D%22shadowInner%22 result%3D%22shadowInner%22%3E%3C%2FfeOffset%3E            %3CfeComposite in%3D%22shadowOffsetOuter1%22 in2%3D%22shadowInner%22 operator%3D%22out%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeComposite%3E            %3CfeGaussianBlur stdDeviation%3D%222.5%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeColorMatrix values%3D%220 0 0 0 0   0 0 0 0 0.439215686   0 0 0 0 0.878431373  0 0 0 0.1 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22%3E%3C%2FfeColorMatrix%3E        %3C%2Ffilter%3E    %3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Live%22 transform%3D%22translate(-538.000000%2C -274.000000)%22%3E            %3Cg id%3D%22Rectangle-Copy-10%22%3E                %3Cuse fill%3D%22black%22 fill-opacity%3D%221%22 filter%3D%22url(%23filter-2)%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                %3Crect stroke%3D%22%230070E0%22 stroke-width%3D%221%22 x%3D%22480.5%22 y%3D%22257.5%22 width%3D%22145%22 height%3D%22111%22%3E%3C%2Frect%3E            %3C%2Fg%3E            %3Cg id%3D%22united-kingdom%22 transform%3D%22translate(538.000000%2C 274.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%230070E0%22%3E                %3Cpath d%3D%22M4.83336842%2C5.07968421 C4.89763158%2C5.12252632 4.95021053%2C5.14394737 5.01252632%2C5.18678947 C5.069%2C5.27052632 5.07873684%2C5.364 5.07289474%2C5.45552632 C5.07289474%2C5.46136842 5.07678947%2C5.47110526 5.07678947%2C5.47694737 C5.04952632%2C5.77684211 4.81%2C6.10010526 5.04757895%2C6.28510526 C6.36594737%2C7.31915789 7.82257895%2C8.08447368 6.28415789%2C10.2071053 C5.61426316%2C11.1321053 7.49736842%2C10.5926842 7.60057895%2C10.9276316 C7.548%2C12.4991579 5.33968421%2C11.8721053 5.83821053%2C13.1690526 C6.34452632%2C14.4874211 6.97547368%2C13.0405263 7.56552632%2C12.8535789 C7.61421053%2C12.8399474 7.85568421%2C13.134 7.83815789%2C13.2566842 C7.38636842%2C16.2166842 9.38047368%2C14.0005789 10.3249474%2C14.4231579 C8.72226316%2C16.7483158 9.52652632%2C17.3831579 12.0892632%2C17.0462632 C14.7961053%2C16.6898947 15.0103158%2C19.4356842 15.3764211%2C20.8066316 C15.9450526%2C22.9467895 13.875%2C22.6936316 12.4105789%2C22.5047368 C11.9159474%2C22.4424211 11.0591053%2C22.5436842 11.3200526%2C22.902 C11.8049474%2C23.5660526 10.1360526%2C24.4326316 11.6102105%2C24.7364211 C13.1681053%2C25.0596842 12.6929474%2C25.8600526 12.0055263%2C26.6058947 C10.7864737%2C27.934 11.0045789%2C29.081 12.6384211%2C29.6710526 C13.1817368%2C29.8696842 13.7075263%2C30.1072632 14.9635789%2C30.6291579 C10.9072105%2C30.4577895 10.4748947%2C34.0837895 7.67068421%2C35.1022632 C8.88194737%2C35.5891053 9.56352632%2C35.223 10.3074211%2C35.112 C12.9246842%2C34.7322632 15.1407895%2C33.1295789 17.9644737%2C33.1918947 C21.0296316%2C33.2542105 24.1785263%2C32.9387368 27.1677368%2C32.0098421 C27.7538947%2C31.8287368 28.601%2C31.4606842 28.5932105%2C30.6700526 C28.5834737%2C29.7197368 27.1404737%2C30.6272105 26.9204211%2C29.6671579 C27.1521579%2C29.3906316 27.306%2C29.1238421 27.5396842%2C28.9641579 C28.7334211%2C28.1384737 29.8492632%2C27.1433684 29.5045789%2C25.5796316 C29.1462632%2C23.9399474 27.6253684%2C23.9555263 26.3401053%2C24.0762632 C25.4482105%2C24.1522105 25.5689474%2C23.8153158 25.4540526%2C23.1687895 C24.7276842%2C19.0364737 20.3402632%2C17.1572632 19.2263684%2C13.2099474 C19.1153684%2C12.8146316 18.5506316%2C12.4251579 18.1124737%2C12.2693684 C16.3715263%2C11.6501053 16.3481579%2C10.7426316 17.4094737%2C9.41452632 C17.9566842%2C8.72515789 18.241%2C7.83521053 18.7395263%2C7.09910526 C19.7521579%2C5.61326316 19.4405789%2C4.94531579 17.6042105%2C4.99984211 C16.1748421%2C5.04268421 14.7454737%2C5.00957895 13.0902105%2C5.00957895 C13.4660526%2C3.51205263 14.5078947%2C3.21215789 15.1524737%2C2.53642105 C15.7074737%2C1.96194737 16.1164211%2C0.768210526 14.8350526%2C0.968789474 C12.6442632%2C1.31736842 9.70957895%2C0.376789474 8.65605263%2C3.47115789 C8.56842105%2C3.72236842 8.47884211%2C3.958 8.38536842%2C4.17610526 C7.70963158%2C5.68921053 6.74373684%2C6.27147368 5.01642105%2C5.18678947 L5.01642105%2C5.18678947 L5.01642105%2C5.18678947 L5.01642105%2C5.18678947 C4.97942105%2C5.13031579 4.97747368%2C5.07773684 4.90931579%2C5.02905263 C4.89373684%2C5.03489474 4.87621053%2C5.03878947 4.86063158%2C5.04463158 C4.85478947%2C5.05826316 4.84505263%2C5.06994737 4.83921053%2C5.07968421 L4.83336842%2C5.07968421 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M0.938631579%2C18.2341579 C0.895789474%2C18.8281053 1.34368421%2C19.2409474 1.73705263%2C19.3052105 C3.44878947%2C19.5836842 5.18389474%2C19.8816316 6.90536842%2C19.8602105 C7.74078947%2C19.8563158 8.51778947%2C19.1299474 8.58205263%2C17.8446842 C7.82647368%2C16.8963158 7.73494737%2C15.1144737 5.82457895%2C15.0093158 C4.34847368%2C14.9216842 1.02431579%2C17.1436316 0.938631579%2C18.2341579 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M6.44384211%2C1.56273684 C4.60357895%2C2.05347368 3.54226316%2C3.03105263 3.67273684%2C5.00763158 C2.24726316%2C5.14784211 2.94831579%2C5.79631579 3.27352632%2C6.30457895 C3.42931579%2C5.95015789 3.774%2C5.63078947 4.02131579%2C5.26078947 C4.29978947%2C5.18873684 4.58021053%2C5.11278947 4.85868421%2C5.04268421 C5.36305263%2C3.93073684 6.96963158%2C3.34068421 6.44384211%2C1.56273684 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M3.20731579%2C6.85373684 C3.50331579%2C6.75052632 3.42347368%2C6.54410526 3.27157895%2C6.30457895 C3.19563158%2C6.47205263 3.15084211%2C6.64731579 3.20731579%2C6.85373684 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\ninput[type=radio]:checked + label > #na-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2248px%22 height%3D%2237px%22 viewBox%3D%220 0 48 37%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Enorth america%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Cpolygon id%3D%22path-1%22 points%3D%2224.1739044 11.8928571 0.142994844 11.8928571 0.142994844 0.140716945 24.1739044 0.140716945 24.1739044 11.8928571%22%3E%3C%2Fpolygon%3E        %3Cpolygon id%3D%22path-3%22 points%3D%220.0679591837 0.0488928571 35.2750464 0.0488928571 35.2750464 27.3571015 0.0679591837 27.3571015%22%3E%3C%2Fpolygon%3E    %3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Lost%22 transform%3D%22translate(-691.000000%2C -272.000000)%22%3E            %3Crect id%3D%22Rectangle-Copy-15%22 stroke%3D%22%23C4CDD5%22 x%3D%22642.5%22 y%3D%22256.5%22 width%3D%22145%22 height%3D%22111%22%3E%3C%2Frect%3E            %3Cg id%3D%22north-america%22 transform%3D%22translate(691.000000%2C 272.000000)%22%3E                %3Cg id%3D%22Group-3%22 transform%3D%22translate(17.178571%2C 25.058250)%22%3E                    %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E                        %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                    %3C%2Fmask%3E                    %3Cg id%3D%22Clip-2%22%3E%3C%2Fg%3E                    %3Cpath d%3D%22M22.7033699%2C1.57087653 C21.222426%2C2.37770306 19.6848495%2C3.09108571 17.8301301%2C4.00381531 C18.051375%2C1.95692245 16.610074%2C1.7160449 15.2741097%2C1.14027959 C10.6812015%2C-0.859608163 5.94350255%2C0.822947959 1.29396173%2C0.456345918 C0.907915816%2C0.42935102 0.639665816%2C0.667963265 0.457686224%2C1.09100918 C-0.600022959%2C3.60021327 1.12934949%2C7.55845816 3.84016582%2C8.52026939 C6.25082908%2C9.37391224 9.12418112%2C8.96068265 10.9987219%2C11.2484531 C11.2667832%2C11.575601 11.5742985%2C11.238448 11.9114515%2C11.007198 C14.6887168%2C9.08602959 16.5239923%2C9.32709592 18.4842372%2C11.8929327 C19.5126862%2C10.6996827 17.4759872%2C9.4698102 18.8385689%2C8.56708571 C21.0108087%2C7.11559082 21.3774107%2C4.15615714 23.7119974%2C2.86965204 C24.4425587%2C2.45623367 24.1718546%2C1.89783571 23.817523%2C1.41815714 C23.3748444%2C0.813131633 23.0967781%2C1.35925918 22.7033699%2C1.57087653%22 id%3D%22Fill-1%22 fill%3D%22%230070E0%22 mask%3D%22url(%23mask-2)%22%3E%3C%2Fpath%3E                %3C%2Fg%3E                %3Cpath d%3D%22M6.13573265%2C20.6320117 C7.61988571%2C19.2065679 8.96170204%2C19.4566954 10.5092837%2C19.4544301 C11.7735133%2C20.2518179 13.0194316%2C21.1082923 13.8853449%2C22.3521342 C14.3348194%2C23.0137923 14.8654673%2C22.916573 15.313998%2C22.5569556 C15.8873092%2C22.0963434 15.2101714%2C21.8148791 15.0317786%2C21.4380832 C14.2326918%2C19.7056903 12.4293194%2C19.5414556 11.0297378%2C18.7516189 C11.0431408%2C17.3003128 11.04635%2C15.8586342 11.0693806%2C14.4171444 C11.0818398%2C13.6375015 11.172452%2C12.7360985 10.1666561%2C12.5477005 C8.19451837%2C12.1792107 6.15725306%2C11.570976 4.21305408%2C11.7516342 C2.75948265%2C11.8811342 0.31465102%2C11.9970423 0.983293878%2C14.8124403 C-1.49853776%2C15.5430015 1.59643673%2C16.6305372 0.813773469%2C17.5702617 C0.362411224%2C18.0993995 -0.419308163%2C18.9898536 1.07145204%2C19.4563179 C2.77269694%2C20.0026342 4.56398776%2C22.1544862 6.13573265%2C20.6320117%22 id%3D%22Fill-4%22 fill%3D%22%230070E0%22%3E%3C%2Fpath%3E                %3Cg id%3D%22Group-8%22 transform%3D%22translate(12.081633%2C 0.139883)%22%3E                    %3Cmask id%3D%22mask-4%22 fill%3D%22white%22%3E                        %3Cuse xlink%3Ahref%3D%22%23path-3%22%3E%3C%2Fuse%3E                    %3C%2Fmask%3E                    %3Cg id%3D%22Clip-7%22%3E%3C%2Fg%3E                    %3Cpath d%3D%22M23.4308163%2C14.3976628 C22.938301%2C14.0446526 23.8555612%2C12.2512852 24.2597296%2C12.5910811 C24.7843367%2C13.0139383 25.3848316%2C13.1215403 25.9738112%2C13.5897036 C24.9315816%2C13.4179179 24.5219388%2C15.1659791 23.4308163%2C14.3976628 M23.5442704%2C19.953326 C22.4793878%2C19.4870505 21.352398%2C19.1321526 20.3613265%2C18.5544995 C19.7478061%2C18.195826 18.3508673%2C17.9353158 19.1040816%2C16.8441934 C19.5930102%2C16.1494995 20.2291837%2C15.0451628 21.752602%2C15.7323056 C23.3817347%2C16.4760811 25.0108673%2C16.9253668 24.9751888%2C19.2775097 C24.8145408%2C19.8117444 24.4485051%2C20.3497546 23.5442704%2C19.953326 M35.2670408%2C23.5891423 C34.878352%2C21.7240403 34.0022449%2C20.2062852 32.575102%2C18.8771168 C31.2253571%2C17.6125097 30.4778061%2C15.975826 31.5651531%2C14.0748566 C31.8294388%2C13.6123566 32.0333163%2C13.0781219 31.6180102%2C12.6269485 C29.6171786%2C10.4843464 27.4347449%2C8.57016276 24.5900867%2C7.79807092 C25.7791837%2C5.49123418 27.6556122%2C3.81868316 30.0228571%2C2.65393827 C30.7177398%2C2.30847908 31.6859694%2C1.98944847 31.5311735%2C0.973836224 C31.3895918%2C-0.0191229592 30.262602%2C0.496234184 29.7151531%2C0.0488362245 L23.9235204%2C0.15832602 C22.7285714%2C0.549091327 21.4752908%2C0.505672959 20.255801%2C0.69822398 C17.497602%2C1.14939745 15.9911735%2C2.87858112 16.2781122%2C5.59317296 C16.4480102%2C7.20720357 15.7759694%2C7.66781582 14.3735561%2C7.89434643 C12.4403061%2C8.20205051 10.6129592%2C7.93398929 8.72520408%2C7.45449949 C6.38438776%2C6.85796888 5.2725%2C8.1812852 5.96530612%2C10.4692444 C6.37872449%2C10.8600097 7.01131122%2C10.7750607 7.45852041%2C11.0922036 C6.84877551%2C10.8014893 6.15408163%2C10.7467444 5.55188776%2C10.4352648 C3.71887755%2C10.6901117 1.87265306%2C10.8260301 0.0679591837%2C11.3036321 L0.19255102%2C17.988173 C2.13127551%2C19.1019485 3.44515306%2C20.7877138 4.70428571%2C22.6075097 C5.77841837%2C24.1724587 7.52836735%2C24.670826 9.39913265%2C24.6425097 C11.84%2C24.6198566 14.2791684%2C24.5518974 16.727398%2C24.5198056 C19.2777551%2C24.4877138 21.7639286%2C24.6387342 23.0910204%2C27.3571015 L23.5403061%2C27.3476628 C25.2638265%2C26.8153158 27.0855102%2C26.5000607 28.4845255%2C25.2069485 C28.9185204%2C24.8067444 28.5277551%2C25.4259281 28.673301%2C25.3579689 C28.7978929%2C25.8110301 29.0865306%2C26.1829179 29.5075%2C26.3075097 C31.5179592%2C26.9266934 32.6543878%2C24.5594485 34.6027398%2C24.7671015 C35.2162602%2C24.8369485 35.3066837%2C24.1347036 35.2670408%2C23.5891423%22 id%3D%22Fill-6%22 fill%3D%22%230070E0%22 mask%3D%22url(%23mask-4)%22%3E%3C%2Fpath%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\ninput[type=radio]:checked + label > #au-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2241px%22 height%3D%2233px%22 viewBox%3D%220 0 41 33%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eaustralia copy 2%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Live-Copy%22 transform%3D%22translate(-741.000000%2C -281.000000)%22%3E            %3Crect id%3D%22Rectangle-Copy-16%22 stroke%3D%22%230070E0%22 x%3D%22713.5%22 y%3D%22257.5%22 width%3D%22191%22 height%3D%2284%22%3E%3C%2Frect%3E            %3Cg id%3D%22australia%22 transform%3D%22translate(741.000000%2C 281.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%230070E0%22%3E                %3Cpath d%3D%22M34.3339457%2C9.06236208 C33.9087742%2C5.81310668 31.4200545%2C3.564468 31.0058788%2C0 C29.5342721%2C1.99756818 29.3766654%2C3.79904481 29.2263892%2C5.62251302 C29.1402554%2C6.67261079 28.6087909%2C8.25600428 27.7987658%2C8.01226431 C26.2721801%2C7.55410647 24.8720462%2C6.41970766 23.6368495%2C5.32196147 C22.7975022%2C4.57791314 23.4334269%2C3.62494483 24.0583558%2C2.87539861 C24.6283056%2C2.19915763 24.303929%2C0.890658841 23.9392345%2C1.11973776 C22.0442889%2C2.29262183 20.1365148%2C-0.3097147 18.2415692%2C1.47160298 C16.7241466%2C2.89739018 15.6538872%2C5.25048885 12.4742638%2C4.20955424 C11.6092596%2C3.92732901 8.95560271%2C6.50034344 8.50477426%2C8.14421377 C7.85418849%2C10.5156387 6.37158599%2C11.1937124 4.57010482%2C11.9102712 C-0.74820478%2C14.0177973 -0.969953734%2C16.4570296 1.58474082%2C21.3538206 C2.56336843%2C23.221272 3.86270734%2C24.9805981 3.41920943%2C27.2603915 C3.09116759%2C28.9409145 4.8083475%2C29.2103113 5.25184541%2C28.9189229 C7.31356088%2C27.5426167 10.011201%2C27.7295451 11.8933182%2C26.1040011 C15.3313433%2C23.131473 19.2275274%2C23.3898741 21.9123391%2C26.9158568 C22.4547993%2C27.6269178 22.7443558%2C27.8138462 23.2446654%2C26.9946599 C23.3802805%2C27.1614294 23.5158955%2C27.3336968 23.6551759%2C27.5004662 C24.6796194%2C28.4992503 25.6857365%2C29.345926 26.3491508%2C30.8211942 C27.3955859%2C33.1706276 33.9894101%2C33.6471118 35.3400629%2C31.3599879 C36.6522302%2C29.1315081 38.2906068%2C27.1009526 39.4378369%2C24.7808413 C41.3071256%2C21.0056207 40.1745566%2C17.7563653 38.0157114%2C14.4136457 C36.8263306%2C12.5718511 34.6216696%2C11.2431934 34.3339457%2C9.06236208 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n#uk, #na, #au {\n  text-align: -webkit-center;\n  display: -webkit-box;\n}\n\n#uk-icon, #na-icon, #au-icon {\n  height: 70%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.mat-form-field {\n  display: block;\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 1px solid #C4CDD5;\n  border-radius: 3px;\n}\n\n.mat-form-field:focus {\n  border-color: #0070e0;\n}\n\n/deep/ .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n/deep/ .mat-form-field-infix {\n  border-top: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n  padding-left: 20px;\n  line-height: 55px;\n}\n\n/deep/ .mat-input-underline {\n  color: #fff;\n  background-color: white;\n  bottom: 0;\n}\n\n/deep/ .mat-form-field-suffix .mat-icon-button {\n  margin-right: 10px;\n}\n\n#proposal-create-btn {\n  height: 41px;\n  margin-top: 40px;\n  /*width: 221px;*/\n  background-color: #0070E0;\n}\n\n#proposal-create-btn:disabled {\n  color: #FFFFFF;\n  background-color: #C4CDD1;\n  border-color: transparent;\n}\n\n.error {\n  color: #FF5346;\n  font-size: 14px;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"proposalAddForm\">\n  <h1>{{title}}</h1>\n  <div class=\"grid-container\" uk-grid>\n\n    <!--------------------------------------------------------------->\n    <!------------------------- SECTION ONE ------------------------->\n    <!--------------------------------------------------------------->\n    <div class=\"section-one\">\n      <!------------------------- PROPOSAL ADD FORM ------------------------->\n      <form (ngSubmit)=\"save()\" [formGroup]=\"proposalForm\" novalidate>\n        <!----- SELECT REGION ------>\n        <label class=\"uk-form-label\" for=\"title\">Select Region</label>\n        <div id=\"select-region\">\n          <input type='radio' value='UK' formControlName=\"proposalRegion\" id=\"region-title-uk\"/><label\n          for=\"region-title-uk\"><span id=\"uk-icon\"><img src=\"assets/images/region-icons/united-kingdom.svg\"></span><span id=\"uk\">United Kingdom</span></label>\n          <input type='radio' value='NA' formControlName=\"proposalRegion\" id=\"region-title-na\"/><label\n          for=\"region-title-na\"><span id=\"na-icon\"><img src=\"assets/images/region-icons/north-america.svg\"></span><span id=\"na\">North America</span></label>\n          <input type='radio' value='AU' formControlName=\"proposalRegion\" id=\"region-title-au\"/><label\n          for=\"region-title-au\"><span id=\"au-icon\"><img src=\"assets/images/region-icons/australia.svg\"></span><span id=\"au\">Asia Pacific</span></label>\n        </div>\n\n        <!----- ENTER TITLE------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('proposalTitle').touched && proposalForm.get('proposalTitle').hasError('required')}\">{{proposalForm.get('proposalTitle').touched && proposalForm.get('proposalTitle').hasError('required') ? \"Title is Required\" : \"Proposal Title\"}}</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Proposal Title\" id=\"title\" formControlName=\"proposalTitle\">\n          </div>\n        </div>\n\n        <!----- SELECT OWNER ------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"owner\" [ngClass]=\"{'error': proposalForm.get('owner').touched && proposalForm.get('owner').hasError('required')}\">{{proposalForm.get('owner').touched && proposalForm.get('owner').hasError('required') ? \"Proposal Owner is Required\" : \"Proposal Owner\"}}</label>\n          <div class=\"uk-form-controls\">\n            <select class=\"uk-select\"  formControlName=\"owner\" id=\"owner\" (change)=\"setOwnerEmail()\">\n              <option value=\"\" disabled selected>Select User</option>\n              <option *ngFor=\"let user of users\" value=\"{{user.firstName}} {{user.lastName}}\">{{user.firstName}} {{user.lastName}}</option>\n            </select>\n          </div>\n        </div>\n\n        <!------------------------- CLIENT INFORMATION ------------------------->\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Client Information</legend>\n\n          <div class=\"uk-grid-small\" uk-grid>\n            <!----- SELECT SECTOR ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('sector').touched && proposalForm.get('sector').hasError('required')}\">{{proposalForm.get('sector').touched && proposalForm.get('sector').hasError('required') ? \"Sector is Required\" : \"Sector\"}}</label>\n              <div class=\"uk-form-controls\">\n                <select class=\"uk-select\" formControlName=\"sector\" id=\"sector\">\n                  <option value=\"\" disabled selected>Select Sector</option>\n                  <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n                </select>\n              </div>\n            </div>\n            <!----- SELECT CLIENT ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('client').touched && proposalForm.get('client').hasError('required')}\">{{proposalForm.get('client').touched && proposalForm.get('client').hasError('required') ? \"Client is Required\" : \"Client\"}}</label>\n              <div class=\"uk-form-controls\">\n                <select class=\"uk-select\" formControlName=\"client\" id=\"client\" *ngIf=\"!newClient\">\n                  <option value=\"\" disabled selected>Select Sector</option>\n                  <optgroup *ngFor=\"let sector of sectors\" label=\"{{sector.sectorName}}\">\n                    <option *ngFor=\"let client of sector.sectorClients\" value=\"{{client}}\">{{client}}</option>\n                  </optgroup>\n                </select>\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Client Name\" formControlName=\"client\" *ngIf=\"newClient\">\n              </div>\n            </div>\n            <div class=\"new-client-toggle\" *ngIf=\"!newClient\"><a (click)=\"addNewClient()\">Add new client</a></div>\n            <div class=\"new-client-toggle\" *ngIf=\"newClient\"><a (click)=\"addNewClient()\">Choose from existing clients</a></div>\n          </div>\n        </fieldset>\n\n        <!----- ENTER CLIENT CONTACT ------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('clientContact').touched && proposalForm.get('clientContact').hasError('required')}\">{{proposalForm.get('clientContact').touched && proposalForm.get('clientContact').hasError('required') ? \"Client Contact is Required\" : \"Client Contact\"}}</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Client Contact\" formControlName=\"clientContact\">\n          </div>\n        </div>\n\n        <!------------------------- PROPOSAL INFORMATION ------------------------->\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Proposal Information</legend>\n\n          <div class=\"uk-grid-small\" uk-grid>\n            <!----- SELECT ISSUE DATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\">Issue Date</label>\n              <div class=\"uk-form-controls\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"issueDate\" formControlName=\"proposalIssueDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"issueDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #issueDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!----- SELECT RESPONSE DATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\">Expected Response Date</label>\n              <div class=\"uk-form-controls\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"responseDate\" formControlName=\"responseDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"responseDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #responseDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!----- ENTER DAYS PROPOSED ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('totalNumberOfDays').touched && proposalForm.get('totalNumberOfDays').hasError('required')}\">{{proposalForm.get('totalNumberOfDays').touched && proposalForm.get('totalNumberOfDays').hasError('required') ? \"Days Proposed is Required\" : \"Days Proposed\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Total No. of Days\" formControlName=\"totalNumberOfDays\">\n              </div>\n            </div>\n            <!----- ENTER DAILY RATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('dailyRate').touched && proposalForm.get('dailyRate').hasError('required')}\">{{proposalForm.get('dailyRate').touched && proposalForm.get('dailyRate').hasError('required') ? \"Daily Rate is Required\" : \"Daily Rate\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Daily Rate\" formControlName=\"dailyRate\">\n              </div>\n            </div>\n            <!----- ENTER EXPENSES ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('expenses').touched && proposalForm.get('expenses').hasError('required')}\">{{proposalForm.get('expenses').touched && proposalForm.get('expenses').hasError('required') ? \"Expenses are Required\" : \"Expenses\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Expenses\" (change)=\"calculateTotal()\" formControlName=\"expenses\">\n              </div>\n            </div>\n            <!----- ENTER PROJECT VALUE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalForm.get('totalValue').touched && proposalForm.get('totalValue').hasError('required')}\">{{proposalForm.get('totalValue').touched && proposalForm.get('totalValue').hasError('required') ? \"Total Value is Required\" : \"Total Value\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Total Value\" formControlName=\"totalValue\">\n              </div>\n            </div>\n\n          </div>\n        </fieldset>\n\n        <!----- SUBMIT BUTTON ------>\n        <button class=\"uk-button uk-button-primary\" id=\"proposal-create-btn\" [disabled]=\"proposalForm.invalid\">{{proposalForm.invalid ? \"Complete All Fields To Activate Me\" : \"CREATE PROPOSAL\"}}</button>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProposalAddComponent = (function () {
    function ProposalAddComponent(_fb, _route, _router, _proposalService, _notificationService) {
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._proposalService = _proposalService;
        this._notificationService = _notificationService;
        this.title = "Create Proposal";
    }
    ProposalAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proposalForm = this._fb.group({
            proposalRegion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalTitle: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            sector: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            client: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            owner: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            ownerEmail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            clientContact: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalIssueDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            responseDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            totalNumberOfDays: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            dailyRate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            expenses: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            totalValue: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get all users from user list resolver service
        this._route.data.subscribe(function (data) {
            _this.users = data['users'];
        });
    };
    ProposalAddComponent.prototype.addNewClient = function () {
        this.newClient = !this.newClient;
    };
    // =======================================================
    // SAVE NEW PROPOSAL             =========================
    // =======================================================
    ProposalAddComponent.prototype.save = function () {
        var _this = this;
        this.proposalForm.controls['totalValue'].setValue(this.calculateTotal(this.proposalForm.value.totalNumberOfDays, this.proposalForm.value.dailyRate, this.proposalForm.value.expenses));
        if (this.proposalForm.dirty && this.proposalForm.touched) {
            var p = Object.assign({}, this.proposal, this.proposalForm.value);
            this._proposalService.create(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                    console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
                }
            });
        }
        else if (!this.proposalForm.dirty) {
            this.onSaveComplete();
        }
    };
    ProposalAddComponent.prototype.onSaveComplete = function () {
        this.proposalForm.reset();
        this._router.navigate(['/proposals']);
    };
    ProposalAddComponent.prototype.calculateTotal = function (totalNumberOfDays, dailyRate, expenses) {
        return (totalNumberOfDays * dailyRate) + expenses;
    };
    ProposalAddComponent.prototype.setOwnerEmail = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.firstName.concat(" ", user.lastName) == this.proposalForm.controls['owner'].value) {
                this.proposalForm.controls['ownerEmail'].setValue(user.email);
            }
        }
    };
    ProposalAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-proposal-add',
            template: __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-add.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__["a" /* ProposalService */],
            __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__["a" /* NotificationsService */]])
    ], ProposalAddComponent);
    return ProposalAddComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  text-transform: capitalize;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n.proposalDetailView {\n  padding: 20px 40px 20px 40px;\n}\n\n#proposal-id {\n  color: #0070E0;\n  font-size: 26px;\n  line-height: 33px;\n}\n\n#proposal-id img {\n  margin-right: 5px;\n}\n\n.section-title {\n  color: #333333;\n  font-size: 24px;\n  font-weight: 600;\n  padding-top: 40px;\n  padding-bottom: 10px;\n  line-height: 31px;\n}\n\n.live {\n  color: #f9a615;\n}\n\n.won {\n  color: #13CE66;\n}\n\n.lost {\n  color: #ff5346;\n}\n\n.status-circle-live {\n  display: inline-block;\n  background-color: #f9a615;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-lost {\n  display: inline-block;\n  background-color: #ff5346;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-won {\n  display: inline-block;\n  background-color: #13CE66;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  vertical-align: text-bottom;\n}\n\n.proposal-info {\n\n}\n\n.data-field {\n  border-top: 1px solid #E5E5E5;\n  padding: 20px 0 20px 0;\n}\n\n.field-title {\n  display: inline-block;\n  width: 50%;\n  margin-left: 5%;\n  color: #121212;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.field-title > span {\n  margin-right: 10px;\n}\n\n.field-value {\n  display: inline-block;\n  color: #ACB6C0;\n}\n\n#sticky-edit-button {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  height: 91px;\n  width: 100%;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 -2px 11px 0 rgba(228, 228, 228, 0.5);\n          box-shadow: 0 -2px 11px 0 rgba(228, 228, 228, 0.5)\n}\n\n#sticky-edit-button > button {\n  height: 50px;\n  width: 404px;\n  color: #FFFFFF;\n  background-color: #0070E0;\n  font-size: 16px;\n  line-height: 20px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"proposalDetailView\">\n  <div id=\"proposal-id\"><img id=\"barcode\" src=\"assets/images/proposal-icons/barcode.svg\">\n    {{proposal?.proposalNo}}\n  </div>\n\n  <div class=\"section-title\">\n    {{(proposal?.proposalTitle.length>30) ? (proposal?.proposalTitle | slice:0:30)+'...':(proposal?.proposalTitle) }}\n  </div>\n  <span\n    [ngClass]=\"{'status-circle-live': proposal?.proposalStatus === 'live', 'status-circle-won': proposal?.proposalStatus === 'won', 'status-circle-lost': proposal?.proposalStatus === 'lost'}\"></span><span\n  id=\"proposal-status\"\n  [ngClass]=\"{'live': proposal?.proposalStatus === 'live', 'won': proposal?.proposalStatus === 'won', 'lost': proposal?.proposalStatus === 'lost'}\">Proposal is {{proposal?.proposalStatus}}</span>\n  <div class=\"proposal-info\">\n    <section class=\"section-title\"> Proposal Info</section>\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Proposal Owner</div>\n      <div class=\"field-value\">{{proposal?.owner}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Region</div>\n      <div class=\"field-value\">{{proposal?.proposalRegion}}</div>\n    </div>\n  </div>\n\n  <div class=\"client-info\">\n    <section class=\"section-title\"> Client Information</section>\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Client</div>\n      <div class=\"field-value\">{{proposal?.client}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Sector</div>\n      <div class=\"field-value\">{{proposal?.sector}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Person of Contact</div>\n      <div class=\"field-value\">{{proposal?.clientContact}}</div>\n    </div>\n  </div>\n\n  <div class=\"financial-info\">\n    <section class=\"section-title\"> Financial Information</section>\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Total Value</div>\n      <div class=\"field-value\">{{proposal?.totalValue | currency:proposal?.currency:'symbol-narrow':'.0'}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Days Proposed</div>\n      <div class=\"field-value\">{{proposal?.totalNumberOfDays}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Daily Rate</div>\n      <div class=\"field-value\">{{proposal?.dailyRate}}</div>\n    </div>\n\n    <div class=\"data-field\">\n      <div class=\"field-title\"><span uk-icon=\"icon: users\"></span>Expenses</div>\n      <div class=\"field-value\">{{proposal?.expenses}}</div>\n    </div>\n  </div>\n\n</div>\n\n<div id=\"sticky-edit-button\">\n  <button class=\"uk-button uk-button-primary uk-offcanvas-close\" id=\"proposal-save-btn\"\n          [routerLink]=\"['/proposals', proposal?._id]\">Edit Proposal\n  </button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProposalDetailComponent = (function () {
    function ProposalDetailComponent() {
    }
    ProposalDetailComponent.prototype.ngOnInit = function () {
    };
    ProposalDetailComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProposalDetailComponent.prototype, "proposal", void 0);
    ProposalDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proposal-detail',
            template: __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-detail.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProposalDetailComponent);
    return ProposalDetailComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nh1 {\n  text-transform: capitalize;\n  font-size: 38px;\n  font-weight: normal;\n  line-height: 1;\n}\n\n#proposalEditForm {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-right: 60px;\n}\n\n.grid-container {\n  margin-top: 40px;\n}\n\ninput {\n  text-transform: capitalize;\n}\n\ninput:focus {\n  border-color: #0070e0;\n}\n\n.uk-input {\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\n.uk-select:not([multiple]):not([size]) {\n  height: 55px;\n}\n\n.uk-select {\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\nselect {\n  text-transform: capitalize;\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\nselect:focus {\n  border-color: #0070e0;\n}\n\nlegend {\n  padding-bottom: 17px;\n}\n\n.uk-form-label {\n  color: #121212;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.uk-form-controls {\n  margin-top: 10px;\n}\n\n.uk-legend {\n  color: #333333;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.section-one {\n  width: 60%;\n  margin-right: 4%;\n}\n\n#sec-one-heading {\n  color: #121212;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n#sec-three-heading {\n  color: #121212;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.section-two {\n  width: 30%;\n  margin-top: 0;\n}\n\n.section-three {\n  width: 25%;\n}\n\n.sticky-upload {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.sticky-upload > #upload-proposal-file-heading {\n  color: #121212;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.drop-zone {\n  height: 131px !important;\n  border: 1px solid #0070E0 !important;\n  border-radius: 0 !important;\n  background-color: #FAFDFF;\n  overflow: hidden;\n}\n\n.drop-zone > #file-upload-spinner {\n  width: 100%;\n  color: #0070e0;\n  margin-top: 20%;\n  padding-right: 42%;\n  padding-left: 42%;\n}\n\n.drop-zone > div > p {\n  text-align: center;\n  color: #0070E0;\n  font-size: 13px;\n}\n\n.drop-zone > div > span {\n  margin-top: 20px;\n  color: #0070E0;\n  padding-right: 42%;\n  padding-left: 42%;\n  width: 100%;\n}\n\n.drop-zone > div > #file-field {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  color: #FFF;\n  font-weight: bold;\n  margin-top: -140px;\n  font-size: 400px;\n  opacity: 0;\n}\n\n#proposal-id {\n  font-size: 26px;\n  color: #0070e0;\n  margin-top: 6px;\n}\n\n.new-client-toggle {\n  width: 100%;\n  margin-top: 5px;\n}\n\n.new-client-toggle > a {\n  float: right;\n}\n\n#barcode {\n  color: #0070e0;\n}\n\n.live {\n  border: 1px solid #f9a615;\n  background-color: #FFFBEE;\n  color: #f9a615;\n}\n\n.lost {\n  border: 1px solid #FF5346;\n  background-color: #FFF8F7;\n  color: #FF5346;\n}\n\n.won {\n  border: 1px solid #13CE66;\n  background-color: #F5FFF9;\n  color: #13CE66;\n}\n\ninput[type=radio] {\n  display: none;\n}\n\ninput[type=radio] + label {\n  border: 1px solid #DADCDF;\n  height: 130px;\n  width: 32%;\n  display: inline-block;\n  margin: 2px;\n  padding: 0 0 0 0;\n  color: #9da2aa;\n  font-size: 14px;\n  font-weight: 600;\n}\n\ninput[type=radio]:checked + label {\n  border: 1px solid #0070E0;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n          box-shadow: 0 0 5px 0 rgba(0, 112, 224, 0.1);\n  height: 130px;\n  width: 32%;\n  margin: 2px;\n  display: inline-block;\n  padding: 0 0 0 0;\n  color: #0070E0;\n  font-size: 14px;\n  font-weight: 600;\n}\n\ninput[type=radio]:checked + label > #uk-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2230px%22 height%3D%2236px%22 viewBox%3D%220 0 30 36%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eunited-kingdom%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Crect id%3D%22path-1%22 x%3D%22480%22 y%3D%22257%22 width%3D%22146%22 height%3D%22112%22%3E%3C%2Frect%3E        %3Cfilter x%3D%22-5.1%25%22 y%3D%22-6.7%25%22 width%3D%22110.3%25%22 height%3D%22113.4%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-2%22%3E            %3CfeOffset dx%3D%220%22 dy%3D%220%22 in%3D%22SourceAlpha%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeMorphology radius%3D%221%22 operator%3D%22erode%22 in%3D%22SourceAlpha%22 result%3D%22shadowInner%22%3E%3C%2FfeMorphology%3E            %3CfeOffset dx%3D%220%22 dy%3D%220%22 in%3D%22shadowInner%22 result%3D%22shadowInner%22%3E%3C%2FfeOffset%3E            %3CfeComposite in%3D%22shadowOffsetOuter1%22 in2%3D%22shadowInner%22 operator%3D%22out%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeComposite%3E            %3CfeGaussianBlur stdDeviation%3D%222.5%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeColorMatrix values%3D%220 0 0 0 0   0 0 0 0 0.439215686   0 0 0 0 0.878431373  0 0 0 0.1 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22%3E%3C%2FfeColorMatrix%3E        %3C%2Ffilter%3E    %3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Live%22 transform%3D%22translate(-538.000000%2C -274.000000)%22%3E            %3Cg id%3D%22Rectangle-Copy-10%22%3E                %3Cuse fill%3D%22black%22 fill-opacity%3D%221%22 filter%3D%22url(%23filter-2)%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                %3Crect stroke%3D%22%230070E0%22 stroke-width%3D%221%22 x%3D%22480.5%22 y%3D%22257.5%22 width%3D%22145%22 height%3D%22111%22%3E%3C%2Frect%3E            %3C%2Fg%3E            %3Cg id%3D%22united-kingdom%22 transform%3D%22translate(538.000000%2C 274.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%230070E0%22%3E                %3Cpath d%3D%22M4.83336842%2C5.07968421 C4.89763158%2C5.12252632 4.95021053%2C5.14394737 5.01252632%2C5.18678947 C5.069%2C5.27052632 5.07873684%2C5.364 5.07289474%2C5.45552632 C5.07289474%2C5.46136842 5.07678947%2C5.47110526 5.07678947%2C5.47694737 C5.04952632%2C5.77684211 4.81%2C6.10010526 5.04757895%2C6.28510526 C6.36594737%2C7.31915789 7.82257895%2C8.08447368 6.28415789%2C10.2071053 C5.61426316%2C11.1321053 7.49736842%2C10.5926842 7.60057895%2C10.9276316 C7.548%2C12.4991579 5.33968421%2C11.8721053 5.83821053%2C13.1690526 C6.34452632%2C14.4874211 6.97547368%2C13.0405263 7.56552632%2C12.8535789 C7.61421053%2C12.8399474 7.85568421%2C13.134 7.83815789%2C13.2566842 C7.38636842%2C16.2166842 9.38047368%2C14.0005789 10.3249474%2C14.4231579 C8.72226316%2C16.7483158 9.52652632%2C17.3831579 12.0892632%2C17.0462632 C14.7961053%2C16.6898947 15.0103158%2C19.4356842 15.3764211%2C20.8066316 C15.9450526%2C22.9467895 13.875%2C22.6936316 12.4105789%2C22.5047368 C11.9159474%2C22.4424211 11.0591053%2C22.5436842 11.3200526%2C22.902 C11.8049474%2C23.5660526 10.1360526%2C24.4326316 11.6102105%2C24.7364211 C13.1681053%2C25.0596842 12.6929474%2C25.8600526 12.0055263%2C26.6058947 C10.7864737%2C27.934 11.0045789%2C29.081 12.6384211%2C29.6710526 C13.1817368%2C29.8696842 13.7075263%2C30.1072632 14.9635789%2C30.6291579 C10.9072105%2C30.4577895 10.4748947%2C34.0837895 7.67068421%2C35.1022632 C8.88194737%2C35.5891053 9.56352632%2C35.223 10.3074211%2C35.112 C12.9246842%2C34.7322632 15.1407895%2C33.1295789 17.9644737%2C33.1918947 C21.0296316%2C33.2542105 24.1785263%2C32.9387368 27.1677368%2C32.0098421 C27.7538947%2C31.8287368 28.601%2C31.4606842 28.5932105%2C30.6700526 C28.5834737%2C29.7197368 27.1404737%2C30.6272105 26.9204211%2C29.6671579 C27.1521579%2C29.3906316 27.306%2C29.1238421 27.5396842%2C28.9641579 C28.7334211%2C28.1384737 29.8492632%2C27.1433684 29.5045789%2C25.5796316 C29.1462632%2C23.9399474 27.6253684%2C23.9555263 26.3401053%2C24.0762632 C25.4482105%2C24.1522105 25.5689474%2C23.8153158 25.4540526%2C23.1687895 C24.7276842%2C19.0364737 20.3402632%2C17.1572632 19.2263684%2C13.2099474 C19.1153684%2C12.8146316 18.5506316%2C12.4251579 18.1124737%2C12.2693684 C16.3715263%2C11.6501053 16.3481579%2C10.7426316 17.4094737%2C9.41452632 C17.9566842%2C8.72515789 18.241%2C7.83521053 18.7395263%2C7.09910526 C19.7521579%2C5.61326316 19.4405789%2C4.94531579 17.6042105%2C4.99984211 C16.1748421%2C5.04268421 14.7454737%2C5.00957895 13.0902105%2C5.00957895 C13.4660526%2C3.51205263 14.5078947%2C3.21215789 15.1524737%2C2.53642105 C15.7074737%2C1.96194737 16.1164211%2C0.768210526 14.8350526%2C0.968789474 C12.6442632%2C1.31736842 9.70957895%2C0.376789474 8.65605263%2C3.47115789 C8.56842105%2C3.72236842 8.47884211%2C3.958 8.38536842%2C4.17610526 C7.70963158%2C5.68921053 6.74373684%2C6.27147368 5.01642105%2C5.18678947 L5.01642105%2C5.18678947 L5.01642105%2C5.18678947 L5.01642105%2C5.18678947 C4.97942105%2C5.13031579 4.97747368%2C5.07773684 4.90931579%2C5.02905263 C4.89373684%2C5.03489474 4.87621053%2C5.03878947 4.86063158%2C5.04463158 C4.85478947%2C5.05826316 4.84505263%2C5.06994737 4.83921053%2C5.07968421 L4.83336842%2C5.07968421 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M0.938631579%2C18.2341579 C0.895789474%2C18.8281053 1.34368421%2C19.2409474 1.73705263%2C19.3052105 C3.44878947%2C19.5836842 5.18389474%2C19.8816316 6.90536842%2C19.8602105 C7.74078947%2C19.8563158 8.51778947%2C19.1299474 8.58205263%2C17.8446842 C7.82647368%2C16.8963158 7.73494737%2C15.1144737 5.82457895%2C15.0093158 C4.34847368%2C14.9216842 1.02431579%2C17.1436316 0.938631579%2C18.2341579 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M6.44384211%2C1.56273684 C4.60357895%2C2.05347368 3.54226316%2C3.03105263 3.67273684%2C5.00763158 C2.24726316%2C5.14784211 2.94831579%2C5.79631579 3.27352632%2C6.30457895 C3.42931579%2C5.95015789 3.774%2C5.63078947 4.02131579%2C5.26078947 C4.29978947%2C5.18873684 4.58021053%2C5.11278947 4.85868421%2C5.04268421 C5.36305263%2C3.93073684 6.96963158%2C3.34068421 6.44384211%2C1.56273684 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M3.20731579%2C6.85373684 C3.50331579%2C6.75052632 3.42347368%2C6.54410526 3.27157895%2C6.30457895 C3.19563158%2C6.47205263 3.15084211%2C6.64731579 3.20731579%2C6.85373684 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\ninput[type=radio]:checked + label > #na-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2248px%22 height%3D%2237px%22 viewBox%3D%220 0 48 37%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Enorth america%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Cpolygon id%3D%22path-1%22 points%3D%2224.1739044 11.8928571 0.142994844 11.8928571 0.142994844 0.140716945 24.1739044 0.140716945 24.1739044 11.8928571%22%3E%3C%2Fpolygon%3E        %3Cpolygon id%3D%22path-3%22 points%3D%220.0679591837 0.0488928571 35.2750464 0.0488928571 35.2750464 27.3571015 0.0679591837 27.3571015%22%3E%3C%2Fpolygon%3E    %3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Lost%22 transform%3D%22translate(-691.000000%2C -272.000000)%22%3E            %3Crect id%3D%22Rectangle-Copy-15%22 stroke%3D%22%23C4CDD5%22 x%3D%22642.5%22 y%3D%22256.5%22 width%3D%22145%22 height%3D%22111%22%3E%3C%2Frect%3E            %3Cg id%3D%22north-america%22 transform%3D%22translate(691.000000%2C 272.000000)%22%3E                %3Cg id%3D%22Group-3%22 transform%3D%22translate(17.178571%2C 25.058250)%22%3E                    %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E                        %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                    %3C%2Fmask%3E                    %3Cg id%3D%22Clip-2%22%3E%3C%2Fg%3E                    %3Cpath d%3D%22M22.7033699%2C1.57087653 C21.222426%2C2.37770306 19.6848495%2C3.09108571 17.8301301%2C4.00381531 C18.051375%2C1.95692245 16.610074%2C1.7160449 15.2741097%2C1.14027959 C10.6812015%2C-0.859608163 5.94350255%2C0.822947959 1.29396173%2C0.456345918 C0.907915816%2C0.42935102 0.639665816%2C0.667963265 0.457686224%2C1.09100918 C-0.600022959%2C3.60021327 1.12934949%2C7.55845816 3.84016582%2C8.52026939 C6.25082908%2C9.37391224 9.12418112%2C8.96068265 10.9987219%2C11.2484531 C11.2667832%2C11.575601 11.5742985%2C11.238448 11.9114515%2C11.007198 C14.6887168%2C9.08602959 16.5239923%2C9.32709592 18.4842372%2C11.8929327 C19.5126862%2C10.6996827 17.4759872%2C9.4698102 18.8385689%2C8.56708571 C21.0108087%2C7.11559082 21.3774107%2C4.15615714 23.7119974%2C2.86965204 C24.4425587%2C2.45623367 24.1718546%2C1.89783571 23.817523%2C1.41815714 C23.3748444%2C0.813131633 23.0967781%2C1.35925918 22.7033699%2C1.57087653%22 id%3D%22Fill-1%22 fill%3D%22%230070E0%22 mask%3D%22url(%23mask-2)%22%3E%3C%2Fpath%3E                %3C%2Fg%3E                %3Cpath d%3D%22M6.13573265%2C20.6320117 C7.61988571%2C19.2065679 8.96170204%2C19.4566954 10.5092837%2C19.4544301 C11.7735133%2C20.2518179 13.0194316%2C21.1082923 13.8853449%2C22.3521342 C14.3348194%2C23.0137923 14.8654673%2C22.916573 15.313998%2C22.5569556 C15.8873092%2C22.0963434 15.2101714%2C21.8148791 15.0317786%2C21.4380832 C14.2326918%2C19.7056903 12.4293194%2C19.5414556 11.0297378%2C18.7516189 C11.0431408%2C17.3003128 11.04635%2C15.8586342 11.0693806%2C14.4171444 C11.0818398%2C13.6375015 11.172452%2C12.7360985 10.1666561%2C12.5477005 C8.19451837%2C12.1792107 6.15725306%2C11.570976 4.21305408%2C11.7516342 C2.75948265%2C11.8811342 0.31465102%2C11.9970423 0.983293878%2C14.8124403 C-1.49853776%2C15.5430015 1.59643673%2C16.6305372 0.813773469%2C17.5702617 C0.362411224%2C18.0993995 -0.419308163%2C18.9898536 1.07145204%2C19.4563179 C2.77269694%2C20.0026342 4.56398776%2C22.1544862 6.13573265%2C20.6320117%22 id%3D%22Fill-4%22 fill%3D%22%230070E0%22%3E%3C%2Fpath%3E                %3Cg id%3D%22Group-8%22 transform%3D%22translate(12.081633%2C 0.139883)%22%3E                    %3Cmask id%3D%22mask-4%22 fill%3D%22white%22%3E                        %3Cuse xlink%3Ahref%3D%22%23path-3%22%3E%3C%2Fuse%3E                    %3C%2Fmask%3E                    %3Cg id%3D%22Clip-7%22%3E%3C%2Fg%3E                    %3Cpath d%3D%22M23.4308163%2C14.3976628 C22.938301%2C14.0446526 23.8555612%2C12.2512852 24.2597296%2C12.5910811 C24.7843367%2C13.0139383 25.3848316%2C13.1215403 25.9738112%2C13.5897036 C24.9315816%2C13.4179179 24.5219388%2C15.1659791 23.4308163%2C14.3976628 M23.5442704%2C19.953326 C22.4793878%2C19.4870505 21.352398%2C19.1321526 20.3613265%2C18.5544995 C19.7478061%2C18.195826 18.3508673%2C17.9353158 19.1040816%2C16.8441934 C19.5930102%2C16.1494995 20.2291837%2C15.0451628 21.752602%2C15.7323056 C23.3817347%2C16.4760811 25.0108673%2C16.9253668 24.9751888%2C19.2775097 C24.8145408%2C19.8117444 24.4485051%2C20.3497546 23.5442704%2C19.953326 M35.2670408%2C23.5891423 C34.878352%2C21.7240403 34.0022449%2C20.2062852 32.575102%2C18.8771168 C31.2253571%2C17.6125097 30.4778061%2C15.975826 31.5651531%2C14.0748566 C31.8294388%2C13.6123566 32.0333163%2C13.0781219 31.6180102%2C12.6269485 C29.6171786%2C10.4843464 27.4347449%2C8.57016276 24.5900867%2C7.79807092 C25.7791837%2C5.49123418 27.6556122%2C3.81868316 30.0228571%2C2.65393827 C30.7177398%2C2.30847908 31.6859694%2C1.98944847 31.5311735%2C0.973836224 C31.3895918%2C-0.0191229592 30.262602%2C0.496234184 29.7151531%2C0.0488362245 L23.9235204%2C0.15832602 C22.7285714%2C0.549091327 21.4752908%2C0.505672959 20.255801%2C0.69822398 C17.497602%2C1.14939745 15.9911735%2C2.87858112 16.2781122%2C5.59317296 C16.4480102%2C7.20720357 15.7759694%2C7.66781582 14.3735561%2C7.89434643 C12.4403061%2C8.20205051 10.6129592%2C7.93398929 8.72520408%2C7.45449949 C6.38438776%2C6.85796888 5.2725%2C8.1812852 5.96530612%2C10.4692444 C6.37872449%2C10.8600097 7.01131122%2C10.7750607 7.45852041%2C11.0922036 C6.84877551%2C10.8014893 6.15408163%2C10.7467444 5.55188776%2C10.4352648 C3.71887755%2C10.6901117 1.87265306%2C10.8260301 0.0679591837%2C11.3036321 L0.19255102%2C17.988173 C2.13127551%2C19.1019485 3.44515306%2C20.7877138 4.70428571%2C22.6075097 C5.77841837%2C24.1724587 7.52836735%2C24.670826 9.39913265%2C24.6425097 C11.84%2C24.6198566 14.2791684%2C24.5518974 16.727398%2C24.5198056 C19.2777551%2C24.4877138 21.7639286%2C24.6387342 23.0910204%2C27.3571015 L23.5403061%2C27.3476628 C25.2638265%2C26.8153158 27.0855102%2C26.5000607 28.4845255%2C25.2069485 C28.9185204%2C24.8067444 28.5277551%2C25.4259281 28.673301%2C25.3579689 C28.7978929%2C25.8110301 29.0865306%2C26.1829179 29.5075%2C26.3075097 C31.5179592%2C26.9266934 32.6543878%2C24.5594485 34.6027398%2C24.7671015 C35.2162602%2C24.8369485 35.3066837%2C24.1347036 35.2670408%2C23.5891423%22 id%3D%22Fill-6%22 fill%3D%22%230070E0%22 mask%3D%22url(%23mask-4)%22%3E%3C%2Fpath%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\ninput[type=radio]:checked + label > #au-icon > img {\n  content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2241px%22 height%3D%2233px%22 viewBox%3D%220 0 41 33%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 47.1 (45422) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eaustralia copy 2%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22KM%26amp%3BT-%E2%80%93-Knowledge-Base%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Edit-Proposals-%E2%80%93-Live-Copy%22 transform%3D%22translate(-741.000000%2C -281.000000)%22%3E            %3Crect id%3D%22Rectangle-Copy-16%22 stroke%3D%22%230070E0%22 x%3D%22713.5%22 y%3D%22257.5%22 width%3D%22191%22 height%3D%2284%22%3E%3C%2Frect%3E            %3Cg id%3D%22australia%22 transform%3D%22translate(741.000000%2C 281.000000)%22 fill-rule%3D%22nonzero%22 fill%3D%22%230070E0%22%3E                %3Cpath d%3D%22M34.3339457%2C9.06236208 C33.9087742%2C5.81310668 31.4200545%2C3.564468 31.0058788%2C0 C29.5342721%2C1.99756818 29.3766654%2C3.79904481 29.2263892%2C5.62251302 C29.1402554%2C6.67261079 28.6087909%2C8.25600428 27.7987658%2C8.01226431 C26.2721801%2C7.55410647 24.8720462%2C6.41970766 23.6368495%2C5.32196147 C22.7975022%2C4.57791314 23.4334269%2C3.62494483 24.0583558%2C2.87539861 C24.6283056%2C2.19915763 24.303929%2C0.890658841 23.9392345%2C1.11973776 C22.0442889%2C2.29262183 20.1365148%2C-0.3097147 18.2415692%2C1.47160298 C16.7241466%2C2.89739018 15.6538872%2C5.25048885 12.4742638%2C4.20955424 C11.6092596%2C3.92732901 8.95560271%2C6.50034344 8.50477426%2C8.14421377 C7.85418849%2C10.5156387 6.37158599%2C11.1937124 4.57010482%2C11.9102712 C-0.74820478%2C14.0177973 -0.969953734%2C16.4570296 1.58474082%2C21.3538206 C2.56336843%2C23.221272 3.86270734%2C24.9805981 3.41920943%2C27.2603915 C3.09116759%2C28.9409145 4.8083475%2C29.2103113 5.25184541%2C28.9189229 C7.31356088%2C27.5426167 10.011201%2C27.7295451 11.8933182%2C26.1040011 C15.3313433%2C23.131473 19.2275274%2C23.3898741 21.9123391%2C26.9158568 C22.4547993%2C27.6269178 22.7443558%2C27.8138462 23.2446654%2C26.9946599 C23.3802805%2C27.1614294 23.5158955%2C27.3336968 23.6551759%2C27.5004662 C24.6796194%2C28.4992503 25.6857365%2C29.345926 26.3491508%2C30.8211942 C27.3955859%2C33.1706276 33.9894101%2C33.6471118 35.3400629%2C31.3599879 C36.6522302%2C29.1315081 38.2906068%2C27.1009526 39.4378369%2C24.7808413 C41.3071256%2C21.0056207 40.1745566%2C17.7563653 38.0157114%2C14.4136457 C36.8263306%2C12.5718511 34.6216696%2C11.2431934 34.3339457%2C9.06236208 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n#uk, #na, #au {\n  text-align: -webkit-center;\n  display: -webkit-box;\n}\n\n#uk-icon, #na-icon, #au-icon {\n  height: 70%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.mat-form-field {\n  display: block;\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 1px solid #C4CDD5;\n  border-radius: 3px;\n}\n\n/deep/ .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n/deep/ .mat-form-field-infix {\n  border-top: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n  padding-left: 20px;\n  line-height: 55px;\n}\n\n/deep/ .mat-input-underline {\n  color: #fff;\n  background-color: white;\n  bottom: 0;\n}\n\n/deep/ .mat-form-field-suffix .mat-icon-button {\n  margin-right: 10px;\n}\n\n#proposal-save-btn {\n  height: 41px;\n  margin-top: 40px;\n  /*width: 221px;*/\n  background-color: #0070E0;\n}\n\n#proposal-save-btn:disabled {\n  height: 41px;\n  margin-top: 40px;\n  color: #FFFFFF;\n  background-color: #C4CDD1;\n}\n\n.error {\n  color: #FF5346;\n  font-size: 14px;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"proposalEditForm\">\n  <h1>{{title}}</h1>\n\n  <div class=\"grid-container\" uk-grid>\n\n    <!--------------------------------------------------------------->\n    <!------------------------- SECTION ONE ------------------------->\n    <!--------------------------------------------------------------->\n    <div class=\"section-one\">\n      <!------------------------- PROPOSAL EDIT FORM ------------------------->\n      <form (ngSubmit)=\"save()\" [formGroup]=\"proposalEditForm\" novalidate>\n        <!----- SELECT STATUS ------>\n        <div class=\"uk-margin\">\n          <select class=\"uk-select\" id=\"proposal-status\" formControlName=\"proposalStatus\" [ngClass]=\"{'live': proposalEditForm.controls['proposalStatus'].value === 'live', 'lost': proposalEditForm.controls['proposalStatus'].value === 'lost', 'won': proposalEditForm.controls['proposalStatus'].value === 'won'}\">\n            <option value=\"\" disabled selected>Change Status</option>\n            <option value=\"live\">Proposal is Live</option>\n            <option value=\"lost\">Proposal is Lost</option>\n            <option VALUE=\"won\">Proposal is Won</option>\n          </select>\n        </div>\n\n        <!----- SELECT REGION ------>\n        <div id=\"select-region\">\n          <input type='radio' value='UK' formControlName=\"proposalRegion\" id=\"region-title-uk\"/><label\n          for=\"region-title-uk\"><span id=\"uk-icon\"><img src=\"assets/images/region-icons/united-kingdom.svg\"></span><span\n          id=\"uk\">United Kingdom</span></label>\n          <input type='radio' value='NA' formControlName=\"proposalRegion\" id=\"region-title-na\"/><label\n          for=\"region-title-na\"><span id=\"na-icon\"><img src=\"assets/images/region-icons/north-america.svg\"></span><span\n          id=\"na\">North America</span></label>\n          <input type='radio' value='AU' formControlName=\"proposalRegion\" id=\"region-title-au\"/><label\n          for=\"region-title-au\"><span id=\"au-icon\"><img src=\"assets/images/region-icons/australia.svg\"></span><span\n          id=\"au\">Asia Pacific</span></label>\n        </div>\n\n        <!----- ENTER TITLE------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('proposalTitle').touched && proposalEditForm.get('proposalTitle').hasError('required')}\">{{proposalEditForm.get('proposalTitle').touched && proposalEditForm.get('proposalTitle').hasError('required') ? \"Title is Required\" : \"Proposal Title\"}}</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Proposal Title\" id=\"title\" formControlName=\"proposalTitle\">\n          </div>\n        </div>\n\n        <!----- SELECT OWNER ------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"owner\" [ngClass]=\"{'error': proposalEditForm.get('owner').touched && proposalEditForm.get('owner').hasError('required')}\">{{proposalEditForm.get('owner').touched && proposalEditForm.get('owner').hasError('required') ? \"Proposal Owner is Required\" : \"Proposal Owner\"}}</label>\n          <div class=\"uk-form-controls\">\n            <select class=\"uk-select\" formControlName=\"owner\" id=\"owner\" (change)=\"setOwnerEmail()\">\n              <option value=\"\" disabled selected>Select User</option>\n              <option *ngFor=\"let user of users\" value=\"{{user.firstName}} {{user.lastName}}\">{{user.firstName}}\n                {{user.lastName}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <!------------------------- CLIENT INFORMATION ------------------------->\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Client Information</legend>\n\n          <div class=\"uk-grid-small\" uk-grid>\n            <!----- SELECT SECTOR ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('sector').touched && proposalEditForm.get('sector').hasError('required')}\">{{proposalEditForm.get('sector').touched && proposalEditForm.get('sector').hasError('required') ? \"Sector is Required\" : \"Sector\"}}</label>\n              <div class=\"uk-form-controls\">\n                <select class=\"uk-select\" formControlName=\"sector\" id=\"sector\">\n                  <option value=\"\" disabled selected>Select Sector</option>\n                  <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n                </select>\n              </div>\n            </div>\n\n            <!----- SELECT CLIENT ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('client').touched && proposalEditForm.get('client').hasError('required')}\">{{proposalEditForm.get('client').touched && proposalEditForm.get('client').hasError('required') ? \"Client is Required\" : \"Client\"}}</label>\n              <div class=\"uk-form-controls\">\n                <select class=\"uk-select\" formControlName=\"client\" id=\"client\" *ngIf=\"!newClient\">\n                  <option value=\"\" disabled selected>Select Sector</option>\n                  <optgroup *ngFor=\"let sector of sectors\" label=\"{{sector.sectorName}}\">\n                    <option *ngFor=\"let client of sector.sectorClients\" value=\"{{client}}\">{{client}}</option>\n                  </optgroup>\n                </select>\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Client Name\" formControlName=\"client\"\n                       *ngIf=\"newClient\">\n              </div>\n            </div>\n            <div class=\"new-client-toggle\" *ngIf=\"!newClient\"><a (click)=\"addNewClient()\">Add new client</a></div>\n            <div class=\"new-client-toggle\" *ngIf=\"newClient\"><a (click)=\"addNewClient()\">Choose from existing clients</a></div>\n          </div>\n        </fieldset>\n\n        <!----- ENTER CLIENT CONTACT ------>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('clientContact').touched && proposalEditForm.get('clientContact').hasError('required')}\">{{proposalEditForm.get('clientContact').touched && proposalEditForm.get('clientContact').hasError('required') ? \"Client Contact is Required\" : \"Client Contact\"}}</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Client Contact\" formControlName=\"clientContact\">\n          </div>\n        </div>\n\n        <!------------------------- PROPOSAL INFORMATION ------------------------->\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Proposal Information</legend>\n          <div class=\"uk-grid-small\" uk-grid>\n            <!----- SELECT ISSUE DATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\">Issue Date</label>\n              <div class=\"uk-form-controls\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"issueDate\" formControlName=\"proposalIssueDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"issueDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #issueDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!----- SELECT RESPONSE DATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\">Expected Response Date</label>\n              <div class=\"uk-form-controls\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [matDatepicker]=\"responseDate\" formControlName=\"responseDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"responseDate\"></mat-datepicker-toggle>\n                  <mat-datepicker #responseDate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            <!----- ENTER DAYS PROPOSED ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('totalNumberOfDays').touched && proposalEditForm.get('totalNumberOfDays').hasError('required')}\">{{proposalEditForm.get('totalNumberOfDays').touched && proposalEditForm.get('totalNumberOfDays').hasError('required') ? \"Days Proposed is Required\" : \"Days Proposed\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Total No. of Days\"\n                       formControlName=\"totalNumberOfDays\">\n              </div>\n            </div>\n            <!----- ENTER DAILY RATE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('dailyRate').touched && proposalEditForm.get('dailyRate').hasError('required')}\">{{proposalEditForm.get('dailyRate').touched && proposalEditForm.get('dailyRate').hasError('required') ? \"Daily Rate is Required\" : \"Daily Rate\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Daily Rate\" formControlName=\"dailyRate\">\n              </div>\n            </div>\n            <!----- ENTER EXPENSES ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('expenses').touched && proposalEditForm.get('expenses').hasError('required')}\">{{proposalEditForm.get('expenses').touched && proposalEditForm.get('expenses').hasError('required') ? \"Expenses are Required\" : \"Expenses\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Expenses\" (change)=\"calculateTotal()\"\n                       formControlName=\"expenses\">\n              </div>\n            </div>\n            <!----- ENTER PROJECT VALUE ------>\n            <div class=\"uk-width-1-2@s\">\n              <label class=\"uk-form-label\" for=\"title\" [ngClass]=\"{'error': proposalEditForm.get('totalValue').touched && proposalEditForm.get('totalValue').hasError('required')}\">{{proposalEditForm.get('totalValue').touched && proposalEditForm.get('totalValue').hasError('required') ? \"Total Value is Required\" : \"Total Value\"}}</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" type=\"number\" placeholder=\"Enter Total Value\" formControlName=\"totalValue\">\n              </div>\n            </div>\n\n          </div>\n        </fieldset>\n\n        <!----- SUBMIT BUTTON ------>\n        <button class=\"uk-button uk-button-primary\" id=\"proposal-save-btn\" [disabled]=\"proposalEditForm.invalid\">{{proposalEditForm.invalid ? \"Complete All Fields To Activate Me\" : \"SAVE PROPOSAL\"}}</button>\n      </form>\n    </div>\n\n    <!--------------------------------------------------------------->\n    <!------------------------- SECTION TWO ------------------------->\n    <!--------------------------------------------------------------->\n    <div class=\"section-two\">\n      <!---------------------------- STICKY UPLOAD ---------------------------->\n      <div class=\"sticky-upload\">\n        <!----- PROPOSAL ID ------>\n        <div id=\"sec-three-heading\">Proposal ID</div>\n        <div id=\"proposal-id\"><img id=\"barcode\" src=\"assets/images/proposal-icons/barcode.svg\">\n          {{proposalEditForm.controls['proposalNo'].value}}\n        </div>\n\n        <!----- UPLOAD PROPOSAL FILE ------>\n        <p id=\"upload-proposal-file-heading\">Upload proposal document</p>\n        <p>Select a file by clicking in the box below to upload the Proposal to the KB.</p>\n        <div class=\"drop-zone\">\n          <div *ngIf=\"proposalShareLink\" id=\"file-upload-spinner\" uk-spinner></div>\n          <div *ngIf=\"!proposalShareLink\">\n            <span uk-icon=\"icon: cloud-upload; ratio: 2\"></span>\n            <p>Click here to select file</p>\n            <input id=\"file-field\" name=\"file-field\" (change)=\"uploadFile($event)\" type=\"file\">\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"center\">\n        <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n                   (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n          <span>optional content (don't set headertext then)</span>\n        </file-drop>\n        <div class=\"upload-table\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Name</th>\n            </tr>\n            </thead>\n            <tbody class=\"upload-name-style\">\n            <tr *ngFor=\"let item of files; let i=index\">\n              <td><strong>{{ item.relativePath }}</strong></td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      </div>-->\n      <!--<input id=\"file-field\" name=\"file-field\" (change)=\"uploadFile($event)\" type=\"file\">\n      {{percent}}\n      <progress id=\"js-progressbar\" class=\"uk-progress\" value=\"{{percent}}\" max=\"100\"></progress>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProposalEditComponent = (function () {
    function ProposalEditComponent(_fb, _route, _router, _proposalService, _notificationService) {
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._proposalService = _proposalService;
        this._notificationService = _notificationService;
        this.title = "Edit Proposal";
        this.files = [];
    }
    ProposalEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the % status the proposal file being uploaded
        this.subscription = this._proposalService.getMessage().subscribe(function (message) {
            _this.percent = message;
        });
        // Setting the proposal form using Form Builder
        this.proposalEditForm = this._fb.group({
            proposalNo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalStatus: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalRegion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalTitle: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            sector: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            client: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            owner: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            ownerEmail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            clientContact: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            proposalIssueDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            responseDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            totalNumberOfDays: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            dailyRate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            expenses: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            totalValue: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        // Get proposal from proposal edit route resolver service
        this._route.data.subscribe(function (data) {
            _this.onProposalRetrieved(data['proposal']);
        });
        // Get all sectors from sector resolver service
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get all users from user list resolver service
        this._route.data.subscribe(function (data) {
            _this.users = data['users'];
        });
    };
    // Handling retrieved proposal from the server
    ProposalEditComponent.prototype.onProposalRetrieved = function (proposal) {
        if (this.proposalEditForm) {
            this.proposalEditForm.reset();
        }
        this.proposal = proposal;
        this.proposalEditForm.patchValue({
            proposalNo: this.proposal.proposalNo,
            proposalStatus: this.proposal.proposalStatus,
            proposalRegion: this.proposal.proposalRegion,
            proposalTitle: this.proposal.proposalTitle,
            sector: this.proposal.sector,
            client: this.proposal.client,
            owner: this.proposal.owner,
            ownerEmail: this.proposal.ownerEmail,
            clientContact: this.proposal.clientContact,
            proposalIssueDate: this.proposal.proposalIssueDate,
            responseDate: this.proposal.responseDate,
            totalNumberOfDays: this.proposal.totalNumberOfDays,
            dailyRate: this.proposal.dailyRate,
            expenses: this.proposal.expenses,
            totalValue: this.proposal.totalValue
        });
    };
    ProposalEditComponent.prototype.capitalizeFirstLetter = function (data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }; // TODO: Check significance
    ProposalEditComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.proposalShareLink = true;
        __WEBPACK_IMPORTED_MODULE_5_uikit___default.a.notification({
            message: "<span id='notification-icon' style='color: #0070E0;' uk-icon='icon: bell'></span>  Your file is being prepared for uploading",
            status: 'success',
            pos: 'top-right',
            timeout: 8000
        });
        var files = event.target.files[0];
        var id = this._route.snapshot.paramMap.get('id');
        this._proposalService.upload(files, id)
            .subscribe(function (data) {
            if (data) {
                _this.proposalShareLink = false;
                __WEBPACK_IMPORTED_MODULE_5_uikit___default.a.notification({
                    message: "<span id='notification-icon' style='color: #13CE66;' uk-icon='icon: check'></span>  Your file was successfully uploaded",
                    status: 'success',
                    pos: 'top-right',
                    timeout: 9000
                });
            }
            console.log(data);
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this.proposalShareLink = false;
                _this._notificationService.sendNotification(err.error.message || "unknown error RUN!!!"); //TODO Does not show server 500 error.
                __WEBPACK_IMPORTED_MODULE_5_uikit___default.a.notification({
                    message: err.error.message || "unknown error RUN!!!",
                    status: 'primary',
                    pos: 'top-right',
                    timeout: 5000
                });
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    // =======================================================
    // SAVE UPDATE PROPOSAL          =========================
    // =======================================================
    ProposalEditComponent.prototype.save = function () {
        var _this = this;
        this.proposalEditForm.controls['totalValue'].setValue(this.calculateTotal(this.proposalEditForm.value.totalNumberOfDays, this.proposalEditForm.value.dailyRate, this.proposalEditForm.value.expenses));
        if (this.proposalEditForm.dirty && this.proposalEditForm.touched) {
            var p = Object.assign({}, this.proposal, this.proposalEditForm.value);
            var id = this._route.snapshot.paramMap.get('id');
            this._proposalService.update(p, id)
                .subscribe(function () { return _this.onSaveComplete(); }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                    console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
                }
            });
        }
        else if (!this.proposalEditForm.dirty) {
            this.onSaveComplete();
        }
    };
    ProposalEditComponent.prototype.onSaveComplete = function () {
        this.proposalEditForm.reset();
        this._router.navigate(['/proposals']);
    };
    ProposalEditComponent.prototype.calculateTotal = function (totalNumberOfDays, dailyRate, expenses) {
        return (totalNumberOfDays * dailyRate) + expenses;
    };
    ProposalEditComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                var id = _this._route.snapshot.paramMap.get('id');
                _this._proposalService.upload(info, id)
                    .subscribe(function (data) {
                    console.log(data);
                });
            });
        }
    };
    ProposalEditComponent.prototype.fileOver = function (event) {
    };
    ProposalEditComponent.prototype.fileLeave = function (event) {
    };
    ProposalEditComponent.prototype.setOwnerEmail = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.firstName.concat(" ", user.lastName) == this.proposalEditForm.controls['owner'].value) {
                this.proposalEditForm.controls['ownerEmail'].setValue(user.email);
            }
        }
    };
    ProposalEditComponent.prototype.addNewClient = function () {
        this.newClient = !this.newClient;
    };
    ProposalEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-edit.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_proposal_service__["a" /* ProposalService */],
            __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__["a" /* NotificationsService */]])
    ], ProposalEditComponent);
    return ProposalEditComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  color: #121212;\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\nth {\n  font-size: 14px;\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 38px;\n  font-weight: normal;\n  display: inline-block;\n  width: auto;\n  line-height: 1;\n}\n\n.search-bar {\n  float: right;\n}\n\n#search-bar {\n  display: inline-block;\n}\n\n.uk-search-input {\n  border-right: none;\n}\n\n.unsuccessful-filter {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100%;\n  height: 100px;\n}\n\n#filters-btn > .uk-button-default {\n  text-transform: capitalize;\n  padding-right: 0;\n  font-size: 15px;\n  margin-top: 1px;\n}\n\n#filters-btn > .uk-button-default > span {\n  margin-right: 20px;\n  margin-left: 10px;\n}\n\n#filters-btn > .uk-button-default:focus {\n  color: #0070E0;\n  border-color: #0070e0;\n}\n\n#filters-btn {\n  margin-left: -10px;\n}\n\n#proposals {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 120px;\n}\n\n#proposal-title {\n  width: 350px;\n  cursor: help;\n}\n\n#proposal-icon {\n  padding: 0;\n  width: 35px;\n}\n\n#title {\n  font-weight: 600;\n  font-size: 15px;\n  color: #121212;\n  line-height: 20px;\n}\n\n#client {\n  display: block;\n  color: #A4ACB3;\n}\n\n#arrow_forward {\n  width: 12px;\n  color: #A4ACB3;\n}\n\n.uk-table > tbody > tr:hover {\n  background-color: #FAFCFF;\n}\n\n.uk-table > tbody > tr:hover .proposal-title > #title {\n  color: #0070e0;\n}\n\n.uk-table > tbody > tr:hover .proposal-icon-td > .proposal-icon {\n  content:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 25.97 33.97%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23d4e8f8%3B%7D.cls-2%7Bfill%3A%230470e0%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Eproposal-active%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Web%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M17%2C34H0V0H26V25H17ZM2%2C32H15V23h9V2H2Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M17.39%2C34H0V0H26V25.39ZM2%2C32H16.58L24%2C24.58V2H2Z%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2218.98%22 width%3D%2216%22 height%3D%222%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2222.98%22 width%3D%228%22 height%3D%222%22%2F%3E%3Crect class%3D%22cls-2%22 x%3D%224.98%22 y%3D%2226.98%22 width%3D%228%22 height%3D%222%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M13.49%2C5V6.79a4.2%2C4.2%2C0%2C0%2C1%2C3.33%2C5.69l1.56.93A5.92%2C5.92%2C0%2C0%2C0%2C18.91%2C11%2C6%2C6%2C0%2C0%2C0%2C13.49%2C5Z%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M12.89%2C15.18a4.22%2C4.22%2C0%2C0%2C1-.61-8.39V5a6%2C6%2C0%2C1%2C0%2C5.46%2C9.56l-1.57-.92A4.19%2C4.19%2C0%2C0%2C1%2C12.89%2C15.18Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n#proposal-status {\n}\n\n.live {\n  color: #f9a615;\n}\n\n.won {\n  color: #13CE66;\n}\n\n.lost {\n  color: #ff5346;\n}\n\n.status-circle-live {\n  display: inline-block;\n  background-color: #f9a615;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-lost {\n  display: inline-block;\n  background-color: #ff5346;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n.status-circle-won {\n  display: inline-block;\n  background-color: #13CE66;\n  border-collapse: collapse;\n  margin: 2px 6px 2px 2px;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  vertical-align: text-bottom;\n}\n\n#edit-btn {\n  height: 35px;\n  border: 1px solid #C2C7CF;\n  width: 70px;\n  line-height: 2.5;\n  text-transform: capitalize;\n  padding: 0;\n  color: #ACB6C0;\n}\n\n#proposal-owner {\n  width: 200px;\n}\n\n#proposal-action {\n  width: 10px;\n}\n\n#proposal-file {\n}\n\n#proposal-file > a > .material-icons {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.file-available {\n  color: #0070e0;\n}\n\n.file-unavailable {\n  color: #ABABAB;\n}\n\n.uk-offcanvas-bar {\n  width: 450px;\n  height: 100%;\n  color: #333333;\n  padding: 0 0 0 0;\n  background-color: #FFFFFF;\n}\n\n.uk-offcanvas-close {\n  color: #333333;\n}\n\n@media screen and (max-width: 600px) {\n  #proposals {\n    margin-left: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"proposals\">\n  <h1>{{title}}</h1>\n\n  <div class=\"search-bar\">\n  <div class=\"uk-margin\" id=\"search-bar\">\n      <div class=\"uk-search uk-search-default\">\n        <span uk-search-icon></span>\n        <input class=\"uk-search-input\" type=\"search\"  [(ngModel)]=\"_listFilter\" placeholder=\"Search by \">\n      </div>\n    </div>\n\n    <div class=\"uk-inline\" id=\"filters-btn\">\n      <button class=\"uk-button uk-button-default\" type=\"button\">Filters <span uk-icon=\"icon: settings\"></span></button>\n      <div uk-drop=\"mode: click\">\n        <div class=\"uk-card uk-card-body uk-card-default\">\n          <p id=\"filter-title\">Status</p>\n          <fieldset id=\"status\">\n          <div class=\"filter-options\" uk-grid>\n            <div class=\"option-1\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalStatus\" value=\"won\" name=\"status\"> Won</label></div>\n            <div class=\"option-2\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalStatus\" value=\"live\" name=\"status\"> Live</label></div>\n            <div class=\"option-3\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalStatus\" value=\"lost\" name=\"status\"> Lost</label></div>\n          </div>\n          </fieldset>\n\n          <fieldset id=\"region\">\n         <div class=\"filter-options\" uk-grid>\n            <div class=\"option-1\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalRegion\" value=\"UK\" name=\"region\"> UK</label></div>\n            <div class=\"option-2\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalRegion\" value=\"NA\" name=\"region\"> NA</label></div>\n            <div class=\"option-3\"><label><input class=\"uk-radio\" type=\"radio\" [(ngModel)]=\"queryParam.proposalRegion\" value=\"AU\" name=\"region\"> AU</label></div>\n          </div>\n          </fieldset>\n        </div>\n        <button (click)=\"filterProposals()\">Apply</button>\n        <button (click)=\"proposalList()\">Clear Filters</button>\n      </div>\n    </div>\n  </div>\n\n  <section *ngIf=\"!filterStatus\" class=\"unsuccessful-filter\">\n    <div>\n      {{filterMessage}}\n    </div>\n  </section>\n\n  <section *ngIf=\"filterStatus\">\n    <table class=\"uk-table uk-table-middle uk-table-divider\">\n      <thead>\n      <tr>\n        <th></th>\n        <th class=\"uk-width-small\">NAME</th>\n        <th>SECTOR</th>\n        <th>STATUS</th>\n        <th>OWNER</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let proposal of proposals | filter: _listFilter\">\n        <td class=\"proposal-icon-td\" id=\"proposal-icon\"><img class=\"proposal-icon\" src=\"assets/images/proposal-icons/proposal-normal.svg\"></td>\n        <td class=\"proposal-title\" id=\"proposal-title\" (click)=\"onSelect(proposal)\" uk-toggle=\"target: #offcanvas-slide\"><span id=\"title\">{{proposal.proposalNo}} - <span>{{(proposal.proposalTitle.length>30) ? (proposal.proposalTitle | slice:0:30)+'...':(proposal.proposalTitle) }}</span></span>\n          <span\n            id=\"client\">{{(proposal.client.length>30) ? (proposal.client | slice:0:30)+'...':(proposal.client)}} <img\n            id=\"arrow_forward\"\n            src=\"assets/images/proposal-icons/arrow_forward.svg\"><span> {{proposal.proposalRegion}}</span></span>\n        </td>\n        <td id=\"proposal-sector\"><span>{{proposal.sector}}</span></td>\n        <td id=\"proposal-status\"><span\n          [ngClass]=\"{'status-circle-live': proposal.proposalStatus === 'live', 'status-circle-won': proposal.proposalStatus === 'won', 'status-circle-lost': proposal.proposalStatus === 'lost'}\"></span><span\n          [ngClass]=\"{'live': proposal.proposalStatus === 'live', 'won': proposal.proposalStatus === 'won', 'lost': proposal.proposalStatus === 'lost'}\">{{proposal.proposalStatus}}</span>\n        </td>\n        <td id=\"proposal-owner\"><span>{{proposal.owner}}</span></td>\n        <td>\n          <div id=\"proposal-file\">\n            <a href=\"{{proposal.proposalUrls}}\" target=\"_blank\"><i class=\"material-icons\"\n                                                                   [ngClass]=\"{'file-available': proposal.proposalUrls, 'file-unavailable': proposal.proposalUrls === 'none' || !proposal.proposalUrls }\">attach_file</i></a>\n          </div>\n        </td>\n        <td id=\"proposal-action\">\n          <a class=\"uk-button uk-button-default\" id=\"edit-btn\"  [routerLink]=\"['/proposals', proposal._id]\">Edit</a>\n          <!--<button uk-icon=\"icon: more; ratio: 1\"></button>\n          <div uk-dropdown=\"mode: click\">\n            <ul class=\"uk-nav uk-dropdown-nav\"> [routerLink]=\"['/proposals', proposal._id]\"\n              <li><a (click)=\"onSelect(proposal)\" uk-toggle=\"target: #offcanvas-slide\">View</a></li>\n              <li><a [routerLink]=\"['/proposals', proposal._id]\">Edit</a></li>\n            </ul>\n          </div>-->\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </section>\n</section>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-margin-auto-vertical\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header\">\n      <h2 class=\"uk-modal-title\">Proposal Detail</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n      <proposal-detail [proposal]=\"selectedProposal\"></proposal-detail>\n    </div>\n    <div class=\"uk-modal-footer uk-text-right\">\n      <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Close</button>\n    </div>\n  </div>\n</div>\n<!--{{(proposal.proposalTitle.length>12) ? (proposal.proposalTitle | slice:0:12)+'...':(proposal.proposalTitle) }}-->\n\n\n<div id=\"offcanvas-slide\" uk-offcanvas=\"overlay: true; flip: true\">\n  <div class=\"uk-offcanvas-bar\">\n    <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n    <proposal-detail [proposal]=\"selectedProposal\"></proposal-detail>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/components/proposal-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalListComponent = (function () {
    function ProposalListComponent(_proposalService, _notificationService, _route) {
        this._proposalService = _proposalService;
        this._notificationService = _notificationService;
        this._route = _route;
        // @Input() proposals?: IProposal[];
        this.title = "Proposals";
        this.queryParam = {};
        this.filterStatus = true;
        // this.filteredProposals = this.proposals;
    }
    ProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get proposals from proposal list route resolver service
        this._route.data.subscribe(function (data) {
            _this.proposals = data['proposals'];
        });
    };
    ProposalListComponent.prototype.proposalList = function () {
        var _this = this;
        this._proposalService.getAll()
            .subscribe(function (data) {
            _this.filterStatus = true;
            _this.queryParam = {};
            _this.proposals = data;
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    ProposalListComponent.prototype.filterProposals = function () {
        var _this = this;
        this._proposalService.getFiltered(this.queryParam)
            .subscribe(function (data) {
            if (data.length === 0) {
                _this.filterStatus = false;
                _this.filterMessage = "Your criteria did not match any data.";
            }
            else if (data.length > 1) {
                _this.filterStatus = true;
                _this.proposals = data;
            }
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
                console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
            }
        });
    };
    ProposalListComponent.prototype.onSelect = function (proposal) {
        this.selectedProposal = JSON.parse(JSON.stringify(proposal));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ProposalListComponent.prototype, "proposals", void 0);
    ProposalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proposal-list',
            template: __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-list.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_proposal_service__["a" /* ProposalService */], __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__["a" /* NotificationsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProposalListComponent);
    return ProposalListComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/proposal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_proposal_list_component__ = __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_proposal_detail_component__ = __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_proposal_edit_component__ = __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_proposal_edit_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal-edit-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_services_sector_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/sector-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_proposal_add_component__ = __webpack_require__("../../../../../angular-src/src/app/proposals/components/proposal-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_guards_auth_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_file_drop__ = __webpack_require__("../../../../ngx-file-drop/ngx-file-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_proposal_list_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal-list-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_services_user_list_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user-list-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__root_pipes_search_filter_pipe__ = __webpack_require__("../../../../../angular-src/src/app/root/pipes/search-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ProposalModule = (function () {
    function ProposalModule() {
    }
    ProposalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: 'proposals',
                        component: __WEBPACK_IMPORTED_MODULE_3__components_proposal_list_component__["a" /* ProposalListComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_guards_auth_guard__["a" /* AuthGuard */]],
                        resolve: { proposals: __WEBPACK_IMPORTED_MODULE_13__services_proposal_list_resolver_service__["a" /* ProposalListResolverService */] }
                    },
                    {
                        path: 'proposals/:id',
                        component: __WEBPACK_IMPORTED_MODULE_5__components_proposal_edit_component__["a" /* ProposalEditComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_guards_auth_guard__["a" /* AuthGuard */]],
                        resolve: { proposal: __WEBPACK_IMPORTED_MODULE_7__services_proposal_edit_resolver_service__["a" /* ProposalEditResolverService */], sector: __WEBPACK_IMPORTED_MODULE_8__root_services_sector_resolver_service__["a" /* SectorResolverService */], users: __WEBPACK_IMPORTED_MODULE_14__users_services_user_list_resolver_service__["a" /* UserListResolverService */] }
                    },
                    {
                        path: 'proposals/0/new',
                        component: __WEBPACK_IMPORTED_MODULE_9__components_proposal_add_component__["a" /* ProposalAddComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_guards_auth_guard__["a" /* AuthGuard */]],
                        resolve: { sector: __WEBPACK_IMPORTED_MODULE_8__root_services_sector_resolver_service__["a" /* SectorResolverService */], users: __WEBPACK_IMPORTED_MODULE_14__users_services_user_list_resolver_service__["a" /* UserListResolverService */] }
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_file_drop__["a" /* FileDropModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_proposal_list_component__["a" /* ProposalListComponent */], __WEBPACK_IMPORTED_MODULE_4__components_proposal_detail_component__["a" /* ProposalDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__components_proposal_edit_component__["a" /* ProposalEditComponent */], __WEBPACK_IMPORTED_MODULE_9__components_proposal_add_component__["a" /* ProposalAddComponent */], __WEBPACK_IMPORTED_MODULE_15__root_pipes_search_filter_pipe__["a" /* FilterPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_proposal_edit_resolver_service__["a" /* ProposalEditResolverService */], __WEBPACK_IMPORTED_MODULE_13__services_proposal_list_resolver_service__["a" /* ProposalListResolverService */], __WEBPACK_IMPORTED_MODULE_14__users_services_user_list_resolver_service__["a" /* UserListResolverService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_proposal_list_component__["a" /* ProposalListComponent */]]
        })
    ], ProposalModule);
    return ProposalModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/services/proposal-edit-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalEditResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_spinner_service__ = __webpack_require__("../../../../../angular-src/src/app/root/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProposalEditResolverService = (function () {
    function ProposalEditResolverService(_proposalService, _spinnerService, _notificationService) {
        this._proposalService = _proposalService;
        this._spinnerService = _spinnerService;
        this._notificationService = _notificationService;
    }
    ProposalEditResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        //this._spinnerService.displayLoader(true);
        var id = route.paramMap.get('id');
        return this._proposalService.getOne(id)
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            _this._notificationService.sendNotification(err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    ProposalEditResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */], __WEBPACK_IMPORTED_MODULE_2__root_spinner_service__["a" /* SpinnerService */], __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__["a" /* NotificationsService */]])
    ], ProposalEditResolverService);
    return ProposalEditResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/services/proposal-list-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalListResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_spinner_service__ = __webpack_require__("../../../../../angular-src/src/app/root/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProposalListResolverService = (function () {
    function ProposalListResolverService(_proposalService, _spinnerService, _notificationService) {
        this._proposalService = _proposalService;
        this._spinnerService = _spinnerService;
        this._notificationService = _notificationService;
    }
    ProposalListResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        //this._spinnerService.displayLoader(true);
        return this._proposalService.getAll()
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            _this._notificationService.sendNotification(err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    ProposalListResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */], __WEBPACK_IMPORTED_MODULE_2__root_spinner_service__["a" /* SpinnerService */], __WEBPACK_IMPORTED_MODULE_4__root_services_notifications_service__["a" /* NotificationsService */]])
    ], ProposalListResolverService);
    return ProposalListResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/proposals/services/proposal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProposalService = (function () {
    function ProposalService(_http) {
        this._http = _http;
        // Used to send the proposal file upload status updates
        this.subject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["a" /* Subject */]();
    }
    // =======================================================
    // GET ALL PROPOSALS             =========================
    // =======================================================
    ProposalService.prototype.getAll = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/proposals")
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    // =======================================================
    // GET FILTERED PROPOSALS        =========================
    // =======================================================
    ProposalService.prototype.getFiltered = function (filterOptions) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/proposals", { params: filterOptions })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    // =======================================================
    // GET A SINGLE PROPOSAL         =========================
    // =======================================================
    ProposalService.prototype.getOne = function (id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/proposals/" + id)
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    // =======================================================
    // CREATE NEW PROPOSAL           =========================
    // =======================================================
    ProposalService.prototype.create = function (body) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.post(BASE_URL + "/api/proposals", body)
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    // =======================================================
    // UPDATE PROPOSAL               =========================
    // =======================================================
    ProposalService.prototype.update = function (body, id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.put(BASE_URL + "/api/proposals/" + id, body)
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    // =======================================================
    // UPLOAD PROPOSAL File          =========================
    // =======================================================
    ProposalService.prototype.upload = function (file, id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        var formData = new FormData();
        formData.append('proposal', file, file.name);
        return this._http.post(BASE_URL + "/api/proposals/" + id, formData, { responseType: 'text' })
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    }; //TODO: Create a separate "upload" component?
    // Used to send the % of file uploaded status
    ProposalService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    // Used to receive the % of uploaded status
    ProposalService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    ProposalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProposalService);
    return ProposalService;
}());

// Example Code for tracking upload process.
//let req = new HttpRequest('POST', `${BASE_URL}/api/proposals/${id}`, formData, { responseType: 'text' });
//this._http.request(req).subscribe(data => {
//console.log(data);
//return data;
// Via this API, you get access to the raw event stream.
// Look for upload progress events.
/*if (event.type === HttpEventType.UploadProgress) {
  // This is an upload progress event. Compute and show the % done:
  const percentDone = Math.round(100 * event.loaded / event.total);
  console.log(`File is ${percentDone}% uploaded.`);
  this.sendMessage(percentDone);
} else if (event instanceof HttpResponse) {
  console.log('File is completely uploaded!' + HttpResponse);
}*/
/* }, data => {

 });*/


/***/ }),

/***/ "../../../../../angular-src/src/app/root-navigation/root-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box\n}\n\na {\n  font-size: 17px;\n  color: #121212;\n}\n\n#nav {\n  width: 240px;\n  background-color: #f7f9fa;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n}\n\n.uk-nav > li > a {\n  padding-bottom: 0;\n  padding-top: 0;\n  padding-left: 40px;\n}\n\n.uk-nav > li > a:active {\n  padding-bottom: 0;\n  padding-top: 0;\n  padding-left: 36px;\n}\n\n#nav > ul > li {\n  padding-bottom: 18px;\n}\n\n#nav > ul > #header-logo {\n  width: 94px;\n  height: 72px;\n  margin-top: 40px;\n  margin-bottom: 66px;\n  margin-left: 40px;\n}\n\n#nav > ul > li > a:hover {\n  color: #0070e0;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n#previous-page-btn {\n  color: #121212;\n  cursor: pointer;\n}\n\n/*#nav > ul > li > a:active {\n  background-color: #0070e0;\n  color: #ffffff;\n}*/\n\n.active {\n  color: #0070E0;\n  border-left: 5px solid #0070E0;\n  padding-left: 36px;\n}\n\n.active a {\n  padding-left: 36px;\n}\n\n#header {\n  margin-left: 240px;\n  padding: 20px 120px 20px 20px;\n  position: relative;\n  height: 70px;\n  -webkit-box-shadow: 0 1px 10px 0 rgba(196, 205, 213, 0.55);\n          box-shadow: 0 1px 10px 0 rgba(196, 205, 213, 0.55);\n}\n\n#header > #add-btn {\n  float: right;\n  color: #ffffff;\n  line-height: 30px;\n  margin-right: 10px;\n  margin-top: -0.1%;\n  cursor: copy;\n}\n\n#header > #add-btn:focus {\n  outline: none;\n}\n\n#header > #add-btn > img {\n  width: 35px;\n}\n\n#user-profile-img {\n  float: right;\n  line-height: 30px;\n  margin-right: 10px;\n  margin-top: -0.5%;\n}\n\n#user-profile-img > img {\n  width: 40px;\n  border-radius: 100%;\n}\n\n#user-profile-btn {\n  float: right;\n  text-decoration: underline;\n  color: #121212;\n  font-size: 16px;\n  line-height: 25px;\n  text-transform: capitalize;\n}\n\n#user-profile-btn > a > span {\n  margin-left: 3px;\n}\n\n#user-profile-btn > a > .uk-icon {\n  width: 15px;\n}\n\n.uk-offcanvas-bar {\n  background-color: #0070e0;\n}\n\n@media screen and (max-width: 600px) {\n  #nav {\n    display: none;\n    width: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/root-navigation/root-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" *ngIf=\"isLoggedIn\">\n  <span id=\"previous-page-btn\" uk-icon=\"icon: arrow-left; ratio: 2\" (click)=\"goBack()\"></span>\n  <div id=\"user-profile-btn\"><a [routerLink]=\"['/users', _id]\">{{name}}<span uk-icon=\"icon: chevron-down\"></span></a></div>\n  <div id=\"user-profile-img\"><img src=\"{{profileImage}}\" onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\"></div>\n  <div id=\"add-btn\"><img src=\"assets/images/proposal-icons/add_circle.svg\" [routerLink]=\"['/proposals/0/new']\"></div>\n</div>\n\n<!--data:image/png;base64, {{name}}-->\n<div class=\"uk-offcanvas-content\" *ngIf=\"isLoggedIn\">\n  <section id=\"nav\">\n    <ul uk-nav>\n      <img id=\"header-logo\" src=\"/assets/images/Logo.svg\">\n      <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a></li>\n      <li><a [routerLink]=\"['/proposals']\" routerLinkActive=\"active\">Proposals</a></li>\n      <li><a [routerLink]=\"['/bios']\" routerLinkActive=\"active\">Bios</a></li>\n      <li><a href=\"#\">Case Studies</a></li>\n    </ul>\n  </section>\n  <div id=\"offcanvas-flip\" uk-offcanvas=\"flip: true; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n      <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n      <ul uk-nav>\n        <li><a [routerLink]=\"['/proposals/0/new']\"><span class=\"uk-margin-small-right\"></span>Proposal</a></li>\n        <li><a [routerLink]=\"['/bios/0/new']\"><span class=\"uk-margin-small-right\"></span>Bio</a></li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/root-navigation/root-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootNavComponent = (function () {
    function RootNavComponent(_authService, _userService, _location) {
        this._authService = _authService;
        this._userService = _userService;
        this._location = _location;
        this.getUserInfo();
    }
    RootNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription1 = this._authService.getMessage().subscribe(function (message) {
            _this.isLoggedIn = message;
        });
        this.subscription2 = this._userService.getMessage().subscribe(function (data) {
            _this.profileImage = data;
        });
    };
    RootNavComponent.prototype.getUserInfo = function () {
        if (localStorage.getItem("userInfo")) {
            this.name = JSON.parse(localStorage.getItem("userInfo")).firstName + " " + JSON.parse(localStorage.getItem("userInfo")).lastName;
            this._id = JSON.parse(localStorage.getItem("userInfo"))._id;
            this.profileImage = localStorage.getItem("profile-img");
        }
        else {
            console.log("no user info"); //TODO: put function here to get user data if local storage is empty
        }
    };
    RootNavComponent.prototype.goBack = function () {
        this._location.back();
    };
    RootNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root-nav',
            template: __webpack_require__("../../../../../angular-src/src/app/root-navigation/root-nav.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/root-navigation/root-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], RootNavComponent);
    return RootNavComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("../../../../../angular-src/src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_components_dashboard_component__ = __webpack_require__("../../../../../angular-src/src/app/dashboard/components/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_component__ = __webpack_require__("../../../../../angular-src/src/app/root/components/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot([
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_components_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__authentication_guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_component__["a" /* PageNotFoundComponent */] }
                ], { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../angular-src/src/app/root/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_guards_auth_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_component__ = __webpack_require__("../../../../../angular-src/src/app/root/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__("../../../../../angular-src/src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_authentication_module__ = __webpack_require__("../../../../../angular-src/src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_services_user_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_guards_login_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_services_auth_interceptor_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__root_navigation_root_nav_component__ = __webpack_require__("../../../../../angular-src/src/app/root-navigation/root-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_services_error_interceptor_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/error-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_not_found_component__ = __webpack_require__("../../../../../angular-src/src/app/root/components/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__proposals_proposal_module__ = __webpack_require__("../../../../../angular-src/src/app/proposals/proposal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__proposals_services_proposal_service__ = __webpack_require__("../../../../../angular-src/src/app/proposals/services/proposal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_sector_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/sector-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__spinner_service__ = __webpack_require__("../../../../../angular-src/src/app/root/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bios_bio_module__ = __webpack_require__("../../../../../angular-src/src/app/bios/bio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_skill_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/skill-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_icon_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/icon-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__bios_services_bio_service__ = __webpack_require__("../../../../../angular-src/src/app/bios/services/bio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__users_users_module__ = __webpack_require__("../../../../../angular-src/src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_shared_module__ = __webpack_require__("../../../../../angular-src/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_module__ = __webpack_require__("../../../../../angular-src/src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_services_dashboard_service__ = __webpack_require__("../../../../../angular-src/src/app/dashboard/services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__root_navigation_root_nav_component__["a" /* RootNavComponent */],
                //NotificationsComponent,
                __WEBPACK_IMPORTED_MODULE_15__components_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_27__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_16__proposals_proposal_module__["a" /* ProposalModule */],
                __WEBPACK_IMPORTED_MODULE_21__bios_bio_module__["a" /* BioModule */],
                __WEBPACK_IMPORTED_MODULE_26__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__users_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__authentication_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_notifications_service__["a" /* NotificationsService */],
                __WEBPACK_IMPORTED_MODULE_29__dashboard_services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_17__proposals_services_proposal_service__["a" /* ProposalService */],
                __WEBPACK_IMPORTED_MODULE_24__bios_services_bio_service__["a" /* BioService */],
                __WEBPACK_IMPORTED_MODULE_18__services_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_20__spinner_service__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_19__services_sector_resolver_service__["a" /* SectorResolverService */],
                __WEBPACK_IMPORTED_MODULE_22__services_skill_resolver_service__["a" /* SkillResolverService */],
                __WEBPACK_IMPORTED_MODULE_23__services_icon_resolver_service__["a" /* IconResolverService */],
                __WEBPACK_IMPORTED_MODULE_3__authentication_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__authentication_guards_login_guard__["a" /* LoginGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__authentication_services_auth_interceptor_service__["a" /* AuthInterceptorService */],
                    multi: true
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__authentication_services_error_interceptor_service__["a" /* ErrorInterceptorService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.notification {\n  padding: 0 120px 0 120px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"uk-offcanvas-content\">\n  <div  style=\"margin-left: 250px\" *ngIf=\"loading\"><img src=\"assets/images/loading/loading.gif\"></div>\n\n  <div><app-root-nav></app-root-nav></div>\n  <div class=\"router-outlet\"><router-outlet></router-outlet></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_services_authentication_service__ = __webpack_require__("../../../../../angular-src/src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__("../../../../../angular-src/src/app/root/spinner.service.ts");
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
    function AppComponent(_router, _authService, _spinnerService) {
        var _this = this;
        this._router = _router;
        this._authService = _authService;
        this._spinnerService = _spinnerService;
        this.loading = false;
        _router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.loading = true;
            }
            else if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */] || routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */] || routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                //console.log("end");
                _this.loading = false;
                window.scrollTo(0, 0);
            }
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        /*this._spinnerService.loaderStatus.subscribe((val: boolean) => {
            this.loading = val;
        });*/
        /*UIkit.notification({
          message: '<span id="notification-icon" uk-icon=\'icon: check\'></span> my-message!',
          status: 'primary',
          pos: 'top-right',
          timeout: 5000
        });*/
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../angular-src/src/app/root/components/app.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/root/components/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__authentication_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div *ngIf=\"notification\" class=\"uk-alert-danger\" uk-alert>\n    {{notification}}\n  </div>\n\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(_notificationService) {
        this._notificationService = _notificationService;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._notificationService.getNotfication().subscribe(function (message) { _this.notification = message; });
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../angular-src/src/app/root/components/notifications.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/root/components/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notifications_service__["a" /* NotificationsService */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Whoops!!... Page Not Found</h1>\n<h2><a [routerLink]=\"['/welcome']\">Go back to login page</a></h2>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/root/components/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../angular-src/src/app/root/components/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/root/components/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/pipes/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        console.log(searchText);
        return items.filter(function (it) {
            return it.proposalTitle.toString().toLocaleLowerCase().indexOf(searchText) !== -1;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/services/icon-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconResolverService = (function () {
    function IconResolverService(_ss) {
        this._ss = _ss;
    }
    IconResolverService.prototype.resolve = function (route, state) {
        return this._ss.getIcons();
        // TODO add error handling here
    };
    IconResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], IconResolverService);
    return IconResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/services/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = (function () {
    function NotificationsService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        _router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.clearNotifications();
                }
            }
        });
    }
    NotificationsService.prototype.sendNotification = function (message) {
        this.subject.next(message);
    };
    NotificationsService.prototype.getNotfication = function () {
        return this.subject.asObservable();
    };
    NotificationsService.prototype.clearNotifications = function () {
        this.subject.next();
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/services/sector-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectorResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectorResolverService = (function () {
    function SectorResolverService(_ss) {
        this._ss = _ss;
    }
    SectorResolverService.prototype.resolve = function (route, state) {
        return this._ss.getSectors();
        // TODO add error handling here
    };
    SectorResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], SectorResolverService);
    return SectorResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
    }
    SharedService.prototype.getSectors = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + '/api/sectors')
            .do(function (data) { return console.log(data); })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    SharedService.prototype.getSkills = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + '/api/skills')
            .do(function (data) { return console.log(data); })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    SharedService.prototype.getIcons = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + '/api/icons')
            .do(function (data) { return console.log(data); })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    SharedService.prototype.getUserList = function () {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + '/api/users')
            .do(function (data) { return console.log(data); })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    SharedService.prototype.getWindowRef = function () {
        return window;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/services/skill-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillResolverService = (function () {
    function SkillResolverService(_ss) {
        this._ss = _ss;
    }
    SkillResolverService.prototype.resolve = function (route, state) {
        return this._ss.getSkills();
        // TODO add error handling here
    };
    SkillResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], SkillResolverService);
    return SkillResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/root/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = (function () {
    function SpinnerService() {
        this.loaderStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    SpinnerService.prototype.displayLoader = function (value) {
        this.loaderStatus.next(value);
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/users/components/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userEdit {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 120px;\n}\n\nh1{\n  text-transform: capitalize;\n  font-size: 38px;\n  font-weight: normal;\n  line-height: 1;\n  margin-bottom: 40px;\n}\n\n.uk-alert-primary {\n  border: 1px solid #0070E0 !important;\n  border-radius: 0 !important;\n  background-color: #FAFDFF;\n  overflow: hidden;\n  color: #0070E0;\n  font-size: 13px;\n}\n\n.user-profile-picture {\n  width: 25%;\n}\n\n#sec-two-heading {\n  color: #121212;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n#add-btn {\n  margin-top: 5px;\n  text-align: -webkit-center;\n}\n\n.user-profile-picture > a {\n  margin-left: 24%;\n}\n\n.user-profile-picture > #image > #user-img {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 100%;\n  border: 1px solid rgba(0,0,0,.05);\n}\n\n.user-account-data {\n  width: 60%;\n}\n\n.uk-form-controls {\n  margin-top: 10px;\n}\n\n.uk-form-label {\n  color: #121212;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.uk-input {\n  font-size: 15px;\n  height: 55px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\n.uk-input:focus {\n  border-color: #0070E0;\n}\n\n.uk-select:not([multiple]):not([size]) {\n  height: 55px;\n}\n\n.uk-select:focus {\n  border-color: #0070E0;\n}\n\n.uk-select {\n  height: 55px;\n  font-size: 15px;\n  border: 1px solid #C4CDD5;\n  text-transform: capitalize;\n  border-radius: 3px;\n  padding-left: 20px;\n}\n\n.mat-form-field {\n  display: block;\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 1px solid #C4CDD5;\n  border-radius: 3px;\n}\n\n/deep/ .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n/deep/ .mat-form-field-infix {\n  border-top: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0;\n  padding-left: 20px;\n  line-height: 55px;\n}\n\n/deep/ .mat-input-underline {\n  color: #fff;\n  background-color: white;\n  bottom: 0;\n}\n\n/deep/ .mat-form-field-suffix .mat-icon-button {\n  margin-right: 10px;\n}\n\n#user-update-btn {\n  height: 41px;\n  margin-top: 20px;\n  width: 221px;\n  background-color: #0070E0;\n}\n\n#custom-input[type=file]{\n  position: absolute;\n  width: 100px;\n  height: 40px;\n  opacity: 0;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/users/components/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"userEdit\">\n  <h1>{{title}}</h1>\n\n  <div uk-grid>\n    <div class=\"user-account-data\">\n      <form (ngSubmit)=\"save()\" [formGroup]=\"userEditForm\" novalidate>\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"title\">First Name</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"First Name\" formControlName=\"firstName\">\n            </div>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"title\">Last Name</label>\n            <div class=\"uk-form-controls\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Last Name\" formControlName=\"lastName\">\n            </div>\n          </div>\n        </div>\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"title\">Email</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter KM&T Email\" id=\"title\" formControlName=\"email\">\n          </div>\n        </div>\n\n        <div class=\"uk-grid-small\" uk-grid>\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"startDate\">Start Date</label>\n            <div class=\"uk-form-controls\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"startDate\" id=\"startDate\" formControlName=\"startDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                <mat-datepicker #startDate></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"birthday\">Birthday</label>\n            <div class=\"uk-form-controls\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"birthday\" id=\"birthday\" formControlName=\"birthday\">\n                <mat-datepicker-toggle matSuffix [for]=\"birthday\"></mat-datepicker-toggle>\n                <mat-datepicker #birthday></mat-datepicker>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"sector\">Sector</label>\n            <div class=\"uk-form-controls\">\n              <select class=\"uk-select\" formControlName=\"sector\" id=\"sector\">\n                <option value=\"\" disabled selected>Select Sector</option>\n                <option *ngFor=\"let sector of sectors\" value=\"{{sector.sectorName}}\">{{sector.sectorName}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"uk-width-1-2@s\">\n            <label class=\"uk-form-label\" for=\"region\">Region</label>\n            <div class=\"uk-form-controls\">\n              <select class=\"uk-select\" id=\"region\" formControlName=\"region\">\n                <option value=\"\" disabled selected>Select Region</option>\n                <option value=\"UK\">United Kingdom</option>\n                <option value=\"NA\">North America</option>\n                <option VALUE=\"AU\">Asia Pacific</option>\n              </select>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"uk-margin\">\n          <label class=\"uk-form-label\" for=\"lineManagerEmail\">Line Manager Email</label>\n          <div class=\"uk-form-controls\">\n            <input class=\"uk-input\" type=\"text\" placeholder=\"Enter Your Line Managers Email\" id=\"lineManagerEmail\"\n                   formControlName=\"lineManagerEmail\">\n          </div>\n        </div>\n\n        <div class=\"uk-margin\">\n          <button class=\"uk-button uk-button-primary\" id=\"user-update-btn\" [disabled]=\"userEditForm.invalid\">UPDATE\n            DETAILS\n          </button>\n        </div>\n      </form>\n\n    </div>\n\n    <div class=\"user-profile-picture\">\n      <div id=\"sec-two-heading\">Profile Picture</div>\n      <div class=\"uk-alert-primary\" uk-alert>\n        <a></a>\n        <div><strong>Note:</strong><br> Please only upload work related image as it will be used on your bio.</div>\n      </div>\n      <div id=\"image\">\n        <img id=\"user-img\" src=\"{{profileImage}}\"\n             onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\">\n      </div>\n      <div id=\"add-btn\">\n        <div>\n        <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\n        <button class=\"uk-button uk-button-default\" type=\"button\" tabindex=\"-1\">Select</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<div id=\"modal-container\" class=\"uk-modal-container\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header\">\n      <h2 class=\"uk-modal-title\">Set Profile Picture</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n     <!-- <div class=\"uk-grid-small\" uk-grid>\n        <div class=\"uk-width-1-2@s\">-->\n\n      <div class=\"file-upload\">\n       <!-- <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\n          <button class=\"uk-button uk-button-default\" type=\"button\" tabindex=\"-1\">Select</button>-->\n      </div>\n      <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n      <br>\n      <span class=\"result rounded\" *ngIf=\"data.image\" >\n    <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n</span>\n          <!--<img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>-->\n       <!-- </div>-->\n        <!--<div class=\"uk-width-1-4@s\">\n          <img [src]=\"data?.image\" onerror=\"this.src='/assets/images/user-profile-icon/default-user.svg'\"\n               [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div>-->\n      <!--</div>-->\n    </div>\n    <div class=\"uk-modal-footer uk-text-right\">\n      <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n      <button class=\"uk-button uk-button-primary uk-modal-close\" type=\"button\" (click)=\"saveProfileImage()\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/users/components/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("../../../../uikit/dist/js/uikit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserEditComponent = (function () {
    function UserEditComponent(_route, _fb, _router, _userService) {
        this._route = _route;
        this._fb = _fb;
        this._router = _router;
        this._userService = _userService;
        this.title = "Account Settings";
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.data = {};
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.compressRatio = 1.0;
        this.data = {};
        /*this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
    
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
    
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 400;
    
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.compressRatio = 1.0;*/
        this.data = {};
        this.userEditForm = this._fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            jobTitle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            //photo: ['', [Validators.required]],
            startDate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            birthday: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            region: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            sector: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]],
            lineManagerEmail: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]]
        });
        // Get user from user edit route resolver service
        this._route.data.subscribe(function (data) {
            _this.onUserRetrieved(data['user']);
        });
        // Get all sectors from sector resolver service
        this._route.data.subscribe(function (data) {
            _this.sectors = data['sector'];
        });
        // Get users profile picture from local storage
        this.profileImage = localStorage.getItem("profile-img");
    };
    UserEditComponent.prototype.onUserRetrieved = function (user) {
        if (this.userEditForm) {
            this.userEditForm.reset();
        }
        if (user.photo != null) {
            this.imageType = this._getImageMimeType(user.photo);
        }
        this.user = user;
        this.userEditForm.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            jobTitle: this.user.jobTitle,
            //photo: this.user.photo,
            startDate: this.user.startDate,
            birthday: this.user.birthday,
            region: this.user.region,
            sector: this.user.sector,
            lineManagerEmail: this.user.lineManagerEmail
        });
    };
    UserEditComponent.prototype.save = function () {
    };
    UserEditComponent.prototype.saveProfileImage = function () {
        localStorage.setItem("profile-img", this.data.image);
        this.profileImage = localStorage.getItem("profile-img");
        this._userService.sendMessage(this.profileImage);
    };
    UserEditComponent.prototype.fileChangeListener = function ($event) {
        __WEBPACK_IMPORTED_MODULE_5_uikit___default.a.modal('#modal-container').show();
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            setTimeout(function () {
                that.cropper.setImage(image);
            }, 0);
        };
        myReader.readAsDataURL(file);
    };
    // User Pictures are being saved in Local Storage
    /*setProfileImage() {
  
      let base64Image = this._stripBase64(this.data.image);
      let id = this._route.snapshot.paramMap.get('id');
  
      this._userService.setProfileImage(id, base64Image)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              //this._notificationService.sendNotification(err.error.message); //TODO Does not show server 500 error.
              console.log(`Backend returned code ${err.status}, body was: ${err.error.message}`);
            }
          })
    }*/
    UserEditComponent.prototype._getImageMimeType = function (data) {
        if (data.charAt(0) == '/') {
            return "image/jpeg";
        }
        else if (data.charAt(0) == 'i') {
            return "image/png";
        }
    };
    UserEditComponent.prototype._stripBase64 = function (image) {
        return image.replace(/^data:image\/[a-z]+;base64,/, "");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], UserEditComponent.prototype, "cropper", void 0);
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-edit',
            template: __webpack_require__("../../../../../angular-src/src/app/users/components/user-edit.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/users/components/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/users/services/user-edit-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditResolverService = (function () {
    function UserEditResolverService(_userService, _notificationService) {
        this._userService = _userService;
        this._notificationService = _notificationService;
    }
    UserEditResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this._userService.getOne(id)
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            _this._notificationService.sendNotification(err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    UserEditResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__root_services_notifications_service__["a" /* NotificationsService */]])
    ], UserEditResolverService);
    return UserEditResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/users/services/user-list-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_services_shared_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListResolverService = (function () {
    function UserListResolverService(_ss) {
        this._ss = _ss;
    }
    UserListResolverService.prototype.resolve = function (route, state) {
        return this._ss.getUserList();
        // TODO add error handling here
    };
    UserListResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__root_services_shared_service__["a" /* SharedService */]])
    ], UserListResolverService);
    return UserListResolverService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/users/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["a" /* Subject */]();
    }
    UserService.prototype.getUsers = function () {
        return this._http.get('http://localhost:3000/api/users', { observe: 'response' })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .map(function (data) { return data.body; })
            .catch(function (err) {
            // do whatever you want when error occurres
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message.toUpperCase() || 'API_ERROR');
        });
    };
    ;
    UserService.prototype.getOne = function (id) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        return this._http.get(BASE_URL + "/api/users/" + id)
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    UserService.prototype.setProfileImage = function (id, body) {
        var BASE_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        var encodedImage = encodeURIComponent(body);
        return this._http.put(BASE_URL + "/api/users/" + id + "/photo", encodedImage, options)
            .map(function (data) {
            return data;
        })
            .catch(function (err) {
            // do whatever you want when error occurs
            console.log(err);
            // re-throw error so you can catch it when subscribing, fallback to generic error code
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err || 'API_ERROR');
        });
    };
    UserService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    UserService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_edit_component__ = __webpack_require__("../../../../../angular-src/src/app/users/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_guard__ = __webpack_require__("../../../../../angular-src/src/app/authentication/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_edit_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/users/services/user-edit-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_services_sector_resolver_service__ = __webpack_require__("../../../../../angular-src/src/app/root/services/sector-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../angular-src/src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild([
                    {
                        path: 'users/:id',
                        component: __WEBPACK_IMPORTED_MODULE_2__components_user_edit_component__["a" /* UserEditComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_4__authentication_guards_auth_guard__["a" /* AuthGuard */]],
                        resolve: { user: __WEBPACK_IMPORTED_MODULE_5__services_user_edit_resolver_service__["a" /* UserEditResolverService */], sector: __WEBPACK_IMPORTED_MODULE_8__root_services_sector_resolver_service__["a" /* SectorResolverService */] }
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_user_edit_component__["a" /* UserEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_edit_resolver_service__["a" /* UserEditResolverService */]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "../../../../../angular-src/src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard {\n  margin-left: 240px;\n  padding-left: 60px;\n  padding-top: 40px;\n  padding-right: 60px;\n}\n\n#user-proposals {\n  width: 50%;\n  height: 200px;\n  border: 1px solid lightgrey;\n}\n\n#user-bios {\n  width: 50%;\n  height: 200px;\n  border: 1px solid lightgrey;\n}\n\n.uk-container {\n  padding-top: 100px;\n}\n\n.uk-card-body {\n  padding: 20px;\n  height: 250px;\n}\n\n#col1, #col2 {\n  min-width: 200px;\n}\n\n@media screen and (max-width: 600px) {\n  #dashboard {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular-src/src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"dashboard\">\n  <div>\n    <h1 style=\"white-space: pre\">{{title}} Max!</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n  </div>\n\n  <!--<div>\n    <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper><br>\n    <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n  </div>\n  <br>\n  {{data.image}}-->\n  <div class=\"uk-child-width-expand\" uk-grid>\n    <div id=\"col1\">\n      <h3>Proposals</h3>\n      <div class=\"uk-card uk-card-default uk-card-hover uk-card-body\">\n        <h3 class=\"uk-card-title\"></h3>\n        <div id=\"plist\">\n\n        </div>\n      </div>\n    </div>\n\n    <div id=\"col2\">\n      <h3>Bios</h3>\n      <div class=\"uk-card uk-card-default uk-card-hover uk-card-body\">\n        <h3 class=\"uk-card-title\"></h3>\n        <div id=\"blist\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../angular-src/src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.title = "Welcome to your\nDashboard";
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.width = 300;
        this.cropperSettings.height = 300;
        this.cropperSettings.croppedWidth = 600;
        this.cropperSettings.croppedHeight = 600;
        this.cropperSettings.canvasWidth = 300;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.compressRatio = 10.0;
        this.data = {};
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../angular-src/src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../angular-src/src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../angular-src/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "../../../../../angular-src/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_root_app_module__ = __webpack_require__("../../../../../angular-src/src/app/root/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../angular-src/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_root_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../angular-src/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map