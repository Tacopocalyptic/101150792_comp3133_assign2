import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employeelist',
  imports: [MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  searchForm: any
  employees: Employee[] = []
  displayedColumns: string[] = ["name", "designation", "department", "actions"]

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    // TODO - get all employees
    this.searchForm = this.formBuilder.group({
      searchValue: [''],
      searchFilter: ['']
    })
  }

  filter(){

  }
}
