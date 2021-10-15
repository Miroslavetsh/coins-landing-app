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
        <title>Test Task</title>
        <meta name='description' content='Test task for Andy' />
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