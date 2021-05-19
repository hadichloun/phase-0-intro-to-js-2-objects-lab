const employee = {
    name: "Hadi",
    streetAddress: "1910 westridge dr " 
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
    
}
