import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { UserSignupData } from "../../types/auth";
import useTokenStore from "../../store/useTokenStore";
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
    const setToken = useTokenStore((state) => state.signIn);
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (data: UserSignupData) => {
            const response = await axios.post(
                `${baseUrl}/auth/register`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setToken(response.data.token);
            setUser(response.data.data);
        },
        onSuccess: () => {
            navigate("/");
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message);
        },
    });
};

export default useSignup;
