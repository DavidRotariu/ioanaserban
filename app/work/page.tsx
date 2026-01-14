/* eslint-disable react/no-unescaped-entities */
import { BackgroundGradientAnimation } from "@/components/ui/gradient-mentoro";
import GlassNavbar from "../Navbar";
import Image from "next/image";
import { Clock, Smartphone } from "lucide-react";

export default function Portofolio() {
  return (
    <div className="bg-[#F5F9FF] ">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <GlassNavbar />
          <div className="flex flex-col items-center pt-16">
            <p className="patrick-hand-regular text-8xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40">
              Mentoro
            </p>
            <div className="mt-6 space-y-1 text-sm md:text-lg lg:text-md font-normal montserrat from-white/80 to-white/20 ">
              <p>A simple app</p>
              <p>made to help </p>
              <p>teachers and students</p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center pt-18 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-4 w-full max-w-md">
          <div className="border border-cyan-400 rounded-md px-8 py-2 text-cyan-600 text-md  montserrat flex items-center">
            In process
          </div>
          <div className="px-1 py-2 text-cyan-600 text-md montserrat flex items-center gap-2">
            <Clock className="w-5 h-5" />
            December 2025 - Ongoing
          </div>
          <div className="px-1 py-2 text-cyan-600 text-md montserrat flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Mobile app
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-8">
        <div className=" p-8">
          <h2 className="text-5xl font-bold text-[#16515F] mb-6 patrick-hand-regular">
            Scope
          </h2>
          <p className="text-md text-slate-700 leading-relaxed montserrat-regular">
            After designing Hertz Media App for a specific client, I've realized
            that many people in my area that work as private tutors need an app
            with easy access to manage their program, to keep evidence for each
            student regarding payments, lessons, and attendance.
          </p>
        </div>
      </section>

      {/* Empathizing Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-8">
        <div className="p-8">
          <h2 className="text-5xl font-bold text-[#16515F] mb-6 patrick-hand-regular">
            Empathizing with the potential users
          </h2>
          <p className="text-md text-slate-700 leading-relaxed montserrat-regular mb-6">
            After talking with several potential users and looking into how they
            work, I kept hearing about the same common problems that needed a
            solution:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-md text-slate-700 montserrat-regular">
              <span className="font-semibold">
                They work with many students,
              </span>{" "}
              which makes taking attendance and keeping records time-consuming
              and difficult.
            </li>
            <li className="text-md text-slate-700 montserrat-regular">
              <span className="font-semibold">
                It's easy to lose track of how much students have paid
              </span>{" "}
              because payment management isn't well organized.
            </li>
            <li className="text-md text-slate-700 montserrat-regular">
              <span className="font-semibold">
                They need a simple way to keep all the personal information
              </span>{" "}
              for each student in one place.
            </li>
            <li className="text-md text-slate-700 montserrat-regular">
              <span className="font-semibold">
                They don't always have a clear view of their schedule,
              </span>{" "}
              so it's hard to know when they're free to add new lessons.
            </li>
            <li className="text-md text-slate-700 montserrat-regular">
              <span className="font-semibold">
                They need an easy way to write notes
              </span>{" "}
              for each student about upcoming lessons and homework.
            </li>
          </ol>
        </div>
      </section>

      {/* Creating Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-8">
        <div className="p-8">
          <h2 className="text-5xl font-bold text-[#16515F] mb-6 patrick-hand-regular">
            Creating the product
          </h2>
          <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
            <video
              width="100%"
              height="auto"
              controls
              className="w-full h-auto"
            >
              <source
                src="https://res.cloudinary.com/dsaano3rp/video/upload/v1768240441/Mentoro_-_mockup_-_Figma_2026-01-11_19-46-33_vpefhi.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-slate-700 leading-relaxed montserrat-regular mb-0">
            After a lot of ideating, sketching, wireframing and mockups, I came
            up with an accessible, user-friendly layout design, with a welcoming
            feel, that any kind of user, experienced with technology or not, can
            use.
          </p>
        </div>
      </section>

      {/* Solved Problems Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto pt-8">
        <div className="p-8">
          <h2 className="text-5xl font-bold text-[#16515F] mb-6 patrick-hand-regular">
            What problems were solved?
          </h2>
          <p className="text-md text-slate-700 leading-relaxed montserrat-regular mb-0">
            Now users have an overall view over their schedule.
          </p>
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <Image
            src="/image0.png"
            alt="Mentoro screenshot 1"
            width={1631}
            height={766}
            className="w-full object-cover"
          />
          <Image
            src="/image1.png"
            alt="Mentoro screenshot 2"
            width={1289}
            height={708}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-4">
        <div className="p-8">
          <div className="my-10 ">
            <p className="text-xl text-slate-800 mb-4 font-medium montserrat-regular">
              Now our users can:
            </p>
            <ul className="space-y-3 text-md text-slate-700 montserrat-regular">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>quickly take
                attendance and collect information for all students at once,
                saving time and effort.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>keep track of
                payments with a simple and efficient system that does the work
                for them.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>Everything they
                need is available in one place, so there’s no need to jump
                between different apps or tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>Users can see at a
                glance when they’re free and when they’re busy, making planning
                much easier.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>They can jot down
                helpful notes for their next lecture and have them ready
                whenever they need them.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="bg-[#16515F] text-slate-300 py-12 text-center">
        <p className="text-sm text-white">
          © 2025 Ioana Serban. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
