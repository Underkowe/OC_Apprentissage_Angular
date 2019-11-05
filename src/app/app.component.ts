import { Component, enableProdMode, OnInit } from "@angular/core";
import { AppareilService } from "./service/appareil.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1000);
  });

  isAuth = false;

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 1000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log("On allume tout !");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    console.log("On éteint tout !");
    this.appareilService.switchOffAll();
  }
}
