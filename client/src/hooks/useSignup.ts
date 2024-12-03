import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { UserSignupData } from "../types/auth";

const useSignup = () => {
    return useMutation({
        mutationFn: async (data: UserSignupData) => {
            const response = await axios.post(
                `${baseUrl}/api/auth/signup`,
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

export default useSignup;
