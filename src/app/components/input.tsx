export default function Input(){
    return(
        <div className="bg-Soft-Blue font-Rubik text-center py-12 mt-28">
          <p className="text-white text-xs tracking-[.3rem]">35,000+ ALREADY JOINED</p>
          <p className="my-8 font-medium text-white tracking-wide text-3xl w-[30%] mx-auto">Stay up-to-date with what we’re doing</p>
          <div className="">
            <input type="text" placeholder="Enter your email address" className="px-4 py-3 rounded w-[25%]"/>
            <button className="bg-Soft-Red text-white ml-4 py-3 px-5 text-sm rounded">Contact Us</button>
          </div>
        </div>
    )
}