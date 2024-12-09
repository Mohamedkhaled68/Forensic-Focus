import { useEffect, useState } from "react";
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { boost, overviewImage, rightArrow } from "../../assets";
import useGetCurrentQuize from "../../hooks/quizes/useGetCurrentQuize";
import InternalNavbar from "../../components/shared/ui/InternalNavbar";
import useQuizeStore from "../../store/useQuizeStore";

const tabs = [
    {
        title: "Case Description",
        path: "case-description",
    },
    {
        title: "Evidence Analysis",
        path: "evidence-analysis",
    },
    {
        title: "Critical Thinking",
        path: "critical-thinking",
    },
];

const CasePage = () => {
    const { id } = useParams();
    const [currentTab, setCurrentTab] = useState(0);
    const { mutateAsync: getQuize } = useGetCurrentQuize();
    const { setQuize, quize } = useQuizeStore((state) => state);
    const navigate = useNavigate();
    const location = useLocation();

    const handelNavigateBtn = (type: string) => {
        if (currentTab === 0 && type == "prev") {
            return;
        }
        if (currentTab === tabs.length - 1 && type == "next") {
            return;
        }
        if (type === "prev") {
            navigate(tabs[currentTab - 1].path);
        }

        if (type === "next") {
            navigate(tabs[currentTab + 1].path);
        }
    };

    useEffect(() => {
        const fetchQuize = async () => {
            if (id) {
                const quize = await getQuize(id);
                setQuize(quize);
            }
        };

        return () => {
            fetchQuize();
        };
    }, [id]);

    useEffect(() => {
        let currentLocation = location.pathname.slice(3);
        const index = tabs.findIndex((tab) => tab.path === currentLocation);
        setCurrentTab(index);
    }, [location]);
    return (
        <>
            <div className="flex items-center gap-[8px] mb-[26px]">
                <Link to={"/"} className="text-neutral-1-500 text-body-16-r">
                    Home Page
                </Link>
                <span>
                    <img src={rightArrow} alt="right-arrow" />
                </span>
                <span className="text-blue-900 text-body-16-sb">
                    {quize && quize.title}
                </span>
            </div>
            <h1 className="text-h1-40-sb text-blue-900 mb-[32px]">
                {quize && quize.title}
            </h1>
            <InternalNavbar tabs={tabs} />
            <div className="container mx-auto pb-[40px]">
                <div className="w-full rounded-[10px] max-h-[400px] overflow-hidden">
                    <img
                        className="max-w-full h-full object-cover"
                        src={overviewImage}
                        alt="overview"
                    />
                </div>
                <Outlet />
                {location.pathname.slice(3) !== "critical-thinking" && (
                    <div className="w-[50%] mx-auto flex justify-between items-center mt-[64px]">
                        <button
                            disabled={currentTab === 0}
                            onClick={() => handelNavigateBtn("prev")}
                            className={`outline-none p-[16px] rounded-[10px] group border border-blue-500 text-body-16-m text-blue-900 flex items-center justify-center gap-[8px] hover:bg-blue-100 duration-300 active:bg-blue-800 active:text-white ${
                                currentTab === 0
                                    ? "text-neutral-1-500 border-neutral-1-500"
                                    : ""
                            }`}
                        >
                            <div className="p-[6px] rotate-180">
                                <img
                                    className={`group-active:invert group-active:sepia group-active:saturate-[1000%] group-active:hue-rotate-[180deg] ${
                                        currentTab === 0
                                            ? "invert-[40%] sepia saturate-[10%] hue-rotate-[180deg]"
                                            : ""
                                    }`}
                                    src={boost}
                                    alt="prev"
                                />
                            </div>
                            <span>Previous</span>
                        </button>
                        <button
                            disabled={currentTab === tabs.length - 1}
                            onClick={() => handelNavigateBtn("next")}
                            className={`outline-none p-[16px] rounded-[10px] group border border-blue-500 text-body-16-m text-blue-900 flex items-center justify-center gap-[8px] hover:bg-blue-100 duration-300 active:bg-blue-800 active:text-white ${
                                currentTab === tabs.length - 1
                                    ? "text-neutral-1-500 border-neutral-1-500"
                                    : ""
                            }`}
                        >
                            <span>Next</span>
                            <div className="p-[6px]">
                                <img
                                    className={`group-active:invert group-active:sepia group-active:saturate-[1000%] group-active:hue-rotate-[180deg] ${
                                        currentTab === tabs.length - 1
                                            ? "invert-[40%] sepia saturate-[10%] hue-rotate-[180deg]"
                                            : ""
                                    }`}
                                    src={boost}
                                    alt="next"
                                />
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CasePage;
