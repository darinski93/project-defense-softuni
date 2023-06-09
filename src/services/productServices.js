import { requestFactory } from "./requester"


const baseUrl = 'http://localhost:3030/data/menu'

export const productServiceFactory = (token) => {

    const request = requestFactory(token)

    const getAll = async () => {

        const result = await request.get(baseUrl)
        const products = Object.values(result)

        return products
    }

    const getOne = async (productId) => {

        const result = await request.get(`${baseUrl}/${productId}`)
        return result
    }

    const create = async (productData) => {

        const result = await request.post(baseUrl, productData)
        return result
    }

    const edit = (producId, data) => request.put(`${baseUrl}/${producId}`, data);
    const deleteProduct = (productId) => request.delete(`${baseUrl}/${productId}`)

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteProduct,
    }

}