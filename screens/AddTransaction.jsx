import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Keyboard } from "react-native";
import { Input, Divider, Button, Modal, Icon } from "@ui-kitten/components";
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/es";

import StorageService from "../services/StorageService";

import styles from "../styles/AddTransaction";

const AddTransaction = ({ updateAppData }) => {
  const navigation = useNavigation();
  const [valuesForm, setValuesForm] = useState({
    ammount: "",
    description: "",
    type: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeMoney = (number) => {
    const formatedNumber = number
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setValuesForm({
      ...valuesForm,
      ammount: formatedNumber,
    });
  };

  const saveNewTransaction = () => {
    const { description, type } = valuesForm;
    const onlyNumbersAmount = valuesForm.ammount.replace(/[(.)]/g, "");
    const newTransaction = {
      amount: parseInt(onlyNumbersAmount),
      type: type,
      date: moment(),
      description: description,
    };

    StorageService.getObjectData({ key: "transactions" }).then((response) => {
      const newTransactionsArray = [...response.data, newTransaction];
      StorageService.storeObjectData({
        key: "transactions",
        object: newTransactionsArray,
      }).then((response) => {
        if (response.status === "SUCCESS") {
          setIsVisible(true);
          setValuesForm({
            ammount: "",
            description: "",
            type: "",
          });
          updateAppData();
        }
      });
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
          <Text
            style={{ ...styles.textButton, color: "white" }}
            onPress={() => {
              Keyboard.dismiss();
              saveNewTransaction();
            }}
          >
            Añadir movimiento
          </Text>
        </Button>
      </View>

      <Modal
        visible={isVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.titleModal}>¡Genial!</Text>
          <Text style={styles.textModal}>
            <Text>Se ha </Text>
            <Text style={{ fontWeight: "bold" }}>guardado correctamente </Text>
            <Text>tu nueva transacción</Text>
          </Text>
          <Button
            style={styles.buttonModal}
            onPress={() => {
              setIsVisible(false);
              navigation.navigate("Historial");
            }}
          >
            Ok
          </Button>
        </View>
      </Modal>
    </View>
  );
};

AddTransaction.propTypes = {
  updateAppData: PropTypes.any,
};

export default AddTransaction;
