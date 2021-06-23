// next elements
import Image from 'next/image'
// custom elements
import Wrapper from '../Wrapper/Wrapper'
// images
import Logo from '../../../public/logo.svg'
// styles
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Wrapper>
                <div className={styles.logo}>
                    <Image width={176} height={25} src={Logo} />
                </div>
            </Wrapper>
        </header>
    )
}

export default Header
