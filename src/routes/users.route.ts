import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import bearerAuthenticationMiddleware from "../middlewares/bearer.authentication.middleware";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get(
  "/users",
  bearerAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).json(users);
  }
);

usersRoute.get(
  "/users/:uuid",
  bearerAuthenticationMiddleware,
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
      const uuid = req.params.uuid;
      const user = await userRepository.findById(uuid);
      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      next(error);
    }
  }
);

usersRoute.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const newUser_return = await userRepository.createUser(newUser);

    res.status(StatusCodes.CREATED).json(newUser_return);
  }
);

usersRoute.put(
  "/users/:uuid",
  bearerAuthenticationMiddleware,
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const attUser = req.body;

    attUser.uuid = uuid;

    await userRepository.updateUser(attUser);

    res.status(StatusCodes.OK).send({ message: "UPDATED!" });
  }
);

usersRoute.delete(
  "/users/:uuid",
  bearerAuthenticationMiddleware,
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.deleteUser(uuid);
    res.sendStatus(StatusCodes.OK);
  }
);

export default usersRoute;
