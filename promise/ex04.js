function saySomething(msg){
    console.log(msg);
}

const wait = ms => new Promise(resolve => setTimeout(() => {
    var msg = 'Concatenate this message';
    resolve(msg);

}, ms));
wait(1000)
.then((res) => {
    console.log(res);
    saySomething('After 10 seconds');
})
.catch( err => console.log(err));