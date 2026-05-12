//  **Promises**: Introduced as an improvement over callbacks,
//  Promises provide a cleaner way to handle asynchronous operations. 
//  They represent the eventual completion (or failure) of an asynchronous task.
//     - **States of a Promise**:
//         - `Pending`: The initial state, when the task is not yet completed.
//         - `Fulfilled`: The task completed successfully.
//         - `Rejected`: The task failed. 

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched");
    }, 1000);
});
fetchData.then(result => console.log(result));

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

//Consuming a Promise
// We use:
// .then()
// .catch()
// .finally()

//.then() → Success Handler
promise.then(result => {
  console.log(result);
}); // Operation successful

//.catch() → Error Handler
promise.catch(error => {
  console.log(error);
});  //Operation failed

// full examples
const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

  //Promise Chaining
  const promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then(num => {
    return num * 2;
  })
  .then(num => {
    return num + 3;
  })
  .then(result => {
    console.log(result); // output 13
  });

  //.finally()
//Runs regardless of success or failure.

Promise.resolve("Success")
  .then(result => {
    console.log(result);
  })
  .finally(() => {
    console.log("Finished");
  });  //  output : Success    Finished


  //Promise.all()
//Runs multiple promises in parallel.
//Succeeds only if ALL succeed.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results);
  }); // [1, 2, 3]