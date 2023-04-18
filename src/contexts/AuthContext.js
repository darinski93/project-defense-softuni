import { createContext, useContext } from "react"
import { authServiceFactory } from '../services/authService'
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";



export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {})
    const navigate = useNavigate()

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/menu');
            return Promise.resolve(result);
        } catch (error) {
            console.log('There is a problem');
            return Promise.reject(error);
        }
    }

    const onRegisterSubmit = async (values) => {

        const { confirmPassword, ...registerData } = values

        if (confirmPassword !== registerData.password) {
            return alert('Passwords don\'t match')
        }

        try {

            const result = await authService.register(registerData)
            setAuth(result)
            navigate('/menu')

        } catch (error) {
            console.log('There is a problem');


        }

    }

    const onLogout = async () => {


        await authService.logout()

        setAuth({})
    }



    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,

    }



    return (

        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};