import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    
    const filmNodes = films.map ( film =>{
        return(
            <Film name={film.name} key={film.id}>{film.url}</Film>
        )
    })
    
    return (
        <>
        {/* <h1>I'm a film list</h1> */}
        {filmNodes}
        </>
    )
}

export default FilmList;