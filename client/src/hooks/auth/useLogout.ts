import { useMutation } from "@tanstack/react-query";
// import { baseUrl } from "../utils/baseUrl";
// import axios from "axios";
import useTokenStore from "../../store/useTokenStore";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";

const useLogout = () => {
    const { signOut } = useTokenStore((state) => state);
    const removeUser = useUserStore((state) => state.removeUser);

    const navigate = useNavigate();
    return useMutation({
        mutationFn: async () => {
           
            signOut();
            removeUser();
        },
        onSuccess: () => {
            navigate("/login");
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message);
        },
    });
};

export default useLogout;
