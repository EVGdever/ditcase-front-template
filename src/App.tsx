import React from 'react'
import './App.css'

import { Button } from 'ditcase-ui-kit'
import {Card} from './components/Card/Card'

function App() {
	return (
		<div className="App">
			<Button title='Default Button' onClick={() => console.log('asd')}/>
			<Button title='Dark Button' theme='dark' />
			<Card />
		</div>
	)
}

export default App
