import { DepartmentEntity } from './../../Shared/department-entity';
import { DepartmentService } from './../../Shared/department.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  constructor(public departmentService:DepartmentService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
//save data
onSubmit(form: NgForm)
{
  if(this.departmentService.formData.DepartmentId == 0)
  {
    this.insertRecord(form);
  }
  else
  {
    this.updateRecord(form);
  }


}

insertRecord(form: NgForm)
{
  this.departmentService.postDepartment().subscribe(
    res  => {
       this.resetForm(form);
       this.departmentService.refreshList();
       this.toastr.success('submitted successfuly','People Details Registered');
    },
    //exception callback arrow function
    err => {console.log(err);}
  );
}
updateRecord(form: NgForm)
{
  this.departmentService.putDepartment().subscribe(
  res  => {
    this.resetForm(form);
    this.departmentService.refreshList();
    this.toastr.info('updated successfuly','Department Details Registered');
 },
 //exception callback arrow function
 err => {console.log(err);}
);
}

//clear data
resetForm(form: NgForm)
{
  form.form.reset();
  this.departmentService.formData = new DepartmentEntity();
}

}
