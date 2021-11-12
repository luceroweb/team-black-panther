import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";

export default function Images({ navigation }) {
	return (
		<Layout navigation={navigation}>

				<View>
					<Text style={styles.text}>
						Images
					</Text>
				</View>

		</Layout>
	);
}
const styles = StyleSheet.create({
	text: {
		margin: 5,
		fontSize: 14,
	},
});