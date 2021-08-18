import { DepartmentEntity } from './department-entity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

    //property form of type PeopleDetails
formData:DepartmentEntity = new DepartmentEntity();
list: DepartmentEntity[] = [];

  constructor(private http: HttpClient) { }

  //get requestz
refreshList()
{
this.http.get(environment.apiURL+'/People').subscribe(data => 
  this.list = data as DepartmentEntity[] 
)
console.log(this.list);
}

//post request
postDepartment()
{
  return this.http.post(environment.apiURL+'/departments',this.formData);
}

 //put request
 putDepartment()
 {
   return this.http.put(`${environment.apiURL+'/departments'}/${this.formData.DepartmentId}`,this.formData);
 }

 //delete request
 deleteDepartment(id: number)
 {
   
   return this.http.delete(`${environment.apiURL+'/departments'}/${id}`);
 }
 
}
