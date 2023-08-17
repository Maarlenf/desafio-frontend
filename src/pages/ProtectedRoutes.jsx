/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../components/Form";
import { useContext, useEffect} from "react";

const ProtectedRoutes = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const getEmail = localStorage.getItem("email");
  const getToken = localStorage.getItem("token");   
  useEffect(() => {
    setCurrentUser({email: getEmail, token: getToken});
  },[]);

  if (!getToken &&!getEmail) {
    return <Navigate to="/" />;
  } else {

    return <Outlet />;
  }
};

export default ProtectedRoutes;
