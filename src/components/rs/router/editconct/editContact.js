import React, { useState } from "react";

export const EditContact = ({saveContact,onSave}) => {
  const [name, setName] = useState(saveContact.name);
  const [email, setEmail] = useState(saveContact.email);
  return (
    <>
      <div>
        <section>
          <label>
            name: ''
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            E-mail:''
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
            <button>save</button>
            <button>reset</button>
          
        </section>
      </div>
    </>
  );
};
