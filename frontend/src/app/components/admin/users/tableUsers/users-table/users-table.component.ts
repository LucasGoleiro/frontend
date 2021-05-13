import { UsersService } from './../../../../services/users.service';
import { UserformComponent } from './../../newUser/userform/userform.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { UserDTO } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../../edit-user/edit-user.component';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  public ELEMENT_DATA! : UserDTO[];
  displayedColumns: string[] = ['name', 'email', 'position', 'actions'];
  dataSource = new MatTableDataSource<UserDTO>(this.ELEMENT_DATA);

  @ViewChild('table') table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public _dialog: MatDialog,
    private _usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.renderTable();

    this._usersService.new_user$.subscribe(user => {
      if (user) {
        this.dataSource.data.push(user);
        this.renderTable();
        this.table.renderRows();
      }
    });
  }

  renderTable() {
    return this._usersService.listUsers().subscribe(res => this.dataSource.data = res);
  };

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public listUsers(){
    let resp = this._usersService.listUsers();
    resp.subscribe(report=>this.dataSource.data=report as UserDTO[])
  }

  openDialog() {
    this._dialog.open(UserformComponent, { disableClose: true });
  }

  public edit(data) {
    this._dialog.open(EditUserComponent, { disableClose: true, data: {
      data
    } });
  }

  public delete(data) {
    console.log(data)
    this._usersService.deleteUser(data);
  }

}
