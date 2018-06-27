#Promise Notes
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

##Chaining:
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

The then function returns a new promise, different from the original:

Important: Always return results, otherwise callbacks won't catch the result of a previous promise.

##Creating a Promise around an old callback API
A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.
