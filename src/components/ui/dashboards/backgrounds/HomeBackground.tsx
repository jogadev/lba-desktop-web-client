import { ReactNode } from "react"


export default function HomeBackground(props: {children: ReactNode}){
    return (
        <div className="w-full h-full bg-gradient-to-b from-emerald-600 to-cyan-900 flex justify-center items-center">
            {props.children}
        </div>
    )
}