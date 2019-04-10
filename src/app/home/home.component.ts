import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-shop',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeAppComponent implements OnInit {
  listMenu: any;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getListMenu();
  }
  getListMenu() {
    this.homeService.getListDanhMuc().subscribe(res => {
      console.log(res);
      this.listMenu = res;
    });
  }
}
