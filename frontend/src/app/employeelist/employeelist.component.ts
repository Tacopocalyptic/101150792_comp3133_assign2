import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BackendAPIService } from '../service/backend-api.service';

@Component({
  selector: 'app-employeelist',
  imports: [
    MatTableModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    ReactiveFormsModule,
    // MatDialogModule
  ],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  searchForm: any
  employees: any
  displayedColumns: string[] = ["name", "designation", "department", "actions"]

  constructor(
    private formBuilder: FormBuilder, 
    private backendAPI: BackendAPIService,
    private dialog: MatDialog
  ) {}

  ngOnInit(){
    this.getAllEmps();

    this.searchForm = this.formBuilder.group({
      searchValue: [''],
      searchFilter: ['']
    })
  }

  getAllEmps(){
    this.backendAPI.getEmployees().subscribe({
      next: (response: any) => {
        // console.log(response);
        this.employees = response.data.getEmps;
      },
      error: (error: any) => {
        console.error(`There was an error: ${JSON.stringify(error)}`)
      },
    })
  }

  filter(){

  }

  deleteEmp(id: string){
    const dialogRef = this.dialog.open(DeleteConfirm)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // TODO - delete from backend if results == true
    });
  }
}

// TODO - troubleshoot why this doesn't open
@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.html',
  imports: [MatDialogModule, MatButtonModule],
})
export class DeleteConfirm {}