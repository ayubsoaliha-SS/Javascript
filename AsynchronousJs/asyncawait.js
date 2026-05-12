//Async/Await: Built on top of promises, async/await provides a more
//  synchronous-looking syntax for
//  handling asynchronous tasks, making the code easier to read.
async function fetchData() {
    try {
        const result = await new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchData();

//4. **Handling Errors in Async/Await**:
    // - Errors in `async` functions can be caught using `try/catch` blocks or 
    // `.catch()` in promise chains.
    async function fetchData() {
    try {
        const result = await fetch('invalid-url');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}