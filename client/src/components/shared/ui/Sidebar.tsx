import { NavLink, useLocation } from "react-router-dom";
import {
    logoIcon,
    pendingIcon,
    HomeIcon,
    resultIcon,
    logoutIcon,
    settingsIcon,
} from "../../../assets";
import { useEffect, useState } from "react";
import useLogout from "../../../hooks/auth/useLogout";

const links = [
    {
        name: "Home Page",
        url: "/",
        icon: HomeIcon,
    },
    {
        name: "Pending Assignments",
        url: "/pending-assignments",
        icon: pendingIcon,
    },
    {
        name: "Assignments Result",
        url: "/results",
        icon: resultIcon,
    },
];

const Sidebar = () => {
    const [active, setActive] = useState("");
    const location = useLocation();

    const { mutateAsync: logout } = useLogout();

    const handleLogout = async () => {
        await logout();
    };

    useEffect(() => {
        setActive(location.pathname);
    }, [location, setActive]);

    return (
        <aside className="h-screen fixed top-0 left-0 w-[20%] z-[100] bg-white">
            <div className="flex flex-col justify-between items-start">
                <div className="flex justify-center items-center p-[16px]">
                    <img
                        className="max-w-full object-cover"
                        src={logoIcon}
                        alt="logo"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-[16px] p-[16px] w-full">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.url}
                            className={({ isActive }) =>
                                `p-[16px] w-full rounded-md flex justify-start items-center gap-[8px] group
                                ${
                                    isActive
                                        ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white"
                                        : "text-blue-900 hover:bg-blue-100"
                                } 
                                duration-300 cursor-pointer`
                            }
                        >
                            {active === link.url ? (
                                <img
                                    src={link.icon}
                                    alt={link.name}
                                    className="invert-[1] sepia saturate-[1000%] hue-rotate-180"
                                />
                            ) : (
                                <img src={link.icon} alt={link.name} />
                            )}

                            <p className="text-body-16-m">{link.name}</p>
                        </NavLink>
                    ))}
                </div>
                <div className="flex flex-col mt-[40px] p-[16px] gap-[10px] border-t-[2px] border-neutral-1-100 w-full">
                    <NavLink
                        key={"settings"}
                        to={"/settings"}
                        className={({ isActive }) =>
                            `p-[16px] w-full rounded-md flex justify-start items-center gap-[8px] group
                                ${
                                    isActive
                                        ? "bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white"
                                        : "text-blue-900 hover:bg-blue-100"
                                } 
                                duration-300 cursor-pointer`
                        }
                    >
                        {active === "/settings" ? (
                            <img
                                src={settingsIcon}
                                alt={"settings"}
                                className="invert-[1] sepia saturate-[1000%] hue-rotate-180"
                            />
                        ) : (
                            <img src={settingsIcon} alt={"settings"} />
                        )}

                        <p className="text-body-16-m">Settings</p>
                    </NavLink>
                    <div
                        onClick={handleLogout}
                        className="p-[16px] w-full group rounded-md flex justify-start items-center gap-[8px] hover:bg-secondary-1-500  duration-300 cursor-pointer"
                    >
                        <img
                            src={logoutIcon}
                            alt="logout"
                            className="group-hover:invert group-hover:sepia group-hover:saturate-[1000%] group-hover:hue-rotate-180"
                        />
                        <p className="text-body-18-m text-secondary-1-500 group-hover:text-white">
                            Logout
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
