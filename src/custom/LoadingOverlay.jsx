import { useEffect, useState } from "react";

export default function OverlayProgress(){
    const [isZoomed, setIsZoomed] = useState(false)

useEffect(()=>{
    const setZoom = setInterval(()=>{
        setIsZoomed((prevIsZoomed) => !prevIsZoomed);
    }, 2000)
    return () => {
        clearInterval(setZoom);
      };}, [])
    return(
        <div className="flex justify-center items-center w-screen h-screen bg-black">
<div className={`image lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] duration-1000 ${isZoomed ? "scale-50" : "scale-75"}`}>
    <img src="/loaderimage.svg" className="block w-full h-full object-contain"/>
</div>
        </div>
    )
}