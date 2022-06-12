// const { response } = require("express");
// // const Rates = require("./db/rates");
// // const Currencies = require("./db/currencies");

// async function getCurrencyEuro() {
//     const app = await fetch(`https://www.nbrb.by/api/exrates/rates/EUR?parammode=2`, {
//         method: 'GET',
//     })
//     .then((response) => {
//     return response.json()
//     })
//     .then((data) => {
//         console.log(data.Cur_OfficialRate)
//     return writeToDb(data)
//     })
// }

// async function getCurrencyUSD() {
//     const app = await fetch(`https://www.nbrb.by/api/exrates/rates/USD?parammode=2`, {
//         method: 'GET',
//     })
//     .then((response) => {
//     return response.json()
//     })
//     .then((data) => {
//     return writeToDb(data)
//     })
// }

// async function getCurrencyRub() {
//     const app = await fetch(`https://www.nbrb.by/api/exrates/rates/RUB?parammode=2`, {
//         method: 'GET',
//     })
//     .then((response) => {
//     return response.json()
//     })
//     .then((data) => {
//     return writeToDb(data)
//     })
// }

// // module.exports = {
// //     getCurrencyEuro,
// //     getCurrencyRub,
// //     getCurrencyUSD,
// // }




// function writeToDb(data) {
//     // data = JSON.parse(data, true);
//     console.log(data);

//     console.log(data.Cur_Name)

//     // const Currency_id = Currencies.findOne({Where: {Currency_name: data.Cur_name}})

//     // Rates.create({
//     //     id_Currencies: Currency_id.id,
//     //     Time: data.Date,
//     //     Banks_rate: data.Cur_OfficialRate,
//     //     selling_rate: data.Cur_OfficialRate,
//     //     buying_rate:data.Cur_OfficialRate,
//     // })
//     //     .then(result => { //Прослушивать 200
//     //         console.log(result);
//     //         response.end('ok')
//     //     }).catch(err => {
//     //         console.log(err);
//     //         response.end('error')
//     //     })
// }

// // const cron = require('node-cron');

// // cron.schedule('* * * * * *', () => {
// //     console.log('hi')
// //     getCurrencyRub()
// // });



























const fetch = require('node-fetch');
const cron = require('node-cron');
const {Currencies} = require('./db/index');
const {Rates} = require('./db/index')



async function getCurrencyRub(){
    const response = await fetch('https://www.nbrb.by/api/exrates/rates/RUB?parammode=2', {
	    method: 'GET',
    });
    const data = await response.json();
    writeToDb(data)
}



async function getCurrencyUSD(){
    const response = await fetch('https://www.nbrb.by/api/exrates/rates/USD?parammode=2', {
	    method: 'GET',
    });
    const data = await response.json();
    writeToDb(data)
}


async function getCurrencyEuro(){
    const response = await fetch('https://www.nbrb.by/api/exrates/rates/EUR?parammode=2', {
	    method: 'GET',
    });
    const data = await response.json();
    writeToDb(data)
}



cron.schedule('3 19 * * *', () => {
    console.log('hi')
    getCurrencyRub()
    getCurrencyEuro()
    getCurrencyUSD()
});

// getCurrencyRub()
// getCurrencyEuro()
// getCurrencyUSD()







async function writeToDb(data) {
    // console.log(data);

    // console.log(data.Cur_ID)

    const Currency_id = await Currencies.findOne({where: {Currency_key: data.Cur_ID}})
    // console.log(Currency_id)
    // console.log(Currency_id.id) 
    // console.log(Currency_id.dataValues.Currency_key)

    Rates.create({
        id_Currencies: Currency_id.id,
        Time: data.Date,
        Banks_rate: data.Cur_OfficialRate,
    })
    console.log('Done')
        // .then(result => { //Прослушивать 200
        //     console.log(result);
        //     response.end('ok')
        // }).catch(err => {
        //     console.log(err);
        //     response.end('error')
        // })
}
