import { Link } from "react-router-dom"


export default function EditPizza() {


    return (
        <div className="menu-edit">

            <div className="pizza-edit">
                <form className="edit-form">
                    <div className="pizza-img-edit">
                        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Pizza 2" />
                    </div>
                    <div className="pizza-desc-edit">
                        <div className="name-container-edit">
                            <label htmlFor="pizza-title-edit">Pizza Name:</label>
                            <input type="text" id="pizza-title" name="pizza-title" defaultValue="Pizza 1" />
                        </div>
                        <div className="description-container-edit">
                            <label htmlFor="pizza-text-edit">Pizza Description:</label>
                            <textarea id="pizza-text-edit" name="pizza-text" defaultValue="Vegetarian pizza with tomato sauce, mozzarella cheese, mushrooms, onions, and bell peppers."></textarea>
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