// styles
import styles from './Wrapper.module.scss'

type WrapperPropsTypes = {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperPropsTypes> = ({ children }): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
