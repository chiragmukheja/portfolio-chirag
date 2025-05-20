
import { skillData } from '../data/skills';
const SkillsSection = () => (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 ">
    <div className="max-w-8xl w-full mx-auto py-20 px-20">
      <h2 className="text-7xl font-bold mb-16 text-left bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text scroll-animation">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {skillData.map((skill) => (
      <div key={skill.name} className={`flex items-center justify-center px-10 py-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105`}>
        {skill.icon}
        <h3 className="ml-4 font-semibold text-2xl text-gray-200">{skill.name}</h3>
      </div>
    ))}
  </div>
    </div>
  </section>
);
export default SkillsSection;