
import { NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    // console.log(user.email)

    const handleLogOut = () => {
        console.log("i am logout work")
        logOut().then(() => {
            alert("Log-Out Successful.")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>

            <div className="flex justify-between mx-10 my-2 mb-12 sticky top-0">
                <div>            </div>
                <div className="flex items-center gap-4 font-semibold text-lg">
                    <NavLink to="/">  Home </NavLink>
                    <h1> About </h1>
                    <h1>Career </h1>
                </div>
                <div className="flex items-center gap-4 font-semibold text-lg">
                    {user && user.email}
                    <img className="w-8 cursor-pointer" src="/src/assets/user.png" alt="" />
                    {user ?
                        <NavLink to="auth/login" onClick={handleLogOut}
                            className="py-1.5 px-10 bg-black text-white rounded-sm font-bold">LogOut
                        </NavLink> :
                        <NavLink to="auth/login"
                            className="py-1.5 px-10 bg-black text-white rounded-sm font-bold">Login
                        </NavLink>}
                </div>
            </div>
        </div>

    );
};

export default Navbar;