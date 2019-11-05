import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppareilView } from "../Appareil-View/appareil-view.component";
import { AppComponent } from "./app.component";
import { AppareilComponent } from "../AppareilComponent/appareil.component";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "../Auth/auth.component";

import { AppareilService } from "./service/appareil.service";

const appRoutes: Routes = [
  { path: "appareils", component: AppareilView },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilView }
];

@NgModule({
  declarations: [AppComponent, AppareilComponent, AppareilView, AuthComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
