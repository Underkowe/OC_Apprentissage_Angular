import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppareilComponent } from "../AppareilComponent/appareil.component";
import { FormsModule } from "@angular/forms";

import { AppareilService } from "./service/appareil.service";

@NgModule({
  declarations: [AppComponent, AppareilComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
