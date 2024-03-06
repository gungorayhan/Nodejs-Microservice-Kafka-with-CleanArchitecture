import { CartRepositoryType } from "../types/repository.type";

const createCart = async (input: any): Promise<{}> => {
    //connect to db
    //perform db operations
    return Promise.resolve({
        message: "fake response from create cart repository",
        input
    });
}

const findCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}

const updateCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}

const deleteCart = async (input: any): Promise<{}> => {
    return Promise.resolve({})
}

export const CartRepository: CartRepositoryType = {
    create: createCart,
    find: findCart,
    update: updateCart,
    delete: deleteCart
}