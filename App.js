import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Ionicons, FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/Home";
import Configurations from "./components/Configurations";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigator}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Mis Finanzas") {
              return (
                <FontAwesome5
                  name="money-check"
                  size={focused ? size + 5 : size}
                  color={color}
                />
              );
            } else if (route.name === "Perfil") {
              return (
                <Feather
                  name="user"
                  size={focused ? size + 5 : size}
                  color={color}
                />
              );
            } else if (route.name === "Añadir") {
              return (
                <Ionicons
                  name="ios-add-circle"
                  size={focused ? size + 5 : size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#52c41a",
          inactiveTintColor: "#bfbfbf",
          style: { height: "8%" },
          labelStyle: { marginBottom: 10 },
        }}
        label
      >
        <Tab.Screen name="Añadir" component={Home} />
        <Tab.Screen name="Mis Finanzas" component={Home} />
        <Tab.Screen name="Perfil" component={Configurations} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navigator: {
    marginBottom: 20,
  },
});
