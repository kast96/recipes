import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Tab, TabType } from "./Tab";

export const Tabs: React.FC<{tabs: Array<TabType>}> = ({tabs}) => {
	const [activeTab, setActiveTab] = useState<TabType | null>(tabs.find(tab => tab.active) || tabs[0] || null)

	const onPressTab = (id: string) => {
		tabs.map(tab => tab.active = (tab.id === id) ? true : false)
		setActiveTab(tabs.find(tab => tab.id === id))
	}

	let tabsWithOnPress = tabs.map(tab => {return {...tab, onPress: onPressTab}})

	return (
		<View style={styles.tabs}>
			<View style={styles.header}>
				<FlatList
					data={tabsWithOnPress}
					renderItem={Tab}
					keyExtractor={(item) => item.id}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
			<View style={styles.body}>
				<activeTab.component />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	tabs: {
	},
	header: {
	},
	body: {
	}
});