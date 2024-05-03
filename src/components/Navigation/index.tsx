"use client"
import React from 'react'
import { HomebtnData } from '@/data/HomeBtns'
import NavBtn from './NavBtn'

const navigation = () => {
    const angleIncrement = 360/HomebtnData.length;

  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
        <div className='flex item-center justify-between relative animate-spin-slow'>
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