import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem/TransactionItem";

const onlyIncomes = new Array(5).fill({
  amount: 45000000,
  type: "INCOME",
  date: 1622852631156,
  description:
    "Pago de nómina en Sofka para el mes de Febrero, incluyendo prima de Junio",
});

const onlyExpenses = new Array(5).fill({
  amount: 450000,
  type: "EXPENSE",
  date: 1622852631156,
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
          <View style={styles.transactionsContainer}>
            {transactionsData.map((transaction, index) => (
              <TransactionItem
                key={index}
                amount={transaction.amount}
                type={transaction.type}
                date={transaction.date}
                description={transaction.description}
              />
            ))}
          </View>
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
    backgroundColor: "#d9d9d9",
    marginBottom: "22%",
  },
  transactionsContainer: {
    paddingVertical: "5%",
  },
});

export default Transactions;
