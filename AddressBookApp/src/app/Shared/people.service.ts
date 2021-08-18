import { environment } from './../../environments/environment';
import { PeopleEntity } from './people-entity';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  //property form of type PeopleDetails
formData:PeopleEntity = new PeopleEntity();
list: PeopleEntity[] = [];

  constructor(private http: HttpClient) { 

  }
 
  //get requestz
refreshList()
{
this.http.get(environment.apiURL+'/People').subscribe(data => 
  this.list = data as PeopleEntity[] 
)
console.log(this.list);
}

//post request
postPeople()
{
  return this.http.post(environment.apiURL+'/People',this.formData);
}

 //put request
 putPeople()
 {
   return this.http.put(`${environment.apiURL+'/People'}/${this.formData.PersonId}`,this.formData);
 }

 //delete request
 deletePeople(id: number)
 {
   
   return this.http.delete(`${environment.apiURL+'/People'}/${id}`);
 }
 
}
