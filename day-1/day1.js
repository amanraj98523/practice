const employees = [
  { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
  {
    id: 2,
    name: "Bob",
    department: "Engineering",
    salary: 80000,
    status: "inactive",
  },
  { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
  {
    id: 4,
    name: "David",
    department: "Engineering",
    salary: 90000,
    status: "active",
  },
  {
    id: 5,
    name: "Eve",
    department: "Marketing",
    salary: 70000,
    status: "active",
  },
];

const departmentBudgets = {
  HR: 150000,
  Engineering: 200000,
  Marketing: 100000,
};

let filterEmploy = employees.filter((emp)=>emp.status="active")
console.log(filterEmploy);



// /*************************************** */
let groupedDep = employees.map((dep=>{
  [{department:dep.department,}]
}))
console.log(groupedDep);
// /****************************************** */

// let sortedEmployee = employees.sort((a,b)=>b.department.localeCompare(a.department));
// console.log(sortedEmployee)

// let combined = employees.map(() => {
//   let combinedAll = employees.filter(
//     (department) => (department.department == employees.department
//   ));

//   let total_salary = employees.reduce((sum, salary) => sum + salary.employee);
//   let calculate = total_salary.filter((department) => department);
// });
// console.log(calculate);


// let isAvailable = departmentBudgets.isinclude(total_salary);

// console.log(isAvailable)



// //question-2***************
// const products = [
//   { id: 1, name: "Laptop", price: 1000, quantity: 5, supplierId: 101 },
//   { id: 2, name: "Phone", price: 500, quantity: 0, supplierId: 102 },
//   { id: 3, name: "Tablet", price: 300, quantity: 10, supplierId: 101 },
//   { id: 4, name: "Monitor", price: 200, quantity: 8, supplierId: 103 }
// ];

// const suppliers = {
//   101: { name: "Tech Corp", contact: "tech@example.com" },
//   102: { name: "Gadget World", contact: "gadget@example.com" },
//   103: { name: "Display Solutions", contact: "display@example.com" }
// };


// let filData = products.filter((quant)=>quant.quantity>0);
// console.log(filData);

// let supplierByPrice = suppliers.map((supplier)=>{
//   let suppliePrice = suppliers.filter((name)=>name.suppliers == name.products);
//   let filData = suppliePrice.sort((a,b)=>(a.price-b.price));
// })

