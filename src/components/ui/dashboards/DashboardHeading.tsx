interface HeadingProps {
    title: string
}

export default function DashboardHeading(props: HeadingProps){
    return (
        <h1 className="font-rhd-md text-4xl text-slate-50">{props.title}</h1>
    )
}