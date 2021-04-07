import { TaskFormComponent } from './../../newTask/task-form/task-form.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { TaskDTO } from 'src/app/models/Task';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/components/services/task.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  // public tasks: TaskDTO[] = [
  //   {id: '01', developer: 'Luis Alberto', creation: '2020-01-01', finished: '', description: 'Teste 1', status:'backlog'},
  //   {id: '01', developer: 'Ana Maria', creation: '2020-01-01', finished: '', description: 'Teste 2', status:'backlog'},
  //   {id: '01', developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'Teste 3', status:'backlog'}
  // ]

  public ELEMENT_DATA! : TaskDTO[];
  displayedColumns: string[] = ['developer', 'description', 'status'];
  dataSource = new MatTableDataSource<TaskDTO>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private tasksService: TasksService
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.listTasks();
  }

  public listTasks(){
    let resp = this.tasksService.listTasks();
    resp.subscribe(report=>this.dataSource.data=report as TaskDTO[])
  }

  openDialog() {
    this.dialog.open(TaskFormComponent, { disableClose: true });
  }

}
