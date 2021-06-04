import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

/* type (definition)
INCOME -> Ingreso de dinero
EXPENSE -> Gasto 
*/

const TransactionItem = ({ amount, type, description }) => {
  const [isExpense, setIsExpense] = React.useState(false);

  useEffect(() => {
    setIsExpense(type === "EXPENSE");
  }, [type]);

  return (
    <View style={styles.transaction}>
      <View>
        {isExpense ? (
          <AntDesign name="shoppingcart" size={40} color="#f5222d" />
        ) : (
          <MaterialCommunityIcons name="bank-plus" size={40} color="#389e0d" />
        )}
      </View>
      <View>
        <Text>{amount}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

TransactionItem.propTypes = {
  amount: PropTypes.number,
  type: PropTypes.string,
  description: PropTypes.string,
};

export default TransactionItem;
