import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, List, ListItem, TabBar } from "@ui-kitten/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

import IncomesTab from "./IncomesTab";
import ExpensesTab from "./ExpensesTab";

const Transactions = () => {
  const [selectedTab, setSelectedTab] = React.useState("INCOMES");

  const data = new Array(20).fill({
    title: "Title for Item",
    description: "Description for Item",
  });

  const renderItemAccessory = (props) => <Button size="tiny">FOLLOW</Button>;

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <Text style={styles.title}>
            <Text style={styles.strong}>Historial de transacciones</Text>
          </Text>
        </View>
        <ScrollView style={styles.list}>
          <List data={data} renderItem={renderItem} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
  },
  title: {
    textAlign: "left",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  strong: {
    fontWeight: "bold",
  },
  list: {
    marginTop: "3%",
  },
});

export default Transactions;
