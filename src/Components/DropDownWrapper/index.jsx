import {useEffect, useRef, useState} from "react";
import "./style.scss";

const DropDownWrapper = ({
  action,
  children,
  className,
  contentPadding = "px-4",
  position = "left",
  orientation = "bottom",
  mobilePosition = null,
  maxWidth = 400,
  border,
  
  closeOnBtnClick = true,
}) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const ref = useRef(null);

  

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div ref={ref} className={`drop-down-wrapper ${className || ""}`}>
      <div onClick={() => setshowDropDown(!showDropDown)} className="">
        {action}
      </div>
      <div
        style={{
          left: position === "left" ? 0 : "unset",
          right: position === "right" ? 0 : "unset",
          maxWidth,
        }}
        className={`drop-down-content ${border} ${
          mobilePosition ? mobilePosition : `${position}-0`
        } md:${position}-0 ${
          position === "right" ? "origin-top-right" : "origin-top-left"
        } ${showDropDown ? "show-drop-down" : ""} ${
          orientation === "top"
            ? `bottom-[120%] origin-bottom-right`
            : orientation === "bottom"
            ? `top-[100%] origin-top-right`
            : `top-[40%] origin-top-right`
        }`}
      >
        <div
          className={`w-full py-2 ${contentPadding}  `}
          onClick={() =>
            closeOnBtnClick ? setshowDropDown(prev => !prev) : null
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDownWrapper;
