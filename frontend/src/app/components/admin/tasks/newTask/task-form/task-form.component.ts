import { UserDTO } from './../../../../../models/User';
import { UsersService } from './../../../../services/users.service';
import { TasksService } from './../../../../services/task.service';
import { TaskDTO } from './../../../../../models/Task';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;

  private _taskDTO: TaskDTO;

  private _date =  new Date();

  public date: string;

  public developers: UserDTO[] = []

  constructor(
    private _fb: FormBuilder,
    private _tasksService: TasksService,
    private _usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.getDate();
    this.listUsers();
    this.createForm();
  }

  public createForm(): void {
    this.taskForm = this._fb.group({
      teamMember: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('Backlog', [Validators.required]),
      creation: new FormControl(this.date, [Validators.required])
    })
  };

  public listUsers(): void {
    this._usersService.listUsers().subscribe((users) => {
      this.developers = users
    })
  } 

  public onSubmit(): void {
    this._taskDTO = this.taskForm.getRawValue();
    console.log(this._taskDTO)
    this._tasksService.createTask(this._taskDTO).subscribe(
      task => this._tasksService.emitTask(task)
    );
  };

  public getDate() {
    let day  = this._date.getDate().toString().padStart(2, '0')
    let month  = (this._date.getMonth()+1).toString().padStart(2, '0')
    let year  = this._date.getFullYear().toString();

    this.date = `${day}/${month}/${year}`;
  }

}
