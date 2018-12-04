import * as express from "express";
import login from "./login";
import home from "./home";

let router = express.Router();

router.post("/login", login);
router.get("/", home);

export default router;
