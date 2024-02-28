import { Button, StyleSheet, Text, View } from "react-native";

import { useState } from "react";

const ColorCounter = (props) => {
	return (
		<View>
			<Text>{`${props.color}`}</Text>
			<Button
				title={`Increase ${props.color}`}
				onPress={props.onIncrease}
			/>
			<Button
				title={`Decrease ${props.color}`}
				onPress={props.onDecrease}
			/>
		</View>
	);
};

const style = StyleSheet.create({});

export default ColorCounter;
