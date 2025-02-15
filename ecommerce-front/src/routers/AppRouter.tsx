import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("./../layout/MainLayout/MainLayout"));
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const WishList = lazy(() => import("@pages/WishList"));
import Error from '@pages/Error';
import { LottieHandler, PageSuspenseFallback } from "@components/feedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense
                fallback={
                    <div style={{ marginTop: "10%" }}>
                        <LottieHandler type="loading" message="Loading please wait..." />
                    </div>
                }
            >
                <MainLayout />
            </Suspense>
        ),
        errorElement: <Error />,
        children: [
            { index: true, element: <PageSuspenseFallback><Home /></PageSuspenseFallback> },
            { path: "Categories", element: <PageSuspenseFallback><Categories /></PageSuspenseFallback> },
            { path: "AboutUs", element: <PageSuspenseFallback><AboutUs /></PageSuspenseFallback> },
            { path: "Login", element: <PageSuspenseFallback><Login /></PageSuspenseFallback> },
            { path: "Register", element: <PageSuspenseFallback><Register /></PageSuspenseFallback> },
            { path: "Cart", element: <PageSuspenseFallback><Cart /></PageSuspenseFallback> },
            { path: "wishList", element: <PageSuspenseFallback><WishList /></PageSuspenseFallback> },
            { path: "Error", element: <PageSuspenseFallback><Error /></PageSuspenseFallback> },
            {
                path: "categories/Products/:prefix",
                element: <PageSuspenseFallback><Products /></PageSuspenseFallback>,
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