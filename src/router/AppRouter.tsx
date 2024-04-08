import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Account,
  Bookings,
  Dashboard,
  NotFound,
  Rooms,
  Settings,
  Users,
} from '../pages';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<Dashboard />} />
      <Route path="reservas" element={<Bookings />} />
      <Route path="habitaciones" element={<Rooms />} />
      <Route path="usuarios" element={<Users />} />
      <Route path="configuracion" element={<Settings />} />
      <Route path="cuenta" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
