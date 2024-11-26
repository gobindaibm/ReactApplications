import React from 'react'
import {FaSearch} from 'react-icons/fa'
export default function SearchBar(props) {
  return (
    <div  className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input className='custom-input' placeholder='Type to search...' onChange={(e) => props.handleChange(e, 'tab')}/>
    </div>
  )
}

