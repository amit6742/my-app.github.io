import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import "./Resume.css";
const Resume = ({ data }) => {
  
  const { name, email, phone, skills, education, experience } = data;


// const handleToggle =()=>{
//   const body = document.body;
//   body.classList.toggle("dark-mode")
 
// }



  return (
    <>
      <div  className="text">
        <h1>{name}</h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Skills skills={skills} />
        <Education education={education} />
        <Experience experience={experience} />
        {/* <div>
        <button onClick={handleToggle}>toggle</button>

        </div> */}

        

       

       


      </div>
      
    </>
  );
};

export default Resume;
