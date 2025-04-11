import project1 from "../assets/projects/chat.webp";
import project2 from "../assets/projects/task.png";
import project3 from "../assets/projects/resume.webp";
import project4 from "../assets/projects/ai.png";

export const HERO_CONTENT = ` Passionate about web development, I specialize in building seamless, scalable, and user-friendly web experiences. Leveraging technologies like JavaScript, React, and more, I create responsive and dynamic web applications. With a focus on clean code and intuitive design, I aim to turn ideas into impactful solutions and continuously evolve as a Full Stack Developer.`;

export const ABOUT_TEXT = `I’m a passionate web developer focused on creating seamless, scalable, and user-friendly web experiences. As a Full Stack Enthusiast, I utilize technologies like JavaScript, React, and modern tools to build responsive, dynamic web applications. I prioritize clean, maintainable code and ensure that my designs offer smooth functionality across all devices. Always eager to learn and grow, I strive to turn ideas into impactful solutions while continuously improving my skills in both frontend and backend development.`;

export const PROJECTS = [
  {
    title: "Chat App",
    image: project1,
    description:
      "A sleek, user-friendly chat app with a modern interface, real-time messaging, and color theme mode support, offering smooth communication with intuitive features and a minimalist design.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Task Manager App",
    image: project2,
    description:
      "A responsive and user-friendly task management application built with the MERN stack. It allows users to add, update, delete, and categorize tasks with priority levels. Includes visual task insights using pie and bar charts, with seamless UI powered by Tailwind CSS.",
    technologies: ["MongoDB", "React", "Express", "NodeJS", "Axios"],
  },
  {
    title: "Resume",
    image: project3,
    description:
      "A professional and modern resume website designed to showcase your skills, experience, and qualifications. The site features a clean, user-friendly layout with sections for personal information, work experience, education, skills, and contact details. It allows easy navigation and provides options for downloading or sharing your resume. The design is minimalist and visually appealing, offering a seamless experience for potential employers or clients to view your qualifications.",
    technologies: ["HTML", "React", "Tailwind CSS"],
  },
  {
    title: "AI Chat Bot Interview",
    image: project4,
    description:
      "An AI-powered interview simulation tool designed to help users practice and improve their interview skills. Built with a clean and intuitive interface, it supports dynamic question flow, real-time interactions, and integration with NLP APIs for smart responses.",
    technologies: [
      "Google Gemini",
      "Firebase",
      "VAPI",
      "Firebase Authentication",
    ],
  },
];

export const CONTACT = {
  address: "12695 Lee Ben Rd, Kingsville, MD 21087 ",
  phoneNo: "443-264-0683",
  email: "manminhlai2910@gmail.com",
};

export const gitUrls = [
  "https://github.com/manminhlai2910/chat",
  "https://github.com/manminhlai2910/netflixclone",
  "https://github.com/manminhlai2910/resume",
  "https://github.com/manminhlai2910/todo",
];
