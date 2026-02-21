import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import About from "../Pages/About/About";
import CategoriesDetails from "../Components/Categories/CategoriesDetails";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

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
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
             {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            },
        ]
    },
    {
        path: "/news-details/:id",
        Component: NewsDetails,
        loader: () => fetch('/news.json')

    }
]);
export default router;