
import { educationData } from '../data/education';
import WaveBackground from './WaveBg';
const EducationSection = () => (
    <section
    id="education"
    className="min-h-screen flex flex-col items-center bg-gray-900 relative overflow-hidden px-10 md:px-20 pt-20 pb-20">
    <WaveBackground />
    <h2 className="text-7xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight pb-2">
      Educational Journey
    </h2>

    <div className="relative w-full space-y-16">
  {educationData.map((edu, index) => (
    <div key={index} className="relative flex w-full items-center">
      
      {/* Timeline Line & Dot (Aligned to Each Card's Side) */}
      <div
        className={`absolute top-0 w-1 h-full bg-${edu.color}-500 ${
          index % 2 === 0 ? "left-8" : "right-8"
        }`}
      ></div>

      <div
        className={`absolute w-6 h-6 bg-${edu.color}-500 rounded-full shadow-lg ${
          index % 2 === 0 ? "left-11" : "right-11"
        }`}
      ></div>

      {/* Education Card - Fixed Width & Expands Only in Length */}
      <div
        className={`relative md:w-[50%] min-w-[900px] bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-${edu.color}-500 transition-all shadow-lg duration-250 ${
          index % 2 === 0 
            ? "ml-20 mr-auto hover:w-[65%]" // Left-aligned, expands right
            : "mr-20 ml-auto hover:w-[65%]" // Right-aligned, expands left
        }`}
      >
        {/* Education Details */}
        <h3 className="font-semibold text-2xl mb-2 text-gray-200">{edu.name}</h3>
        <p className={`text-${edu.color}-400 font-medium`}>{edu.institution}</p>
        <p className="text-gray-400">{edu.year}</p>
        <div className="mt-2 space-y-1 text-gray-300">
          {edu.subjects.map((subject, i) => (
            <p key={i}>• {subject}</p>
          ))}
        </div>

        {/* Floating Icon (Top Right) */}
        <div className="absolute top-4 right-4">{edu.icon}</div>

        {/* Institution Logo - Contained in Circle */}
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-gray-700 flex items-center justify-center rounded-full shadow-lg overflow-hidden">
          <img src={edu.logo} alt={`${edu.institution} Logo`} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  ))}
</div>

  </section>
);
export default EducationSection;