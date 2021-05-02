import { UsersService } from './../../../../services/users.service';
import { UserformComponent } from './../../newUser/userform/userform.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { UserDTO } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  public ELEMENT_DATA! : UserDTO[];
  displayedColumns: string[] = ['name', 'email', 'position'];
  dataSource = new MatTableDataSource<UserDTO>(this.ELEMENT_DATA);

  @ViewChild('table') table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.renderTable();

    this.usersService.new_user$.subscribe(user => {
      if (user) {
        this.dataSource.data.push(user);
        this.renderTable();
        this.table.renderRows();
      }
    });
  }

  renderTable() {
    return this.usersService.listUsers().subscribe(res => this.dataSource.data = res);
  };

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public listUsers(){
    let resp = this.usersService.listUsers();
    resp.subscribe(report=>this.dataSource.data=report as UserDTO[])
  }

  openDialog() {
    this.dialog.open(UserformComponent, { disableClose: true });
  }

}
