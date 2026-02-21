
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
// import Footer from '../Components/Footer/Footer';
import { LoginWith } from '../Components/LoginWith/LoginWith';
import Categories from '../Components/Categories/Categories';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           

            <div className="md:flex justify-center md:mx-12 mx-4 gap-2">
                <div className="md:w-3/12 sticky top-0 h-fit">
                    <Categories />
                </div>
                <div className="md:w-6/12">
                    <Outlet />
                </div>
                <div className="md:w-3/12 sticky top-0 h-fit">
                    <LoginWith />
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default Main;