
import {Link} from "react-router-dom"

interface Inputprops {
    label:string,
    linktext:string,
    to:string
}

export function BottomWarning({label,linktext,to}:Inputprops){

    return <div className="py-2 text-sm flex justify-center font-medium">
        <div>
        {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer text-blue-700" to={to}>
            {linktext}   
        </Link>
    </div>
}