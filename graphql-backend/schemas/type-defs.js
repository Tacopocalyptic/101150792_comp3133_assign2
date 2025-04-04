import { gql } from "apollo-server-express"

export const typeDefs = gql`
type User {
    _id: ID!
    username: String! # primary key
    email: String! # unique
    password: String!
    created_at: Date
    updated_at: Date
}

type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String! # unique
    gender: Gender
    designation: String!
    salary: Float! # Must be >= 1000
    date_of_joining: Date
    department: String!
    employee_photo: String # Store image name/path
    created_at: Date
    updated_at: Date
}

enum Gender {
    Male
    Female
    Other
}

enum EmpSearchFields {
    department
    designation
}

scalar Date

input EmployeeInput {
    first_name: String!,
    last_name: String!,
    email: String!,
    gender: Gender,
    designation: String!,
    salary: Float!,
    date_of_joining: Date,
    department: String!,
    employee_photo: String
}

input EmployeeUpdateInput {
    first_name: String,
    last_name: String,
    email: String,
    gender: Gender,
    designation: String,
    salary: Float,
    date_of_joining: Date,
    department: String,
    employee_photo: String
}

input SearchTerms {
    searchBy: EmpSearchFields!
    searchValue: String!
}

type Query {
    userLogin(username: String!, password: String!): String
    getEmps(searchTerms: SearchTerms): [Employee]
    searchEmpById(id: ID!): Employee
}

type Mutation {
    signUp(username: String!, password: String!, email: String!): Boolean
    addEmp(employee: EmployeeInput!): Employee
    updateEmp(id: ID!, employee: EmployeeInput!): Employee
    deleteEmp(id: ID!): Boolean
}
`
