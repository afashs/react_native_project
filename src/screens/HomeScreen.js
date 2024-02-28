import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = (props) => {
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => props.navigation.navigate("List")}
			/>
			<Button
				title="Go to Image Screen"
				onPress={() => props.navigation.navigate("Image")}
			/>
			<Button
				title="Go to Counter Screen"
				onPress={() => props.navigation.navigate("Counter")}
			/>
			<Button
				title="Go to Color Screen"
				onPress={() => props.navigation.navigate("Color")}
			/>
			<Button
				title="Go to Square Screen"
				onPress={() => props.navigation.navigate("Square")}
			/>
			<Button
				title="Go to Text Screen"
				onPress={() => props.navigation.navigate("Text")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		alignSelf: "center",
		margin: 10,
	},
	button: {
		margin: 10,
	},
});

export default HomeScreen;
