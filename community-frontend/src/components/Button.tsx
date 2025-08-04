


interface Inputprops {
    label:string,
    onClick:()  => void | Promise<void>
}

export const Button = ({label,onClick}:Inputprops) => {

    return <div className="">
        <button onClick={onClick} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
            {label}
            <span className="border border-white rounded px-1 text-sm font-normal">S</span>
        </button>

    </div>
}