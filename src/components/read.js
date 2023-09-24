

const Resume = ({ experienceList, skillList }) => {
  return (
    <div>
      <h2>Resume</h2>
      <div>
        <h3>Experience</h3>
        <ul>
          {experienceList.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          {skillList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
