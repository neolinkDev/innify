import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from './';
import { Main } from './Main';

import styles from '../styles/Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.div}>

      <Header />
      <Sidebar />
      
      <Main>
        <Outlet />
      </Main>
      
    </div>
  );
};
