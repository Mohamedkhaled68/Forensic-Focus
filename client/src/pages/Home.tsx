import { Outlet, useParams } from "react-router-dom";
import { AvailableCases } from "../components";
import useGetQuizzes from "../hooks/quizes/useGetQuizzes";
import useTokenStore from "../store/useTokenStore";
import { useEffect, useState, useCallback } from "react";
import { Case } from "../types/quize";

const Home = () => {
    const [quizzes, setQuizzes] = useState<Case[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { mutateAsync: getQuizzes } = useGetQuizzes();
    const token = useTokenStore((state) => state.token);
    const { id } = useParams();

    const fetchQuizzes = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        setError(null); // Reset error state before fetching
        try {
            const quizzes = await getQuizzes();
            setQuizzes(quizzes);
        } catch (err) {
            setError("Failed to fetch quizzes. Please try again.");
            console.error("Error fetching quizzes:", err);
        } finally {
            setLoading(false);
        }
    }, [getQuizzes, token]);

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            fetchQuizzes();
        }

        return () => {
            isMounted = false; // Cleanup to prevent state updates on unmounted components
        };
    }, [fetchQuizzes]);

    if (loading) return <div>Loading quizzes...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return <>{id ? <Outlet /> : <AvailableCases quizzes={quizzes} />}</>;
};

export default Home;
