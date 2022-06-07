import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors/colors";
import { CategoryType } from "../../assets/data/categoriesData";

export const CategoryItem: React.FC<{item: CategoryType, index: number}> = ({item, index}) => {
  return (
    <TouchableOpacity style={[styles.container, index === 0 && styles.containerFirst]}>
      <View style={styles.iconWrapper}>
        <item.icon width={32} height={32} fill={colors.main} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container: {
    marginRight: 20,
  },
  containerFirst: {
    marginLeft: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text,
  }
});