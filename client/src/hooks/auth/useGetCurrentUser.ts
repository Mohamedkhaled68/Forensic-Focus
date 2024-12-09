import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import useTokenStore from "../../store/useTokenStore";

const useGetCurrentUser = () => {
    const token = useTokenStore((state) => state.token);
    return useMutation({
        mutationKey: ["get-current-user"],
        mutationFn: async () => {
            const response = await axios.get(`${baseUrl}/auth/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.data;
        },
        onSuccess: () => {},
        onError: (err: any) => {
            console.log(err?.response?.data?.message);
        },
    });
};

export default useGetCurrentUser;
