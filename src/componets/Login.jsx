import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass);
        if(email == "admin" && pass == "admin"){
            window.location.href = '/Home'
        }
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Usuario</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="Jhon Doe" id="email" name="email" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
            </form>
       </div>
    )
}