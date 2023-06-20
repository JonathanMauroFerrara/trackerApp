import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { colorPalette } from "../../../constants/colors";
import { TGradientContainerProps } from "../../../types";

const GradientContainer = ({
  children,
  firstColorGradient = colorPalette.primary300,
  secondColorGradient = colorPalette.primary900,
}: PropsWithChildren<TGradientContainerProps>) => {
  return (
    <LinearGradient
      colors={[firstColorGradient, secondColorGradient]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
