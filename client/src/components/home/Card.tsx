import { useNavigate } from "react-router-dom";
import { caseImage } from "../../assets";

export interface CardProps {
    author: string;
    level: string;
    title: string;
    progress: number;
    id: number;
}

const Card = ({ author, level, progress, title, id }: CardProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/${id}`);
    };
    return (
        <div
            onClick={handleNavigate}
            className="overflow-hidden shadow-custom rounded-[10px] bg-[#FDFDFD] min-w-[350px] max-w-[400px] pb-[16px] flex flex-col gap-[12px] hover:translate-y-[4px] duration-300 cursor-pointer select-none"
        >
            <img src={caseImage} alt="case" />
            <div className="px-[16px] flex flex-col w-full">
                <div className="mb-[12px] flex justify-between items-center">
                    <p className="text-body-16-m text-neutral-1-500">
                        {author}
                    </p>
                    <p className="text-body-16-m text-neutral-1-500">{level}</p>
                </div>
                <h1 className="text-body-16-sb text-blue-900 mb-[16px]">
                    {title}
                </h1>
                <div className="h-[8px] w-[100%] rounded-[12px] bg-neutral-1-100 mb-[4px]">
                    <div
                        className={`h-full w-[${String(
                            progress
                        )}%] rounded-[12px] bg-blue-500`}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-14-m text-neutral-1-500">
                        Progress:
                    </p>
                    <p className="text-body-14-m text-blue-500">{progress}%</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
