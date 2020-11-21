import React, { useState } from "react";
import { Project } from "../../../Content/Projects";

export const SideBar = () => {
   const [active, setActive] =  useState('inbox');
   const [showProject, setShowProjec] =  useState(true);
   
    return(
       <div className="lg:fixed w-full  hidden sidebar pt-20 px-2    lg:flex flex-col lg:w-64
        flex-shrink-0 p-2" data-testid="sidebar">


           <div className=" p-4 max-w-sm w-full mx-auto hidden">
               <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                     <div className="space-y-2">
                     <div className="h-4 bg-gray-200 rounded"></div>
                     <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                     </div>
                  </div>
               </div>
            </div>


            <div className="">
               <button className="flex w-full focus:outline-none items-center p-3 rounded-lg 
               cursor-pointer  text-red-600 font-w500" data-testid="inbox">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path  d="M4.51653902,11 L10,11 L10,13 L14,13 L14,11 L19.4839973,11 L17.1106841,5.45729333 C16.9986635,5.23944262 16.8952849,5.08654336 16.8117527,4.99992782 L7.17592076,4.99623293 C7.09869779,5.07946042 7.00332603,5.2252937 6.91914503,5.3939193 L4.51653902,11 Z M20,13 L16,13 C16,14.1045695 15.1045695,15 14,15 L10,15 C8.8954305,15 8,14.1045695 8,13 L4,13 L4,19 L20,19 L20,13 Z M22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,11.7947423 L2.08085497,11.6060807 L5.10236458,4.55926124 C5.55302653,3.64141565 6.12143587,3.07300632 7,3 L17,3 L17.1308208,3.00859397 C17.8836715,3.10793627 18.4350886,3.65935343 18.919145,4.6060807 L22,11.7947423 L22,19 Z"/>
                  </svg>
                  <span className="ml-2 text-sm">Inbox</span>
               </button>

               <button className="flex w-full focus:outline-none items-center mt-3 p-2 transition duration-500 ease-in-out hover:bg-gray-100
                cursor-pointer  rounded-lg text-gray-600 font-w500" data-testid="today">
                   <svg className="w-5 h-5 fill-current"  viewBox="0 0 24 24">
                     <path fillRule="evenodd" d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z"/>
                  </svg>
                  <span className="ml-2 text-sm">Today</span>
               </button>
               <button  className="flex w-full focus:outline-none items-center mt-3 p-2 rounded-lg cursor-pointer 
               text-gray-600 font-w500" data-testid="next_7">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                     <path fillRule="evenodd" d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M9,14 L7,14 L7,12 L9,12 L9,14 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z"/>
                  </svg>
                  <span className="ml-2 text-sm">Next 7 days</span>
               </button>
            </div>
            <div className="mt-5">
              <button className="px-2 flex focus:outline-none items-center justify-between w-full">
                  <div className="flex items-center">
                     <svg className="w-4 h-4 text-gray-600  fill-current" viewBox="0 0 24 24">
                        <polygon fillRule="evenodd" points="19.293 7.293 20.707 8.707 12 17.414 3.293 8.707 4.707 7.293 12 14.586"/>
                     </svg>
                     <span className="font-w500 text-md ml-2">Projects</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-600  fill-current" viewBox="0 0 24 24">
                        <polygon fillRule="evenodd" points="13 11 22 11 22 13 13 13 13 22 11 22 11 13 2 13 2 11 11 11 11 2 13 2"/>
                     </svg>
              </button>
              <div className="prjts">
                  <Project />
                  {/* <button className="flex w-full focus:outline-none items-center mt-3 p-2 rounded-lg cursor-pointer text-gray-600 font-w500">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path  d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z M9,14 L7,14 L7,12 L9,12 L9,14 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z M9,18 L7,18 L7,16 L9,16 L9,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z"/>
                     </svg>
                     <span className="ml-2 text-sm">Music</span>
                  </button>
                   */}
              </div>

            </div>
        </div>
    );
}