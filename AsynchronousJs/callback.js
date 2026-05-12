// . **Callbacks**: A function passed as an argument to another function that 
//     will be executed once the asynchronous task is complete.
//     **Example**:
//     However, callbacks can lead to **callback hell** when
//      multiple asynchronous operations are chained, making the code difficult 
//      to read and maintain.
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}
fetchData(() => console.log("Callback executed after fetching data."));

// fetchData()
//     ↓
// setTimeout starts
//     ↓ (1 second later)
// "Data fetched"
//     ↓
// callback()
//     ↓
// "Callback executed after fetching data."


//| Concept           |         Meaning                     |
// | ----------------- | --------------------------- |
// | Callback Function | Function passed as argument |
// | Asynchronous Code | Runs later without blocking |
// | `setTimeout()`    | Delays execution            |
// | Arrow Function    | Short function syntax       |
