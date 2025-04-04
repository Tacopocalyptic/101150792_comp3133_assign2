import {User} from '../models/userModel.js'
import {Employee} from '../models/employeeModel.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {DateTimeScalar} from "graphql-date-scalars"
const SECRET = process.env.SECRET || "Secret"

export const resolvers = {
    Date: DateTimeScalar,

    Query: {
        userLogin: async(parent, args) => {
            const user = await User.findOne({
                $or: [{ username: args.username }, { email: args.username }],
            });
            if (!user) {
                console.log(`USER NOT FOUND`);
                return false
            } else if (!(await bcrypt.compare(args.password, user.password))) {
                console.log("Invalid password")
                return false
            } else {
                const token = generateAccessToken({username: user.username});
                console.log(`valid login, sending jwt`);
                return token
            }
        },
        getEmps: async(parent, args) => {
            // Handles getting all employees or searching employees based on args passed
            let emps
            if (args.searchTerms) {
                emps = await Employee.find({[args.searchTerms.searchBy]: new RegExp(args.searchTerms.searchValue, 'i')})
            } else {
                emps = await Employee.find()
            }
            return emps
        },
        searchEmpById: async(parent, args) => {
            const emp = await Employee.findById(args.id)
            return emp
        }
    },

    Mutation: {
        signUp: async(parent, args, context, info) => {
            const userInfo = {
                username: args.username || args.email.split("@")[0],
                password: await bcrypt.hash(args.password, 12),
                email: args.email,
            }
            // console.log(`original password: ${args.password}`)
            // console.log(`hashed password: ${userInfo.password}`)
            let newUser = new User(userInfo)
            await newUser.save()
            return true
        },
        addEmp: async(parent, args, context, info) => {
            const emp = new Employee(args.employee)
            await emp.save()
            return emp
        },
        updateEmp: async(parent, args, context, info) => {
            const emp = await Employee.findByIdAndUpdate(args.id, args.employee, {new: true, type: "change"});
            console.log(`Employee with ID ${args.id} Updated`)
            emp.save()
            return emp
        },
        deleteEmp: async(parent, args, context, info) => {
            const emp = await Employee.findByIdAndDelete(args.id);
            console.log(`Deleted employee: ${emp}`)
            return emp ? true : false
        }
    }
}

// JWT functions
function generateAccessToken(username) {
    return jwt.sign(username, SECRET, { expiresIn: "1800" });
}
function verifyJWT(username, token) {
    // TODO - JWT verification for use before employee modifications
}