import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
import errorHandler from "./middlewares/error.handler.middleware";
import authorizationRoute from "./routes/athourization.route";
import bearerAuthenticationMiddleware from "./middlewares/bearer.authentication.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(usersRoute);
app.use(authorizationRoute);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Port ok!");
});
