export default function DashboardContainer(props: any){
    return (
        <div className="flex flex-col w-[90%] h-[85%] rounded-lg px-5 pt-6 bg-slate-800">
            {props.children}
        </div>
    )
}