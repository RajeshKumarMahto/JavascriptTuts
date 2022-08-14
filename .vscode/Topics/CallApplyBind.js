var student = {
    firstname : "Rajesh",
    lastname: "Mahto", 
    // fullname: function SayHello() {
    //     console.log("Hi " + this.firstname + " " + this.lastname);
    // }
}

var fullname = function SayHello(studentId, school) {
    console.log("Hi " + this.firstname + " " + this.lastname + ", Id is: " + studentId + ", School: " + school );
}



var teacher = {
    firstname: "Simon",
    lastname: "Cowell",
    // fullname: function () {
    //     console.log("Hi "+ this.firstname +" " + this.lastname);
    // }
}
//call(): Calls/borrow a method of an object, and pass the current object as argument 
// fullname.call(student, 1, "SSVM");
// fullname.call(teacher, 2, "DAV");
//apply(): it is same as call() but in this arguments are passed in array
// fullname.apply(student, [4, "DPS"]);
// fullname.apply(teacher, [5, "sanford"]);

//bind(): it  doesnot involethe methd directly instead it returns the called methd

// console.log(fullname.bind(student)); //returns the complete method

var fullnm = fullname.bind(student);
fullnm(1, "Harward");


