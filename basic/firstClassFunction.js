//Function Statement OR Function Declaration
function a(){
    console.log("a called");
}

//Function Expression

var b = function(){
    console.log("b called");
}
a();
b();
//xyz(); // this will give refrenece error(xyz() is not defined)

//Anoymous Function: It can be used when we assign the function as a value. 

//function () {

//}

//Named Function Expression

var b = function xyz(){
    console.log("b called");
}

//Difference between Parameters & Arguments?

function c(param1, param2){ // parameters
    console.log("a called");
}
c(1,2); //arguments

//First Class Function
//:: function can be passed in another function as arguments
var b = function(param1){
    console.log(param1);
}
function xyz(){

}
b(xyz);
b(function(){});

//Arrow Functions