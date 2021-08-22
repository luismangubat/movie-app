import React from 'react'

interface searchProps {
  input: string;
  setInput: (e:React.ChangeEvent<HTMLInputElement>) => string;

}

const SearchBar = (props: searchProps) => {
  console.log('search bar')
  return (
    <div>
      <input 
        type="search" 
        placeholder="Search..."
        value={props.input}
        onChange={(e) => props.setInput(e)}
          ></input>
    </div>
  )
}

export default SearchBar
