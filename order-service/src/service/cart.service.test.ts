import * as Repository from "../repository/cart.repository"
import {CartRepositoryType} from "../types/repository.type"
import { CreateCart } from "./cart.service"

describe("cartService",()=>{
    let repo : CartRepositoryType

    beforeEach(()=>{
        repo = Repository.CartRepository
    })

    afterEach(()=>{
        repo={} as CartRepositoryType
    })


    it("should return corrent data while creating cart",async()=>{
        const mockCart ={
            title:"smart phone",
            price: 1200
        }
        jest.spyOn(Repository.CartRepository,"create")
        .mockImplementationOnce(()=> Promise.resolve({
            message: "fake response from create cart repository",
            input: mockCart
        }))

        const res = await CreateCart(mockCart,repo)

        expect(res).toEqual({
            message: "fake response from create cart repository",
            input: mockCart
        })
    })

})