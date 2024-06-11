"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';


const container = {
  hidden: {opacity: 0},
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
      }
  }
}

const item = {
  hidden: {scale: 0},
  show: {scale: 1}
}


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <motion.form

    variants={container}
                initial="hidden"
                animate="show"
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <motion.input
      variants={item}
       type="text" placeholder="Name" {...register("Name", {required: true})} 
      className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <motion.input 
      variants={item}
      type="email" placeholder="Email" {...register("Email", {required: true})} 
      className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
      <motion.textarea
      variants={item}
      placeholder='message' {...register("Message", {required: true, max: 1000, min: 50})} 
      className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
      <motion.input
      variants={item}
      value="cast your message"
      className=' px-10 py-4 rounded-md shadow-lg bg-background border border-accent/50 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
    </motion.form>
  );
}