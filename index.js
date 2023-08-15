// //variables
// let names='Kritika';
// console.log(names);
// //cannot be a reversed keword
// //should be meaningful
// //cannot start with a number
// //cannot contain space or hypen(-)
// //are case-sensitive

// let firstName='Kritika';
// lastName='Das';
// //constant

// const interestRate=0.3;
// console.log(interestRate);

// //Primitive types
// /* strings
// numbers
// boolean
// undefined
// null*/

// let name ='kritika' //string literal
// let age =30; //number literal
// let isApproved=false; //boolean literal
// let firatName=undefined;//undefined
// let selectedColor=null;//null

// //Dynamic typing
// // javascript is dynamic language 
// // the type of a variable can change at runtime

// // static(statically-typed)-cannot change the type of variable at runtime

// // on console
// // check its type
// // typeof name
// // name -1;
// // typeof name
// // number

// let selectedColours=['red','blue'];
// selectedColours[2]='green';
// console.log(selectedColours);
// function greet(name,lastName){
//     console.log('hello'+name+''+lastName)
// }
// //calculating a value
// function square(number){
//     return number*number;
// }
// let number=square(2);
// console.log(number);
// // operators

// // arithmetic
// // assignment
// // comparision
// // logical
// // bitwise
// let x=10;
// let y=3;
// // console.log(x+y);
// // console.log(x-y);
// // console.log(x*y);
// // console.log(x**y);

// // Incremet(++)
// console.log(x++);
// console.log(++x);
// // decrement
// console.log(x--);
// console.log(--x);
// // assignment operator
// let z=10;

// z=z+1
// z+=5;
// // comparision operator
// let  x1=1;
// console.log(x1>0);
// console.log(x1<1);
// console.log(x1<=1);
// //EQUALITY
//  console.log(x===1);
//  console.log(x!==1);
//  //EUQLITY OPERATOR

//  //strict equality(type+value)
//  console.log(1===1);//true
//  console.log('1'===1);//false
//  //loose equality (value)
//   console.log(1==1);//true
//   console.log('1'==1);//true
//   console.log(true===1);//truee
// //TERNARY OPERATOR
// // if a customer has more than 100 points,
// // they are a 'gold'customer,otherwise
// // they are a 'silver' customer.

// let points=110;
// let type= points>100 ?'gold':'silver';
// let type1= points>200 ?'gold':'silver';

// console.log(type);
// console.log(type1);
// // logical operators
// // lofical AND(&&)
// console.log(true&&true);//true
// console.log(false&&true);//false
// // TRUE WHEN BOTH ARE TRUE

// let highIncome=true;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome && goodCreditScore;
// console.log(eligibleForLoan); //true
// // logical or(||)
// // returns TRUE if one of the operands is TRUE
// let highIncome1=false;
// let goodCreditScore1=true;
// let eligibleForLoan1=highIncome1 && goodCreditScore1;
// console.log('Eligible',eligibleForLoan1); //true
// // NOT (!)
// let applicationRefused=!eligibleForLoan;
// console.log('Application Refused',applicationRefused); //false
// // Logical Operators with Non-Booleans
 
// // false|| true
// //true
// // false||'Kritika'
// // "Kritika"
// // false||1
// // 1

// //Falsy(false)
// //undefined
// //null
// // ''
// // NaN
// //Anything that is not Falsy-> Truthy
// // false||1||2
// // 1
// let userColour='red';
// let defaultColour='blue';
// let currentColour=userColour||defaultColour;
// console.log(currentColour);
// // if userColour ='undefined';
// // then it shows blue output
// // Bitwise Operators
// // 1=0000001
// // 2=0000010
// // 3 =0000011
// //R=00000000
// // read,write,execute
// // if read only 1 write and write execute
// // 00000100
// // read and write
// // 00000111
// // if all permission
// //   00000111
// console.log(1|2); //Bitsise OR
// console.log(1&2);// BITWISE AND

