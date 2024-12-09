import QuizeQuestion from "../../../components/home/QuizeQuestion";
import useQuizeStore from "../../../store/useQuizeStore";

const EvidenceAnalysis = () => {
    const quize = useQuizeStore((state) => state.quize);

    return (
        <>
            <h1 className="text-h1-32-m text-blue-900 my-[40px]">
                Evidence Analysis
            </h1>
            <div className="container mx-auto flex flex-col gap-[32px]">
                {quize?.questions.map((question) => (
                    <QuizeQuestion key={question.id} question={question} />
                ))}
            </div>
        </>
    );
};

export default EvidenceAnalysis;
