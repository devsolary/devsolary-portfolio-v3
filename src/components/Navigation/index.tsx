"use client"
import React from 'react'
import { HomebtnData } from '@/data/HomeBtns'
import NavBtn from './NavBtn'
import UseScreenSize from '../hooks/UseScreenSize'
import ResponsiveComponents from '../ResponsiveComponents'
import { motion } from 'framer-motion'

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const navigation = () => {
    const angleIncrement = 360/HomebtnData.length;

    const size = UseScreenSize();

    console.log(size);
    

    const isLarge = size >= 1024;
    const isMedium = size >= 760;

  return (
    <div className='w-full fixed h-screen flex items-center justify-center z-10'>
        <ResponsiveComponents>
            {({size}) => {
                return size && size >= 480 ? 
                (<motion.div 
                variants={container}
                initial="hidden"
                animate="show"


                className='w-max flex item-center justify-center relative hover:pause animate-spin-slow group'>
                {
                    HomebtnData.map((btn, i) => 
                        {
                            const angleRad = (i*angleIncrement*Math.PI)/180;
                            const radius = isLarge ?  `calc(20vw - 2rem)` : isMedium ? `calc(30vw - 2rem)` : `calc(20vw - 2rem)`;
                            const x = `calc(${radius}*${Math.cos(angleRad)})`
                            const y = `calc(${radius}*${Math.sin(angleRad)})`
                            return <NavBtn key={btn.label} x={x} y={y} {...btn} labelDirection='' />
                        }
                    )
                }
            </motion.div>) : (<>
            <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start space-y-4 xs:item-center justify-center relative group'>
                {
                    HomebtnData.slice(0, HomebtnData.length/2).map((btn, i) => 
                        {
                            const angleRad = (i*angleIncrement*Math.PI)/180;
                            const radius = isLarge ?  `calc(20vw - 2rem)` : isMedium ? `calc(30vw - 2rem)` : `calc(20vw - 2rem)`;
                            const x = `calc(${radius}*${Math.cos(angleRad)})`
                            const y = `calc(${radius}*${Math.sin(angleRad)})`
                            return <NavBtn key={btn.label} x={x} y={y} {...btn} labelDirection='right' />
                        }
                    )
                }
            </div>
            <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end space-y-4 xs:item-center justify-center relative group'>
                {
                    HomebtnData.slice(HomebtnData.length/2, HomebtnData.length).map((btn, i) => 
                        {
                            const angleRad = (i*angleIncrement*Math.PI)/180;
                            const radius = isLarge ?  `calc(20vw - 2rem)` : isMedium ? `calc(30vw - 2rem)` : `calc(20vw - 2rem)`;
                            const x = `calc(${radius}*${Math.cos(angleRad)})`
                            const y = `calc(${radius}*${Math.sin(angleRad)})`
                            return <NavBtn key={btn.label} x={x} y={y} {...btn} labelDirection='left' />
                        }
                    )
                }
            </div>
            </>)
            }}
        </ResponsiveComponents>
    </div>
  )
}

export default navigation;