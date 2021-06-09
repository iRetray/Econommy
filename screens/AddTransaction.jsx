import React from "react";
import { Text, View } from "react-native";
import { Input, Divider, Button } from "@ui-kitten/components";
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { Icon } from "@ui-kitten/components";

import styles from "../styles/AddTransaction";
import { useState } from "react";

const AddTransaction = () => {
  const [valuesForm, setValuesForm] = useState({
    ammount: "",
    description: "",
    type: "",
  });

  const handleChangeMoney = (number) => {
    const formatedNumber = number
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setValuesForm({
      ...valuesForm,
      ammount: formatedNumber,
    });
  };

  const isSelected = (value) => {
    return value === valuesForm.type;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addTransactionText}>Añadir transacción</Text>

      <View style={styles.buttonsGroup}>
        <Button
          onPress={() =>
            setValuesForm({
              ...valuesForm,
              type: "INCOME",
            })
          }
          size="giant"
          appearance={isSelected("INCOME") ? "filled" : "outline"}
          status={isSelected("INCOME") ? "info" : "basic"}
          style={styles.button}
        >
          <View style={styles.internalButton}>
            <FontAwesome5
              name="coins"
              size={24}
              color={isSelected("INCOME") ? "white" : "grey"}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={
                isSelected("INCOME")
                  ? styles.textSelected
                  : styles.textNotSelected
              }
            >
              Ingreso
            </Text>
          </View>
        </Button>
        <Button
          onPress={() =>
            setValuesForm({
              ...valuesForm,
              type: "EXPENSE",
            })
          }
          size="giant"
          appearance={isSelected("EXPENSE") ? "filled" : "outline"}
          status={isSelected("EXPENSE") ? "danger" : "basic"}
          style={styles.button}
        >
          <View style={styles.internalButton}>
            <FontAwesome
              name="paper-plane-o"
              size={24}
              color={isSelected("EXPENSE") ? "white" : "grey"}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={
                isSelected("EXPENSE")
                  ? styles.textSelected
                  : styles.textNotSelected
              }
            >
              Gasto
            </Text>
          </View>
        </Button>
      </View>

      <Divider style={styles.divider} />
      <View style={styles.inputGroup}>
        <Input
          style={styles.input}
          keyboardType={"numeric"}
          size="large"
          label="Cantidad"
          placeholder="450.000"
          accessoryLeft={() => (
            <MaterialIcons name="attach-money" size={20} color="#1890ff" />
          )}
          value={valuesForm.ammount}
          onChangeText={(nextValue) => handleChangeMoney(nextValue)}
        />
        <Input
          style={styles.input}
          multiline={true}
          textStyle={{ minHeight: 64 }}
          size="large"
          label="Descripción"
          placeholder={`Escribe aquí una descripción de la transacción para recordar ${
            isSelected("EXPENSE") ? "en que te gastaste" : "como obtuviste"
          } el dinero`}
          accessoryLeft={() => (
            <Feather name="file-text" size={20} color="#1890ff" />
          )}
          value={valuesForm.description}
          onChangeText={(nextValue) =>
            setValuesForm({
              ...valuesForm,
              description: nextValue,
            })
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonSave}
          accessoryLeft={() => (
            <Icon
              name="plus-circle-outline"
              style={{ width: 32, height: 32 }}
              fill="white"
            />
          )}
          disabled={
            valuesForm.ammount === "" ||
            valuesForm.description === "" ||
            valuesForm.type === ""
          }
        >
          <Text style={{ ...styles.textButton, color: "white" }}>
            Añadir movimiento
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default AddTransaction;
