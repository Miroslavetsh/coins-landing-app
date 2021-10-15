// custom elements
import Wrapper from '../Wrapper/Wrapper'
// styles
import styles from './Footer.module.scss'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <h2 className={styles.title}>
          Don’t Forget To Deploy Project To GitHub Pages
        </h2>
        <div className={styles.rights}>
          © Test Task Limited™, 2020. All rights reserved.
        </div>
        <p className={styles.desc}>Terms Of Service | Privacy Policy</p>
      </Wrapper>
    </footer>
  )
}

export default Footer
