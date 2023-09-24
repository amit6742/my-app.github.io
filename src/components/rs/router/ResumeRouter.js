import React from "react";
import { NavLink } from "react-router-dom";

const ResumeRouter = () => {
  return (
    <>
      <a href="#" logo />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResumeRouter;
