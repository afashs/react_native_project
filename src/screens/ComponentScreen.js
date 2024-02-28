import { StyleSheet, Text, View } from "react-native";

import React from "react";

const ComponentScreen = () => {
	const name = "마빈이는 귀엽다";
	const title = "개발 귀찮아";
	return (
		<View>
			<Text style={styles.text}>{title}</Text>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	text: {
		fontSize: 45,
	},
	name: {
		fontSize: 20,
	},
});

export default ComponentScreen;
