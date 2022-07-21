import './AccountPage.css'
import React, { useState } from "react";
import { useHttp } from '../hooks/http.hook';
import { useMessage } from "../hooks/message.hook";

const Account_page = () => {
    
    const {request} = useHttp()
    const message = useMessage()

    const [form, setForm] = useState({
        phone: '', currency: 'RUB', country: 'Belarus', fname: '', lname: '', //изменить
    })

    const inputChangeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value })
        console.log(form.country, form.fname)
    }


    const handleSubmiter = async (event) => {
        let data = null
        event.preventDefault();
        try{
            data = await request('/api/accounts', 'POST', {...form})
            message(data.message)
        } catch(e) {
            console.log(e.message)
        }
    }

    //Сделать стейт, который будет хранить информацию о том, есть ли IBAN аккаунт, если есть, то загружать его данные + данные о выбранной валюте и т.д, если нет, то обычную страницу
    return(
        <div className="card">
        <div className="card-header">
            Follow some simple steps to activate your account
        </div>
        <div className="card-content">
            <form className='form-content' onSubmit={handleSubmiter}>
                <label className='Name_input'>
                    <input placeholder='Введите имя' id="fname"  type="text" name="fname" className='fname' onChange={inputChangeHandler}></input>
                    <input placeholder='Введите фамилию' id="lname"  type="text" name="lname" className='lname' onChange={inputChangeHandler}></input>
                </label>
                <label className='phoneLabel' htmlFor='phone'>Введите телефонный номер</label>
                <input placeholder='+375 44 555 1906' id="phone"  type="phone" name="phone" className='phoneInput' onChange={inputChangeHandler}></input>
                <label className='currencyLabel' htmlFor='currency'>Выберите валюту, в которой будет вестись ваш аккаунт</label>
                <select name='currency' id='currency' className="browser-default currency-account-select"  value={form.currency} onChange={inputChangeHandler}>
                    <option value="RUB">Рубль</option>
                    <option value="EUR">Евро</option>
                    <option value="USD">Доллар</option>
                </select>
                <label className='countryLabel' htmlFor='country'>
                    Выберите страну проживания
                    <select id='country' name='country' className="browser-default Country-account-select"  value={form.country} onChange={inputChangeHandler}>
                        <option value="Russia">Россия</option>
                        <option value="USA">США</option>
                        <option value="Belarus">Беларусь</option>
                    </select>
                </label>
                <input className='form-submit-button' type="submit" value="ПАААААААААЕХАЛИ" />
            </form>
        </div>
    </div>
    )
}

//Имя, Фамилия, Страна

export default Account_page