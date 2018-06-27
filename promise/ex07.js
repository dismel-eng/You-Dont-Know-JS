var p2 = new Promise(function(resolve, reject) {
    resolve(1);
  });
  
  p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
  }).then(function(value) {
    console.log(value + ' - This synchronous usage is virtually pointless'); // 2- This synchronous usage is virtually pointless
  });
  
  p2.then(function(value) {
    console.log(value); // 1
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 2
    return value + 1;

  })
  .then(function(value) {
    console.log(value); // 3
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 4
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 5
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 6
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 7
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 8
    return value + 1;
  })
  .then(function(value) {
    console.log(value); // 9
    return value + 1;
  })
