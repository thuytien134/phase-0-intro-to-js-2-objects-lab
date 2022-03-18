// Write your solution in this file!
const employee = {
    name: "Tom",
    streetAddress: "1305 Edmonton ct"
}
// function updateEmployeeWithKeyAndValue(employee,key,value){
// key = 'Sam',
// value = '11 Broadway'
// return employee
// }
// function updateEmployeeWithKeyAndValue(employee,key,value){
//     employee[key] = value;
//     return employee
// }
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = Object.assign({},employee,{[key]:value});
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee
}
// function deleteFromEmployeeByKey(employee,key){
//     delete employee.key;
//     return employee
// }
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = Object.assign({},employee);
    delete newEmployee[key];
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
return employee
}