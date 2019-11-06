import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppareilView } from "../Appareil-View/appareil-view.component";
import { AppComponent } from "./app.component";
import { AppareilComponent } from "../AppareilComponent/appareil.component";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "../Auth/auth.component";
import { AuthGuard } from "../services/auth-guard.service";
import { AppareilService } from "../services/appareil.service";
import { AuthService } from "../services/auth.service";
import { SingleAppareilComponent } from "../SingleAppareil/single-appareil.component";
import { FourOhFourComponent } from "../four-oh-four/four-oh-four.component";

const appRoutes: Routes = [
  { path: "appareils", canActivate: [AuthGuard], component: AppareilView },
  {
    path: "appareils/:id",
    canActivate: [AuthGuard],
    component: SingleAppareilComponent
  },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilView },
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
    FourOhFourComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
