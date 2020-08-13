
function SayHello(){
    for(var i =0 ; i< 5 ; i++){
        console.log(`${i}`);
    }
    console.log(i);
}

function SayHelloWithLet(){
    for(let i =0 ; i< 5 ; i++){
        console.log(`${i}`);
    }
   // console.log(i);
}


SayHello();
SayHelloWithLet();

// Objects in ES6 JS

const person = {
    name: 'Mosh',
    walk: function(){
            return {
                  street: "Test",
                  city: "Houston",
                  state: "Tx"  
            }
    },
    talk() {},
    address: {
        street: "Test",
        city: "Houston",
        state: "Tx"  
    }
};

person.walk();
person['name'] = 'Test';

const targetMember = 'name';
person[targetMember] = 'John';

console.log(JSON.stringify(person));

//this keyword 


const anotherPerson = {
    name: "Mosh",
    walk() {
        console.log(this);
    }
}
// this is current object in above case
anotherPerson.walk();

//this is window object... when called outside the object. standalone object.. reference to global object...
const walk = person.walk;

console.log(walk);

walk();



// Binding this...

// In JS functions are objects...
//bind  binds to the person object
const walk1 = anotherPerson.walk.bind(anotherPerson);
console.log("Binding this");
walk1();




// Arrow functions..

const square = function(number){
    return number * number;
}

const rect = (number) => {
    return number * number;
}

const rhombas = number => number * number;

console.log(rhombas(44));

const jobs = [
    {id:1 , isActive: true},
    {id:2 , isActive: true},
    {id:3 , isActive: false},
];

const activeJobs = jobs.filter(function(job) { return job.isActive;});

const activeJobs1 = jobs.filter(job => job.isActive);

// Arrow functions don't rebind this object
console.log("Binding Arrow Functions");
const personTimeout = {
    talk(){
        setTimeout(function(){
            console.log("this", this);
        },1000);
    }
}
personTimeout.talk();


///// This returns the window object because setTimeout is not bound to the personTimeout object ......


//Old pattern

console.log("Binding Arrow Functions Old way");
const personTimeoutOld = {
    talk(){
        var self = this;
        setTimeout(function(){
            console.log("self", self);
        },1000);
    }
}
personTimeoutOld.talk();

//New pattern..
// Arrow functions don't rebind this keyword
console.log("Binding Arrow Functions New way");
const personTimeoutNew = {
    talk(){
        setTimeout(() => {
            console.log("this", this);
        },1);
    }
}
personTimeoutNew.talk();


//Array.map()

const colors = ['red', 'green', 'blue'];

//Template literal
const items = colors.map(color => `<li> ${color} </li>`);

console.log(items);
console.log(JSON.stringify(items));

//Object destrucuring


const address = {
    street: '',
    city: '',
    country: ''
}

//Object destructuring
const {street, city , country} = address;

//setting a alias
const {street: st} = address;


//spread operator

const first = [1,2,4];

const second = [3,4,5];

const combined = first.concat(second);

//spread operator..
const combinedSpread = [...first, ...second];

const combinedSpread1 = [...first, 33, ...second, 77];


// cloning using spread

const clone = [...first];

// 

const firstobj = {name: 'Mosh'};
const secondobj = {job: 'Instructor'};

const combinedobj = {...firstobj, ...secondobj, location: 'Australia'};

console.log(combinedobj);



/// Classes
const personClass = {
    name: 'Mosh',
    walk() {
        console.log("walk");
    }
};

//const personCls = new PersonCls('Hero');

//personCls.walk();

//Inheritance..




// Modules
import { Teacher } from './teacher';
const t1 = new Teacher("Ms. Mary", "MS");
t1.walk();
t1.teach();

//Named and Default Exports