import { use } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation()
    // console.log(location)
    if (loading) {
       return <span className="loading loading-bars loading-xl flex justify-center items-center w-12 mx-auto h-screen"></span>
    }
    if (user && user?.email) {
        return children;
    } 
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
}
export default PrivateRoute;