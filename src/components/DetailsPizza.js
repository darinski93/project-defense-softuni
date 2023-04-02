
export default function DetailsPizza() {

    return (
        <div className="menu-details">
            <div className="pizza-details">
                <form className="edit-form">
                    <div className="pizza-img-details">
                        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Pizza 2" />
                    </div>
                    <div className="pizza-desc-details">
                            <div className="name-container-details">
                                <h2 className="pizza-title-details">Pizza 3</h2>
                            </div>
                            <div className="description-container-details">
                                <p className="pizza-text-details">Meat lover's pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon.</p>
                            </div>
                    </div>
                    <div className="button-container-details">
                        <button className="delete-details">Delete</button>
                    </div>
                </form>
            </div>
        
        </div>
    )
}