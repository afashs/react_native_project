import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.imageSource} />
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
