import { Link } from "react-router-dom";
import ourhost from "../assets/ourhost.png";

const Navbar = () => {
    return (
        <header className="flex justify-center items-center py-5 absolute left-0 right-0">
            <div className="flex  justify-between w-full max-w-5xl">
                <div className="">
                    <Link
                        to="/"
                        className="text-xl text-primary font-bold font-inter flex items-center"
                    >
                        <div className="w-15">
                            <img src={ourhost} alt="ourhost logo" className="w-full" />
                        </div>
                        <span className="text-primary text-lg font-bold">Ourhost</span>
                    </Link>
                </div>
                <div className="flex font-inter">
                    <ul className="flex gap-7 items-center font-regular text-hostsemiblack">
                        <li>
                            <a
                                href="/"
                                className="font-medium text-primary border-b border-b-primary py-1.5"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/">Docs</a>
                        </li>
                        <li>
                            <a href="/about">Tentang</a>
                        </li>
                        <li>
                            <a href="/contact">Kontak</a>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="bg-primary px-3 rounded-lg py-2 text-white font-medium"
                            >
                                Masuk
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
