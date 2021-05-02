import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/components/services/users.service';
import { UserDTO } from 'src/app/models/User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  public userForm: FormGroup;
  private _userDTO!: UserDTO;

  public positions: string[] = [
    'Desenvolvedor FullStack',
    'UX/UI',
    'Desenvolvedor(a) Backend',
    'Desenvolvedor(a) Frontend',
    'DBA',
  ]

  constructor(
    private _fb:FormBuilder,
    private _userService: UsersService
    ) { }

  ngOnInit(): void {
    this.createForm();
  };

  public createForm(): void {
    this.userForm = this._fb.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      email: [{ value: null, disabled: false }, [Validators.required]],
      password: [{ value: '123', disabled: false }, [Validators.required]],
      position:[{ value: null, disabled: false }, [Validators.required]],
    })
  };

  public onSubmit(): void {
    this._userDTO = this.userForm.getRawValue();
    this._userService.createUser(this._userDTO).subscribe(
      user => this._userService.emitUser(user)
    );
  };

}
