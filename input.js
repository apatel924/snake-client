const connect = require('./client')

let connection;

const setupInput = function (conn) {
  connection = conn;
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

module.exports = setupInput;