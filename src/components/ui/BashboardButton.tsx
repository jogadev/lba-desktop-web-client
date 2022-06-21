import { Link } from "react-router-dom";

interface AppButtonProps{
    label: string,
    icon: string,
    link: string
}

export default function AppButton(props: AppButtonProps) {
    const divStyle = "flex flex-col bg-slate-300 bg-opacity-80 rounded-lg w-40 items-center cursor-pointer";

    return (
        <Link
            to={props.link}
            // onClick={props.onClick} 
            className={divStyle}
        >
            <img 
                src={props.icon} 
                alt={props.label}
                className="w-3/5 py-4"
            />
            <h3 className="font-rhd-rg text-2xl w-4/5 py-2 text-center">{props.label}</h3>
        </Link>
    );
}