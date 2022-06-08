import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import { RecipeStep } from "./RecipeStep";

export const Recipe = () => {
	const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>()
	let item = route.params.item
	
	return (
		<View>
			{item.steps.map((step, key) =>
				<RecipeStep key={key} step={step} index={key} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
});