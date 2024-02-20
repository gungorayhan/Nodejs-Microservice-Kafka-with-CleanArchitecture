import { ICatalogRepository } from "../../interface/catalogRepository.interface"
import { CatalogRepository } from "../../repository/catalog.repository"
import { CatalogService } from "../catalog.service"

describe("catalogService", () => {

    let repository: ICatalogRepository


    beforeEach(() => {

        repository = new CatalogRepository();
    })

    afterEach(() => {

        repository = {} as CatalogRepository;

    })

    describe("createProduct", () => {

        test("should create product", async () => {
            const service = new CatalogService(repository);

            const reqBody = {
                name:"Iphone",
                description:"smart phone",
                stock:1000,
                price:5000
            }

            const result = await service.createProduct({});
            expect(result).toMatchObject({
                id:expect.any(Number),
                name:expect.any(String),
                description:expect.any(String),
                price:expect.any(Number),
                stock:expect.any(Number)
            })
        })

        test("should throw error with product already exist", () => {

        })
    })
})