import { useEffect, useState } from "react";
import useQuizeStore from "../../store/useQuizeStore";
import { Question } from "../../types/quize";

const QuizeQuestion = ({ question }: { question: Question }) => {
    const { setAnswers, answers } = useQuizeStore((state) => state);
    const [choosen, setChoosen] = useState<string>("");

    const handleChoose = (answer: string, questionId: string) => {
        setAnswers({ answer, questionId });
        setChoosen(answer);
    };

    useEffect(() => {
        console.log(answers);
    }, []);

    return (
        <>
            <div className="flex flex-col gap-[32px] w-full">
                <h1 className="text-h2-24-m text-blue-900">
                    {question?.question}
                </h1>
                <div className="grid grid-cols-4 gap-y-[16px] gap-x-[24px] px-[16px]">
                    {question?.options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleChoose(option, question.id)}
                            className={`col-span-2 flex items-start gap-2 p-[16px] border-[1px] border-neutral-1-500 rounded-[10px] cursor-pointer transition duration-300 ${
                                choosen === option ? "bg-blue-500" : ""
                            }`}
                        >
                            <p
                                className={`text-body-16-R text-blue-900 transition duration-300 ${
                                    choosen === option ? "text-white" : ""
                                }`}
                            >
                                {option}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuizeQuestion;
