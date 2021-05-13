import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { TaskDTO } from 'src/app/models/Task';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public userName: string;

  displayedColumns: string[] = ['description', 'status'];
  dataSource = new MatTableDataSource<TaskDTO>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _loggedUser: LoggedUserService) { }

  ngOnInit(): void {
    this.userName = this._loggedUser.loggedUser;
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
