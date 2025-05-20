import { Code, BookOpen, Cpu } from 'lucide-react';
export const educationData = [
    {
        name: "B.E. Computer Science Engineering",
        year: "2021 - 2025",
        institution: "Chitkara University, Punjab",
        color: "purple",
        icon: <Code size={32} />,
        logo: "/assets/college.png",
        subjects: [<><span className='font-bold'>Adapted to complex problem-solving</span> through hands-on projects and technical challenges.</>, <><span className='font-bold'>Developed analytical and collaboration skills</span> essential for industry-ready innovation.</>],
    },
    {
        name: "Higher Education",
        year: "2019 - 2021",
        institution: "Premier Public School, Samana",
        color: "pink",
        icon: <BookOpen size={32} />,
        logo: "/assets/h_school.jpg",
        subjects: ["Study of Physics, focusing on concepts, laws, and real-world applications.", "Study of Chemistry and Mathematics, covering equations, formulas, and problem-solving methods."],
    },
    {
        name: "Secondary Education",
        year: "2017 - 2019",
        institution: "DAV Public School, Samana",
        color: "purple",
        icon: <Cpu size={32} />,
        logo: "/assets/school.jpeg",
        subjects: ["Fundamental learning in Science, Mathematics, and Language, building essential academic skills.", "First Introduction to basic Programming"],
    },
];