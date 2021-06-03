import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CreditCardGenerator from "creditcard-generator";
import CreditCardDisplay from "react-native-credit-card-display";

const getRandomCC = () => {
  return CreditCardGenerator.GenCC();
};

const Configurations = () => {
  return (
    <View style={styles.containerPage}>
      <CreditCardDisplay
        number={getRandomCC()}
        cvc={432}
        expiration="07/24"
        name="Julian Camilo Cruz"
        since="2020"
      />
      <View>
        <Text>Mira nomas que belleza de CC</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
});

export default Configurations;
