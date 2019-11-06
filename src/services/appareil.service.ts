import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppareilService {
  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: "Machine à laver",
      statut: "éteint"
    },
    {
      id: 2,
      name: "Frigo",
      statut: "allumé"
    },
    {
      id: 3,
      name: "Ordinateur",
      statut: "éteint"
    }
  ];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.statut = "allumé";
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.statut = "éteint";
    }
    this.emitAppareilSubject();
  }

  switchOneOn(i: number) {
    this.appareils[i].statut = "allumé";
    this.emitAppareilSubject();
  }

  switchOneOff(i: number) {
    this.appareils[i].statut = "éteint";
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(s => {
      return s.id === id;
    });
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: "",
      statut: ""
    };
    appareilObject.name = name;
    appareilObject.statut = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put(
        "https://appareil-9c973.firebaseio.com/appareils.json",
        this.appareils
      )
      .subscribe(
        () => {
          console.log("Enregistrement terminé !");
        },
        error => {
          console.log("Erreur ! : " + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>("https://appareil-9c973.firebaseio.com/appareils.json")
      .subscribe(
        response => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        error => {
          console.log("Erreur ! : " + error);
        }
      );
  }
}
