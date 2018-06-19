function foo(num){
    console.log('Foo: ' + num);

    //Keep track of how many times `foo` is called.
    //NOTE: this is actually `foo` now, base on
    //how `foo` is called (see bellow);
    this.count++;
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++){
    if(i > 5)
        foo.call(foo, i);
}

console.log(foo.count);