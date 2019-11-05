export class AppareilService {
  appareils = [
    {
      name: "Machine à laver",
      statut: "éteint"
    },
    {
      name: "Frigo",
      statut: "allumé"
    },
    {
      name: "Ordinateur",
      statut: "éteint"
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.statut = "allumé";
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.statut = "éteint";
    }
  }

  switchOneOn(i: number) {
    this.appareils[i].statut = "allumé";
  }

  switchOneOff(i: number) {
    this.appareils[i].statut = "éteint";
  }
}
