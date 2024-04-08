import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from './';



export const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <h3>Layout</h3>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
