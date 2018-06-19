function foo(num){
    console.log('Foo: ' + num);
    //Keep track of how many times foo is called
    this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
    if(i > 5)
        foo(i);
}

//Foo: 6
//Foo: 7
//Foo: 8
//Foo: 9

//how many times `foo` was called?
console.log( foo.count );

console.dir(foo);
