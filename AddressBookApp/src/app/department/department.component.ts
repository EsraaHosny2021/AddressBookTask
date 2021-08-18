import { DepartmentEntity } from './../Shared/department-entity';
import { DepartmentService } from './../Shared/department.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/Shared/excel.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(public departmentService: DepartmentService,
    private toastr:ToastrService,private excelService:ExcelService) { }

  ngOnInit(): void {
    this.departmentService.refreshList();
    alert("well");
  }

//update data
populateForm(selectedRecord: DepartmentEntity)
{
  //this.service.formData = Object.assign({},selectedRecord);
  console.log(selectedRecord);
  this.departmentService.formData = selectedRecord;
}
//delete data
onDelete(id: number)
{
  console.log(id);
  if(confirm("Are you sure to delete this record")){
  this.departmentService.deleteDepartment(id)
  .subscribe(
    res => {
      this.departmentService.refreshList();
      this.toastr.error("Deleted successfuly","Department Data deleted");
    },
    err => {console.log(err);}
  )
}
}
exportAsXLSX():void {
 this.excelService.exportAsExcelFile((this.departmentService.list), 'Department_data');
}


}
