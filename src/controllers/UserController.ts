import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UserRepository from '../repositories/UserRepository';

class UserController {

    async store(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);

        const { name, username, password } = request.body;

        const userExists = await userRepository.findOne({ username });

        if(userExists) {
            return response.status(400).json({ message: 'User already exists!'});
        }

        const passwordHashed = await hash(password, 8);

        const user = userRepository.create({
            name,
            username,
            password: passwordHashed
        });

        await userRepository.save(user);

        return response.status(201).json(user);
    }
}

export default UserController;