import classNames from 'classnames'
import { NeededCurrenciesInfo } from '../CurrenciesContainer/CurrenciesContainer'
// styles
import styles from './CryptoCurrency.module.scss'

type CryptoCurrencyPropsType = {
  currency: NeededCurrenciesInfo
}

const CryptoCurrency: React.FC<CryptoCurrencyPropsType> = ({
  currency,
}): JSX.Element => {
  const { title, notification } = currency
  const { current_price, price_change_percentage_24h } = currency.info || {
    current_price: 0,
    price_change_percentage_24h: 0,
  }

  return (
    <div className={styles.currency}>
      <h3 className={styles.title}>{title}</h3>
      <h2 className={styles.price}>{`$${current_price}`}</h2>
      <span
        className={classNames(
          styles.percentage,
          price_change_percentage_24h.toString().includes('-')
            ? styles.percentage__negative
            : styles.percentage__positive
        )}>
        {price_change_percentage_24h.toString().includes('-')
          ? price_change_percentage_24h.toFixed(2)
          : `+${price_change_percentage_24h.toFixed(2)}`}
        <svg width='10' height='11' viewBox='0 0 10 11'>
          <path
            d='M5.20172 10.4944C5.35531 10.495 5.5091 10.4321 5.61959 10.3056L9.47676 5.89116C9.67728 5.66167 9.65379 5.31307 9.4243 5.11255C9.1948 4.91203 8.8462 4.93551 8.64568 5.16501L5.75035 8.47868V1.11361C5.75035 0.808852 5.50329 0.561798 5.19854 0.561798C4.89378 0.561798 4.64673 0.808852 4.64673 1.11361L4.64673 8.46923L1.7509 5.16442C1.55005 4.93521 1.20142 4.91222 0.972213 5.11306C0.743002 5.31391 0.720007 5.66254 0.920853 5.89175L4.74184 10.2524C4.84111 10.3984 5.00862 10.4944 5.19854 10.4944C5.1996 10.4944 5.20066 10.4944 5.20172 10.4944Z'
            fill='#4643D3'
          />
        </svg>
      </span>
      <p className={styles.notification}>{notification}</p>
    </div>
  )
}

export default CryptoCurrency
