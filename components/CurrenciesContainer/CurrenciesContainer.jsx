//  next elements
import { useEffect, useState } from 'react'
import axios from 'axios'
// custom elements
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency'
// styles
import styles from './CurrenciesContainer.module.scss'

const CurrenciesContainer = () => {
    const [currencies, setCurrencies] = useState([])
    const neededCurrencies = {
        bitcoin: {
            title: 'Responsive Design',
            notification: 'You’ ll Learn A Lot From This Task',
        },
        ethereum: {
            title: 'Mobile Friendly',
            notification: 'Don’t Forget About Small Devices',
        },
    }

    useEffect(async () => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
            )
            .then((res) => {
                let currenciesInfo = {}
                const currencies = res.data.filter((cur) =>
                    Object.keys(neededCurrencies).includes(cur.id),
                )

                currencies.map((cur) => {
                    currenciesInfo[cur.id] = { ...cur, ...neededCurrencies[cur.id] }
                })

                setCurrencies({ ...currenciesInfo })
            })
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Fonts &#38; Colors <br /> Matter
            </h2>
            {Object.keys(currencies).map((cur) => (
                <CryptoCurrency props={currencies[cur]} key={cur}></CryptoCurrency>
            ))}
        </div>
    )
}

export default CurrenciesContainer
