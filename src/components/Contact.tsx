"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import DATA from "@/data/index.json";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_l43b1pr",         // ✅ Your actual EmailJS service ID
        "template_u2qagti",       // ✅ Your actual EmailJS template ID
        formRef.current,
        "0FGi9vbDzABXBBclT"       // ✅ Your actual EmailJS public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current?.reset(); // Clear form after sending
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-800">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Let's Connect</h3>
            <p className="text-neutral-400">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlineMail className="text-purple-400 w-6 h-6" />
            <a href={`mailto:${DATA.CONTACT.email}`} className="text-white hover:text-purple-300">
              {DATA.CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlinePhone className="text-cyan-400 w-6 h-6" />
            <p className="text-white">{DATA.CONTACT.phoneNo}</p>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlineLocationMarker className="text-orange-400 w-6 h-6" />
            <p className="text-white">{DATA.CONTACT.address}</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/saish-ghatol-108402254/" target="_blank" className="text-neutral-300 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/SaishGhatol" target="_blank" className="text-neutral-300 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://leetcode.com/saishghatol/" target="_blank" className="text-neutral-300 hover:text-white">
              <SiLeetcode size={24} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/saishghapvm7/" target="_blank" className="text-neutral-300 hover:text-white">
              <SiGeeksforgeeks size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900/50 backdrop-blur-md p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-400 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
