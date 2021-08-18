import { JobEntity } from './../../Shared/job-entity';
import { JobService } from 'src/app/Shared/job.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  constructor(public jobService:JobService,
    private toastr:ToastrService) { }


  ngOnInit(): void {
  }
//save data
onSubmit(form: NgForm)
{
  if(this.jobService.formData.JobTitleId == 0)
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
  this.jobService.postJob().subscribe(
    res  => {
       this.resetForm(form);
       this.jobService.refreshList();
       this.toastr.success('submitted successfuly','Job Details Registered');
    },
    //exception callback arrow function
    err => {console.log(err);}
  );
}
updateRecord(form: NgForm)
{
  this.jobService.putJob().subscribe(
  res  => {
    this.resetForm(form);
    this.jobService.refreshList();
    this.toastr.info('updated successfuly','Job Details Registered');
 },
 //exception callback arrow function
 err => {console.log(err);}
);
}

//clear data
resetForm(form: NgForm)
{
  form.form.reset();
  this.jobService.formData = new JobEntity();
}

}
