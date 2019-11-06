import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppareilView } from "../Appareil-View/appareil-view.component";
import { AppComponent } from "./app.component";
import { AppareilComponent } from "../AppareilComponent/appareil.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "../Auth/auth.component";
import { AuthGuard } from "../services/auth-guard.service";
import { AppareilService } from "../services/appareil.service";
import { AuthService } from "../services/auth.service";
import { SingleAppareilComponent } from "../SingleAppareil/single-appareil.component";
import { FourOhFourComponent } from "../four-oh-four/four-oh-four.component";
import { EditAppareilComponent } from "../EditAppareilComponent/edit-appareil.component";
import { UserService } from "../services/user.service";
import { UserListComponent } from "../UserListComponent/userlist.component";
import { NewUserComponent } from "../NewUserComponent/new-user.component";

const appRoutes: Routes = [
  { path: "appareils", canActivate: [AuthGuard], component: AppareilView },
  {
    path: "appareils/:id",
    canActivate: [AuthGuard],
    component: SingleAppareilComponent
  },
  { path: "users", component: UserListComponent },
  { path: "auth", component: AuthComponent },
  { path: "edit", canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: "", component: AppareilView },
  { path: "users", component: UserListComponent },
  { path: "new-user", component: NewUserComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilView,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppareilService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
