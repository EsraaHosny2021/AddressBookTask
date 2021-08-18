import { PeopleEntity } from './../../Shared/people-entity';
import { PeopleService } from './../../Shared/people.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  
  constructor(public peopleService:PeopleService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

   //save data
   onSubmit(form: NgForm)
   {
     if(this.peopleService.formData.PersonId == 0)
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
     this.peopleService.postPeople().subscribe(
       res  => {
          this.resetForm(form);
          this.peopleService.refreshList();
          this.toastr.success('submitted successfuly','People Details Registered');
       },
       //exception callback arrow function
       err => {console.log(err);}
     );
   }
   updateRecord(form: NgForm)
   {
     this.peopleService.putPeople().subscribe(
     res  => {
       this.resetForm(form);
       this.peopleService.refreshList();
       this.toastr.info('updated successfuly','People Details Registered');
    },
    //exception callback arrow function
    err => {console.log(err);}
   );
   }
   
   //clear data
   resetForm(form: NgForm)
   {
     form.form.reset();
     this.peopleService.formData = new PeopleEntity();
   }
   
   
   
}
