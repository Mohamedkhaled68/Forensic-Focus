import { CiSearch } from "react-icons/ci";
import { iconic, notificationIcon } from "../../../assets";
import { useState } from "react";
import useUserStore from "../../../store/useUserStore";
const Navbar = () => {
    const [notification, setNotification] = useState(null);
    const user = useUserStore((state) => state.user);
    return (
        <>
            <nav className="h-[104px] w-[80%] fixed z-[1000] bg-white flex justify-center items-center">
                <div className="container mx-auto px-[40px] py-[24px] flex justify-between items-center">
                    <div className="searchBar || bg-neutral-1-50 px-[24px] py-[16px] flex justify-center items-center gap-[10px] rounded-[10px]">
                        <CiSearch size={24} />
                        <input
                            className="placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal bg-transparent border-none outline-none"
                            type="text"
                            placeholder="Search for anything..."
                            id="search"
                            name="search"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-[48px]">
                        <div className="relative">
                            <img src={notificationIcon} alt="notification" />
                            {notification && (
                                <span className="bg-secondary-1-500 absolute -top-1 -right-1 w-[16px] h-[16px] flex justify-center items-center p-[4px] text-white text-[14px] font-normal rounded-full">
                                    2
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between items-center gap-[12px]">
                            <div className="w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center overflow-hidden">
                                <img
                                    className="max-w-full object-cover"
                                    src={iconic}
                                    alt="iconic"
                                />
                            </div>
                            <p className="text-body-16-m capitalize">
                                {user && user?.name}
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
