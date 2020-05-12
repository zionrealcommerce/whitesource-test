import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-general-popup',
  templateUrl: './general-popup.component.html',
  styleUrls: ['./general-popup.component.scss']
})
export class GeneralPopupComponent implements OnInit {

  @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

}
