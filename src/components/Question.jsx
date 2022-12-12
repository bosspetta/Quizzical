import React from 'react'

import Answer from './Answer'

function Question({ theQuestion, index }) {
    const { question } = theQuestion

    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    }

    return (
        <>
            <div className='quizzical--question'>
                <h2>{htmlDecode(question)}</h2>
                <div className="quizzical--answers">
                    <Answer theQuestion={theQuestion} qIndex={index} />
                </div>
            </div>
        </>
    )
}

export default Question
