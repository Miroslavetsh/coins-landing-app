// custom elements
import Wrapper from '../Wrapper/Wrapper'
// import Card from '../Card/Card'
// styles
import styles from './MainBanner.module.scss'

const MainBanner = () => {
    return (
        <section className={styles.mainBanner}>
            <Wrapper>
                <div className={styles.top}>
                    <h1 className={styles.title}>Do The Task And Have Fun</h1>
                    <h2 className={styles.subtitle}>Be Persistent &#38; Attentive To Details</h2>
                </div>

                <div className={styles.bottom}>
                    {/* <Card /> */}
                    {/* <CurrenciesContainer /> */}
                </div>
            </Wrapper>
        </section>
    )
}

export default MainBanner
