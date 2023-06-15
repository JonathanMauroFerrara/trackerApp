import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type TSelect = {
  label: string;
  onChange: (label: string, value: string) => void;
  placeholder?: string;
  value: string | undefined;
  btnStyle?: StyleProp<ViewStyle>;
  dropDownStyle?: StyleProp<ViewStyle>;
  items: string[];
  textColor?: string;
};

const Select = ({
  label,
  onChange,
  value,
  items,
  btnStyle,
  dropDownStyle,
  placeholder,
  textColor,
}: TSelect) => {
  return (
    <SelectDropdown
      data={items}
      onSelect={(selecteditem, index) => onChange(label, selecteditem)}
      buttonStyle={btnStyle}
      dropdownStyle={dropDownStyle}
      defaultButtonText={value ?? placeholder}
      buttonTextStyle={{ color: textColor, fontSize: 24 }}
      rowTextStyle={{ color: textColor }}
    />
  );
};

export default Select;
