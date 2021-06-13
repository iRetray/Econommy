import React from "react";
import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import StorageService from "./services/StorageService";

import Home from "./screens/Home";
import Transactions from "./screens/Transactions";
import AddTransaction from "./screens/AddTransaction";

import styles from "./styles/App";
import { useState } from "react";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();

const App = () => {
  const [numberOfTransactions, setNumberOfTransactions] = useState(0);
  const [appData, setAppData] = useState({
    transactionsList: [],
    summary: {
      avaliable: 450000,
      spended: 50000,
    },
  });

  useEffect(() => {
    updateAppData();
  }, []);

  const updateAppData = () => {
    StorageService.getObjectData({ key: "transactions" }).then((response) => {
      let calculatedSpended = 0;
      response.data
        .filter((transaction) => transaction.type === "EXPENSE")
        .map((transaction) => transaction.amount)
        .forEach((amount) => {
          if (amount) {
            calculatedSpended = calculatedSpended + amount;
          }
        });

      let calculatedAvaliable = 0;
      response.data
        .filter((transaction) => transaction.type === "INCOME")
        .map((transaction) => transaction.amount)
        .forEach((amount) => {
          if (amount) {
            calculatedAvaliable = calculatedAvaliable + amount;
          }
        });

      const finalAvaliable = calculatedAvaliable - calculatedSpended;
      setAppData({
        ...appData,
        transactionsList: response.data,
        summary: {
          avaliable: finalAvaliable,
          spended: calculatedSpended,
        },
      });

      setNumberOfTransactions(response.data.length);
    });
  };

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
              keyboardHidesTabBar: true,
            }}
            label
          >
            <Tab.Screen
              name="Historial"
              options={{ tabBarBadge: numberOfTransactions }}
            >
              {() => (
                <Transactions transactionsList={appData.transactionsList} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Mis Finanzas">
              {() => (
                <Home summary={appData.summary} updateAppData={updateAppData} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Añadir">
              {() => <AddTransaction updateAppData={updateAppData} />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
