import getAllReservations from '../../actions/getAllReservations'; // Adjust the import path as necessary
import { ReservationData } from '../../../types/Reservation'; // Import the type if in a separate file
import LoginPage from '../login/page';
import { currentUser } from '@clerk/nextjs/server';
import { isAdmin } from '@/lib/checkAdmin';
import { redirect } from 'next/navigation'; // Import redirect for client-side navigation
import Image from 'next/image';

// This is a server component
const ReservationList = async () => {
  const user = await currentUser();

  // If user is not logged in, show the login page
  if (!user) {
    return <LoginPage />;
  }

  // Check if the logged-in user is an admin
  const userIsAdmin = await isAdmin();

  // If the user is not an admin, redirect them to the home page
  if (!userIsAdmin) {
    redirect('/');
    return null; // Return null since redirect() will navigate away from this component
  }

  // Fetch all reservations if the user is an admin
  const reservationsResult = await getAllReservations();
  const reservations: ReservationData[] = reservationsResult.data || []; // Access the `data` field

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Reservations</h1>
      {reservations.length === 0 ? (
        <p className="text-center">No reservations found.</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="border rounded-lg shadow-md p-4 hover:bg-gray-100 transition">
              <h2 className="text-xl font-semibold">{reservation.sport || 'No Sport Selected'}</h2>
              <p className="text-gray-600">
                {reservation.isGym ? 'Gym Reservation' : 'Sport Reservation'}<br />
                <span className="font-medium">Price:</span> ${reservation.price.toFixed(2)}<br />
                <span className="font-medium">Reservation Date:</span> {new Date(reservation.reservationDate).toLocaleString()}<br />
                {reservation.image && (
                  <Image
                    src={reservation.image}
                    alt="Reservation"
                    className="mt-2 rounded-md w-full h-32 object-cover " width={3} height={3}
                  />
                )}
                <br />
                <span className="font-medium">Gender:</span> {reservation.gender || 'Not Specified'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationList;
