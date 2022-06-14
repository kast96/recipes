import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../assets/colors/colors";
import { categoriesData } from "../../assets/data/categoriesData";
import { TabType } from "../common/Tabs/Tab";
import { Tabs } from "../common/Tabs/Tabs";
import { Compound } from "./Compound";
import { Recipe } from "./Recipe";
import { LinearGradient } from "expo-linear-gradient";

export const Detail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Detail'>>()

  let _item = route.params.item
  let item = {
    ..._item,
    categories: categoriesData.filter(category => _item.categories.includes(category.id))
  }

  const tabs = [
    {id: 'compound', name: 'Состав', active: true, component: Compound},
    {id: 'recipe', name: 'Рецепт', active: false, component: Recipe}
  ] as Array<TabType>

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ImageBackground source={item.images.large} style={styles.background} imageStyle={styles.backgroundImage} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 0.5}}
        style={styles.imageOverlay}
      />
      <ScrollView>
        <View style={styles.scrollViewWrapper}>
          <View style={styles.imageContentWrapper}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
              <FontAwesome5 name={'chevron-left'} size={16} color={colors.main} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{item.name}</Text>
              {item.categories && 
                <Text style={styles.categories}>{item.categories.map(category => category.name).join(' / ')}</Text>
              }
            </View>
            <View style={styles.tabs}>
              <Tabs tabs={tabs} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: colors.background,
	},
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
		height: height * 0.25,
  },
  scrollViewWrapper: {
    marginTop: StatusBar.currentHeight,
    paddingBottom: 60,
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: height * 0.25,
  },
  imageContentWrapper: {
    paddingHorizontal: 30,
    height: height * 0.25 - StatusBar.currentHeight,
  },
  backIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.background,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  contentWrapper: {
    paddingTop: 30,
    paddingHorizontal: 30,
    marginTop: -20,
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  title: {
    fontSize: 24,
		fontFamily: 'Nunito-ExtraBold',
		color: colors.text,
    textAlign: 'center',
    paddingBottom: 6,
  },
  categories: {
    fontSize: 16,
		fontFamily: 'Nunito-SemiBold',
		color: colors.textLight,
    textAlign: 'center',
    paddingBottom: 15,
  },
  tabs: {

  },
});