import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect } from "react";

const TransactionsList = ({ isExpenses }) => {
  return (
    <View>
      <Text>{isExpenses ? "Soy de gastos" : "Soy de ingresos"}</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const Transactions = () => {
  return (
    <Tab.Navigator
      style={styles.tabNavigator}
      tabBarOptions={{
        activeTintColor: "#1890ff",
        inactiveTintColor: "#bfbfbf",
      }}
    >
      <Tab.Screen
        name="Ingresos "
        children={() => <TransactionsList isExpenses={false} />}
      />
      <Tab.Screen
        name="Gastos "
        children={() => <TransactionsList isExpenses={true} />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    paddingTop: "10%",
  },
});

export default Transactions;
