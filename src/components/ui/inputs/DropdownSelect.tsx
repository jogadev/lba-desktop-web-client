import { FC } from "react";
import { InputLabel, InputContainer, SizeOptions } from "./__utils";

interface IDropdownSelectOption {
    label: string
    id:  string
}

interface IDropdownSelectProps {
    label: string
    name: string
    options: IDropdownSelectOption[]
    required?: boolean
    size?: SizeOptions
}

const DropdownOption : FC<IDropdownSelectOption> = (props) => {
    return (
        <option key={props.id}>
            {props.label}
        </option>
    )
}

export const DropdownSelect : FC<IDropdownSelectProps> = (props) => {
    const options = props.options.map(option => <DropdownOption {...option}/>)

    return (
        <InputContainer size={props.size}>
            <InputLabel
                name={props.name}
                label={props.label}
            />
            <select 
                name={props.name}
                className="rounded-md bg-gray-200 font-rhd-rg text-black px-3 py-1 w-full"
            >
                {options}
            </select>
        </InputContainer>
    )

}