/**
    If a nested function is invoked as a method, its `this` value is the object it was invoked on. 
    If a nested function is invoked as a function then its `this` value will be either the global 
    object (non-strict mode) or undefined (strict mode).

    If you want to access the `this` value of the outer function, you need to store that value into a 
    variable that is in scope for the inner function. It is common to use the variable self for this purpose.
 */

    var obj = {                //An object obj
        m: function(){         //Method m of the object
            var self = this;   //Save the this value in a variable
            console.log(this === obj); //Prints `true` this is the object obj.
            f();

            function f(){                   //A nested function f
                console.log(this === obj)   //`false` this is global or undefined
                console.log(self === obj)   //true self is the outer this value
            }

        }
    }

obj.m(); //invoke the method m on the object obj.