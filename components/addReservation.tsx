'use client';
import { useRef } from 'react';
import addReservation from '@/app/actions/addReservation';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const AddReservation = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addReservation(formData);
    console.log(data);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Reservation added');
      redirect('/');
      formRef.current?.reset();
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">Add Reservation</h3>
      <form ref={formRef} action={clientAction} className="space-y-4">
        <div className="form-control">
          <label htmlFor="sport" className="block text-sm font-medium text-gray-700">
            Sport
          </label>
          <select
            id="sport"
            name="sport"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select a sport</option>
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
            <option value="Badminton">Badminton</option>
            <option value="Swimming">Swimming</option>
            <option value="Volleyball">Volleyball</option>
            {/* Add more sports as needed */}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="isGym" className="flex items-center">
            <input
              type="checkbox"
              id="isGym"
              name="isGym"
              className="mr-2"
            />
            Add gym?
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter price..."
            step="0.01"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="form-control">
          <label htmlFor="reservationDate" className="block text-sm font-medium text-gray-700">
            Reservation Date
          </label>
          <input
            type="datetime-local"
            name="reservationDate"
            id="reservationDate"
            required
            min={today + 'T00:00'} // Restrict to today or later
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="form-control">
          <label htmlFor="slot" className="block text-sm font-medium text-gray-700">
            Time Slot
          </label>
          <select
            id="slot"
            name="slot"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select a time slot</option>
            <option value="6:00-7:00">6:00 - 7:00</option>
            <option value="7:00-8:00">7:00 - 8:00</option>
            <option value="8:00-9:00">8:00 - 9:00</option>
            <option value="9:00-10:00">9:00 - 10:00</option>
            <option value="10:00-11:00">10:00 - 11:00</option>
            {/* Add more slots as needed */}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            accept="image/*"
          />
        </div>
        <div className="form-control">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select gender (optional)</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="btn w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
          Add Reservation
        </button>
      </form>
    </div>
  );
};

export default AddReservation;
