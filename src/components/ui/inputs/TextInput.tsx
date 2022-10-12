import { FC } from "react";
import { InputContainer, InputLabel, SizeOptions } from "./__utils";

interface ITextInputProps {
    name: string,
    label: string,
    required?: boolean,
    size?: SizeOptions,
    placeholder?: string,
    isNumber?: boolean,
    visible?: boolean
}

export const TextInput: FC<ITextInputProps> = (props) => {
    const fieldRequired = props.required ?? false;
    const displayField = ((props.visible && Boolean(props.visible)) ?? true);
    
    if(!displayField)
        return <></>

    const fieldType = Boolean(props.isNumber)
                        ? "number"
                        : "text";
    return (
       <InputContainer size={props.size}>
            <InputLabel
                name={props.name}
                label={props.label}
            />
            <input 
                className="rounded-md bg-gray-200 font-rhd-rg text-black px-3 py-1 w-full"
                type={fieldType}
                name={props.name}
                required={fieldRequired}
                placeholder={props.placeholder ?? ""}
            />
        </InputContainer>
    )
}