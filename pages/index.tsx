// next elements
import Head from 'next/head'
// custom elements
import Header from '../components/Header/Header'
import MainBanner from '../components/MainBanner/MainBanner'
import ProsCommentsContainer from '../components/ProsCommentsContainer/ProsCommentsContainer'
import CodersCommentsContainer from '../components/CodersCommentsContainer/CodersCommentsContainer'
import Footer from '../components/Footer/Footer'
// styles
import styles from './Index.module.scss'

const Index: React.FC = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Coin App</title>
        <meta property='og:title' content="Miroslavetsh's coin app" />
        <meta
          property='og:description'
          content='App, where you can track currencies with its own cources. Now availiable bitcoin and ethereum, but we have big plans... :)'
        />
        <meta
          property='og:image'
          content='https://i.pinimg.com/originals/7f/e2/33/7fe233c3361ce8b81e5b17d9e334d321.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <MainBanner />
      <ProsCommentsContainer />
      <CodersCommentsContainer />
      <Footer />
    </div>
  )
}

export default Index
