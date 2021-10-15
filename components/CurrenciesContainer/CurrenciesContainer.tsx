//  next elements
import { useEffect, useState } from 'react'
import axios from 'axios'
// custom elements
import Currency from '../../schema/Currency'
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency'
// styles
import styles from './CurrenciesContainer.module.scss'

export type NeededCurrenciesInfo = {
  id: string
  title: string
  notification: string
  info: Currency | null
}

const CURRENCIES = ['bitcoin', 'ethereum']

const CurrenciesContainer: React.FC = (): JSX.Element => {
  const [currencies, setCurrencies] = useState<NeededCurrenciesInfo[]>([])
  const neededCurrencies: NeededCurrenciesInfo[] = [
    {
      id: 'bitcoin',
      title: 'Responsive Design',
      notification: 'You’ ll Learn A Lot From This Task',
      info: null,
    },
    {
      id: 'ethereum',
      title: 'Mobile Friendly',
      notification: 'Don’t Forget About Small Devices',
      info: null,
    },
  ]

  const getCurrencies = async () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        const currencies = res.data.filter((currency: Currency) =>
          CURRENCIES.includes(currency.id)
        )

        currencies.forEach((currency: Currency) => {
          for (let neededCurrency of neededCurrencies) {
            if (neededCurrency.id === currency.id)
              neededCurrency.info = currency
          }
        })

        setCurrencies(neededCurrencies)
      })
  }

  useEffect(() => {
    getCurrencies()
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Fonts &#38; Colors <br /> Matter
      </h2>
      {currencies.map((currency: NeededCurrenciesInfo) => {
        return <CryptoCurrency currency={currency} key={currency.id} />
      })}
    </div>
  )
}

export default CurrenciesContainer
