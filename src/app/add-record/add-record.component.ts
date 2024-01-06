import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {

  myform: FormGroup;

  edcuation: Array<any> = [
    'Matric', 'Inter', 'Diploma', 'B.S.c', 'M.S.c'
  ]

  constructor(private _fb: FormBuilder, 
    private _formService: EmployeeService, 
    private _dialogRef: DialogRef<AddRecordComponent>) {
    this.myform = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      edcuation: '',
      company: '',
      experience: '',
      profession: ''
    });
  }

  formSubmit() {
    if (this.myform.valid) {
      this._formService.addEmployee(this.myform.value).subscribe({
        next: (val: any) => {
          console.log('Form submitted successfully', this.myform.value);
          this._dialogRef.close();
        }, error: (err: any) => {
          console.error(err);
        },
      });
    }
  }


}
