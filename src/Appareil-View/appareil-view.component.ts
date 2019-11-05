import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../app/service/appareil.service";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilView implements OnInit {
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
    }, 5000);
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
