import { TaskFormComponent } from './../../newTask/task-form/task-form.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { TaskDTO } from 'src/app/models/Task';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/components/services/task.service';
import { EditTaskComponent } from '../../edit-task/edit-task.component';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css']
})
export class TasksTableComponent implements OnInit {

  public ELEMENT_DATA! : TaskDTO[];
  displayedColumns: string[] = ['developer', 'description', 'status', 'actions'];
  dataSource = new MatTableDataSource<TaskDTO>(this.ELEMENT_DATA);


  @ViewChild('table') table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public _dialog: MatDialog,
    private _tasksService: TasksService
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.renderTable();

    this._tasksService.new_task$.subscribe(task => {
      if (task) {
        this.dataSource.data.push(task);
        this.renderTable();
        this.table.renderRows();
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  renderTable() {
    return this._tasksService.listTasks().subscribe(res => this.dataSource.data = res);
  };

  public listTasks(){
    let resp = this._tasksService.listTasks();
    resp.subscribe(report=>this.dataSource.data=report as TaskDTO[])
  }

  openDialog() {
    this._dialog.open(TaskFormComponent, { disableClose: true });
  }

  public edit(data) {
    this._dialog.open(EditTaskComponent, { disableClose: true, data: {
      data
    } });
  }

  public delete(data) {
    this._tasksService.deleteTask(data)
  }

}
