import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:any;
  
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id=this.route.snapshot.paramMap.get('id');
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.departmentId=params.get('id')
    })
  }

  goPrevious(){
    let prevDeptId = parseInt(this.departmentId)-1;
    this.router.navigate(['/departmentDetail', prevDeptId]);
  }

  goNext(){
    let nextDeptId = parseInt(this.departmentId)+1;
    this.router.navigate(['/departmentDetail', nextDeptId]);
  }

  goToDepartments(){
    this.router.navigate(['/departmentList', {id:this.departmentId}])
  }

}
