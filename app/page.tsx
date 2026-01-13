import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Projects from "./Projects";
import GlassNavbar from "./Navbar";

export default function Portofolio() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <GlassNavbar />
          <div className="flex flex-col items-center py-6">
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40 playfair-display-italic ">
              UI/UX Designer
            </p>
            <div className="mt-6 space-y-1 text-sm md:text-lg lg:text-md font-normal montserrat from-white/80 to-white/20 ">
              <p>UX/UI Designer</p>
              <p>App Designer</p>
              <p>Brand Designer</p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <Projects />
    </>
  );
}
