const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to the server succesfully")
  });

  conn.on("data", (data) => {
    console.log("Server says", data)
  });

  conn.on("connect", (connect) => {
    console.log("Connected to game server.")
  });

  conn.on("connect", (connect => {
    conn.write("Name: AP")
  }));

  conn.on("connect", (connect => {
    conn.write("Move: Up")
  }));
  
  return conn;
  
};

module.exports = connect;