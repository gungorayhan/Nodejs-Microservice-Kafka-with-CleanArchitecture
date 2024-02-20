import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";


export class MockCatalogRepository implements ICatalogRepository{
    async create(data: Product): Promise<Product> {
        const mockProdcut = {
            id:123,
            ...data
        } as Product

        return Promise.resolve(mockProdcut);
    }
    update(data: Product): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): void {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }

}