/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
*/
let friends = ['Blair', 'Kyle', 'Ben', 'Dan', 'Adam', 'Brandon', 'Ryan'],
  friendMatrix = { ...(friends + 'Bryan') };

console.log(friendMatrix);
