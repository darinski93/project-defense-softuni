import { useContext } from 'react'
import '../../style/register.css'
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'
import { useForm } from '../../hooks/useForm'






export default function Register() {

    const { onRegisterSubmit } = useContext(AuthContext)

    const { values, changeHandler, onSubmit } = useForm({

        email: '',
        password: '',
        confirmPassword: ''


    }, onRegisterSubmit)

    return (
        <div className="register-container">
            <form className="register-form" method='POST' onSubmit={onSubmit}>
                <h2>Create an Account</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler} />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={changeHandler}
                />
                <button className="register-button" type="submit">Register</button>
                <p>Already have an account?<Link to='/login'>Login here</Link></p>
            </form>
        </div>

    )
}