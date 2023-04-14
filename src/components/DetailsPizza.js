import { Link } from "react-router-dom"


export default function DetailsPizza() {

    return (
        <div class="menu-details">
            <div class="pizza-details">
                <form class="edit-form">
                    <div class="pizza-img-details">
                        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Pizza 2" />
                    </div>
                    <div class="pizza-desc">
                        <div class="name-container">
                            <h2 class="pizza-title-details">Pizza 3</h2>
                        </div>
                        <div class="description-container">
                            <p class="pizza-text">Meat lover's pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon.</p>
                        </div>
                        <div class="details-container">
                            <div class="weight-container">
                                <p class="pizza-text">Weight: 500g</p>
                            </div>
                            

                        </div>
                    </div>
                    <div class="button-container-details">
                        <Link to='/edit' className="edit-details">Edit</Link>
                        <Link to='/' className="delete-details">Delete</Link>
                    </div>
                </form>
            </div>
        </div>




    )
}