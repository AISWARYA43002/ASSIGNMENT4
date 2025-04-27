const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({
    EmployeeName:String,
    EmployeeDesignation:String,
    EmployeeLocation:String,
    EmployeeSalary:Number,
})
const employeeData=mongoose.model("employees",employeeSchema);
module.exports=employeeData;