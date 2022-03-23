import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function AddContact() {
  const [contactInfo, setInfo] = useState({});

  return (
    <View style={styles.Container}>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor={"dimgrey"}
          style={[
            styles.RequiredField,
            {
              borderLeftColor:
                contactInfo.firstName != undefined ? "green" : "red",
            },
          ]}
          onChange={(text) => {
            setInfo((prevState) => ({ ...prevState, firstName: text }));
          }}
        />
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={"dimgrey"}
          style={[
            styles.RequiredField,
            {
              borderLeftColor:
                contactInfo.firstName != undefined ? "green" : "red",
            },
          ]}
          onChange={(text) => {
            setInfo((prevState) => ({ ...prevState, lastName: text }));
          }}
        />
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={"dimgrey"}
          style={[
            styles.RequiredField,
            {
              borderLeftColor:
                contactInfo.firstName != undefined ? "green" : "red",
            },
          ]}
          onChange={(text) => {
            setInfo((prevState) => ({ ...prevState, email: text }));
          }}
        />
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="Company"
          placeholderTextColor={"dimgrey"}
          style={[
            styles.RequiredField,
            {
              borderLeftColor:
                contactInfo.firstName != undefined ? "green" : "red",
            },
          ]}
          onChange={(text) => {
            setInfo((prevState) => ({ ...prevState, company: text }));
          }}
        />
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="Other Info"
          placeholderTextColor={"dimgrey"}
          style={styles.InputField}
          onChange={(text) => {
            setInfo((prevState) => ({ ...prevState, otherInfo: text }));
          }}
        />
      </View>
      {contactInfo.firstName != undefined &&
      contactInfo.lastName != undefined &&
      contactInfo.email != undefined &&
      contactInfo.company != undefined ? (
        <TouchableOpacity
          style={[styles.Button, { backgroundColor: "#009688" }]}
        >
          <Text style={styles.ButtonText}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.Button, { backgroundColor: "transparent" }]}
        >
          <Text style={[styles.ButtonText, { color: "red" }]}>
            Please Fill out the required fields
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: "stretch",
    backgroundColor: "white",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextInputContainer: {
    alignSelf: "stretch",
    marginTop: 30,
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
  RequiredField: {
    fontSize: 22,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    borderLeftWidth: 5,
  },
  InputField: {
    fontSize: 22,
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
  },
  RequiredText: {
    color: "red",
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
