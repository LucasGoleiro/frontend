import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routine.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/admin/homeScreen/home-admin/home-admin.component';
import { UsersTableComponent } from './components/admin/users/tableUsers/users-table/users-table.component';
import { UserformComponent } from './components/admin/users/newUser/userform/userform.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TasksTableComponent } from './components/admin/tasks/tableTasks/tasks-table/tasks-table.component';
import { TaskFormComponent } from './components/admin/tasks/newTask/task-form/task-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserActiveComponent } from './components/user-home/user-active/user-active.component';
import { UserBacklogComponent } from './components/user-home/user-backlog/user-backlog.component';
import { UserFinishedComponent } from './components/user-home/user-finished/user-finished.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/admin/users/edit-user/edit-user.component';
import { EditTaskComponent } from './components/admin/tasks/edit-task/edit-task.component';
import { UpdateBacklogComponent } from './components/user-home/user-backlog/update-backlog/update-backlog.component';
import { UpdateActiveComponent } from './components/user-home/user-active/update-active/update-active.component';
import { UpdateFinishedComponent } from './components/user-home/user-finished/update-finished/update-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeAdminComponent,
    UsersTableComponent,
    UserformComponent,
    TasksTableComponent,
    TaskFormComponent,
    UserHomeComponent,
    UserActiveComponent,
    UserBacklogComponent,
    UserFinishedComponent,
    EditUserComponent,
    EditTaskComponent,
    UpdateBacklogComponent,
    UpdateActiveComponent,
    UpdateFinishedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
