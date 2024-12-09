const QuizCriticalQuestion = ({
    question,
    id,
    handleInputChange,
    input,
}: {
    question: string;
    id: number;
    handleInputChange: (value: string) => void;
    input: string;
}) => {
    return (
        <div className="flex flex-col gap-[32px] w-full">
            <div className="flex items-center gap-[8px]">
                <span className="text-body-18-m text-blue-900">
                    {id + 1})
                </span>
                <h1 className="text-h2-24-m text-blue-900">{question}</h1>
            </div>
            <div className="flex flex-col gap-[8px]">
                <textarea
                    name={`${id}-answer`}
                    id={`${id}-answer`}
                    maxLength={3000}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Enter your answer here and explain your reasoning in detail"
                    className="w-full h-[200px] p-[16px] border-[1px] bg-blue-50 border-neutral-1-500 rounded-[10px] resize-none outline-none placeholder:text-body-18-r placeholder:text-neutral-1-500"
                    value={input}
                />
                <div className="text-body-14-m text-neutral-1-500">
                    {input.length}/3000
                </div>
            </div>
        </div>
    );
};

export default QuizCriticalQuestion;
