function delayLog(message, delay) {
  setTimeout(function() {
    console.log(message);
  }, delay);
}

const messages = ['A', 'B', 'C'];
for (var i = 0; i < messages.length; i++) {
  delayLog(messages[i], 1000);
}
// output is A,B,C.