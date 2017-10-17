import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from "@uirouter/angular";

import {uiRouterConfigFn} from "./config/router.config";

import { AppComponent } from './app.component';
import {STATES} from './states/states';
import { DashboardComponent } from './states/dashboard/dashboard.component';
import { UsersComponent } from './states/users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
