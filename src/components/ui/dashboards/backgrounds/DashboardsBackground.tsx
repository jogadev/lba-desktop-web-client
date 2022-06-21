import { ReactNode } from "react"

export default function DashboardBackground(props: {children: ReactNode}){
    return (
        <div className="w-full h-full bg-gradient-to-b from-purple-400 to-teal-900 flex justify-center items-center">
            {props.children}
        </div>
    )
}