import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";

import styles from "../../styles/RegisterUser";

const RegisterUser = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Controla tus gastos y tus ingresos</Text>
        <Button style={styles.playButton} size="giant">
          <View style={styles.buttonContainer}>
            <AntDesign name="play" size={40} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.textPlay}>Iniciar</Text>
            </View>
          </View>
        </Button>
      </View>
    </>
  );
};

RegisterUser.propTypes = {
  navigation: PropTypes.any,
};

export default RegisterUser;
