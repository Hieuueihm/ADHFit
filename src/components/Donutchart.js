import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

//export các cái dữ liệu này nếu cần.
export const targetAmount = 5000;   // cái này là target
export const spentAmount = 0     //  Cai nay la so buoc chan chay duoc 

const Donutchart = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const percentage = (spentAmount / targetAmount) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="180" width="180" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#6ce5e8"
              fill="transparent"
              strokeWidth="30"
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#41b8d5"
              fill="transparent"
              strokeWidth="30"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <Text style={styles.text}>{spentAmount}steps</Text>
      </View>
    </View>
  );
};

export default Donutchart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#394867",
  },
});