import React from "react";
import Shadow from "./shadow";


interface ModalProps {
    visible: boolean,
    children: JSX.Element,
}

export default function GenericModal(props: ModalProps){
    return (
        <div
            className="absolute flex items-center justify-center z-20 w-full h-full top-0 left-0"
        >
            <div className="absolute z-50 min-w-[800px] min-h-[350px] bg-white rounded-xl p-3 ">
                {props.children}
            </div>
            <Shadow/>
        </div>
    )
}
