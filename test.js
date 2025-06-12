var http = require("http");

http
  .createServer(function (req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = url.searchParams;
    const username = params.get("username");
    const password = params.get("password");

    // check if the username and password is admin
    if (username === "admin" && password === "admin") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "success" }));
    } else {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "bobo" }));
    }
  })
  .listen(8000);
