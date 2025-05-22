"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { SelectGroup } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "athiradiarun@yahoo.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Tamilnadu, India",
  }
  // { icon: <FaPhoneAlt />, title: "Phone", description: "+91 8870008107" },
];

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          toast.error("Failed to send message...");
          setIsSending(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h2 className="text-4xl text-accent">Let's work together</h2>
              <p className="text-white/60">Send a message</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" name="user_name" />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="user_lastname"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  name="user_phone"
                />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="browser">Browser Extensions Development</SelectItem>
                    <SelectItem value="mob">Mobile App Development</SelectItem>
{/*                     <SelectItem value="opt">Website Optimization</SelectItem>
                    <SelectItem value="bug">Fixing Bugs</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              <Button
                size="md"
                type="submit"
                className="max-w-40"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
