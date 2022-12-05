import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './shared/notice/notice.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CookiesPopupComponent } from './shared/cookies-popup/cookies-popup.component';
import { IntroComponent } from './shared/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    NavbarComponent,
    CookiesPopupComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
