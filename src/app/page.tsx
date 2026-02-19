"use client";

import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiX,
  SiMongodb,
  SiAmazon,
  SiResend,
  SiMui,
  SiShadcnui,
  SiVercel,
  SiVite,
  SiPrisma
} from "react-icons/si";


const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Resend", icon: SiResend, color: "#000000" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "ShadCN", icon: SiShadcnui, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
];




export default function Home() {
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: -(e.clientY - rect.top - rect.height / 2) / 25,
      y: (e.clientX - rect.left - rect.width / 2) / 25,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        () => toast.error("Failed to send message 😢")
      );
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen text-white relative bg-gradient-to-br from-[#12001f] via-black to-[#1a0033] stars-big">

      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-12 md:-ml-4">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold min-h-[72px]">
              Omkar Haldankar |{" "}
              <span className="text-purple-400">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "DevOps & CI/CD Engineer",
                    "AWS Cloud Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-gray-400 mt-12 leading-relaxed">
              I build modern, scalable full-stack web applications with a strong focus on clean UI,
              robust backend architecture, and efficient DevOps workflows.
              Passionate about shipping production-ready solutions using modern web technologies and cloud platforms.
            </p>


            {/* Social Icons */}
            <div className="flex gap-7 pt-2">
              <a
                href="https://github.com/Omkar27-git"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <SiGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/omkar-haldankar-b19b0431a/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <SiLinkedin size={28} />
              </a>

              <a
                href="https://leetcode.com/u/IgUUlNBgPk/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <SiLeetcode size={28} />
              </a>

              <a
                href="https://x.com/OHaldankar92917"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <SiX size={28} />
              </a>
            </div>
          </div>

          {/* Desk Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="w-[230px] h-[220px] md:w-[350px] md:h-[310px] mt-8 md:mt-0 md:ml-12 perspective-[1000px]"
          >
            <img
              src="/desk.png"
              alt="Desk"
              className="w-full h-full object-cover rounded-xl transition-transform duration-200 cursor-pointer"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            />
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="title-halo text-3xl mb-10">Skills</h2>

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {[...skills, ...skills].map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 transition hover:scale-110"
                  >
                    <Icon
                      size={40}
                      color={skill.color}
                      className="drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]
                         hover:drop-shadow-[0_0_16px_rgba(168,85,247,1)]
                         transition"
                    />
                    <span className="text-xs">{skill.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
{/* ===================== Projects ===================== */}
<section>
  <h2 className="title-halo text-3xl mb-10">Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* ---------- Project 1 : Food Delivery App ---------- */}
    <motion.div
      whileHover={{ y: -14 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className="rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all
                 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] overflow-hidden cursor-pointer
                 flex flex-col justify-between bg-black/40"
    >
      {/* Project Image */}
      <div className="w-full h-[200px]  overflow-hidden">
        <img
          src="/foodel.jpg" // 👉 replace image later
          alt="Food Delivery App"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Food Delivery Platform
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            A full-stack food delivery application that allows users to browse restaurants,
            add items to cart, place orders, and track deliveries.
            Built with scalable backend APIs, secure authentication, and a clean user interface
            focused on performance and user experience.
          </p>
        </div>

        {/* Live Link */}
        <a
          href="https://food-del-frontend-sdcz.onrender.com/"
          target="_blank"
          className="mt-8 text-sm text-purple-400 hover:underline flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
          </span>
          Live Preview →
        </a>
      </div>
    </motion.div>

    {/* ---------- Project 2 : Local Service App ---------- */}
    <motion.div
      whileHover={{ y: -14 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className="rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all
                 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] overflow-hidden cursor-pointer 
                 flex flex-col justify-between bg-black/40"
    >
      {/* Project Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src="/localservice.jpg" // 👉 replace image later
          alt="Local Service App"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Local Service Booking App
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            A service-based platform connecting users with local professionals such as
            electricians, plumbers, and technicians.
            Features include service discovery, booking management, role-based access,
            and a reliable backend designed for real-world scalability.
          </p>
        </div>

        {/* Live Link */}
        <a
          href="https://main.d287xgonuziz7u.amplifyapp.com/"
          target="_blank"
          className="mt-8 text-sm text-purple-400 hover:underline flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
          </span>
          Live Preview →
        </a>
      </div>
    </motion.div>



     {/* ---------- Project 3 : Smart BookMark App ---------- */}
    <motion.div
      whileHover={{ y: -14 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className="rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all
                 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] overflow-hidden cursor-pointer 
                 flex flex-col justify-between bg-black/40"
    >
      {/* Project Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src="/smartbookmark.png"
          alt="Smart-Bookmark App"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Smart-Bookmark App
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            A bookmark management application that allows users to organize, manage, and access your favorite links anytime. Securely store your bookmarks with real-time updates.
          </p>
        </div>

        {/* Live Link */}
        <a
          href="https://smart-bookmark-app-eta-nine.vercel.app/"
          target="_blank"
          className="mt-8 text-sm text-purple-400 hover:underline flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
          </span>
          Live Preview →
        </a>
      </div>
    </motion.div>

  </div>
</section>
{/* ===================== End Projects ===================== */}




        {/* Resume */}
        <section>
          <h2 className="title-halo text-3xl mb-10">Resume</h2>

          {/* Resume Image Preview */}
          <div className="w-full max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden
                  border border-purple-500/40
                  shadow-[0_0_25px_rgba(168,85,247,0.35)]">
            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-10 py-3 rounded-xl border border-purple-500/50 text-purple-400
                 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
                 transition-all text-center"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-10 py-3 rounded-xl border border-purple-500/50 text-purple-400
                 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
                 transition-all text-center"
            >
              Download Resume
            </a>
          </div>
        </section>


        {/* Contact */}
        <section>
          <h2 className="title-halo text-3xl mb-10">Contact</h2>

          <form ref={formRef} onSubmit={sendEmail} className="max-w-xl space-y-6">
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none"
            />

            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full bg-black border border-purple-500/40 rounded-lg p-3 outline-none resize-none"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-lg border border-purple-500/50 text-purple-400
                 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]
                 transition-all"
            >
              Send Message
            </button>
          </form>
        </section>


      </div>
    </main>
  );
}
