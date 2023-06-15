import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import ExpensesForm from "../components/ExpenseForm/ExpensesForm";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import IconButton from "../components/ui/IconButton";
import { colorPalette } from "../constants/colors";

const AddExpenses = () => {
  const [isModalVisibile, setIsModalVisible] = useState(false);

  return (
    <>
      <GestureRecognizer onSwipeDown={() => setIsModalVisible(false)}>
        <Pressable>
          <IconButton
            iconName="add"
            size={50}
            onPress={() => setIsModalVisible(true)}
            color={colorPalette.white}
            className={styles.closeButtonContainer}
          />
        </Pressable>

        <Modal animationType="slide" visible={isModalVisibile}>
          <GradientContainer
            firstColorGradient={colorPalette.primary300}
            secondColorGradient={colorPalette.primary500}
          >
            <Container>
              <View style={{ alignSelf: "flex-end" }}>
                <IconButton
                  iconName="close-circle-outline"
                  color={colorPalette.white}
                  size={50}
                  onPress={() => setIsModalVisible(false)}
                />
              </View>

              <View style={styles.modalContainer}>
                <ExpensesForm
                  className={styles.formContainer}
                  handleModal={setIsModalVisible}
                />
              </View>
            </Container>
          </GradientContainer>
        </Modal>
      </GestureRecognizer>
    </>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  closeButtonContainer: {
    backgroundColor: colorPalette.primary500,
    borderRadius: 50,
    top: -20,
    borderWidth: 1,
    borderColor: colorPalette.white,
  },
  modalContainer: {
    flex: 1,
  },
  addButton: {
    backgroundColor: colorPalette.white,
    borderRadius: 10,
  },
  formContainer: {
    alignSelf: "center",
    marginTop: 60,
    width: "90%",
    height: "90%",
  },
});
