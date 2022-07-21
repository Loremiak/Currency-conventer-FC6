import React from 'react'

export const NumberInput = ({ userInput, setUserInput }) => {
	return (
		<input
			value={userInput}
			onChange={e => setUserInput(e.target.value)}
			type='number'
			placeholder='Kwota'
			className='amount-input'
			id='amount-input'
			required
		/>
	)
}
