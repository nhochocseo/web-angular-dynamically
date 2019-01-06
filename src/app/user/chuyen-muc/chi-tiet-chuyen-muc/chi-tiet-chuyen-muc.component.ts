import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { dataPost } from 'src/app/services/dataFace/newpost.service';

@Component({
  selector: 'app-chi-tiet-chuyen-muc',
  templateUrl: './chi-tiet-chuyen-muc.component.html',
  styleUrls: ['./chi-tiet-chuyen-muc.component.scss']
})
export class ChiTietChuyenMucComponent implements OnInit , OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  chiTietChuyenMuc: any;
  baiVienLienQuan: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private helperFunction: HelperFunction,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['chuoiTieuDe']) {
        const id = this.helperFunction.getIdUrl(params['chuoiTieuDe']);
        if (id) {
          this.GetPostById(id);
          this.BaiVietLienQuan(id);
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }

  GetPostById(id: number) {
    this.chiTietChuyenMuc = dataPost.find(res => res.id == id);
    this.helperFunction.setTitle(this.chiTietChuyenMuc.name);
  }
  BaiVietLienQuan(id: number) {
    this.baiVienLienQuan = dataPost.filter(res => {
      return res.id != id && res.idCategory == this.chiTietChuyenMuc.idCategory;
    });
    console.log(this.baiVienLienQuan);
  }
  ChiTiet(data: any) {
    this.router.navigate(['/', this.helperFunction.change_alias(data.name) + '_' + data.id]);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
