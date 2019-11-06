import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { AppareilService } from "../services/appareil.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilView implements OnInit, OnDestroy {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1000);
  });

  @Input() id: number;

  isAuth = false;

  appareils: any[];

  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 5000);
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    console.log("On allume tout !");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ?")) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
