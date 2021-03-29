import { UserformComponent } from './../../newUser/userform/userform.component';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { UserDTO } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  public users: UserDTO[] = [
    {
      name: "Lucas Coelho",
      email: "lucas@email.com",
      password: "123",
      position: "Desenvolvedor(a) FullStack"
    },
    {
      name: "Maria Madalena",
      email: "maria@email.com",
      password: "123",
      position: "UX/UI"
    },
    {
      name: "Alex ALves",
      email: "alex@alex.com",
      password: "123",
      position: "DBA"
    },
    {
      name: "Yago Vitor",
      email: "yago@email.com",
      password: "123",
      position: "Desenvolvedor(a) FullStack"
    },
    {
      name: "Carla Dias",
      email: "carla@email.com",
      password: "123",
      position: "DBA"
    },
    {
      name: "João de Barro",
      email: "joao@email.com",
      password: "123",
      position: "UX/UI"
    },
    {
      name: "Ronaldo da Silva",
      email: "ronaldo@email.com",
      password: "123",
      position: "DBA"
    },
    {
      name: "Vitoria Cristina",
      email: "vi@email.com",
      password: "123",
      position: "Desenvolvedor(a) Frontend"
    },
    {
      name: "Giovana Pereira",
      email: "gio@email.com",
      password: "123",
      position: "Desenvolvedor(a) Backend"
    }
  ];

  displayedColumns: string[] = ['name', 'email', 'position'];
  dataSource = new MatTableDataSource<UserDTO>(this.users);


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
    this.dialog.open(UserformComponent, { disableClose: true });
  }

}
