import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { errorCodeToMessage } from '../services/firebaseUtils';
import Alert from '../components/Alert';

const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState();
  const navigate = useNavigate()
  const { login, loginWithGoogle } = useAuth()
  
  const handleChange = ({target: {name, value}}) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await login(form.email, form.password)
      navigate('/') // Redireccion al home
    } catch (error) {
      console.log(error.code)
      const message = errorCodeToMessage(error.code, error.message)
      setError(message)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      // No es necesario porque estoy usando un observer
      navigate('/') 
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <Alert message={error}/> }
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        name="email" 
        id="email"
        placeholder='Ingrese su email'
        onChange={handleChange}
        />
        {/* Password */}
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        placeholder='******'
        onChange={handleChange}
        />
        {/* Submit */}
        <input type="submit" value="Login" />
      </form>

      <Link to="/register">Registrarme</Link>
      <span>    </span>
      <Link to="/resetPassword">Recuperar contraseña</Link>
      <br />
      <button onClick={handleGoogleSignin}>Iniciar sesión con Google</button>
    </div>
  )
}

export default Login