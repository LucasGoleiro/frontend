import { UsersTableComponent } from './../tableUsers/users-table/users-table.component';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/User';
import { UsersService } from 'src/app/components/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userForm: FormGroup;
  public _userDTO!: UserDTO;

  public positions: string[] = [
    'Desenvolvedor(a) FullStack',
    'UX/UI Design',
    'Desenvolvedor(a) Backend',
    'Desenvolvedor(a) Frontend',
    'DBA',
  ]

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb:FormBuilder,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this._userDTO = this.data.data;
    this.createForm();
    console.log(this._userDTO);
  }

  public createForm(): void {
    this.userForm = this._fb.group({
      id: [{ value: this.data.data.id, disabled: false }],
      name: [{ value: this.data.data.name, disabled: false }, [Validators.required]],
      email: [{ value: this.data.data.email, disabled: false }, [Validators.required]],
      password: [{ value: '123', disabled: false }, [Validators.required]],
      position:[{ value: this.data.data.position, disabled: false }, [Validators.required]],
    })
  };

  public onSubmit(): void {
    this._userDTO = this.userForm.getRawValue();
    this._userService.updateUser(this._userDTO).subscribe();
  };

}
