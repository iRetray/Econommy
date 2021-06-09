import React from "react";
import { Text, View } from "react-native";
import { Input, Divider } from "@ui-kitten/components";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../styles/AddTransaction";

const AddTransaction = () => {
  const [value, setValue] = React.useState("");

  return (
    <View style={styles.buttomContainer}>
      <Text style={styles.addTransactionText}>Añadir transacción</Text>
      <Divider style={styles.divider} />
      <View style={styles.inputGroup}>
        <Input
          style={styles.input}
          size="large"
          label="Cantidad"
          placeholder="450.000"
          accessoryLeft={() => (
            <MaterialIcons name="attach-money" size={20} color="#1890ff" />
          )}
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Input
          style={styles.input}
          multiline={true}
          textStyle={{ minHeight: 64 }}
          size="large"
          label="Descripción"
          placeholder="450.000"
          accessoryLeft={() => (
            <MaterialIcons name="attach-money" size={20} color="#1890ff" />
          )}
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
      </View>
    </View>
  );
};

export default AddTransaction;
