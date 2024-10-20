'use client'

import { useState } from "react"

export default function Questions(){
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    function One(){
      if(one){
        setOne(false)
      }
      else{
        setOne(true)
      }
      setTwo(false);
      setThree(false);
      setFour(false)
    }
    function Two(){
      if(two){
        setTwo(false)
      }
      else{
        setTwo(true)
      }
      setOne(false);
      setThree(false);
      setFour(false)
    }
    function Three(){
      if(three){
        setThree(false)
      }
      else{
        setThree(true)
      }
      setOne(false);
      setTwo(false);
      setFour(false)
    }
    function Four(){
      if(four){
        setFour(false)
      }
      else{
        setFour(true)
      }
      setOne(false);
      setTwo(false);
      setThree(false)
    }
    return (
        <div className="lg:mt-[550px] mt-36">
          <div className="text-center font-Rubik">
              <p className="lg:text-3xl text-2xl font-medium text-Very-Dark-Blue px-14 lg:px-0">Frequently Asked Questions</p>
              <p className="mt-4 text-Grayish-Blue lg:w-[32%] mx-auto px-10 lg:px-0">Here are some of our FAQs. If you have any other questions you’d like 
              answered please feel free to email us.</p>
          </div>
          <div className="lg:mt-8 mt-14 lg:mx-[500px] font-Rubik lg:border-t-2 lg:border-t-gray-200 px-10 lg:px-0">
              <ul>
                <li className="group hover:cursor-pointer" onClick={One}>
                  <div>
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue group-hover:text-Soft-Red">What is Bookmark?</button>
                      <div>
                        {
                            one ? 
                            <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="red" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                        }
                      </div>
                    </div>
                    {one && <div className="mb-4">
                      <p className="text-Grayish-Blue mt-2 leading-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                    </div>}
                  </div>
                </li>
                <li className="group hover:cursor-pointer" onClick={Two}>  
                  <div className="border-t-2 border-t-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue group-hover:text-Soft-Red">How can I request a new browser?</button>
                      <div>
                        {
                            two ? 
                            <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="red" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                        }
                      </div>
                    </div>
                    {two && <div className="mb-4">
                      <p className="text-Grayish-Blue mt-2 leading-6">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
                    </div>}
                  </div>
                </li>
                <li className="group hover:cursor-pointer" onClick={Three}>
                  <div className="border-t-2 border-t-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue group-hover:text-Soft-Red">Is there a mobile app?</button>
                      <div>
                        {
                            three ? 
                            <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="red" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                        }
                      </div>
                    </div>
                    {three && <div className="mb-4">
                        <p className="text-Grayish-Blue mt-2 leading-6">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.</p>
                    </div>}
                  </div>
                </li>
                <li className="group hover:cursor-pointer" onClick={Four}>
                  <div className="border-y-2 border-y-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue group-hover:text-Soft-Red">What about other Chromium browsers?</button>
                      <div>
                        {
                            four ? 
                            <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="red" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                        }
                      </div>
                    </div>
                   {four && <div className="mb-4">
                      <p className="text-Grayish-Blue mt-2 leading-6">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                      vitae neque eget nisl gravida pellentesque non ut velit.</p>
                    </div>}
                  </div>
                </li>
              </ul>
              <div className="text-center mt-8">
                <button className="bg-Soft-Blue text-white px-4 py-3 shadow-md rounded text-xs">More Info</button>
              </div>
          </div>
        </div>
    )
}