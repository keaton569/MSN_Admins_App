import { Text, View, StyleSheet } from "react-native";

export default function MoreScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Text style={styles.RowText}>Users</Text>
      </View>
      <View style={styles.Row}>
        <Text style={styles.RowText}>Accounts</Text>
      </View>
      <View style={styles.Row}>
        <Text style={styles.RowText}>Other</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: "stretch",
    backgroundColor: "lightgrey",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  Row: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    maxHeight: 50,
    minHeight: 50,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  RowText: {
    fontSize: 22,
    margin: 10,
  },
});
