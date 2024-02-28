import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 15;

const reducer = (state, action) => {
	switch (action.type) {
		case "_red": {
			if (
				state.red + action.payload > 255 ||
				state.red + action.payload < 0
			) {
				return state;
			}
			return { ...state, red: state.red + action.payload };
		}
		case "_green": {
			if (
				state.green + action.payload > 255 ||
				state.green + action.payload < 0
			) {
				return state;
			}
			return { ...state, green: state.green + action.payload };
		}
		case "_blue": {
			if (
				state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
			) {
				return state;
			}
			return { ...state, blue: state.blue + action.payload };
		}
		default:
			return state;
	}
};
const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => {
					dispatch({ type: "_red", payload: COLOR_VALUE });
				}}
				onDecrease={() => {
					dispatch({
						type: "_red",
						payload: -1 * COLOR_VALUE,
					});
				}}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() =>
					dispatch({ type: "_blue", payload: COLOR_VALUE })
				}
				onDecrease={() => {
					dispatch({
						type: "_blue",
						payload: -1 * COLOR_VALUE,
					});
				}}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => {
					dispatch({ type: "_green", payload: COLOR_VALUE });
				}}
				onDecrease={() => {
					dispatch({
						type: "_green",
						payload: -1 * COLOR_VALUE,
					});
				}}
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
				}}></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
