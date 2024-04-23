import { RoomTable } from '../components/RoomTable';
import { Row } from '../components/Row';

export const Rooms = () => {
  return (
    <>
      <Row type='horizontal'>
        <h1 className="heading1">Habitaciones</h1>
        <p>Pa</p>
      </Row>

      <Row>
        <RoomTable />
      </Row>
    </>
  );
};
