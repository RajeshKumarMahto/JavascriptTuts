let name ={
    firstname: "Rajesh",
    lastname: "Mahto"
}

let printName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " is from " + hometown + " And state " + state);
}

// let printMyName = printName.bind(name);
// console.log(printMyName);
// printMyName();


Function.prototype.mybind = function (...args) {
    //this --> printName
    let obj = this;
    params = args.slice(1);    
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name, "Dhanbad" );
console.log(printMyName2);
printMyName2("Jharkhand");
