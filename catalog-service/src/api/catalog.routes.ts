import express, { Request, Response, NextFunction } from "express"
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repository/catalog.repository";
import { RequestValidator } from "../utils/requestValidator";
import { CreateProductRequest, UpdateProductRequest } from "../dto/product.dto";

const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepository())

router.post('/product', async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { errors, input } = await RequestValidator(CreateProductRequest, req.body) // type->schema and body->data

        if (errors) return res.status(400).json(errors);

        const data = await catalogService.createProduct(input);

        return res.status(201).json(data)

    } catch (error) {
        const err = error as Error
        return res.status(500).json(err.message)
    }
})

router.patch("/product/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { errors, input } = await RequestValidator(UpdateProductRequest, req.body)

        const id = parseInt(req.params.id) || 0

        if (errors) return res.status(400).json(errors)

        const data = await catalogService.updateProduct({id,...input})

        return res.status(200).json(data)
    } catch (error) {
        const err = error as Error
        return res.status(500).json(err.message)
    }


})

router.get("/product",async(req:Request,res:Response,next:NextFunction)=>{
    const limit = Number(req.query["limit"])
    const offset =Number(req.query["offset"])
    try {
        const data = await catalogService.getProducts(limit,offset)
        return res.status(200).json(data);

    } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message)
    }
})

router.get("/product/:id",async(req:Request,res:Response,next:NextFunction)=>{
   const id = Number(req.params.id) || 0
    try {
        const data = await catalogService.getProduct(id)
        return res.status(200).json(data);

    } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message)
    }
})


router.delete("/product/:id",async(req:Request,res:Response,next:NextFunction)=>{
    const id = parseInt(req.params.id) || 0

    try {
        const data = await catalogService.deleteProduct(id);
        return res.status(200).json(data)
    } catch (error) {
        const err = error as Error
        return res.status(500).json(err.message)
    }
})
export default router