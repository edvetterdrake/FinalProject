"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var find_service_1 = require("./find.service");
var FindComponent = (function () {
    function FindComponent(findService) {
        this.findService = findService;
    }
    FindComponent.prototype.saveList = function (index) {
        this.findService
            .saveList(this.findService.lists[index])
            .subscribe(function (res) {
            console.log(res);
        }.bind(this));
    };
    FindComponent = __decorate([
        core_1.Component({
            selector: "find",
            templateUrl: '../../html/find.html',
            styleUrls: ['app/css/find.css']
        }), 
        __metadata('design:paramtypes', [find_service_1.FindService])
    ], FindComponent);
    return FindComponent;
}());
exports.FindComponent = FindComponent;
//# sourceMappingURL=find.component.js.map