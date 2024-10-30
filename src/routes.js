const url = require("url");
const booksHandler = require("./handler");

// Route Books
const routes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathParts = parsedUrl.pathname.split("/");
  const id = pathParts.length > 2 ? pathParts[2] : null;

  req.query = parsedUrl.query;

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (method === "GET" && parsedUrl.pathname === "/books")
    booksHandler.index(req, res);
  else if (method === "GET" && id) booksHandler.show(id, res);
  else if (method === "POST" && parsedUrl.pathname === "/books")
    booksHandler.store(req, res);
  else if (method === "PUT" && id) booksHandler.update(id, req, res);
  else if (method === "DELETE" && id) booksHandler.delete(id, res);
  else {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(
      JSON.stringify({
        status: "fail",
        message: "Halaman tidak ditemukan",
      })
    );
  }
};

module.exports = routes;
