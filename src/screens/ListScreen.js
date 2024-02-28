import { FlatList, StyleSheet, Text } from "react-native";

import React from "react";

const ListScreen = () => {
	const friends = [
		{ name: "Friend #1", age: 20 },
		{ name: "Friend #2", age: 45 },
		{ name: "Friend #3", age: 32 },
		{ name: "Friend #4", age: 27 },
		{ name: "Friend #5", age: 53 },
		{ name: "Friend #6", age: 30 },
		{ name: "Friend #7", age: 25 },
		{ name: "Friend #8", age: 21 },
		{ name: "Friend #9", age: 19 },
	];
	return (
		<>
			<FlatList
				data={friends}
				renderItem={({ item, index }) => {
					return (
						<Text style={styles.text} key={index}>
							{item.name} - Age {item.age} - {index}
						</Text>
					);
				}}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});
export default ListScreen;
