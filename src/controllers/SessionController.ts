import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import UserRepository from '../repositories/UserRepository';

class SessionController {

    async store(request: Request, response: Response) {
        const { username, password } = request.body;

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(
            { username },
            { relations: ['roles'] }
        )

        if(!user) {
            return response.status(400).json({ error: 'Verify your credentials.' })
        };

        const matchPassword = await compare(password, user.password);

        if(!matchPassword) {
            return response.status(400).json({ error: 'Verify your credentials '});
        };

        const roles = user.roles.map((role) => role.name);

        const token = sign(
            { roles },
            '87b9ee9a5ad501dc7433575162a89e8c', {
            subject: user.id,
            expiresIn: '1d'
        });

        return response.json({
            token,
            user
        });
    }
}

export default SessionController;