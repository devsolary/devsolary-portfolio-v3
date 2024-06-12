"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

interface FormData {
  message: string;
  name: string;
  email: string;
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const sendEmail = (params: any) => {
    const toasterId = toast.loading("sending your message pls wait...")
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
          limitRate: {
            throttle: 60000,
          }
        }
      )
      .then(
        () => {
          toast.success("Devsolary have received your message and will reply to you soon!", {
            id: toasterId
          })
        },
        (error) => {
          console.log("Failed", error.text);
          
          toast.error("Sorry there was an error sending your message, please refresh the page and try again try again", 
            {
              id: toasterId
            }
          )
        },
      );
  };

  const onSubmit = (data: FormData) => {
    const templateParams = {
      to_name: "Devsolary",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    }
    sendEmail(templateParams);
  }

  console.log(errors);

  return (
    <>
    <Toaster richColors={true} />
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      variants={container}
      initial="hidden"
      animate="show"
      className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <motion.input
        variants={item}
        type="text"
        placeholder="Name"
        {...register("name", { required: "Please enter your name",
          minLength: {
            value: 3,
            message: "name should be atleast 3 characters long."
          }
         })}
        className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>
      }
      <motion.input
        variants={item}
        type="email"
        placeholder="Email"
        {...register("email", { required: "Please enter your email"})}
        className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
            {
        errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
      }
      <motion.textarea
        variants={item}
        placeholder='Message'
        {...register("message", { required: "Please enter your message", 
          
          maxLength: 1000, minLength: 50 })}
        className='w-full p-2 rounded-md shadow-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
            {
        errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
      }
      <motion.input
        variants={item}
        value="cast your message"
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/50 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
        type="submit"
      />
    </motion.form>
    </>
  );
}