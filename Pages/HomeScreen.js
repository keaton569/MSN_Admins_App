import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect } from "react";

export default function MoreScreen() {
  useEffect(() => {}, []);

  return (
    <View style={styles.Container}>
      {/* <View style={styles.Header}>
        <View style={styles.LogoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.Logo} />
        </View>
        <View style={styles.LogoTextContainer}></View>
      </View> */}
      <View style={styles.WelcomeTextContainer}>
        <Text style={styles.WelcomeText}>Hey, Welcome Back!</Text>
        <Text>
          This page is obviously not even started. Give me some ideas of things
          to put here?
        </Text>
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
    paddingTop: 40,
  },
  WelcomeTextContainer: { marginTop: 20 },
  WelcomeText: {
    alignSelf: "stretch",
    fontSize: 22,
  },
  Header: {
    flexDirection: "row",
    height: 40,
  },
  LogoContainer: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  LogoTextContainer: {
    alignContent: "flex-end",
    alignItems: "flex-end",
    width: "50%",
    paddingRight: 10,
  },
  Logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
