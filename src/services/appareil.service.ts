import { Subject } from "rxjs/Subject";

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
}
