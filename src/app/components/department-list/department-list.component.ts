import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  departments = [
    {id: 1, name:'Angular'},
    {id: 2, name:'NodeJs'},
    {id: 3, name:'MongoDB'},
    {id: 4, name:'Ruby'},
    {id: 5, name:'Bootstrap'}
  ];

  ngOnInit(): void {
  }

  goToSpecificDept(department:any){
    this.router.navigate(['/departmentDetail', department.id])
  }

}
