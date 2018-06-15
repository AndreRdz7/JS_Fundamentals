//person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Doe');

//customer constructor
function Customer(firstName,lastName,phone,membership){
    Person.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}

//inherit person prototype methods to custormer
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const constumer1 = new Customer('Tom','Smith','555-555-5555','Std');
console.log(constumer1);

//customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName},welcome to our company`;
}

console.log(person1.greeting());
console.log(constumer1.greeting());