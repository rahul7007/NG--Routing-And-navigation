import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;

  constructor(private router:Router, private route:ActivatedRoute) { }

  departments = [
    {id: 1, name:'Angular'},
    {id: 2, name:'NodeJs'},
    {id: 3, name:'MongoDB'},
    {id: 4, name:'Ruby'},
    {id: 5, name:'Bootstrap'}
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get('id')
    })
  }

  goToSpecificDept(department:any){
    this.router.navigate(['/departmentDetail', department.id])
    // this.router.navigate([department.id], {relativeTo:this.route})
  }

  isSelected(department:any){
    return department.id === parseInt(this.selectedId);
    
  }

}
