import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Case } from "../types/quize";
import useGetQuizzes from "../hooks/quizes/useGetQuizzes";
import Card from "../components/home/Card";
import useQuizeStore from "../store/useQuizeStore";

const Results = () => {
    const { mutateAsync: getQuizzes } = useGetQuizzes();
    const [filteredQuizzes, setFilteredQuizzes] = useState<Case[] | null>(null); // Use `null` for initial loading state
    const quizzesResult = useQuizeStore((state) => state.quizzesResult);

    useEffect(() => {
        const fetchFilteredQuizzes = async () => {
            try {
                // Fetch all quizzes
                const allQuizzes = await getQuizzes();
                console.log("All Quizzes:", allQuizzes);
                console.log("Quizzes Result:", quizzesResult);

                // Check if quizzesResult is an object and has the necessary `caseId` property
                if (quizzesResult && quizzesResult.caseId) {
                    // Filter quizzes based on caseId from quizzesResult
                    const filtered = allQuizzes.filter(
                        (quiz: Case) => quiz.id === quizzesResult.caseId
                    );

                    console.log("Filtered Quizzes:", filtered);

                    setFilteredQuizzes(filtered || []);
                } else {
                    console.warn(
                        "quizzesResult is not valid or missing caseId",
                        quizzesResult
                    );
                    setFilteredQuizzes([]); // Set empty array if quizzesResult is invalid
                }
            } catch (error) {
                console.error("Failed to fetch and filter quizzes:", error);
                setFilteredQuizzes([]); // Fallback in case of error
            }
        };

        fetchFilteredQuizzes();
    }, [getQuizzes, quizzesResult]);

    // Handle loading state
    if (filteredQuizzes === null) {
        return (
            <div className="text-black text-2xl text-center w-full">
                <p>Loading quiz results...</p>
            </div>
        );
    }

    // Handle no results
    if (filteredQuizzes.length === 0) {
        return (
            <div className="text-black text-2xl text-center w-full">
                <p>No quizzes found.</p>
            </div>
        );
    }

    // Render filtered quizzes
    return (
        <div className="text-black text-2xl text-start w-full">
            {filteredQuizzes.map((quiz) => (
                <Card
                    key={quiz.id}
                    author={quiz.author}
                    difficulty={quiz.difficulty}
                    title={quiz.title}
                    id={quiz.id}
                    isDone={true}
                />
            ))}
        </div>
    );
};

export default Results;
