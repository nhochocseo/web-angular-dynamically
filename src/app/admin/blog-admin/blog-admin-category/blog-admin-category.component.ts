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
  listCategorySelect: any;
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
    this.listCategorySelect = this.FormToDataMenu(dataCategory, 0);
    // const res = groupBy(dataCategory, 'parentId');
    // console.log(res);
    // this.listCategory = Object.keys(res).map((key) => ({
    //   id: res[key][0]['id'],
    //   parentId: key,
    //   name: res[key][0]['name'],
    //   url: res[key][0]['url'],
    //   describe: res[key][0]['describe'],
    //   data: res[key]
    // }));
    console.log(this.listCategory);
  }
  EditCategory(cate: any) {
    this.isIdClass = cate.id;
    this.DanhMuc.patchValue(cate);
  }
  OnChange() {
    this.DanhMuc.controls.url.setValue(this.helperFunction.change_alias(this.DanhMuc.controls.name.value));
  }
  FormToDataMenu(data: any, parent_id, newdata = []) {
     data.forEach(cate => {
      if (cate.parentId == parent_id) {
          if (parent_id == 0) {
            newdata.push(cate);
          } else if (newdata) {
    console.log(newdata);
            newdata.forEach(newcate => {
              console.log(cate);
              // console.log(newcate);
              if (parent_id == newcate.id) {
                if (!newcate.child) {
                  newcate.child = [];
                }
                newcate.child.push(cate);
              }
            });
          }
          data = data.filter(item => item.id != cate.id);
          this.FormToDataMenu(data, cate.id, newdata);
        }
     });
    return newdata;
  }

}