// const readPermission=4;
// const writePermission=2;
// const executePermission=1;
// let myPermission=0;
// myPermission=myPermission| readPermission|writePermission;
// console.log(myPermission);

// let message=(myPermission & readPermission)?'yes':'no'; 
// console.log(message);
// // Oprator Precedence
// let x3=(2+3)*4;
// console.log(x3);
// // Exercise-Swapping Variables
// let a= 'red';
// let b='blue';
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);
// // if-else conditional statements
// // Hour
// // if the hour is between 6 am and 12pm :good morning!
// // it it is between 12pm and 6pm: good afternoon!
// // otherwise:good evening!
// let hour=10;
// if(hour>=6&& hour<12){
//     console.log('Good Morning!');
// }
// else if(hour>=12&& hour<18){
//     console.log("Good Afternoon!");
// }
// else{
//     console.log("Good Evening");
// }

// // switch case
// let role='guest';
// switch(role){
//     case'guest':
//     console.log('guest user');
//     break;
//     case 'moderator':
//         console.log('Moderator user');
//         break;
//         default:
//             console.log('unknown user');
// }
// if(role==='guest')
// console.log('Guest');
// else if(role==='moderator')
// console.log('Moderator');
// else console.log('unknown user');

// // // For
// //  for(let i =0;i<5;i++){
// //     console.log('hello world',i);
// //  }
// // //  while
// // let i=0;
// // while(i<=5){
// //     if(i%2!==0)
// //     console.log(i);
// // i++;
// // }

// // do-while
// let i=0;
// do{
//    if(i%2 !==0)
//    console.log(i);
// i++;

// }
// while(i<=5);
// // infinite loop
// // let i=0;
// // while(i<5){
// //     console.log(i);
// // }
// // while(true){

// // }

// // for in
// //iterate over properties of an object
// const person={
//     name:'kritika',
//     age:30
// };
// for(let key in person){
//     console.log(key,person[key]);
// }
// // // dot notation
// // person.name
// // // bracket notation
// // person['name']

// const colors=['red','green','blue'];
// for(let index in colors)
// console.log(index,colors[index]);


// // for-of
// for(let color of colors)
// console.log(color);
// //iterate over elements ot items in an array

// // break and continue
// // let i=0;
// // while(i<=10){
// //     // if(i===5) break;
// //     if(i%2===0){
// //     continue;}
// //     console.log(i);
// //     i++;

// // }

// // write a function that takes two numbers and returns the maximum of the two
// let numbers= max(1,2);
// console.log(numbers);
// function max(a,b){
//     if(a>b)
//     return a;
// // else return b;
// return (a>b)?a:b;
// }
// //  landscape or portrait
//  console.log(isLandscape(300,600))
// function isLandscape(width,height){
// return(width>height);
// }
// // FizzBuzz
// // divisible by 3 => fizz
// // divisible by 5=> buzz
// // divisible by both => FizzBuzz
// // not divisible by 3 or 5 =>input
// // not a number=> 'Not a Number'
// const output=fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input){
// if(typeof input !== 'number'){
//     return 'Not a Number';
    
// }
// if((input%3 ===0)&& (input%5===0))
// return 'FizzBuzz';
// if(input%3===0)
// return 'Fizz';
// if(input%5===0)
// return'Buzz';

// return input;
// }

// // speeed limit=70
// // 5->1 point
// // Math.floor(1.4)
// // 12 points->suspended
// checkSpeed(50);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit) {
//         console.log('Ok');
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);

//         if (points >= 12) {
//             console.log('License suspended');
//         } else {
//             console.log('Points:', points);
//         }
//     }
// }

// // Even odd numbers
// showNumbers(10);
// function showNumbers(limit){
//     for(let i=0;i<=limit;i++){
//         const message=(i%2===0)?'EVEN' : 'ODD'
//         console.log(i,message);
//     }
// }
// // Count Truthy
// const array=[0,null,' ',2,3];
// console.log(countTruthy(array));
// function countTruthy(array){
//     let count=0;
//     for(let value of array)
//     if(value)
//     count++;
// return count;
// }
// // String properties
// const movie={
//     title:'a',
//     releaseYear:2018,
//     rating:4.5,
//     director:'b'
// };

