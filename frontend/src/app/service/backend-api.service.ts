import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {
  private BACKEND_URL: string = process.env['BACKEND_URL'] || "http://localhost:5000/graphql"

  constructor(private httpClient: HttpClient) { }

  // TOOD - graphql queries
  // Employee functions
  getEmployees() {

  }
  getEmployeeByID() {

  }
  filterEmployees() {

  }
  addEmployee() {

  }
  editEmployee() {

  }
  deleteEmployee() {

  }

  // User functions
  login() {

  }
  signup() {
    
  }
}
