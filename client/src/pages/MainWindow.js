import React from "react"
import "./MainWindow.css"
import Logo from '../img/logo.png'
import money from '../img/57-Converted 1.png'
import {NavLink, unstable_HistoryRouter} from "react-router-dom"

const MainWaindow = () => {
    return (
    <div className="buddy">
        <header className="header">
            <div className="container">
                <div className="nav">
                    <img className="Logo" src={Logo} alt="logo image"/>
                    <div className="FirstList">
                        {/* добавить NavLink */}
                        <ul className="menu">
                            <li>Главная</li>
                            <li>О сервисе</li>
                            <li>Контакты</li>
                            <li>Курсы валют</li>
                            <li>Зарегистрироваться</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <section className="about">
            <div className="container">
                <div className="centralPart">
                    <div className="advert">
                        <h1 className="slogan">Точность. Гибкость. Надёжность.</h1>
                        <p className="paragraph">Онлайн-банк поможет вам сберечь  и преумножить ваши средства</p>
                        <NavLink to="/registration"><button className="startButton" type="#">Попробовать</button></NavLink>
                    </div>
                    <img className="money" src={money} alt="moneyImage"/>
                </div>    
            </div>
        </section>
        <footer className="footer">
            <div className="container">
            </div>
        </footer>
    </div>
    )
}

export default MainWaindow