import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { UserLoginData } from "../types/auth";

const useLogin = () => {
    return useMutation({
        mutationFn: async (data: UserLoginData) => {
            const response = await axios.post(
                `${baseUrl}/api/auth/login`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response);
        },
        onSuccess: () => {},
        onError: (err) => {
            console.log(err);
        },
    });
};

export default useLogin;
