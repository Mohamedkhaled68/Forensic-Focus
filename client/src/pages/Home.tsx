import { Outlet, useParams } from "react-router-dom";
import { AvailableCases } from "../components";

const Home = () => {
    const { id } = useParams();
    return <>{id ? <Outlet /> : <AvailableCases />}</>;
};

export default Home;
