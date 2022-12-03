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
        <span className='quizzical--answer' key={i} onClick={handleClick}>{item}</span>
    ))
    function handleClick(e) {
        e.target.style.fontWeight = 'bold'
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
