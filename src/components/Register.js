import { Link } from "react-router-dom"


export default function Register() {

    return (

        <div className="register-container">
            <form className="register-form">
                <h2>Create an Account</h2>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
                <button type="submit">Register</button>
                <p>Already have an account?<Link to='/login'>Login here</Link></p>
            </form>
        </div>

    )
}