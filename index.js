const express = require("express");

const PORT = 3000;
const app = express();
app.use(express.json());

const SearchRoute = require("./Routes/SearchMovie.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", SearchRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
