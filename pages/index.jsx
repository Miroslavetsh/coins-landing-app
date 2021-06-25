// next elements
import Head from 'next/head'
// custom elements
import Header from './components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import ProsCommentsContainer from './components/ProsCommentsContainer/ProsCommentsContainer'
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
            <MainBanner />
            <ProsCommentsContainer />
            {/* <Footer /> */}
        </div>
    )
}
