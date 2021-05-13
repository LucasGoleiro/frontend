import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { TaskDTO } from 'src/app/models/Task';
import { TasksService } from '../../services/task.service';
import { LoggedUserService } from '../../services/logged-user.service';
import { UpdateActiveComponent } from './update-active/update-active.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {

  public ELEMENT_DATA! : TaskDTO[];

  displayedColumns: string[] = ['description', 'status', 'actions'];
  dataSource = new MatTableDataSource<TaskDTO>(this.ELEMENT_DATA);

  @ViewChild('table') table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private _tasksService: TasksService,
    private _dialog: MatDialog 
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
    let filteredData: TaskDTO[] = []
    return this._tasksService.listTasks().subscribe(res => {
      res.forEach(task => {
        if(task.status === "Active") {
          filteredData.push(task);
        }
      })
      this.dataSource.data = filteredData;
      console.log(this.dataSource.data);
    });
  };

  public listTasks(){
    let resp = this._tasksService.listTasks();
    resp.subscribe(report=>this.dataSource.data=report as TaskDTO[])
  }

  public update(data) {
    this._dialog.open(UpdateActiveComponent, { disableClose: true, data: {
      data
    } });
  }
}
