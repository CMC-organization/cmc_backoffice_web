import React from "react";

// Exemplo de uso do validate regex:
// validate={{
//   required: "Campo obrigatório!",
//   maxLength: {
//     value: 40,
//     message: "Máximo 40 caracteres!"
//   },
//   minLength: {
//     value: 2,
//     message: "Mínimo 2 caracteres!"
//   },
// }}

const InputXL = ({
  label,
  placeholder,
  error,
  disabled,
  validate,
  registerKey,
  register,
}) => (
  <div className="w-full flex flex-col">
    <label className="text-base text-font font-mediumc mb-2">{label}</label>
    <textarea
      className={`
      text-lg text-slate-200 font-regularc w-full h-32 px-3 py-2 rounded-lg bg-secondar border-1
      ${error ? "border-red1" : "border-border"}
      `}
      placeholder={placeholder}
      disabled={disabled}
      {...register(registerKey, validate)}
    />
    <span className="min-h-4 mt-2 text-sm font-semiboldc text-red1">
      {error?.message}
    </span>
  </div>
);

export default InputXL;
