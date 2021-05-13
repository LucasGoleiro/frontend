import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from 'src/app/components/services/task.service';
import { UsersService } from 'src/app/components/services/users.service';
import { TaskDTO } from 'src/app/models/Task';
import { UserDTO } from 'src/app/models/User';

@Component({
  selector: 'app-update-backlog',
  templateUrl: './update-backlog.component.html',
  styleUrls: ['./update-backlog.component.css']
})
export class UpdateBacklogComponent implements OnInit {

  public taskForm: FormGroup;

  public _taskDTO: TaskDTO;

  public developers: UserDTO[] = []

  constructor(
    public dialogRef: MatDialogRef<UpdateBacklogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _tasksService: TasksService,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this._taskDTO = this.data.data;
    this.listUsers();
    this.createForm();
  }

  public createForm(): void {
    this.taskForm = this._fb.group({
      id: [{ value: this.data.data.id, disabled: false }],
      teamMember:[{ value: this.data.data.teamMember, disabled: false }, [Validators.required]],
      status:[{ value: this.data.data.status, disabled: false }, [Validators.required]],
      creation:[{ value: this.data.data.creation, disabled: false }, [Validators.required]],
      description: [{ value: this.data.data.description, disabled: false }, [Validators.required]],
    })
  };

  public listUsers(): void {
    this._usersService.listUsers().subscribe((users) => {
      this.developers = users
    })
  } 

  public onSubmit(): void {
    this._taskDTO = this.taskForm.getRawValue();
    this._taskDTO.status = 'Active';
    this._tasksService.updateTask(this._taskDTO).subscribe(
      task => this._tasksService.emitTask(task)
    );
  };

}
