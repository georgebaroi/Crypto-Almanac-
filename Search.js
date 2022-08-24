
import React, { useState } from "react";

function Search({ setSearch }) {
  const [string, setString] = useState("")

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <i className="circular search link icon" onClick={(e)=>setSearch(string)}></i>
    </div>
  );
}
export default Search
