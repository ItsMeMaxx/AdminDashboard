//Angular Imports
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

//App Imports
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

//Service Imports
import {AuthService} from "./services/authService";

//Pipe Imports
import {TimestampToDatePipe} from "./pipes/datePipe.pipe";

//MAT Module Imports
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";

//Components Imports
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LessonItemComponent} from './components/lesson-item/lesson-item.component';
import {ConfirmandPageComponent} from './pages/confirmand-page/confirmand-page.component';
import {ChurchEntryComponent} from './components/church-entry/church-entry.component';
import {CancellationItemComponent} from './components/cancellation-item/cancellation-item.component';
import {FaqPageComponent} from './pages/faq-page/faq-page.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {ModalComponent} from './components/modal/modal.component';
import {NewsListItemComponent} from './components/news-list-item/news-list-item.component';

//Firebase Imports
import {AngularFireModule, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import {MatRadioModule} from "@angular/material/radio";
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';



const firebaseConfig = {
  apiKey: "AIzaSyBO8m32ne1jHUrkvusmXJCeSZz_tazBS6Q",
  authDomain: "churchorga.firebaseapp.com",
  projectId: "churchorga",
  storageBucket: "churchorga.appspot.com",
  messagingSenderId: "1074079864759",
  appId: "1:1074079864759:web:6cac8329f76ae96fe43a32"
};


AngularFireModule.initializeApp(firebaseConfig);


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
    FaqPageComponent,
    TimestampToDatePipe,
    FaqItemComponent,
    NotificationsPageComponent,
    NotificationItemComponent,
    QuestionPageComponent,
    QuestionItemComponent,
    TodoPageComponent,
    ToDoListItemComponent,
  ],
    imports: [
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
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
        MatNativeDateModule,
        MatRadioModule,
    ],
  providers: [
    AuthService,
    MatDatepickerModule,
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    {provide: MAT_DATE_LOCALE, useValue: 'de-GE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
