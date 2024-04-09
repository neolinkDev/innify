import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from './';
import { Main } from './Main';



export const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <h3>Layout</h3>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
