import { FC } from "react";
import { JsxElement } from "typescript";

interface IInputLabelProps {
    name: string
    label: string
}

export const InputLabel : FC<IInputLabelProps> = props => {
    return (
        <label 
            htmlFor={props.name}
            className="font-rhd-md text-gray-900 block"
        >
            {props.label}
        </label>
    )
}

export type SizeOptions =  'xs' | 'sm' | 'md' | 'lg' | 'xl';
const sizeMap = {
    'xs': 'w-1/5',
    'sm': 'w-2/5',
    'md': 'w-3/5',
    'lg': 'w-4/5',
    'xl': 'w-full' 
}
interface IInputContainerProps { 
    children: JSX.Element[],
    size?: SizeOptions
}
export const InputContainer : FC<IInputContainerProps> = (props) => {
    const sizePresent = props.size != null;
    const size = sizePresent
                    ? sizeMap[props.size!]
                    : 'w-max';
    return (
        <fieldset className={`block h-fit px-2 ${size} py-2`}>
            {props.children}
        </fieldset>
    );
}