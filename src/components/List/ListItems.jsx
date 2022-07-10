import React from "react";
import { ListItem } from "./ListItem";

export const ListItems = () => {
	return (
		<ul>
			{data.map(() => (
				<ListItem />
			))}
		</ul>
	);
};
