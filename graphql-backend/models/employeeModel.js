import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "Email is required"],
        validate(value) {
            return /^\S+@\S+\.\S+$/.test(value)
        },
    },
    gender: {
        type: String,
    },
    designation: {
        type: String,
        required: [true, "Designation is required"],
    },
    salary: {
        type: Number,
        min: 1000,
        required: [true, "Salary is required"]
    },
    date_of_joining: {
        type: Date,
        required: [true, "Date of joining is required"],
    },
    department: {
        type: String,
        required: [true, "Department is required"],
    },
    employee_photo: {
        type: String,
    },
    created_at: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updated_at: {
        type: Date,
        default: () => Date.now(),
    }
})

// Run before each save to DB
employeeSchema.pre('save', function(next) {
    this.updated_at = Date.now()
    next()
})

export const Employee = mongoose.model('Employee', employeeSchema)