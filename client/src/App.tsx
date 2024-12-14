import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
    Home,
    Login,
    PendingAssignments,
    Profile,
    Results,
    SignUp,
} from "./pages";
import {
    CasePage,
    CriticalThinking,
    Description,
    EvidenceAnalysis,
    ProtectedRoute,
} from "./routes";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

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
                        <Route path=":id" element={<CasePage />}>
                            <Route
                                index
                                element={<Navigate to="case-description" />}
                            />
                            <Route
                                path="case-description"
                                element={<Description />}
                            />
                            <Route
                                path="critical-thinking"
                                element={<CriticalThinking />}
                            />
                            <Route
                                path="evidence-analysis"
                                element={<EvidenceAnalysis />}
                            />
                        </Route>
                    </Route>

                    <Route path="settings" element={<Profile />} />
                    <Route path="results" element={<Results />} />
                    <Route
                        path="pending-assignments"
                        element={<PendingAssignments />}
                    />
                </Route>
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
        </motion.div>
    );
};

export default App;
