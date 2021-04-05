import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DalogBoxOnEditComponent } from './dalog-box-on-edit/dalog-box-on-edit.component';
import { DialogBoxOnDeleteComponent } from './dialog-box-on-delete/dialog-box-on-delete.component';

export interface PeriodicElement {
  name: string;
  email: string;
  gender: string;
  address: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Rakesh Roshan',email: 'example@gmail.com',  gender: 'Male', address: 'Pune, Maharashtra ,India'},
  {name: 'Nitin Shinde',email: 'example@gmail.com',  gender:'Male', address: 'Pune, Maharashtra ,India'},
  {name: 'Rakesh Roshan',email: 'example@gmail.com',  gender: 'Male', address: 'Pune, Maharashtra ,India'},
  { name: 'Rakesh Roshan',email: 'example@gmail.com',  gender: 'Male', address: 'Pune, Maharashtra ,India'},
  {name: 'Rakesh Roshan',email: 'example@gmail.com', gender: 'Male', address: 'Pune, Maharashtra ,India'},
  {name: 'Rakesh Roshan',email: 'example@gmail.com',  gender: 'Male', address: 'Pune, Maharashtra ,India'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Assignment';

  displayedColumns: string[] = ['name','email',  'gender', 'address', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  // dialog box on click of edit icon
  openDialogEdit() {
    const dialogRef = this.dialog.open(DalogBoxOnEditComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // dialog box on click of edit delete
  openDialogDelete() {
    const dialogRef = this.dialog.open(DialogBoxOnDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
