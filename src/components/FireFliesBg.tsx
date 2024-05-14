"use client"
import React, { useEffect, useState } from 'react'

interface Firefly {
    id: number;
    top: string;
    left: string;
    animationDuration: string;
}

const createFireFly = (): Firefly => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
})

const FireFliesBg = () => {

    const [fireFlies, setFireFlies] = useState<Firefly[]>([]);

    useEffect(() => {
        const addFireFlyPeriodically = () => {
            const newFireFly = createFireFly();
            setFireFlies(currentFireFlies => [...currentFireFlies.slice(-20), newFireFly]);
        }

        const interval = setInterval(addFireFlyPeriodically, 500);

        return () => clearInterval(interval);
    },[]);
  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        {
            fireFlies.map((firefly) =>{ 
            return <div key={firefly.id} className="absolute rounded-full bg-fireFly-radial w-[10px] h-[10px]"
            style={{
                top: firefly.top,
                left: firefly.left,
                animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
            ></div>
            })
        }
    </div>
  )
}

export default FireFliesBg