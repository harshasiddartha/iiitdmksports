'use server';
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';


interface ReservationData {
  sport?: string | null; // Allow sport to be null
  isGym: boolean;
  price: number;
  reservationDate: Date;
  slot: string; // New field for the time slot
  image: string; // Changed to reflect the new image field
  gender?: string; // Optional field
}

interface ReservationResult {
  data?: ReservationData;
  error?: string;
}

async function addReservation(formData: FormData): Promise<ReservationResult> {
  const sportValue = formData.get('sport');
  const isGymValue = formData.get('isGym');
  const priceValue = formData.get('price');
  const reservationDateValue = formData.get('reservationDate');
  const slotValue = formData.get('slot'); // New field
  const imageValue = formData.get('image'); // Changed field name
  const genderValue = formData.get('gender');

  // Validate input values
  if (!priceValue || !reservationDateValue || !slotValue || isNaN(parseFloat(priceValue.toString()))) {
    return { error: 'Price, reservation date, or slot is missing or invalid' };
  }

  const sport: string | undefined = sportValue ? sportValue.toString() : undefined;
  const isGym: boolean = isGymValue === 'true';
  const price: number = parseFloat(priceValue.toString());
  const reservationDate: Date = new Date(reservationDateValue.toString());
  const slot: string = slotValue.toString(); // New field
  const image: string = imageValue instanceof File ? URL.createObjectURL(imageValue) : ''; // Handle image upload
  const gender: string | undefined = genderValue ? genderValue.toString() : undefined;

  const user = await currentUser(); 

  if (!user) {
    console.error('User not found');
    return { error: 'User not found' }; // Handle the error
  }

  const userId = user.id; 
  const reservationData = {
    sport,
    isGym,
    price,
    reservationDate,
    slot, // New field
    image, // Changed field name
    gender,
    userId, 
  };

  // console.log('Reservation Data:', reservationData); // Log the reservation data

  try {
    const reservation1 = await db.reservation.create({
      data: reservationData,
    });
    return { data: reservationData };
  } 
  catch (error) {
    console.error('Error creating reservation:', error);
    return { error: 'Reservation not added' }; // Handle the error
  }
}

export default addReservation;
