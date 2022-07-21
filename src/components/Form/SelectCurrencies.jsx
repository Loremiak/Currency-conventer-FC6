import React, { useEffect, useState } from 'react'
import { fetchCurrencies } from '../../services/apiCurrencies'

export const SelectCurrencies = ({ userSelect, setUserSelect }) => {
	const [currencies, setCurrencies] = useState([])

	useEffect(() => {
		fetchCurrencies.then(data => {
			setCurrencies(data[0].rates)
		})
	}, [])

	return (
		<select id='select-dom' value={userSelect} onChange={e => setUserSelect(e.target.value)}>
			<option>Wybierz walutę:</option>
			{currencies.map(currency => (
				<option key={currency.code} value={currency.mid}>
					{currency.code}
				</option>
			))}
		</select>
	)
}
