import React, { useState } from 'react'
import { useAuth } from '../context/authContext';


const ResetPassword = () => {

    const { resetPassword } = useAuth()
    const [form, setForm] = useState({ email:'' });
    const [error, setError] = useState();

    const handleSubmit = async e => {
        e.preventDefault()
        if(!form.email) setError('El email es obligatorio')
        try {
            await resetPassword(form.email)
            setError('Te enviamos un email para que recuperes tu contraseña')
        } catch (error) {
            console.log(error.code)
            setError(error.message)
        }
    }

    const handleEmail = ({target: {value}}) => setForm({email: value})

  return (
    <div>
        <h2>Recuperar contraseña</h2>

        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder='Ingrese su email'
            value={form.email}
            onChange={handleEmail}
            required
            />
            <input type="submit" value="Recuperar" />
        </form>
    </div>
  )
}

export default ResetPassword