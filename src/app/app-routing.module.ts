import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ConfirmandPageComponent} from "./pages/confirmand-page/confirmand-page.component";
import {FaqPageComponent} from "./pages/faq-page/faq-page.component";

const routes: Routes = [
  { path: 'home', component: DashboardPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'confirmand', component: ConfirmandPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
