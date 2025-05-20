import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const ContactSection = () => (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-start bg-gray-800 pt-20">
    <h2 className="text-7xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight pb-15">
      Let's Connect
    </h2>

    {/* Contact Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-10 w-full px-20">
  {[
    { icon: <Github size={75} className="text-gray-200" />, link: "https://github.com/chiragmukheja", color: "gray-900" },
    { icon: <Linkedin size={75} className="text-blue-600" />, link: "https://linkedin.com/in/chiragmukheja", color: "gray-900" },
    { icon: <Mail size={75} className="text-red-400" />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=mukhejachirag22@gmail.com", color: "gray-900" },
    { icon: <FaWhatsapp size={75} className="text-green-500" />, link: "https://wa.me/9988774955", color: "gray-900" }
  ].map((contact, index) => (
    <a
      key={index}
      href={contact.link}
      target='_blank'
      rel='noopener noreferrer'
      className="flex flex-col items-center justify-center bg-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105 scroll-animation w-full max-w-[500px] h-20 md:h-24 lg:h-45 mx-auto"
    >
      {contact.icon}
    </a>
  ))}
</div>
  </section>
);
export default ContactSection;