import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import About from "../Pages/About/About";
import CategoriesDetails from "../Components/Categories/CategoriesDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        errorElement:
            <h1 className="text-center flex justify-center items-center text-5xl">404</h1>,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/categories/:id",
                Component: CategoriesDetails,
                loader: () => fetch('/news.json')
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",
                Component: ContactUs
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            
            
        ]
    },
]);
export default router;