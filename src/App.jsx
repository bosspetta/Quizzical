import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from './pages/Start'
import Questions from './pages/Questions'

function App() {
    return (
        <div className='quizzical--wrapper'>
            <Switch>
                <Route exact path='/'>
                    <Start />
                </Route>
                <Route path='/questions'>
                    <Questions />
                </Route>
            </Switch>
        </div>
    )
}

export default App
