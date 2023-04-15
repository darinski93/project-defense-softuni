import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../style/details.css'

export default function DetailsPizza({
    products
}) {

    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {

    })

    return (
        <div className="menu-details">
            <div className="pizza-details">
                <form className="edit-form">
                    <div className="pizza-img-details">
                        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Pizza 2" />
                    </div>
                    <div className="pizza-desc">
                        <div className="name-container">
                            <h2 className="pizza-title-details">Pizza 3</h2>
                        </div>
                        <div className="description-container">
                            <p className="pizza-text">Meat lover's pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon.</p>
                        </div>
                        <div className="details-container">
                            <div className="weight-container">
                                <p className="pizza-text">Weight: 500g</p>
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