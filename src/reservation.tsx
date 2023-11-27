interface ReservationProps {
   className: string;
}

const Reservation = ({ className }: ReservationProps) => {
   const handleReservation = () => {
      // Add logic for handling reservation here
   };

   return (
      <div className={className} id="reservation">
         <div
            className="relative w-full cursor-pointer rounded-md bg-cover bg-center bg-no-repeat hover:brightness-110 hover:transition hover:duration-500 hover:ease-in-out"
            style={{ backgroundImage: "url('/reservation-section.webp')" }}
            onClick={handleReservation}
         >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="font-abril relative mb-6 py-12 text-center text-5xl tracking-wider text-white md:py-24">
               zarezerwuj wizytę
            </h2>
         </div>
      </div>
   );
};

export default Reservation;