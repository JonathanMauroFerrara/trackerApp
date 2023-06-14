import React from "react";
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { colorPalette } from "../../constants/colors";

type TInput = {
  label: string;
  type?: KeyboardType | undefined;
  onChange: (label: string, value: string) => void;
  placeholder?: string;
  value: string | undefined;
  className?: StyleProp<ViewStyle>;
  inputClassName?: StyleProp<ViewStyle>;
};

const Input = ({
  label,
  type = "default",
  onChange,
  placeholder = "",
  value,
  className,
  inputClassName,
}: TInput) => {
  return (
    <View style={className}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={inputClassName}
        keyboardType={type}
        onChangeText={(value) => onChange(label, value)}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colorPalette.primary500}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    textTransform: "capitalize",
    marginBottom: 10,
    color: colorPalette.white,
    fontSize: 20,
    alignSelf: "center",
  },
});
