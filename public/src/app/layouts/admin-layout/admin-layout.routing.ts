import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TeachersComponent } from '../../teachers/teachers.component';
import { StudentsComponent } from '../../students/students.component';
import { ClassesComponent } from '../../classes/classes.component';
import { ListAllComponent } from '../../list-all/list-all.component';
import { TeacherAssignComponent } from '../../teacher-assign/teacher-assign.component';
import { TeacherAddEditComponent } from '../../teacher-add-edit/teacher-add-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'teachers',       component: TeachersComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: ListAllComponent },
        { path: 'add-edit', component: TeacherAddEditComponent },
        { path: 'assign', component: TeacherAssignComponent },
      ]
    },
    { path: 'students',       component: StudentsComponent },
    { path: 'classes',        component: ClassesComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
