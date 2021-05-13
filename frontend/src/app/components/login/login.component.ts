import { UserDTO } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from './../services/users.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  public users: string[] = [];

  constructor(private fb:FormBuilder,
    private _router: Router,
    private _usersService: UsersService,
    private _loggedUser: LoggedUserService) { }

  ngOnInit(): void {
    this.createForm();
  };

  public createForm(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  };

  public onSubmit(): void {
    const name: string = this.userForm.getRawValue().name
    const password: string = this.userForm.getRawValue().password

    // var userExist = this.getUsers(name);

    if(name === 'admin' && password === '123') {
      this._router.navigate(['home-admin']);
    } else {
      this._loggedUser.LoggedUser = name;
      this._router.navigate(['home-user']);
    }
  };

  public getUsers(name: string): any {
    this._usersService.getUsers().subscribe(users => {
      users.forEach(user => {
        this.users.push(user.name);
        return this.users.includes(name);
      })
    });
  }

};
