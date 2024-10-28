'use server';
import { db } from '@/lib/db';

interface ReservationData {
  id: string; // Reservation ID
  sport?: string | null; // Allow sport to be null
  isGym: boolean;
  price: number;
  reservationDate: Date;
  slot: string; // New field for the time slot
  image?: string | null; // Changed field name for image
  gender?: string | null; // Optional field
}

interface ReservationsResult {
  data?: ReservationData[]; // Array of reservations
  error?: string; // Error message if any
}

async function getAllReservations(): Promise<ReservationsResult> {
  try {
    // Fetch all reservations from the database
    const reservations = await db.reservation.findMany({
      orderBy: {
        reservationDate: 'desc', // Order by reservation date
      },
    });

    // Map the reservations to the desired format
    const reservationData = reservations.map(reservation => ({
      id: reservation.id,
      sport: reservation.sport,
      isGym: reservation.isGym,
      price: reservation.price,
      reservationDate: reservation.reservationDate,
      slot: reservation.slot || 'N/A', // Provide a default value for null slot
      image: reservation.image,
      gender: reservation.gender,
    }));
    

    return { data: reservationData };
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return { error: 'Unable to retrieve reservations' }; // Handle the error
  }
}

export default getAllReservations;
