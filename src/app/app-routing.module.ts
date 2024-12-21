import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: "profile", component: ProfileComponent},
  { path: "list/:t", component: ListComponent},
  { path: "sign-in", component: SignInComponent},
  { path: "book/:id", component: BookComponent},
  { path: "", component: MainInfoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
