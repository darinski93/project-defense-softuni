import '../../style/login.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';


const LoginFormKeys = {

    Email: 'email',
    Password: 'password'

}

export default function Login() {

    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit)
    return (
        <>

            <div className="login-container">
                <form className="login-form" onSubmit={onSubmit} method='POST' >
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                        autoComplete="off"
                    />
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