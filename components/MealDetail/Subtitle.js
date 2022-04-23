import { View, StyleSheet, Text } from "react-native";
function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginHorizontal: 12,
    margin: 4,
  },
});
