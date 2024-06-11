"use client"

import React from 'react'
import UseScreenSize from './hooks/UseScreenSize'

interface ResponsiveComponentsProps {
    children: (props: {size : number}) => React.ReactNode
}

const ResponsiveComponents: React.FC<ResponsiveComponentsProps> = ({children}) => {

    const size = UseScreenSize();
  return (
    <>
    {children({size})}
    </>
  )
}

export default ResponsiveComponents