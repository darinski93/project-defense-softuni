import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import '../../style/details.css'

import {productServiceFactory}from '../../services/productServices'
import { useService } from "../../hooks/useService"

export default function DetailsPizza() {

    const { productId } = useParams()
    const [item, setItem] = useState({})

    const productServices = useService(productServiceFactory)

    useEffect(() => {

        productServices.getOne(productId)
            .then(result =>{
                setItem(result)
            })
            .catch(err => {
                console.log('Error' + err);
            })
    }, [productId])


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
                            <div className="prep-container">
                                <p className="pizza-text-details">{item.preptime} min.</p>
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="allergens-container">
                                <p className="pizza-text-allergens">{item.allergens} min.</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-container-details">
                        <Link to='/edit' className="edit-details">Edit</Link>
                        <Link to='/' className="delete-details">Delete</Link>
                    </div>
                </form>
            </div>
        </div>




    )
}