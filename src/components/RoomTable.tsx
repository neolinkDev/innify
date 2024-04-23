import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../supabase/apis/apiRooms';
import Spinner from './Spinner';
import { formatCurrencyMXN } from '../utils/functions/helpers';
import styles from '../styles/RoomTable.module.css';

export const RoomTable = () => {

  // Queries
  // destructuring query
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({ queryKey: ['room'], queryFn: getRooms });

  if (isLoading) return <Spinner />;

  return (
    
    <div className={styles.table}>
      <table className={styles.table__table}>
        <thead className={styles.table__thead}>
          <tr>
            <th className={styles.table__th}></th>
            <th className={styles.table__th}>Habitación</th>
            <th className={styles.table__th}>Huéspedes</th>
            <th className={styles.table__th}>Precio</th>
            <th className={styles.table__th}>Descuento</th>
            <th className={styles.table__th}></th>
          </tr>
        </thead>

        <tbody className={styles.table__tbody}>

          {rooms?.map((room) => (
            <tr key={room.id}>
              <td className={styles.table__td}>
                <img
                  src={room.image ?? ''}
                  alt="User Image"
                  className={styles.userImage}
                />
              </td>
              <td className={styles.table__td}>{room.name}</td>
              <td className={styles.table__td}>{room.maxGuestsPerRoom}</td>
              <td className={styles.table__td}>
                {formatCurrencyMXN(room.regularPrice!)}
              </td>
              <td className={styles.table__td}>
                {formatCurrencyMXN(room.discount!)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // return(
  //   <div className={styles.table}>
  //     <header>
  //       <div></div>
  //       <div>Habitación</div>
  //       <div>Capacidad</div>
  //       <div>Precio</div>
  //       <div>Descuento</div>
  //       <div></div>
  //     </header>
  //   </div>
  //   )
};
