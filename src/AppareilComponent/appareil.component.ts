import { Component, OnInit, Input } from "@angular/core";
import { AppareilService } from "../app/service/appareil.service";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.scss"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatut: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {}

  getStatut() {
    return this.appareilStatut;
  }

  getColor() {
    if (this.appareilStatut === "allumé") {
      return "green";
    } else if (this.appareilStatut === "éteint") {
      return "red";
    }
  }

  onSwitch() {
    if (this.appareilStatut === "allumé") {
      this.appareilService.switchOneOff(this.index);
    } else if (this.appareilStatut === "éteint") {
      this.appareilService.switchOneOn(this.index);
    }
  }
}
