import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
import errorHandler from "./middlewares/error.handler.middleware";
import authorizationRoute from "./routes/athourization.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Port ok!");
});
