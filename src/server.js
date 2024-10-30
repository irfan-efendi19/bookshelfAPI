const http = require("http");
const booksRoutes = require("./routes");

// eslint-disable-next-line no-undef
const PORT = process.env.APP_PORT || 9000;

const server = http.createServer((req, res) => {
  booksRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
