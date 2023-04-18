

import '../../style/create.css'

import { useProductContext } from '../../contexts/ProductContext'
import { useForm } from '../../hooks/useForm'



export default function CreatePizza() {

    const { onCreateProductSubmit } = useProductContext()

    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        description: '',
        imageUrl: '',
        allergens: '',
        weight: '',
   

    }, onCreateProductSubmit)

    return (
        <div className="form-container-create">
            <form className="pizza-form" onSubmit={onSubmit} method='POST'>
                <h2 className="form-heading">New Pizza</h2>
                <div className="form-input">
                    <label htmlFor="pizza-name" className="form-label">Pizza Name</label>
                    <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-description" className="form-label">Pizza Description</label>
                    <textarea value={values.description} onChange={changeHandler} id="description" name="description" rows="4" className="form-textarea" required></textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-image" className="form-label">Pizza Image</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" className="form-text-input" placeholder="Enter image URL" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-allergens" className="form-label">Allergens</label>
                    <input value={values.allergens} onChange={changeHandler} type="text" id="allergens" name="allergens" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label htmlFor="pizza-weight" className="form-label">Weight</label>
                    <input value={values.weight} onChange={changeHandler} type="text" id="weight" name="weight" className="form-text-input" required />
                </div>
               
                <div className="form-submit-button-container">
                    <input type="submit" value="Аdd Pizza" className="form-submit-button" />
                </div>
            </form>
        </div>
    )
}