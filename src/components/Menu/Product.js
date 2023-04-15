import { Link } from "react-router-dom";


export default function Product({
    imageUrl,
    name,
    description,
    _id
}) {


    return (
        <>
            <div className="pizza">
  <div className="pizza-img">
    <img src={imageUrl} alt={name} />
  </div>
  <div className="name-container">
    <h2 className="pizza-title">{name}</h2>
  </div>
  <div className="pizza-desc">
    <div className="description-container">
      <p className="pizza-text">{description}</p>
    </div>
  </div>
  <div className="button-container">
    <Link to={`/details/${_id}`} style={{ textDecoration: 'none' }}><h1 className="details">Details</h1></Link>
  </div>
</div>

        </>
    )
}