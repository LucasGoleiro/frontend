import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;

  public developers: string[] = [
    'Raul Almeida',
    'Flávio Mattos',
    'Giovanna Luz',
    'Milene Oliveira'
  ]

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.taskForm = this.fb.group({
      developer: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      creation: new FormControl('', [Validators.required]),
      finished: new FormControl('', [Validators.required])
    })
  };

  public onSubmit(): void {
    console.log(this.taskForm.getRawValue())
  };

}
