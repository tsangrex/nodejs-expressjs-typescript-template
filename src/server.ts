import * as express from "express";
import middleware from "./middleware";
import router from "./router";

let app = express(); // Export app for other routes to use
const port = process.env.PORT || 8000;

middleware(app);

app.use("/", router);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
