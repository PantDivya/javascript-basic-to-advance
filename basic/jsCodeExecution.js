var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}

var square = square(n);
var square4 = square(4);

//hoisting
var x=12;
getName();
console.log(x);
console.log(getName);

function getName(){
    console.log("Hello");
}

//
function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()();