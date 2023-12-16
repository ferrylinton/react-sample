import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/add",
                element: <AddPage />,
            },
            {
                path: "/detail/:id",
                element: <DetailPage />,
            },
            {
                path: "/edit/:id",
                element: <EditPage />,
            },
        ],
    },
]);