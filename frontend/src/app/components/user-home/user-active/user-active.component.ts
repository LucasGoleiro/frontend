import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { TaskDTO } from 'src/app/models/Task';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {
  public tasks: TaskDTO[] = [
    {id: '13',  developer: 'Luis Alberto', creation: '2020-01-01', finished: '', description: 'Escrever documentação', status:'backlog'},
    {id: '14', developer: 'Ana Maria', creation: '2020-01-01', finished: '', description: 'Testar nova funcionalidade', status:'backlog'},
    {id: '15', developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'Revisar código', status:'backlog'},
    {id: '16', developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'Instalar banco de dados', status:'backlog'},
    {id: '17', developer: 'Raul Seixas', creation: '2020-01-01', finished: '', description: 'Atualizar anti-vírus', status:'backlog'}
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
