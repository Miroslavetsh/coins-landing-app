import Image from 'next/image'
import styles from './Header.module.scss'
import Logo from '../../../public/logo.svg'
import Wrapper from '../Wrapper/Wrapper'

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
