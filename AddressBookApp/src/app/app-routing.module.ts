import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'People', loadChildren: () => import('src/app/people/people.module').then(m => m.PeopleModule) }, 
{ path: 'Job', loadChildren: () => import('src/app/job/job.module').then(m => m.JobModule) }, 
{ path: 'Department', loadChildren: () => import('src/app/department/department.module').then(m => m.DepartmentModule) },
  { path: 'Register', loadChildren: () => import('src/app/register/register.module').then(m => m.RegisterModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
