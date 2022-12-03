import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allQuestions, setAllQuestions] = useState([])

    const url = 'https://opentdb.com/api.php?amount=10'

    async function getItems() {
        const res = await fetch(url)
        const data = await res.json()
        return (
            setAllQuestions(data.results)
        )
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <Context.Provider value={{allQuestions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
