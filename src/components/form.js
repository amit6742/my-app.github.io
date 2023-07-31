import { useState } from "react";

const InputForm = () => {
  const [form, setForm] = useState("");

  const handleSubmitted = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmitted}>
          <input type="text" value={form} onChange={handleChange} />
          <button>submitted</button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
