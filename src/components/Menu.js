


export default function Menu() {


    return (
        <div className="menu">
       
        <div className="pizza">
          <div className="pizza-img">
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Pizza 2"/>
          </div>
          <div className="pizza-desc">
            <div className="name-container">
              <h2 className="pizza-title">Pizza 1</h2>
            </div>
            <div className="description-container">
              <p className="pizza-text">Vegetarian pizza with tomato sauce, mozzarella cheese, mushrooms, onions, and bell peppers.</p>
            </div>
          </div>
          <div className="button-container">
            <button className="details">Details</button>
            <button className="edit">Edit</button>
          </div>
        </div>
        <div className="pizza">
          <div className="pizza-img">
            <img src="https://images8.alphacoders.com/369/369063.jpg" alt="Pizza 3"/>
          </div>
          <div className="pizza-desc">
            <div className="name-container">
              <h2 className="pizza-title">Pizza 2</h2>
            </div>
            <div className="description-container">
              <p className="pizza-text">Meat lover's pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bacon.</p>
            </div>
          </div>
          <div className="button-container">
            <button className="details">Details</button>
            <button className="edit">Edit</button>
          </div>
        </div>
        <div className="pizza">
          <div className="pizza-img">
            <img src="https://images7.alphacoders.com/596/596343.jpg" alt="Pizza 4"/>
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
            <button className="details">Details</button>
            <button className="edit">Edit</button>
          </div>
        </div>
      </div>
      
    )
}