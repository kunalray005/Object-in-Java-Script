// Object using obj literal
let obj={name: "Kunal",age: 19,roll_no: 47
};
console.log(obj)

// another example
let Car={name: "Benz",price: 2000000,milage: 50};
console.log(Car);




// Using Object() constructor
let car=new Object();
car.name="TATA";
car.model=2023;
car.engine=2100;
console.log(car);

console.log(Car); 
// to add properties in exsting object Car
Car.avail="All over india";
Car.xyz=8790;
console.log(Car);

// update the value in object Car
Car.milage=202500;
console.log(Car);

// delete from obj Car
delete Car.price;
console.log(Car);


// accesing each item in object using two notation
// dot notation
console.log(Car.name);
// using square notation
console.log(Car["milage"]);


// to check the existence in the object(two notation)
// using "in" operator
console.log("name" in Car);
console.log("Model" in Car);

// using hasOwnProperty method
console.log(Car.hasOwnProperty("milage"));



