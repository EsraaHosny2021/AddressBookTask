import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { JobFormComponent } from './job-form/job-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobComponent,
    JobFormComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    HttpClientModule,
    ToastrModule,
    FormsModule
  ]
})
export class JobModule { }
