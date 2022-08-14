function Hi(a,b) {

    console.log(a);

    function Hello() {
        console.log(b);        
    }

    return Hello;
    
}

var x = Hi(1);
x(2);
Hi(1)(2);
