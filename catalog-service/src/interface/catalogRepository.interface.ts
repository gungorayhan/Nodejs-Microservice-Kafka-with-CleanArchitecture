import { Product } from "../models/product.model";

export interface ICatalogRepository{
    create(data:Product):Promise<Product>;
    update(data:Product):Promise<{}>;
    delete(id:any):void;
    find():Promise<Product[]>;
    findOne(id:number):Promise<Product>

}