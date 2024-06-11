"use client"

import { useEffect, useState } from "react";



const UseScreenSize = () => {

    const [screenSize, setScreenSize] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        if(typeof window === "undefined") return;
        
        function getScreenSize() {
            return window.innerWidth
        };
        function handleResize() {
            setScreenSize(getScreenSize)
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    },[])


    return screenSize;
}

export default UseScreenSize;