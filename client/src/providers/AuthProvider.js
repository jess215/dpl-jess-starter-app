import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const handleRegister = async (user) => {
        console.log('going to create user in handleRegister:', user)
        try {
            let res = await axios.post('/api/auth', user)
            setUser(res.data.data)
            navigate('/')
        } catch(err) {
            alert('error: Unable to register. Do you have a unique/valid email and is your password greater than 6?')
            console.log(err)
        }
    }
    const handleLogin = async (user) => {
        console.log('going to login user in handleLogin:', user)
        try {
            let res = await axios.post('/api/auth/sign_in', user)
            setUser(res.data.data)
            navigate('/')
        } catch(err) {
            alert('error: Unable to log in. Is the email and password valid?')
            console.log(err)
        }
    } 
    const handleLogout = async () => {
        console.log('going to logout user in handleLogin:')
        try {
            let res = await axios.delete('/api/auth/sign_out')
            setUser(null)
            navigate('/login')
        } catch(err) {
            alert('error: Unable to log out. Did you send the token?')
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleRegister, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider