import React from 'react'
import '../styles/SpinnerApi.css';

export default function SpinnerApi({titulo, subtitulo1, subtitulo2, subtitulo3, subtitulo4, subtitulo5}) {
    return (

        <>

            <div className="spinnerContainer">
                <div className="spinner"></div>
                <div className="loader">
                    <p>{titulo}</p>
                    <div className="words">
                        <span className="word">{subtitulo1}</span>
                        <span className="word">{subtitulo2}</span>
                        <span className="word">{subtitulo3}</span>
                        <span className="word">{subtitulo4}</span>
                        <span className="word">{subtitulo5}</span>
                    </div>
                </div>
            </div>

        </>

    )
}
