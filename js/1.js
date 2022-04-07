
console.log('hello');

console.warn('warning');

console.error('error');

//console.clear('cleared')

const height = 200;
const weight = 200;

let lName = 'borja';
const lName2 = 'borja';

let x = { fName1: "kenza", lName1: "borja", age1: "21" }
console.log(x)

const a = 7;
const b = 7;
const c = 9;

let d = (a == b);
let e = (b == c);

console.log(d);
console.log(e);

const iceCream = ["vanilla", "mint", "choc", "grape", "cherry"]
console.log(iceCream[4])

//console.log(iceCream[2]+"",iceCream[3])

iceCream.push('lemon')
console.log(iceCream);

let add = 7 + 9;
console.log(add);
let minus = 7 - 9;
console.log(minus);
let mult = 7 * 9;
console.log(mult);
let divide = 7 / 9;
console.log(divide);
let powerof = 3 ** 2;
console.log(powerof);
let remainder = 13 % 2;
console.log(remainder);
//let increment = 1 ++;
//console.log(increment);
//let decreent = 1 --;
//console.log(decreent);

//== equal to 
//== equal types and values a=7 b="7" a==b true a===b false
//not equal !=
//!==
//> bigger than
//< smaller than
//>= bigger that or equal to 
//<= smaller than or equal to

let f = 3
let g = 6
let h = 9


//1) value equal to value plus value
console.log(f == (g + h));


//2) value not equal to value plus value

console.log(g != (h + f));

//3) value equal to value divided value

console.log(f == (h / f));

//4) value equal (value and type) to value

console.log(f === g);

//5) value greater than value

console.log(f > g);

//6) value subtract value less than or equal to value plus value

console.log((h - f) <= (g + f));

//7) value times value greater than value

console.log((g * h) >= h);

let text1 = "my"
let text2 = "name is"
let text3 = "kenza"

console.log(text1 + " " + text2 + " " + text3);

//conversion
let i = String(3.14);
console.log(i);

let j = String(-12.123); //Number
console.log(j);

console.log(i + j);

let k = String(1 + 1);
console.log(k);

let l = String(true);
console.log(l);

let m = String(undefined);
console.log(m);

let n = String(NaN);
console.log(n);

let o = Number('abc')
console.log(o);


let p = Boolean(1); // value or not 
console.log(p);

let q = Boolean(0);
console.log(q);


//coercion 

console.log('12' / 2); //6
console.log('2' * 2); //4
console.log('10' / 2); //5
console.log('10' % 2); //0

console.log('1' + 2 + true);
console.log('12' + undefined);
console.log('12' + null);

console.log(true + 2);
console.log(false + 2);
console.log(20 * true);
console.log(4 / false);

//Example working out Max Heart Rate and Training Zone for a Cardio machine:* /



const athleteAge = 31; // input - take user value
const bodyweight = 100;


// General rules on variables- var:global, const: block scope (unless declare outside {}) and the value inside wil not change
//                             let: block scope (unless declare outside {}) but value can change inside.
//                             variables not preceeded with var, let or const can be used inside a function.
//



function calculateMaxHR() {
    let stageOne = 214 - 0.5 * athleteAge - 0.11 * bodyweight;
    console.log(stageOne);
    return stageOne // display to the user on the frontend
};



//
var cardioZone = 70;
//



function trainingZone() {
    one = calculateMaxHR();
    console.log(one);
    zone = one / 100 * cardioZone;
    console.log(zone)
    return zone; // display to the user on the frontend
};

//

calculateMaxHR();
trainingZone();

// if statements

let onez = 2

if (onez==1){
    console.log("true")
}
else{
    console.log("false")
}

////////
let age = 18;
// age is less than OR equal to 18

if(age<18){
  console.log('You can enter the club!');
}

// == comparison operator, = assignment operator
else if(age==18){
  console.log('permission granted');
}

else{
  console.log("denied!");
};

//////







let Numtwo = 21;

if(Numtwo % 2 == 1){
    console.log("odd");
}
else if(Numtwo % 2 == 0){
    console.log("even");
}
else{
    console.log("NaN")
};
    

let days = 3
switch(days){

    case 1: console.log("Monday")
    break;
    
    case 2: console.log("Tuesday")
    break;

    case 3: console.log("Wednesday")
    break;

    case 4: console.log("Thursday")
    break;

    case 5: console.log("Friday")
    break;

    case 6: console.log("Saturday")
    break;

    case 7: console.log("Sunday")
    break;

    default: console.log("NaN")
    break;
};

//index of 

str1 = "this is a string";

console.log(str1.indexOf('i'));

console.log(str1.lastIndexOf('i'));

console.log(str1.slice(2,6));

console.log(str1.substr(2,6));

console.log('line 22', str1.substring(5,16), 'cat');

