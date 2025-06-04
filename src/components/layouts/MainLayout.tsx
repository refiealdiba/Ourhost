import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2023 My Application
            </footer>
        </div>
    );
};

export default MainLayout;
