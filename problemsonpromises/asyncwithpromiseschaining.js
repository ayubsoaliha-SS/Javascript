async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('Promise 1');
  resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('Script end');

//output
// Script start
// async1 start
// async2
// Promise 1
// Script end
// async1 end
// Promise 2
// setTimeout
