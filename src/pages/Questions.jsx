import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../Context'
import Question from '../components/Question'

function Questions() {
    const { allQuestions } = useContext(Context)

    const questionsItems = allQuestions.map((item, i) => {
        return (
            <Question key={i} theQuestion={item} index={i} />
        )
    })

    return (
        <div className='quizzical--questions'>
            <Link to='/' className='quizzical--back' title="Back to home">Go back</Link>
            <form id='questions-form'>
                {questionsItems}
            </form>
            <p className='quizzical--buttons-wrapper'><button type='button' className='quizzical--btn'>Check answers</button></p>
        </div>
    )
}

export default Questions
