import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import ContactoScreen from "./Srceens/Contactos";
import DestacadoScreen from "./Srceens/Destacados";
import SettingsScreen from "./Srceens/Settings";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
// const ContactStack = createNativeStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="contactos">
      <Tab.Screen
        name="contactos"
        component={ContactoScreen}
        options={{
          tabBarLabel: "Contactos",
          headerShown: false,
          tabBarIcon: ({ colors, size }) => (
            <MaterialCommunityIcons
              name="account-box"
              size={30}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="destacados"
        component={DestacadoScreen}
        options={{
          tabBarLabel: "Contactos",
          headerShown: true,
          tabBarIcon: ({ colors, size }) => (
            <MaterialCommunityIcons
              name="star-box-outline"
              size={30}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Contactos",
          headerShown: true,
          tabBarIcon: ({ colors, size }) => (
            <MaterialIcons name="settings" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
//
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
