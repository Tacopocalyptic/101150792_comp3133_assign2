import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendAPIService } from '../service/backend-api.service';


@Component({
  selector: 'app-employee-edit',
  imports: [
    MatDatepickerModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule, 
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  updateEmpForm: any
  employee: any

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private backendAPI: BackendAPIService,
  ) {
  }

  ngOnInit(){
    // TODO - get info on employee
    this.route.params.subscribe( params => this.getEmployeeByID(params['id']) );

    this.updateEmpForm = this.formBuilder.group({
      first_name: [this.employee?.first_name, [Validators.required]],
      last_name: [this.employee?.last_name, [Validators.required]],
      email: [this.employee?.email, [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(1000)]],
      date_of_joining: ['', [Validators.required]],
      department: ['', [Validators.required]],
      employee_photo: ['', [Validators.required]],
    })
  }

  getEmployeeByID(id: string){
    console.log(id)
    this.backendAPI.getEmployeeByID(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.employee = response.data.searchEmpById;
      },
      error: (error: any) => {
        console.error(`There was an error: ${JSON.stringify(error)}`)
      },
    })
  }
  updateEmployee(){
    console.log(JSON.stringify(this.employee))
  }
}
