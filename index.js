const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(5000);
