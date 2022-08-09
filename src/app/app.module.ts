import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {RouterModule} from "@angular/router";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "./services/authService";
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { LessonItemComponent } from './components/lesson-item/lesson-item.component';
import { ConfirmandPageComponent } from './pages/confirmand-page/confirmand-page.component';
import { ChurchEntryComponent } from './components/church-entry/church-entry.component';
import { CancellationItemComponent } from './components/cancellation-item/cancellation-item.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NavBarComponent,
    ListItemComponent,
    ModalComponent,
    NewsListItemComponent,
    LessonItemComponent,
    ConfirmandPageComponent,
    ChurchEntryComponent,
    CancellationItemComponent,
    FaqPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AuthService,
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'de-GE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
