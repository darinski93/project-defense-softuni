import '../../style/login.css'
import { Link } from "react-router-dom";


export default function Login() {

    return (
        <>

            <div className="login-container">
                <form className="login-form" action="#" method="POST">
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required/>

                            <button className="login-button" type="submit">Login</button>
                        </form>
                        <div className="register-link">
                            <p>Don't have an account yet?</p>
                            <Link to='/register'>Register now</Link>
                        </div>
                    </div>
                </>
                )
}