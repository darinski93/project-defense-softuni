import * as request from "./requester"


const baseUrl = 'http://localhost:3030/jsonstore/menu'


export const getAll = async () => {

    const result = await request.get(baseUrl)

    const products = Object.values(result)

    return products
}

export const getOne = async (productId) => {

    const response = await fetch(`${baseUrl}/${productId}`)
    const result = await response.json()

    const products = Object.values(result)

    return products
}

export const create = async (productData) => {


    const result = await request.post(baseUrl, productData)


    return result
}