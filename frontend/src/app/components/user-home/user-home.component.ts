import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { TaskDTO } from 'src/app/models/Task';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public tasks: TaskDTO[] = [
    {id: '04', developer: 'Luis Alberto', creation: '2020-01-01', finished: '', description: 'Escrever documentação', status:'backlog'},
    {id: '05', developer: 'Ana Maria', creation: '2020-01-01', finished: '', description: 'Testar nova funcionalidade', status:'backlog'},
    {id: '06', developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'Revisar código', status:'backlog'}
  ]

  displayedColumns: string[] = ['description', 'status'];
  dataSource = new MatTableDataSource<TaskDTO>(this.tasks);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
