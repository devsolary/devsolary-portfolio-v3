"use client"
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void,
  toggle: () => void,
}

const Modal: React.FC<ModalProps> = ({onClose, toggle}) => {
  const myModal = document.getElementById("my-modal")
  if(!myModal) return;

  return createPortal(
    <div className='fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-background/20 border border-accent/20 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8'>
        <p className='font-light'>Do you like to play the background music?</p>
        <div className='flex items-center justify-center space-x-4'>
        <button onClick={toggle} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2'>Yes</button>
        <button onClick={onClose} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded'>No</button>
        </div>
      </div>
    </div>,
    myModal
  )
}


const Sound = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent")
    if(musicConsent === "true" && !isPlaying) {
      if(audioRef.current){
        audioRef.current.play()
        setIsPlaying(true)
      }
    }

    ["click", "keydown", "touchstart"].forEach((event) => 
      document.removeEventListener(event, handleFirstUserInteraction)
      )
  }

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent")

    if(consent) {
      setIsPlaying(consent === "true")

      if(consent === "true"){
        ["click", "keydown", "touchstart"].forEach((event) => 
        document.addEventListener(event, handleFirstUserInteraction)
        )
      }
    } else {
      setShowModal(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const toggle = () => {
    const newState = !isPlaying
    setIsPlaying(!isPlaying);
    if(audioRef.current) {
      newState ? audioRef.current.play() : audioRef.current.pause()
    }
    localStorage.setItem("musicConsent", String(newState));
    setShowModal(false)
  }
  return (
    <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
      {
        showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      }
        <audio ref={audioRef} loop>
            <source src={'/audio/theme_song.mp3'} type='audio/mpeg'/>
        </audio>
        <motion.button
        onClick={toggle}
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{delay: 1}}
    className=" w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg" aria-label={"home"} >
        {
          isPlaying ? <Volume2 className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} /> : <VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
        }
    </motion.button>
    </div>
  )
}

export default Sound