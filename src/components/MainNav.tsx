import { NavLink } from 'react-router-dom';
import { HomeIcon, IcBaselineCalendarMonth, RoomsIcon, SettingsIcon, UsersIcon } from './Icons';

import styles from '../styles/MainNav.module.css';

export const MainNav = () => {
 

  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <HomeIcon />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservas"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <IcBaselineCalendarMonth />
            <span>Reservas</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/habitaciones"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <RoomsIcon />
            <span>Habitaciones</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <UsersIcon />
            <span>Usuarios</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/configuracion"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <SettingsIcon />
            <span>Configuración</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
