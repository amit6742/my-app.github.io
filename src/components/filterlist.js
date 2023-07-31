import React, { useState } from 'react';


const FilteredList = ({ data }) => {

  const [searchText, setSearchText] = useState('');
  
  const filteredList = data.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Type to search..."
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;



