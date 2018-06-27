/**
 The problem most developers new to JS seem to have is that later doesn't happen 
 strictly and immediately after now. In other words, tasks that cannot complete now are, 
 by definition, going to complete asynchronously, and thus we will not have blocking 
 behavior as you might intuitively expect or want.

 Consider:
 */
// ajax(..) is some arbitrary Ajax function given by a library
var data = ajax( "http://some.url.1" );

console.log( data );
// Oops! `data` generally won't have the Ajax results

//We make an asynchronous Ajax request now, and we won't get the results back until later.

//The simplest (but definitely not only, or necessarily even best!) way of "waiting" from 
//now until later is to use a function, commonly called a callback function:

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", function myCallbackFunction(data){

	console.log( data ); // Yay, I gots me some `data`!

} );