import React, { useState } from 'react'
import DropDownWrapper from '..'
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import { IconButton } from '@mui/material';

function TypeDropdown() {
  const [Tab, setTab] = useState("All");

    return (
        <div className=" flex h-[56px] items-center gap-1 rounded-[12px] bg-[#F9FAFB] p-4  ">
            <span className="text-base font-normal text-grey_30  ">
                Status:{" "}
            </span>

            <DropDownWrapper
                action={
                    <div className="flex cursor-pointer items-center gap-3 text-base font-normal capitalize text-grey_10 ">
                        {Tab}
                        <span>
                            <KeyboardArrowDownRoundedIcon />
                        </span>
                    </div>
                }
            >
                <div className="flex cursor-pointer flex-col gap-3  ">
                    <p className="" onClick={() => setTab("all")}>
                        All
                    </p>
                    <p className="" onClick={() => setTab("pending")}>
                        Pending
                    </p>
                </div>
            </DropDownWrapper>
        </div>
    )
}

export default TypeDropdown