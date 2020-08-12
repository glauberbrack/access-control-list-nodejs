import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

class UserController {

    async store(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);

        const { name, username, password } = request.body;

        const userExists = await userRepository.findOne({ username });

        if(userExists) {
            return response.status(400).json({ message: 'User already exists!'});
        }

        const user = userRepository.create({
            name,
            username,
            password
        });

        await userRepository.save(user);

        return response.status(201).json(user);
    }
}

export default UserController;