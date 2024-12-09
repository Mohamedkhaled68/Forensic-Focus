import { create } from "zustand";
import { User } from "../types/user";

interface State {
    user: User | null;
}

interface Actions {
    setUser: (user: User) => void;
    removeUser: () => void;
}

const useUserStore = create<State & Actions>((set) => {
    // Retrieve user from localStorage on initialization (if any)
    const storedUser = localStorage.getItem("FORENSIC_FOUCS_USER");
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    return {
        user: initialUser, // Initialize state with the value from localStorage
        setUser: (user: User) => {
            // Save user to localStorage whenever the state is updated
            localStorage.setItem("FORENSIC_FOUCS_USER", JSON.stringify(user));
            set({ user });
        },
        removeUser: () => {
            // Remove user from both state and localStorage
            localStorage.removeItem("FORENSIC_FOUCS_USER");
            set({ user: null });
        },
    };
});

export default useUserStore;
