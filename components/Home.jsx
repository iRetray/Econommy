import React from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import CreditCardGenerator from "creditcard-generator";
import CreditCardDisplay from "react-native-credit-card-display";

import { Button, Icon, List, ListItem, Avatar } from "@ui-kitten/components";

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
              <Text style={styles.work}>Frontend developer</Text>
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
    marginLeft: 10,
    color: "#8c8c8c",
  },
  graphs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
});

export default Home;
