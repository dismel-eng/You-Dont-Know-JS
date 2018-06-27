function doSomethingOldStyle(success, failure){
    console.log("It's done");
    //Success half of the time
    if(Math.random() > 0.5){
        success('SUCCESS');
    }else{
        failure('FAILURE');
    }
}

function SuccessCallback(result){
    console.log("The result was success with " + result);
}

function FailureCallback(error){
    console.log("It failed with " + error);
}

doSomethingOldStyle(SuccessCallback,FailureCallback)

