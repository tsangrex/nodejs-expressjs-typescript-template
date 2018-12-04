const bodyParser = require("body-parser");
const expressJWT = require("express-jwt");
const config = require("./config");
console.log(config);
function middleWare(app) {
  app.use(
    bodyParser.urlencoded({
      // Middleware
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(
    expressJWT({
      secret: config.secret
    }).unless({
      path: ["/login"]
    })
  );
  app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("invalid token...");
    }
  });
}

export default middleWare;
