import { SiJavascript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { SiVercel } from "react-icons/si";
const SkillsBanner = () => {
  return (
    <div>
      <ul className="skills-banner">
        <li>
          <SiJavascript className="icons-container" />
        </li>
        <li>
          <FaReact className="icons-container" />
        </li>
        <li>
          <SiNextdotjs className="icons-container" />
        </li>
        <li>
          <SiPrisma className="icons-container" />
        </li>
        <li>
          <BiLogoPostgresql className="icons-container" />
        </li>
        <li>
          <FaGithub className="icons-container" />
        </li>
        <li>
          <SiVercel className="icons-container" />
        </li>
      </ul>
    </div>
  );
};

export default SkillsBanner;