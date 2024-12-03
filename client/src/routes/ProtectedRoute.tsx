import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

interface Props {
    locationKey: string;
}

const ProtectedRoute: React.FC<Props> = ({ locationKey }) => {
    return (
        <>
            <Sidebar />
            <div className="w-[80%] ml-auto relative z-[0]">
                <Navbar />
                <motion.div
                    key={locationKey}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full pt-[128px] px-[40px] bg-[] rounded-sm min-h-screen z-[1]"
                >
                    <Outlet />
                </motion.div>
            </div>
        </>
    );
};

export default ProtectedRoute;
