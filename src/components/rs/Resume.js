import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import "./Resume.css";
import { useState } from "react";
import ThemeContext from "../contex/themscontex";




const Resume = ({ data }) => {
  const [color, setColor] = useState("light-theme");
  const { name, email, phone, skills, education, experience } = data;

  return (
    <>
     
  


      <ThemeContext.Provider value={color}>
        <div className={color}>
          <h1>{name}</h1>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <Skills skills={skills} />
          <Education education={education} />
          <Experience experience={experience} />

          <button
            onClick={() =>
              setColor(color === "dark-theme" ? "light-theme" : "dark-theme")
            }
          >
            {color}
          </button>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Resume;
