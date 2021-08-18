import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteFrameworkRoutingModule } from './site-framework-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SiteFrameworkRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent
  ]
})
export class SiteFrameworkModule { }
