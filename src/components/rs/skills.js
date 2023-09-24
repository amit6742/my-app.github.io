
import React from "react";


const Skills = ({ skills }) => {
 
  return (
    <>
  

    <div>
    
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
          {skill.react}  {skill.python} {skill.javascript}</li>
        ))}
      </ul>
    </div>
    </>
  );
};
export default Skills;
