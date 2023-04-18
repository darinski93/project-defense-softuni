import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import '../../style/edit.css'
import { useForm } from "../../hooks/useForm"

import { useService } from "../../hooks/useService"
import { productServiceFactory } from "../../services/productServices"
import { useProductContext } from "../../contexts/ProductContext"


export default function EditPizza() {

    const onProductEditSubmit = useProductContext()
    const { productId } = useParams()
    const productService = useService(productServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        imageUrl: '',
        description: '',
        weight: '',
        allergens: '',
        preptime: '',

    }, onProductEditSubmit)

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                changeValues(result)
            })
    }, [productId])

    return (
        <div className="menu-edit">
            <div className="pizza-edit">
                <form className="edit-form" onSubmit={onSubmit} method="POST">
                    <label className="pizza-img-edit">Image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <div className="pizza-desc-edit">
                        <div className="name-container-edit">
                            <label htmlFor="pizza-title-edit">Pizza Name:</label>
                            <input
                                type="text"
                                id="pizza-title"
                                name="name"
                                value={values.name}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="description-container-edit">
                            <label htmlFor="pizza-text-edit">Pizza Description:</label>
                            <input
                                type="text"
                                id="pizza-text-edit"
                                name="description"
                                value={values.description}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="description-container-edit">
                            <label htmlFor="pizza-text-edit">Weight:</label>
                            <input
                                type="text"
                                id="pizza-text-edit"
                                name="weight"
                                value={values.weight}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="description-container-edit">
                            <label htmlFor="pizza-text-edit">Preptime:</label>
                            <input
                                type="text"
                                id="pizza-text-edit"
                                name="preptime"
                                value={values.preptime}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="description-container-edit">
                            <label htmlFor="pizza-text-edit">Allergens:</label>
                            <input
                                type="text"
                                id="pizza-text-edit"
                                name="allergens"
                                value={values.allergens}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="button-container-edit">
                        <button className="save-edit">Save</button>
                        <Link to='/menu' className="cancel-edit">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}