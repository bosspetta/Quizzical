import React from 'react'

function Answer({ theQuestion }) {
    const { correct_answer, incorrect_answers } = theQuestion
    const allAnswers = []
    incorrect_answers.map(item => allAnswers.push(item))
    allAnswers.push(correct_answer)
    allAnswers.sort(function () {
        return Math.random() - 0.5;
    })
    const theAnswers = allAnswers.map((item, i) => (
        // <span className='quizzical--answer' key={i} onClick={handleClick}>{item}</span>
        <div className='quizzical--answer-wrapper' key={i}>
            <label htmlFor={`answer-${i}`}>{item}</label>
            <input aria-label={`answer-${item}`} className='quizzical--answer' type='radio' name='answer' id={`answer-${i}`} onClick={handleClick} />
        </div>
    ))
    function handleClick(e) {
        console.log(e.target)
        e.target.previousSibling.classList.add('quizzical--answer--selected')
    }
    function checkAnswers(e) {
        const answerValue = e.target.textContent
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
