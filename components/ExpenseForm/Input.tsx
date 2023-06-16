import React, { useCallback } from "react";
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
  onChange: (label: string, value: string | number) => void;
  placeholder?: string;
  value: string;
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
  const valueFormat = useCallback(
    (value: string) => {
      if (
        type === "decimal-pad" ||
        type === "number-pad" ||
        type === "numeric"
      ) {
        const parseValue = Number(value);
        return !isNaN(parseValue) ? parseValue : 0;
      }
      return value;
    },
    [value]
  );

  return (
    <View style={className}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={inputClassName}
        keyboardType={type}
        onChangeText={(value) => onChange(label, valueFormat(value))}
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
