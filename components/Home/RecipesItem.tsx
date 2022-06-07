import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import { colors } from "../../assets/colors/colors";
import { RecipesType } from "../../assets/data/recipesData";

export const RecipesItem: React.FC<{item: RecipesType}> = ({item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', {item})}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item.images.medium} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container: {
    marginBottom: 30,
    marginHorizontal: 10,
  },
  imageWrapper: {
    marginBottom: 8,
  },
  image: {
    borderRadius: 20,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-ExtraBold',
    color: colors.text,
  }
});