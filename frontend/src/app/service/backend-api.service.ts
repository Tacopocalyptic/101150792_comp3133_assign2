import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {
  private BACKEND_URL: string = "http://localhost:5000/graphql"

  constructor(private http: HttpClient) { }

  // TODO - finish graphql queries
  // Employee functions
  getEmployees(): Observable<any>{
    const query = `
      query Query {
        getEmps {
        _id
        first_name
        last_name
        email
        gender
        designation
        salary
        date_of_joining
        department
        employee_photo
        created_at
        updated_at
      }
    }`
    
    console.log('getting employees')
    return this.http.post(this.BACKEND_URL, {query})
  }
  getEmployeeByID(id: string) {
    const query = `
    query {
      searchEmpById(id: "${id}") {
        _id
        first_name
        last_name
        email
        gender
        designation
        salary
        date_of_joining
        department
        employee_photo
        created_at
        updated_at
      }
    }`

    console.log(`Finding Employee with ID ${id}`)
    return this.http.post(this.BACKEND_URL, {query})
  }
  filterEmployees(searchValue: string, searchFilter: string) {

  }
  addEmployee() {

  }
  editEmployee(employee: any) {

  }
  deleteEmployee(id: string) {

  }

  // User functions
  login(username: string, password: string) {

  }
  signup(username: string, email: string, password: string) {
    
  }
}
