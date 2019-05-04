import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgcard',
  templateUrl: './imgcard.component.html',
  styleUrls: ['./imgcard.component.css']
})
export class ImgcardComponent implements OnInit {
  @Input() imgPath: String;

  constructor() { }

  ngOnInit() {
  }

}
