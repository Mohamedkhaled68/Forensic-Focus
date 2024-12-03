import { useEffect, useState } from "react";
import { facebookIcon, googleIcon, logoIcon } from "../assets";
import { UserLoginData } from "../types/auth";
import { FormButton, FormGroup } from "../components";
import { LoginFormGroupData } from "../utils/constants";
import { Link } from "react-router-dom";
// import useLogin from "../hooks/useLogin";

const initailState = {
    email: "",
    password: "",
};

const Login = () => {
    const [formValues, setFormValues] = useState<UserLoginData>(initailState);
    const [checkbox, setCheckbox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    // const { mutateAsync: login } = useLogin();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        try {
            // await login(formValues);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            console.log(formValues);
        } catch (err: any) {
            console.log(err.message);
        } finally {
            setFormValues(initailState);
            setLoading(false);
        }
    };

    useEffect(() => {
        const isFilled = Object.values(formValues).every(
            (value) => value !== ""
        );
        if (isFilled) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [formValues]);
    return (
        <>
            <main className="w-full h-screen p-[40px]">
                <nav className="h-[50px] w-full">
                    <div className="flex justify-between items-center h-full w-[200px]">
                        <img
                            className="max-w-full object-cover"
                            src={logoIcon}
                            alt="logo"
                        />
                    </div>
                </nav>
                <div className="max-w-[750px] mx-auto pb-10">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-[12px] mb-[64px] justify-center items-center w-full">
                            <h1 className="text-h1-40-m text-blue-900">
                                Login
                            </h1>
                            <p className="text-h1-32-r text-blue-900 text-center">
                                Welcome back! Please enter your details to log
                                in.
                            </p>
                        </div>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            {LoginFormGroupData.map(
                                ({ id, label, value, placeholder, type }) => (
                                    <FormGroup
                                        key={id}
                                        id={id}
                                        label={label}
                                        value={value(formValues)}
                                        placeholder={placeholder}
                                        type={type}
                                        onChange={handleInputChange}
                                    />
                                )
                            )}
                            <div className="mt-[8px] flex items-center gap-[8px]">
                                <input
                                    onChange={(e) =>
                                        setCheckbox(e.target.checked)
                                    }
                                    checked={checkbox}
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="cursor-pointer"
                                />
                                <label
                                    className="text-body-14-m text-secondary-3-500 cursor-pointer"
                                    htmlFor="remember"
                                >
                                    Remeber Me
                                </label>
                            </div>
                            <FormButton
                                loading={loading}
                                disabled={disabled}
                                text="Login"
                            />
                        </form>
                        <div className="flex items-center gap-[4px] my-[32px]">
                            <div className="w-full h-[1px] bg-neutral-1-500" />
                            <span className="text-body-16-m text-neutral-1-500">
                                OR
                            </span>
                            <div className="w-full h-[1px] bg-neutral-1-500" />
                        </div>
                        <div className="flex justify-center items-center gap-[32px] w-full">
                            <button className="p-[16px] w-[50%] flex justify-center items-center text-body-14-m text-blue-900 gap-[8px] border-[1px] border-blue-500 rounded-[10px] hover:bg-blue-100 group active:bg-blue-500 active:text-white duration-300">
                                <img
                                    className="group-active:invert-[1] group-active:sepia group-active:saturate-[1000%] group-active:hue-rotate-180 duration-300"
                                    src={googleIcon}
                                    alt="google"
                                />
                                Sign up with Google
                            </button>
                            <button className="p-[16px] w-[50%] flex justify-center items-center text-body-14-m text-blue-900 gap-[8px] border-[1px] border-blue-500 rounded-[10px] hover:bg-blue-100 active:bg-blue-500 active:text-white duration-300">
                                <img
                                    className="group-active:invert-[1] group-active:sepia group-active:saturate-[1000%] group-active:hue-rotate-180 duration-300"
                                    src={facebookIcon}
                                    alt="facebook"
                                />
                                Sign up with Facebook
                            </button>
                        </div>
                        <div className="mt-[40px] text-center text-body-14-m text-neutral-1-500">
                            Don't have an account?{" "}
                            <Link
                                to={"/signup"}
                                className="text-body-14-sb text-secondary-3-500"
                            >
                                Signup now
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;
