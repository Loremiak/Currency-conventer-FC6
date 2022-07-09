const url = "https://api.frankfurter.app/latest";
const fetchCurrencies = fetch(url)
	.then((response) => response.json())
	.catch((err) => console.log(err));

export { fetchCurrencies };
