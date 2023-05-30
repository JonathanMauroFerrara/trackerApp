import React from "react";
import { Button, StyleSheet } from "react-native";

function CustomTabBar({ navigation }: any) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("SomeScreen");
      }}
    />
  );
}

export default CustomTabBar;

const styles = StyleSheet.create({});
