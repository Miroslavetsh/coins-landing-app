// next elements
import Head from 'next/head'
// custom elements
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
// styles
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Test Task</title>
                <meta name='description' content='Test task for Andy' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Wrapper>dkkdjtadghj dkjadjsd</Wrapper>
            {/* <Footer /> */}
        </div>
    )
}
