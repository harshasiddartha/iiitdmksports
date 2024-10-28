'use server';
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';


interface ReservationResult {
  data?: string; // Optionally return the ID of the deleted reservation
  error?: string;
}

async function deleteReservation(reservationId: string): Promise<ReservationResult> {
  // Get the currently logged-in user
  const user = await currentUser();

  if (!user) {
    console.error('User not found');
    return { error: 'User not found' }; // Handle the error
  }

  const userId = user.id;

  // Check if the reservation exists and belongs to the user
  const reservation = await db.reservation.findUnique({
    where: {
      id: reservationId,
    },
  });

  if (!reservation) {
    console.error('Reservation not found:', reservationId);
    return { error: 'Reservation not found' }; // Handle the error
  }

  // Check if the reservation belongs to the current user
  if (reservation.userId !== userId) {
    console.error('User does not have permission to delete this reservation:', userId);
    return { error: 'Unauthorized to delete this reservation' }; // Handle the error
  }

  try {
    await db.reservation.delete({
      where: {
        id: reservationId,
      },
    });

    console.log('Reservation deleted:', reservationId);
    return { data: `Reservation with ID ${reservationId} deleted successfully.` };
  } catch (error) {
    console.error('Error deleting reservation:', error);
    return { error: 'Reservation not deleted' }; // Handle the error
  }
}

export default deleteReservation;
