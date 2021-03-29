import { TaskFormComponent } from './../../newTask/task-form/task-form.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { TaskDTO } from 'src/app/models/Task';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {
  public tasks: TaskDTO[] = [
    {developer: 'Luis Alberto', creation: '2020-01-01', finished: '', description: 'tesgugukgugyuifyjfyjfyjfyjfyifyjfyfyfyjfyujfyuifyufyuifiyfyite', status:'backlog'},
    {developer: 'Ana Maria', creation: '2020-01-01', finished: '', description: 'teste', status:'backlog'},
    {developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'teste', status:'backlog'}
  ]

  displayedColumns: string[] = ['developer', 'description', 'status'];
  dataSource = new MatTableDataSource<TaskDTO>(this.tasks);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(TaskFormComponent, { disableClose: true });
  }

}
