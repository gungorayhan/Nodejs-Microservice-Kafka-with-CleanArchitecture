import express, { Request, Response, NextFunction } from "express"
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repository/catalog.repository";
import { RequestValidator } from "../utils/requestValidator";
import { CreateProductRequest } from "../dto/product.dto";

const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepository())

router.post('/product', async (req: Request, res: Response, next: NextFunction) => {

    try {
        
    const { errors, input } = await RequestValidator(CreateProductRequest, req.body) // type->schema and body->data

    if(errors) return res.status(400).json(errors);
 
    const data = await catalogService.createProduct(input);

    return res.status(201).json(data)

    } catch (error) {
        const err =  error as Error
        return res.status(500).json(err.message)
    }
})

export default router