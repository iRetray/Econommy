import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <>
      <View>
        <View style={styles.header}>
          <Text>Buena esa Nico</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#52c41a",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
});

export default Home;
