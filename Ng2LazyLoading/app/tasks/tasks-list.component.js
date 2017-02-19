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
/**
 * Created by NamitaMalik on 9/27/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var TasksListComponent = (function () {
    function TasksListComponent(router) {
        this.router = router;
        this.tasks = [
            { id: '1', title: 'Code Cleanup' },
            { id: '2', title: 'Review Code' },
            { id: '3', title: 'Build to Prod' }
        ];
        this.errorMessage = '';
    }
    TasksListComponent.prototype.onSelect = function (task) {
        this.router.navigate(['/tasks', task.id]);
    };
    TasksListComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n        <ul class=\"bubble\">\n            <li *ngFor=\"let task of tasks let i=index\" (click)=\"onSelect(task)\">\n                <span>{{i+1}}.</span>\n                <span>{{task.title}}</span>\n            </li>\n        </ul>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasks-list.component.js.map