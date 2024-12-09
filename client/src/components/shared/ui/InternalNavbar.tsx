import { NavLink } from "react-router-dom";

const NavbarItem = ({ label, path }: { label: string; path: string }) => (
    <NavLink
        to={path}
        className={({ isActive }) => `
            px-4 pb-2 text-blue-900 text-body-18-m cursor-pointer 
            transition-all duration-300 
            ${
                isActive
                    ? "border-b-2 border-blue-900 text-body-18-sb"
                    : "hover:text-blue-700"
            }
        `}
    >
        {label}
    </NavLink>
);

interface NavbarProps {
    title: string;
    path: string;
}

const InternalNavbar = ({ tabs }: { tabs: NavbarProps[] }) => {


    return (
        <div className="flex border-b border-neutral-1-100 mb-[40px]">
            {tabs.map((tab) => (
                <NavbarItem key={tab.title} label={tab.title} path={tab.path} />
            ))}
        </div>
    );
};

export default InternalNavbar;
