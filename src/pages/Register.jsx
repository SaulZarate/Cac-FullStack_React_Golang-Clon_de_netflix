import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { errorCodeToMessage } from '../services/firebaseUtils';
import Alert from '../components/Alert';

const initialState = {
  email: '',
  password: ''
}

const Register = () => {

  const [form, setForm] = useState(initialState);
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    try {
      await signup(form.email, form.password)
      navigate('/') // Redireccion al home
    } catch (error) {
      /* Traduciendo los mensajes de firebase */
      //console.log(error.code)
      const message = errorCodeToMessage(error.code, error.message)
      setError(message)
    }
  }

  return (
    <div>
      <h2>Registrarme</h2>
      {error && <Alert message={error}/>}
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
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register