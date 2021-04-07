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

  // public users: UserDTO[] = [
  //   {
  //     id: '01',
  //     name: "Lucas Coelho",
  //     email: "lucas@email.com",
  //     password: "123",
  //     position: "Desenvolvedor(a) FullStack"
  //   },
  //   {
  //     id: '02',
  //     name: "Maria Madalena",
  //     email: "maria@email.com",
  //     password: "123",
  //     position: "UX/UI"
  //   },
  //   {
  //     id: '03',
  //     name: "Alex ALves",
  //     email: "alex@alex.com",
  //     password: "123",
  //     position: "DBA"
  //   },
  //   {
  //     id: '04',
  //     name: "Yago Vitor",
  //     email: "yago@email.com",
  //     password: "123",
  //     position: "Desenvolvedor(a) FullStack"
  //   },
  //   {
  //     id: '05',
  //     name: "Carla Dias",
  //     email: "carla@email.com",
  //     password: "123",
  //     position: "DBA"
  //   },
  //   {
  //     id: '06',
  //     name: "João de Barro",
  //     email: "joao@email.com",
  //     password: "123",
  //     position: "UX/UI"
  //   },
  //   {
  //     id: '07',
  //     name: "Ronaldo da Silva",
  //     email: "ronaldo@email.com",
  //     password: "123",
  //     position: "DBA"
  //   },
  //   {
  //     id: '08',
  //     name: "Vitoria Cristina",
  //     email: "vi@email.com",
  //     password: "123",
  //     position: "Desenvolvedor(a) Frontend"
  //   },
  //   {
  //     id: '09',
  //     name: "Giovana Pereira",
  //     email: "gio@email.com",
  //     password: "123",
  //     position: "Desenvolvedor(a) Backend"
  //   }
  // ];

  public ELEMENT_DATA! : UserDTO[];
  displayedColumns: string[] = ['name', 'email', 'position'];
  dataSource = new MatTableDataSource<UserDTO>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.listUsers();
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  public listUsers(){
    let resp = this.usersService.listUsers();
    resp.subscribe(report=>this.dataSource.data=report as UserDTO[])
  }

  // listUsers() {
  //   this.usersService.listUsers().subscribe(users => {
  //     this.users = users;
  //   }, err => {
  //     console.log('Deu ruim');
  //   })
  //   return this.users;
  // }

  // renderTable() {
  //   return this.usersService.listUsers().subscribe(res => this.dataSource.data = res);
  // };

  openDialog() {
    this.dialog.open(UserformComponent, { disableClose: true });
  }

}
