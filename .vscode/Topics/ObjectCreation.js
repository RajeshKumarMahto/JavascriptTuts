//Using Object literals
var obj1 = {};
obj1.rollno = 1;

var obj2 = {
    Name: 'Rajesh',
    Age: 25,
    sayName: function () {
        alert(`Hi ${this.Name}`)
    }
}

//Using Object Creation
var obj3 = new Object();
obj3.village = "Santhaldih";
obj3.pin = 828401;

console.log(obj1);
console.log(obj2);
console.log(obj3);