import { Outlet, useParams, Navigate } from "react-router-dom"
import { useProductContext } from "../../contexts/ProductContext"
import { useAuthContext } from "../../contexts/AuthContext"


export const ProductOwner = ({
    children
}) => {

    const { productId } = useParams()
    const { getProduct } = useProductContext()
    const {userId} = useAuthContext()

    const currentProduct = getProduct(productId)

    if (currentProduct && currentProduct._ownerId !== userId) {
        return <Navigate to={`/menu/${productId}`} replace />
    }

    return children ? children : <Outlet />
}