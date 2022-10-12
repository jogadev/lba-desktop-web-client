interface PillButtonProps {
    label: string,
    onClick():void,
    icon?: string,
    active?: boolean
    extraProps?: any
}

export default function PillButton(props: PillButtonProps){
    let imageBorder = "ml-2";
    let textBorder = "mx-2";
    if(!props.label){
        imageBorder = "mx-1";
        textBorder = "";
    }

    var icon = props.icon 
                        ? <img src={props.icon} className={`w-[18px] ${imageBorder}`}/>
                        : <></>
    var borderStyle = (props.active || false)
                        ? "border-2 border-amber-600"
                        : "";
    

    return (
        <button 
            onClick={props.onClick} 
            className={`bg-zinc-300 px-2 py-2 rounded-3xl flex flex-row items-center ${borderStyle} m-1`}
            {...props.extraProps}
        >
            {icon}
            <p className={`font-rhd-rg text-md ${textBorder} whitespace-nowrap`}>{props.label}</p>
        </button>
    )
}