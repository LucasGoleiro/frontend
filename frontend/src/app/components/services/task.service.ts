import { TaskDTO } from 'src/app/models/Task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private urlAPI = 'http://localhost:8088';

  private _taskSource = new BehaviorSubject<TaskDTO | null>(null);
  public new_task$ = this._taskSource.asObservable();

  constructor(private http: HttpClient) { }

  listTasks(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(`${this.urlAPI}/tasks`);
  };

  public createTask(task: TaskDTO): Observable<TaskDTO> {
    const url = `${this.urlAPI}/tasks`
    return this.http.post<TaskDTO>(url, task)
  };

  public emitTask(task: TaskDTO): void {
    this._taskSource.next(task);
  };

  public updateTask(task: TaskDTO): Observable<TaskDTO> {
    const id = task.id;
    const url = `${this.urlAPI}/tasks/${id}`
    return this.http.put<TaskDTO>(url, task)
  };

};
