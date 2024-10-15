'use client'

import { useState } from "react"

export default function Input(){
    const [input , setInput] = useState("")
    const [error , setError] = useState(false)
    function checkEmail(){
        if(input.includes("@") && input.indexOf("@") > 0 && input != "" && !input.includes("/") && !input.includes("-") && !input.includes("(") && !input.includes(")") && !input.includes("=")){
            setError(false)
        }
        else{
            setError(true)
        }
    }
    return(
        <div className="bg-Soft-Blue font-Rubik text-center py-12 mt-28">
          <p className="text-white text-xs tracking-[.3rem]">35,000+ ALREADY JOINED</p>
          <p className="my-8 font-medium text-white tracking-wide text-3xl w-[30%] mx-auto">Stay up-to-date with what we’re doing</p>
          <div className="flex justify-center items-start">
            <div className="w-[20%] flex flex-col items-start">
                <input onChange={(e)=>{setInput(e.target.value)}} type="email" placeholder="Enter your email address" className={`${error ? "error ring-2 ring-Soft-Red" : ""} px-4 py-3 rounded w-full outline-none`}/>
                {error && <p className="text-left py-1 px-2 rounded-b text-white text-xs italic bg-Soft-Red w-full ring-2 ring-Soft-Red">Whoops, make sure its an email</p>}
            </div>
            <button onClick={checkEmail} className="bg-Soft-Red text-white ml-4 py-[14px] font-medium px-5 text-sm rounded hover:bg-white hover:text-Soft-Red hover:ring-2 hover:ring-Soft-Red hover:duration-300">Contact Us</button>
          </div> 
        </div>
    )
}