import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireAuthGuard} from '@angular/fire/compat/auth-guard';
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {redirectLoggedInTo} from "@angular/fire/auth-guard";

/* import Pages*/
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ConfirmandPageComponent} from "./pages/confirmand-page/confirmand-page.component";
import {FaqPageComponent} from "./pages/faq-page/faq-page.component";
import {NotificationsPageComponent} from "./pages/notifications-page/notifications-page.component";
import {QuestionPageComponent} from "./pages/question-page/question-page.component";
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  { path: 'home', component: DashboardPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'faq', component: FaqPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'confirmand', component: ConfirmandPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'notifications', component: NotificationsPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'questions', component: QuestionPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'toDoLists', component: TodoPageComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'login', component: LoginPageComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectLoggedInToHome } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
