import { AiFillHtml5, AiOutlineDatabase, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact, FaJava, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { DiMysql, DiMongodb, DiPostgresql } from "react-icons/di";

export default [
  // Languages
  { name: `Java`, icon: <FaJava /> },
  { name: `HTML5`, icon: <AiFillHtml5 /> },
  { name: `CSS`, icon: <FaCss3Alt /> },
  { name: `JavaScript`, icon: <TbBrandJavascript /> },

  // Database Management
  { name: `MySQL`, icon: <DiMysql /> },
  { name: `MongoDB`, icon: <DiMongodb /> },
  { name: `PostgreSQL`, icon: <DiPostgresql /> },
  { name: `DBMS`, icon: <AiOutlineDatabase /> },

  // CS Fundamentals
  { name: `Data Structures`, icon: <AiOutlineDatabase /> }, 
  { name: `Algorithm Design`, icon: <AiOutlineDatabase /> },
  { name: `OS`, icon: <AiOutlineDatabase /> },
  { name: `OOPS`, icon: <AiOutlineDatabase /> },
  { name: `Computer Networks`, icon: <AiOutlineDatabase /> },

  // Web Technologies
  { name: `Bootstrap`, icon: <FaBootstrap /> },
  { name: `TailwindCSS`, icon: <TbBrandTailwind /> },
  { name: `Git`, icon: <AiFillGithub /> },
  { name: `React.JS`, icon: <FaReact /> },
  { name: `Next.js 14`, icon: <FaReact /> }, 

  // Backend Development
  { name: `Firebase`, icon: <AiOutlineDatabase /> },
  { name: `Express.js`, icon: <FaNodeJs /> },
  { name: `Node.js`, icon: <FaNodeJs /> },
];
