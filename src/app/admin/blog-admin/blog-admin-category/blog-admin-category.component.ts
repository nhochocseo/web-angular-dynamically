import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { dataCategory } from 'src/app/services/dataFace/category.service';
import { groupBy, chain, get, map, find } from 'lodash';

@Component({
  selector: 'app-blog-admin-category',
  templateUrl: './blog-admin-category.component.html',
  styleUrls: ['./blog-admin-category.component.scss']
})
export class BlogAdminCategoryComponent implements OnInit {
  DanhMuc: FormGroup;
  listCategory: any;
  isIdClass: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private helperFunction: HelperFunction
  ) { }

  ngOnInit() {
    this.getListcategory();
    this.DanhMuc = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      parentId: ['', Validators.required]
    });
  }
  getListcategory() {
    const res = groupBy(dataCategory, 'parentId');
    this.listCategory = Object.keys(res).map(key => ({
      parentId: key,
      data: res[key]
    }));
    console.log(this.listCategory);
  }
  EditCategory(cate: any) {
    this.isIdClass = cate.id;
    this.DanhMuc.patchValue(cate);
  }
  OnChange() {
    this.DanhMuc.controls.url.setValue(this.helperFunction.change_alias(this.DanhMuc.controls.name.value));
  }

}
