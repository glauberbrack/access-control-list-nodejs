import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProductRepository';


class ProductController {

    async store(request: Request, response: Response) {
        const productRepository = getCustomRepository(ProductRepository);

        const { name, description } = request.body;

        const productExists = await productRepository.findOne({ name })

        if(productExists) {
            return response.status(400).json({ error: 'Product already exists.' })
        }

        const product = productRepository.create({
            name,
            description
        });

        await productRepository.save(product);

        return response.status(201).json(product);
    }

    async index(request: Request, response: Response) {
        const productRepository = getCustomRepository(ProductRepository);

        const products = await productRepository.find();

        return response.status(201).json(products);
    }

    async show(request: Request, response: Response) {
        const productRepository = getCustomRepository(ProductRepository);

        const { id } = request.params;

        const product = await productRepository.findOne(id);

        return response.status(201).json(product);
    }
}

export default ProductController;