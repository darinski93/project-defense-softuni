import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import '../../style/details.css'

import { productServiceFactory } from '../../services/productServices'
import { useService } from "../../hooks/useService"
import { AuthContext } from "../../contexts/AuthContext"
import { useProductContext } from "../../contexts/ProductContext"



export default function DetailsPizza() {

    const { userId } = useContext(AuthContext)
    const { productId } = useParams()
    const [item, setItem] = useState({})
    const { deleteProduct } = useProductContext()

    const productServices = useService(productServiceFactory)

    const navigate = useNavigate()

    useEffect(() => {

        productServices.getOne(productId)
            .then(result => {
                setItem(result)
            })
            .catch(err => {
                console.log('Error' + err);
            })
    }, [productId])


    const isOwner = item._ownerId === userId


    const onDeleteClick = async (e) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure, you want to delete ${item.name}?`)

        e.preventDefault(e)
        if (result) {
            await productServices.delete(item._id)
            
            deleteProduct(item._id)

            navigate('/menu')

        }

    }


    return (
        <div className="menu-details">
            <div className="pizza-details">
                <form className="edit-form">
                    <div className="pizza-img-details">
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="pizza-desc">
                        <div className="name-container">
                            <h2 className="pizza-title-details">{item.name}</h2>
                        </div>
                        <div className="description-container">
                            <p className="pizza-text-details">{item.description}</p>
                        </div>
                        <div className="details-container">
                            <div className="weight-container">
                                <p className="pizza-text-details">{item.weight}g</p>
                            </div>
                        </div>
                        
                        <div className="details-container">
                            <div className="allergens-container">
                                <p className="pizza-text-allergens">{item.allergens} min.</p>
                            </div>
                        </div>
                    </div>

                    {isOwner && (
                        <div className="button-container-details">
                            <Link to={`/menu/${item._id}/edit`} className="edit-details">Edit</Link>
                            <button className="delete-details" onClick={onDeleteClick}>Delete</button>
                        </div>
                    )}

                </form>
            </div>
        </div>




    )
}