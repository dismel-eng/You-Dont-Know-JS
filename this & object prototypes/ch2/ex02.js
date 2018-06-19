/**
    Type of bindings
 */
//Default Binding

function foo(){
    console.log(this.a);
}

var a = 2;
//This return undefined on the server no matter what. a does not bind to the global object.
foo();