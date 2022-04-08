import { useContext, useState } from 'react'
import { parsePath, useParams } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

const Register = () => {
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('123456')
    const [name, setName] = useState('user1')
    const auth = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.handleRegister({email, password, name})
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p>Name</p>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <p>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register