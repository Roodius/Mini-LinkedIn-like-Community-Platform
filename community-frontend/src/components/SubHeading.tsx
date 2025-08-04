
interface Inputprops {
    label:string,
}


export const SubHeading = ({label}:Inputprops) => {

    return <div className="flex justify-center text-gray-600 text-sm pb-8">
        {label}
    </div>
}