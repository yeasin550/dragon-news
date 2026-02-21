import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
const AuthLayout = () =>  {
    return (
        <div className="bg-gray-100 md:h-screen">
            <Navbar />
            <Outlet/>
        </div>
    )
}
export default AuthLayout;