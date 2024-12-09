import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import useTokenStore from "../../store/useTokenStore";

const useGetCurrentQuize = () => {
    const token = useTokenStore((state) => state.token);
    return useMutation({
        mutationFn: async (caseId: string) => {
            const response = await axios.get(
                `${baseUrl}/quiz/${caseId}/questions`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data.data;
        },
        onSuccess: () => {},
        onError: (err) => {
            console.log(err);
        },
    });
};

export default useGetCurrentQuize;
