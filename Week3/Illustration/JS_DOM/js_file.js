

// Functions

// 1- Define the Functions

// a) named function

function myfunc(){
  alert("This is called from a Named Function") ;
  var name = prompt("Enter your name: ") ;
  alert("Welcome " + name + " !");
  alert(`Welcome ${name} !`);
}

// b) Anonymous Functions --> a function that has no name
// - Assign into a variable
// Function Expression
var myfunc2 = function(){
  alert("This is called from an Anonymous Function") ;
  var name = prompt("Enter your name: ") ;
  console.log(name);
  console.log(typeof(name));
  alert("Welcome " + name + " !");
  alert(`Welcome ${name} !`);
}

//  Hint:
// isNaN(Number("Ahmed"))
// true
// isNaN(Number("100"))
// false

function sumTwo(){
  var n1 = prompt("Enter your Number1: ") ;//"2"
  var n2 = prompt("Enter your Number2: ") ;// "12"
  // console.log(typeof(n1));
  // if statement
  // logical operators: And &&, OR ||, !=
  if (isNaN(Number(n1)) || isNaN(Number(n2)) ){
    alert("Only numbers allowed.")
  }
  else{
    var res  = Number(n1) + Number(n2) ;
    alert(`Result is ${res}`);
  }
}

// sumTwo();
function confirmName(){
  var name = prompt("Enter your name: ") ;
  // confirm() --> true, false
  // console.log(  typeof(name)  );
  if (name != "") {
    if  (confirm(`Are you ${name}? `)) {
      alert(`Welcome ${name}`);
    }
    else{
      alert("Acess Denied.") ;

    }
  }

  else {
    alert("Acess Denied.")


  }

  }






confirmName() ;



// ===================== Debugging  ====================
// terminal--> JS? [Testing] console/Shell (Browser/Developer Tools)
// print() --> console.log()
// console.log(myfunc2);

// Data types (casting)
//
// var x  = "Ahmed" ;
// // RE-Assign
// x = 200;
// x = 200.2 ;
// // integer/floats --> Number
// x =  true ; // boolean
//
// // Arrays (lists)
//
// x = [10,20,30,30] ;
// // indexing
// // console.log(x[0]) ;
//
// // Key-value Pairs --> Object
//
// x = {
//   name:"Ahmed" ,
//   age:21
// }
// // dot notation
// console.log(x.name);
// console.log(x.age);
//
// // Bracket notation
// // console.log(x["name"]);
// // console.log(x["age"]);
//
// console.log(x);
// console.log(typeof(x));
// // Not a number --> Nan










// 2- calling/running/executing//triggering/invoking the function
// paranthesis for calling
//
// myfunc();
// myfunc2();
