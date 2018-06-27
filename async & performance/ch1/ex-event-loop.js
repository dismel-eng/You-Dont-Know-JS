/** Understanding Event Loop */
/** Stack 
function foo(b){
    var a = 10;
    return a + b + 11;
}

function bar(x){
    var y = 3;
    return foo(x * y);
}

function baz(p){
    var q = 4;
    return bar(q + p);
}

console.log(baz(5)); // returns 42*/

/**Adding Message to the Queue */
// const s = new Date().getSeconds();

// setTimeout(function() {
//     // prints out "5", meaning that the callback is not called 
//     // immediately after 500 milliseconds.
//     console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

// while(true) {

//     if(new Date().getSeconds() - s >= 5) {
//       console.log("Good, looped for 5 seconds");
//       break;
//     }

// }

/** Zero Delays */
(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('this is a msg from call back');
    });
  
    console.log('this is just a message 1');
  
    setTimeout(function cb1() {
      console.log('this is a msg from call back1');
    }, 200);

    console.log('this is just a message 2');
  
    setTimeout(function cb2() {
      console.log('this is a msg from call back2');
    }, 0);

    console.log('this is just a message 3');
  
    setTimeout(function cb3() {
      console.log('this is a msg from call back3');
    }, 100);
  
    console.log('this is the end');
  
})();