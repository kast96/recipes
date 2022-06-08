import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import { colors } from "../../assets/colors/colors";

export const Compound = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>()
  let item = route.params.item
  
  return (
    <View>
      {item.compound.map((compoundItem, key) =>
        <View key={key}>
          <Text style={styles.compoundName}>{compoundItem.name}: <Text style={styles.compoundWeight}>{compoundItem.weight}</Text></Text>
        </View>  
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  compoundName: {
    fontSize: 16,
		fontFamily: 'Nunito-SemiBold',
		color: colors.text,
  },
  compoundWeight: {
		color: colors.textLight,
  }
});