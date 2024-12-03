import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { availableCasesCards } from "../../utils/constants";
import { CardProps } from "../../components/home/Card";
import { rightArrow } from "../../assets";

const CasePage = () => {
    const [currentCase, setCurrentCase] = useState<null | CardProps>(null);
    const { id } = useParams();

    useEffect(() => {
        const currCase = availableCasesCards.filter((i) => i.id === Number(id));
        setCurrentCase(currCase[0]);
    }, []);
    return (
        <>
            <div className="flex items-center gap-[8px] mb-[26px]">
                <span className="text-neutral-1-500 text-body-16-r">
                    Home Page
                </span>
                <span>
                    <img src={rightArrow} alt="right-arrow" />
                </span>
                <span className="text-blue-900 text-body-16-sb">
                    {currentCase && currentCase.title}
                </span>
            </div>
            <h1 className="text-h1-40-sb text-blue-900">
                {currentCase && currentCase.title}
            </h1>
        </>
    );
};

export default CasePage;
