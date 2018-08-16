'use strict'
//Question 1: What will func1() yield? : should yield 'foo-top'
function func1(){
    function foo(){
        return 'foo-top'
    }

    return foo();
}

//Question 2: What will func2() yield? : should yield 'foo-bottom'
function func2(){
    return foo();
    function foo(){
        return 'foo-bottom';
    }
}

//Question 3: What will func3() yield? : should yield 'foo-top'
function func3(){
    var foo = function(){
        return 'foo-top';
    }
    return foo();
}

//Question 4: What will func4() yield?: should yield foo is not a function
function func4(){
    return foo();
    var foo = function(){
        return 'foo-bottom';
    }
}

console.log(func1());
console.log(func2());
console.log(func3());
console.log(func4());