// showProperties(movie);
// function showProperties(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string') //obj[key] is used to get value of object present in the key
//         console.log(key,obj[key]);
//     }
// }
// // objects Basics
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();

// // Factory Functions
// function createCircle(radius) {
//     const circle = {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     }; 
//     return circle; // You need to return the created circle object
// }

// const circle1 = createCircle(1);
// console.log(circle1); 

// const circle2 = createCircle(3);
// console.log(circle2); 

// // Constructor function
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }
// const circle3=new Circle(1);

// // dynamic nature of objects
//  const circles={
//     radius:1
//  };

//  circles.color='yellow';
//  circles.draw=function(){}
//  delete circles.color;
//  delete circles.draw;
//  console.log(circles);

//  write on console
// another.constructor
// circle.constructor

// new String();
// new Boolean();

// Constructor function syntax
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// Circle.call({},1);
// Circle.apply({},[1,2,3]);
// const another=new Circle(1);
// write circle in ths console tab
 
// value vs Reference
// value types             reference types
// numbner                    Object    
// String                     function
// boolean                    Arrray
// Symbol
// undefined
// null

// let x=10;
// let y=x;
// x=20;
// change it to reference types
// let x={value:10} ;
// let y=x;
// x.value=20;
// primitives are copied  by their values 
// Objects are copied by their references

// let number=10;
// function increase(number){
//     number ++;}
//     increase(number);
//     console.log(number);

//     // op-10

//     let obj={value:10};
//     function increase(obj){
//         obj.value++;
//     }
//     increase(obj);
//     console.log(obj);
    // op-11

// an object is not iterable
// const circle={
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }
// };
// for(let key in circle)
// console.log(key,circle[key]);
// for(let key of Object.keys(circle))
// console.log(key);
// for(let entry of Object.entries(circle))
// console.log(entry);
//  if('radius'in circle) console.log('yes');

//  Cloning an Object
// const circle={
//     radius: 1,
//     draw(){
//         console.log('draw');
//     }
// };
// const another1={};
// for(let key in circle)
// another[key]=circle[key];

// another['radius']=circle[key];
// console.log(another);
// console...another.draw()
// other method
// const another1=Object.assign({
//     color:'yellow'
// },circle);

// other prosser is using spread method ...
// const another1={... circle};
// console.log(another1);

// no need of garbage collection
// garbage collector =variables or constants that are no longer used and then
//  deallocate the memory that was allocated to them earlier

// math
// search javascript math

// string
// string primitive
// const message='this is my \'first message';//if we use dot notation 
// it wraps into an object
// string object
// in console white ... message.length
// message[0]   op-"t"
// message[1]   op- "h"
//  message.includes('my')
// message.endsWith('e)
// message.replace('first','second')
// message
// messahe.toUpperCase()
// message.trim() ....op-removes before and after white space
// const another=new String('hi');

// escape notation

//  \n,\' etc

// template literals
// const name1 = 'kritika';
// const message = 'HI'+name1+' ,\n';
// const another = `Hi ${name1},


// thank you for joining my mailing list.


// Regards,
// Kritika`;

// Date
// const now=new Date();
// const date1=new Date('mAY 11 2018 09:00');
// const date2=new Date(2018,4,11,9);

// now.setFullYear(2017);
// console... now.toDateString()

// Address Object
// street
// city
// zipcode
// showAddress(address)
// let address={
//     street:'a',
//     city:'b',
//     zipCode:'c'

// };

// function showAddress(address){
//     for(let key in 9street,city,zipcodeaddress)
//     console.log(key,address[key]);
// }

// showAddress(address);

// factory and constructor function
// factory function
// let address=createAddress('a','b','c');
// console.log(address);
// function createAddress(street,city,zipCode){
//     return{
//         street,
//         city,
//         zipCode};
    
