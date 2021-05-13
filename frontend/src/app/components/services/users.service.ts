import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserDTO } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlAPI = 'http://localhost:8088';

  private _userSource = new BehaviorSubject<UserDTO | null>(null);
  public new_user$ = this._userSource.asObservable();

  constructor(private http: HttpClient) { }

  public listUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.urlAPI}/team-members`);
  };

  public createUser(user: UserDTO): Observable<UserDTO> {
    const url = `${this.urlAPI}/team-members`;
    return this.http.post<UserDTO>(url, user);
  };

  public emitUser(user: UserDTO): void {
    this._userSource.next(user);
  };

  public updateUser(user: UserDTO): Observable<UserDTO> {
    const id = user.id;
    const url = `${this.urlAPI}/team-members/${id}`;
    return this.http.put<UserDTO>(url, user);
  };

  public deleteUser(user: UserDTO) : void {
    const id = user.id;
    const url = `${this.urlAPI}/team-members/${id}`;
    this.http.delete<UserDTO>(url);
  };

  public getUsers(): Observable<UserDTO[]> {
    const url = `${this.urlAPI}/team-members`;
    return this.http.get<UserDTO[]>(url);
  }

};
