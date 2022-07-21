import { useState } from 'react'
import './App.css'
import { NumberInput } from './components/Form/NumberInput'
import { SelectCurrencies } from './components/Form/SelectCurrencies'
import { SubmitBtn } from './components/Form/SubmitBtn'

function App() {
	const [userInput, setUserInput] = useState('')
	const [userSelect, setUserSelect] = useState('')
	const [result, setResult] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		let answer = userInput * userSelect
		setResult(answer.toFixed(2))
	}
	return (
		<main className='main'>
			<h1>Przelicznik walut</h1>
			<div className='main-container'>
				<form onSubmit={handleSubmit}>
					<NumberInput userInput={userInput} setUserInput={setUserInput} />
					<SelectCurrencies userSelect={userSelect} setUserSelect={setUserSelect} />
					<SubmitBtn />
				</form>
			</div>
			<span className='answer'>{result} PLN</span>
		</main>
	)
}

export default App
