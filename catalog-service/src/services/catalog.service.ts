import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService{

    private _repository:ICatalogRepository

    constructor(repository:ICatalogRepository){

        this._repository=repository

    }

    async createProduct(input:any){
      const result = this._repository.create(input)
      return result;
    }
    updateProduct(input:any){}
    getProducts(limit:number,offset:number){}
    getProduct(id:number){}
    deleteProduct(id:number){}
}