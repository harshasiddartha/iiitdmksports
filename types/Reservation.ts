// Assuming this is in a separate types file, e.g., types.ts
export interface ReservationData {
    id: string; // Reservation ID
    sport?: string | null; // Allow sport to be null
    isGym: boolean;
    price: number;
    reservationDate: Date;
    slot?: string | null;
    image?: string | null; // Allow imageUrl to be null
    gender?: string | null; // Allow gender to be null
  }
  