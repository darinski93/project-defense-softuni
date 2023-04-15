

import { useState } from 'react'
import '../../style/create.css'



export default function CreatePizza({
    onCreateProductSubmit
}) {

    const [values, setValues] = useState({
        name: '',
        description: '',
        imageUrl: '',
        allergens: '',
        weight: '',
        preptime: ''

    })

    const onChangeHandler = (e) => {

        setValues(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const onSubmit = (e) => {
        e.preventDefault()
        onCreateProductSubmit(values)
    }

    return (
        <div className="form-container-create">
            <form className="pizza-form" onSubmit={onSubmit}>
                <h2 className="form-heading">Create New Pizza</h2>
                <div className="form-input">
                    <label htmlFor="pizza-name" className="form-label">Pizza Name</label>
                    <input value={values.title} onChange={onChangeHandler} type="text" id="name" name="name" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-description" className="form-label">Pizza Description</label>
                    <textarea value={values.description} onChange={onChangeHandler} id="description" name="description" rows="4" className="form-textarea" required></textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-image" className="form-label">Pizza Image</label>
                    <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" className="form-text-input" placeholder="Enter image URL" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-allergens" className="form-label">Allergens</label>
                    <input value={values.allergens} onChange={onChangeHandler} type="text" id="allergens" name="allergens" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-weight" className="form-label">Weight</label>
                    <input value={values.weight} onChange={onChangeHandler} type="text" id="weight" name="weight" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-preptime" className="form-label">Preptime</label>
                    <input value={values.preptime} onChange={onChangeHandler} type="text" id="preptime" name="preptime" className="form-text-input" required />
                </div>
                <div className="form-submit-button-container">
                    <input type="submit" value="Create Pizza" className="form-submit-button" />
                </div>
            </form>
        </div>
    )
}