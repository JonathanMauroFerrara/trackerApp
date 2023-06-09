import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colorPalette } from "../../constants/colors";
type TIconButton = {
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  className?: StyleProp<ViewStyle>;
};

const IconButton = ({
  onPress,
  iconName = "alarm",
  size = 25,
  color = colorPalette.primary500,
  className,
}: TIconButton) => {
  return (
    <Pressable onPress={onPress}>
      <View style={className}>
        <Ionicons
          name={iconName}
          size={size}
          color={color}
          style={{ right: -1.5, top: -1.5, width: size, height: size }}
        />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
