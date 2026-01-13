import { BackgroundGradientAnimation } from "@/components/ui/gradient-mentoro";
import Projects from "../Projects";
import GlassNavbar from "../Navbar";
import Image from "next/image";

export default function Portofolio() {
  return (
    <div className="bg-[#F5F9FF] ">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <GlassNavbar />
          <div className="flex flex-col items-center py-6">
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40 playfair-display-italic ">
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
      <section className="relative flex flex-col items-center justify-center pt-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="border border-cyan-400 bg-white/70 backdrop-blur rounded-full px-4 py-2 text-cyan-600 font-medium text-sm shadow">
            In process
          </div>
          <div className="flex items-center gap-2 text-slate-600 bg-white/70 backdrop-blur rounded-full px-4 py-2 text-sm shadow">
            <span className="text-xl">🕐</span>Month 2025 - Current time
          </div>
          <div className="flex items-center gap-2 text-slate-600 bg-white/70 backdrop-blur rounded-full px-4 py-2 text-sm shadow">
            <span className="text-xl">📱</span>Mobile app
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-8">
        <div className=" p-8">
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">Scope</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">
            Empathizing with the potential users
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            After talking with several potential users and looking into how they
            work, I kept hearing about the same common problems that needed a
            solution:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-lg text-slate-700">
              <span className="font-semibold">
                They work with many students,
              </span>{" "}
              which makes taking attendance and keeping records time-consuming
              and difficult.
            </li>
            <li className="text-lg text-slate-700">
              <span className="font-semibold">
                It's easy to lose track of how much students have paid
              </span>{" "}
              because payment management isn't well organized.
            </li>
            <li className="text-lg text-slate-700">
              <span className="font-semibold">
                They need a simple way to keep all the personal information
              </span>{" "}
              for each student in one place.
            </li>
            <li className="text-lg text-slate-700">
              <span className="font-semibold">
                They don't always have a clear view of their schedule,
              </span>{" "}
              so it's hard to know when they're free to add new lessons.
            </li>
            <li className="text-lg text-slate-700">
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
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">
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
          <p className="text-lg text-slate-700 mb-0">
            After a lot of ideating, sketching, wireframing and mockups, I came
            up with an accessible, user-friendly layout design, with a welcoming
            feel, that any kind of user, experienced with technology or not, can
            use.
          </p>
        </div>
      </section>

      {/* Solved Problems Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-8">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">
            What problems were solved?
          </h2>
          <p className="text-lg text-slate-700 mb-0">
            Now users have an overall view over their schedule.
          </p>
          <div className="flex flex-col gap-6 mt-8">
            <Image
              src="/image0.png"
              alt="Mentoro screenshot 1"
              width={600}
              height={400}
              className=" w-full object-cover"
            />
            <Image
              src="/image1.png"
              alt="Mentoro screenshot 2"
              width={600}
              height={400}
              className=" w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
