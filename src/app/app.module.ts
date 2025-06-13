import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InBaseComponent } from './Components/in-base/in-base.component';
import { ExBaseComponent } from './Components/ex-base/ex-base.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InBaseComponent,
    ExBaseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
