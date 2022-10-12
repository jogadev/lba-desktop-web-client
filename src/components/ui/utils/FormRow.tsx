import React, {FC} from "react";

interface IFormRowProps {
    children: JSX.Element | JSX.Element[],
    border?: boolean
}

export const FormRow: FC<IFormRowProps> = (props) => {
    const borderStyle = props.border
                            ? "border border-red-900"
                            : "";
    return (
        <div className={`flex flex-row w-full justify-between items-center ${borderStyle}`}>
            {props.children}
        </div>
    )
}

export const FormCol: FC<IFormRowProps> = (props) => {
    const borderStyle = props.border
                            ? "border border-green-900"
                            : "";

    return (
        <div className={`flex flex-col justify-between ${borderStyle}`}>
            {props.children}
        </div>
    )
}