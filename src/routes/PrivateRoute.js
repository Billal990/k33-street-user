import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <Loader/>
  }
  if(!user){
    return <Navigate to="/login" replace={true} />
  }
  return children;
}
