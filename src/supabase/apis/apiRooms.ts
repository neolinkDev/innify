import { supabase } from '../supabase';

export const getRooms = async () => {
  
  try {
    const { data: rooms, error } = await supabase.from('rooms').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return rooms;
  } catch (error) {
    console.error(
      'Error al obtener las habitaciones:',
      (error as Error).message
    );
    throw error;
  }
};
