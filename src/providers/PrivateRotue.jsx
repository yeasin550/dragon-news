import { use } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <img
                className="w-20 h-20 animate-spin"
                src="https://www.svgrepo.com/show/199956/loading-loader.svg"
                alt="Loading icon"
            ></img>
        </div>
    //    return <span className="loading loading-bars loading-xl flex justify-center items-center w-12 mx-auto h-screen"></span>
    }
    if (user && user?.email) {
        return children;
    } 
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
}
export default PrivateRoute;