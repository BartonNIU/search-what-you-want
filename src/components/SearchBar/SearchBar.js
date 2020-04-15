import React, { useState } from 'react'
import './SearchBar.scss'

function SearchBar() {

    const [inputValue, setInputValue] = useState()

    const handleSubmit = (e) => {
        //alert(`You want to search ${inputValue}, right?`)
        console.log(inputValue);
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value);

    }

    return (
        <div className="searchBar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button>Search</button>
            </form>
            {/* <div dangerouslySetInnerHTML={{ __html: inputValue }}></div> */}
        </div>
    )
}

export default SearchBar
