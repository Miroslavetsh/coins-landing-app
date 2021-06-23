import Head from 'next/head'
import Header from './components/Header/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Test Task</title>
                <meta name='description' content='Test task for Andy' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />
        </div>
    )
}
