// This is wrong because the name comes in the second argument
// Hello <path to file>
const nameFromArguments = process.argv[1];

console.log(`Hello ${nameFromArguments}`);

