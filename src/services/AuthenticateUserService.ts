import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '../models/User';

interface Request {
  email: string,
  password: string,
}

interface Response {
  user: User,
  token: string
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { email }})

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const token = sign({}, 'a0ae0be0ae321c14b69c6fc68b18ae7b', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token
    }
  }
}
export default AuthenticateUserService
