import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import PermissionRepository from '../repositories/PermissionRepository';


class PermissionController {

    async store(request: Request, response: Response) {
        const permissionRepository = getCustomRepository(PermissionRepository);

        const { name, description } = request.body;

        const permissionExists = await permissionRepository.findOne({ name })

        if(permissionExists) {
            return response.status(400).json({ error: 'Permission already exists.' })
        }

        const permission = permissionRepository.create({
            name,
            description
        });

        await permissionRepository.save(permission);

        return response.status(201).json(permission);
    }
}

export default PermissionController;