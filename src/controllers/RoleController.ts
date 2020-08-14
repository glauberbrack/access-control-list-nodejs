import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import RoleRepository from '../repositories/RoleRepository';
import PermissionRepository from '../repositories/PermissionRepository';


class RoleController {

    async store(request: Request, response: Response) {
        const roleRepository = getCustomRepository(RoleRepository);
        const permissionRepository = getCustomRepository(PermissionRepository)

        const { name, description, permissions } = request.body;

        const roleExists = await roleRepository.findOne({ name })

        if(roleExists) {
            return response.status(400).json({ error: 'Role already exists.' })
        }

        const permissionsExists = await permissionRepository.findByIds(permissions)


        const role = roleRepository.create({
            name,
            description,
            permission: permissionsExists
        });

        await roleRepository.save(role);

        return response.status(201).json(role);
    }
}

export default RoleController;