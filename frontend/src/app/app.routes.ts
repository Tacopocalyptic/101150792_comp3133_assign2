import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { authGuard } from './guard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', canActivate: [authGuard], component: NavbarComponent, children: [
        { path: 'employees', component: EmployeelistComponent },
        { path: 'employees/add', component: EmployeeAddComponent },
        { path: 'employee/edit/:id', component: EmployeeEditComponent },
        { path: 'employee/:id', component: EmployeeDetailsComponent },
    ] },
];
