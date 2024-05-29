import { Navigate, Outlet} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = () => {
    let {user} = useContext(AuthContext)

    return (
            user ? <Outlet /> : <Navigate to="/login"></Navigate>
    )
}

export default PrivateRoute;