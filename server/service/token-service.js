import jwt from 'jsonwebtoken';
import modelToken from '../models/token-model.js';

class TokenService {
  generateTokens(payload) {
    const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return { accessToken, refreshToken };
  }

  validateAccessToken(token) {
    try {
      const { JWT_ACCESS_SECRET } = process.env;
      const userData = jwt.verify(token, JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const { JWT_REFRESH_SECRET } = process.env;
      const userData = jwt.verify(token, JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    // CHECK TOKEN OF USER/ THIS ALOWS ONLY 1 USER AND LOGIN DEVICE AT ONCE
    const persistedToken = await modelToken.findOne({ user: userId });

    if (persistedToken) {
      persistedToken.refreshToken = refreshToken;
      return persistedToken.save();
    }

    const token = await modelToken.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await modelToken.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await modelToken.findOne({ refreshToken });
    return tokenData;
  }
}

export default new TokenService();

// const TokenSchema = new Schema({
//   user: { type: Schema.Types.ObjectId, ref: 'User' },
//   refreshToken: { type: String, required: true },
// });
