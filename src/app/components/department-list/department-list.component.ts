import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  departments = [
    {id: 1, name:'Angular'},
    {id: 2, name:'NodeJs'},
    {id: 3, name:'MongoDB'},
    {id: 4, name:'Ruby'},
    {id: 5, name:'Bootstrap'}
  ];

  ngOnInit(): void {
  }

}
