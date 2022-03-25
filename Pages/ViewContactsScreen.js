import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  let currentLetter = "A";

  useEffect(async () => {
    fetch("https://app.medspa.network/api/contacts/allContacts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContacts(data);
      });
  }, []);

  let filteredContacts = contacts
    .filter((item) => {
      const searchString =
        item.firstName +
        " " +
        item.lastName +
        " " +
        item.company +
        " " +
        item.phoneNumber +
        " " +
        item.email;
      if (search === "") {
        return item;
      } else if (
        searchString
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      ) {
        return item;
      } else return null;
    })
    .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
    .map((item) => {
      return item;
    });

  return (
    <View style={styles.Container}>
      <View style={styles.SearchBarContainer}>
        <TextInput
          style={styles.SearchBar}
          placeholder="Search..."
          placeholderTextColor={"dimgrey"}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <View style={styles.ContactsContainer}>
        <FlatList
          data={filteredContacts}
          keyExtractor={(item, index) => {
            return item._id;
          }}
          renderItem={(item) => {
            let letterUsed = false;

            if (
              item.item.firstName != undefined &&
              item.item.firstName.charAt(0) != currentLetter
            ) {
              currentLetter = item.item.firstName.charAt(0);
            } else {
              letterUsed = true;
            }

            return (
              <View>
                {!letterUsed ? (
                  <View style={styles.CharactedBar}>
                    <Text style={{ fontSize: 22, fontWeight: "800" }}>
                      {currentLetter}
                    </Text>
                  </View>
                ) : null}

                <View style={styles.Row}>
                  <View style={styles.TitleBar}>
                    <Text style={styles.NameBold}>
                      {item.item.firstName + " " + item.item.lastName}
                    </Text>
                  </View>
                  <View>
                    <Text>{item.item.phoneNumber}</Text>
                    <Text>{item.item.email}</Text>
                    <Text>{item.item.company}</Text>
                  </View>
                </View>
              </View>
            );
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
  },
  TextInputContainer: {
    alignSelf: "stretch",
    marginTop: 30,
  },
  ContactsContainer: {
    padding: 10,
    marginBottom: 60,
  },
  CharactedBar: {
    padding: 10,
    borderRadius: 10,
  },
  Row: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    minHeight: 50,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
  },
  SearchBarContainer: {
    backgroundColor: "white",
    padding: 10,
  },
  SearchBar: {
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    height: 50,
    padding: 10,
  },
  NameBold: {
    fontSize: 16,
    fontWeight: "600",
  },
  Button: {
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
