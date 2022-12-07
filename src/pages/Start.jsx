import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <div className='quizzical--start-page'>
            <h1 className='quizzical--title'>Quizzical</h1>
            <p className='quizzical--subtitle'>A quiz game made with React!</p>
            <Link to="/questions" className='quizzical--btn quizzical--btn__start'>
                Start quiz
            </Link>
        </div>
    )
}

export default Start
