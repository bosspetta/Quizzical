import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <>
            <h1 className='quizzical--title'>Quizzical</h1>
            <p className='quizzical--subtitle'>Some description if needed</p>
            <Link to="/questions" className='quizzical--btn quizzical--btn__start'>
                Start quiz
            </Link>
        </>
    )
}

export default Start
