import React from "react";
import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Home from "./screens/Home";
import Transactions from "./screens/Transactions";
import AddTransaction from "./screens/AddTransaction";

import styles from "./styles/App";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer style={styles.navigator}>
          <Tab.Navigator
            initialRouteName="Mis Finanzas"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Mis Finanzas") {
                  return (
                    <FontAwesome5
                      name="home"
                      size={focused ? size + 5 : size}
                      color={color}
                    />
                  );
                } else if (route.name === "Añadir") {
                  return (
                    <Ionicons
                      name="add-circle-outline"
                      size={focused ? size + 5 : size}
                      color={color}
                    />
                  );
                } else if (route.name === "Historial") {
                  return (
                    <AntDesign
                      name="creditcard"
                      size={focused ? size + 5 : size}
                      color={color}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: "#1890ff",
              inactiveTintColor: "#bfbfbf",
              style: { height: "8%" },
              labelStyle: { marginBottom: 10 },
            }}
            label
          >
            <Tab.Screen name="Historial" component={Transactions} />
            <Tab.Screen name="Mis Finanzas" component={Home} />
            <Tab.Screen name="Añadir" component={AddTransaction} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
