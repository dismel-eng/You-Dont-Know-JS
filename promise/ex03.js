function doSomething(){
    
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            
            // Succeed half of the time.
            if (Math.random() > .7) {
                resolve("SUCCESS")
            } else {
                reject("FAILURE")
            }

        }, 1000);
    });

    return promise;
}

function doSomethingElse(result){
    console.log(result);
    return Promise.resolve('Do something else result');
}

function doThirdThing(result){
    console.log(result);
    return Promise.resolve('Do third thing result');
}

doSomething()
.then(res => doSomethingElse(res))
.then(newres => doThirdThing(newres))
.then(finalresult => {
    console.log(`Got the final result: ${finalresult}`);
})
.catch(err => console.log(err));
