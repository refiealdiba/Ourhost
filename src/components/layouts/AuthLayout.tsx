import ourhost from "../../assets/ourhost.png";
import saly from "../../assets/saly.png";
import { Link } from "react-router-dom";

const AuthLayout = ({ auth, children }: { auth: string; children: React.ReactNode }) => {
    return (
        <div className="p-10 grid grid-cols-2 min-h-screen">
            <div>
                <div className="fixed">
                    <Link to={"/"}>
                        <img src={ourhost} alt="ourhost logo" className="w-20" />
                    </Link>
                </div>
                {children}
            </div>
            <div className="bg-lightviolet rounded-xl flex flex-col justify-center items-center px-20 gap-20">
                <div>
                    <img src={saly} alt="" />
                </div>
                <div className="self-start">
                    <h2 className="text-5xl font-inter font-semibold text-primary mb-4">
                        Selamat datang di Ourhost
                    </h2>
                    <p className="text-xl font-inter font-light text-primary">
                        {auth === "login" ? "Silahkan masuk dulu" : "Silahkan daftar dulu"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
