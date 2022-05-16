import React, {useState, useEffect, useContext} from "react";
import { AuthContext } from "../context/Context";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const registerHandler = async () => { //event
        // console.log({...form, [event.target.name]: event.target.value })
        try{
            const data = await request('/api/auth/register', 'POST', {...form}) 
             message(data.message)
        } catch(e) {}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form}) 
             auth.login(data.token, data.userId)
        } catch(e) {}
    }


    return (
            <div className = "row">  
                <div className="col s6 offset-s3">
                    <h1>DAROVA KARTA</h1>
                    <div className="card blue darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Auth</span>
                            <div>

                            <div className="input-field">
                                <input 
                                    placeholder="Введите email" 
                                    id="email" 
                                    type="text"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    placeholder="Введите пароль" 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Пароль</label>
                            </div>

                            </div>
                        </div>
                        <div className="card-action">
                            <button className="btn yellow darken-4"
                            onClick={loginHandler}
                            disabled={loading}>
                                Войти
                                </button>
                            <button className="btn grey lighten-1 black-text" 
                            onClick = {registerHandler}
                            disabled={loading}>
                                Регистрация
                                </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AuthPage