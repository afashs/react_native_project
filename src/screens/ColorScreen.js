import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { useState } from "react";

function randomRgb() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
}

const ColorScreen = () => {
	const [colors, setColors] = useState([]);
	return (
		<View>
			<Button
				title="Add a Color"
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: randomRgb(),
				}}
			/>
			<FlatList
				data={colors}
				keyExtrator={(item) => item}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								height: 100,
								width: 100,
								backgroundColor: item,
							}}
						/>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});

export default ColorScreen;
