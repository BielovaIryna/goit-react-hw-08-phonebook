import { CONTACTS_ROUTE } from "constants/appRoutes"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUserAuth } from "redux/auth/authSelectors"

export const RestrictedRoutes= ({children, navigateTo=CONTACTS_ROUTE})=> {
const auntification = useSelector(selectUserAuth);
  return auntification ? <Navigate to ={navigateTo} replace/> :children
}




