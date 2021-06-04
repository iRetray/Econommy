import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import CreditCardGenerator from "creditcard-generator";
import CreditCardDisplay from "react-native-credit-card-display";
import { Icon, Avatar, Button } from "@ui-kitten/components";

import { Ionicons } from "@expo/vector-icons";

import profilePhoto from "../assets/profilePhoto.jpg";

const Home = () => {
  const getRandomCC = () => {
    return CreditCardGenerator.GenCC();
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
          <View style={styles.moneyView}>
            <Text style={styles.title}>Resumen mensual</Text>
            <Text style={styles.avaliable}>{"$4.300.000"}</Text>
            <View style={styles.description}>
              <Icon style={styles.iconAvaliable} fill="#389e0d" name="flash" />
              <Text style={styles.miniDescription}>Disponible</Text>
            </View>
            <Text style={styles.spend}>{"$850.000"}</Text>
            <View></View>
            <View style={styles.description}>
              <Icon style={styles.icon} fill="#f5222d" name="close-circle" />
              <Text style={styles.miniSpend}> Gastado este mes</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              accessoryLeft={() => (
                <Icon
                  name="plus-circle-outline"
                  style={{ width: 32, height: 32 }}
                  fill="white"
                />
              )}
            >
              <Text style={styles.textButton}>Añadir movimiento</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  text: {
    textAlign: "left",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  name: {
    marginLeft: 5,
    fontSize: 25,
    fontWeight: "100",
  },
  work: {
    color: "#8c8c8c",
  },
  graphs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  warning: {
    textAlign: "center",
    fontSize: 12,
    color: "#8c8c8c",
  },
  strong: {
    fontWeight: "bold",
  },
  title: {
    color: "#bfbfbf",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  moneyView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: "10%",
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avaliable: {
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
  },
  miniDescription: {
    fontSize: 17,
    color: "#52c41a",
    fontWeight: "bold",
    alignSelf: "center",
  },
  spend: {
    fontSize: 35,
    color: "#434343",
    alignSelf: "center",
    fontWeight: "bold",
  },
  miniSpend: {
    fontSize: 13,
    color: "#f5222d",
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  descriptionInfo: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconWork: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  iconAvaliable: {
    width: 20,
    height: 20,
  },
  iconInfo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 70,
  },
  textButton: {
    fontSize: 20,
  },
  button: {
    borderRadius: 30,
  },
});

export default Home;
