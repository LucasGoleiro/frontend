import { UserDTO } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  public users: UserDTO[] = [
    {
      name: "Lucas Coelho",
      username: "Lucas",
      password: "12345",
      isManager: true
    }
  ];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.userForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
      // username: [{value: null, disable: false}, [Validators.required]],
      // password: [{value: null, disable: false}, [Validators.required]]
    })
  };

  public onSubmit(): void {

    console.log(this.userForm.getRawValue())
  };

};
