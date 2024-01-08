import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const handleSignOut = async () => {
   const { setIsLoggedIn } = useAuth();
   const navigate = useNavigate();

   const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/signout`,
      {
         credentials: "include",
         method: "POST",
      }
   );

   if (response.ok) {
      setIsLoggedIn(false);
      toast.success("Signed out successfully!");
      navigate("/");
   } else {
      throw new Error("Network response was not ok");
   }
};

const SignOut = () => {
   handleSignOut();
   return (
      <div className="te xt-font-primary flex min-h-screen flex-col items-center justify-center  bg-bg-primary  text-center">
         <h2 className="mb-4 text-3xl font-bold">Signing out...</h2>
      </div>
   );
};

export default SignOut;
