import { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../assets/colors/colors";
import { categoriesData } from "../../assets/data/categoriesData";
import { recipesData } from "../../assets/data/recipesData";
import { CategoryItem } from "./CatagoryItem";
import { RecipesItem } from "./RecipesItem";

export const Home = () => {
	const [filterCategories, setFilterCategories] = useState<Array<string>>([])

	const onPressCategory = (id: string) => {
		setFilterCategories((filterCategories.includes(id)) ? filterCategories.filter(category => category !== id) : [...filterCategories, id])
	}

	let categoriesWithOnPress = categoriesData.map(category => {return {...category, onPress: onPressCategory, active: filterCategories.includes(category.id)}})

	let recipes = (filterCategories.length) ? recipesData.filter(recipe => recipe.categories.some(category => filterCategories.includes(category))) : recipesData

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.title}>Recipes</Text>
			</View>
			<ScrollView>
				<View style={styles.scrollViewWrapper}>
					<View style={styles.container}>
						<View style={styles.searchWrapper}>
							<TextInput style={styles.searchInput} placeholder="Find" />
							<TouchableOpacity style={styles.searchIconWrapper}>
							<FontAwesome5 name='search' size={16} color={colors.main} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.container}>
							<Text style={styles.sectionTitle}>Categories</Text>
						</View>
						<View style={styles.categoriesWrapper}>
							<FlatList
								contentContainerStyle={styles.categoriesList} 
								data={categoriesWithOnPress}
								renderItem={CategoryItem}
								keyExtractor={(item) => item.id}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							/>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.container}>
							<Text style={styles.sectionTitle}>Recipes</Text>
						</View>
						<View style={styles.recipesWrapper}>
							{recipes.map(item => <View key={item.id} style={styles.recipeWrapper}><RecipesItem key={item.id} item={item} /></View>)}
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
	},
	header: {
		marginTop: StatusBar.currentHeight,
		marginBottom: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		fontSize: 28,
		fontFamily: 'Nunito-ExtraBold',
		color: colors.text,
	},
	searchWrapper: {
		position: 'relative',
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 16,
		marginBottom: 30,
	},
	searchInput: {
		fontSize: 14,
		color: colors.text,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginRight: 50,
	},
	searchIconWrapper: {
		position: 'absolute',
		right: 0,
		padding: 18,
	},
	section: {
		marginBottom: 30,
	},
	sectionTitle: {
		fontSize: 20,
		fontFamily: 'Nunito-ExtraBold',
		color: colors.text,
		marginBottom: 10,
	},
	categoriesWrapper: {
		flexDirection: 'row',
	},
	categoriesList: {
		paddingHorizontal: 30,
	},
	recipesWrapper: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		marginHorizontal: 20,
	},
	recipeWrapper: {
		width: '50%',
	},
	scrollViewWrapper: {
		paddingBottom: 60,
	}
});