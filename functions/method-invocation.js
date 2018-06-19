/**
    A method is nothing more than a JavaScript function that is stored in a property of an object.
    Method invocations differ from function invocations in one important way, however: the invocation context. 
    Property access expressions consist of two parts: an object and a property name. 
    In a method invocation expression the function body can refer to that object by using the keyword this.
 */

 var calculator = {
     operand1: 1,
     operand2: 2,
     add: function(){
         //Note the use of the this keyword to refer to this object.
         this.result = this.operand1 + this.operand2;
     }

 };

 calculator.add();
 console.log(calculator.result);