import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import CloseEyeIcon from "../../images/svg/CloseEyeIcon";
import OpenEyeIcon from "../../images/svg/OpenEyeIcon";

const InputPassword = ({
  label,
  placeholder,
  error,
  register,
  registerKey,
  validate,
  disabled,
  height,
}) => {
  const [stateEye, setStateEye] = useState(false);
  const isSmartphone = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="w-full">
      <div className="flex flex-col items-start w-full my-2.5">
        <label className="text-base mb-2 font-mediumc text-font">{label}</label>
        <input
          className={`
          text-base font-regularc w-full pl-3 rounded-xl pr-10 border-1
          ${height ? height : "h-12"} 
          ${error ? "border-red1" : "border-border"}
          bg-offWhite
           `}
          {...register(registerKey, validate)}
          placeholder={placeholder}
          type={stateEye ? "text" : "password"}
          disabled={disabled}
          autoComplete="off"
        />
        <span className="min-h-5 mt-2 text-sm font-semiboldc text-red1">
          {error?.message}
        </span>
      </div>

      {stateEye ? (
        <div className="relative">
          <div
            className={`absolute right-4 ${
              isSmartphone ? "bottom-[30px]" : "bottom-[50px]"
            } cursor-pointer`}
            onClick={() => setStateEye((prevState) => !prevState)}
          >
            <OpenEyeIcon />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div
            className={`absolute right-4 ${
              isSmartphone ? "bottom-[30px]" : "bottom-[50px]"
            } cursor-pointer`}
            onClick={() => setStateEye((prevState) => !prevState)}
          >
            <CloseEyeIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputPassword;
