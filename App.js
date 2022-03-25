import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import HomeScreen from "./Pages/HomeScreen";
import MoreScreen from "./Pages/MoreScreen";
import PurchasesScreen from "./Pages/PurchasesScreen";
import ContactsScreen from "./Pages/ContactsScreen";
import AddContact from "./Pages/AddContactScreen";
import ViewContacts from "./Pages/ViewContactsScreen";

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Schedule!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const ContactsStack = createNativeStackNavigator();

function ContactsStackScreen() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen name="Contacts Home" component={ContactsScreen} />
      <ContactsStack.Screen name="Add Contact" component={AddContact} />
      <ContactsStack.Screen name="View Contacts" component={ViewContacts} />
    </ContactsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Entypo name={"home"} size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name="Purchases"
          component={PurchasesScreen}
          options={{
            tabBarLabel: "Purchases",
            tabBarIcon: ({ color, size }) => (
              <Entypo name={"shopping-bag"} size={size} color={color} />
            ),
            headerShown: false,
          }}
        /> */}
        <Tab.Screen
          name="Contacts"
          component={ContactsStackScreen}
          options={{
            tabBarLabel: "Contacts",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={"cards"}
                size={size}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <Entypo name={"calendar"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: "More",
            tabBarIcon: ({ color, size }) => (
              <Feather name={"more-vertical"} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
