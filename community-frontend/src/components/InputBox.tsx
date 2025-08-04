interface Inputprops {
    label:string,
    onChange:(e: React.ChangeEvent<HTMLElement>) => void,
    placeholder:string
}


export function InputBox({label,onChange,placeholder}:Inputprops){

    return <div className="">
        <div className="text-sm font-semibold text-left py-3">
            {label}
        </div>
        <input onChange={onChange} className=" p-2 w-60 border-purple-600 focus:outline-none rounded-sm h-9" typeof="text" placeholder={placeholder}/>
    </div>
}