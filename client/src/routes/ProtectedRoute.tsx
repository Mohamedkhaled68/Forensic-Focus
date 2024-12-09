import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";
import { Loading, Navbar, Sidebar } from "../components";
import useTokenStore from "../store/useTokenStore";
import { useEffect, useState } from "react";
import useGetCurrentUser from "../hooks/auth/useGetCurrentUser";
import useUserStore from "../store/useUserStore";

interface Props {
    locationKey: string;
}

const ProtectedRoute: React.FC<Props> = ({ locationKey }) => {
    const token = useTokenStore((state) => state.token);
    const { mutateAsync: getUser } = useGetCurrentUser();
    const setUser = useUserStore((state) => state.setUser);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            getUser().then((res) => {
                setUser(res.user);
            });
            setIsLoading(false);
        } else {
            navigate("/login");
        }
    }, [token]);

    if (isLoading) {
        return (
            <>
                <div className="w-full h-screen flex justify-center items-center">
                    <Loading size="80" />
                </div>
            </>
        );
    }

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
