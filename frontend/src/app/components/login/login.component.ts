import { UserDTO } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  public users: UserDTO[] = [
    {
      name: "admin",
      email: "admin@email.com",
      password: "123",
      position: "admin"
    }
  ];

  constructor(private fb:FormBuilder,
    private router: Router) { }

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

    if(name === 'admin' && password === '123') {
      this.router.navigate(['home-admin']);
    } else if(name === 'lucas' && password === '123'){
      this.router.navigate(['home-user']);
    } else {
      alert('usuário não encontrado !!!')
    }
  };

};
