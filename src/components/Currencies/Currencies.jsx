import React from "react";
import { useEffect } from "react";
import { fetchCurrencies } from "../../services/apiCurrencies";

export const Currencies = () => {
	useEffect(() => {
		fetchCurrencies.then((data) => {
			console.log(data.rates);
		});
	}, []);
	return <div></div>;
};
