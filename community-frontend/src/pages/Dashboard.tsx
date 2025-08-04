import {AnimatePresence, motion} from "framer-motion"
import { Createpost } from "./CreatePost"
import { useState } from "react"
import { Allpost } from "../components/AllPost";


export const Dashboard = () => {
    const [clicked , setClicked] = useState(false);
    return <motion.div   className="bg-slate-300  p-7"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}>
    <div className="w-full flex items-center justify-between px-6 py-3  shadow-sm border-2  rounded-2xl">

      <div className="flex items-center gap-8">
        <img src="/image.png" alt="Logo" className="w-7 h-7" />

        <div className="flex gap-6 text-sm font-medium text-gray-800">
          <div className="cursor-pointer text-[15px] font-bold hover:text-purple-700">HOME ▾</div>
          <div className="cursor-pointer text-[15px] font-bold hover:text-purple-700">Notification</div>
          <div className="cursor-pointer text-[15px] font-bold hover:text-purple-700">Messages</div>
        </div>
      </div>
      {/* Right - Search, Account, Download */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-gray-400">🔍</span>
          <input className="bg-gray-100 px-2 py-1 text-xs rounded border text-gray-600" placeholder="Search user"/>

          
        </div>

        <div className="cursor-pointer text-[15px] font-bold hover:text-purple-700 text-gray-800">
          Account ▾
        </div>

        <button onClick={() => {
            setClicked(true)
        }}  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-md flex items-center gap-1">
          Createpost <span className="bg-blue-500 text-white px-1 rounded text-xs">P</span>
        </button>
      </div>
    </div>

        <ShowCreatePost clicked={clicked}/>
        <Allpost />
    </motion.div>
}

interface Inputprops {
    clicked:boolean
}

const ShowCreatePost = ({clicked}:Inputprops) => {
    return (
         <AnimatePresence>
      {clicked && (
        <motion.div
          key="createpost"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Createpost />
        </motion.div>
      )}
    </AnimatePresence>
    )
}
    

        