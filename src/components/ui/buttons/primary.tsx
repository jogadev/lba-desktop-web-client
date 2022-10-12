import React from "react";
import { IButtonProps } from "./types";

function PrimaryButton(props: IButtonProps){
    return (
        <button
            className="btn bg-blue-600 text-white rounded-lg px-3 py-1 font-rhd-rg"
        >
            {props.label}
        </button>
    )
}

export default PrimaryButton;