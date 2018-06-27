var userlist = [
    new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user 1 deleted!"); // Yay! Everything went well!
          }, 400);
    }),
    new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user 2 deleted!"); // Yay! Everything went well!
          }, 400);
    }),
    new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user 3 deleted!"); // Yay! Everything went well!
          }, 400);
    }),
    new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user 4 deleted!"); // Yay! Everything went well!
          }, 400);
    }),
    new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user 5 deleted!"); // Yay! Everything went well!
          }, 400);
    })
]

Promise.all(userlist)
.then(function(userlis){
    userlis.forEach(function(msg){
        console.log(msg);
    })
})