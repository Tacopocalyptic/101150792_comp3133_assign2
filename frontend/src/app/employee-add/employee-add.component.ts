import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  imports: [
    MatDatepickerModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule, 
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  addEmpForm: any

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router
  ) {}

  ngOnInit(){
    this.addEmpForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date_of_joining: ['', [Validators.required]],
      department: ['', [Validators.required]],
      employee_photo: ['', [Validators.required]],
    })
  }

  addEmployee(){

    this.router.navigate(['/','employees'])
  }
}
