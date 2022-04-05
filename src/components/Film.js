import React from 'react';

const Film = ({name, children}) => {
    
    
    
    return (
        <>
        {/* <h4>{children}</h4> */}
        <ul>
            <li>
                <a href= {children}><p>{name}</p></a>
                
            </li>
        </ul>
        
        </>

    )
}

export default Film;