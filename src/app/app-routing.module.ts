import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';

const routes: Routes = [
    {
        path: 'departmentList',
        component: DepartmentListComponent
    },
    // {
    //     path: 'about',
    //     component: AboutComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }