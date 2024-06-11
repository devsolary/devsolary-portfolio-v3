import Image from "next/image";
import bg from "../../../assets/images/contact-background.png"
import Form from "@/components/contact/Form";




export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background image" className="w-[100vw] h-[100vh] fixed top-0 left-0 object-cover object-center -z-20 opacity-30" />
      <article className="relative w-full flex flex-col items-center py-8 sm:py-0 justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Signal the technophile
        </h1>
        <p className="text-center font-light text-sm xs:text-base">
        Step into the circuit of innovation and code your messages into the digital fabric of the web. Whether you seek to initiate collaborations, decode mysteries, or simply share tales of innovation, your communications are treasured data packets within this realm. Use the form below to transmit your messages through the ether, and await the response of algorithms.
        </p>
        </div>
        <Form />
      </article>
      </>
  );
}
