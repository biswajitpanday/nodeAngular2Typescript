﻿import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
     <nav>
        <a routerLink="/tasks">Tasks</a>
        <a routerLink="/users">Users</a>
      </nav>
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
}