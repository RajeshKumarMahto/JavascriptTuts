//Functions statements : haviong key word function
a();

function a(){
    console.log("a called");
}

// Function Expression
b();
var b = function() {
  console.log("b called");
}
//Major diff between Function statment and Fucntions Expression is hoisting

//Function Declaration == Function statements

//Anonyms Functions
// function (params) {
    
// }

// Named Function Expression
var c = function xyz() {
    console.log("c called");
}

c() // c callled
xyz()// Referenced Error: syz is not defined.

//Paramters and Arguments : the local variables in fucntion decalration is Parameters and the variables used while calling
// the functions are arguments.

//First Class Functions: The ability of functions to be used as values and assigned it to variable 
//or passed to a fucntions as arguments 
//or returned from another functions

//First Class Citizens : Firct Class Functions is First Class is first class citizens

//Arrow Functions: the functions created using the => is known as arrow functions