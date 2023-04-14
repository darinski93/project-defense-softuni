const baseUrl = 'http://localhost:3030/jsonstore/menu'


export const getAll = async () => {

    const response = await fetch(baseUrl)
    const result = await response.json()
    
    const products = Object.values(result)
    
    return products
}