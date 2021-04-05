import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dalog-box-on-edit',
  templateUrl: './dalog-box-on-edit.component.html',
  styleUrls: ['../app.component.scss']
})
export class DalogBoxOnEditComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit(): void {
  }

}
