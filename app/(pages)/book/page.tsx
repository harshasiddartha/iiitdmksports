

import AddReservation from "@/components/addReservation";
import { currentUser } from '@clerk/nextjs/server';
import LoginPage from "../login/page";


const bookPage = async () => {
  const user = await currentUser();

  if (!user) {
    return <LoginPage/>;
  }
  return ( 
    <div>
      <AddReservation/>
    </div>
   );
}
 
export default bookPage;