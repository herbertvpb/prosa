import React, { useState } from 'react'
import { MdSearch as SearchIcon, MdArrowBack as BackIcon  } from "react-icons/md";

const SearchBox = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="search-box">
      <div className="search-box__input">
        <button 
          onClick={() => setOpen(!open)}
          className={
            `search-box__icon ${
              open ? 'search-box__icon--back' : 'search-box__icon--search'
            }`
          }
        >
          { open ? <BackIcon size={20}/> : <SearchIcon size={18}/> }
        </button>
        <input className="" type="text" placeholder="Buscar contato"/>
      </div>
    </div>
  )
}

export default SearchBox;
