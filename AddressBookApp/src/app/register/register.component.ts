import { NgForm } from '@angular/forms';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  showSuccessMessage: boolean=false;
  serverErrorMessage: string='';

  constructor(public userService: UserService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    alert("well");
  }


  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        //this.showSuccessMessage = true;
        //setTimeout(() => this.showSuccessMessage = false,2);
        this.resetForm(form);
        this.toastr.success('Registered successfuly');
      },);}
    
      resetForm(form: NgForm)
      {
        this.userService.selectedUser = {
              FirstName:'',
              LastName:'',
              Designation:''
        };
            form.resetForm();
            this.serverErrorMessage='';
      
    }
}


