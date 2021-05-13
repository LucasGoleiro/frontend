import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/models/User';


@Injectable({
    providedIn: 'root'
  })
  export class LoggedUserService {
    private _loggedUser: string;

    get loggedUser(): string {
      return this._loggedUser;
    }

    set LoggedUser(user: string) {
      this._loggedUser = user;
    }
  }