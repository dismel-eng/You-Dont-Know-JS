/**
    For regular function invocation, the return value of the function becomes the 
    value of the invocation expression. If the function returns because the interpreter 
    reaches the end, the return value is undefined. If the function returns because the 
    interpreter executes a return, the return value is the value of the expression that 
    follows the return or undefined if the return statement has no value. 

    For function invocation in ECMAScript 3 and nonstrict ECMAScript 5, the invocation context (the this value) is the global object. 
    In strict mode, however, the invocation context is undefined.
    
    Functions written to be invoked as functions do not typically use the this keyword at all.
 */
'use strict'

function printprops(object){
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key + ' : ' + object[key] + '\n')
        }
    }
}

var person = {
    name: 'Menda',
    lastname: 'Capote',
    age: '32',
    sex: 'Male'
}

printprops(person);