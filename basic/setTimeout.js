function x(){
    //var i = 1;
    
    for(let i=1; i<= 5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i* 1000);
        }
        close(i);
    }
    // setTimeout(function(){
    //     console.log(i);
    // }, 1000);
    console.log("hello world");
}
x();

// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();