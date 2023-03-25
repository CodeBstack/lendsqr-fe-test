import React, { FormEvent } from 'react';
import LogoIcon from '../../Components/Vectors/LogoIcon';
import { ReactComponent as LoginBG } from '../../assets/loginBg.svg';
import InputField from '../../Components/InputField';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      navigate('/')
  };

  return (
    <div className="min-h-screen p-6 md:py-[106px] md:px-[97px] bg-white">
      <LogoIcon />
      <div className="flex gap-[69px] justify-between">
        <div className="justify- items-end hidden md:flex">
          <LoginBG />
        </div>
        <div className="mt-10 flex-1 mx-auto max-w-[450px] w-full flex flex-col justify-center">
          <h1 className="font-bold text-[#213F7D] text-2xl md:text-[40px]">
            Welcome!
          </h1>
          <p className="font-normal text-base md:text-2xl text-[#545F7D]">
            Enter details to login.
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="mt-[60px] w-full flex flex-col gap-6"
          >
            <InputField
              type="text"
              placeholder="Email"
            />
            <InputField
              type="password"
              placeholder="Password"
            />

            <Link
              to=""
              className="font-semibold text-xs text-primary"
            >
              Forgot PASSWORD?
            </Link>

            <button
              type="submit"
              className="rounded-[8px] bg-primary w-full mt-6 py-4 text-white text-sm font-semibold"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
