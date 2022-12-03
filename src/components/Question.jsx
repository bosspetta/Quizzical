import React from 'react'

import Answer from './Answer'

function Question({ theQuestion }) {
    const { question } = theQuestion
    console.log(theQuestion)
    return (
        <>
            <div className='quizzical--question'>
                <h2>{question}</h2>
                <Answer theQuestion={theQuestion} />
            </div>
        </>
    )
}

export default Question
