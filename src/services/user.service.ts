import { User } from "../models/user.model";
import { Subject } from "rxjs/Subject";

export class UserService {
  private user: User[] = [
    new User("Will", "Alexander", "will@will.com", "jus d'orange", [
      "coder",
      "boire du café"
    ])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.user.slice());
  }

  addUser(user: User) {
    this.user.push(user);
    this.emitUsers();
  }
}
