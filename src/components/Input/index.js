import React from 'react'
import InputMask from 'react-input-mask'

const Input = ({
  label,
  placeholder,
  error,
  mask,
  disabled,
  register,
  registerKey,
  height,
  validate,
}) => (
  <div className="flex flex-col items-start w-full">
    <label className="text-base mb-2 font-mediumc text-font">{label}</label>
    {mask ? (
      <InputMask
        className={`
          text-lg font-regularc w-full pl-3 rounded-xl border-1 bg-offWhite
          ${height ? height : 'h-12'}
          ${error ? 'border-red1' : 'border-border'}
          `}
        mask={mask}
        placeholder={placeholder}
        name={registerKey}
        {...register(registerKey, validate)}
        disabled={disabled}
        autoComplete="off"
      />
    ) : (
      <input
        className={`
      text-lg font-regularc w-full pl-3 rounded-xl border-1 bg-offWhite
      ${height ? height : 'h-12'}
      ${error ? 'border-red1' : 'border-border'}
      `}
        placeholder={placeholder}
        {...register(registerKey, validate)}
        disabled={disabled}
        autoComplete="off"
      />
    )}
    <span className="min-h-5 mt-2 text-sm font-semiboldc text-red1">
      {error?.message}
    </span>
  </div>
)

export default Input
