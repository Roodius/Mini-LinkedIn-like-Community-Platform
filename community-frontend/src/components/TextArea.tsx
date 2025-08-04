import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
interface Inputprops {
    label:string,
    // onChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder:string
}   

interface Inputprops2 {
    title:string,
    description:string,
}



export function TextArea({label,placeholder}:Inputprops){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [newtimestamp,setNewTimeStamp] = useState(new Date())
    const [postDone, setPostDone] = useState("Post");
    return <div className="flex flex-col justify-center border-2 border-black w-[50%] h-[60%] p-10 mt-10 rounded-2xl gap-4">
        <div className="font-bold text-2xl text-left border-2 border-black rounded-lg w-[30%] pl-3 pt-1 pb-1">
            {label}
        </div>
        <div className="flex flex-col">
            <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Title.." className="focus:outline-none pl-2 placeholder:text-blue-700" />
        <textarea onChange={e => setDescription(e.target.value)} className="placeholder:text-blue-700 overflow-hidden p-2 w-60 border-purple-600 focus:outline-none rounded-sm h-9" typeof="text" placeholder={placeholder}/>
        </div>
        <div className="flex justify-end">
            <Button label={postDone} onClick={async () =>{
                const res = await createpostRequest({title,description})
                 if(res){
                    setPostDone("Posted");
                    navigate('/dashboard')
                 }
            }}/>
        </div>
    </div>
}

 
const createpostRequest = async ({title,description}:Inputprops2) => {
    const token  = localStorage.getItem("token");

      const response = await axios.post("http://localhost:5000/post/createpost",{title,description},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log(response)
        return response
}