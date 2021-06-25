//  next elements
import { useEffect, useState } from 'react'
import axios from 'axios'
// custom elements
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency'
// styles
import styles from './CurrenciesContainer.module.scss'

const CurrenciesContainer = () => {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        axios.get('/api/cryptocurrency').then((res) => setCurrencies(res.data))
    })

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
