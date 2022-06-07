import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { colors } from './assets/colors/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home/Home';
import { Detail } from './components/Detail/Detail';
import { RecipesType } from './assets/data/recipesData';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync()
				await Font.loadAsync({
					'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
					'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
				})
				await new Promise(resolve => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name={'Home'} component={Home} options={{headerShown: false}} />
					<Stack.Screen name={'Detail'} component={Detail} options={{headerShown: false}} />
				</Stack.Navigator>
			</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
});

export type RootStackParamList = {
	Home: undefined
	Detail: {
		item: RecipesType
	}
}