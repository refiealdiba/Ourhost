import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-800">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="h-16 flex items-center justify-between px-6 border-b bg-white shadow-sm">
                    <h2 className="text-lg font-semibold">Overview</h2>
                    <div>
                        <img
                            src="https://randomuser.me/api/portraits/men/75.jpg"
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
export default DashboardLayout;
