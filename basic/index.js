//What is call back function in JavaScript?
setTimeout(function(){
    console.log("timer");
}, 5000)
function x(y){
    console.log("x");
    y();
}
x(function y(){ // function y() is here a call back function
        console.log("y");
});

//Javascript is synchronous and single threaded language
//But with the help of Call back functions we can do asynchronous things inside the code

// Blocking the main thread
//js has one call stack also known as main thread
//whatever is executed inside the page is executed through the call stack only

//Power of callbacks

//Deep about event listeners

//Closures demo with event listeners

//Scope demo with event listeners

//Garbage collection and removeEventListeners