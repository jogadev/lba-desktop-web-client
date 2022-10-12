import React, { FC, useState } from "react";
import { InputLabel, InputContainer, SizeOptions } from "./__utils";

interface IRadioGroupOption {
    label: string,
    value: string,
    id: string
}

interface IRadioGroupProps { 
    name: string
    label: string
    options: IRadioGroupOption[]
    size?: SizeOptions
}

interface IRadioGroupOptionProps extends IRadioGroupOption {
    groupName: string
}

const RadioOption: FC<IRadioGroupOptionProps> = (props) => {
    return (
        <div className="py-2 x-radio-group">
            <input 
                type="radio" 
                id={props.id} 
                value={props.value} 
                name={props.groupName}
                className="hidden"    
            />
            <label htmlFor={props.id} className="font-rhd-rg text-gray-900 cursor-pointer pl-1">
                <span className="border-2 border-gray-800 rounded-full w-3 h-3 inline-block mr-1"></span>
                {props.label}
            </label>
        </div>
    )
}

export const RadioGroup : FC<IRadioGroupProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const options = props.options.map(option => <RadioOption {...option} groupName={props.name}/>)

    return (
        <InputContainer size={props.size}>
            <InputLabel
                label={props.label}
                name={props.name}
            />
            <React.Fragment>
                {options}
            </React.Fragment>
        </InputContainer>
    )
}