"use client"
import React from 'react'
import { HomebtnData } from '@/data/HomeBtns'
import NavBtn from './NavBtn'

const navigation = () => {
    const angleIncrement = 360/HomebtnData.length;

  return (
    <div className='w-full fixed h-screen flex items-center justify-center z-10'>
        <div className='w-max flex item-center justify-center relative hover:pause animate-spin-slow group'>
        {
            HomebtnData.map((btn, i) => 
                {
                    const angleRad = (i*angleIncrement*Math.PI)/180;
                    const radius = `calc(20vw - 2rem)`;
                    const x = `calc(${radius}*${Math.cos(angleRad)})`
                    const y = `calc(${radius}*${Math.sin(angleRad)})`
                    return <NavBtn key={btn.label} x={x} y={y} {...btn} />
                }
            )
        }
    </div>
    </div>
  )
}

export default navigation;