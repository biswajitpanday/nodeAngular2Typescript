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
var core_1 = require('@angular/core');
var UsersListComponent = (function () {
    function UsersListComponent() {
        this.users = [
            { id: '1', name: 'John Doe' },
            { id: '2', name: 'Jane Roe' },
            { id: '3', name: 'John Smith' }
        ];
    }
    UsersListComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n        <ul class=\"bubble\">\n            <li *ngFor=\"let user of users let i=index\">\n                <span>{{i+1}}.</span>\n                <span>{{user.name}}</span>\n            </li>\n        </ul>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map