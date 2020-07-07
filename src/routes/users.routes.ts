import { Router } from 'express';

const usersRouter = Router();
usersRouter.post('/', async (request, response) => {
  try {
    return response.json({});
  } catch (error) {
    return response.status(400).json({ message: error.message});
  }
});

export default usersRouter;
