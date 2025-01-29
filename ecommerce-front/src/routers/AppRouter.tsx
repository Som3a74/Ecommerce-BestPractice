import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
import MainLayout from './../layout/MainLayout/MainLayout';

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, errorElement: <Error />, children: [
            { index: true, element: <Home /> },
            { path: "Categories", element: <Categories /> },
            { path: "AboutUs", element: <AboutUs /> },
            { path: "Login", element: <Login /> },
            { path: "Register", element: <Register /> },
            { path: "Error", element: <Error /> },
            {
                path: "categories/Products/:prefix",
                element: <Products />,
                loader: ({ params }) => {
                    if (typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)) {
                        throw new Response("Bad Request", { statusText: "Category not found", status: 400 });
                    }
                    return true;
                },
            },
     
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter



