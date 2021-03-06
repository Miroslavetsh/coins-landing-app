// next elements
import Image from 'next/image'
// custom elements
import Wrapper from '../Wrapper/Wrapper'
// images
import Logo from '../../public/logo.svg'
// styles
import styles from './Header.module.scss'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.logo}>
          <Image width={176} height={25} src={Logo} alt='logo' />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
