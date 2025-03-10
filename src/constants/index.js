import project1 from "../assets/projects/chat.webp";
import project2 from "../assets/projects/netflix.webp";
import project3 from "../assets/projects/resume.webp";
import project4 from "../assets/projects/todo.webp";

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
    title: "Netflix Clone",
    image: project2,
    description:
      "A sleek and modern Netflix clone app offering a user-friendly interface with a dark theme. The app features a prominent movie banner, a grid layout of movie and TV show thumbnails, and intuitive navigation with categories like 'Home', 'Trending', 'My List', and 'Search'. It provides a seamless streaming experience with easy access to a variety of content.",
    technologies: ["HTML", "CSS", "Firebase", "API", "React"],
  },
  {
    title: "Resume",
    image: project3,
    description:
      "A professional and modern resume website designed to showcase your skills, experience, and qualifications. The site features a clean, user-friendly layout with sections for personal information, work experience, education, skills, and contact details. It allows easy navigation and provides options for downloading or sharing your resume. The design is minimalist and visually appealing, offering a seamless experience for potential employers or clients to view your qualifications.",
    technologies: ["HTML", "React", "Tailwind CSS"],
  },
  {
    title: "Todo App",
    image: project4,
    description:
      "A simple and user-friendly To-Do app that helps manage tasks efficiently. It features a clean design with checkboxes for task completion, an input field to add new tasks, and options to edit or delete tasks. Perfect for staying organized and productive.",
    technologies: ["NodeJs", "Express", "MongoDB", "React"],
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
