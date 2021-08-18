import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleFormComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ]
})
export class PeopleModule { }
