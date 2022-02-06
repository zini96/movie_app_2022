import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'

function Movie({title, rating, year, runtime, summary, poster, genres}){
    return(
        <div className='movie'>
            <img src={poster} alt={title} title={title}/>
            <div className='movie__data'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <h5 className='movie__rating'>{rating}</h5>
                <h5 className='movie__runtime'>{runtime}</h5>
                <ul className='movie__genres'>
                    {genres.map((genre,index)=>{
                        return <li key={index} className='movie__genre'>{genre}</li>;
                    })}
                </ul>
                <p className='movie__summary'>{summary.slice(0,180)}...</p>
                {/* .slice(시작,끝) //끝자리는 포함되지 않음 */}
            </div>
        </div>
    );
}

Movie.prototype = {
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number,
    year: propTypes.number.isRequired,
    runtime: propTypes.number,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
    //API에는 medium_cover_image키값에 저장된 값을 poster로 받아올것
};

export default Movie;