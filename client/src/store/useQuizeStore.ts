import { create } from "zustand";
import { Quize } from "../types/quize";

interface Answer {
    answer: string;
    questionId: string;
}

interface QuizeResult {
    caseId: number;
    score: number;
    myAnswers: Answer[];
    correctAnswers: Answer[];
    message: string;
    total_questions: number;
}

interface State {
    quize: Quize | null;
    answers: Answer[];
    quizzesResult: QuizeResult[] | null;
}

interface Actions {
    setQuize: (quize: Quize) => void;
    setAnswers: (answer: Answer) => void;
    setQuizzesResult: (quizes: QuizeResult[]) => void;
}

const ANSWERS_STORAGE_KEY = "quizeAnswers";
const RESULTS_STORAGE_KEY = "quizzesResult";

// Store: useQuizeStore
const useQuizeStore = create<State & Actions>((set, get) => ({
    quize: null,
    quizzesResult: [],  // Initialize as an empty array, not null
    answers: JSON.parse(localStorage.getItem(ANSWERS_STORAGE_KEY) || "[]"),
    setQuize: (quize: Quize) => set({ quize }),

    setQuizzesResult: (quizes: QuizeResult[]) => set({ quizzesResult: quizes }),

    setAnswers: (newAnswer: Answer) => {
        const { answers } = get();

        // Check if the new answer's question ID already exists in the answers array
        const existingAnswerIndex = answers.findIndex(
            (a) => a.questionId === newAnswer.questionId
        );

        let updatedAnswers;
        if (existingAnswerIndex !== -1) {
            // Update the existing answer
            updatedAnswers = [...answers];
            updatedAnswers[existingAnswerIndex] = newAnswer;
        } else {
            // Add the new answer
            updatedAnswers = [...answers, newAnswer];
        }

        // Save to localStorage
        localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(updatedAnswers));

        // Update the state
        set({ answers: updatedAnswers });
    },
}));


export default useQuizeStore;
