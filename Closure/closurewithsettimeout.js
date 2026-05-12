function delayLog(message, delay) {
  setTimeout(function() {
    console.log(message);
  }, delay); // The callback closes over the message parameter, not the loop variable i.
}

const messages = ['A', 'B', 'C'];
for (var i = 0; i < messages.length; i++) {
  delayLog(messages[i], 1000);
}
// output is A,B,C.

//Even though the loop uses var, there is no problem here because 
// i is not used inside the asynchronous callback. 
// The callback uses message, which is a separate parameter 
// for each function call.