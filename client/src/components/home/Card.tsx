import { useNavigate } from "react-router-dom";
import { caseImage } from "../../assets";

export interface CardProps {
    author: string;
    difficulty: string;
    title: string;
    progress?: number;
    id: number;
    isDone?: boolean;
}

const Card = ({ author, difficulty, title, id, isDone = false }: CardProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (isDone) return;
        navigate(`/${id}`);
    };

    function shortenText(text: string) {
        const words = text.split(" ");
        if (words.length > 6) {
            return words.slice(0, 6).join(" ") + "...";
        }
        return text;
    }

    let difficultyText: JSX.Element;
    if (difficulty === "Easy") {
        difficultyText = (
            <p className="text-body-16-m text-secondary-2-700">Easy</p>
        );
    } else if (difficulty === "Intermediate") {
        difficultyText = (
            <p className="text-body-16-m text-secondary-3-400">Intermediate</p>
        );
    } else if (difficulty === "Hard") {
        difficultyText = (
            <p className="text-body-16-m text-secondary-1-500">Hard</p>
        );
    } else {
        difficultyText = (
            <p className="text-body-16-m text-neutral-1-500">{difficulty}</p>
        );
    }
    return (
        <div
            onClick={handleNavigate}
            className="overflow-hidden shadow-custom rounded-[10px] bg-[#FDFDFD] min-w-[350px] max-w-[500px] pb-[16px] flex flex-col gap-[12px] hover:translate-y-[4px] duration-300 cursor-pointer select-none"
        >
            <img src={caseImage} alt="case" />
            <div className="px-[16px] flex flex-col w-full">
                <div className="mb-[12px] flex justify-between items-center">
                    <p className="text-body-16-m text-neutral-1-500">
                        {author}
                    </p>
                    {difficultyText}
                </div>
                <h1 className="text-body-16-sb text-blue-900 mb-[16px]">
                    {shortenText(title)}
                </h1>
                <div className="h-[8px] w-[100%] rounded-[12px] bg-neutral-1-100 mb-[4px]">
                    <div
                        className={`h-full w-[${String(
                            30
                        )}%] rounded-[12px] bg-blue-500`}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-14-m text-neutral-1-500">
                        Progress:
                    </p>
                    <p className="text-body-14-m text-blue-500">
                        {isDone ? "100" : "30"}%
                    </p>
                </div>
                {isDone && (
                    <button className="text-center mt-[12px] px-[8px] py-[16px] text-body-16-m text-blue-900 rounded-[10px] border border-blue-500">
                        See results
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
