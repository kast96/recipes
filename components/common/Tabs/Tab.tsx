import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../assets/colors/colors";

export const Tab: React.FC<{item: TabType & {onPress: (id: string) => void}, index: number}> = ({item, index}) => {
	return (
		<TouchableOpacity style={[styles.tab, index === 0 && styles.tabFirst, item.active && styles.tabActive]} onPress={() => !item.active && item.onPress(item.id)}>
			<Text style={[styles.tabText, item.active && styles.tabTextActive]}>{item.name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	tab: {
		marginLeft: 30,
		marginVertical: 20,
	},
	tabFirst: {
		marginLeft: 0,
	},
	tabActive: {
		borderBottomWidth: 2,
		borderColor: colors.main,
	},
	tabText: {
		fontSize: 16,
		fontFamily: 'Nunito-ExtraBold',
		color: colors.textLight,
	},
	tabTextActive: {
		color: colors.text,
	}
});

export type TabType = {
	id: string
	name: string
	active: boolean
	component: (props: any) => JSX.Element
}
