import React from 'react'
import {NavLink} from "react-router-dom"
import { useHttp } from "../hooks/http.hook"

import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js'

import {Line} from 'react-chartjs-2'

import { useState, useEffect } from 'react'


ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)


const GraphicPage = () => {

    const [selectValue, setSelectValue] = useState('RUB')
    

    const [chartData, setChartData] = useState({
        labels: ['waiting'],
        datasets: [
            {
                label: 'Ну давай, выбирай',
                data: [0],
                backgroundColor: 'white',
                borderColor: 'black',
            }
            ]
    })
    
    const [chartOptions, setChartOptions] = useState({})

    const {loading, request, error, clearError} = useHttp()

    
      const handleChanger = (event) => {
        setSelectValue(event.target.value);
        // console.log(selectValue)
      }
    
      const handleSubmiter = async (event) => {
        event.preventDefault();
        let someData = null

        if(selectValue === 'RUB') {
            someData = await request('/api/RUB/graphic', 'GET')
        } else if (selectValue === 'EUR') {
            someData = await request('/api/EUR/graphic', 'GET')
        } else {someData = await request('/api/USD/graphic', 'GET')}

        setChartData({
            labels: [someData[0].id, someData[1].id, someData[2].id, someData[3].id, someData[4].id, someData[5].id, someData[6].id, someData[7].id ,someData[8].id, someData[9].id],
            datasets: [
                {
                    label: selectValue,
                    data: [someData[0].Banks_rate, someData[1].Banks_rate,someData[2].Banks_rate,someData[3].Banks_rate,someData[4].Banks_rate,someData[5].Banks_rate,someData[6].Banks_rate,someData[7].Banks_rate, someData[8].Banks_rate, someData[9].Banks_rate],
                    backgroundColor: 'red',
                    borderColor: 'black',
                    tension: 0.4
                }
            ]
        });
        setChartOptions({
        })
      }


            
    

 
    return (
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-content">
                <form className='eee' onSubmit={handleSubmiter}>
                    <label>
                        <select className="browser-default currency-select" value={selectValue} onChange={handleChanger}>
                            <option value="RUB">Рубль</option>
                            <option value="EUR">Евро</option>
                            <option value="USD">Доллар</option>
                        </select>
                    </label>
                    <input className='input-button' type="submit" value="Построить график" />
                </form>
                {<Line options={chartOptions} data={chartData}/>}
            </div>

            <div className="card-footer">
                <ul>
                <li>
                    <NavLink to='/userPage'>UserPage</NavLink>
                </li>
                <li>
                    <NavLink to='/userInfo'>UserInfo</NavLink>
                </li>
                <li >

                </li>
                </ul>
            </div>
        </div>
    )
}

export default GraphicPage