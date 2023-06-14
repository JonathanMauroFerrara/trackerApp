import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colorPalette } from "../../constants/colors";
type TIconButton = {
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  className?: StyleProp<ViewStyle>;
  btnText?: string | undefined;
  textColor?: string;
};

const IconButton = ({
  onPress,
  iconName,
  size = 25,
  color = colorPalette.primary500,
  className,
  btnText,
  textColor,
}: TIconButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.btnContainer, className]}>
        {btnText && (
          <Text style={[styles.btnText, { color: textColor }]}>{btnText}</Text>
        )}
        {iconName && (
          <Ionicons
            name={iconName}
            size={size}
            color={color}
            style={{ right: -1.5, top: -1.5, width: size, height: size }}
          />
        )}
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
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  btnText: {
    fontSize: 20,
    marginRight: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});
