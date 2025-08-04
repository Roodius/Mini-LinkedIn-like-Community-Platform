
interface labelInput {
    label:string,
}

export function Heading({label}:labelInput){

    return <div className="font-extrabold text-4xl pt-10">
    {label}
    </div>
}