function doSomething(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("It's done");
            //Success half of the time
            if(Math.random() > 0.5){
                resolve('SUCCESS');
            }else{
                reject('FAILURE');
            }
        }, 1000);
    });
}

function SuccessCallback(result){
    console.log("The result was success with " + result);
    return 'Another result';
}

function FailureCallback(error){
    console.log("It failed with " + error);
}

const promise = doSomething();
const promise2 = promise.then(SuccessCallback,FailureCallback);

promise2
.then(function(res){
    console.log(res);
})