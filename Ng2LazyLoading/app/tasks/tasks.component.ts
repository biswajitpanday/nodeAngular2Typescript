import {Component} from '@angular/core';

@Component({
    template: `
        <h2>Your Tasks</h2>
        <router-outlet></router-outlet>
    `,
})
export class TasksComponent {
}