import '../../App.css'
import Product from "./Product";



export default function Menu({
  products
}) {


  return (
    <div className="menu">

      {products.map(x => <Product key={x._id} {...x} /> )}

    </div>
  )
}