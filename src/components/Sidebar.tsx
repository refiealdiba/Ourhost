import { Link, useLocation } from "react-router-dom";
import {
     Folder,
     Database,
     Settings,
     LogOut,
     ChartNoAxesColumn,
} from "lucide-react";
import ourhost from "../assets/ourhost.png";

const menuItems = [
     {
          label: "Overview",
          icon: <ChartNoAxesColumn size={20} />,
          path: "/user/lele",
     },
     {
          label: "File Manager",
          icon: <Folder size={20} />,
          path: "/user/lele/filemanager",
     },
     {
          label: "Database",
          icon: <Database size={20} />,
          path: "/user/lele/database",
     },
     {
          label: "Setting",
          icon: <Settings size={20} />,
          path: "/user/lele/setting",
     },
];

const Sidebar = () => {
     const location = useLocation();

     return (
          <div className="w-64 min-h-screen bg-white flex flex-col justify-between border-r">
               <div>
                    <Link to="/" className="flex items-center gap-3 px-6 py-6">
                         <img
                              src={ourhost}
                              alt="ourhost logo"
                              className="w-8 h-8"
                         />
                         <span className="text-xl font-bold text-gray-800">
                              ourhost
                         </span>
                    </Link>

                    <ul className="space-y-1 px-2 mt-2">
                         {menuItems.map((item) => (
                              <li key={item.label}>
                                   <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium
                                ${
                                     location.pathname === item.path
                                          ? "bg-purple-100 text-purple-700"
                                          : "text-inactive hover:bg-gray-100"
                                }`}
                                   >
                                        {item.icon}
                                        {item.label}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="p-4">
                    <Link
                         to="/logout"
                         className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500"
                    >
                         <LogOut size={18} />
                         Logout
                    </Link>
               </div>
          </div>
     );
};
export default Sidebar;
