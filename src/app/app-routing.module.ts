import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';

const routes: Routes = [
    {
        path:'',
        redirectTo:'/departmentList',
        // redirectTo:'/departmentList-(relative-navigation-test)',
        pathMatch:'full'
    },
    {
        path: 'departmentList',
        // path: 'departmentList-(relative-navigation-test)',
        component: DepartmentListComponent
    },
    {
        path:'departmentDetail/:id',
        component: DepartmentDetailComponent,
        children:[
            {path:'overview', component:DepartmentOverviewComponent},
            {path:'contact', component:DepartmentContactComponent}
        ]
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