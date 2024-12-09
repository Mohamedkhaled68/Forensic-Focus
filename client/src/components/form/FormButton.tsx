import Loading from "../shared/ui/Loading";

interface ButtonProps {
    disabled: boolean;
    loading?: boolean;
    text: string;
    className?: string;
}
const FormButton = ({ disabled, text, className, loading }: ButtonProps) => {
    return (
        <button
            type="submit"
            disabled={disabled || loading}
            className={`mt-[40px] p-[16px] flex justify-center items-center text-body-18-m text-white rounded-[10px] bg-blue-500 disabled:bg-blue-200 hover:bg-blue-700 active:bg-blue-800 duration-300 ${className}`}
        >
            {loading ? <Loading size="20" /> : text}
        </button>
    );
};

export default FormButton;
