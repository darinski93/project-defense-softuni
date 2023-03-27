export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Pizza Grazie<br /><small>Italia</small></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Delivery</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Login</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}