import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState("");
	return (
		<View>
			<Text>Enter Name: {name}</Text>
			<TextInput
				style={styles.input}
				autoCapitalize={"none"}
				autoCorrect={false}
				value={name}
				onChangeText={(v) => setName(v)}
			/>
			{name.length < 5 ? (
				<Text>Password must be longer than 5 characters</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;
