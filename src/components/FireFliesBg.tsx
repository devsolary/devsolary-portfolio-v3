import React from 'react'

const createFireFly = () => ({
    id: Math.random(),
    top: Math.random
})

const FireFliesBg = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>

    </div>
  )
}

export default FireFliesBg