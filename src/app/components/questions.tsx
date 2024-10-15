export default function Questions(){
    return (
        <div className="mt-[550px]">
          <div className="text-center font-Rubik">
              <p className="text-3xl font-medium text-Very-Dark-Blue">Frequently Asked Questions</p>
              <p className="mt-4 text-Grayish-Blue w-[32%] mx-auto">Here are some of our FAQs. If you have any other questions you’d like 
              answered please feel free to email us.</p>
          </div>
          <div className="mt-8 mx-[500px] font-Rubik border-t-2 border-t-gray-200">
              <ul>
                <li>
                  <div>
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue">What is Bookmark?</button>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-Grayish-Blue mt-2 leading-6 hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
                    </div>
                  </div>
                </li>
                <li>  
                  <div className="border-t-2 border-t-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue">How can I request a new browser?</button>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-Grayish-Blue mt-2 leading-6 hidden">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border-t-2 border-t-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue">Is there a mobile app?</button>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-Grayish-Blue mt-2 leading-6 hidden">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border-y-2 border-y-gray-200">
                    <div className="flex justify-between items-center py-4 pr-4">
                      <button className="text-Very-Dark-Blue">What about other Chromium browsers?</button>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-Grayish-Blue mt-2 leading-6 hidden">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                      vitae neque eget nisl gravida pellentesque non ut velit.</p>
                    </div>
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