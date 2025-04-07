import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import { BackendAPIService } from '../service/backend-api.service';

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
    private router: Router,
    private backendAPI: BackendAPIService
  ) {}

  ngOnInit(){
    this.addEmpForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(1000)]],
      date_of_joining: ['', [Validators.required]],
      department: ['', [Validators.required]],
      employee_photo: ['', [Validators.required]],
    })
  }

  addEmployee(){
    console.log(this.addEmpForm)

    if(!this.addEmpForm?.valid){
      const newEmp = this.addEmpForm.value
      console.log(newEmp)

      // Backend call here to save emp
      // this.router.navigateByUrl('/employees/')
    }else{
      console.log(`Error adding employee`)
      window.alert("Please double check information is correct")
    }

  }
}
