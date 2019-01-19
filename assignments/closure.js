// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function giveFeedback () {
  const name = 'Moe';
  console.log(`Hey ${name}`);

function anotherFeedback () {
  const something = 'There is something I want to tell you :'
  console.log(`Hey ${name} ${something}`);

  function lastFeedback () {
     const somethingNice = 'You\'re Awesome!';
     console.log (`Hey ${name} ${something} ${somethingNice}`)

  }
  lastFeedback();
}
  anotherFeedback();
}
  giveFeedback();

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let x = 0;
  return function (){
      x = x + 1;
       return x;
  }
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
return{
  increment :function (){
    return ++count;
  },
  decrement :function (){
    return --count;
  }
}
const newCount = counterFactory();
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.decrement());
console.log(newCount.decrement());
console.log(newCount.decrement());
};
