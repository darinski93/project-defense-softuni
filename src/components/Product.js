import { Link } from "react-router-dom";


export default function Product({
    imageUrl,
    name,
    description,
    allergens,
    _id
}) {


    return (
        <>
               <div className="pizza">
                <div className="pizza-img">
                    <img src="https://images7.alphacoders.com/596/596343.jpg" alt="Pizza 4" />
                </div>
                <div className="pizza-desc">
                    <div className="name-container">
                        <h2 className="pizza-title">Pizza 3</h2>
                    </div>
                    <div className="description-container">
                        <p className="pizza-text">Meat lover's pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon.</p>
                    </div>
                </div>
                <div className="button-container">
                    <Link to='/details' style={{ textDecoration: 'none' }}><h1 className="details">Details</h1></Link>
                    <Link to='/edit' style={{ textDecoration: 'none' }}><h1 className="edit">Edit</h1></Link>
                </div>
                </div>


        </>
    )
}