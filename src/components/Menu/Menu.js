import '../../style/menu.css'
import Product from "./Product/Product";



export default function Menu({
  products
}) {


  return (
    <div className="menu">

      {products.map(x => <Product key={x._id} {...x} />)}

      {products.length === 0 && (
        <h3>No products yet</h3>
      )}



    </div>
  )
}