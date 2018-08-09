import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ListAllComponent } from './components/list-all/list-all.component';
import { TeacherAssignComponent } from './components/teacher-assign/teacher-assign.component';
import { TeacherAddEditComponent } from './components/teacher-add-edit/teacher-add-edit.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AdminLayoutComponent } from './components/layout/admin-layout.component';
import { MaterialModule } from './components/meterial-module/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './components/app-component/app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { TeacherService } from './services/teacher.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3M6S2JMScFUbxoZ8zWKqlg5rSfHMzPo0'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TeachersComponent,
    StudentsComponent,
    ClassesComponent,
    ListAllComponent,
    TeacherAssignComponent,
    TeacherAddEditComponent,
    TabsComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
