const connect = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
  stdin.on("data", (key) => {
    
  })
  }

  handleUserInput()
  return stdin;
};