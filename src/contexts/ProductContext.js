import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom'
import { productServiceFactory } from '../services/productServices'



export const ProductContext = createContext()


export const ProductProvider = ({
    children
}) => {


    useEffect(() => {
        productServices.getAll()
            .then(setProducts)
            .catch(err => {
                console.log('Error' + err);
            })
    }, [])

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    const productServices = productServiceFactory()


    const onCreateProductSubmit = async (data) => {

        const newProduct = await productServices.create(data)
        setProducts(state => [...state, newProduct])
        navigate('/menu')

    }

    const onProductEditSubmit = async (values) => {
        const result = await productServices.edit(values._id, values);

        setProducts(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/menu/${values._id}`);
    }

    const getProduct = (productId) => {
        return products.find(product => product._id === productId)
        
    }

    const deleteProduct = (productId) =>{
        setProducts(state => state.filter(product=> product._id !== productId))
    }

    const contextValues = {
        products,
        onCreateProductSubmit,
        onProductEditSubmit,
        deleteProduct,
        getProduct,
        

    }

    return (

        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext)

    return context
}