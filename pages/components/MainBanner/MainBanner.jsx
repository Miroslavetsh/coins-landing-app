// custom elements
import Wrapper from '../Wrapper/Wrapper'
import Card from '../Card/Card'
import CurrenciesContainer from '../CurrenciesContainer/CurrenciesContainer'
// styles
import styles from './MainBanner.module.scss'

const MainBanner = () => {
    return (
        <div className={styles.mainBanner}>
            <Wrapper>
                <div className={styles.top}>
                    <h1 className={styles.title}>Do The Task And Have Fun</h1>
                    <h2 className={styles.subtitle}>Be Persistent Attentive &#38; To Details</h2>
                </div>

                <div className={styles.bottom}>
                    <Card layout='default' />
                    <CurrenciesContainer />
                </div>
            </Wrapper>
        </div>
    )
}

export default MainBanner
