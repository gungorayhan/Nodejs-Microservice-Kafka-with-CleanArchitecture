import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";


export class MockCatalogRepository implements ICatalogRepository{
    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
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