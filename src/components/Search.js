import React from 'react'

const Search = (props) => {
    return (
        <div>
            <form action="" method="get">
                <input 
                    type="text"
                    value={props.value}
                    onChange={(event)=>props.setSearch(event.target.value)}
                    name="search"
                    placeholder="Search Movies By Name"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
