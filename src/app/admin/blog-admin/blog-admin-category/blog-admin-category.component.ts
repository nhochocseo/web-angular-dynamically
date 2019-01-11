import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';

@Component({
  selector: 'app-blog-admin-category',
  templateUrl: './blog-admin-category.component.html',
  styleUrls: ['./blog-admin-category.component.scss']
})
export class BlogAdminCategoryComponent implements OnInit {
  DanhMuc: FormGroup;
  options = [
    {
      id: 1,
      value: 'Value 1'
    },
    {
      id: 2,
      value: 'Value 2'
    },
    {
      id: 3,
      value: 'Value 3'
    },
    {
      id: 4,
      value: 'Value 4'
    },
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private helperFunction: HelperFunction
  ) { }

  ngOnInit() {
    this.DanhMuc = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      parentId: ['', Validators.required]
    });
  }

}
