import React,{useState} from "react";

interface Props{
    hoverText: string,
    children: any
}

export const Tooltip = (props:Props) => {
    const [hover, setHover] = useState(false);
 
 
 const mouseOverhandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     setHover(true);
     console.log('enter');
     return;
 }
 const mouseOuthandler = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(false);
    console.log('out');
    return;
}

  return (
       <div className="relative">
           <div className="w-auto" onMouseOver={mouseOverhandler} onMouseOut={mouseOuthandler}>
               {props.children}
           </div>
            { hover && <div className="absolute transition-opacity text-center duration-75 w- mt-5 inline-block z-20 pl-5  ">
                    <div className=" text-sm rounded-lg p-2 bg-gray-800">
                     <span>{props.hoverText}</span>
                    </div>
                </div> }
       </div>
  )
};