import React from 'react'

const SearchBox = ({ value, onChange }) => {
    return ( 
        <input 
        value={value}
        onChange={ e => onChange( e.currentTarget.value)}
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search your subject here..."
        />
     );
}
 
export default SearchBox;