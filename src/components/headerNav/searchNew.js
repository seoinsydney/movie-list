import React, {useState } from 'react'

function SearchNew({type }) {

    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];

    // return (
    //     <div>
            
    //     </div>
    // )
}

export default SearchNew
