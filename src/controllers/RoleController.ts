import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import RoleRepository from '../repositories/RoleRepository';


class RoleController {

    async store(request: Request, response: Response) {
        const roleRepository = getCustomRepository(RoleRepository);

        const { name, description } = request.body;
        console.log(name, description)

        const roleExists = await roleRepository.findOne({ name })

        if(roleExists) {
            return response.status(400).json({ error: 'Role already exists.' })
        }

        const role = roleRepository.create({
            name,
            description
        });

        await roleRepository.save(role);

        return response.status(201).json(role);
    }
}

export default RoleController;