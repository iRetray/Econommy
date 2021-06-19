import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";

import TransactionItem from "../../components/TransactionItem/TransactionItem";

const Transactions = ({ transactionsList }) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <Text style={styles.title}>
            <Text style={styles.strong}>Historial de transacciones</Text>
          </Text>
        </View>
        <ScrollView
          ref={scrollViewRef}
          style={styles.list}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
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
                  onPress={() => navigation.navigate("Añadir")}
                >
                  Crear transacción
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

Transactions.propTypes = {
  transactionsList: PropTypes.any,
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
