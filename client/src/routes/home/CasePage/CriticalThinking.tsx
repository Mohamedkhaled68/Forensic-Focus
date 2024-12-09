import { useState } from "react";
import useQuizeStore from "../../../store/useQuizeStore";
import QuizCriticalQuestion from "../../../components/home/QuizCriticalQuestion";
import { submit } from "../../../assets";
import useSubmitQuiz from "../../../hooks/quizes/useSubmitQuiz";

const CriticalThinking = () => {
    const quize = useQuizeStore((state) => state.quize);
    const answers = useQuizeStore((state) => state.answers);
    const { mutateAsync: submitQuiz } = useSubmitQuiz();
    const [inputs, setInputs] = useState<{ [key: number]: string }>({});

    // Count filled inputs
    const filledInputsCount = Object.values(inputs).filter((value) => value.trim() !== "").length;

    const handleInputChange = (id: number, value: string) => {
        setInputs((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmitAnswers = async () => {
        const newAnswers = answers.map((m) => m.answer.charAt(0));
        console.log(newAnswers);

        try {
            await submitQuiz({ caseId: Number(quize?.case_id), answers: newAnswers });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1 className="text-h1-32-m text-blue-900 my-[40px] flex items-center justify-between">
                Critical Thinking
                <span className="text-h1-28-m text-neutral-1-900">
                    {filledInputsCount}/{quize?.criticalQuestions.length}
                </span>
            </h1>
            <div className="flex flex-col gap-[32px]">
                {quize?.criticalQuestions.map((question, idx) => (
                    <QuizCriticalQuestion
                        key={question}
                        question={question}
                        id={idx}
                        handleInputChange={(value) => handleInputChange(idx, value)}
                        input={inputs[idx] || ""}
                    />
                ))}
                <div className="w-[50%] mx-auto flex justify-center items-center mt-[64px]">
                    <button
                        onClick={handleSubmitAnswers}
                        className={`outline-none p-[16px] rounded-[10px] group border border-blue-500 text-body-16-m text-blue-900 flex items-center justify-center gap-[8px] hover:bg-blue-100 duration-300 active:bg-blue-800 active:text-white`}
                    >
                        <span>submit</span>
                        <div className="p-[2.5px]">
                            <img
                                src={submit}
                                className={`group-active:invert group-active:sepia group-active:saturate-[1000%] group-active:hue-rotate-[180deg]`}
                                alt="submit"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CriticalThinking;
