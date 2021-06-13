import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, SafeAreaView } from "react-native";
import CreditCardGenerator from "creditcard-generator";
import CreditCardDisplay from "react-native-credit-card-display";
import { Icon, Avatar, Modal, Button } from "@ui-kitten/components";
import { MaterialIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";

import StorageService from "../services/StorageService";

import profilePhoto from "../assets/profilePhoto.jpg";
import styles from "../styles/Home";

const Home = ({ summary, updateAppData }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getRandomCC = () => {
    return CreditCardGenerator.GenCC();
  };

  const deleteAllTransactions = () => {
    StorageService.storeObjectData({
      key: "transactions",
      object: [],
    }).then((response) => {
      if (response.status === "SUCCESS") {
        updateAppData();
      }
    });
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.strong}>Bienvenido de nuevo</Text>
          </Text>
          <View style={styles.profile}>
            <Avatar style={styles.avatar} size="giant" source={profilePhoto} />
            <View>
              <Text style={styles.name}>Julian Camilo</Text>
              <View style={styles.description}>
                <Icon style={styles.iconWork} fill="#595959" name="briefcase" />
                <Text style={styles.work}> Frontend developer</Text>
              </View>
            </View>
          </View>
          <View style={styles.graphs}>
            <CreditCardDisplay
              number={getRandomCC()}
              cvc={432}
              expiration="07/24"
              name="Julian Camilo Cruz"
              since="2020"
            />
            <View style={styles.descriptionInfo}>
              <Icon style={styles.iconInfo} fill="#bfbfbf" name="info" />
              <Text style={styles.warning}>
                <Text>Esta tarjeta de credito y sus datos son </Text>
                <Text style={styles.strong}>
                  totalmente aleatorios y para fines de desarrollo.
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ zIndex: 0 }}>
            <View style={styles.moneyView}>
              <View style={styles.header}>
                <Text style={styles.title}>Resumen mensual</Text>

                <Button
                  style={{ marginRight: -20 }}
                  appearance="ghost"
                  onPress={() => {
                    setIsVisible(true);
                  }}
                  accessoryRight={() => (
                    <MaterialIcons
                      name="delete-forever"
                      size={24}
                      color="#595959"
                    />
                  )}
                ></Button>
              </View>

              <NumberFormat
                value={summary.avaliable}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"$ "}
                renderText={(value) => (
                  <Text style={styles.avaliable}>{value}</Text>
                )}
              />

              <View style={styles.description}>
                <Icon
                  style={styles.iconAvaliable}
                  fill="#389e0d"
                  name="flash"
                />
                <Text style={styles.miniDescription}>Disponible</Text>
              </View>

              <NumberFormat
                value={summary.spended}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"$ "}
                renderText={(value) => (
                  <Text style={styles.spend}>{value}</Text>
                )}
              />

              <View style={styles.description}>
                <Icon style={styles.icon} fill="#f5222d" name="close-circle" />
                <Text style={styles.miniSpend}> Gastado este mes</Text>
              </View>
            </View>
          </View>
        </View>

        <Modal
          visible={isVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setIsVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.titleModal}>Eliminar todo</Text>
            <Text style={styles.textModal}>
              <Text>¿Estas seguro de que quieres </Text>
              <Text style={{ fontWeight: "bold" }}>
                eliminar todo el historial de transacciones?
              </Text>
            </Text>
            <Button
              status="danger"
              style={styles.buttonModal}
              onPress={() => {
                deleteAllTransactions();
                setIsVisible(false);
              }}
            >
              Borrar historial
            </Button>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

Home.propTypes = {
  summary: PropTypes.any,
  updateAppData: PropTypes.any,
};

export default Home;
