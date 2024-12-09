import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios, { AxiosError } from "axios";
import useTokenStore from "../../store/useTokenStore";
import { useNavigate } from "react-router-dom";
import useQuizeStore from "../../store/useQuizeStore";

interface SubmitQuizPayload {
    caseId: number;
    answers: string[];
}

interface ApiResponse {
    data: {
        caseId: number;
    };
}

const useSubmitQuiz = () => {
    const navigate = useNavigate();
    const token = useTokenStore((state) => state.token);

    const setQuizzesResult = useQuizeStore((state) => state.setQuizzesResult);
    return useMutation({
        mutationFn: async ({ caseId, answers }: SubmitQuizPayload) => {
            if (!token) {
                throw new Error("User is not authenticated.");
            }

            if (!caseId) {
                throw new Error("Case ID is required to submit the quiz.");
            }

            const response = await axios.post<ApiResponse>(
                `${baseUrl}/quiz/${caseId}/submit`,
                { answers },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return response.data;
        },
        onSuccess: (data: any) => {
            // Remove saved answers from localStorage
            localStorage.removeItem("quizeAnswers");
            console.log(data.data);

            setQuizzesResult(data.data);
            // Navigate to the results page with caseId
            navigate("/results");
        },
        onError: (error: AxiosError | Error) => {
            if (axios.isAxiosError(error)) {
                console.error("API Error:", error.response?.data);
            } else {
                console.error("Error:", error.message);
            }
        },
    });
};

export default useSubmitQuiz;
