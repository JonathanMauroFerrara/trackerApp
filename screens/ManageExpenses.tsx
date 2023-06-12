import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import IconButton from "../components/ui/IconButton";
import { colorPalette } from "../constants/colors";

const ManageExpenses = ({ route }: any) => {
  const { id, name, date, amount, iconType, category } = route.params;

  const handleDelete = useCallback(() => {}, []);
  const handleEdit = useCallback(() => {}, []);

  return (
    <GradientContainer>
      <Container>
        <View>
          <Text>Name: {name}</Text>
          <Text>Date: {}</Text>
          <Text>Amount: {amount}</Text>
          <Text>Category: {category}</Text>
          <Text>Icon: {iconType}</Text>
        </View>
        <View>
          <IconButton
            size={25}
            onPress={() => handleEdit()}
            btnText="Edit"
            textColor={colorPalette.primary700}
            className={[styles.buttonContainer, styles.editBtn]}
          />
          <IconButton
            size={25}
            onPress={() => handleDelete()}
            btnText="Delete"
            textColor={colorPalette.white}
            className={[styles.buttonContainer, styles.deleteBtn]}
          />
        </View>
      </Container>
    </GradientContainer>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    marginTop: 5,
  },
  editBtn: {
    backgroundColor: colorPalette.white,
  },
  deleteBtn: {
    backgroundColor: colorPalette.red,
  },
});
