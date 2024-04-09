import { Logo } from './';
import styles from '../styles/Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <Logo />
    </aside>
  );
};
