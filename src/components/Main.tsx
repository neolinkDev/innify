
import styles from '../styles/Main.module.css';

interface MainProps {
  children: JSX.Element
}

export const Main = ({children}: MainProps) => {
  return (
    <main className={styles.main}>{children}</main>
  )
}
