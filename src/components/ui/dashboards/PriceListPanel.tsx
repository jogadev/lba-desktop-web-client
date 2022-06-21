interface PriceListPanelProps {
    item: string,
    count: number
}

const Centered = (props: any) => (
    <div className={`flex justify-center items-center ${props.className}`}>
        {props.children}
    </div>
)

export default function PriceListPanel(props: PriceListPanelProps){
    return (
        <figure className="text-center mx-2 bg-[#E28A59] w-36 h-36 m-4 flex flex-col justify-center rounded-3xl select-none">
            <Centered className="flex-[0.7]">
                <p className="text-zinc-50 font-rhd-rg text-5xl">
                    {props.count}
                </p>
            </Centered>
            <Centered className="flex-[0.3]">
                <p className="text-zinc-50 font-rdh-rg text-md">
                    {props.item}
                </p>
            </Centered>
            {/* <div className="border text-zinc-50 font-rdh-rg text-md flex-[0.3]">{props.item}</div> */}
        </figure>
    )
}