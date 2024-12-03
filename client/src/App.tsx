import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, PendingAssignments, Results, SignUp } from "./pages";
import { CasePage, ProtectedRoute } from "./routes"; // Assuming ProtectedRoute is in the "routes" folder
import { useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Routes location={location}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/"
                    element={<ProtectedRoute locationKey={location.key} />}
                >
                    <Route path="/" element={<Home />}>
                        <Route path=":id" element={<CasePage />} />
                    </Route>

                    <Route path="results" element={<Results />} />
                    <Route
                        path="pending-assignments"
                        element={<PendingAssignments />}
                    />
                </Route>
            </Routes>
        </motion.div>
    );
};

export default App;
