const url = 'http://api.nbp.pl/api/exchangerates/tables/A/'
const fetchCurrencies = fetch(url)
	.then(response => response.json())
	.catch(err => console.log(err))

export { fetchCurrencies }
