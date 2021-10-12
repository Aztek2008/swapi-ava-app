import userService from '../service/user-service.js';
import { validationResult } from 'express-validator';
import ApiError from '../exceptions/api-error.js';

class UserController {
  async registration(req, res, next) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return next(
          ApiError.BadRequest('Validation error', validationErrors.array())
        );
      }

      const { email, password } = req.body;
      const userData = await userService.registration(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        //secure: true, -> IF USING HTTPS
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(`req body:`, req.body);

      const userData = await userService.login(email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        //secure: true, -> IF USING HTTPS
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);

      res.clearCookie('refreshToken');

      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        //secure: true, -> IF USING HTTPS
      });

      return res.json(refreshToken);
    } catch (error) {
      next(error);
    }
  }

  async getAllusers(req, res, next) {
    try {
      const users = await userService.getAllusers();
      return res.json(users);
    } catch (error) {
      next(error);
      throw new Error(error.message);
    }
  }
}

export default new UserController();
