import { Button, StyleSheet, Text, View } from "react-native";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "increase":
			return { ...state, counter: state.counter + action.payload };
		case "decrease":
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};
const _state_obj = { counter: 0 };

const CounterScreen = () => {
	const [_state, dispatch] = useReducer(reducer, _state_obj);

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: "increase", payload: 10 });
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: "decrease", payload: 10 });
				}}
			/>
			<Text>Current Count: {_state.counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default CounterScreen;
