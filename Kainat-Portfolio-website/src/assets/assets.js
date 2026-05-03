import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaJs, FaCss3Alt,  FaHtml5, FaLock, FaList} from 'react-icons/fa';

import profileImg from './profile.jpeg'
import ProjectImg1 from './Project1.png'
import ProjectImg2 from './Project2.png'
import ProjectImg3 from './Project3.png'
import ProjectImg4 from './Project4.png'
import ProjectImg5 from './Project5.png'
import ProjectImg6 from './Project6.png'
import ProjectImg7 from './Project7.png'
import ProjectImg8 from './Project8.png'

export const assets = {
    profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Problem Solver',
    description: 'I enjoy solving real-world problems by building practical and efficient web solutions.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Focused',
    description: 'I create clean, responsive, and user-friendly interfaces with attention to detail.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write simple, readable, and maintainable code using modern development practices.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and user-friendly web interfaces using modern technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Tailwind CSS']
  },
  {
    title: 'JavaScript Projects',
    icon: FaJs,
    description: 'Creating interactive web applications and mini projects using core JavaScript concepts.',
    tags: ['DOM Manipulation', 'Events', 'Functions', 'Logic Building']
  },
  {
    title: 'React Development',
    icon: FaReact,
    description: 'Developing dynamic single-page applications using React, hooks, and component-based architecture.',
    tags: ['React JS', 'Vite', 'useState', 'useEffect']
  },
  {
    title: 'UI Styling',
    icon: FaCss3Alt,
    description: 'Designing clean and modern user interfaces with responsive layouts.',
    tags: ['CSS', 'Flexbox', 'Grid', 'Tailwind CSS']
  },
  {
    title: 'Tools & Workflow',
    icon: FaTools,
    description: 'Using essential development tools for efficient coding and project management.',
    tags: ['Git', 'GitHub', 'VS Code', 'Vercel']
  }
];

export const projects = [
  {
    title: "Color Changer",
    description: "A simple JavaScript project that changes the background color dynamically with a click, showing basic DOM manipulation.",
    image: ProjectImg1,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://javascript-course-bfpv.vercel.app/",
    code: "#",
  },
  {
    title: "BMI Calculator",
    description: "A BMI calculator that takes height and weight input, calculates BMI, and displays the health category with validation.",
    image: ProjectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://javascript-course-ten.vercel.app/",
    code: "#",
  },
  {
    title: "Digital Clock",
    description: "A real-time digital clock that shows the current time using JavaScript Date object with live second updates.",
    image: ProjectImg3,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://javascript-course-hgvg.vercel.app/",
    code: "#",
  },
  {
    title: "Number Guessing Game",
    description: "An interactive game where users guess a random number with hints, helping improve logic and JavaScript skills.",
    image: ProjectImg4,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://javascript-course-lmkg.vercel.app/",
    code: "#",
  },
  {
    title: "Unlimited Colors",
    description: "A fun project that generates random background colors continuously, demonstrating intervals and dynamic styling.",
    image: ProjectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://javascript-course-2mmm.vercel.app/",
    code: "#",
  },
  {
    title: "Background Changer (React)",
    description: "A React app built with Vite and Tailwind CSS that lets users change background colors dynamically using state.",
    image: ProjectImg6,
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact, FaCss3Alt],
    demo: "#",
    code: "#",
  },
  {
    title: "Password Generator",
    description: "A React-based password generator that creates strong random passwords with adjustable length and options.",
    image: ProjectImg7,
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact, FaLock],
    demo: "#",
    code: "#",
  },
  {
    title: "Todo List App",
    description: "A React task app that allows users to add, delete, and mark tasks as completed with a simple UI.",
    image: ProjectImg8,
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact, FaList],
    demo: "https://react-js-course-2x1a.vercel.app/",
    code: "#",
  }
];


export const LearningData = [
  {
    role: "Frontend Learner",
    company: "Self-Learning",
    duration: "2025 - Present",
    description:
      "Building web applications using HTML, CSS, JavaScript, and React while improving problem-solving skills.",
    color: "purple"
  },
  {
    role: "Project Development",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Created projects like BMI Calculator, Number Guessing Game, and Todo App with responsive design and real-world functionality.",
    color: "pink"
  },
  {
    role: "Skill Development",
    company: "Practice & Exploration",
    duration: "Ongoing",
    description:
      "Continuously learning React, improving UI/UX design, and exploring modern frontend tools and best practices.",
    color: "blue"
  }
];
