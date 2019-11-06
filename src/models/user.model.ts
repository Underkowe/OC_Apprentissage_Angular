export class User {
  constructor(
    public Prenom: string,
    public lastName: string,
    public email: string,
    public drinkPreference: string,
    public hobbies?: string[]
  ) {}
}
