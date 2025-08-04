import { useState, type Dispatch, type SetStateAction } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate, type NavigateFunction } from "react-router-dom"
import { motion } from "framer-motion";

export const Signin = () => {
    const [password ,setPassword] = useState("");
    const [username, setUsername] = useState("");   
    const [label, setLabel] = useState("Sign In");
    const navigate  = useNavigate();
    return <motion.div className="bg-slate-300 h-screen flex justify-center items-center" 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
            >
        <div className="bg-white w-[33%] h-[80%] rounded-lg shadow-2xl border-2 border-black">
            <div className="justify-center flex">
                <Heading label={"Sign Up"}/>    
                </div>
                <SubHeading label={"Enter Your Information to create an Account"}/>
            <div className="pl-8 p-10">
                <InputBox onChange={e => {
                    setUsername((e.target as HTMLInputElement).value)
                }} label={"Username"} placeholder={"username@dw"}/>
               
                <InputBox onChange={e => {
                    setPassword((e.target as HTMLInputElement).value)
                }} label={"Password"} placeholder={"******"}/>
            </div>
            <div className="flex justify-center pt-20">
                <Button onClick={async () => await PostRequest({username,password,setLabel,navigate})} label={label}/>
            </div>
                <BottomWarning label={"Alerady have an account ?"} linktext={"Sing in"} to={"/signin"}/>
        </div>
    </motion.div>
}

interface Inputprops {
        username:string,
        password:string,
        setLabel:Dispatch<SetStateAction<string>>,
        navigate:NavigateFunction
}


const PostRequest = async ({username,password, setLabel,navigate}:Inputprops) => {
     const res = await axios.post("http://localhost:5000/user/signup",{
         password,
         username,
    })
    localStorage.setItem("token",res.data.token) 
    if(res) {setLabel("SignIn Completed")}
    setTimeout(() => {
        navigate("/dashboard")
    },3000)
}