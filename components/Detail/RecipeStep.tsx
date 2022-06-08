import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors/colors";
import { StepType } from "../../assets/data/recipesData";

export const RecipeStep: React.FC<PropsType> = ({step, index}) => {
	const [isOpened, setIsOpened] = useState<boolean>(false)

	return (
		<TouchableOpacity style={styles.item} onPress={() => setIsOpened(!isOpened)}>
			<View style={styles.numberWrapper}>
				<Text style={styles.number}>{index + 1}</Text>
			</View>
			<View style={styles.contentWrapper}>
				<Text style={styles.title}>{step.title}</Text>
				<Text style={styles.description} numberOfLines={isOpened ? 0 : 1}>{step.description}</Text>
			</View>
		</TouchableOpacity> 
	)
}

const styles = StyleSheet.create({
	item: {
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 20,
		padding: 10,
		flexDirection: 'row',
		marginBottom: 20,
	},
	numberWrapper: {
		width: 40,
		height: 40,
		backgroundColor: colors.main,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
	},
	number: {
		fontSize: 24,
		fontFamily: 'Nunito-ExtraBold',
		color: '#fff',
	},
	contentWrapper: {
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontFamily: 'Nunito-ExtraBold',
		color: colors.text,
	},
	description: {
		fontSize: 14,
		fontFamily: 'Nunito-SemiBold',
		color: colors.textLight,
	},
});

type PropsType = {
	step: StepType
	index: number
}