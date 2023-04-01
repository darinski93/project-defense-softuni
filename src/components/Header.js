import { Link } from "react-router-dom"



export default function Header() {

	return (
		<div className="tm-top-header">
			<div className="container">
				<div className="tm-top-header-inner">
					<div className="tm-logo-container">
						<img src="img/logo.png" alt="Logo" className="tm-site-logo" />
						<h1 className="tm-site-name">Pizza Grazie Italia</h1>
					</div>
					<nav className="tm-nav">
						<ul>
							<li><Link to='/home'>Home</Link></li>
							<li><Link to='/menu'> Menu</Link></li>
							<li><a href="/delivery">Delivery</a></li>
							<li><Link to='/login'>Login</Link></li>
							<li><Link to="/register">Register</Link></li>
						</ul>
					</nav>

				</div>
			</div>
		</div>
	)
}