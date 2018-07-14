(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<h1>Login</h1>\n<hr>\n<div class = \"col-md-4\">\n\n<em *ngIf=\"isLoginFailed\"> Invalid username or password</em>\n<form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"off\">\n   <div class=\"form-group\">\n      <label for =\"userName\">User Name:</label>\n      <input ngModel name='userName' id=\"userName\"  type=\"text\" required\n       class=\"form-control\" placeholder=\"User Name ...\" >\n    </div>\n\n    <div class=\"form-group\">\n        <label for =\"password\">Password:</label>\n        <input ngModel name='password' id=\"password\"  type=\"password\" required\n         class=\"form-control\" placeholder=\"Password ...\">\n      </div>\n\n\n   <button type='submit' class='btn btn-primary'>Login</button>\n   <button type='button' class='btn btn-default'>Cancel</button>\n  </form>\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.successLogin = function () {
            this.router.navigate(["events"]);
            this.isLoginFailed = false;
        };
        this.loginFailed = function () {
            this.isLoginFailed = true;
        };
    }
    LoginComponent.prototype.login = function (val) {
        var _this = this;
        this.authService.login(val.userName, val.password).subscribe(function (data) {
            if (data.length > 0) {
                _this.successLogin();
            }
            else {
                _this.loginFailed();
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile.component.html":
/*!**************************************************!*\
  !*** ./src/app/user/user-profile.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class =\"container\">\r\n        <h2> Edit Your Profile </h2>\r\n    <div class=\"col-md-5\">\r\n        <form [formGroup] = 'profileForm' autocomplete=\"off\" (ngSubmit)=\"save(profileForm.value)\">\r\n\r\n            <div>\r\n                    <label for =\"firstName\">First Name:</label>\r\n                    <em  *ngIf=\"validateFirstName() && profileForm.controls.firstName.errors.required\"> Required</em>\r\n                    <em  *ngIf=\"validateFirstName() && profileForm.controls.firstName.errors.pattern\"> Incorrect value</em>\r\n                    <input formControlName =\"firstName\" id=\"userName\"  type=\"text\" required\r\n                     class=\"form-control\" placeholder=\"First Name ...\" >\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                    <label for =\"lastName\">LastName:</label>\r\n                    <input formControlName =\"lastName\" id=\"lastName\"  type=\"text\" required\r\n                     class=\"form-control\" placeholder=\"Last Name ...\">\r\n                  </div>\r\n            \r\n            \r\n               <button type='submit' [disabled]= \"profileForm.invalid\" class='btn btn-primary'>Save</button>\r\n               <button type='button' class='btn btn-default'>Cancel</button>\r\n        </form>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-profile.component.ts":
/*!************************************************!*\
  !*** ./src/app/user/user-profile.component.ts ***!
  \************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfile = /** @class */ (function () {
    function UserProfile(authService) {
        this.authService = authService;
    }
    UserProfile.prototype.ngOnInit = function () {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("a", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z].*")]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("b", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    UserProfile.prototype.validateFirstName = function () {
        return this.firstName.invalid && this.firstName.touched;
    };
    UserProfile.prototype.save = function (values) {
        console.log(values);
        this.authService.save(values.firstName, values.lastName, this.authService.currentUser.id).subscribe(function (data) { console.log(data); });
    };
    UserProfile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile.component.html"),
            styles: ['error {color:red}']
        }),
        __metadata("design:paramtypes", [src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserProfile);
    return UserProfile;
}());



/***/ }),

/***/ "./src/app/user/user-routes.ts":
/*!*************************************!*\
  !*** ./src/app/user/user-routes.ts ***!
  \*************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var src_app_user_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/user/user-profile.component */ "./src/app/user/user-profile.component.ts");
/* harmony import */ var src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/login/login.component */ "./src/app/user/login/login.component.ts");


var userRoutes = [
    { path: "profile", component: src_app_user_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfile"] },
    { path: "login", component: src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/user/user-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-routes */ "./src/app/user/user-routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_6__["userRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfile"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map