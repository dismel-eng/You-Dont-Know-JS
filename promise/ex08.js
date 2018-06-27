Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .then( () => { 
    console.log( 'Not called.' );
  }, reason => {
    console.error( 'onRejected function called: ', reason );
  });