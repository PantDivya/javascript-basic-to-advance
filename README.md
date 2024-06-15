"# javascript-basic-to-advance" 

<h1>Topic: How Javascript works and Execution Context</h1></br>
<h2> "Everything in javascript happens inside the execution context"</h2></br></br>
<h3><b>Execution Context</b></h3></br>
<p><b>Execution Context</b> is like a big box which has two components:</p></br>
<p><b>1. Memory component</b></p></br>
<p>This is the place where all the variables and functions are stored in key value pair.</p></br>
<p>Example: a: 10, fn: {}</p></br>
<p>This component has a word known as variable environment.</p></br>
<p><b>2. Code Component</b></p></br>
This is the place where the code is executed one line at a time.
It is also known an thread of execution.
</br></br>

<h2>"Javascript is a synchronous single-threaded language"</h2></br></br>
<p> Single Threaded:- JS can only execute one command at a time.</p>
<p> Synchronous Single Threaded:- JS can only execute one command at a time in a specific order. i.e. It can go to the other line once it has executed the current line.</p>

What is a temporal dead zone?
It is the time zone from hoisting till the variable is assigned some value.
variable cannot be accessed while in a temporal zone or before it is initialized.

Are let and const decleration hoisted in Js?
yes let and const decleration are hoisted and is in temproal dead zone in time being.

Syntax error vs reference error vs type error

how to avoid temporal Dead zone?
push all the declaration and initailization to top of the code.

<b>About Closure:</b>

Note: Interesting thing about JS:
we can assign a function to variable.
we can return the function out of the function
we can pass a function inside a function as parameter.

What is closures?
A function along with its lexical scope bundled together forms a closure.


Uses of Closures:
-Module Design Pattern
-Currying
-Functions like once
-memoize
-maintaining state in async world
-setTimeouts
-Iterators
-and many more....

Interview preparation questions:
Q.No.1. What a closure in javascript?
-->A function along with its lexical scope bundled together forms a closure.

Q.No.2. What does a method call with double parenthesis means?
Example:
function a(){
    var x = 10;
  return  function b(){
        console.log(x);
    }
}

a()();

-->In this method call, the first parenthesis execute outer function and return the inner function and the second parenthesis call and execute the inner function.

Q.No.3. What the following function form clouser?
Example:
function a(){
 function b(){
        console.log(x);
    }
    var x = 10;
    return b;
}

-->It will still form a closure. The inner function create a closure with its outer environment not in the particular sequence.

Q.No.4. What difference will it make if we change the var to let in above code?
Example:
function a(){
 function b(){
        console.log(x);
    }
    let x = 10;
    return b;
}

--> let is a block scope. but it will not change it will works same.

Q.No.5. What does it return?
example:
function a(y){
 function b(){
        console.log(x,y);
    }
    var x = 10;
    return b;
}

x("hello World");

-->10 "hello World"

Q.No.6. What is first class functions?

--> The ability of functions to be used as values and can be passed AS AN ARGUMENT to another function  and can be returned from the functions is called first class function 