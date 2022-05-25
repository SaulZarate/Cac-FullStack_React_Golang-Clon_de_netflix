import React from 'react'
import './Banner.css'


const Banner = ({movie ,urlImage}) => {

    console.log(movie)

    return (
        <section 
        className='banner'
        style={{backgroundImage: `url(${urlImage})`}}
        >
            <div className='contentData'>
                <div className='headerMovie'>
                    <h2>
                        <span className='logoNetflix'>N </span>
                        <span className='textMovie'>Pelicula</span>
                    </h2>
                </div>
                
                <div className="contentInfo">
                    <h1 className='title'>{movie.title}</h1>
                    <p className='description'>{movie.overview}</p>
                </div>

                <div className='contentButtons'>
                    <div className="contentBtnMovie">
                        <button className='btnPlay' >{'>'} Reproducir</button>
                        <button className='btnInfo'>i Más información</button>
                    </div>

                    <div className='contentVolumen'>
                        <span className='icon'>IconVolumen</span>
                        <span className='separador'> | </span>
                        <span className='age'>{movie >= 18 ? '18+': '-18'}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner