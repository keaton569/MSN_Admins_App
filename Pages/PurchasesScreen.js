import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoreScreen({ navigation }) {
  const [purchases, setPurchases] = useState([]);

  useEffect(async () => {
    const getPurchases = await fetch(
      "https://app.medspa.network/api/orders/getPurchases",
      {
        method: "POST",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPurchases(res.slice(0, 10));
      });
  }, []);

  return (
    <View style={styles.Container}>
      <Text>Displaying the last 10 orders</Text>
      <FlatList
        data={purchases}
        keyExtractor={(item, index) => {
          return item._id;
        }}
        renderItem={(item) => {
          return (
            <View style={styles.Row}>
              <View style={styles.TitleBar}>
                <View
                  style={[
                    styles.ShippingNotification,
                    {
                      backgroundColor:
                        item.item.shippingStatus === "Shipped"
                          ? "green"
                          : "red",
                    },
                  ]}
                ></View>
                <Text style={styles.RowText}>{item.item.company}</Text>
              </View>
              <View>
                <Text>{item.item.amount}</Text>
                <Text>{item.item.date}</Text>
                <Text>Ordering Rep: {item.item.repName}</Text>
                <Button
                  title="See Purchase"
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                ></Button>
              </View>
            </View>
          );
        }}
      />
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
  Row: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    height: 200,
    maxHeight: 500,
    minHeight: 50,
    marginTop: 20,
  },
  TitleBar: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
  },
  RowText: {
    fontSize: 22,
    margin: 10,
  },
  ShippingNotification: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
});
