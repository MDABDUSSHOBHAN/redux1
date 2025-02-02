

const employee = {
    name:"Mir",
    address:{country:"Bangladesh", city:"Dhaka"},
}

//const employee2 = employee;
// employee2.name =  "shobhan"

const employee2 = {
    ...employee,
    name:"mezba",
    address:{...employee.address,city:"Pabna"}

}


console.log(employee);
console.log(employee2);

//this is function curring
const add = (a) => (b) => a+b;
console.log(add(3)(5));


function addd (a) {
    return function (b){
      return  a+b;
    }
}


console.log(addd(45)(5))

const totalPrice = (discount) => (amount) => amount -  amount*discount;

const withDisc = totalPrice(0.3);
console.log(withDisc(100));
console.log(withDisc(200));
console.log(withDisc(250));