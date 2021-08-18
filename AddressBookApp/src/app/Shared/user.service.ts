import { environment } from './../../environments/environment';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    FirstName:'',
    LastName:'',
    Designation:''
  }
  constructor(private http: HttpClient) { 

  }
 

//post request
postUser(user: User)
{
  return this.http.post(environment.apiURL+'/Registers',user);
}


}
