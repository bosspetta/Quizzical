import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../Context'
import Question from '../components/Question'

function Questions() {
    const { allQuestions } = useContext(Context)

    const questionsItems = allQuestions.map((item, i) => {
        return (
            <Question key={i} theQuestion={item} />
        )
    })

    return (
        <>
            <h1><Link to='/'>Go back</Link> - Questions page!</h1>
            <form id='questions-form'>
                {questionsItems}
            </form>
            <button type='button'>Check answers</button>
        </>
    )
}

export default Questions
