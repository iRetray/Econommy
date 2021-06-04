import React from "react";
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Home from "./pages/Home";
import Configurations from "./pages/Configurations";
import Transactions from "./pages/Transactions";

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
                } else if (route.name === "Perfil") {
                  return (
                    <Feather
                      name="user"
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
            <Tab.Screen name="Perfil" component={Configurations} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
