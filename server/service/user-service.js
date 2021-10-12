import bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import UserModel from '../models/user-model.js';
import emailService from './email-service.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-error.js';

class UserService {
  async registration(email, password) {
    try {
      const candidate = await UserModel.findOne({ email }); // check if user exists

      if (candidate) {
        throw ApiError.BadRequest(`User with mail ${email} already exists`);
      }

      const { API_URL } = process.env;
      const bcryptedPass = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4(); // will be sent to registeree mail
      const activationUri = `${API_URL}/api/activate/${activationLink}`;
      const user = await UserModel.create({
        // saving to DB
        email,
        password: bcryptedPass,
        activationLink,
      });

      await emailService.sendActivationMail(email, activationUri);

      const userDto = new UserDto(user); // { id, email, isActivated }
      const tokens = tokenService.generateTokens({ ...userDto }); // access & refresh tokens
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
    } catch (error) {
      // throw ApiError.UnauthorizedError(error.message);
      throw new Error(error.message);
    }
  }

  async activate(activationLink) {
    try {
      const user = await UserModel.findOne({ activationLink });

      if (!user) {
        throw ApiError.BadRequest('This account already in use');
      }

      user.isActivated = true;

      await user.save();
    } catch (error) {
      console.log(`Error: `, error.message);
    }
  }

  async login(email, password) {
    try {
      const user = await UserModel.findOne({ email }); // check if user exists

      if (!user) {
        throw ApiError.BadRequest(`User with mail ${email} is not exists`);
      }

      const passwordsAreEquals = await bcrypt.compare(password, user.password);

      if (!passwordsAreEquals) {
        throw ApiError.BadRequest(`Login error`);
      }

      const userDto = new UserDto(user); // { id, email, isActivated }
      const tokens = tokenService.generateTokens({ ...userDto }); // access & refresh tokens
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
    } catch (error) {}
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async refresh(refreshToken) {
    try {
      if (!refreshToken) {
        throw ApiError.UnauthorizedError();
      }

      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenInDB = await tokenService.findToken(refreshToken);

      if (!userData || !tokenInDB) {
        throw ApiError.UnauthorizedError();
      }

      const user = UserModel.findById(userData.id);
      const userDto = new UserDto(user); // { id, email, isActivated }
      const tokens = tokenService.generateTokens({ ...userDto }); // access & refresh tokens
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
    } catch (error) {}
  }

  async getAllusers() {
    const users = await UserModel.find();
    return users;
  }
}

export default new UserService();
