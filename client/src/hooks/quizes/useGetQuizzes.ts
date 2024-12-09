import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import useTokenStore from "../../store/useTokenStore";

const useGetQuizzes = () => {
    const token = useTokenStore((state) => state.token);
    return useMutation({
        mutationFn: async () => {
            const response = await axios.get(`${baseUrl}/quiz/available`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.data.quizzes;
        },
        onSuccess: () => {},
        onError: (err) => {
            console.log(err);
        },
    });
};

export default useGetQuizzes;
