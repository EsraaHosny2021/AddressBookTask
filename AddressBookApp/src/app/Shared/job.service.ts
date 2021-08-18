import { JobEntity } from './job-entity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    //property form of type PeopleDetails
formData:JobEntity = new JobEntity();
list: JobEntity[] = [];

  constructor(private http: HttpClient) { }

  //get requestz
refreshList()
{
this.http.get(environment.apiURL+'/Jobs').subscribe(data => 
  this.list = data as JobEntity[] 
)
console.log(this.list);
}

//post request
postJob()
{
  return this.http.post(environment.apiURL+'/Jobs',this.formData);
}

 //put request
 putJob()
 {
   return this.http.put(`${environment.apiURL+'/Jobs'}/${this.formData.JobTitleId}`,this.formData);
 }

 //delete request
 deleteJob(id: number)
 {
   
   return this.http.delete(`${environment.apiURL+'/Jobs'}/${id}`);
 }
 
}
