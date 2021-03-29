import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  public userForm: FormGroup;

  public positions: string[] = [
    'Desenvolvedor FullStack',
    'UX/UI',
    'Desenvolvedor(a) Backend',
    'Desenvolvedor(a) Frontend',
    'DBA',
  ]

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  };

  public createForm(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('123'),
      position: new FormControl('', [Validators.required])
    })
  };

  public onSubmit(): void {
    console.log(this.userForm.getRawValue())
  };

}
