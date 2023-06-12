import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

const Container = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
