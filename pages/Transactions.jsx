import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem/TransactionItem";

const onlyIncomes = new Array(5).fill({
  amount: 450000,
  type: "INCOME",
  description: "Dinero gastado en cositas geniales",
});

const onlyExpenses = new Array(5).fill({
  amount: 450000,
  type: "EXPENSE",
  description: "Dinero gastado en cositas geniales",
});

const transactionsData = [...onlyIncomes, ...onlyExpenses];

const Transactions = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <Text style={styles.title}>
            <Text style={styles.strong}>Historial de transacciones</Text>
          </Text>
        </View>
        <ScrollView style={styles.list}>
          {transactionsData.map((transaction, index) => (
            <TransactionItem
              key={index}
              amount={transaction.amount}
              type={transaction.type}
              description={transaction.description}
            />
          ))}
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
