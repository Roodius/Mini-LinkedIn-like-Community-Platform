
interface Inputprops {
    label:string
}

export const Appbar = ({label}:Inputprops) => {

    return  <div className="shadow h-14 flex justify-between border-2 border-black m-10 rounded-2xl">
        <div className="flex flex-col justify-center h-full ml-4">
            Post.Web.App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full ml-4">
                Welcome {label}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
                <div className="flex flex-col justify-center h-full text-gray-800 font-bold items-center">
                    U
                </div>
            </div>
        </div>
    </div>
}