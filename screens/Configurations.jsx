import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Card, Text, Divider } from "@ui-kitten/components";

import styles from "../styles/Configurations";

const screenWidth = Dimensions.get("window").width;

const Configurations = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        data: [
          Math.random() * 1000,
          Math.random() * 1000,
          Math.random() * 1000,
          Math.random() * 1000,
          Math.random() * 1000,
          Math.random() * 1000,
        ],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#1890ff",
    backgroundGradientFrom: "#1890ff",
    backgroundGradientTo: "#0050b3",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#0050b3",
    },
  };

  return (
    <View style={styles.containerPage}>
      <View style={styles.graphs}>
        <Card>
          <Text style={styles.text} category="h5">
            Gastos anuales
          </Text>
          <Divider />
        </Card>
      </View>
      <LineChart
        style={styles.graph}
        data={data}
        width={screenWidth + 30}
        height={256}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

export default Configurations;
