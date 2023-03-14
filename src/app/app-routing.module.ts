import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path:'',
        redirectTo:'/departmentList',
        pathMatch:'full'
    },
    {
        path: 'departmentList',
        component: DepartmentListComponent
    },
    {
        path:'departmentDetail/:id',
        component: DepartmentDetailComponent
    },
    {
        path: 'employeeList',
        component: EmployeeListComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }