const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CompanyDB")
   .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("not able to connect to database",err);
    })

const EmpSchema = new mongoose.Schema({
    name:{type: String, required: true},
    description:{type: String},
    payroll:{type:String},
    salary:{type:Number, required: true}
}, {timestamps: true});

const Employee = mongoose.model("Employee", EmpSchema);

// all the employees

async function FindEmployee(){
    const emp = await Employee.find();
    console.log(emp);
}


//sorting employees by salary

async function SortEmployee(){
    const emp = await Employee.find().sort({salary: -1});
    console.log(emp);
}

SortEmployee();

//selecting employees by name if name contains 's'

async function FindEmployeeByName(){
const emp = await Employee.find({name: /.*s.*/});
    console.log(emp);
}

FindEmployeeByName();

//selecting employees by salary if salary is less than 10000 and do nothing

async function findpoorSalary(){
    const emp = await Employee.find()
    .and([{salary: {$lt: 10000}, payroll: 'kuch nhi'}])
    .select('name salary')
    console.log(emp);
}

findpoorSalary();