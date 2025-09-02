// src/data/skills.js
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiDjango, SiSupabase, SiFirebase, SiGraphql,
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiAmazonwebservices, SiGithubactions
} from "react-icons/si";


export const skillsData = {
  frontend: {
    title: "Frontend",
    icon: <SiReact />,
    color: "blue",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "orange" },
      { name: "CSS3", icon: <SiCss3 />, color: "blue" },
      { name: "JavaScript", icon: <SiJavascript />, color: "yellow" },
      { name: "React", icon: <SiReact />, color: "blue" },
      { name: "TypeScript", icon: <SiTypescript />, color: "blue" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "cyan" }
    ]
  },
  backend: {
    title: "Backend",
    icon: <SiNodedotjs />,
    color: "green",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "green" },
      { name: "Express", icon: <SiExpress />, color: "purple" },
      { name: "Django (Python)", icon: <SiDjango />, color: "blue" },
      { name: "Supabase", icon: <SiSupabase />, color: "green" },
      { name: "Firebase", icon: <SiFirebase />, color: "orange" },
      { name: "GraphQL & RESTFUL API", icon: <SiGraphql />, color: "blue" }
    ]
  },
  tools: {
    title: "Database & Tools",
    icon: <SiMongodb />,
    color: "purple",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "green" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "blue" },
      { name: "Git", icon: <SiGit />, color: "orange" },
      { name: "Docker", icon: <SiDocker />, color: "blue" },
      { name: "AWS", icon: <SiAmazonwebservices />, color: "yellow" },
      { name: "CI/CD", icon: <SiGithubactions />, color: "gray" }
    ]
  }
};
