const readline = require("node:readline");

/**
 * guess game
 */

const rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

const num = Math.floor(Math.random() * 10) + 1;

console.log("guess a number between 1-10 ? type 'exit' to end playing !!! ");

const start = () => {
  rl.question("> Enter number: ", async (userInput) => {
    if (userInput.toLocaleLowerCase() === "exit") {
      rl.close();
      return;
    }

    if (Number(userInput) === num) {
      console.log(`Win num is ${num}`);
      rl.close();
      return;
    } else {
      start();
    }
  });
};

start();

/**
 * Readline
 *
 */

// const rl = readline.createInterface({
//   output: process.stdout,
//   input: process.stdin,
// });

// rl.question("You: ", async (input) => {
//   console.log(input);
//   rl.close();
// });

/**
 *
 * looping readline
 *
 */

// const rl = readline.createInterface({
//   output: process.stdout,
//   input: process.stdin,
// });

// const start = () => {
//   rl.question("You :", async (userInput) => {
//     if (userInput.toLocaleLowerCase() === "exit") {
//       rl.close();
//       return;
//     }

//     console.log("> " + userInput);
//     start();
//   });
// };

// start();
