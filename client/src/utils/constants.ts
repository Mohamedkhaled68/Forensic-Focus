import { CardProps } from "../components/home/Card";
import { UserSignupData, UserLoginData } from "../types/auth";

export const signupFormGroupData = [
    {
        id: "username",
        placeholder: "i.e. Frank",
        label: "Username",
        value: (formValues: UserSignupData) => formValues.username,
        type: "text",
    },
    {
        id: "email",
        placeholder: "i.e. sinatra@example.com",
        label: "Email Address",
        value: (formValues: UserSignupData) => formValues.email,
        type: "email",
    },
    {
        id: "password",
        placeholder: "******",
        label: "Password",
        value: (formValues: UserSignupData) => formValues.password,
        type: "password",
    },
];

export const LoginFormGroupData = [
    {
        id: "email",
        placeholder: "i.e. sinatra@example.com",
        label: "Email Address",
        value: (formValues: UserLoginData) => formValues.email,
        type: "email",
    },
    {
        id: "password",
        placeholder: "******",
        label: "Password",
        value: (formValues: UserLoginData) => formValues.password,
        type: "password",
    },
];

export const availableCasesCards: CardProps[] = [
    {
        id: 1,
        author: "Sarah Ahmed",
        level: "Easy",
        title: "The Mystery of the Vanishing Man",
        progress: 50,
    },
    {
        id: 2,
        author: "John Doe",
        level: "Medium",
        title: "The Disappearing Evidence",
        progress: 80,
    },
    {
        id: 3,
        author: "Emma Smith",
        level: "Hard",
        title: "The Case of the Poisoned Water",
        progress: 40,
    },
    {
        id: 4,
        author: "Ali Mohamed",
        level: "Intermediate",
        title: "The Heist at Midnight",
        progress: 60,
    },
    {
        id: 5,
        author: "Liam Johnson",
        level: "Easy",
        title: "The Stolen Jewelry",
        progress: 90,
    },
    {
        id: 6,
        author: "Olivia Brown",
        level: "Medium",
        title: "The Case of the Missing Key",
        progress: 75,
    },
    {
        id: 7,
        author: "Lucas Williams",
        level: "Hard",
        title: "The Secret in the Old Mansion",
        progress: 30,
    },
    {
        id: 8,
        author: "Sophia Davis",
        level: "Easy",
        title: "The Disappearance at the Mall",
        progress: 55,
    },
];
