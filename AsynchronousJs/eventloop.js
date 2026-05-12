console.log("Start");
setTimeout(() => {
  console.log("Timeout callback");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise callback");
});
console.log("End");  
// output
// Start
// End
// Promise callback
// Timeout callback

//**Execution Flow**:
// 1. **“Start”** is logged first as it’s a synchronous operation.
// 2. **setTimeout** schedules its callback in the Web API, but it 
// doesn’t execute immediately (even with `0` milliseconds delay).
// 3. The **promise** is resolved and its callback is pushed to the 
// **microtask queue**.
// 4. **“End”** is logged, completing the synchronous code.
// 5. The **microtask queue** is processed, so the **promise callback** 
// logs **“Promise callback”** before the **setTimeout** callback.
// 6. Finally, the **setTimeout** callback from the callback queue logs
//  **“Timeout callback”**.

// 4. **Handling Errors in Async/Await**:
//     - Errors in `async` functions can be caught using `try/catch` blocks
//      or `.catch()` in promise chains. 
async function fetchData() {
    try {
        const result = await fetch('invalid-url');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}