// }
// constructor function
// let address=new Address('a','b','c');
// console.log(address);
// function Address(street,city,zipCode){
//     this.street=street;
//     this.city=city;
//     this.zipCode=zipCode;
// }
// // object equality
// let address1=new Address('a','b','c');
// let address2=new Address('a','b','c');
// let address3=address1;
// console.log( areEqual(address1,address2) );
// console.log(areSame(address1,address2));
// console.log(areSame(address1,address3));

// function Address(street,city,zipCode){
//     this.street=street;
//     this.city=city;
//     this.zipCode=zipCode;
// }

// function areEqual(address1, address2){
//     return address1.street=== address2.street &&
//     address1.city===address2.city &&
//     address1.zipCode===address2.zipCode;

// }

// function areSame(address1,address2){
//     return address1===address2;
// }
// two different objects in memory
// individual properties are equal
// address1 and address3 pointing to the same

// blog post object

// let post={
//     title:'a',
//     body:'b',
//     author:'c',
//     views:10,
//     comments:[
//         {author:'a',body:'b'},
//         {author:'a',body:'b'},

//     ],
//     isLive: true
// };
// console.log(post);

// constructor function
// let post=new Post('a','b','c');
// console.log(post);
// function Post(title,body,author){
//     this.title=title;
//      this.body=body;
//      this.author=author;
//      this.view=0;
//      this.comments=[];
//      this.isLive=false;
// }

// Price range objects

// let priceRanges=[
//     {label:'$',tooltip:'Inexpensive',minPerPerson:0,maxPerPerson:10},
//     {label:'$$',tooltip:'Moderate',minPerPerson:11,maxPerPerson:20},
//     {label:'$$$',tooltip:'Expensive',minPerPerson:21,maxPerPerson:50},

// ];
// let resturants=[
//     {
//         averagePerPerson:5
//     }
// ]

// //  arrays
// // Adding Elements
// const numbers=[3,4];
// // End
// numbers.push(5,6);
// // Beginning
// numbers.unshift(1,2);

// // Middle
// numbers.splice(2,0,'a','b');
// // start index ,how many numbers to delete,what to add
// consnsole.log(numbers);
// // finding elements(primitives)
// const numbers=[1,2,3,4];
// console.log(numbers.indexOf(1)); 
// console.log(numbers.indexOf(1,2)); 

// console.log(numbers.indexOf('a')); 

// // lastIndexOf
// console.log(numbers.lastIndexOf(1)); 

// // check if number is present
// console.log(numbers.indexOf(1) !==-1)

// // or can use9
// console.log(numbers.includes(1));


// Finding Elements(Reference types)
// const courses=[
//     {id:1, name:'a'},
//     {id:2, name:'b'},
// ];
// const course=courses.find(function(course){
//     return course.name==='xyz';
// });
// console.log(courses);
// find() method returns the value of the first element ins the array that
//  that saties fies the provided testing function.
// otherwuse undefined is returned.

//  use findIndex to get the index
// // arrow functions
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(course => course.name === 'a');
// console.log(course); // Logging the found course, not the entire courses array

// removing elements 
// const numbers=[1,2,3,4];
// end
// const last=numbers.pop();
// console.log(numbers);
// console.log(last);
// Beginning
// const first =numbers.shift();
// console.log(first);
// middle
// numbers.splice(2,1);
// console.log(numbers);

// emptying an array
// let numbers=[1,2,3,4];
// let another=numbers;
// // solution 1
// // numbers=[];//dont delete it from the memory if any references are present
// // console.log(numbers);

// // // solution 2
// // numbers.length=0;
// // console.log(numbers);
// // console.log(another);

// // solution 3
// // numbers.splice(0,numbers.length);

// // solution 4
// while(numbers.length>0)
// numbers.pop();

// console.log(numbers);
// console.log(Another);

// combining and slicing

// const first=[1,2,3];
//  const second=[4,5,6];
//  const combined=first.concat(second);
//  console.log(combined);

