interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  tags: string[];
}

interface OpenSourceWork {
  program: string;
  role: string;
  description: string;
  date: string;
  link: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
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
  OPEN_SOURCE: OpenSourceWork[];
  CERTIFICATES: Certificate[];
  CONTACT: Contact;
}

const DATA: Data = {
  HERO_CONTENT: "I am a Full Stack Developer with a strong foundation in Data Structures and Algorithms, having solved over 500 problems. I specialize in building scalable web applications using the MERN stack and have experience with real-time socket programming and AI integration. Currently finishing my B.Tech at SGGSIE&T, I am passionate about crafting efficient, user-centric digital solutions.",
  ABOUT_TEXT: "I am a dedicated Full Stack Developer and a B.Tech student in Electronics and Telecommunication at SGGSIE&T, Nanded. With expertise in React, Node.js, and MongoDB, I have developed complex applications ranging from EdTech platforms to Medical AI assistants. My coding journey is backed by a strong grasp of CS fundamentals, demonstrated by solving 500+ DSA problems on LeetCode and GeeksforGeeks.",
  
  PROJECTS: [
    {
      title: "Quiz Portal",
      description: "An adaptive quiz platform with real-time scoring, role-based access control, and Google Meet API integration for virtual sessions.",
      github: "https://github.com/saishghatol/quiz-portal",
      demo: "https://quiz-portal-nu.vercel.app/",
      tags: ["React", "Node.js", "MongoDB", "Google Meet API"]
    },
    {
      title: "Aarogya Medical AI Assistant",
      description: "A Next.js web application utilizing the Google Gemini API to process healthcare queries with 90% response accuracy, generating customized health recommendations.",
      github: "https://github.com/saishghatol/aarogya",
      demo: "https://aarogya-lake.vercel.app/",
      tags: ["Next.js", "Google Gemini API", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "StudyNotion EdTech Platform",
      description: "A full-stack education platform for creating and consuming content. Features secure Razorpay payments, Nodemailer notifications, and supports 100+ users.",
      github: "https://github.com/saishghatol/studynotion",
      demo: "https://studynotion-six-pi.vercel.app/",
      tags: ["React", "Node.js", "MongoDB", "Express", "Razorpay"]
    },
    {
      title: "BillSplitter",
      description: "A simple and efficient tool to split bills among friends.",
      github: "https://github.com/SaishGhatol/billsplitter",
      demo: "https://billsplitter-virid.vercel.app/",
      tags: ["Next.js", "TypeScript"]
    },
    {
      title: "Real-Time Chat Application",
      description: "A scalable chat platform using Socket.IO and WebSocket supporting 500+ concurrent users with media sharing and image compression capabilities.",
      github: "https://github.com/saishghatol/chatapp",
      demo: "",
      tags: ["React", "Node.js", "Socket.IO", "WebSocket"]
    },
  ],

  OPEN_SOURCE: [
    {
      program: "Social Summer of Code",
      role: "Contributor",
      description: "Contributed to open-source projects by fixing bugs and improving documentation. Collaborated with mentors and other developers to enhance code quality.",
      date: "2025",
      link:"#",
    },
    {
      program: "GirlScript Summer of Code",
      role: "Contributor",
      description: "Active participant in the open-source community, working on frontend issues and optimizing React components for better performance.",
      date: "2025",
      link:"#",

    }
  ],

  CERTIFICATES: [
    {
      title: "Data Visualization Virtual Internship",
      issuer: "Tata Group",
      date: " 2023",
      description: "Completed a virtual internship program focusing on data visualization techniques, analyzing complex datasets, and presenting actionable insights.",
      link: "#"
    },
    {
      "title": "Front-End Software Engineering Job Simulation",
      "issuer": "Skyscanner",
      "date": "2025",
      "description": "Completed practical tasks involving the creation of a Backpack React Web App.",
      "link": "#"
    },
      {
    "title": "Software Engineering Job Simulation",
    "issuer": "Electronic Arts",
    "date": "2025",
    "description": "Completed practical tasks including writing a feature proposal, creating a game object class, improving an inventory system, and performing a live bugfix.",
    "link": "#"
  },
    {
      title: "500+ DSA Problems Solved",
      issuer: "LeetCode & GeeksforGeeks",
      date: "Ongoing",
      description: "Demonstrated strong problem-solving skills by solving over 500 data structure and algorithm problems across major coding platforms.",
      link: "https://leetcode.com/saishghatol/"
    },
    {
      title: "SQL Proficiency",
      issuer: "HackerRank / LeetCode",
      date: "Ongoing",
      description: "Practiced and mastered over 100 SQL queries, focusing on complex joins, subqueries, and database optimization techniques.",
      link: "https://leetcode.com/saishghatol/"
    },
  ],

  CONTACT: {
    address: "Nagpur, Maharashtra, India",
    phoneNo: "+91 96732 23756",
    email: "saishghatol100@gmail.com",
    email2: "2022bec027@sggs.ac.in"
  }
};

export default DATA;