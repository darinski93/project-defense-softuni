import { Link } from "react-router-dom"
import '../../style/header.css'
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"

export default function Header() {

	const { isAuthenticated } = useContext(AuthContext)

	return (
		<div className="tm-top-header">
			<div className="container">
				<div className="tm-top-header-inner">
					<div className="tm-logo-container">
						<img src="img/logo.png" alt="Logo" className="tm-site-logo" />
						<Link to='/' style={{ textDecoration: 'none' }}><h1 className="tm-site-name">Pizza Grazie Italia</h1></Link>
					</div>
					<nav className="tm-nav">
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/menu'> Menu</Link></li>
							{isAuthenticated && (
								<>

									<li><Link to='/create'>Add Product</Link></li>
									<li><Link to='/logout'>Logout</Link></li>

								</>
							)}

							{!isAuthenticated && (
								<>
									<li><Link to='/login'>Login</Link></li>
									<li><Link to='/register'>Register</Link></li>
								</>
							)}


						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}