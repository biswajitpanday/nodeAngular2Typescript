import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}