import { PeopleEntity } from './../Shared/people-entity';
import { PeopleService } from './../Shared/people.service';
import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Shared/excel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(public peopleService: PeopleService,
    private toastr:ToastrService,private excelService:ExcelService) { }

    
  ngOnInit(): void {
    this.peopleService.refreshList();
    //alert("well");
  }


//update data
populateForm(selectedRecord: PeopleEntity)
{
  //this.service.formData = Object.assign({},selectedRecord);
  console.log(selectedRecord);
  this.peopleService.formData = selectedRecord;
}
//delete data
onDelete(id: number)
{
  console.log(id);
  if(confirm("Are you sure to delete this record")){
  this.peopleService.deletePeople(id)
  .subscribe(
    res => {
      this.peopleService.refreshList();
      this.toastr.error("Deleted successfuly","People Data deleted");
    },
    err => {console.log(err);}
  )
}
}
exportAsXLSX():void {
 this.excelService.exportAsExcelFile((this.peopleService.list), 'People_data');
}


}
