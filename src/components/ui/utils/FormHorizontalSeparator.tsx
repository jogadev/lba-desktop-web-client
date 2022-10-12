import React, { FC } from "react";

interface IHorizontalSeparatorProps {
    label: string
}

export const HorizontalSeparator : FC<IHorizontalSeparatorProps> = (props) => {
    
    return (
        <div className="w-full flex flex-row items-center py-3">
            <div className="flex-1 border-b-2 border-gray-800 h-0"></div>
            <p className="font-rhd-rg px-2">{props.label}</p>
            <div className="flex-1 border-b-2 border-gray-800 h-0"></div>
        </div>
    )
}