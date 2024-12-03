import { TailSpin } from "react-loader-spinner";

interface LoadingProps {
    size?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 40 }) => {
    return (
        <TailSpin
            visible={true}
            height={size}
            width={size}
            color="#9b9b9b"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
        />
    );
};

export default Loading;
