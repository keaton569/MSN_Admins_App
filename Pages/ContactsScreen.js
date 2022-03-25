import { Text, View, StyleSheet, Button } from "react-native";

export default function ContactsScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Button
          title="Add Contact"
          onPress={() => {
            navigation.navigate("Add Contact");
          }}
        />
      </View>
      <View style={styles.Row}>
        <Button
          title="View All Contacts"
          onPress={() => {
            navigation.navigate("View Contacts");
          }}
        />
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
