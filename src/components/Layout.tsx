import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <h3>Layout</h3>
      <Outlet />
    </div>
  );
};
