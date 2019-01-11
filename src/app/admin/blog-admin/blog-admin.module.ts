import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAdminHomeComponent } from './blog-admin-home/blog-admin-home.component';
import { BlogAdminRoutingModule } from './routing/blog-admin.routing.module';
import { BlogAdminComponent } from './blog-admin.component';

@NgModule({
  declarations: [BlogAdminHomeComponent, BlogAdminComponent],
  imports: [
    CommonModule,
    BlogAdminRoutingModule
  ]
})
export class BlogAdminModule { }
