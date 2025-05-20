
import { Download } from 'lucide-react';
const HomeSection = () => (
    <section id="home" className="min-h-screen flex items-center justify-between px-16 md:px-24 lg:px-32 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="animate-float-slow absolute top-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
      <div className="animate-float absolute top-40 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
    </div>

    {/* Left Side - Text Content */}
    <div className="max-w-xl z-10">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-text-gradient leading-tight">
        Hi, I'm Chirag Mukheja
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
        Computer Science Student & Aspiring Developer
      </p>
      <div className="flex">
        <a
          href="https://drive.google.com/file/d/1utVkec_zKTIK-pauiAPGwgRYrn83X6q3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-slow bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full flex items-center hover:opacity-90 transition-all hover:scale-105"
        >
          <Download size={20} className="mr-2" />
          Resume
        </a>
      </div>
    </div>

    {/* Right Side - Memoji */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-180 h-180 md:w-156 md:h-126 bg-gradient-to-br  flex items-center justify-center overflow-hidden relative">
        <img
          src="/assets/memoji.png"
          alt="Memoji"
          className="w-full h-full object-contain"
        />
        {/* Semi-circle Behind Memoji */}
        <div className="absolute bottom-0 w-80 h-40 md:w-106 md:h-68 bg-gradient-to-r from-purple-500 via-transparent to-sky-500 opacity-60 rounded-t-full blur-xl z-[-1]"></div>
      </div>
    </div>
  </section>
);
export default HomeSection;