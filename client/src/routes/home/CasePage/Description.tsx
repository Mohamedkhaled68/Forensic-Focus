import useQuizeStore from "../../../store/useQuizeStore";

const Description = () => {
    const quize = useQuizeStore((state) => state.quize);
    return (
        <>
            <h1 className="text-h1-32-m text-blue-900 my-[40px]">
                Case Description
            </h1>
            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-blue-900 text-h2-28-m">Overview</h1>
                    <p className="text-body-18-r text-blue-900">
                        {quize?.overview}
                    </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-blue-900 text-h2-28-m">
                        Available Evidence
                    </h1>
                    {quize?.availableEvidence.map((evidence, idx) => {
                        return (
                            <p
                                key={idx}
                                className="text-body-18-r text-blue-900"
                            >
                                <span className="text-body-18-sb">
                                    {evidence.evidence_type}:
                                </span>{" "}
                                {evidence.description}
                            </p>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-blue-900 text-h2-28-m">
                        Preliminary Analysis
                    </h1>
                    {}
                    <p className="text-body-18-r text-blue-900">
                        In a horrifying incident that occurred on the desert
                        road, two bodies were found buried just one meter below
                        the surface. The bodies were in an advanced state of
                        decomposition, suggesting that the crime took place some
                        time ago. The following evidence was discovered near the
                        bodies: a sharp knife, a cleaver, and traces of blood
                        indicating that the victims were likely killed with a
                        sharp object. The location where the bodies were found
                        reflects a remote area, which could suggest that the
                        crime took place in an isolated spot, away from the
                        sight of others. The bruises and wounds on the bodies
                        suggest that the victims were subjected to a violent
                        attack before their deaths. By analyzing the burial
                        site, as well as the physical evidence, we can determine
                        the nature of the crime (it could be a murder, or a
                        crime driven by robbery or revenge).
                    </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-blue-900 text-h2-28-m">Objective</h1>
                    {quize?.objective.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <span className="text-body-18-r text-blue-700">
                                {idx + 1})
                            </span>
                            <p className="text-body-18-r text-blue-900">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Description;