//  const slice=combined.slice(2,4);
//  console.log(combined);
//  console.log(slice);

// spread operator
// const first=[1,2,3];
// const second=[4,5,6];

// combined=[...first,'a',...second];
// // const copy=combined.slice();
// const copy=[...combined]


// // Iterating an Array
// const numbers=[1,2,3];
// for(let number of numbers)
// console.log(number);

// // foreach method

// numbers.forEach(function(number){
//     console.log(number);
// });
// // can also use
// numbers.forEach(number=> console.log(number));
// numbers.forEach((number,index)=> console.log(index,number));

// const numbers=[1,2,3];
// const joined=numbers.join(',');
// console.log(joined);

// const message='This is my first message';
// const parts=message.split(' ');
// console.log(parts);

// const combined=parts.join('-');
// console.log(combined);

// Sorting Arrays
//   const numbers=[2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// for objects
// const courses=[
//     {
//         id: 1, name:'Node.js'},
//         {id:2,name:'Javascript'

//     }
// ];

// courses.sort(function(a,b){
// const nameA=a.name.toUpperCase();
// const nameB=b.name.toUpperCase();

//     if(a.name<b.name) return -1;
//     if(a.name>b.name) retur -1;
//     return 0;
// });

// console.log(courses);



// Testing the elements of an array
// const numbers = [1, 2, 3];
// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });

// console.log(allPositive);

// Filtering an Array
// const numbers= [1,-1,2,3];

// const filtered=numbers.filter(function(value){
//     return value>=0;
// });
// console.log(filtered);

// Mapping an array
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(n=>n>=0);
// const items =filtered.map(n=>'<li>'+n+'<li>'+n+'<li>');
// const html='<ul>'+items.join('')+'</ul>';
// console.log(html);

// mapping a object
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(n=>n>=0);
// const items =filtered.map(n=>{return{value:n};
// });
// console.log(items);


// Reducing an array
// const numbers=[1,-1,2,3];
// let sum=0;
// for (let n of numbers)
// sum +=n;
// console.log(sum);


// // how below function works
// // a=0,c=1=> a=1
// // a=0,c=-1=> a=0
// // a=0,c=2=> a=2
// // a=2,c=3=>a=5
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },0);
// console.log(sum);


// Array from range
// const numbers=arrayFromRange(1,4);
// console.log(numbers);
// function arrayFromRange(min,max){
//     const output=[];
//     for(let i=min;i<=max;i++){
//         output.push(i);
//         return output;
//     }
// }

// op-[1,2,3,4]

// Includes
// const numbers=[1,2,3,4];
// console.log(includes(numbers,1));
// function includes(array,searchElement){
//     for(let element of array)
//     if(element=== searchElement)
//     return true;
// return false;
// }

// exercise- Except

// const numbers=[1,2,3,4,1,1,1];
// const output=except(numbers,[1,2]);
// console.log(output);
// // removes element 1 and 2

// function except(array,excluded){
//     const output=[];
//     for(let element of array)
//     if(!excluded.includes(element));
//     return output;
// }

// Moving an element
// const numbers=[1,2,3,4];
// const output=move(numbers,0,1);
// console.log(output);//[4,1,2,3]

// function move(array,index,offset){
// const position=index+offset;
// if(position>=array.length || position<0){
//     console.error('Invalid offset.');
//     return;
// }
// const outpot=[...array];
// const element=output.splice(index,1)[0];
// output.splice(position,0,element);
// return output;
// }

// count occurrences
const numbers=[1,2,3,4,1 ];
const count=countOccurrences(numbers,-1);
console.log(count);
function countOccurrences(array,searchElement){
//     let count=0;
//     for(let element of array)
//     if(element===searchElement)
//     count++;

return array.reduce((accumulator,current)=>{
    const occurrence=(current===searchElement)? 1: 0;
    console.log(accumulator,current,searchElement);
    return accumulator+occurrence;
},0);
 return count;
}