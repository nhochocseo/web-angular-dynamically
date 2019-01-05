import { Component, OnInit } from '@angular/core';
import { dataPost } from 'src/app/services/dataFace/newpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuyen-muc',
  templateUrl: './chuyen-muc.component.html',
  styleUrls: ['./chuyen-muc.component.scss']
})
export class ChuyenMucComponent implements OnInit {
  listPost: Array<any>;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.LoadPost();
  }
  LoadPost() {
    this.listPost = dataPost;
  }
  ChiTiet(data: any) {
    console.log(data);
    const str = data.name.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    this.router.navigate(['/chuyen-muc/', str + '_' + data.id]);
  }
}
