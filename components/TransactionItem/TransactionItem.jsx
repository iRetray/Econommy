import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import NumberFormat from "react-number-format";
import moment from "moment";
import "moment/locale/es";

import styles from "./styles";

/* type (definition)
INCOME -> Ingreso de dinero
EXPENSE -> Gasto 
*/

const TransactionItem = ({ amount, type, date, description }) => {
  const [isExpense, setIsExpense] = React.useState(false);

  useEffect(() => {
    setIsExpense(type === "EXPENSE");
  }, [type]);

  return (
    <View style={isExpense ? styles.transactionRight : styles.transactionLeft}>
      <View>
        <View style={styles.date}>
          <Text style={styles.dateMonth}>
            {moment(date).format("MMMM D YYYY")}
          </Text>
          <Text style={styles.hour}>{moment(date).format("h:mm a ")}</Text>
        </View>
        <NumberFormat
          value={amount}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={"$ "}
          renderText={(value) => (
            <Text style={isExpense ? styles.amountRight : styles.amountLeft}>
              {value}
            </Text>
          )}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

TransactionItem.propTypes = {
  amount: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.number,
  description: PropTypes.string,
};

export default TransactionItem;
