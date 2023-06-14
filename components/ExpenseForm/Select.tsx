import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type TPicker = {
  label: string;
  onChange: (label: string, value: string) => void;
  placeholder?: string;
  value: string | undefined;
  className?: StyleProp<ViewStyle>;
  inputClassName?: StyleProp<ViewStyle>;
  items: string[];
};

const Select = ({
  label,
  onChange,
  placeholder,
  value,
  className,
  inputClassName,
  items,
}: TPicker) => {
  return (
    <SelectDropdown
      
      data={items}
      onSelect={(selecteditem, index) => onChange(label, selecteditem)}
      buttonTextAfterSelection={(selectedItem, index) => selectedItem}
    />
  );
};

export default Select;
