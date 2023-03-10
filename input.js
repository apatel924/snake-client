const connect = require('./client')

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    } 
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");

    }
    if (key === 's') {
      conn.write("Move: down");

    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === 'z') {
      conn.write("Say: Hello!");
    }
  })
}   
  handleUserInput()
  return stdin;
};

module.exports = setupInput;