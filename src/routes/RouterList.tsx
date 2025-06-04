import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import FileManager from "../pages/dashboard/FileManager";
import DatabaseManager from "../pages/dashboard/DatabaseManager";
import Setting from "../pages/dashboard/Setting";

const RouterList = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <div>About Page</div>,
            },
        ],
    },
    {
        path: "/user/:username",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "filemanager",
                element: <FileManager />,
            },
            {
                path: "database",
                element: <DatabaseManager />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default RouterList;
