
interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface Contact {
  address: string;
  phoneNo: string;
  email: string;
  email2: string;
}
interface Data {
  HERO_CONTENT: string;
  ABOUT_TEXT: string;
  PROJECTS: Project[];
  CONTACT: Contact;
}
const DATA: Data = {

    "HERO_CONTENT": "I'm a passionate full-stack developer crafting high-performance web applications with seamless front-end and robust back-end systems. Specializing in React, Next.js, and Node.js, I build responsive, user-friendly interfaces and scalable RESTful APIs, managing data efficiently with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB). Recently, I developed a real-time chat app using WebSockets, merging dynamic interactivity with secure, real-time synchronization. With a problem-solving mindset and clean code practices, I turn complex ideas into scalable, user-centric solutions. Let’s connect and bring your next digital vision to life! 🚀",
      
    "ABOUT_TEXT": "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
    
    
    "PROJECTS": [
      {
        "title": "E-Commerce Website",
        "description": "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        "link":" https://example.com",
        "tags": ["HTML", "CSS", "React", "Node.js", "MongoDB"]
      },
      {
        "title": "Task Management App",
        "description": "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        "link": "https://example.com",
        "tags": ["HTML", "CSS", "Angular", "Firebase"]
      },
      {
        "title": "Portfolio Website",
        "description": "A personal portfolio website showcasing projects, skills, and contact information.",
        "link": "https://example.com",
        "tags": ["HTML", "CSS", "React", "Bootstrap"]
      },
      {
        "title": "Blogging Platform",
        "description": "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        "link": "https://example.com",
        "tags": ["HTML", "CSS", "Vue.js", "Express", "mySQL"]
      }
    ],
    
    "CONTACT": {
      "address": "Ayurvedic Layout NIT Complex Sakkardara, Nagpur, Maharashtra, India",
      "phoneNo": "+91 9673223756 ",
      "email": "saishghatol100@gmail.com",
      "email2": "2022bec027@sggs.ac.in"
    }
    }
    
export default DATA;