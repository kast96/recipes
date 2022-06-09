import { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../assets/colors/colors";
import { categoriesData } from "../../assets/data/categoriesData";
import { recipesData } from "../../assets/data/recipesData";
import { CategoryItem } from "./CatagoryItem";
import { RecipesItem } from "./RecipesItem";

export const Home = () => {
	const [searchText, setSearchText] = useState<string>('')
	const [filterCategories, setFilterCategories] = useState<Array<string>>([])

	const onPressCategory = (id: string) => {
		setFilterCategories((filterCategories.includes(id)) ? filterCategories.filter(category => category !== id) : [...filterCategories, id])
	}

	let categoriesWithOnPress = categoriesData.map(category => ({...category, onPress: onPressCategory, active: filterCategories.includes(category.id)}))

	let recipesWithCategoryFilter = (filterCategories.length) ? recipesData.filter(recipe => recipe.categories.some(category => filterCategories.includes(category))) : recipesData
	
	let searches = searchText.split(' ').filter(search => search.length)
	
	let recipes = recipesWithCategoryFilter.map(recipe => ({...recipe, searchIndex: 0}))
	if (searches.length) {
		recipes = recipes.map(recipe => ({
			...recipe,
			searchIndex: searches.filter(search => recipe.name.indexOf(search) >= 0).length
		}))
		recipes = recipes.filter(recipe => recipe.searchIndex > 0)
		recipes.sort((a, b) => b.searchIndex - a.searchIndex)
	}

	return (
		<View style={styles.container}>
			<StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
			<View style={styles.header}>
				<Text style={styles.title}>Recipes</Text>
			</View>
			<ScrollView>
				<View style={styles.scrollViewWrapper}>
					<View style={styles.containerWrapper}>
						<View style={styles.searchWrapper}>
							<TextInput style={styles.searchInput} placeholder="Find" onChangeText={setSearchText} value={searchText} />
							<TouchableOpacity style={styles.searchIconWrapper}>
							<FontAwesome5 name='search' size={16} color={colors.main} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.containerWrapper}>
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
						<View style={styles.containerWrapper}>
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
		backgroundColor: colors.background,
	},
	containerWrapper: {
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