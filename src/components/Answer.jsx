import React from 'react'

function Answer({ theQuestion, qIndex }) {
    const { correct_answer, incorrect_answers } = theQuestion
    const allAnswers = []
    incorrect_answers.map(item => allAnswers.push(item))
    allAnswers.push(correct_answer)
    allAnswers.sort(function () {
        return Math.random() - 0.5;
    })
    const theAnswers = allAnswers.map((item, i) => (
        <div className='quizzical--answer-wrapper' key={i}>
            <input
                aria-label={`answer-${item}`}
                className='quizzical--answer'
                type='radio'
                name={`answer-${qIndex}`}
                id={`answer-${i}`}
                value={item}
                onClick={checkAnswers} />
            <label htmlFor={`answer-${i}`}>{item}</label>
        </div>
    ))

    function checkAnswers(e) {
        const answerValue = e.target.defaultValue
        if (answerValue === correct_answer) {
            console.log('Correct!')
        } else {
            console.log('Keep trying!')
        }
    }
    return (
        <>
            {theAnswers}
        </>
    )
}

export default Answer
