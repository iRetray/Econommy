import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { Button } from "@ui-kitten/components";

import StorageService from "../services/StorageService";

const Transactions = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  useEffect(() => {
    updateTransactions();
  }, []);

  const updateTransactions = () => {
    StorageService.getObjectData({ key: "transactions" }).then((response) => {
      setTransactionsList(response.data);
    });
  };

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
            {transactionsList && transactionsList.length > 0 ? (
              transactionsList.map((transaction, index) => (
                <TransactionItem
                  key={index}
                  amount={transaction.amount}
                  type={transaction.type}
                  date={transaction.date}
                  description={transaction.description}
                />
              ))
            ) : (
              <View>
                <Text style={styles.noTransactions}>
                  No tienes ninguna transacción
                </Text>
                <Button
                  style={styles.button}
                  size="large"
                  appearance="ghost"
                  onPress={() => updateTransactions()}
                >
                  Actualizar
                </Button>
              </View>
            )}
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
  noTransactions: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default Transactions;
