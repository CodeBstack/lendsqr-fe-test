import React, { useRef, useState } from 'react';
import './styles.scss';

interface Props {
  type?: string;
  placeholder: string;
}

const InputField: React.FC<Props> = ({
  type,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] =
    useState<boolean>(false);
  return (
    <div className='input'>
      <input
        ref={inputRef}
        type={showPassword ? 'text' : type}
        defaultValue=""
        // onChange={(e) => setTodo(e.target.value)}
        placeholder={placeholder}
        className="input__box"
      />
      {type === 'password' && (
        <button
          type="button"
          className="icon-btn -mr-1 select-none"
          onClick={() =>
            setShowPassword(!showPassword)
          }
        >
          {showPassword ? (
            <p className="font-semibold text-primary text-xs">HIDE</p>
          ) : (
            <p className="font-semibold text-primary text-xs">SHOW</p>
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;

// const InputField = forwardRef(
//
//     {
//       label,
//       className = "",
//       spaceY = true,
//       variant = "free",
//       bg = "#F9FAFB",
//       prefixIcon,
//       suffixIcon,
//       isInvalid,
//       value = "",
//       textSize = "text-xl",
//       formGroupBg,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <div
//         style={{ background: bg }}
//         className={`form-group ${formGroupBg ? 'formGroupBg rounded-xl' : ''}  ${props.rounded_none ? "" : "rounded-lg"} ${isInvalid ? "invalid" : ""
//           } ${!spaceY
//             ? ""
//             : variant === "free"
//               ? "mt-16"
//               : variant === "nofree"
//                 ? "mt-10"
//                 : "mt-0"
//           }  ${className}`}
//       >
//         {label && (
//           <label
//             className={`font-medium  ${formGroupBg ? '-top-10' : ''} ${textSize} text-grey_30 ${variant === "condensed" ? "-top-3" : "-top-8 -ml-4"
//               }  px-2`}
//           >
//             {label}{" "}
//             {props.required ? <span className="text-error">*</span> : ""}
//           </label>
//         )}
//         {prefixIcon && (
//           <span className="icon-btn -ml-1 mr-2 select-none">{prefixIcon}</span>
//         )}
//         <input
//           {...props}
//           ref={ref}
//           defaultValue={value}
//           type={showPassword ? "text" : props.type}
//           className={`placeholder-neutral  z-10 w-full bg-transparent placeholder:text-sm placeholder:font-normal focus:outline-none `}
//         />
//         {suffixIcon && (
//           <span className="icon-btn ml-1 select-none">{suffixIcon}</span>
//         )}
//         {props.type === "password" && (
//           <button
//             type="button"
//             className="icon-btn -mr-1 select-none"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? (
//               <VisibilityOffOutlinedIcon sx={{ color: "#8585A3" }} />
//             ) : (
//               <RemoveRedEyeOutlinedIcon sx={{ color: "#8585A3" }} />
//             )}
//           </button>
//         )}
//       </div>
//     );
//   }
// );

// export default InputField;
