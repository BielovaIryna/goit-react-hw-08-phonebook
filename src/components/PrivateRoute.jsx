import { LOGIN_ROUTE } from "constants/appRoutes"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuth } from "redux/auth/authSelectors";

export const PrivateRoute = ({children, navigateTo=LOGIN_ROUTE}) =>{
	const auntification = useSelector(selectUserAuth);
  return auntification ? children : <Navigate to ={navigateTo} replace/>
	
}