import { app } from "./server.js";
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});
