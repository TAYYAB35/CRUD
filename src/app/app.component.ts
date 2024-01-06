import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordComponent } from './add-record/add-record.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  constructor(private _dialogue: MatDialog){}

  addRecord(){
    this._dialogue.open(AddRecordComponent)
  }

}
