const { createServer } = require("http"); //nam trong nodejs

const hostname = "127.0.0.1"; //localhost
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Khoa");
}); //render ra noi dung website

server.listen(port, hostname, () => {
  //listen o dau, sever chay o do
  console.log(`Server running at http://${hostname}:${port}/`); //viet callback -> chi chay sau khi server chay thanh cong
});
