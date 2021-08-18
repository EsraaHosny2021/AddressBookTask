import { JobEntity } from './../Shared/job-entity';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Shared/job.service';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/Shared/excel.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(public jobService: JobService,
    private toastr:ToastrService,private excelService:ExcelService) { }

  ngOnInit(): void {
    this.jobService.refreshList();
    alert("well");
  }

//update data
populateForm(selectedRecord: JobEntity)
{
  //this.service.formData = Object.assign({},selectedRecord);
  console.log(selectedRecord);
  this.jobService.formData = selectedRecord;
}
//delete data
onDelete(id: number)
{
  console.log(id);
  if(confirm("Are you sure to delete this record")){
  this.jobService.deleteJob(id)
  .subscribe(
    res => {
      this.jobService.refreshList();
      this.toastr.error("Deleted successfuly","job Data deleted");
    },
    err => {console.log(err);}
  )
}
}
exportAsXLSX():void {
 this.excelService.exportAsExcelFile((this.jobService.list), 'Job_data');
}


}
